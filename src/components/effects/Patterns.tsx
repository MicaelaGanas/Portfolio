import { useId } from 'react'
import { motion } from 'framer-motion'

interface PatternProps {
  className?: string
  opacity?: number
}

export function DotGrid({ className = '', opacity = 0.08 }: PatternProps) {
  const id = useId()
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <pattern id={id} width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} className="text-nuclear-black" />
    </svg>
  )
}

export function DiagonalStripes({ className = '', opacity = 0.12 }: PatternProps) {
  const id = useId()
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <pattern id={id} width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="12" stroke="currentColor" strokeWidth="4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} className="text-nuclear-black" />
    </svg>
  )
}

export function PerforationLine({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute bottom-0 top-0 z-20 w-3 ${className}`}
      aria-hidden="true"
      style={{
        backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)',
        backgroundSize: '6px 10px',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat-y',
      }}
    />
  )
}

export function CornerBrackets({ className = '', color = '#D31027' }: PatternProps & { color?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 6 L0 0 L6 0" fill="none" stroke={color} strokeWidth="0.4" opacity="0.6" vectorEffect="non-scaling-stroke" />
      <path d="M94 0 L100 0 L100 6" fill="none" stroke={color} strokeWidth="0.4" opacity="0.6" vectorEffect="non-scaling-stroke" />
      <path d="M0 94 L0 100 L6 100" fill="none" stroke={color} strokeWidth="0.4" opacity="0.6" vectorEffect="non-scaling-stroke" />
      <path d="M94 100 L100 100 L100 94" fill="none" stroke={color} strokeWidth="0.4" opacity="0.6" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

export function ScanLines({ className = '', opacity = 0.06 }: PatternProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden="true"
      style={{
        opacity,
        backgroundImage:
          'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.04) 4px)',
      }}
    />
  )
}

export function HalftoneField({ className = '', opacity = 0.15 }: PatternProps) {
  const dots = Array.from({ length: 12 }, (_, row) =>
    Array.from({ length: 20 }, (_, col) => ({
      cx: col * 14 + 7,
      cy: row * 14 + 7,
      r: 1 + (row % 3) * 0.3,
      o: 0.2 + ((row + col) % 5) * 0.12,
    })),
  ).flat()

  return (
    <svg className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} aria-hidden="true" style={{ opacity }}>
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill="#D31027" opacity={d.o} />
      ))}
    </svg>
  )
}

export function Crosshair({ className = '', size = 80 }: PatternProps & { size?: number }) {
  const h = size / 2
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <circle cx={h} cy={h} r={h - 4} fill="none" stroke="#D31027" strokeWidth="1" opacity="0.4" />
      <circle cx={h} cy={h} r={h / 3} fill="none" stroke="#D31027" strokeWidth="1" opacity="0.6" />
      <line x1={h} y1="4" x2={h} y2={size - 4} stroke="#D31027" strokeWidth="1" opacity="0.5" />
      <line x1="4" y1={h} x2={size - 4} y2={h} stroke="#D31027" strokeWidth="1" opacity="0.5" />
      <circle cx={h} cy={h} r="2" fill="#D31027" />
    </svg>
  )
}

export function TicketStamp({ label = 'OPEN TO WORK', className = '' }: { label?: string; className?: string }) {
  return (
    <motion.div
      className={`pointer-events-none select-none ${className}`}
      initial={{ rotate: -12, opacity: 0.7 }}
      whileInView={{ rotate: -8 }}
      aria-hidden="true"
    >
      <div
        className="border-[3px] border-nuclear-red px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-nuclear-red"
        style={{ borderRadius: '4px', outline: '2px solid rgba(211,16,39,0.3)', outlineOffset: '3px' }}
      >
        {label}
      </div>
    </motion.div>
  )
}

export function SectionDivider() {
  return (
    <div className="relative my-4 flex items-center gap-4" aria-hidden="true">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-nuclear-red/40 to-nuclear-red/40" />
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rotate-45 bg-nuclear-red/60" />
        ))}
      </div>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-nuclear-red/40 to-nuclear-red/40" />
    </div>
  )
}

export function WatermarkText({ text, className = '' }: { text: string; className?: string }) {
  return (
    <span
      className={`pointer-events-none absolute select-none font-display uppercase leading-none ${className}`}
      aria-hidden="true"
    >
      {text}
    </span>
  )
}

export function BlueprintGrid({ className = '', opacity = 0.04 }: PatternProps) {
  const id = useId()
  return (
    <svg className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} aria-hidden="true" style={{ opacity }}>
      <defs>
        <pattern id={id} width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D31027" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}

export function DataStream({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden="true"
      style={{
        opacity: 0.25,
        backgroundImage:
          'repeating-linear-gradient(90deg, transparent, transparent calc(11.11% - 1px), rgba(211,16,39,0.22) calc(11.11% - 1px), rgba(211,16,39,0.22) 11.11%)',
      }}
    />
  )
}
