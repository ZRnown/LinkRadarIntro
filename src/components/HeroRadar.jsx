import React, { useEffect, useRef } from 'react'

const compassTicks = ['N', '045', '090', '135', 'S', '225', '270', '315']

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

function angleDelta(a, b) {
  let delta = a - b

  while (delta > Math.PI) delta -= Math.PI * 2
  while (delta < -Math.PI) delta += Math.PI * 2

  return Math.abs(delta)
}

function drawRadar(context, width, height, time, targets) {
  const cx = width / 2
  const cy = height / 2
  const radius = Math.min(width, height) * 0.46
  const sweep = (time * 0.00125) % (Math.PI * 2)

  context.clearRect(0, 0, width, height)

  context.save()
  context.beginPath()
  context.arc(cx, cy, radius, 0, Math.PI * 2)
  context.clip()

  const scopeGlow = context.createRadialGradient(cx, cy, radius * 0.08, cx, cy, radius)
  scopeGlow.addColorStop(0, 'rgba(34, 190, 106, 0.28)')
  scopeGlow.addColorStop(0.45, 'rgba(8, 55, 30, 0.88)')
  scopeGlow.addColorStop(1, 'rgba(2, 17, 10, 1)')

  context.fillStyle = scopeGlow
  context.fillRect(0, 0, width, height)

  for (let y = cy - radius; y <= cy + radius; y += 4) {
    const alpha = 0.025 + ((Math.sin(time * 0.002 + y * 0.09) + 1) / 2) * 0.025
    context.strokeStyle = `rgba(120, 255, 170, ${alpha})`
    context.beginPath()
    context.moveTo(cx - radius, y)
    context.lineTo(cx + radius, y)
    context.stroke()
  }

  context.strokeStyle = 'rgba(112, 255, 162, 0.22)'
  context.lineWidth = 1

  for (let ring = 1; ring <= 5; ring += 1) {
    context.beginPath()
    context.setLineDash(ring === 5 ? [] : [5, 10])
    context.arc(cx, cy, radius * (ring / 5), 0, Math.PI * 2)
    context.stroke()
  }

  context.setLineDash([])

  const spokes = 12
  for (let index = 0; index < spokes; index += 1) {
    const angle = (index / spokes) * Math.PI * 2
    const x = cx + Math.cos(angle) * radius
    const y = cy + Math.sin(angle) * radius
    context.beginPath()
    context.moveTo(cx, cy)
    context.lineTo(x, y)
    context.stroke()
  }

  for (let tail = 0; tail < 80; tail += 1) {
    const segmentAngle = sweep - tail * 0.035
    const alpha = Math.pow(1 - tail / 80, 2) * 0.28

    context.fillStyle = `rgba(120, 255, 170, ${alpha})`
    context.beginPath()
    context.moveTo(cx, cy)
    context.arc(cx, cy, radius, segmentAngle - 0.02, segmentAngle + 0.02)
    context.closePath()
    context.fill()
  }

  context.strokeStyle = 'rgba(178, 255, 206, 0.95)'
  context.lineWidth = 2
  context.beginPath()
  context.moveTo(cx, cy)
  context.lineTo(cx + Math.cos(sweep) * radius, cy + Math.sin(sweep) * radius)
  context.stroke()

  targets.forEach((target, index) => {
    const tx = cx + (target.x * 2 - 1) * radius * 0.88
    const ty = cy + (target.y * 2 - 1) * radius * 0.88
    const targetAngle = Math.atan2(ty - cy, tx - cx)
    const tracking = clamp(1 - angleDelta(sweep, targetAngle) / 0.55, 0, 1)
    const pulse = (Math.sin(time * 0.002 + target.phase * 4 + index) + 1) / 2
    const intensity = 0.22 + pulse * 0.18 + tracking * 0.82

    const glow = context.createRadialGradient(tx, ty, 0, tx, ty, 26)
    glow.addColorStop(0, `rgba(175, 255, 216, ${0.95 * intensity})`)
    glow.addColorStop(0.22, `rgba(102, 255, 166, ${0.55 * intensity})`)
    glow.addColorStop(1, 'rgba(102, 255, 166, 0)')

    context.fillStyle = glow
    context.beginPath()
    context.arc(tx, ty, 26, 0, Math.PI * 2)
    context.fill()

    context.fillStyle = `rgba(207, 255, 224, ${0.95 * intensity})`
    context.beginPath()
    context.arc(tx, ty, 3.4 + tracking * 1.6, 0, Math.PI * 2)
    context.fill()

    if (tracking > 0.15) {
      context.strokeStyle = `rgba(166, 255, 207, ${tracking * 0.65})`
      context.lineWidth = 1.4
      context.beginPath()
      context.arc(tx, ty, 8 + tracking * 11, 0, Math.PI * 2)
      context.stroke()
    }
  })

  context.strokeStyle = 'rgba(160, 255, 204, 0.72)'
  context.lineWidth = 1
  context.beginPath()
  context.moveTo(cx - radius * 0.08, cy)
  context.lineTo(cx + radius * 0.08, cy)
  context.moveTo(cx, cy - radius * 0.08)
  context.lineTo(cx, cy + radius * 0.08)
  context.stroke()

  context.restore()
}

