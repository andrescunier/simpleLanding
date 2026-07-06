import { useState, useEffect } from 'react'
import { useLang } from '../i18n'
import SectionHeader from './ui/SectionHeader'
import Card from './ui/Card'
import ConnectionFlow from './ConnectionFlow'
import FlowBackdrop from './FlowBackdrop'

export default function Platform() {
  const { t } = useLang()
  const p = t.platform
  const [active, setActive] = useState(0)
  const nodeCount = p.connectionNodes.length

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % nodeCount), 4000)
    return () => clearInterval(timer)
  }, [nodeCount])

  return (
    <section id="producto" className="relative overflow-hidden py-14 md:py-20 bg-white border-b border-border">
      <FlowBackdrop variant="light" opacity={0.12} />
      <div className="relative z-[1] max-w-[1080px] mx-auto px-4 sm:px-6 min-w-0">

        <SectionHeader
          eyebrow={p.eyebrow}
          title={p.h2}
          para={p.para}
          className="mb-10"
        />

        <p className="text-xs font-medium text-text-muted uppercase tracking-wide mb-4 text-center">
          {p.flowLabel}
        </p>
        <ConnectionFlow nodes={p.connectionNodes} variant="light" className="mb-12" activeIndex={active} />

        <p className="text-xs font-medium text-text-muted uppercase tracking-wide mb-4">
          {p.includedLabel}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {p.pillars.map((pillar, i) => (
            <Card key={pillar.id} className="p-5 flex flex-col h-full">
              <span className="text-xs font-medium text-accent mb-2">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="text-sm font-semibold text-text-primary mb-2">{pillar.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed m-0 flex-1">{pillar.desc}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">{p.templatesTitle}</h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-5">{p.templatesPara}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {p.templates.map(tpl => (
                <Card key={tpl.name} className="p-4 h-full">
                  <h4 className="text-sm font-medium text-text-primary mb-1.5">{tpl.name}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed m-0">{tpl.desc}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">{p.modelsTitle}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {p.models.map(m => (
                <Card key={m.title} className="p-4 text-center h-full">
                  <h4 className="text-sm font-semibold text-text-primary mb-1">{m.title}</h4>
                  <p className="text-xs text-text-secondary leading-snug m-0">{m.desc}</p>
                </Card>
              ))}
            </div>
            <Card className="p-5">
              <h4 className="text-sm font-semibold text-text-primary mb-1">{p.productTitle}</h4>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">{p.productPara}</p>
              <p className="text-xs font-medium text-text-muted mb-2">{p.productExample.product}</p>
              <ul className="space-y-2 m-0 p-0 list-none">
                {p.productExample.rules.map((rule, i) => (
                  <li key={i} className="text-xs text-text-secondary pl-3 border-l-2 border-accent/30 leading-snug">
                    {rule}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

      </div>
    </section>
  )
}