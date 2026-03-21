import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('LinkRadar landing page', () => {
  it('renders the LinkRadar hero copy', () => {
    render(React.createElement(App))

    expect(
      screen.getByRole('heading', { name: /LinkRadar/i, level: 1 }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/把 Discord 的搜图、抓取、规则和回复收进一个后台/),
    ).toBeInTheDocument()
  })

  it('keeps the hero radar clean and positioned between the title and copy', () => {
    const { container } = render(React.createElement(App))

    expect(screen.queryByText(/SCAN RATE/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/SIGNAL LOCK/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/TARGET MAP/i)).not.toBeInTheDocument()
    expect(screen.getByText(/关键词识别!/)).toBeInTheDocument()

    const title = screen.getByRole('heading', { name: /LinkRadar/i, level: 1 })
    const radar = container.querySelector('.hero-graphic')
    const subheading = screen.getByRole('heading', {
      name: /把 Discord 的搜图、抓取、规则和回复收进一个后台/,
      level: 2,
    })

    expect(radar).not.toBeNull()
    expect(container.querySelector('.radar-panel')).toBeNull()
    expect(title.compareDocumentPosition(radar)).toBe(Node.DOCUMENT_POSITION_FOLLOWING)
    expect(radar.compareDocumentPosition(subheading)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    )
  })
})
