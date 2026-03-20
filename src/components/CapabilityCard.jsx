import React from 'react'

export function CapabilityCard({ capability }) {
  return (
    <article className="card">
      <div className="card-number">{capability.id}</div>
      <div className="mono">{capability.eyebrow}</div>
      <h3>{capability.title}</h3>
      <p>{capability.description}</p>
    </article>
  )
}
