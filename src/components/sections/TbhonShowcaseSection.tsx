import { motion } from 'framer-motion'
import { useState } from 'react'
import { CornerBrackets } from '@/components/effects/Patterns'
import { NuclearCard } from '@/components/ui/NuclearCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { tbhonShowcase } from '@/data/tbhonShowcase'
import { useLazyEmbed } from '@/hooks/useLazyEmbed'

export function TbhonShowcaseSection() {
  const data = tbhonShowcase
  const [activeStep, setActiveStep] = useState(0)
  const { ref: figmaRef, ready: figmaReady } = useLazyEmbed()

  return (
    <section id="tbhon" className="section-wrap">
      <SectionHeader
        tag="Flagship Project"
        title={data.shortTitle}
        subtitle={`${data.tagline} · 3× CCIS Innovision 2026`}
      />

      {/* Hero */}
      <NuclearCard
        bg="black"
        className="group relative mb-5 overflow-hidden md:mb-6"
        readout={{
          topLeft: 'SYS.CORE',
          topRight: 'HCI/ML',
          bottomLeft: 'TRIAGE',
          bottomRight: 'IOT',
        }}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <CornerBrackets color="#D31027" className="opacity-30 transition-opacity group-hover:opacity-70" />

        <div className="relative z-20 grid gap-10 p-6 md:p-8 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-12 lg:p-10">
          <div>
            <h3 className="font-display text-4xl tracking-wide text-nuclear-white md:text-5xl">
              {data.shortTitle}
            </h3>
            <p className="mt-2 font-mono text-sm text-nuclear-red">{data.tagline}</p>
            <p className="mt-5 font-mono text-sm leading-relaxed text-nuclear-white/85 md:text-[0.9rem]">
              {data.summary}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <motion.a
                href={data.apkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-nuclear-red px-4 py-2.5 font-mono text-[11px] font-medium uppercase tracking-wider text-nuclear-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Download APK ↗
              </motion.a>
              <motion.a
                href={data.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-nuclear-white/30 px-4 py-2.5 font-mono text-[11px] font-medium uppercase tracking-wider text-nuclear-white"
                whileHover={{ scale: 1.05, borderColor: '#D31027' }}
                whileTap={{ scale: 0.97 }}
              >
                Source Code
              </motion.a>
              <motion.a
                href={data.figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-nuclear-white/30 px-4 py-2.5 font-mono text-[11px] font-medium uppercase tracking-wider text-nuclear-white"
                whileHover={{ scale: 1.05, borderColor: '#D31027' }}
                whileTap={{ scale: 0.97 }}
              >
                Figma ↗
              </motion.a>
            </div>
          </div>

          {/* Transparent app mockup — no blend hacks, no white box */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div
              className="pointer-events-none absolute inset-0 scale-90 rounded-full opacity-50"
              style={{ background: 'radial-gradient(ellipse at center, rgba(211,16,39,0.25) 0%, transparent 65%)' }}
              aria-hidden="true"
            />
            <img
              src={data.heroImage}
              alt="TBhon app — login and dashboard screens"
              className="relative w-full max-w-lg object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-transform duration-200 hover:-translate-y-1"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
      </NuclearCard>

      {/* Background + Goal */}
      <div className="mb-5 grid gap-5 md:mb-6 lg:grid-cols-2">
        <NuclearCard bg="black" className="p-6 md:p-8" readout={{ topLeft: 'BG', bottomRight: 'CTX' }}>
          <h4 className="relative z-20 font-display text-2xl text-nuclear-white">Background</h4>
          <p className="relative z-20 mt-4 font-mono text-[0.9rem] leading-relaxed text-nuclear-white/85">
            {data.background}
          </p>
        </NuclearCard>
        <NuclearCard bg="black" className="p-6 md:p-8" readout={{ topLeft: 'GOAL', bottomRight: 'SCOPE' }}>
          <h4 className="relative z-20 font-display text-2xl text-nuclear-white">Goal</h4>
          <p className="relative z-20 mt-4 font-mono text-[0.9rem] leading-relaxed text-nuclear-white/85">
            {data.goal}
          </p>
        </NuclearCard>
      </div>

      {/* Workflow */}
      <NuclearCard
        bg="black"
        className="relative mb-5 md:mb-6"
        readout={{ topLeft: 'FLOW', bottomRight: '7.STEP' }}
      >
        <div className="relative z-20 p-6 md:p-8">
          <h4 className="font-display text-3xl tracking-wide text-nuclear-white">Screening Workflow</h4>
          <p className="mt-2 font-mono text-sm text-nuclear-white/65">
            Tap a step to highlight it in the flow.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.workflow.map((step, i) => (
              <motion.button
                key={step}
                type="button"
                onClick={() => setActiveStep(i)}
                className={`flex min-h-[72px] flex-col justify-center gap-1 border p-4 text-left transition-colors ${
                  activeStep === i
                    ? 'border-nuclear-red bg-nuclear-red/15'
                    : 'border-nuclear-white/15 bg-nuclear-black/30 hover:border-nuclear-white/35'
                }`}
                whileTap={{ scale: 0.98 }}
              >
                <span
                  className={`font-display text-3xl leading-none ${
                    activeStep === i ? 'text-nuclear-red' : 'text-nuclear-white/30'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className={`font-mono text-sm leading-snug ${
                    activeStep === i ? 'text-nuclear-white' : 'text-nuclear-white/75'
                  }`}
                >
                  {step}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </NuclearCard>

      {/* Metrics */}
      <div className="mb-5 grid grid-cols-2 gap-3 md:mb-6 md:grid-cols-4">
        {data.metrics.map((m) => (
          <NuclearCard key={m.label} bg="black" className="px-4 py-5 text-center">
            <strong className="relative z-20 font-display text-4xl text-nuclear-red">{m.value}</strong>
            <span className="relative z-20 mt-2 block font-mono text-[11px] leading-snug text-nuclear-white/70">
              {m.label}
            </span>
          </NuclearCard>
        ))}
      </div>

      {/* Stack — dark theme, readable panels */}
      <NuclearCard
        bg="black"
        className="relative mb-5 overflow-hidden md:mb-6"
        readout={{ topLeft: 'STACK', bottomRight: 'TECH' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="relative z-20 p-6 md:p-8">
          <h4 className="font-display text-3xl tracking-wide text-nuclear-white md:text-4xl">System Stack</h4>
          <p className="mt-2 font-mono text-sm text-nuclear-white/65">
            Mobile app, backend API, ML service, and optional IoT capture layer.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {data.stack.map((group) => (
              <div
                key={group.label}
                className="border border-nuclear-white/12 bg-nuclear-black/50 p-4 md:p-5"
              >
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-nuclear-red">
                  {group.label}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border border-nuclear-white/20 bg-nuclear-white/5 px-3 py-1.5 font-mono text-xs text-nuclear-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </NuclearCard>

      {/* Design process — numbered steps, high contrast */}
      <NuclearCard
        bg="black"
        className="relative mb-5 overflow-hidden md:mb-6"
        readout={{ topLeft: 'UCSD', bottomRight: 'HCI' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="relative z-20 p-6 md:p-8">
          <h4 className="font-display text-3xl tracking-wide text-nuclear-white md:text-4xl">Design Process</h4>
          <p className="mt-2 font-mono text-sm text-nuclear-white/65">
            User-Centered System Design from research through validation.
          </p>
          <ol className="mt-6 space-y-4">
            {data.designProcess.map((step, i) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-nuclear-red font-display text-xl text-nuclear-white">
                  {i + 1}
                </span>
                <p className="pt-1.5 font-mono text-[0.9rem] leading-relaxed text-nuclear-white">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </NuclearCard>

      {/* Disclaimer — standalone, clear */}
      <div className="mb-5 border border-nuclear-red/30 bg-nuclear-red/[0.08] px-5 py-4 md:mb-6 md:px-7 md:py-5">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-nuclear-red">
          Important
        </p>
        <p className="mt-2 font-mono text-sm leading-relaxed text-nuclear-white md:text-[0.95rem]">
          {data.disclaimer}
        </p>
      </div>

      {/* Figma */}
      <NuclearCard
        bg="black"
        className="relative overflow-hidden"
        readout={{ topLeft: 'FIGMA', topRight: 'LIVE', bottomLeft: 'WIREFRAME', bottomRight: 'PROTOTYPE' }}
      >
        <div className="relative z-20 p-6 md:p-8">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-nuclear-red">
                Design File
              </p>
              <h3 className="mt-1 font-display text-3xl text-nuclear-white">Figma Wireframes</h3>
              <p className="mt-2 max-w-lg font-mono text-sm text-nuclear-white/75">
                Pan and zoom through the TBhon system flows. Open in Figma for the full prototype.
              </p>
            </div>
            <a
              href={data.figmaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-nuclear-white/30 px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-nuclear-white hover:border-nuclear-red"
            >
              Open in Figma ↗
            </a>
          </div>
          <div
            ref={figmaRef}
            data-cursor-native
            className="cursor-native-zone overflow-hidden border border-nuclear-white/20"
          >
            {figmaReady ? (
              <iframe
                title="TBhon System Wireframes — Figma prototype"
                src={data.figmaEmbedUrl}
                allowFullScreen
                loading="lazy"
                className="aspect-[16/10] min-h-[380px] w-full border-0 bg-[#1a1a1a] md:min-h-[500px]"
              />
            ) : (
              <div className="flex aspect-[16/10] min-h-[380px] w-full items-center justify-center bg-[#1a1a1a] md:min-h-[500px]">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-nuclear-white/40">Loading wireframes…</p>
              </div>
            )}
          </div>
        </div>
      </NuclearCard>
    </section>
  )
}
