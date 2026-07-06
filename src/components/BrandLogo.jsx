// Ícono + wordmark tipográfico — proporciones de navbar SaaS.

const SIZES = {
  sm: {
    wrap: 'gap-2',
    icon: 'h-6 w-6 sm:h-7 sm:w-7',
    text: 'text-base sm:text-lg',
  },
  md: {
    wrap: 'gap-2 sm:gap-2.5',
    icon: 'h-7 w-7 sm:h-8 sm:w-8',
    text: 'text-lg',
  },
  lg: {
    wrap: 'gap-2.5 sm:gap-3',
    icon: 'h-8 w-8 sm:h-9 sm:w-9',
    text: 'text-xl',
  },
}

export default function BrandLogo({ className = '', size = 'md', wordmark = true }) {
  const s = SIZES[size]

  return (
    <span className={`inline-flex items-center min-w-0 ${s.wrap} ${className}`}>
      <img
        src="/simple-icon.png"
        alt=""
        aria-hidden="true"
        className={`${s.icon} shrink-0 object-contain`}
      />
      {wordmark && (
        <span className={`${s.text} font-semibold tracking-[-0.03em] text-text-primary leading-none truncate`}>
          Simple
        </span>
      )}
    </span>
  )
}
