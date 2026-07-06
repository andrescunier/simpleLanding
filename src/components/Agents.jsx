import { useState, useEffect } from 'react'
import Icon from './Icons'
import { useLang } from '../i18n'
import SectionHeader from './ui/SectionHeader'
import Card from './ui/Card'
import FlowBackdrop from './FlowBackdrop'

const AGENT_ICONS = ['briefcase', 'chat', 'card', 'box', 'truck', 'megaphone', 'gear', 'scale', 'chart', 'rocket', 'folder', 'shield']

export default function Agents() {
  const { t } = useLang()
  const levelCount = t.agents.levels.length
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % levelCount), 4000)
    return () => clearInterval(timer)
  }, [levelCount])

  return (
    <section id="catalogo" className="relative overflow-hidden py-14 md:py-20 bg-surface-muted">
      <FlowBackdrop variant="light" opacity={0.1} />
      <div className="relative z-[1] max-w-[1080px] mx-auto px-4 sm:px-6 min-w-0">

        <SectionHeader
          eyebrow={t.agents.eyebrow}
          title={t.agents.h2}
          para={t.agents.para}
          className="mb-12"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-16 min-w-0">
          {t.agents.items.map((a, i) => (
            <Card key={a.name} className="p-5 flex flex-col h-full">
              <div className="flex items-center gap-2.5 mb-2.5 min-w-0">
                <span className="w-8 h-8 flex items-center justify-center shrink-0 rounded-md bg-surface-muted text-text-secondary">
                  <Icon name={AGENT_ICONS[i]} className="w-[18px] h-[18px]" />
                </span>
                <h3 className="text-sm font-medium text-text-primary m-0 leading-snug min-w-0">{a.name}</h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-3 flex-1">{a.desc}</p>
              <span className="text-xs text-text-muted">{a.value}</span>
            </Card>
          ))}
        </div>

        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-text-primary mb-3">{t.agents.ladderTitle}</h3>
            <p className="text-sm text-text-secondary leading-relaxed m-0">{t.agents.ladderPara}</p>
          </div>

          <div className="flex gap-4">
            <div className="hidden sm:block w-px shrink-0 bg-gradient-to-b from-transparent via-accent/25 to-transparent min-h-[420px]" aria-hidden="true" />
            <div className="flex-1 flex flex-col gap-3 min-w-0">
              {t.agents.levels.map((l, i) => (
                <Card
                  key={i}
                  className={`p-4 flex items-start gap-3.5 w-full transition-colors duration-300 ${
                    i === active ? 'border-accent/30 bg-accent/[0.03]' : ''
                  }`}
                >
                  <span className={`w-8 h-8 flex items-center justify-center shrink-0 rounded-md text-xs font-medium ${
                    i === active ? 'bg-accent text-white' : 'bg-accent/15 text-accent'
                  }`}>
                    {i}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h4 className={`text-sm font-medium m-0 mb-0.5 ${i === active ? 'text-accent' : 'text-text-primary'}`}>{l.name}</h4>
                    <p className="text-xs text-text-secondary leading-snug m-0">{l.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
