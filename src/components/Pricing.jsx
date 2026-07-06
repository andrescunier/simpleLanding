import { motion } from 'framer-motion'
import { useLang } from '../i18n'
import SectionHeader from './ui/SectionHeader'
import Card from './ui/Card'
import FlowBackdrop from './FlowBackdrop'

const HIGHLIGHT_INDEX = 1

export default function Pricing() {
  const { t } = useLang()

  return (
    <section id="precios" className="relative overflow-hidden py-14 md:py-20 bg-white">
      <FlowBackdrop variant="light" opacity={0.16} />
      <div className="relative z-[1] max-w-[1080px] mx-auto px-4 sm:px-6 min-w-0">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <SectionHeader
            center
            eyebrow={t.pricing.eyebrow}
            title={t.pricing.h2}
            para={t.pricing.para}
            className="mb-12"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-w-0">
          {t.pricing.tiers.map((tier, i) => {
            const highlight = i === HIGHLIGHT_INDEX
            return (
              <Card key={tier.tag} highlight={highlight} className="flex flex-col p-6">
                <span className="text-xs font-medium text-text-muted uppercase tracking-wide mb-4">
                  {tier.tag}
                </span>

                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-2xl font-semibold tracking-tight text-text-primary leading-none">
                    {tier.price}
                  </span>
                  {tier.unit && (
                    <span className="text-sm text-text-muted">{tier.unit}</span>
                  )}
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {tier.desc}
                </p>

                <ul className="space-y-2 m-0 p-0 list-none mt-auto">
                  {tier.features.map((f, j) => (
                    <li key={j} className="text-sm text-text-secondary leading-snug pl-3 border-l border-border">
                      {f}
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>

        <p className="text-center text-sm text-text-muted mt-8 mb-0">
          {t.pricing.footerText}
          <a href="#contacto" className="text-accent font-medium hover:text-accent-hover transition-colors">
            {t.pricing.footerLink}
          </a>
        </p>
      </div>
    </section>
  )
}
