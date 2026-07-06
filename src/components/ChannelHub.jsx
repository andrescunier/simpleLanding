// Hub de canales — animación mínima.

const CHANNELS = [
  { id: 'wa', label: 'WhatsApp', angle: -90, color: '#25D366' },
  { id: 'ig', label: 'Instagram', angle: -35, color: '#E1306C' },
  { id: 'ml', label: 'Mercado Libre', angle: 15, color: '#FFE600' },
  { id: 'mail', label: 'Email', angle: 65, color: '#1D4ED8' },
  { id: 'web', label: 'Web Chat', angle: 115, color: '#6366F1' },
  { id: 'erp', label: 'ERP / CRM', angle: 165, color: '#8B939E' },
]

function polar(cx, cy, r, deg) {
  const rad = (deg * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

function hubPath(cx, cy, hubR, orbitR, angle) {
  const outer = polar(cx, cy, orbitR, angle)
  const inner = polar(cx, cy, hubR + 10, angle)
  return `M ${outer.x} ${outer.y} L ${inner.x} ${inner.y}`
}

export default function ChannelHub({ centerLabel, sublabel }) {
  const cx = 160
  const cy = 160
  const hubR = 44
  const orbitR = 108

  return (
    <div className="w-full max-w-[320px] mx-auto">
      <svg viewBox="0 0 320 320" className="w-full h-auto" aria-hidden="true">
        <defs>
          <radialGradient id="hub-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {CHANNELS.map((ch, i) => {
          const d = hubPath(cx, cy, hubR, orbitR, ch.angle)
          return (
            <g key={ch.id}>
              <path d={d} fill="none" stroke="rgba(29,78,216,0.15)" strokeWidth="1.5" strokeDasharray="5 5" />
              <circle r="3.5" fill={ch.color} opacity="0.9">
                <animateMotion dur={`${4 + i * 0.4}s`} begin={`-${i * 0.7}s`} repeatCount="indefinite" path={d} />
              </circle>
            </g>
          )
        })}

        <circle cx={cx} cy={cy} r={hubR + 18} fill="url(#hub-core-glow)" />
        <circle cx={cx} cy={cy} r={hubR} fill="white" stroke="rgba(29,78,216,0.35)" strokeWidth="1.5" />
        <text x={cx} y={cy - 4} textAnchor="middle" fill="#0F1419" fontSize="11" fontWeight="600" fontFamily="Inter,sans-serif">{centerLabel}</text>
        <text x={cx} y={cy + 12} textAnchor="middle" fill="#8B939E" fontSize="8" fontFamily="Inter,sans-serif">{sublabel}</text>

        {CHANNELS.map(ch => {
          const p = polar(cx, cy, orbitR, ch.angle)
          return (
            <g key={ch.id}>
              <circle cx={p.x} cy={p.y} r="22" fill="white" stroke="#E5E7EB" strokeWidth="1" />
              <circle cx={p.x} cy={p.y} r="6" fill={ch.color} opacity="0.85" />
              <text x={p.x} y={p.y + 34} textAnchor="middle" fill="#5C6570" fontSize="8.5" fontWeight="500" fontFamily="Inter,sans-serif">{ch.label}</text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
