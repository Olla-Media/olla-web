import { useEffect, type ReactNode } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { Separator } from '@/components/ui/separator'
import { Logo } from '@/components/ui/logo'
import { aboutLinks } from '@/data/site'
import { cn } from '@/lib/utils'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { Seo } from '@/components/seo/Seo'

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-svh flex-col">
      <Seo />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function AboutSidebar() {
  return (
    <aside className="w-full shrink-0 md:w-48">
      <Logo variant="sidebar" />
      <Separator className="mt-4 mb-5 max-w-36 bg-primary" />
      <nav className="flex flex-row flex-wrap gap-1 md:flex-col" aria-label="About">
        {aboutLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              cn(
                'w-fit rounded-md px-3 py-1.5 text-[13px] font-bold tracking-[0.06em] uppercase no-underline transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-secondary-foreground hover:bg-accent'
              )
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export function AboutShell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-10 md:flex-row md:gap-14 md:px-8 md:py-14">
      <AboutSidebar />
      <Separator
        orientation="vertical"
        className="hidden self-stretch md:block"
      />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  )
}

export function PageTitle({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <h1
      className={cn(
        'font-heading mb-8 text-4xl font-light tracking-tight text-brand-green md:text-[44px]',
        className
      )}
    >
      {children}
    </h1>
  )
}
