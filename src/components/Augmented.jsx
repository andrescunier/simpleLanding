import { motion } from 'framer-motion'
import { useLang } from '../i18n'
import SectionHeader from './ui/SectionHeader'
import Card from './ui/Card'
import FlowBackdrop from './FlowBackdrop'

export default function Augmented() {
  const { t } = useLang()

  return (
    <section id="organizacion" className="relative overflow-hidden py-14 md:py-20 bg-surface-dark">
      <FlowBackdrop variant="dark" opacity={0.2} />
      <div className="relative z-[1] max-w-[1080px] mx-auto px-4 sm:px-6 min-w-0">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <SectionHeader
            dark
            eyebrow={t.augmented.eyebrow}
            title={t.augmented.h2}
            para={t.augmented.para}
            className="mb-12"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <Card dark className="p-6">
            <h3 className="text-xs font-medium text-text-muted uppercase tracking-wide mb-4">{t.augmented.beforeTitle}</h3>
            <ul className="space-y-2.5 m-0 p-0 list-none">
              {t.augmented.before.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-white/55 leading-relaxed">
                  <span className="text-white/30 mt-0.5 shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card dark highlight className="p-6">
            <h3 className="text-xs font-medium text-text-muted uppercase tracking-wide mb-4">{t.augmented.afterTitle}</h3>
            <ul className="space-y-2.5 m-0 p-0 list-none">
              {t.augmented.after.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-white/70 leading-relaxed">
                  <span className="text-accent mt-0.5 shrink-0">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6">
            <h3 className="text-xl font-semibold text-white m-0">{t.augmented.layersTitle}</h3>
            <p className="text-sm text-white/45 m-0">{t.augmented.layersSub}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {t.augmented.layers.map((layer, i) => (
              <Card key={layer.name} dark className="p-4">
                <span className="block text-xs text-text-muted mb-1">{String(i + 1).padStart(2, '0')}</span>
                <span className="block text-sm font-medium text-white mb-1">{layer.name}</span>
                <span className="block text-xs text-white/45 leading-snug">{layer.desc}</span>
              </Card>
            ))}
          </div>

          <p className="mt-8 text-center text-base text-white/55">
            {t.augmented.closing1}<span className="text-white font-medium">{t.augmented.closing2}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
