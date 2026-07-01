import { useEffect, useRef, useState } from 'react'

/** Load heavy embeds (e.g. Figma iframes) only when near the viewport. */
export function useLazyEmbed(rootMargin = '200px') {
  const ref = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || ready) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReady(true)
          observer.disconnect()
        }
      },
      { rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [ready, rootMargin])

  return { ref, ready }
}
