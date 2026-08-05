import Icon from './Icons'
import { useLang } from '../i18n'
import SectionHeader from './ui/SectionHeader'
import Card from './ui/Card'
import FlowBackdrop from './FlowBackdrop'

const DIFF_ICONS = ['puzzle', 'sliders', 'building', 'handshake']

export default function UseCases() {
  const { t } = useLang()

  return (
    <section id="casos" className="relative overflow-hidden py-14 md:py-20 bg-white">
      <FlowBackdrop variant="light" opacity={0.16} />
      <div className="relative z-[1] max-w-[1080px] mx-auto px-4 sm:px-6 min-w-0">

        <SectionHeader
          eyebrow={t.useCases.eyebrow}
          title={t.useCases.h2}
          para={t.useCases.para}
          className="mb-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-16 min-w-0">
          {t.useCases.differentials.map((d, i) => (
            <Card key={i} className="p-5 flex flex-col">
              <span className="w-9 h-9 mb-4 flex items-center justify-center rounded-md bg-surface-muted text-text-secondary">
                <Icon name={DIFF_ICONS[i]} className="w-5 h-5" />
              </span>
              <h3 className="text-sm font-medium text-text-primary mb-2 leading-snug">{d.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed m-0">{d.body}</p>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
          <h3 className="text-xl font-semibold text-text-primary m-0">{t.useCases.happening}</h3>
          <p className="text-sm text-text-muted m-0">{t.useCases.happeningSub}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-10 pb-8 border-b border-border">
          <span className="text-xs font-medium text-text-muted uppercase tracking-wide">
            {t.useCases.industriesLabel}
          </span>
          {t.useCases.clients.map(c => (
            <span key={c} className="text-sm font-medium text-text-secondary">{c}</span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-w-0">
          {t.useCases.cases.map((c, i) => (
            <Card key={i} className="p-6 flex flex-col">
              <h4 className="text-base font-medium text-text-primary mb-3 leading-snug">{c.sector}</h4>
              <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">{c.body}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded-md border border-border bg-surface-muted text-xs text-text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
