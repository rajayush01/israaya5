import { useEffect, useRef, useState } from 'react'
import motif from "../../assets/ISRAAYA MOTIF.svg"

const LERP = { cursor: 0.35, trail: 0.12 }

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState<string | null>(null)
  const [enabled, setEnabled] = useState(false)

  const target = useRef({ x: 0, y: 0 })
  const cursorPos = useRef({ x: 0, y: 0 })
  const trailPos = useRef({ x: 0, y: 0 })
  const angle = useRef(0)

  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnabled(isFinePointer && !reducedMotion)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const move = (e: MouseEvent) => {
      const dx = e.clientX - target.current.x
      target.current = { x: e.clientX, y: e.clientY }
      // subtle tilt in the direction of travel — the swan "banks" as it glides
      angle.current = Math.max(-18, Math.min(18, dx * 1.4))

      const hovered = (e.target as HTMLElement).closest('[data-cursor]') as HTMLElement | null
      setLabel(hovered?.dataset.cursor ?? null)
    }

    let raf: number
    const tick = () => {
      cursorPos.current.x += (target.current.x - cursorPos.current.x) * LERP.cursor
      cursorPos.current.y += (target.current.y - cursorPos.current.y) * LERP.cursor
      trailPos.current.x += (target.current.x - trailPos.current.x) * LERP.trail
      trailPos.current.y += (target.current.y - trailPos.current.y) * LERP.trail

      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px) translate(-50%, -50%) rotate(${angle.current}deg)`
      }
      if (trailRef.current) {
        trailRef.current.style.transform =
          `translate(${trailPos.current.x}px, ${trailPos.current.y}px) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', move)
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [enabled])

  if (!enabled) return null

  const text = label === 'view' ? 'View' : label === 'explore' ? 'Explore' : label === 'arrow' ? '→' : null
  const active = Boolean(text)

  return (
    <>
      {/* a soft gold shimmer that lags behind the motif — like it's settling into place */}
      <div
  ref={trailRef}
  className="pointer-events-none fixed left-0 top-0 z-[99] transition-[width,height,opacity] duration-300 ease-out"
  style={{
    width: active ? 66 : 36,
    height: active ? 66 : 36,
    borderRadius: '9999px',
    background: 'radial-gradient(circle, rgba(197,161,90,0.35) 0%, rgba(197,161,90,0) 70%)',
    opacity: active ? 0.9 : 0.5,
    willChange: 'transform',
  }}
/>

      {/* the swan motif itself — tilts with movement, blooms on hover */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] flex flex-col items-center"
        style={{ willChange: 'transform' }}
      >
        <img
  src={motif}
  alt=""
  draggable={false}
  className="transition-[width,height,filter,opacity] duration-300 ease-out"
  style={{
    width: active ? 52 : 34,
    height: active ? 52 : 34,
    filter: active
      ? 'drop-shadow(0 0 6px rgba(197,161,90,0.8))'
      : 'drop-shadow(0 0 2px rgba(197,161,90,0.4))',
    opacity: active ? 1 : 0.85,
  }}
/>
        {text && (
          <span className="mt-1 whitespace-nowrap rounded-full bg-charcoal px-3 py-1 text-[10px] tracking-[0.14em] uppercase text-ivory">
            {text}
          </span>
        )}
      </div>
    </>
  )
}