export function HeroRadar({ floatingBadges, status, targets, telemetry }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    let animationFrameId = 0
    let width = 0
    let height = 0
    let context = null
    let observer = null

    try {
      context = canvas.getContext('2d')
    } catch {
      context = null
    }

    if (!context) return undefined

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      const nextWidth = Math.max(1, bounds.width)
      const nextHeight = Math.max(1, bounds.height)
      const dpr = window.devicePixelRatio || 1

      width = nextWidth
      height = nextHeight
      canvas.width = Math.round(nextWidth * dpr)
      canvas.height = Math.round(nextHeight * dpr)
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const animate = (time) => {
      drawRadar(context, width, height, time, targets)
      animationFrameId = window.requestAnimationFrame(animate)
    }

    resize()

    if (window.ResizeObserver) {
      observer = new window.ResizeObserver(resize)
      observer.observe(canvas)
    } else {
      window.addEventListener('resize', resize)
    }

    animationFrameId = window.requestAnimationFrame(animate)

    return () => {
      window.cancelAnimationFrame(animationFrameId)

      if (observer) {
        observer.disconnect()
      } else {
        window.removeEventListener('resize', resize)
      }
    }
  }, [targets])

  return (
    <div className="hero-graphic" role="img" aria-label="实时雷达扫描示意">
      <div className="radar-panel">
        <div className="radar-panel-sheen" />

        <div className="radar-header">
          {status.map((item) => (
            <div className="radar-status-chip" key={item.label}>
              <span className="mono">{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>

        <div className="radar-scope-shell">
          <div className="radar-corner radar-corner-tl" />
          <div className="radar-corner radar-corner-tr" />
          <div className="radar-corner radar-corner-bl" />
          <div className="radar-corner radar-corner-br" />

          <div className="radar-scope">
            <canvas className="radar-canvas" ref={canvasRef} />
            <div className="radar-reflection" />
            <div className="radar-vignette" />

            {targets.map((target) => (
              <div
                className="signal-tag"
                key={target.id}
                style={{
                  left: `${target.x * 100}%`,
                  top: `${target.y * 100}%`,
                }}
              >
                <div className="signal-tag-dot" />
                <span className="mono">{target.label}</span>
                <small>{target.note}</small>
              </div>
            ))}

            <div className="radar-center-readout mono">LK-R / LIVE</div>

            {compassTicks.map((tick, index) => (
              <span
                className={`radar-compass radar-compass-${index}`}
                key={tick}
              >
                {tick}
              </span>
            ))}
          </div>
        </div>

        <div className="radar-telemetry">
          {telemetry.map((item) => (
            <div className="radar-telemetry-card" key={item.label}>
              <span className="mono">{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>

      {floatingBadges.map((badge) => (
        <div className={`badge-float ${badge.className}`} key={badge.text}>
          {badge.text}
        </div>
      ))}
    </div>
  )
}
