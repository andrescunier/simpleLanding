import { motion } from 'framer-motion'
import AgentFeed from './AgentFeed'

const ease = [0.16, 1, 0.3, 1]

const PROOF = [
  { stat: '43+',      label: 'flujos activos' },
  { stat: '98.2%',    label: 'resueltos por IA' },
  { stat: '< 12 min', label: 'tiempo promedio' },
]

export default function Hero() {
  return (
    <section className="py-10 md:py-16 lg:py-24 bg-gradient-to-br from-blue-50/50 via-white to-emerald-50/30">
      <div className="max-w-[1160px] mx-auto px-5 grid grid-cols-1 md:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-16 items-center">

        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-[11px] font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
            Plataforma IA para empresas
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(2.55rem,5vw,4.6rem)] font-extrabold tracking-[-0.03em] leading-[0.96] text-[#0b1420] mb-6">
            Tu empresa<br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              aumentada
            </span>
            <br />
            por IA
          </h1>

          {/* Lede */}
          <p className="text-[1rem] md:text-[1.05rem] text-[#3c4f65] leading-[1.74] mb-8 max-w-[440px]">
            Simple conecta tus canales, sistemas y equipos en un solo flujo de
            inteligencia artificial que comprende, decide y actúa.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-9">
            <a
              href="#contacto"
              className="h-11 px-6 inline-flex items-center text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-[0_4px_14px_rgba(37,99,235,0.32)] hover:bg-blue-700 hover:shadow-[0_6px_20px_rgba(37,99,235,0.42)] hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              Solicitar demo
            </a>
            <a
              href="#flujo"
              className="h-11 px-6 inline-flex items-center text-sm font-semibold text-[#0f1a2b] bg-white border border-[#e2eaf3] rounded-lg shadow-sm hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              Ver cómo funciona
            </a>
          </div>

          {/* Proof row */}
          <dl className="grid grid-cols-3 border border-[#e2eaf3] rounded-xl overflow-hidden bg-white/70 backdrop-blur-sm">
            {PROOF.map((p, i) => (
              <div key={i} className={`px-4 py-4 ${i < PROOF.length - 1 ? 'border-r border-[#e2eaf3]' : ''}`}>
                <dt className="text-[0.98rem] font-bold tracking-tight text-[#0f1a2b] mb-0.5">{p.stat}</dt>
                <dd className="text-[11px] text-[#6b7f96] leading-snug m-0">{p.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Right — agent feed */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.18, ease }}
        >
          <AgentFeed />
        </motion.div>
      </div>
    </section>
  )
}
