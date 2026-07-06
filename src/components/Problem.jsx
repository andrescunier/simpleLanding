import { motion } from 'framer-motion'
import { useLang } from '../i18n'
import SectionHeader from './ui/SectionHeader'
import Card from './ui/Card'
import FlowBackdrop from './FlowBackdrop'

export default function Problem() {
  const { t } = useLang()

  return (
    <section id="problema" className="relative overflow-hidden py-14 md:py-20 bg-surface-dark">
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
            eyebrow={t.problem.eyebrow}
            title={t.problem.h2}
            para={t.problem.para}
            className="mb-6"
          />
          <blockquote className="border-l-2 border-accent/60 pl-4 text-base text-white/70 leading-relaxed m-0">
            {t.problem.quote}
          </blockquote>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 min-w-0">
          {t.problem.cards.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <Card dark className="p-5 h-full border-l-2 border-l-accent/40">
                <h3 className="text-[0.95rem] font-medium text-white mb-2 leading-snug">{p.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed m-0">{p.body}</p>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
