import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useLang } from '../i18n'
import SectionHeader from './ui/SectionHeader'
import Button from './ui/Button'
import Card from './ui/Card'
import FlowBackdrop from './FlowBackdrop'
import ChannelHub from './ChannelHub'

export function Avatar({ actor, size = 'md' }) {
  const cls = {
    sm: 'w-9 h-9 rounded-full',
    md: 'w-12 h-12 rounded-full',
    lg: 'w-20 h-20 sm:w-24 sm:h-24 rounded-lg',
    xl: 'w-36 h-36 sm:w-44 sm:h-44 rounded-lg',
  }[size]

  return (
    <img
      src={`/${actor.id}.jpg`}
      alt={actor.name}
      className={`${cls} object-cover object-top shrink-0 border border-border-dark bg-surface-card`}
    />
  )
}

function Chat({ actor, t }) {
  return (
    <Card dark className="flex flex-col overflow-hidden min-w-0 h-full">
      <div className="px-4 py-3 border-b border-border-dark flex flex-col sm:flex-row sm:items-center gap-1.5">
        <span className="text-xs text-text-muted">{t.actors.conversationLabel}</span>
        <span className="text-sm text-white/50 sm:ml-auto">{actor.context}</span>
      </div>

      <div className="flex-1 px-4 py-4 flex flex-col gap-3 min-w-0">
        {actor.messages.map((msg, i) => {
          if (msg.from === 'system') {
            return (
              <p key={i} className="text-xs text-white/35 text-center py-1 m-0">{msg.text}</p>
            )
          }

          const isActor = msg.from === 'actor'
          return (
            <div key={i} className={`flex items-start gap-2.5 ${isActor ? '' : 'flex-row-reverse'}`}>
              {isActor && <Avatar actor={actor} size="sm" />}
              <div className={`max-w-[85%] min-w-0 px-3 py-2 rounded-md text-sm leading-snug ${
                isActor ? 'bg-surface-card border border-border-dark text-white/75' : 'bg-white/[0.06] text-white/75'
              }`}>
                {isActor && <span className="block text-[10px] text-white/35 mb-0.5">{actor.name}</span>}
                {msg.text}
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}

export default function Actors() {
  const { t } = useLang()
  const actors = t.actors.list
  const [selectedId, setSelectedId] = useState(actors[0].id)
  const actor = actors.find(a => a.id === selectedId) ?? actors[0]

  return (
    <section id="agentes" className="relative overflow-hidden py-14 md:py-20 bg-surface-dark">
      <FlowBackdrop variant="dark" opacity={0.2} />
      <div className="relative z-[1] max-w-[1080px] mx-auto px-4 sm:px-6 min-w-0">

        <SectionHeader
          dark
          center
          eyebrow={t.actors.eyebrow}
          title={t.actors.h2Before}
          titleHighlight={t.actors.h2Highlight}
          titleAfter={t.actors.h2After}
          para={t.actors.para}
          className="max-w-[640px] mx-auto"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 sm:mb-12 py-6 sm:py-8 px-4 sm:px-6 rounded-2xl bg-white/[0.03] border border-border-dark">
          <div className="text-center md:text-left min-w-0">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 m-0">
              {t.actors.hubTitle}
            </h3>
            <p className="text-sm text-white/50 leading-relaxed mb-5 m-0">{t.actors.hubPara}</p>
            <Button href="#contacto" variant="pill" className="w-full sm:w-auto">{t.actors.hubCta}</Button>
          </div>
          <ChannelHub centerLabel={t.actors.hubCenter} sublabel={t.actors.hubSub} />
        </div>

        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-8">
          {actors.map(a => {
            const isSelected = a.id === selectedId
            return (
              <button
                key={a.id}
                onClick={() => setSelectedId(a.id)}
                aria-pressed={isSelected}
                className={`flex items-center gap-2.5 sm:gap-3 p-3 rounded-lg border text-left transition-colors cursor-pointer min-w-0 w-full ${
                  isSelected
                    ? 'border-accent/50 bg-white/[0.04]'
                    : 'border-border-dark hover:border-white/15 hover:bg-white/[0.02]'
                }`}
              >
                <Avatar actor={a} size="md" />
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-white leading-tight truncate">{a.name}</span>
                  <span className="block text-xs text-white/45 mt-0.5 truncate">{a.role}</span>
                </span>
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={actor.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-[minmax(0,340px)_1fr] gap-8 min-w-0"
          >
            <div className="flex flex-col min-w-0">
              <div className="flex items-start gap-4 mb-5">
                <Avatar actor={actor} size="lg" />
                <div className="min-w-0 pt-1">
                  <h3 className="text-xl font-semibold text-white m-0">{actor.name}</h3>
                  <p className="text-sm text-white/45 mt-1 mb-0">{actor.role}</p>
                </div>
              </div>

              <p className="text-sm text-white/60 leading-relaxed mb-5">{actor.bio}</p>

              <p className="text-xs text-text-muted uppercase tracking-wide mb-1">{t.actors.personalityLabel}</p>
              <p className="text-sm text-white/55 mb-5">{actor.personality.join(' · ')}</p>

              <ul className="space-y-2 mb-8 m-0 p-0 list-none">
                {actor.capabilities.map((c, i) => (
                  <li key={i} className="text-sm text-white/50 leading-snug pl-3 border-l border-border-dark">{c}</li>
                ))}
              </ul>

              <div className="mt-auto pt-4 border-t border-border-dark">
                <p className="text-xs text-text-muted mb-3">{t.actors.platformNote}</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button href="#contacto" variant="dark">{t.actors.platformCta}</Button>
                  <Button href={`#/actor/${actor.id}`} variant="ghost" className="text-white/55 hover:text-white">
                    {t.actors.page.viewProfile} →
                  </Button>
                </div>
              </div>
            </div>

            <Chat actor={actor} t={t} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
