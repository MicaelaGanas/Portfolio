import { motion } from 'framer-motion'
import { type MouseEvent } from 'react'
import {
  CornerBrackets,
  Crosshair,
  DataStream,
  ScanLines,
} from '@/components/effects/Patterns'
import { DarkSurfacePattern } from '@/components/effects/SiteBackground'
import { PortalEye } from '@/components/graphics/NuclearGraphics'
import { NuclearCard } from '@/components/ui/NuclearCard'
import { scrollToSection } from '@/utils/scrollToSection'
import { heroTech, profile, typingRoles } from '@/data/portfolio'
import { useTypingEffect } from '@/hooks/useTypingEffect'

export function HeroSection() {
  const typing = useTypingEffect(typingRoles)

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    scrollToSection(href)
  }

  return (
    <section id="home" className="section-wrap !pb-8 md:!pb-10">
      <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
        <NuclearCard
          bg="black"
          className="flex min-h-[480px] flex-col justify-between p-8 md:min-h-[540px] md:p-10 lg:min-h-[600px]"
          readout={{
            topLeft: 'SYS.INIT',
            topRight: 'V2.0.26',
            bottomLeft: profile.available ? 'STATUS: ONLINE' : 'STATUS: BUSY',
            bottomRight: 'FULL STACK',
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <DarkSurfacePattern />
          <ScanLines opacity={0.08} />
          <DataStream className="opacity-60" />
          <CornerBrackets color="#D31027" />
          <Crosshair className="absolute bottom-8 right-8 opacity-50" size={64} />

          <div className="pointer-events-none absolute -right-4 -top-4 h-52 w-52 opacity-70 md:h-64 md:w-64 lg:h-72 lg:w-72">
            <PortalEye />
          </div>

          <div className="relative z-20 flex flex-col gap-6">
            <motion.span
              className="inline-flex w-fit items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-nuclear-red"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <span className="h-2 w-2 rounded-full bg-nuclear-red shadow-[0_0_10px_#D31027]" />
              Available for freelance work
            </motion.span>

            <h1 className="font-display text-display-xl text-nuclear-white">
              <span className="animate-glitch block">MICAELA</span>
            </h1>

            <div className="max-w-lg space-y-3">
              <p className="font-mono text-sm leading-relaxed text-nuclear-white/75 md:text-base">
                <span className="text-nuclear-white">{profile.role}</span>
                {' — '}
                {profile.tagline}
              </p>
              <p className="font-mono text-sm text-nuclear-white/55">
                Currently {typing}
                <motion.span
                  className="ml-0.5 text-nuclear-red"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              </p>
            </div>
          </div>

          <div className="relative z-20 mt-8 flex flex-wrap gap-2">
            {heroTech.map((t) => (
              <span key={t} className="tag-chip-dark">
                {t}
              </span>
            ))}
          </div>
        </NuclearCard>

        <NuclearCard
          bg="red"
          className="relative flex min-h-[480px] items-center justify-center overflow-hidden p-8 md:min-h-[540px] md:p-10 lg:min-h-[600px]"
          readout={{
            topLeft: 'PROFILE',
            topRight: 'IMG/800',
            bottomLeft: "DEAN'S LISTER",
            bottomRight: '3+ SHIPPED',
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            aria-hidden="true"
            style={{
              backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(0,0,0,0.5) 8px, rgba(0,0,0,0.5) 9px)`,
            }}
          />

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="font-display text-[clamp(8rem,28vw,18rem)] leading-none text-nuclear-black/15 select-none">
              前端
            </span>
          </div>

          <Crosshair className="absolute left-6 top-6 opacity-30" size={48} />

          <motion.div
            className="relative z-20 h-56 w-56 overflow-hidden rounded-full border-[5px] border-nuclear-black shadow-[0_0_0_8px_rgba(0,0,0,0.15)] md:h-64 md:w-64 lg:h-72 lg:w-72"
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img
              src={profile.photo}
              alt={`${profile.name} — profile photo`}
              className="h-full w-full object-cover grayscale contrast-125"
            />
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-8 z-20 rounded-xl border-2 border-nuclear-black/20 bg-nuclear-black px-4 py-3 shadow-lg"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.2, repeat: Infinity }}
          >
            <p className="font-display text-2xl leading-none text-nuclear-white">3+ Projects</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-nuclear-white/55">
              Shipped &amp; Live
            </p>
          </motion.div>

          <motion.div
            className="absolute right-8 top-20 z-20 rounded-xl border-2 border-nuclear-black/20 bg-nuclear-black px-4 py-3 shadow-lg"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.8, repeat: Infinity }}
          >
            <p className="font-display text-2xl leading-none text-nuclear-white">Dean&apos;s Lister</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-nuclear-white/55">
              Consistent
            </p>
          </motion.div>
        </NuclearCard>
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <motion.a
          href="#projects"
          onClick={(e) => handleNavClick(e, '#projects')}
          className="inline-flex items-center gap-2 bg-nuclear-red px-8 py-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-nuclear-white"
          whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(211,16,39,0.55)' }}
          whileTap={{ scale: 0.98 }}
        >
          See my work →
        </motion.a>
        <motion.a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="inline-flex items-center gap-2 border-2 border-nuclear-white/35 px-8 py-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-nuclear-white"
          whileHover={{ borderColor: '#D31027', color: '#D31027' }}
        >
          Get in touch
        </motion.a>
      </div>
    </section>
  )
}
