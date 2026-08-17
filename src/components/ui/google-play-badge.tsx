import { cn } from '@/lib/utils'

type GooglePlayBadgeProps = {
  href?: string
  className?: string
}

export function GooglePlayBadge({
  href = 'https://play.google.com/store',
  className,
}: GooglePlayBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Get it on Google Play"
      className={cn(
        'inline-flex items-center gap-3 rounded-md border border-white/70 bg-black px-4 py-2 text-white no-underline transition-opacity hover:opacity-90',
        className
      )}
    >
      <svg viewBox="0 0 24 26" className="h-7 w-6 shrink-0" aria-hidden>
        <path d="M1.6.4 14.3 13 1.6 25.6c-.4-.3-.6-.8-.6-1.4V1.8c0-.6.2-1.1.6-1.4Z" fill="#00D0FF" />
        <path d="m16.9 10.4 3.8 2.1c.9.5.9 1.5 0 2l-3.8 2.1L13.1 13l3.8-2.6Z" fill="#FFD400" />
        <path d="M2.9.1 16.9 10.4 13.1 13 1.6.4c.3-.3.8-.4 1.3-.3Z" fill="#00E17E" />
        <path d="M13.1 13l3.8 2.6L2.9 25.9c-.5.1-1 0-1.3-.3L13.1 13Z" fill="#FF4E52" />
      </svg>
      <span className="flex flex-col leading-tight">
        <span className="text-[9px] tracking-[0.12em] uppercase">Get it on</span>
        <span className="text-[17px] font-semibold">Google Play</span>
      </span>
    </a>
  )
}
