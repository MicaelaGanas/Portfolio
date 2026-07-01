import { type MouseEvent } from 'react'
import { scrollToSection } from '@/utils/scrollToSection'

export function Footer() {
  const year = new Date().getFullYear()

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    scrollToSection(href)
  }

  return (
    <footer className="relative overflow-hidden border-t border-nuclear-white/10 py-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle, #D31027 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />
      <div className="relative mx-auto flex max-w-site flex-col items-center justify-between gap-4 px-5 md:flex-row md:px-8">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="font-display text-2xl tracking-wider text-nuclear-white"
        >
          MIKA<span className="text-nuclear-red">.</span>
        </a>
        <div className="hidden items-center gap-2 md:flex" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-3 w-px bg-nuclear-white/15" style={{ height: 8 + (i % 3) * 4 }} />
          ))}
        </div>
        <small className="font-mono text-[10px] uppercase tracking-widest text-nuclear-white/40">
          © {year} Micaela Ganas — Built with React & TypeScript
        </small>
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex h-10 w-10 items-center justify-center border border-nuclear-white/20 font-mono text-sm text-nuclear-white/60 transition-colors hover:border-nuclear-red hover:text-nuclear-red"
          aria-label="Back to top"
        >
          ↑
        </a>
      </div>
    </footer>
  )
}
