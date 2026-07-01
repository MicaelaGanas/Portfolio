import { motion } from 'framer-motion'
import {
  DiagonalStripes,
  DotGrid,
  PerforationLine,
  TicketStamp,
  WatermarkText,
} from '@/components/effects/Patterns'
import { RetroSun } from '@/components/graphics/NuclearGraphics'
import { NuclearCard } from '@/components/ui/NuclearCard'
import { profile } from '@/data/portfolio'

function Barcode() {
  const bars = [3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 3, 1, 2, 4, 1, 3, 2, 1, 3, 2, 4, 1, 2, 3]
  return (
    <div className="flex h-14 items-end gap-px" aria-hidden="true">
      {bars.map((w, i) => (
        <div key={i} className="bg-nuclear-black" style={{ width: w * 2, height: '100%' }} />
      ))}
    </div>
  )
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-nuclear-black/20 px-5 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-nuclear-ink/80"
      whileHover={{ borderColor: '#D31027', color: '#D31027', scale: 1.04 }}
    >
      {label}
    </motion.a>
  )
}

function DateStamp() {
  const now = new Date()
  const date = now.toISOString().slice(0, 10).replace(/-/g, '.')
  return (
    <div className="pointer-events-none font-mono text-[9px] uppercase tracking-[0.3em] text-nuclear-muted" aria-hidden="true">
      ISSUED · {date}
    </div>
  )
}

export function ContactBanner() {
  return (
    <section id="contact" className="section-wrap !pb-20 md:!pb-28">
      <NuclearCard
        bg="white"
        className="overflow-hidden"
        readout={{
          topLeft: 'CONNECT',
          topRight: 'OPEN.SRC',
          bottomLeft: profile.email,
          bottomRight: 'RESUME.PDF',
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="relative grid md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_300px]">
          {/* Left — ticket body */}
          <div className="relative overflow-hidden p-10 md:p-14 lg:p-16">
            <DotGrid opacity={0.07} className="text-nuclear-black" />
            <WatermarkText
              text="CONNECT"
              className="right-4 top-1/2 -translate-y-1/2 text-[clamp(4rem,15vw,10rem)] text-nuclear-black/[0.04]"
            />
            <TicketStamp label="OPEN TO WORK" className="absolute right-8 top-8 hidden md:block" />

            <div className="relative z-20">
              <DateStamp />
              <span className="label-on-light mt-4 block">Let&apos;s Connect</span>
              <h2 className="mt-4 font-display text-display-lg text-nuclear-ink">
                GET IN
                <span className="block text-nuclear-red">TOUCH</span>
              </h2>
              <p className="body-on-light mt-6 max-w-lg">
                Open to collaborations, freelance work, and new opportunities.
              </p>

              <motion.a
                href={`mailto:${profile.email}`}
                className="mt-8 inline-block font-mono text-base font-medium text-nuclear-red underline-offset-4 hover:underline"
                whileHover={{ x: 4 }}
              >
                {profile.email}
              </motion.a>

              <div className="mt-10 flex flex-wrap gap-3">
                <SocialLink href={profile.socials.github} label="GitHub" />
                <SocialLink href={profile.socials.linkedin} label="LinkedIn" />
                <SocialLink href={profile.socials.twitter} label="Twitter" />
              </div>

              <motion.a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex border-2 border-nuclear-black/25 px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-nuclear-ink/80"
                whileHover={{ borderColor: '#D31027', color: '#D31027' }}
              >
                Download Resume ↓
              </motion.a>

              <p className="mt-10 font-mono text-[9px] uppercase tracking-[0.35em] text-nuclear-muted">
                REF · MIKA-PORTFOLIO-2026 · SEQ.001
              </p>
            </div>
          </div>

          {/* Right — ticket stub */}
          <div className="relative flex min-h-[280px] flex-col items-center justify-between overflow-hidden bg-nuclear-red p-8 md:min-h-full">
            <PerforationLine className="left-0 hidden -translate-x-1/2 md:block" />
            <DiagonalStripes opacity={0.1} />
            <div className="pointer-events-none absolute inset-0 opacity-25">
              <RetroSun />
            </div>

            <div className="relative z-10 w-full pt-4 text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-nuclear-black/45">BOARDING</p>
              <p className="mt-2 font-display text-6xl leading-none tracking-wider text-nuclear-black">MIKA</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.45em] text-nuclear-black/55">
                Portfolio v2
              </p>
              <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.25em] text-nuclear-black/40">
                GATE · FULL STACK
              </p>
            </div>

            <div className="relative z-10 w-full border-2 border-dashed border-nuclear-black/20 bg-nuclear-white p-4">
              <Barcode />
              <p className="mt-2 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-nuclear-muted">
                Scan for CV
              </p>
            </div>

            <p className="relative z-10 mt-4 font-mono text-[8px] uppercase tracking-[0.3em] text-nuclear-black/35">
              NON-TRANSFERABLE
            </p>
          </div>
        </div>
      </NuclearCard>
    </section>
  )
}
