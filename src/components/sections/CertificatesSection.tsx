import { useState } from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CertificateGalleryItem } from '@/components/ui/CertificateCard'
import { GalleryLightbox } from '@/components/ui/GalleryLightbox'
import { certificates } from '@/data/portfolio'
import type { Certificate } from '@/types/portfolio'

export function CertificatesSection() {
  const [active, setActive] = useState<Certificate | null>(null)

  return (
    <section id="certificates" className="section-wrap">
      <SectionHeader
        tag="Credentials"
        title="Certificates"
        subtitle="Certifications and professional workshop completions."
      />

      <div className="cert-gallery-grid">
        {certificates.map((certificate, i) => (
          <CertificateGalleryItem
            key={certificate.id}
            certificate={certificate}
            index={i}
            onOpen={setActive}
          />
        ))}
      </div>

      <GalleryLightbox
        open={active !== null}
        onClose={() => setActive(null)}
        image={active?.image ?? ''}
        title={active?.title ?? ''}
        subtitle={active?.issuer}
        year={active?.year}
        viewUrl={active?.credentialUrl ?? active?.image}
        viewLabel={active?.credentialUrl ? 'Verify ↗' : 'Open ↗'}
      />
    </section>
  )
}
