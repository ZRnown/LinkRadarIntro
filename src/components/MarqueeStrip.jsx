import React from 'react'

export function MarqueeStrip({ items }) {
  const content = items.join(' /// ')

  return (
    <div className="marquee" aria-label="LinkRadar operating principles">
      <div className="marquee-content">
        /// {content} /// {content} ///
      </div>
    </div>
  )
}
