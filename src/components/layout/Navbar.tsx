import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Logo } from '@/components/ui/logo'
import { navLinks } from '@/data/site'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav-gradient">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                cn(
                  'text-[15px] text-white/90 no-underline transition-colors hover:text-white',
                  isActive && 'font-semibold text-white'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/15 hover:text-white md:hidden"
              />
            }
          >
            <MenuIcon />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col px-2" aria-label="Mobile">
              {navLinks.map((link) => (
                <SheetClose
                  key={link.to}
                  render={
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        cn(
                          'rounded-md px-3 py-2.5 text-[15px] no-underline hover:bg-accent hover:text-accent-foreground',
                          isActive && 'bg-accent font-semibold text-accent-foreground'
                        )
                      }
                    />
                  }
                >
                  {link.label}
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
