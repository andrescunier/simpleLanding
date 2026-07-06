import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLang } from '../i18n'
import SectionHeader from './ui/SectionHeader'
import Card from './ui/Card'
import ConnectionFlow from './ConnectionFlow'
import FlowBackdrop from './FlowBackdrop'

const ease = [0.16, 1, 0.3, 1]

export default function Solution() {
  const { t } = useLang()
  const [active, setActive] = useState(0)
  const steps = t.solution.steps

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % steps.length), 4000)
    return () => clearInterval(timer)
  }, [steps.length])

  const step = steps[active]
  const progress = ((active + 1) / steps.length) * 100

  return (
    <section id="flujo" className="relative overflow-hidden py-14 md:py-20 bg-surface-muted">
      <div className="hero-waves pointer-events-none" aria-hidden="true" />
      <FlowBackdrop variant="light" opacity={0.12} />
      <div className="relative z-[1] max-w-[1080px] mx-auto px-4 sm:px-6 min-w-0">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <SectionHeader
            center
            eyebrow={t.solution.eyebrow}
            title={t.solution.h2Before}
            titleHighlight={t.solution.h2Highlight}
            titleAfter={t.solution.h2After}
            para={t.solution.para}
          />
        </motion.div>

        <div className="max-w-[880px] mx-auto mb-6">
          <div className="h-1 rounded-full bg-border overflow-hidden">
            <motion.div
              className="h-full bg-accent rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.6, ease }}
            />
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,320px)] gap-8 lg:gap-12 items-start max-w-[880px] mx-auto">
          <div className="order-2 lg:order-1 min-w-0">
            <p className="text-xs font-medium text-text-muted uppercase tracking-wide mb-4 text-center lg:text-left">
              {t.solution.flowLabel}
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.35, ease }}
              >
                <Card highlight className="p-5 sm:p-6">
                  <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-accent text-white text-xs font-semibold mb-3">
                    {String(active + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed m-0">{step.body}</p>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="order-1 lg:order-2 min-w-0">
            <ConnectionFlow
              nodes={t.solution.connectionNodes}
              variant="light"
              layout="v"
              activeIndex={active}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
