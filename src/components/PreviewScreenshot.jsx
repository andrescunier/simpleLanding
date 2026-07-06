function PreviewShell({ label, badge, children, dark = false }) {
  return (
    <div className={`rounded-lg overflow-hidden border w-full min-w-0 ${dark ? 'border-border-dark bg-surface-dark' : 'border-border bg-white shadow-sm'}`}>
      <div className={`flex items-center justify-between px-3 sm:px-4 py-2.5 border-b gap-2 min-w-0 ${dark ? 'border-border-dark' : 'border-border bg-surface-muted/60'}`}>
        <span className={`text-xs font-semibold truncate min-w-0 ${dark ? 'text-white/80' : 'text-text-primary'}`}>{label}</span>
        {badge && (
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap ${dark ? 'bg-accent/20 text-blue-200' : 'bg-accent/10 text-accent'}`}>
            {badge}
          </span>
        )}
      </div>
      {children}
    </div>
  )
}

function BrowserChrome({ dark = false, url }) {
  return (
    <div className={`flex items-center gap-2 px-3 py-2 border-b shrink-0 ${dark ? 'border-white/10 bg-[#0B0E14]' : 'border-border bg-surface-muted/80'}`}>
      <div className="flex gap-1.5 shrink-0" aria-hidden="true">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
      </div>
      {url && (
        <span className={`flex-1 text-center text-[10px] truncate px-2 py-0.5 rounded ${dark ? 'bg-white/5 text-white/35' : 'bg-white text-text-muted border border-border'}`}>
          {url}
        </span>
      )}
    </div>
  )
}

export default function PreviewScreenshot({
  src,
  alt,
  label,
  badge,
  dark = false,
  url,
  aspect = 'aspect-[16/10]',
  objectPosition = 'object-top',
  fullHeight = false,
}) {
  return (
    <PreviewShell label={label} badge={badge} dark={dark}>
      <div className={`overflow-hidden ${dark ? 'bg-[#0B0E14]' : 'bg-surface-muted'}`}>
        {url && <BrowserChrome dark={dark} url={url} />}
        <div className={fullHeight ? 'w-full' : `${aspect} w-full relative`}>
          <img
            src={src}
            alt={alt}
            className={`w-full ${fullHeight ? 'h-auto block' : `h-full ${objectPosition} object-cover`}`}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </PreviewShell>
  )
}

export { PreviewShell }
