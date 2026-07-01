import { useEffect } from 'react'

/** Lock body scroll without layout shift when the scrollbar disappears. */
export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    const { body } = document
    const prevOverflow = body.style.overflow
    const prevPaddingRight = body.style.paddingRight

    body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`
    }

    return () => {
      body.style.overflow = prevOverflow
      body.style.paddingRight = prevPaddingRight
    }
  }, [locked])
}
