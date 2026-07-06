import { motion } from 'framer-motion'
import { useLang } from '../i18n'
import SectionHeader from './ui/SectionHeader'
import PreviewScreenshot from './PreviewScreenshot'
import FlowBackdrop from './FlowBackdrop'

export default function Dashboard() {
  const { t } = useLang()
  const shot = t.hero.preview.screenshots.dashboard

  return (
    <section id="dashboard" className="relative overflow-hidden py-14 md:py-20 bg-white">
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
            eyebrow={t.dashboard.eyebrow}
            title={t.dashboard.h2}
            para={t.dashboard.para}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="min-w-0"
        >
          <PreviewScreenshot
            src="/preview-dashboard.png"
            alt={shot.alt}
            label={t.hero.preview.labels.dashboard}
            badge={t.hero.preview.badges.live}
            dark
            url={shot.url}
            fullHeight
          />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {t.dashboard.pills.map(f => (
            <span key={f} className="px-3 py-1.5 rounded-md border border-border bg-surface-muted text-text-secondary text-xs font-medium">
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
