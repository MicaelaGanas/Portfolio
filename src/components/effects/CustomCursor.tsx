import { useEffect, useRef, useState } from 'react'

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, summary, [data-cursor="pointer"]'
const NATIVE_ZONE = '[data-cursor-native]'

function TriangleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="22" viewBox="0 0 18 22" aria-hidden="true">
      <path
        d="M1 1 L1 20 L15 11 Z"
        fill="currentColor"
        stroke="#F2F2F2"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function isInNativeZone(el: Element | null) {
  return !!el?.closest(NATIVE_ZONE)
}

export function CustomCursor() {
  const [active, setActive] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [pressing, setPressing] = useState(false)
  const [visible, setVisible] = useState(false)

  const target = useRef({ x: 0, y: 0 })
  const trail = useRef({ x: 0, y: 0 })
  const pointerRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const raf = useRef(0)
  const inNativeZone = useRef(false)
  const cursorEnabled = useRef(false)

  const setNativeZone = (inside: boolean) => {
    if (inNativeZone.current === inside) return
    inNativeZone.current = inside

    if (inside) {
      setVisible(false)
      setPressing(false)
      document.body.classList.remove('custom-cursor-active')
      return
    }

    if (cursorEnabled.current) {
      document.body.classList.add('custom-cursor-active')
    }
  }

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const enable = () => {
      const on = finePointer.matches && !reducedMotion.matches
      cursorEnabled.current = on
      setActive(on)
      if (on && !inNativeZone.current) {
        document.body.classList.add('custom-cursor-active')
      } else {
        document.body.classList.remove('custom-cursor-active')
      }
    }

    enable()
    finePointer.addEventListener('change', enable)
    reducedMotion.addEventListener('change', enable)

    return () => {
      finePointer.removeEventListener('change', enable)
      reducedMotion.removeEventListener('change', enable)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [])

  useEffect(() => {
    if (!active) return

    const onMove = (e: MouseEvent) => {
      const overNative = isInNativeZone(e.target as Element)
      setNativeZone(overNative)
      if (overNative) return

      target.current = { x: e.clientX, y: e.clientY }
      if (!visible) setVisible(true)

      const el = document.elementFromPoint(e.clientX, e.clientY)
      setHovering(!!el?.closest(INTERACTIVE))
    }

    const onLeave = () => {
      setVisible(false)
      setNativeZone(false)
    }

    const onEnter = () => {
      if (!inNativeZone.current) setVisible(true)
    }

    const onDown = () => {
      if (!inNativeZone.current) setPressing(true)
    }

    const onUp = () => setPressing(false)

    const onBlur = () => setNativeZone(false)

    const tick = () => {
      if (!inNativeZone.current) {
        trail.current.x += (target.current.x - trail.current.x) * 0.14
        trail.current.y += (target.current.y - trail.current.y) * 0.14

        if (pointerRef.current) {
          pointerRef.current.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0)`
        }
        if (trailRef.current) {
          trailRef.current.style.transform = `translate3d(${trail.current.x}px, ${trail.current.y}px, 0)`
        }
      }

      raf.current = requestAnimationFrame(tick)
    }

    raf.current = requestAnimationFrame(tick)
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseleave', onLeave)
    window.addEventListener('mouseenter', onEnter)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('blur', onBlur)

    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('mouseenter', onEnter)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('blur', onBlur)
    }
  }, [active, visible])

  if (!active) return null

  return (
    <div
      className="custom-cursor"
      aria-hidden="true"
      data-visible={visible}
      data-hover={hovering}
      data-press={pressing}
    >
      <div ref={trailRef} className="custom-cursor-trail">
        <div className="custom-cursor-trail-inner">
          <TriangleIcon />
        </div>
      </div>
      <div ref={pointerRef} className="custom-cursor-pointer">
        <div className="custom-cursor-pointer-inner">
          <TriangleIcon />
        </div>
      </div>
    </div>
  )
}
