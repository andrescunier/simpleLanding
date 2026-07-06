import { useLang } from '../i18n'

function ProcessingLine({ text }) {
  return (
    <p className="text-[10px] sm:text-xs text-white/35 px-1 feed-in flex items-center gap-1.5">
      <span className="text-accent/50">···</span>
      <span>{text}</span>
    </p>
  )
}

export default function AgentFeed({ embedded = false }) {
  const { t } = useLang()

  return (
    <div className={`overflow-hidden bg-surface-dark w-full min-w-0 ${embedded ? '' : 'rounded-lg border border-border-dark'}`}>

      <div className="flex items-center justify-between px-3 sm:px-4 py-3 border-b border-border-dark gap-2 min-w-0">
        <div className="flex items-center gap-2 min-w-0">
          <img src="/simple-icon.png" alt="" className="w-6 h-6 object-contain shrink-0" />
          <span className="text-sm font-semibold text-white/80 truncate">Simple</span>
        </div>
        <span className="text-[10px] sm:text-xs shrink-0 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-text-muted">{t.feed.status}</span>
        </span>
      </div>

      <div className="px-3 sm:px-4 py-3 sm:py-4 flex flex-col gap-3 relative">
        <div className="absolute left-6 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-accent/25 to-transparent" aria-hidden="true" />

        <div className="flex items-start gap-2.5 sm:gap-3 feed-in feed-in-1 min-w-0 relative z-[1]">
          <div className="w-8 h-8 rounded-full bg-white/10 text-white/50 text-[10px] font-medium flex items-center justify-center shrink-0 ring-1 ring-white/10">
            WA
          </div>
          <div className="bg-white/[0.06] rounded-lg rounded-tl-sm px-3 py-2.5 max-w-[90%] sm:max-w-[88%] min-w-0 border border-white/[0.04]">
            <span className="block text-[10px] text-white/35 mb-1">{t.feed.inLabel}</span>
            <p className="text-[13px] sm:text-sm text-white/75 leading-snug m-0">{t.feed.inText}</p>
          </div>
        </div>

        <ProcessingLine text={t.feed.processing} />

        <div className="flex items-start gap-2.5 sm:gap-3 flex-row-reverse feed-in feed-in-2 min-w-0 relative z-[1]">
          <div className="w-8 h-8 rounded-full bg-accent/20 shrink-0 ring-2 ring-accent/30" />
          <div className="bg-surface-card border border-accent/20 rounded-lg rounded-tr-sm px-3 py-2.5 max-w-[90%] sm:max-w-[88%] min-w-0">
            <span className="block text-[10px] text-white/35 mb-1 text-right">{t.feed.outLabel}</span>
            <p className="text-[13px] sm:text-sm text-white/75 leading-snug m-0">{t.feed.outText}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-2 gap-y-1 feed-in feed-in-3 relative z-[1]">
          {t.feed.tags.map(tag => (
            <span key={tag} className="text-[10px] sm:text-xs text-accent/70 bg-accent/10 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
