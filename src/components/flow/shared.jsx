// Utilidades SVG compartidas para animaciones de flujo (SMIL) — versión liviana.

export function FlowDefs({ variant = 'light', filterId = 'flow-glow' }) {
  const glow = variant === 'dark' ? '#60A5FA' : '#1D4ED8'
  const gradId = `${filterId}-grad`
  return (
    <defs>
      <radialGradient id={gradId} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={glow} stopOpacity="0.3" />
        <stop offset="100%" stopColor={glow} stopOpacity="0" />
      </radialGradient>
    </defs>
  )
}

export function FlowPad({ x, y, theme, gradId = 'flow-glow-grad' }) {
  return (
    <g>
      <circle cx={x} cy={y} r="10" fill={`url(#${gradId})`} opacity="0.5" />
      <circle cx={x} cy={y} r="2.5" fill={theme.core ?? theme.pad} />
    </g>
  )
}

export function TracePath({ d, theme, animated = true, width = 1.5 }) {
  return (
    <g>
      <path d={d} fill="none" stroke={theme.trace} strokeWidth={width * 0.6} strokeLinejoin="round" opacity="0.35" />
      <path
        d={d}
        fill="none"
        stroke={theme.traceBright ?? theme.trace}
        strokeWidth={width}
        strokeLinejoin="round"
        strokeDasharray="10 8"
      >
        {animated && (
          <animate attributeName="stroke-dashoffset" from="0" to="-36" dur="2.4s" repeatCount="indefinite" />
        )}
      </path>
    </g>
  )
}

export function FlowElectron({ path, dur, delay, theme, size = 1 }) {
  const rCore = 2.5 * size
  return (
    <circle r={rCore} fill={theme.core} opacity="0.85">
      <animateMotion dur={`${dur}s`} begin={`-${delay}s`} repeatCount="indefinite" path={path} />
    </circle>
  )
}

export function ActiveNodePulse({ x, y, active, color = '#1D4ED8' }) {
  if (!active) return null
  return (
    <circle cx={x} cy={y} r="10" fill="none" stroke={color} strokeWidth="1.5" opacity="0">
      <animate attributeName="r" values="10;28" dur="2.8s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.45;0" dur="2.8s" repeatCount="indefinite" />
    </circle>
  )
}
