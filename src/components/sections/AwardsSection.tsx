import { useState } from 'react'
import { AwardGalleryItem } from '@/components/ui/AwardGalleryItem'
import { AwardReflectionPanel } from '@/components/ui/AwardReflectionPanel'
import { GalleryLightbox } from '@/components/ui/GalleryLightbox'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { awardReflection, awards } from '@/data/portfolio'
import type { Award } from '@/types/portfolio'

export function AwardsSection() {
  const [active, setActive] = useState<Award | null>(null)

  return (
    <section id="awards" className="section-wrap">
      <SectionHeader
        tag="Recognition"
        title="Awards"
        subtitle="Excellence awards from CCIS Innovision 2026 — TBhon team."
      />

      <div className="cert-gallery-grid cert-gallery-grid--awards">
        {awards.map((award, i) => (
          <AwardGalleryItem key={award.id} award={award} index={i} onOpen={setActive} />
        ))}
      </div>

      <AwardReflectionPanel reflection={awardReflection} />

      <GalleryLightbox
        open={active !== null}
        onClose={() => setActive(null)}
        image={active?.image ?? ''}
        title={active?.title ?? ''}
        subtitle={
          active && (
            <>
              <p>{active.project}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-nuclear-white/45">{active.event}</p>
            </>
          )
        }
        year={active?.year}
        viewUrl={active?.image}
        viewLabel="Open ↗"
      />
    </section>
  )
}
