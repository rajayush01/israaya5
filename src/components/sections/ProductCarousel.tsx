import { useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { NIKHAAR_PRODUCTS, formatPrice } from '../../lib/products'
import { Photo } from '../ui/Photo'

const AUTO_SCROLL_SPEED = 0.4 // px per frame, tune to taste
const RESUME_DELAY = 2500 // ms after user interaction before auto-scroll resumes

export function ProductCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const isPausedRef = useRef(false)
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const tick = useCallback(() => {
    const el = trackRef.current
    if (el && !isPausedRef.current) {
      const maxScroll = el.scrollWidth - el.clientWidth
      if (maxScroll > 0) {
        // Loop seamlessly back to start once we hit the end
        if (el.scrollLeft >= maxScroll - 1) {
          el.scrollLeft = 0
        } else {
          el.scrollLeft += AUTO_SCROLL_SPEED
        }
      }
    }
    rafRef.current = requestAnimationFrame(tick)
  }, [])

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
    }
  }, [tick])

  const pause = useCallback(() => {
    isPausedRef.current = true
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
  }, [])

  const scheduleResume = useCallback(() => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
    resumeTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false
    }, RESUME_DELAY)
  }, [])

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto flex max-w-[1600px] items-end justify-between px-6 md:px-10">
        <h2 className="font-display text-4xl md:text-5xl">Discover Nikhaar</h2>
        <span className="hidden text-[12px] tracking-[0.14em] uppercase text-charcoal/40 md:inline">
          Drag to explore →
        </span>
      </div>

      <div
        ref={trackRef}
        className="mt-10 flex gap-6 overflow-x-auto px-6 pb-4 no-scrollbar md:px-10"
        style={{ scrollSnapType: 'x mandatory' }}
        onMouseEnter={pause}
        onMouseLeave={scheduleResume}
        onTouchStart={pause}
        onTouchEnd={scheduleResume}
        onWheel={() => {
          pause()
          scheduleResume()
        }}
        onPointerDown={pause}
        onPointerUp={scheduleResume}
      >
        {NIKHAAR_PRODUCTS.map((p) => (
          <Link
            key={p.id}
            to={`/shop/${p.id}`}
            className="group w-[70vw] shrink-0 md:w-[26vw]"
            style={{ scrollSnapAlign: 'start' }}
            data-cursor="view"
          >
            <Photo
              src={p.images[0]}
              alt={p.name}
              aspect="aspect-[3/4]"
              className="transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            <div className="mt-3 flex items-center justify-between">
              <h3 className="font-display text-xl">{p.name}</h3>
              <span className="text-xs text-charcoal/60">{formatPrice(p.price)}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}