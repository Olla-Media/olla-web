import { cn } from '@/lib/utils'

type DateBadgeProps = {
  day: string
  month: string
  year: string
  className?: string
}

export function DateBadge({ day, month, year, className }: DateBadgeProps) {
  return (
    <div
      className={cn(
        'flex size-16 shrink-0 flex-col items-center justify-center rounded-full bg-[#dbe6ea] text-foreground',
        className
      )}
    >
      <span className="font-heading text-xl leading-none font-semibold">{day}</span>
      <span className="text-[10px] font-semibold tracking-wide uppercase">{month}</span>
      <span className="text-[10px] text-muted-foreground">{year}</span>
    </div>
  )
}
