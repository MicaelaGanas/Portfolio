import { useState, type MouseEvent } from 'react'
import { navLinks } from '@/data/portfolio'
import { scrollToSection } from '@/utils/scrollToSection'

export function Header() {
  const [open, setOpen] = useState(false)

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    scrollToSection(href)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-nuclear-white/10 bg-nuclear-black">
      <div className="mx-auto flex max-w-site items-center justify-between px-5 py-5 md:px-8 lg:px-10">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="font-display text-4xl tracking-wider text-nuclear-white"
        >
          MIKA<span className="text-nuclear-red">.</span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-nuclear-white/55 transition-colors hover:text-nuclear-red"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`block h-0.5 w-7 bg-nuclear-white transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-7 bg-nuclear-white transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-7 bg-nuclear-white transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      <nav
        className={`overflow-hidden border-t border-nuclear-white/10 transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div className="flex flex-col px-5 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="border-b border-nuclear-white/8 py-4 font-mono text-sm uppercase tracking-[0.15em] text-nuclear-white/70"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
