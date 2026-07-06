import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLang } from '../i18n'
import SectionHeader from './ui/SectionHeader'
import Button from './ui/Button'
import Card from './ui/Card'
import ConnectionFlow from './ConnectionFlow'
import FlowBackdrop from './FlowBackdrop'

export default function Brainiac() {
  const { t } = useLang()
  const nodeCount = t.platform.connectionNodes.length
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % nodeCount), 4000)
    return () => clearInterval(timer)
  }, [nodeCount])

  return (
    <section id="brainiac" className="relative overflow-hidden py-14 md:py-20 bg-surface-dark">
      <FlowBackdrop variant="dark" opacity={0.2} />
      <div className="relative z-[1] max-w-[1080px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-start min-w-0">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <SectionHeader
            dark
            eyebrow={t.brainiac.eyebrow}
            title={t.brainiac.h2}
            para={t.brainiac.para}
            className="mb-5"
          />
          <Card dark className="p-4 mb-6">
            <p className="text-sm text-white/60 leading-relaxed m-0">
              <span className="text-white font-medium">{t.brainiac.liveTitle}</span>
              {t.brainiac.liveText}
            </p>
          </Card>
          <Button href="#contacto" variant="ghost" className="text-white/60 hover:text-white px-0 h-auto">
            {t.brainiac.link} →
          </Button>
        </motion.div>

        <div className="min-w-0">
          <Card dark className="overflow-hidden mb-6">
            {t.brainiac.rows.map((row, i) => {
              const activeRow = i === active % t.brainiac.rows.length
              return (
                <div
                  key={i}
                  className={`flex flex-col sm:flex-row items-start gap-2 sm:gap-4 px-5 py-4 border-b border-border-dark last:border-0 ${
                    activeRow ? 'bg-white/[0.03]' : ''
                  }`}
                >
                  <span className={`shrink-0 text-xs font-medium uppercase tracking-wide ${
                    activeRow ? 'text-accent' : 'text-text-muted'
                  }`}>
                    {row.label}
                  </span>
                  <p className="text-sm text-white/60 leading-relaxed m-0 min-w-0">{row.text}</p>
                </div>
              )
            })}
          </Card>
          <ConnectionFlow nodes={t.platform.connectionNodes} variant="dark" activeIndex={active} />
        </div>
      </div>
    </section>
  )
}
