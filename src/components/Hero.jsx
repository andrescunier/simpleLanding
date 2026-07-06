import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import HeroPreview, { HERO_PREVIEW_SLIDES } from './HeroPreview'
import FlowBackdrop from './FlowBackdrop'
import { useLang } from '../i18n'
import Eyebrow from './ui/Eyebrow'
import Button from './ui/Button'

const ease = [0.16, 1, 0.3, 1]
const SLIDE_INTERVAL = 2800

function RotatingWord({ words, index, className = '', block = false, auto = false, interval = 2200 }) {
  const [autoIndex, setAutoIndex] = useState(0)
  const active = auto ? autoIndex : index

  useEffect(() => {
    if (!auto) return
    const id = setInterval(() => setAutoIndex(i => (i + 1) % words.length), interval)
    return () => clearInterval(id)
  }, [auto, words.length, interval])

  const longest = Math.max(...words.map(w => w.length))
  const minWidth = block ? undefined : `${longest * 0.62 + 0.5}ch`

  return (
    <span
      className={`relative overflow-hidden ${block ? 'block min-h-[1.15em] sm:min-h-[1.08em]' : 'inline-flex align-bottom'} ${className}`}
      style={minWidth ? { minWidth } : undefined}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[active]}
          className={`${block ? 'absolute inset-x-0 top-0 whitespace-nowrap' : ''}`}
          initial={{ y: block ? 12 : 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: block ? -12 : -10, opacity: 0 }}
          transition={{ duration: 0.32, ease }}
        >
          {words[active]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function Hero() {
  const { t } = useLang()
  const slideCount = HERO_PREVIEW_SLIDES.length
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % slideCount), SLIDE_INTERVAL)
    return () => clearInterval(id)
  }, [slideCount])

  return (
    <section className="relative overflow-hidden py-12 sm:py-14 md:py-20 lg:py-24 bg-surface-light">
      <div className="hero-waves pointer-events-none" aria-hidden="true" />
      <FlowBackdrop variant="light" opacity={0.14} />

      <div className="relative z-[1] max-w-[1080px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] gap-8 sm:gap-10 lg:gap-14 items-center min-w-0">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="min-w-0 order-1"
        >
          <Eyebrow>{t.hero.eyebrow}</Eyebrow>

          <h1 className="text-[clamp(1.75rem,5.5vw,3.5rem)] font-semibold tracking-[-0.03em] leading-[1.08] text-text-primary mb-4 sm:mb-5">
            {t.hero.h1Line1}
            <RotatingWord
              words={t.hero.h1Rotate}
              index={index % t.hero.h1Rotate.length}
              className="text-accent"
              block
            />
          </h1>

          <p className="text-[0.9375rem] sm:text-base text-text-secondary leading-relaxed mb-6 sm:mb-8 max-w-[480px]">
            {t.hero.ledeBefore}
            <RotatingWord words={t.hero.verbs} className="font-medium text-accent" auto />
            {t.hero.ledeAfter}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8 sm:mb-10">
            <Button href="#contacto" variant="pill" className="w-full sm:w-auto">{t.hero.ctaPrimary}</Button>
            <Button href="#flujo" variant="secondary" className="w-full sm:w-auto justify-center">{t.hero.ctaSecondary}</Button>
          </div>

          <dl className="grid grid-cols-1 min-[420px]:grid-cols-3 gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-border">
            {t.hero.proof.map((p, i) => (
              <div key={i} className="min-w-0">
                <dt className="text-sm font-semibold text-text-primary mb-0.5">{p.stat}</dt>
                <dd className="text-sm text-text-muted leading-snug m-0">{p.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease }}
          className="min-w-0 w-full order-2 md:order-none"
        >
          <HeroPreview index={index} />
        </motion.div>
      </div>
    </section>
  )
}
