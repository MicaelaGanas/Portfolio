import type { Award } from '@/types/portfolio'

interface AwardGalleryItemProps {
  award: Award
  index: number
  onOpen: (award: Award) => void
}

export function AwardGalleryItem({ award, index, onOpen }: AwardGalleryItemProps) {
  const idx = String(index + 1).padStart(2, '0')

  return (
    <figure
      className="cert-gallery-item cert-gallery-enter group"
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      <button
        type="button"
        onClick={() => onOpen(award)}
        className="cert-gallery-frame cert-gallery-frame--award relative block w-full overflow-hidden text-left"
        aria-label={`View ${award.title}`}
      >
        <span className="cert-gallery-index cert-gallery-index--award" aria-hidden="true">
          {idx}
        </span>
        <img src={award.image} alt={award.title} className="cert-gallery-image" loading="lazy" decoding="async" />
        <div className="cert-gallery-overlay">
          <p className="font-display text-lg leading-tight text-nuclear-white md:text-xl">{award.title}</p>
          <p className="mt-1 font-mono text-[11px] text-nuclear-white/70">{award.project}</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-nuclear-white/50">
            {award.event}
          </p>
          <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-nuclear-red">
            Open ↗
          </span>
        </div>
      </button>
      <figcaption className="cert-gallery-caption">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-nuclear-white/40">{idx}</span>
        <span className="text-nuclear-white/80">{award.title}</span>
        {award.year && (
          <span className="ml-auto font-mono text-[10px] text-nuclear-red">{award.year}</span>
        )}
      </figcaption>
    </figure>
  )
}
