import { useEffect, useRef } from 'react'
import { getHeaderOffset, scrollToSection } from '@/utils/scrollToSection'

/** Only when the section bottom is basically flush with the viewport. */
const END_GAP_PX = 20
/** Next section may only be peeking a little — not half on screen. */
const NEXT_PEEK_MAX_PX = 140
const COOLDOWN_MS = 2200
const WHEEL_MIN = 45

function getSections(): HTMLElement[] {
  return Array.from(document.querySelectorAll<HTMLElement>('main section[id]'))
}

/**
 * Gentle edge handoff: free scroll inside sections; a small nudge into the
 * next/previous section only when you're at the edge and keep scrolling.
 */
export function useSectionFlow() {
  const cooling = useRef(false)
  const wheelResetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const lastWheel = useRef<'up' | 'down' | null>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const handoff = (id: string) => {
      if (cooling.current) return
      cooling.current = true
      scrollToSection(`#${id}`)
      window.setTimeout(() => {
        cooling.current = false
      }, COOLDOWN_MS)
    }

    const tryHandoff = () => {
      if (cooling.current || !lastWheel.current) return

      const sections = getSections()
      if (sections.length < 2) return

      const offset = getHeaderOffset()

      if (lastWheel.current === 'down') {
        for (let i = 0; i < sections.length - 1; i++) {
          const current = sections[i]
          const next = sections[i + 1]
          const currentRect = current.getBoundingClientRect()
          const nextRect = next.getBoundingClientRect()

          const atCurrentEnd = currentRect.bottom <= window.innerHeight + END_GAP_PX
          const nextPeeking =
            nextRect.top > offset + 16 &&
            nextRect.top - offset < NEXT_PEEK_MAX_PX

          if (atCurrentEnd && nextPeeking) {
            handoff(next.id)
            return
          }
        }
      }

      if (lastWheel.current === 'up') {
        for (let i = 1; i < sections.length; i++) {
          const prev = sections[i - 1]
          const current = sections[i]
          const currentRect = current.getBoundingClientRect()
          const prevRect = prev.getBoundingClientRect()

          const atCurrentStart = Math.abs(currentRect.top - offset) <= 28
          const prevPeeking =
            prevRect.bottom > offset + 16 &&
            prevRect.bottom - offset < NEXT_PEEK_MAX_PX

          if (atCurrentStart && prevPeeking) {
            handoff(prev.id)
            return
          }
        }
      }
    }

    const setWheelDirection = (direction: 'up' | 'down') => {
      lastWheel.current = direction
      clearTimeout(wheelResetTimer.current)
      wheelResetTimer.current = setTimeout(() => {
        lastWheel.current = null
      }, 280)
      tryHandoff()
    }

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < WHEEL_MIN) return
      setWheelDirection(e.deltaY > 0 ? 'down' : 'up')
    }

    let touchY = 0
    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0]?.clientY ?? 0
    }
    const onTouchEnd = (e: TouchEvent) => {
      const endY = e.changedTouches[0]?.clientY ?? 0
      const delta = touchY - endY
      if (Math.abs(delta) < 70) return
      setWheelDirection(delta > 0 ? 'down' : 'up')
    }

    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
      clearTimeout(wheelResetTimer.current)
    }
  }, [])
}
