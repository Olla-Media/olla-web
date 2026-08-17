import { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'
import { features } from '@/data/features'
import { cn } from '@/lib/utils'

export function FeatureCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    api.on('select', onSelect)
    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  return (
    <section className="bg-background py-14 md:py-20">
      <Carousel setApi={setApi} opts={{ loop: true }} className="mx-auto max-w-6xl px-5 md:px-8">
        <CarouselContent>
          {features.map((feature) => (
            <CarouselItem key={feature.id}>
              <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
                <div>
                  <h2 className="font-heading text-[34px] leading-tight font-medium text-brand-green md:text-[42px]">
                    {feature.title}
                  </h2>
                  <p className="mt-2 text-[17px] text-secondary-foreground">{feature.kicker}</p>
                  <p className="mt-5 max-w-md text-[15px] leading-7 text-muted-foreground">
                    {feature.body}
                  </p>
                </div>
                <img
                  src={feature.image}
                  alt=""
                  className="mx-auto max-h-[420px] w-full object-contain md:max-h-[500px]"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-10 flex items-center justify-center gap-3">
        {features.map((feature, index) => (
          <button
            key={feature.id}
            type="button"
            aria-label={`Show ${feature.title}`}
            aria-current={index === current ? 'true' : undefined}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              'size-3 rounded-full border-2 border-primary transition-colors',
              index === current ? 'bg-primary' : 'bg-transparent'
            )}
          />
        ))}
      </div>
    </section>
  )
}
