import Eyebrow from './Eyebrow'

export default function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  titleAfter,
  para,
  dark = false,
  center = false,
  className = '',
}) {
  return (
    <div className={`${center ? 'max-w-[640px] mx-auto text-center' : 'max-w-[580px]'} mb-8 sm:mb-10 min-w-0 ${className}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2 className={`section-title mb-4 ${dark ? 'text-white' : 'text-text-primary'}`}>
        {title}
        {titleHighlight && (
          <span className="text-accent">{titleHighlight}</span>
        )}
        {titleAfter}
      </h2>
      {para && (
        <p className={`section-para m-0 ${dark ? 'text-white/60' : 'text-text-secondary'}`}>
          {para}
        </p>
      )}
    </div>
  )
}
