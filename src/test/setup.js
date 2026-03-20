import '@testing-library/jest-dom'

Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
  value: () => ({
    save: () => {},
    restore: () => {},
    beginPath: () => {},
    closePath: () => {},
    clip: () => {},
    arc: () => {},
    fill: () => {},
    stroke: () => {},
    moveTo: () => {},
    lineTo: () => {},
    clearRect: () => {},
    fillRect: () => {},
    createRadialGradient: () => ({
      addColorStop: () => {},
    }),
    setLineDash: () => {},
    setTransform: () => {},
  }),
})
