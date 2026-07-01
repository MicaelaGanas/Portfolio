import { motion } from 'framer-motion'
import { CornerBrackets } from '@/components/effects/Patterns'
import { HalftoneSpiral, SpiralDots, TopoWaves } from '@/components/graphics/NuclearGraphics'
import { NuclearCard } from '@/components/ui/NuclearCard'
import type { CardBg, CardGraphic, Project } from '@/types/portfolio'

interface ProjectCardProps {
  project: Project
  variant: 'featured' | 'course'
  index: number
  graphic?: CardGraphic
  bg?: CardBg
}

const graphicMap = {
  spiral: SpiralDots,
  topo: TopoWaves,
  halftone: HalftoneSpiral,
}

/** Readable text styles — only black or white panels, never red */
const contentStyle = {
  black: {
    panel: 'bg-nuclear-dark',
    title: 'text-nuclear-white',
    desc: 'text-nuclear-white/65',
    live: 'bg-nuclear-red text-nuclear-white',
    source: 'border-nuclear-white/25 text-nuclear-white/80',
    sourceHover: { borderColor: '#D31027', color: '#D31027' },
    brackets: '#F2F2F2',
  },
  white: {
    panel: 'bg-nuclear-white',
    title: 'text-nuclear-ink',
    desc: 'text-nuclear-ink/70',
    live: 'bg-nuclear-red text-nuclear-white',
    source: 'border-nuclear-black/20 text-nuclear-ink/75',
    sourceHover: { borderColor: '#D31027', color: '#D31027' },
    brackets: '#D31027',
  },
} as const

export function ProjectCard({ project, variant, index, graphic, bg = 'black' }: ProjectCardProps) {
  const Graphic = graphic ? graphicMap[graphic] : null
  const isRedAccent = bg === 'red'
  const contentKey = bg === 'white' ? 'white' : 'black'
  const style = contentStyle[contentKey]

  return (
    <NuclearCard
      bg={contentKey}
      className={`group flex min-h-[340px] flex-col ${isRedAccent ? 'shadow-[inset_0_0_0_1px_rgba(211,16,39,0.35)]' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {isRedAccent && (
        <div className="absolute left-0 right-0 top-0 z-20 h-1 bg-nuclear-red" aria-hidden="true" />
      )}

      <CornerBrackets color={style.brackets} className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative h-44 overflow-hidden md:h-48">
        <span className="card-readout-dark absolute left-3 top-3 z-10">
          {variant === 'featured' ? 'FEAT.PROJ' : 'COURSE.WRK'}
        </span>
        <span className="card-readout-dark absolute right-3 top-3 z-10">
          IDX.{String(index + 1).padStart(2, '0')}
        </span>
        {Graphic && (
          <div className={`pointer-events-none absolute inset-0 opacity-25 ${contentKey === 'white' ? 'invert' : ''}`}>
            <Graphic />
          </div>
        )}
        <img
          src={project.image}
          alt={project.title}
          loading={index < 2 && variant === 'featured' ? 'eager' : 'lazy'}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-nuclear-black/85 via-nuclear-black/25 to-transparent" />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-nuclear-red px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-nuclear-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className={`relative z-20 flex flex-1 flex-col p-5 pt-4 md:p-6 md:pt-5 ${style.panel}`}>
        {isRedAccent && (
          <div className="absolute left-0 top-0 h-full w-1 bg-nuclear-red" aria-hidden="true" />
        )}
        <h3 className={`font-display text-3xl tracking-wide ${style.title}`}>{project.title}</h3>
        <p className={`mt-3 flex-1 font-mono text-sm leading-relaxed ${style.desc}`}>
          {project.description}
        </p>
        <div className="relative z-20 mt-5 flex gap-2">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-wider ${style.live}`}
              whileHover={{ scale: 1.05 }}
            >
              {project.liveLabel ?? 'Live ↗'}
            </motion.a>
          )}
          {project.sourceUrl && (
            <motion.a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`border-2 px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-wider ${style.source}`}
              whileHover={style.sourceHover}
            >
              Source
            </motion.a>
          )}
        </div>
      </div>
    </NuclearCard>
  )
}
