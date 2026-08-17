import { GooglePlayBadge } from '@/components/ui/google-play-badge'
import hero from '@/assets/hero.png'

const bullets = [
  <>
    Send and receive messages <em>fast</em>
  </>,
  <>Send self-destructing messages with HepaSnap</>,
  <>Share your special moments with Olla Moments</>,
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={hero}
        alt=""
        className="absolute inset-0 size-full object-cover object-[22%_center]"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/55 to-black/30" />
      <div className="relative mx-auto flex min-h-[480px] max-w-6xl flex-col justify-center px-5 py-16 md:min-h-[600px] md:px-8">
        <div className="animate-fade-up max-w-xl">
          <h1 className="font-heading text-[38px] leading-[1.08] font-medium text-brand-green sm:text-[46px] md:text-[56px]">
            Life is better.
            <br />
            With friends.
          </h1>
          <ul className="mt-7 flex flex-col gap-2 text-[16px] text-white md:text-[18px]">
            {bullets.map((bullet, index) => (
              <li key={index}>- {bullet}</li>
            ))}
          </ul>
          <div className="mt-9 flex flex-col items-start gap-3">
            <p className="text-[13px] font-bold tracking-[0.18em] text-white">GET THE APP</p>
            <GooglePlayBadge />
          </div>
        </div>
      </div>
    </section>
  )
}
