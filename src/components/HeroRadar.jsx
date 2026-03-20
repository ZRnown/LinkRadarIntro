import React from 'react'

const signalNodes = [
  { className: 'signal signal-1', label: 'A1' },
  { className: 'signal signal-2', label: 'B2' },
  { className: 'signal signal-3', label: 'C3' },
  { className: 'signal signal-4', label: 'D4' },
]

const sweepLines = [0, 45, 90, 135]

export function HeroRadar({ floatingBadges }) {
  return (
    <div className="hero-graphic" aria-hidden="true">
      <div className="radar-frame" />
      <div className="radar-sweep" />
      <div className="radar-glow" />

      <svg className="radar-grid" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2 2"
        />
        <circle
          cx="50"
          cy="50"
          r="35"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2 2"
        />
        <circle
          cx="50"
          cy="50"
          r="25"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2 2"
        />
        <circle
          cx="50"
          cy="50"
          r="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <line
          x1="50"
          y1="5"
          x2="50"
          y2="95"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2 2"
        />
        <line
          x1="5"
          y1="50"
          x2="95"
          y2="50"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2 2"
        />
        <line
          x1="17"
          y1="17"
          x2="83"
          y2="83"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2 2"
        />
        <line
          x1="83"
          y1="17"
          x2="17"
          y2="83"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2 2"
        />
      </svg>

      <div className="action-lines">
        {sweepLines.map((angle) => (
          <div
            className="line"
            key={angle}
            style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
          />
        ))}
      </div>

      <div className="concentric c1" />
      <div className="concentric c2" />
      <div className="concentric c3" />
      <div className="concentric c4" />

      <div className="radar-center">
        <div className="radar-dot" />
        <div className="radar-ring" />
      </div>

      {signalNodes.map((signal) => (
        <div className={signal.className} key={signal.className}>
          <span>{signal.label}</span>
        </div>
      ))}

      {floatingBadges.map((badge) => (
        <div className={`badge-float ${badge.className}`} key={badge.text}>
          {badge.text}
        </div>
      ))}
    </div>
  )
}
