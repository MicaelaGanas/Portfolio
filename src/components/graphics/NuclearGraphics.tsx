export function PortalEye() {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
      {[80, 60, 40, 20].map((r, i) => (
        <ellipse
          key={r}
          cx="100"
          cy="100"
          rx={r}
          ry={r * 0.55}
          fill="none"
          stroke="#F2F2F2"
          strokeWidth="1"
          opacity={0.35 + i * 0.1}
        />
      ))}
      <circle cx="100" cy="100" r="8" fill="#D31027" opacity="0.95" />
    </svg>
  )
}

export function SpiralDots() {
  const dots = Array.from({ length: 60 }, (_, i) => {
    const angle = (i / 60) * Math.PI * 6
    const r = 10 + i * 1.8
    return { x: 100 + Math.cos(angle) * r, y: 100 + Math.sin(angle) * r, i }
  })

  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
      {dots.map(({ x, y, i }) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={1.5 + (i % 3) * 0.5}
          fill="#D31027"
          opacity={0.35 + (i % 5) * 0.12}
        />
      ))}
    </svg>
  )
}

export function TopoWaves() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => (
        <path
          key={i}
          d={`M0 ${60 + i * 4} Q50 ${40 + i * 3} 100 ${60 + i * 2} T200 ${55 + i * 4}`}
          fill="none"
          stroke="#D31027"
          strokeWidth="0.8"
          opacity={0.35 + (i % 4) * 0.12}
        />
      ))}
    </svg>
  )
}

export function HalftoneSpiral() {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
      {Array.from({ length: 80 }, (_, i) => {
        const angle = (i / 80) * Math.PI * 8
        const r = 8 + i * 1.2
        const size = 1 + (i % 4)
        return (
          <circle
            key={i}
            cx={100 + Math.cos(angle) * r}
            cy={100 + Math.sin(angle) * r}
            r={size}
            fill="#000"
            opacity={0.3 + (i / 80) * 0.7}
          />
        )
      })}
    </svg>
  )
}

export function ChevronCorridor() {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} opacity={0.35 + i * 0.12}>
          <path
            d={`M${40 + i * 20} 40 L${100 + i * 10} 100 L${40 + i * 20} 160`}
            fill="none"
            stroke="#D31027"
            strokeWidth="3"
          />
          <path
            d={`M${160 - i * 20} 40 L${100 - i * 10} 100 L${160 - i * 20} 160`}
            fill="none"
            stroke="#D31027"
            strokeWidth="3"
          />
        </g>
      ))}
    </svg>
  )
}

export function RetroSun() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
      <circle cx="160" cy="50" r="25" fill="#D31027" opacity="0.9" />
      <path d="M0 100 L80 70 L120 85 L200 60 L200 120 L0 120 Z" fill="#D31027" opacity="0.6" />
      <path d="M0 110 L60 95 L100 100 L200 80" fill="none" stroke="#D31027" strokeWidth="2" />
    </svg>
  )
}

export function LightningHalftone() {
  return (
    <svg viewBox="0 0 120 200" className="h-full w-full" aria-hidden="true">
      <path d="M60 10 L35 90 L55 90 L30 190 L80 80 L55 80 L75 10 Z" fill="none" stroke="#D31027" strokeWidth="2" />
      {Array.from({ length: 30 }, (_, i) => (
        <circle
          key={i}
          cx={20 + (i % 6) * 14}
          cy={30 + Math.floor(i / 6) * 28}
          r={1.5}
          fill="#D31027"
          opacity={0.3 + ((i * 7) % 5) * 0.1}
        />
      ))}
    </svg>
  )
}
