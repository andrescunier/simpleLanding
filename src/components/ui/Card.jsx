export default function Card({ children, dark = false, highlight = false, className = '' }) {
  const base = dark
    ? 'bg-surface-card border-border-dark'
    : 'bg-white border-border'
  const ring = highlight ? 'border-accent border-2' : 'border'

  return (
    <div className={`rounded-lg ${base} ${ring} ${className}`}>
      {children}
    </div>
  )
}
