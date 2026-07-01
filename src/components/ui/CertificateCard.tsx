import type { Certificate } from '@/types/portfolio'

interface CertificateGalleryItemProps {
  certificate: Certificate
  index: number
  onOpen: (certificate: Certificate) => void
}

export function CertificateGalleryItem({ certificate, index, onOpen }: CertificateGalleryItemProps) {
  const idx = String(index + 1).padStart(2, '0')

  return (
    <figure
      className="cert-gallery-item cert-gallery-enter group"
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      <button
        type="button"
        onClick={() => onOpen(certificate)}
        className="cert-gallery-frame relative block w-full overflow-hidden text-left"
        aria-label={`View ${certificate.title}`}
      >
        <span className="cert-gallery-index" aria-hidden="true">
          {idx}
        </span>
        <img
          src={certificate.image}
          alt={certificate.title}
          className="cert-gallery-image"
          loading="lazy"
          decoding="async"
        />
        <div className="cert-gallery-overlay">
          <p className="font-display text-lg leading-tight text-nuclear-white md:text-xl">{certificate.title}</p>
          <p className="mt-1 font-mono text-[11px] text-nuclear-white/70">{certificate.issuer}</p>
          <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-nuclear-red">
            Open ↗
          </span>
        </div>
      </button>
      <figcaption className="cert-gallery-caption">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-nuclear-white/40">{idx}</span>
        <span className="text-nuclear-white/80">{certificate.title}</span>
        {certificate.year && (
          <span className="ml-auto font-mono text-[10px] text-nuclear-red">{certificate.year}</span>
        )}
      </figcaption>
    </figure>
  )
}
