import { useState } from 'react'
import { AboutShell } from '@/components/layout/Layout'
import { ArchiveItem } from '@/components/press/ArchiveItem'
import { DateBadge } from '@/components/press/DateBadge'
import { Empty, EmptyHeader, EmptyTitle } from '@/components/ui/empty'
import { ItemGroup } from '@/components/ui/item'
import { Separator } from '@/components/ui/separator'
import { featuredPress, pressArchives, pressYears } from '@/data/press'
import { cn } from '@/lib/utils'

export function PressPage() {
  const [year, setYear] = useState<(typeof pressYears)[number]>('2016')
  const archives = year === '2016' ? pressArchives : []

  return (
    <AboutShell>
      <h1 className="font-heading mb-8 bg-linear-to-r from-brand-green to-brand-link bg-clip-text text-4xl font-semibold text-transparent md:text-[44px]">
        Press
      </h1>

      <article className="flex flex-col gap-5 sm:flex-row">
        <DateBadge day={featuredPress.day} month={featuredPress.month} year={featuredPress.year} />
        <div>
          <h2 className="font-heading text-2xl font-semibold text-secondary-foreground">
            {featuredPress.title}
          </h2>
          {featuredPress.body?.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-[15px] leading-7">
              {paragraph}
            </p>
          ))}
          {featuredPress.quote ? (
            <blockquote className="mt-6 text-[16px] leading-7 text-primary italic">
              {featuredPress.quote}
            </blockquote>
          ) : null}
        </div>
      </article>

      <div className="mt-14 mb-2 flex items-center gap-4">
        <Separator className="flex-1" />
        <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase">Archives</p>
        <Separator className="flex-1" />
      </div>

      {archives.length === 0 ? (
        <Empty>
          <EmptyHeader>
            <EmptyTitle>No archived posts for {year}</EmptyTitle>
          </EmptyHeader>
        </Empty>
      ) : (
        <ItemGroup>
          {archives.map((post) => (
            <ArchiveItem key={post.id} post={post} />
          ))}
        </ItemGroup>
      )}

      <div className="relative mt-10 pt-6">
        <Separator className="absolute inset-x-0 top-0" />
        <div className="absolute top-[-5px] right-[18%] size-2.5 rounded-full bg-primary" />
        <div className="flex justify-between text-sm text-muted-foreground">
          {pressYears.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => setYear(label)}
              className={cn(label === year && 'font-semibold text-foreground')}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </AboutShell>
  )
}
