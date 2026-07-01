import { HalftoneField, SectionDivider } from '@/components/effects/Patterns'

interface SectionHeaderProps {
  tag: string
  title: string
  subtitle?: string
  id?: string
}

export function SectionHeader({ tag, title, subtitle, id }: SectionHeaderProps) {
  return (
    <div id={id} className="relative mb-10 md:mb-12">
      <div className="pointer-events-none absolute right-0 top-0 h-20 w-40 overflow-hidden opacity-40" aria-hidden="true">
        <HalftoneField />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <span className="inline-block h-2 w-2 bg-nuclear-red" aria-hidden="true" />
          <span className="label-on-light">{tag}</span>
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-nuclear-white/25" aria-hidden="true">
            /////
          </span>
        </div>
        <h2 className="mt-3 font-display text-display-lg text-nuclear-white">{title}</h2>
        {subtitle && (
          <p className="mt-3 font-mono text-sm text-nuclear-white/55">{subtitle}</p>
        )}
        <SectionDivider />
      </div>
    </div>
  )
}
