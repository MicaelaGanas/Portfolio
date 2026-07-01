import { motion } from 'framer-motion'
import { NuclearCard } from '@/components/ui/NuclearCard'
import type { AwardReflection } from '@/types/portfolio'

interface AwardReflectionPanelProps {
  reflection: AwardReflection
}

export function AwardReflectionPanel({ reflection }: AwardReflectionPanelProps) {
  return (
    <NuclearCard
      bg="white"
      className="award-reflection relative mt-10 overflow-hidden md:mt-12"
      readout={{
        topLeft: 'HCI.LOG',
        topRight: 'INNOV.26',
        bottomLeft: 'REFLECT',
        bottomRight: 'TBHON',
      }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55 }}
    >
      <div className="award-reflection-accent" aria-hidden="true" />

      <div className="award-reflection-grid relative z-20">
        <aside className="award-reflection-aside">
          <span className="label-on-light">Reflection</span>
          <p className="award-reflection-count font-display text-6xl leading-none text-nuclear-red md:text-7xl">
            {String(reflection.awardCount).padStart(2, '0')}
          </p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-nuclear-ink/50">
            Awards · {reflection.event}
          </p>

          <blockquote className="award-reflection-quote mt-8 border-l-2 border-nuclear-red pl-4 font-display text-xl leading-snug text-nuclear-ink md:text-2xl">
            {reflection.quote}
          </blockquote>

          <div className="mt-6 flex flex-wrap gap-2">
            {reflection.tags.map((tag) => (
              <span key={tag} className="tag-chip-light">
                {tag}
              </span>
            ))}
          </div>
        </aside>

        <div className="award-reflection-body">
          <p className="label-on-light mb-4">Our HCI journey with {reflection.project}</p>
          {reflection.paragraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              className="body-on-light mb-5 last:mb-0"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </NuclearCard>
  )
}
