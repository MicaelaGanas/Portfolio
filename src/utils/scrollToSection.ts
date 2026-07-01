function getScrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
}

export function getHeaderOffset(extra = 20): number {
  const header = document.querySelector('header')
  return (header?.getBoundingClientRect().height ?? 88) + extra
}

/** Smooth scroll to a section with sticky-header offset so titles sit below the nav. */
export function scrollToSection(hash: string) {
  const id = hash.replace(/^#/, '')
  if (!id) return

  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: getScrollBehavior() })
    return
  }

  const target = document.getElementById(id)
  if (!target) return

  const top = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset()
  window.scrollTo({ top: Math.max(0, top), behavior: getScrollBehavior() })
}
