export default function Eyebrow({ children, dark = false, className = '' }) {
  return (
    <p className={`text-sm font-medium tracking-wide mb-3 text-text-muted ${className}`}>
      {children}
    </p>
  )
}
