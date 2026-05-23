import { motion } from 'framer-motion'

const PROBLEMS = [
  {
    accent: 'from-blue-500 to-blue-400',
    title: 'Conversaciones dispersas',
    body: 'WhatsApp, email, Instagram y teléfono sin coordinación. Cada canal es una isla. Los clientes repiten, el equipo pierde contexto.',
  },
  {
    accent: 'from-cyan-400 to-cyan-300',
    title: 'Sistemas separados',
    body: 'CRM, ERP y herramientas que no se hablan entre sí. Datos duplicados, decisiones lentas y procesos que dependen de integraciones manuales.',
  },
  {
    accent: 'from-emerald-400 to-emerald-300',
    title: 'Coordinación manual',
    body: 'Tu equipo pierde horas clasificando, enrutando y respondiendo lo que la IA puede resolver en segundos con mayor precisión.',
  },
]

export default function Problem() {
  return (
    <section id="problema" className="py-20 bg-[#0b1420]">
      <div className="max-w-[1160px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-14 items-start">

        {/* Left copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.58 }}
        >
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/[0.07] text-cyan-400 text-[11px] font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
            El problema
          </div>
          <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.025em] leading-tight text-white mb-4">
            La fricción que frena a tu empresa
          </h2>
          <p className="text-[0.975rem] text-white/50 leading-relaxed">
            Canales, sistemas y equipos operando en silos. El resultado:
            clientes que esperan, datos que se pierden y procesos
            que dependen de personas para tareas repetitivas.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {PROBLEMS.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col p-6 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
            >
              <div className={`h-0.5 w-full rounded-full bg-gradient-to-r ${p.accent} mb-5 opacity-75`} />
              <h3 className="text-[0.96rem] font-semibold text-white mb-2 leading-snug">{p.title}</h3>
              <p className="text-[0.86rem] text-white/48 leading-relaxed m-0">{p.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
