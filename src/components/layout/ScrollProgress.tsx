import { useEffect, useRef } from 'react'

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf = 0

    const update = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const total = document.documentElement.scrollHeight - window.innerHeight
        const progress = total > 0 ? window.scrollY / total : 0
        if (barRef.current) {
          barRef.current.style.transform = `scaleX(${progress})`
        }
      })
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', update)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="fixed left-0 top-0 z-[200] h-[3px] w-full bg-nuclear-white/5" aria-hidden="true">
      <div
        ref={barRef}
        className="h-full w-full origin-left scale-x-0 bg-nuclear-red"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  )
}
