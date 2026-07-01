import type { CardBg } from '@/types/portfolio'

interface TechReadoutProps {
  topLeft?: string
  topRight?: string
  bottomLeft?: string
  bottomRight?: string
  variant?: CardBg
}

const readoutClass: Record<CardBg, string> = {
  black: 'card-readout-dark',
  white: 'card-readout-light',
  red: 'card-readout-red',
}

export function TechReadout({ topLeft, topRight, bottomLeft, bottomRight, variant = 'black' }: TechReadoutProps) {
  const cls = `absolute z-30 ${readoutClass[variant]}`
  return (
    <>
      {topLeft && <span className={`${cls} left-4 top-4`}>{topLeft}</span>}
      {topRight && <span className={`${cls} right-4 top-4`}>{topRight}</span>}
      {bottomLeft && <span className={`${cls} bottom-4 left-4`}>{bottomLeft}</span>}
      {bottomRight && <span className={`${cls} bottom-4 right-4`}>{bottomRight}</span>}
    </>
  )
}
