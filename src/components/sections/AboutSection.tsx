import { motion } from 'framer-motion'
import { BlueprintGrid, DotGrid } from '@/components/effects/Patterns'
import { ChevronCorridor, LightningHalftone } from '@/components/graphics/NuclearGraphics'
import { NuclearCard } from '@/components/ui/NuclearCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { aboutText, achievements, profile, stats, techStack } from '@/data/portfolio'
import { useCounter } from '@/hooks/useCounter'

function StatBlock({ label, value, display }: { label: string; value: number | null; display?: string }) {
  const counter = useCounter(value)
  const shown = display ?? (value !== null ? `${counter.value}+` : '∞')

  return (
    <div ref={counter.ref} className="flex flex-col items-center justify-center border border-nuclear-white/12 p-6 text-center">
      <strong className="font-display text-5xl leading-none text-nuclear-red md:text-6xl">{shown}</strong>
      <span className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-nuclear-white/55">{label}</span>
    </div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="section-wrap">
      <SectionHeader tag="About Me" title="Who I Am" subtitle="前端 · FULL STACK · PM" />

      <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
        <NuclearCard
          bg="white"
          className="relative min-h-[420px] overflow-hidden p-8 md:p-10"
          readout={{ topLeft: 'BIO.DATA', topRight: 'CS/2027', bottomLeft: 'ACCESSIBLE', bottomRight: 'ANIMATED' }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <DotGrid opacity={0.05} className="text-nuclear-black" />
          <BlueprintGrid opacity={0.04} />

          <div className="pointer-events-none absolute right-6 top-16 h-40 w-24 opacity-[0.18]">
            <LightningHalftone />
          </div>

          <div className="relative z-20">
            {aboutText.map((p, i) => (
              <p key={i} className="body-on-light mb-5 last:mb-0">
                {p}
              </p>
            ))}

            <div className="mb-8 mt-8 grid grid-cols-2 gap-6 border-t border-nuclear-black/10 pt-6">
              <div>
                <span className="label-on-light">Degree</span>
                <p className="mt-1 font-mono text-sm font-medium text-nuclear-ink">{profile.degree}</p>
              </div>
              <div>
                <span className="label-on-light">Year</span>
                <p className="mt-1 font-mono text-sm font-medium text-nuclear-ink">{profile.year}</p>
              </div>
            </div>

            <h4 className="mb-4 font-display text-display-md text-nuclear-ink">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((skill) => (
                <span key={skill} className="tag-chip-light">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </NuclearCard>

        <div className="flex flex-col gap-5 lg:gap-6">
          <NuclearCard
            bg="black"
            className="relative overflow-hidden p-8 md:p-10"
            readout={{ topLeft: 'METRICS', topRight: 'LIVE', bottomLeft: 'COUNT.UP', bottomRight: 'STATS' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              aria-hidden="true"
              style={{
                backgroundImage: `repeating-linear-gradient(90deg, #D31027 0px, #D31027 1px, transparent 1px, transparent 40px),
                  repeating-linear-gradient(0deg, #D31027 0px, #D31027 1px, transparent 1px, transparent 40px)`,
              }}
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.12]">
              <ChevronCorridor />
            </div>
            <div className="relative z-20 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <StatBlock key={s.label} label={s.label} value={s.value} display={s.display} />
              ))}
            </div>
          </NuclearCard>

          <NuclearCard
            bg="red"
            className="relative overflow-hidden p-8 md:p-10"
            readout={{ topLeft: 'ACHIEVE', topRight: 'CERT', bottomLeft: 'HONORS', bottomRight: 'AWARDS' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              aria-hidden="true"
              style={{
                backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 6px, rgba(0,0,0,0.4) 6px, rgba(0,0,0,0.4) 7px)`,
              }}
            />
            <h4 className="relative z-20 mb-5 font-display text-display-md text-nuclear-black">Achievements</h4>
            <ul className="relative z-20 space-y-3">
              {achievements.map((a) => (
                <motion.li
                  key={a.label}
                  className="flex items-start gap-3 font-mono text-sm text-nuclear-black"
                  whileHover={{ x: 4 }}
                >
                  <span className="text-base">{a.icon}</span>
                  <span>{a.label}</span>
                </motion.li>
              ))}
            </ul>
          </NuclearCard>
        </div>
      </div>
    </section>
  )
}
