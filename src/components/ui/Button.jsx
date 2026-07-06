const VARIANTS = {
  primary: 'text-white bg-accent hover:bg-accent-hover border border-transparent',
  secondary: 'text-text-primary bg-white border border-border hover:bg-surface-muted',
  ghost: 'text-text-secondary hover:text-text-primary border border-transparent',
  dark: 'text-white bg-white/10 border border-white/15 hover:bg-white/15',
  pill: 'text-white bg-accent hover:bg-accent-hover border border-transparent rounded-full pl-5 pr-1.5 py-1 h-11 gap-3',
}

function ArrowIcon() {
  return (
    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0" aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M3 7h8M8 4l3 3-3 3" stroke="#1D4ED8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

export default function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  type = 'button',
  arrow = false,
  ...props
}) {
  const isPill = variant === 'pill'
  const cls = `inline-flex items-center justify-center text-sm font-medium transition-colors ${
    isPill ? VARIANTS.pill : `h-10 px-5 rounded-md ${VARIANTS[variant]}`
  } ${className}`

  const content = (
    <>
      <span className={isPill ? 'truncate' : undefined}>{children}</span>
      {(arrow || isPill) && <ArrowIcon />}
    </>
  )

  if (href) {
    return <a href={href} className={cls} {...props}>{content}</a>
  }
  return <button type={type} className={cls} {...props}>{content}</button>
}
