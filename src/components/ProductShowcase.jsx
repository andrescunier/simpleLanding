import { motion } from 'framer-motion'
import { useLang } from '../i18n'
import SectionHeader from './ui/SectionHeader'
import Button from './ui/Button'
import FlowBackdrop from './FlowBackdrop'

export default function ProductShowcase() {
  const { t } = useLang()
  const s = t.showcase

  return (
    <section className="relative overflow-hidden py-14 md:py-20 bg-white border-y border-border">
      <FlowBackdrop variant="light" opacity={0.1} />
      <div className="relative z-[1] max-w-[1080px] mx-auto px-4 sm:px-6 min-w-0">

        <SectionHeader
          center
          eyebrow={s.eyebrow}
          title={s.h2}
          titleHighlight={s.h2Highlight}
          titleAfter={s.h2After}
          para={s.para}
          className="mb-10 sm:mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-[880px] min-h-[240px] sm:min-h-[320px] md:min-h-[380px]"
        >
          <div className="absolute left-0 top-4 sm:top-8 w-[72%] sm:w-[68%] rounded-xl overflow-hidden border border-border shadow-lg bg-[#0B0E14] z-[1]">
            <img src="/preview-dashboard.png" alt={s.dashboardAlt} className="w-full h-auto block object-cover object-top" loading="lazy" />
          </div>
          <div className="absolute right-0 bottom-0 w-[58%] sm:w-[52%] rounded-xl overflow-hidden border border-border shadow-xl bg-white z-[2]">
            <img src="/preview-front.png" alt={s.frontAlt} className="w-full h-auto block object-cover object-top" loading="lazy" />
          </div>
        </motion.div>

        <div className="text-center mt-10 sm:mt-12">
          <Button href="#contacto" variant="pill">{s.cta}</Button>
        </div>
      </div>
    </section>
  )
}
