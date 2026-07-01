import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'
import { TechReadout } from '@/components/effects/TechReadout'
import type { CardBg } from '@/types/portfolio'

interface NuclearCardProps extends HTMLMotionProps<'article'> {
  bg?: CardBg
  children: ReactNode
  className?: string
  readout?: {
    topLeft?: string
    topRight?: string
    bottomLeft?: string
    bottomRight?: string
  }
  id?: string
}

const bgMap: Record<CardBg, string> = {
  black: 'bg-nuclear-dark border-nuclear-white/15 text-nuclear-white',
  white: 'bg-nuclear-white border-nuclear-black/10 text-nuclear-ink',
  red: 'bg-nuclear-red border-nuclear-black/25 text-nuclear-black',
}

const wrapMap: Record<CardBg, string> = {
  black: 'plastic-wrap-dark',
  white: 'plastic-wrap-light',
  red: 'plastic-wrap-red',
}

export function NuclearCard({
  bg = 'black',
  children,
  className = '',
  readout,
  id,
  ...motionProps
}: NuclearCardProps) {
  return (
    <motion.article
      id={id}
      className={`nuclear-card relative overflow-hidden rounded-card border transition-transform duration-200 hover:scale-[1.015] hover:shadow-[0_0_40px_rgba(211,16,39,0.2)] motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:hover:shadow-none ${bgMap[bg]} ${className}`}
      {...motionProps}
    >
      <div className={`pointer-events-none absolute inset-0 z-10 ${wrapMap[bg]}`} />
      {readout && <TechReadout {...readout} variant={bg} />}
      {children}
    </motion.article>
  )
}
