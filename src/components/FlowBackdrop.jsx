import ElectronFlow from './ElectronFlow'

export default function FlowBackdrop({ variant = 'light', opacity }) {
  const resolved = opacity ?? (variant === 'dark' ? 0.22 : 0.14)

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      <ElectronFlow
        variant={variant}
        className="w-full h-full"
        style={{ opacity: resolved }}
      />
    </div>
  )
}
