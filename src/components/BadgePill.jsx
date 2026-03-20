import React from 'react'

export function BadgePill({ children, className = '' }) {
  return <div className={`pill-date ${className}`.trim()}>{children}</div>
}
