import type { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'

const ease = [0.22, 1, 0.36, 1] as const

export interface GalleryLightboxProps {
  open: boolean
  onClose: () => void
  image: string
  title: string
  subtitle?: ReactNode
  year?: string
  viewUrl?: string
  viewLabel?: string
}

export function GalleryLightbox({
  open,
  onClose,
  image,
  title,
  subtitle,
  year,
  viewUrl,
  viewLabel = 'Open ↗',
}: GalleryLightboxProps) {
  useLockBodyScroll(open)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose],
  )

  useEffect(() => {
    if (!open) return
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, handleKeyDown])

  if (typeof document === 'undefined' || !open) return null

  return createPortal(
    <AnimatePresence mode="wait">
      <motion.div
        className="cert-lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22, ease }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <motion.div
          className="cert-lightbox-panel"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.28, ease }}
          onClick={(e) => e.stopPropagation()}
        >
          <button type="button" className="cert-lightbox-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
          <img src={image} alt={title} className="cert-lightbox-image" decoding="async" />
          <div className="cert-lightbox-meta">
            <div>
              <h3 className="font-display text-xl text-nuclear-white md:text-2xl">{title}</h3>
              {subtitle && <div className="mt-1 font-mono text-sm text-nuclear-white/60">{subtitle}</div>}
            </div>
            <div className="flex shrink-0 items-center gap-3">
              {year && (
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-nuclear-red">{year}</span>
              )}
              {viewUrl && (
                <a
                  href={viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-nuclear-red px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-wider text-nuclear-white"
                >
                  {viewLabel}
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  )
}
