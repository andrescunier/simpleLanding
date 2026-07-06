// Diagrama de nodos conectados — flujo liviano.

import { useId, useState, useEffect } from 'react'
import { FlowDefs, TracePath, FlowElectron, ActiveNodePulse } from './flow/shared'

const THEMES = {
  light: {
    trace: 'rgba(29, 78, 216, 0.18)',
    traceBright: 'rgba(29, 78, 216, 0.4)',
    traceActive: 'rgba(29, 78, 216, 0.55)',
    core: '#1D4ED8',
    textActive: '#0F1419',
    textHighlight: '#1D4ED8',
    nodeBg: '#FFFFFF',
    nodeBorder: '#E5E7EB',
    nodeActiveFill: 'rgba(29,78,216,0.1)',
    nodeActiveStroke: '#1D4ED8',
  },
  dark: {
    trace: 'rgba(255, 255, 255, 0.08)',
    traceBright: 'rgba(147, 197, 253, 0.32)',
    traceActive: 'rgba(96, 165, 250, 0.5)',
    core: '#60A5FA',
    textActive: '#FFFFFF',
    textHighlight: '#93C5FD',
    nodeBg: '#181B22',
    nodeBorder: 'rgba(255,255,255,0.1)',
    nodeActiveFill: 'rgba(59,130,246,0.14)',
    nodeActiveStroke: '#60A5FA',
  },
}

function useMinMd() {
  const [md, setMd] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : true,
  )
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const fn = () => setMd(mq.matches)
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [])
  return md
}

function buildHorizontalLayout(count) {
  const totalW = 880
  const nodeW = Math.min(120, Math.floor((totalW - 80) / count) - 8)
  const spacing = count > 1 ? (totalW - 80 - count * nodeW) / (count - 1) : 0
  const positions = Array.from({ length: count }, (_, i) => ({
    x: 40 + i * (nodeW + spacing),
    y: 70,
    w: nodeW,
  }))
  const paths = []
  for (let i = 0; i < count - 1; i++) {
    const a = positions[i]
    const b = positions[i + 1]
    paths.push(`M ${a.x + a.w} ${a.y} H ${b.x}`)
  }
  if (count > 1) {
    const first = positions[0]
    const last = positions[count - 1]
    paths.push(
      `M ${last.x + last.w} ${last.y} C ${totalW - 16} ${last.y} ${totalW - 16} 118 ${first.x + first.w / 2} 118 V ${first.y + 24}`,
    )
  }
  return { positions, paths, viewBox: `0 0 ${totalW} 140` }
}

function buildVerticalLayout(count) {
  const totalH = 40 + count * 88
  const nodeW = 220
  const positions = Array.from({ length: count }, (_, i) => ({
    x: 160,
    y: 36 + i * 88,
    w: nodeW,
  }))
  const paths = []
  for (let i = 0; i < count - 1; i++) {
    const a = positions[i]
    const b = positions[i + 1]
    paths.push(`M ${a.x} ${a.y + 22} V ${b.y - 22}`)
  }
  if (count > 1) {
    const first = positions[0]
    const last = positions[count - 1]
    paths.push(
      `M ${first.x} ${last.y + 22} V ${totalH - 16} H 32 V 16 H ${first.x} V ${first.y - 22}`,
    )
  }
  return { positions, paths, viewBox: `0 0 320 ${totalH}` }
}

function FlowSvg({ nodes, layout, theme, variant, className, activeIndex = -1, filterId }) {
  const { positions, paths, viewBox } =
    layout === 'h' ? buildHorizontalLayout(nodes.length) : buildVerticalLayout(nodes.length)

  const segmentCount = Math.max(0, nodes.length - 1)

  return (
    <svg viewBox={viewBox} className={className} preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <FlowDefs variant={variant} filterId={filterId} />
      {paths.map((d, i) => {
        const isSegment = i < segmentCount
        const isActivePath = isSegment && (i === activeIndex || i === activeIndex - 1)
        const pathTheme = {
          ...theme,
          trace: isActivePath ? theme.traceActive : theme.trace,
          traceBright: isActivePath ? theme.traceActive : theme.traceBright,
        }
        return (
          <g key={i}>
            <TracePath d={d} theme={pathTheme} width={isActivePath ? 2 : 1.5} animated={isActivePath} />
            <FlowElectron path={d} dur={isActivePath ? 5 : 8 + i * 0.5} delay={i * 1.2} theme={theme} />
          </g>
        )
      })}
      {nodes.map((node, i) => {
        const p = positions[i]
        if (!p) return null
        const active = i === activeIndex
        const label = node.label.length > 18 ? `${node.label.slice(0, 16)}…` : node.label
        const rx = layout === 'h' ? p.x : p.x - p.w / 2
        const ry = layout === 'h' ? p.y - 24 : p.y - 20
        const tx = layout === 'h' ? p.x + p.w / 2 : p.x
        const ty = layout === 'h' ? p.y + 4 : p.y + 2
        const cx = layout === 'h' ? p.x + p.w / 2 : p.x
        const cy = layout === 'h' ? p.y : p.y + 2
        return (
          <g key={node.id ?? i}>
            <ActiveNodePulse x={cx} y={cy} active={active} color={theme.nodeActiveStroke} />
            <rect
              x={rx}
              y={ry}
              width={p.w}
              height={layout === 'h' ? 48 : 40}
              rx="8"
              fill={active ? theme.nodeActiveFill : theme.nodeBg}
              stroke={active ? theme.nodeActiveStroke : theme.nodeBorder}
              strokeWidth={active ? 2 : 1}
            />
            <text
              x={tx}
              y={ty}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={active ? theme.textHighlight : theme.textActive}
              fontSize={layout === 'h' ? 10.5 : 10}
              fontWeight={active ? '600' : '500'}
              fontFamily="Inter, sans-serif"
            >
              {label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

export default function ConnectionFlow({ nodes, variant = 'light', className = '', layout = 'auto', activeIndex = -1 }) {
  const theme = THEMES[variant]
  const uid = useId().replace(/:/g, '')
  const filterId = `cf-${uid}`
  const isMd = useMinMd()
  if (!nodes?.length) return null

  const resolvedLayout = layout === 'auto' ? (isMd ? 'h' : 'v') : layout
  const layoutClass =
    resolvedLayout === 'v'
      ? 'w-full max-w-[320px] mx-auto h-auto'
      : 'w-full h-auto'

  return (
    <div className={`relative w-full ${className}`}>
      <FlowSvg
        nodes={nodes}
        layout={resolvedLayout}
        theme={theme}
        variant={variant}
        activeIndex={activeIndex}
        filterId={filterId}
        className={layoutClass}
      />
    </div>
  )
}

export function VerticalElectronLine({ variant = 'light', className = '', height = 200 }) {
  const theme = THEMES[variant]
  const uid = useId().replace(/:/g, '')
  const filterId = `vel-${uid}`
  const path = `M 10 0 V ${height}`

  return (
    <svg className={`w-5 shrink-0 ${className}`} viewBox={`0 0 20 ${height}`} preserveAspectRatio="none" aria-hidden="true">
      <FlowDefs variant={variant === 'dark' ? 'dark' : 'light'} filterId={filterId} />
      <TracePath d={path} theme={theme} width={1.5} />
      <FlowElectron path={path} dur="8s" delay={0} theme={theme} />
    </svg>
  )
}
