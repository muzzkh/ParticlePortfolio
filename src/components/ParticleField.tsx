import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  baseAlpha: number
}

type Props = {
  /** Optional ref to an element the particles should deflect off of. */
  obstacleRef?: React.RefObject<HTMLElement | null>
  /** Approximate density: particles per 10,000 px². Defaults to 0.08. */
  density?: number
  /** Connecting line distance threshold in px. */
  linkDistance?: number
  /** Mouse interaction radius in px. */
  mouseRadius?: number
  /** Visual color (CSS color string) for particles + links. */
  color?: string
}

/**
 * Animated particle field rendered on a fullscreen canvas.
 *
 * - Particles drift slowly and bounce off the viewport edges.
 * - Particles deflect off the bounding box of `obstacleRef` (e.g. the resume
 *   card) so they appear to physically interact with the resume.
 * - Particles are gently repelled by the cursor and the field draws short
 *   lines between nearby particles for a constellation effect.
 */
export default function ParticleField({
  obstacleRef,
  density = 0.08,
  linkDistance = 130,
  mouseRadius = 140,
  color = '#7c5cff',
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -9999,
    y: -9999,
    active: false,
  })
  const obstacleRectRef = useRef<DOMRect | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const target = Math.round((w * h) / 10000 * density)
      const current = particlesRef.current
      if (current.length === 0) {
        particlesRef.current = Array.from({ length: target }, () =>
          createParticle(w, h),
        )
      } else if (current.length < target) {
        for (let i = current.length; i < target; i++) {
          current.push(createParticle(w, h))
        }
      } else if (current.length > target) {
        current.length = target
      }
    }

    const updateObstacleRect = () => {
      const el = obstacleRef?.current
      obstacleRectRef.current = el ? el.getBoundingClientRect() : null
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      mouseRef.current.active = true
    }
    const onMouseLeave = () => {
      mouseRef.current.active = false
    }
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0]
      if (!t) return
      mouseRef.current.x = t.clientX
      mouseRef.current.y = t.clientY
      mouseRef.current.active = true
    }
    const onTouchEnd = () => {
      mouseRef.current.active = false
    }

    resize()
    updateObstacleRect()

    window.addEventListener('resize', resize)
    window.addEventListener('scroll', updateObstacleRect, { passive: true })
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', onTouchEnd)

    const ro = new ResizeObserver(() => updateObstacleRect())
    if (obstacleRef?.current) ro.observe(obstacleRef.current)

    const tick = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const particles = particlesRef.current
      const obstacle = obstacleRectRef.current
      const mouse = mouseRef.current

      ctx.clearRect(0, 0, w, h)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Drift
        p.x += p.vx
        p.y += p.vy

        // Edge bounce
        if (p.x < 0) {
          p.x = 0
          p.vx *= -1
        } else if (p.x > w) {
          p.x = w
          p.vx *= -1
        }
        if (p.y < 0) {
          p.y = 0
          p.vy *= -1
        } else if (p.y > h) {
          p.y = h
          p.vy *= -1
        }

        // Mouse repulsion
        if (mouse.active) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist2 = dx * dx + dy * dy
          const r2 = mouseRadius * mouseRadius
          if (dist2 < r2 && dist2 > 0.0001) {
            const dist = Math.sqrt(dist2)
            const force = (1 - dist / mouseRadius) * 0.6
            p.vx += (dx / dist) * force
            p.vy += (dy / dist) * force
          }
        }

        // Resume card deflection — particles "interact" with the card by
        // bouncing off its bounding rectangle.
        if (obstacle) {
          const padding = 8
          const left = obstacle.left - padding
          const right = obstacle.right + padding
          const top = obstacle.top - padding
          const bottom = obstacle.bottom + padding

          if (
            p.x > left &&
            p.x < right &&
            p.y > top &&
            p.y < bottom
          ) {
            // Push out along the nearest edge.
            const distLeft = Math.abs(p.x - left)
            const distRight = Math.abs(right - p.x)
            const distTop = Math.abs(p.y - top)
            const distBottom = Math.abs(bottom - p.y)
            const min = Math.min(distLeft, distRight, distTop, distBottom)
            if (min === distLeft) {
              p.x = left
              if (p.vx > 0) p.vx *= -1
            } else if (min === distRight) {
              p.x = right
              if (p.vx < 0) p.vx *= -1
            } else if (min === distTop) {
              p.y = top
              if (p.vy > 0) p.vy *= -1
            } else {
              p.y = bottom
              if (p.vy < 0) p.vy *= -1
            }
          }
        }

        // Soft velocity damping to avoid runaway speeds.
        const speed = Math.hypot(p.vx, p.vy)
        const maxSpeed = 0.9
        if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed
          p.vy = (p.vy / speed) * maxSpeed
        }
      }

      // Lines between near-by particles
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist2 = dx * dx + dy * dy
          if (dist2 < linkDistance * linkDistance) {
            const dist = Math.sqrt(dist2)
            const alpha = (1 - dist / linkDistance) * 0.18
            ctx.strokeStyle = withAlpha(color, alpha)
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // Particles
      for (const p of particles) {
        ctx.fillStyle = withAlpha(color, p.baseAlpha)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', updateObstacleRect)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
      ro.disconnect()
    }
  }, [obstacleRef, density, linkDistance, mouseRadius, color])

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />
}

function createParticle(w: number, h: number): Particle {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    r: Math.random() * 1.6 + 0.6,
    baseAlpha: Math.random() * 0.5 + 0.35,
  }
}

// Convert a hex color (#RGB or #RRGGBB) into an rgba() string with the given
// alpha. Falls back to the original color string if it is not a hex value.
function withAlpha(color: string, alpha: number): string {
  const hex = color.trim()
  if (hex.startsWith('#')) {
    let r = 0
    let g = 0
    let b = 0
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16)
      g = parseInt(hex[2] + hex[2], 16)
      b = parseInt(hex[3] + hex[3], 16)
    } else if (hex.length === 7) {
      r = parseInt(hex.slice(1, 3), 16)
      g = parseInt(hex.slice(3, 5), 16)
      b = parseInt(hex.slice(5, 7), 16)
    }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
  return color
}
