import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const LEAD = {
  business: 'Ferretería del Norte',
  type: 'Ferretería · Local comercial',
  city: 'Tucumán, Argentina',
}

const MESSAGES = [
  {
    from: 'francisco',
    text: '¡Hola! Soy Francisco de Simple. Vi que tienen "Ferretería del Norte" en Google Maps — ¿hablo con alguien del equipo?',
  },
  {
    from: 'prospect',
    text: 'Sí, soy el dueño. ¿Qué necesitás?',
  },
  {
    from: 'francisco',
    text: 'Que bien! Solo una pregunta rápida: ¿cuántos mensajes de clientes atienden por día en WhatsApp o por teléfono, más o menos?',
  },
  {
    from: 'prospect',
    text: 'Uf, entre 60 y 100 mensajes. A veces no llegamos a responder todos.',
  },
  {
    from: 'francisco',
    text: '¿Y hoy tienen algo para gestionar eso automáticamente, o lo maneja el equipo de forma manual?',
  },
  {
    from: 'crm',
    text: 'Datos registrados → Lead calificado · 85% match',
  },
]

const CAPABILITIES = [
  'Personaliza cada contacto con la info de Google Maps',
  'Hace preguntas de calificación de forma natural y conversacional',
  'Registra respuestas automáticamente en el CRM',
]

const PIPELINE = [
  {
    icon: '🗺️',
    label: 'Google Maps',
    desc: 'Brainiac extrae leads: nombre, rubro, ciudad y teléfono',
    color: 'from-green-500/20 to-green-400/5 border-green-500/20',
    badge: 'text-green-400 bg-green-500/10 border-green-500/20',
  },
  {
    icon: '⚡',
    label: 'Brainiac',
    desc: 'Prioriza y enriquece cada lead antes de entregárselo a Francisco',
    color: 'from-cyan-500/20 to-cyan-400/5 border-cyan-500/20',
    badge: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  },
  {
    icon: '💬',
    label: 'Francisco',
    desc: 'Contacta, califica y registra. Todo por WhatsApp, sin intervención humana',
    color: 'from-blue-500/20 to-blue-400/5 border-blue-500/20',
    badge: 'text-blue-300 bg-blue-500/10 border-blue-500/20',
  },
]

function FranciscoAvatar({ size = 'md' }) {
  const [hasPhoto, setHasPhoto] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.onload  = () => setHasPhoto(true)
    img.onerror = () => setHasPhoto(false)
    img.src = '/francisco.jpg'
  }, [])

  const cls = size === 'lg'
    ? 'w-24 h-24 rounded-2xl text-4xl'
    : 'w-9 h-9 rounded-full text-base'

  if (hasPhoto) {
    return (
      <img
        src="/francisco.jpg"
        alt="Francisco"
        className={`${cls} object-cover object-top shrink-0 border-2 border-blue-500/30`}
      />
    )
  }
  return (
    <div className={`${cls} bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center font-bold text-white shrink-0`}>
      F
    </div>
  )
}

