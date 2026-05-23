import { motion } from 'framer-motion'

const ROWS = [
  {
    label: 'Datos reales',
    text: 'ERP, CRM, historial de pedidos, inventario — todas tus fuentes conectadas y disponibles en tiempo real para cada decisión.',
    active: false,
  },
  {
    label: 'Brainiac',
    text: 'El motor de IA de Simple. Lee el contexto completo de cada conversación, consulta tus datos y genera la mejor respuesta posible.',
    active: true,
  },
  {
    label: 'Acciones',
    text: 'Responde en el canal correcto, actualiza el ERP, crea tickets, asigna al agente adecuado — sin intervención humana en lo repetitivo.',
    active: false,
  },
  {
    label: 'Feedback',
    text: 'Cada ciclo retroalimenta el sistema. Brainiac aprende patrones, ajusta umbrales y mejora la precisión de forma continua.',
    active: false,
  },
]

export default function Brainiac() {
  return (
    <section id="brainiac" className="py-20 bg-[#0b1420]">
      <div className="max-w-[1160px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-14 items-start">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.58 }}
        >
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/[0.07] text-cyan-400 text-[11px] font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
            Brainiac
          </div>
          <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.025em] leading-tight text-white mb-4">
            El cerebro que conecta todo
          </h2>
          <p className="text-[0.975rem] text-white/50 leading-relaxed mb-7">
            Brainiac es el motor de inteligencia de Simple. Procesa contexto,
            consulta tus sistemas y ejecuta decisiones en milisegundos.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors group"
          >
            Ver una demo en vivo
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>

        {/* Console */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.58, delay: 0.14 }}
          className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#111d2e]"
        >
          {ROWS.map((row, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 px-6 py-5 border-b border-white/[0.06] last:border-0 transition-colors ${
                row.active
                  ? 'bg-gradient-to-r from-blue-600/[0.13] to-emerald-500/[0.05]'
                  : 'hover:bg-white/[0.02]'
              }`}
            >
              <span
                className={`shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                  row.active
                    ? 'bg-blue-500/[0.18] border-blue-400/[0.28] text-blue-300'
                    : 'bg-cyan-500/[0.09] border-cyan-500/[0.18] text-cyan-400'
                }`}
              >
                {row.label}
              </span>
              <p className="text-[0.88rem] text-white/60 leading-relaxed m-0">{row.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
