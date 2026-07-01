import type { CardBg, CardGraphic } from '@/types/portfolio'

export const featuredVariants: Array<{ graphic: CardGraphic; bg: CardBg }> = [
  { graphic: 'spiral', bg: 'black' },
  { graphic: 'topo', bg: 'white' },
  { graphic: 'halftone', bg: 'red' },
]

export const courseVariants: Array<{ graphic: CardGraphic; bg: CardBg }> = [
  { graphic: 'topo', bg: 'black' },
  { graphic: 'halftone', bg: 'white' },
  { graphic: 'spiral', bg: 'red' },
  { graphic: 'topo', bg: 'black' },
  { graphic: 'halftone', bg: 'white' },
  { graphic: 'spiral', bg: 'red' },
]
