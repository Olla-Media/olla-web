import { Link } from 'react-router-dom'
import mark from '@/assets/logo.png'
import { cn } from '@/lib/utils'

type LogoProps = {
  variant?: 'nav' | 'sidebar'
  className?: string
}

export function Logo({ variant = 'nav', className }: LogoProps) {
  if (variant === 'sidebar') {
    return (
      <Link
        to="/"
        className={cn('flex flex-col items-start gap-2 no-underline', className)}
      >
        <img src={mark} alt="" className="size-[74px] rounded-[22%]" />
        <span className="font-heading text-[26px] leading-none font-bold tracking-tight text-foreground">
          olla
        </span>
      </Link>
    )
  }

  return (
    <Link
      to="/"
      className={cn('flex items-center gap-2 text-white no-underline', className)}
    >
      <img src={mark} alt="" className="size-8 rounded-[24%]" />
      <span className="font-heading text-[22px] leading-none font-semibold tracking-tight">
        olla
      </span>
    </Link>
  )
}
