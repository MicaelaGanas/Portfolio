import type { CSSProperties } from 'react'
import { BlueprintGrid, DotGrid } from '@/components/effects/Patterns'
import { ChevronCorridor, LightningHalftone } from '@/components/graphics/NuclearGraphics'
import { AchievementIcon } from '@/components/ui/AchievementIcon'
import { NuclearCard } from '@/components/ui/NuclearCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TechStackCarousel } from '@/components/ui/TechStackCarousel'
import { aboutText, achievements, beyondTechNote, personalInterests, profile, stats } from '@/data/portfolio'
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
      <SectionHeader tag="About Me" title="Who I Am" subtitle="FULL STACK · ML · CLOUD · PM" />

      <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
        <NuclearCard
          bg="white"
          className="relative overflow-hidden p-8 md:p-10"
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

          <div className="relative z-20 flex flex-col gap-8">
            <div>
              {aboutText.map((p, i) => (
                <p key={i} className="body-on-light mb-5 last:mb-0">
                  {p}
                </p>
              ))}

              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-nuclear-black/10 pt-6">
                <div>
                  <span className="label-on-light">Degree</span>
                  <p className="mt-1 font-mono text-sm font-medium text-nuclear-ink">{profile.degree}</p>
                </div>
                <div>
                  <span className="label-on-light">Year</span>
                  <p className="mt-1 font-mono text-sm font-medium text-nuclear-ink">{profile.year}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-nuclear-black/10 pt-6">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <span className="label-on-light">Beyond Code</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-nuclear-black/35">OFF SCREEN</span>
              </div>

              <p className="body-on-light mt-4 max-w-prose text-sm leading-relaxed">{beyondTechNote}</p>

              <div className="mt-6 grid gap-6 sm:grid-cols-[minmax(0,1fr)_9.5rem] md:grid-cols-[minmax(0,1fr)_11rem] lg:grid-cols-[minmax(0,1fr)_12.5rem]">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {personalInterests.map((item) => (
                    <li key={item.tag} className="bio-interest-chip">
                      <span className="bio-interest-tag">{item.tag}</span>
                      <span className="bio-interest-detail">{item.detail}</span>
                    </li>
                  ))}
                </ul>

                <figure className="bio-art-sticker mx-auto sm:mx-0 sm:justify-self-end">
                  <div className="bio-art-tape bio-art-tape-left" aria-hidden="true" />
                  <div className="bio-art-tape bio-art-tape-right" aria-hidden="true" />
                  <img
                    src="/images/bio-interest-art.png"
                    alt="Vintage Japanese-style illustration — a personal art reference"
                    className="bio-art-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="bio-art-caption">ART/REF · 0626</figcaption>
                </figure>
              </div>
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
            className="relative overflow-hidden px-8 py-10 md:px-10 md:py-12"
            readout={{ topLeft: 'ACHIEVE', bottomLeft: 'HONORS', bottomRight: 'STEP.UP' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              aria-hidden="true"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 3px,
                  rgba(0, 0, 0, 0.35) 3px,
                  rgba(0, 0, 0, 0.35) 4px
                )`,
              }}
            />
            <div className="relative z-20">
              <h4 className="font-display text-5xl leading-[0.9] tracking-wide text-nuclear-black md:text-6xl lg:text-7xl">
                ACHIEVEMENTS
              </h4>
              <ol className="achievement-steps mt-8 md:mt-10">
                {achievements.map((a, i) => (
                  <li
                    key={a.label}
                    className="achievement-step"
                    style={{ '--step-index': i } as CSSProperties}
                  >
                    <span className="achievement-step-index" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="achievement-step-body">
                      <span className="achievement-step-icon">
                        <AchievementIcon name={a.icon} />
                      </span>
                      <span className="achievement-step-label">{a.label}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </NuclearCard>
        </div>
      </div>

      <NuclearCard
        bg="black"
        className="relative mt-10 overflow-hidden px-6 py-8 md:mt-12 md:px-10 md:py-10 lg:mt-14"
        readout={{ topLeft: 'STACK', topRight: 'TOOLS', bottomLeft: 'SCROLL', bottomRight: 'SKILLS' }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <TechStackCarousel />
      </NuclearCard>
    </section>
  )
}
