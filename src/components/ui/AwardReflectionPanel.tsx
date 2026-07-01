import { motion } from 'framer-motion'
import { useState } from 'react'
import { GalleryLightbox } from '@/components/ui/GalleryLightbox'
import { NuclearCard } from '@/components/ui/NuclearCard'
import type { AwardReflection, AwardReflectionPhoto } from '@/types/portfolio'

interface AwardReflectionPanelProps {
  reflection: AwardReflection
}

export function AwardReflectionPanel({ reflection }: AwardReflectionPanelProps) {
  const [activePhoto, setActivePhoto] = useState<AwardReflectionPhoto | null>(null)

  return (
    <>
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
            <h3 className="mt-3 font-display text-2xl leading-tight tracking-wide text-nuclear-ink md:text-3xl">
              {reflection.event}
            </h3>
            <p className="mt-3 font-mono text-[10px] leading-relaxed uppercase tracking-[0.14em] text-nuclear-ink/55 md:text-[11px]">
              {reflection.eventDetail}
            </p>
            <p className="award-reflection-count mt-6 font-display text-6xl leading-none text-nuclear-red md:text-7xl">
              {String(reflection.awardCount).padStart(2, '0')}
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-nuclear-ink/50">
              Awards · {reflection.project}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {reflection.tags.map((tag) => (
                <span key={tag} className="tag-chip-light">
                  {tag}
                </span>
              ))}
            </div>
          </aside>

          <div className="award-reflection-body">
            <p className="label-on-light mb-4">My experience presenting {reflection.project}</p>
            {reflection.paragraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                className="body-on-light mb-5"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              >
                {paragraph}
              </motion.p>
            ))}

            <blockquote className="award-reflection-quote mt-8 border-l-2 border-nuclear-red pl-4 font-display text-xl leading-snug text-nuclear-ink md:text-2xl">
              {reflection.quote}
            </blockquote>
          </div>
        </div>
      </NuclearCard>

      {reflection.photos.length > 0 && (
        <NuclearCard
          bg="black"
          className="award-reflection-photos relative mt-5 overflow-hidden md:mt-6"
          readout={{
            topLeft: 'PHOTOS',
            topRight: 'INNOV.26',
            bottomLeft: 'GALLERY',
            bottomRight: 'TBHON',
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <div className="award-reflection-photos-header relative z-20">
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-block h-2 w-2 bg-nuclear-red" aria-hidden="true" />
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-nuclear-red">
                  Innovision 2026
                </span>
              </div>
              <h3 className="mt-3 font-display text-3xl tracking-wide text-nuclear-white md:text-4xl">
                Moments from the showcase
              </h3>
              <div className="mt-3 h-0.5 w-12 bg-nuclear-red" aria-hidden="true" />
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-nuclear-white/45">
              {String(reflection.photos.length).padStart(2, '0')} Photos
            </span>
          </div>

          <div className="award-reflection-photos-grid relative z-20">
            {reflection.photos.map((photo, i) => (
              <figure
                key={photo.src}
                className="award-reflection-photo-item cert-gallery-enter"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <button
                  type="button"
                  onClick={() => setActivePhoto(photo)}
                  className="cert-gallery-frame relative block w-full overflow-hidden text-left"
                  aria-label={`View photo: ${photo.caption}`}
                >
                  <span className="cert-gallery-index" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="cert-gallery-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="cert-gallery-overlay">
                    <p className="font-mono text-[11px] leading-snug text-nuclear-white/90">{photo.caption}</p>
                    <span className="mt-2 inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-nuclear-red">
                      Open ↗
                    </span>
                  </div>
                </button>
                <figcaption className="cert-gallery-caption">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-nuclear-white/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-nuclear-white/80">{photo.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </NuclearCard>
      )}

      <GalleryLightbox
        open={activePhoto !== null}
        onClose={() => setActivePhoto(null)}
        image={activePhoto?.src ?? ''}
        title={activePhoto?.caption ?? 'Innovision moment'}
        subtitle={activePhoto?.alt}
        viewUrl={activePhoto?.src}
        viewLabel="Open ↗"
      />
    </>
  )
}
