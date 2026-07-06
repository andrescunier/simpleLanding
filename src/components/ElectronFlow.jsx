// Fondo de circuitos — pocas pistas, mínimo movimiento.

import { useId } from 'react'
import { FlowDefs, TracePath, FlowElectron, FlowPad } from './flow/shared'

const TRACES = [
  { d: 'M -20 80 H 240 L 300 140 H 540',                  dur: 8, electrons: [0] },
  { d: 'M -20 210 H 160 L 220 270 H 430 L 490 330 H 720', dur: 9, electrons: [3] },
  { d: 'M 1220 110 H 950 L 890 170 H 660',                dur: 8, electrons: [2] },
  { d: 'M 1220 560 H 930 L 870 500 H 640 V 660',          dur: 9, electrons: [1] },
  { d: 'M 600 320 H 420 L 360 380 H 200',                 dur: 10, electrons: [4] },
]

const PADS = [
  [540, 140], [720, 330], [660, 170], [380, 440], [490, 240],
]

const THEMES = {
  light: {
    trace: 'rgba(29, 78, 216, 0.16)',
    traceBright: 'rgba(29, 78, 216, 0.35)',
    pad: 'rgba(29, 78, 216, 0.45)',
    core: '#1D4ED8',
  },
  dark: {
    trace: 'rgba(147, 197, 253, 0.1)',
    traceBright: 'rgba(96, 165, 250, 0.3)',
    pad: 'rgba(147, 197, 253, 0.45)',
    core: '#60A5FA',
  },
}

export default function ElectronFlow({ variant = 'light', className = '', style }) {
  const uid = useId().replace(/:/g, '')
  const filterId = `ef-${uid}`
  const theme = THEMES[variant]
  const gradId = `${filterId}-grad`

  return (
    <svg
      className={`pointer-events-none select-none ${className}`}
      style={style}
      viewBox="0 0 1200 640"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <FlowDefs variant={variant} filterId={filterId} />
      {TRACES.map((t, i) => (
        <g key={i}>
          <TracePath d={t.d} theme={theme} animated={i % 2 === 0} />
          {t.electrons.map((delay, j) => (
            <FlowElectron key={j} path={t.d} dur={t.dur} delay={delay} theme={theme} />
          ))}
        </g>
      ))}
      {PADS.map(([x, y], i) => (
        <FlowPad key={i} x={x} y={y} theme={theme} gradId={gradId} />
      ))}
    </svg>
  )
}

export function ElectronLine({ variant = 'light', className = '' }) {
  const uid = useId().replace(/:/g, '')
  const filterId = `el-${uid}`
  const theme = THEMES[variant]
  const path = 'M 0 10 H 600'

  return (
    <svg
      className={`pointer-events-none select-none w-full h-5 ${className}`}
      viewBox="0 0 600 20"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <FlowDefs variant={variant} filterId={filterId} />
      <TracePath d={path} theme={theme} width={1.5} />
      <FlowElectron path={path} dur="8s" delay={0} theme={theme} />
    </svg>
  )
}

export { THEMES as ELECTRON_THEMES }
