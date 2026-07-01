import { BlueprintGrid, DotGrid } from '@/components/effects/Patterns'

/** Fixed site-wide background texture */
export function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <BlueprintGrid opacity={0.035} />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(211,16,39,0.08), transparent)',
        }}
      />
      <div
        className="absolute left-0 top-0 h-full w-px bg-nuclear-white/5"
        style={{ left: '10%' }}
      />
      <div
        className="absolute right-0 top-0 h-full w-px bg-nuclear-white/5"
        style={{ right: '10%' }}
      />
    </div>
  )
}

/** Light dot grid for white card surfaces */
export function LightSurfacePattern() {
  return <DotGrid opacity={0.06} className="text-nuclear-black" />
}

/** Dark surface halftone accent */
export function DarkSurfacePattern() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.04]"
      aria-hidden="true"
      style={{
        backgroundImage: `radial-gradient(circle, #D31027 1px, transparent 1px)`,
        backgroundSize: '16px 16px',
      }}
    />
  )
}
