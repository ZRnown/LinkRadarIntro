import React from 'react'

export function SectionHeader({ title, label }) {
  return (
    <div className="section-header">
      <h2 className="groovy">{title}</h2>
      <span className="mono">{label}</span>
    </div>
  )
}
