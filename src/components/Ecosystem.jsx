import Icon from './Icons'
import { useLang } from '../i18n'
import SectionHeader from './ui/SectionHeader'
import Card from './ui/Card'
import FlowBackdrop from './FlowBackdrop'

const CATEGORY_ICONS = ['bolt', 'antenna', 'link', 'brain']

function IntegrationsMarquee({ items }) {
  return (
    <div className="marquee-mask overflow-hidden mb-12">
      <div className="flex gap-2 w-max" style={{ animation: 'marquee 45s linear infinite' }}>
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="shrink-0 px-3 py-1.5 rounded-md border border-border bg-white text-text-secondary text-sm font-medium whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Ecosystem() {
  const { t } = useLang()
  const marqueeItems = [...new Set([...t.ecosystem.categories[1].items, ...t.ecosystem.categories[2].items])]

  return (
    <section id="modulos" className="relative overflow-hidden py-14 md:py-20 bg-surface-muted">
      <FlowBackdrop variant="light" opacity={0.18} />
      <div className="relative z-[1] max-w-[1080px] mx-auto px-4 sm:px-6 min-w-0">

        <SectionHeader
          eyebrow={t.ecosystem.eyebrow}
          title={t.ecosystem.h2}
          para={t.ecosystem.para}
          className="mb-12"
        />

        <IntegrationsMarquee items={marqueeItems} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.ecosystem.categories.map((cat, i) => (
            <Card key={cat.label} className="p-5 sm:p-6 min-w-0">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="w-7 h-7 flex items-center justify-center rounded-md bg-surface-muted text-text-secondary">
                  <Icon name={CATEGORY_ICONS[i]} className="w-4 h-4" />
                </span>
                <span className="text-xs font-medium text-text-secondary uppercase tracking-wide">{cat.label}</span>
                <span className="sm:ml-auto text-xs text-text-muted">{cat.items.length} {t.ecosystem.available}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map(item => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-md border border-border bg-white text-xs text-text-secondary"
                  >
                    {item}
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