export default function Francisco() {
  return (
    <section id="agentes" className="py-20 bg-[#0b1420]">
      <div className="max-w-[1160px] mx-auto px-5">

        {/* Header */}
        <motion.div
          className="max-w-[620px] mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.58 }}
        >
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/[0.07] text-cyan-400 text-[11px] font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
            Agentes IA
          </div>
          <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.025em] leading-tight text-white mb-4">
            Conocé a tu equipo digital
          </h2>
          <p className="text-[0.975rem] text-white/50 leading-relaxed">
            Cada agente tiene un nombre, un rol específico y una personalidad. No son bots genéricos — son empleados IA diseñados para una tarea concreta.
          </p>
        </motion.div>

        {/* Pipeline */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          {PIPELINE.map((step, i) => (
            <div key={i} className={`relative flex flex-col gap-3 p-5 rounded-xl border bg-gradient-to-br ${step.color}`}>
              {i < PIPELINE.length - 1 && (
                <span className="hidden sm:block absolute -right-[18px] top-1/2 -translate-y-1/2 z-10 text-white/20 text-lg font-bold">→</span>
              )}
              <span className={`self-start px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider border ${step.badge}`}>
                {step.label}
              </span>
              <p className="text-[0.84rem] text-white/55 leading-relaxed m-0">{step.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Francisco card + chat */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6">

          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col p-7 rounded-2xl border border-white/[0.08] bg-[#111d2e]"
          >
            <div className="flex items-start gap-4 mb-6">
              <FranciscoAvatar size="lg" />
              <div>
                <span className="inline-block px-2.5 py-0.5 mb-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-[10px] font-bold tracking-wider uppercase">
                  SDR Outbound
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">Francisco</h3>
                <p className="text-xs text-white/38 mt-0.5">Agente de prospección</p>
              </div>
            </div>

            <p className="text-[0.88rem] text-white/55 leading-relaxed mb-6">
              Diseñado para calificar prospectos que Brainiac extrae de Google Maps.
              Inicia conversaciones naturales, hace las preguntas correctas y registra
              todo en el CRM automáticamente.
            </p>

            <ul className="space-y-3 mb-7">
              {CAPABILITIES.map((c, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[0.84rem] text-white/55">
                  <span className="text-emerald-400 text-xs mt-[3px] shrink-0">✓</span>
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex items-center gap-2 px-4 py-2.5 rounded-xl border border-blue-500/20 bg-blue-500/[0.07]">
              <span
                className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"
                style={{ animation: 'livePulse 2s ease-in-out infinite', boxShadow: '0 0 0 3px rgba(52,211,153,0.2)' }}
              />
              <span className="text-[0.78rem] text-white/50 font-medium">Francisco está activo ahora</span>
            </div>
          </motion.div>

          {/* Conversation demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="flex flex-col rounded-2xl border border-white/[0.08] bg-[#111d2e] overflow-hidden"
          >
            {/* Lead source bar */}
            <div className="px-5 py-3.5 border-b border-white/[0.07] flex items-center gap-3 bg-emerald-500/[0.04]">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/[0.12] border border-emerald-500/[0.22] text-emerald-400 text-[10px] font-bold tracking-wider uppercase shrink-0">
                Lead · Google Maps
              </span>
              <span className="text-[0.82rem] text-white/45 font-medium">
                {LEAD.business} &nbsp;·&nbsp; {LEAD.type} &nbsp;·&nbsp; {LEAD.city}
              </span>
            </div>

            {/* Messages */}
            <div className="flex-1 px-5 py-5 flex flex-col gap-3 overflow-y-auto">
              {MESSAGES.map((msg, i) => {
                if (msg.from === 'crm') {
                  return (
                    <div
                      key={i}
                      className="flex items-center justify-center gap-2 py-2 feed-in"
                      style={{ animationDelay: `${i * 0.25}s` }}
                    >
                      <span className="h-px flex-1 bg-white/[0.07]" />
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium">
                        {msg.text}
                      </span>
                      <span className="h-px flex-1 bg-white/[0.07]" />
                    </div>
                  )
                }

                const isFrancisco = msg.from === 'francisco'
                return (
                  <div
                    key={i}
                    className={`flex items-start gap-2.5 feed-in ${isFrancisco ? '' : 'flex-row-reverse'}`}
                    style={{ animationDelay: `${i * 0.25}s` }}
                  >
                    {isFrancisco && <FranciscoAvatar size="sm" />}
                    {!isFrancisco && (
                      <div className="w-9 h-9 rounded-full bg-white/10 text-white/50 text-xs font-bold flex items-center justify-center shrink-0">
                        RL
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] px-4 py-2.5 rounded-[14px] ${
                        isFrancisco
                          ? 'bg-blue-600/25 border border-blue-500/30 rounded-tl-[4px]'
                          : 'bg-white/[0.07] border border-white/[0.09] rounded-tr-[4px]'
                      }`}
                    >
                      {isFrancisco && (
                        <span className="block text-[10px] font-semibold text-blue-300/60 mb-1">
                          Francisco · Simple
                        </span>
                      )}
                      <p className="text-[0.82rem] text-white/82 leading-snug m-0">{msg.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
