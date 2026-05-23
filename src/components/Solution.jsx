import { motion } from 'framer-motion'

const STEPS = [
  {
    n: '01',
    title: 'Conectar',
    body: 'Unificamos todos tus canales de comunicación y sistemas de negocio en una sola plataforma.',
  },
  {
    n: '02',
    title: 'Comprender',
    body: 'Brainiac analiza cada mensaje y extrae la intención, el contexto y las entidades relevantes.',
  },
  {
    n: '03',
    title: 'Decidir',
    body: 'La IA determina la mejor acción según reglas de negocio, historial y datos en tiempo real.',
  },
  {
    n: '04',
    title: 'Ejecutar',
    body: 'Se dispara la acción automáticamente: responde, actualiza sistemas, deriva al equipo correcto.',
  },
  {
    n: '05',
    title: 'Aprender',
    body: 'Cada interacción mejora el modelo. Simple aprende de tu negocio de forma continua.',
  },
]

export default function Solution() {
  return (
    <section id="flujo" className="py-20 bg-white">
      <div className="max-w-[1160px] mx-auto px-5">

        <motion.div
          className="max-w-[580px] mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.58 }}
        >
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-[11px] font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
            Cómo funciona
          </div>
          <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.025em] leading-tight text-[#0f1a2b] mb-4">
            Del mensaje a la acción en segundos
          </h2>
          <p className="text-[0.975rem] text-[#3c4f65] leading-relaxed">
            Simple orquesta cada interacción en cinco pasos que transforman
            conversaciones en resultados de negocio concretos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {STEPS.map((s, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.48, delay: i * 0.08 }}
              className="flex flex-col p-6 rounded-xl border border-[#e2eaf3] bg-white hover:shadow-[0_8px_28px_rgba(15,26,43,0.09)] hover:-translate-y-1 transition-all duration-200"
            >
              <span className="w-9 h-9 flex items-center justify-center shrink-0 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold mb-5">
                {s.n}
              </span>
              <h3 className="text-[0.96rem] font-semibold text-[#0f1a2b] mb-2 leading-snug">{s.title}</h3>
              <p className="text-[0.86rem] text-[#6b7f96] leading-relaxed m-0">{s.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
