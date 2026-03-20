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
    expect(screen.getByText(/隐秘而强大的社群引擎/)).toBeInTheDocument()
  })

  it('renders the upgraded radar telemetry hud', () => {
    render(React.createElement(App))

    expect(screen.getByText(/SCAN RATE/i)).toBeInTheDocument()
    expect(screen.getByText(/SIGNAL LOCK/i)).toBeInTheDocument()
    expect(screen.getByText(/TARGET MAP/i)).toBeInTheDocument()
  })
})
