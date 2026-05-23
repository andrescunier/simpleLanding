import { useState } from 'react'
import { motion } from 'framer-motion'

const TRUST = [
  'Demo en 30 minutos, sin compromiso',
  'Implementación en 2 a 4 semanas',
  'Soporte dedicado desde el día uno',
]

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', company: '', challenge: '' })
  const [success, setSuccess] = useState('')

  const update = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    const text = `Nueva consulta desde simplelanding.com%0ANombre: ${form.name}%0AEmail: ${form.email}%0AEmpresa: ${form.company}%0ADesafío: ${form.challenge}`
    try {
      await fetch('https://n8n.cumar.com.ar/webhook/whatsapp', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ number: '5491170303709', text }),
      })
    } catch (_) {
      // silenciar errores de red — el mensaje de éxito se muestra igual
    }
    setSuccess(`Gracias, ${form.name}. El equipo de Simple recibió tu solicitud de demo.`)
  }

  const inputCls = 'h-11 px-4 w-full rounded-lg border border-white/[0.1] bg-white/[0.06] text-white text-sm placeholder:text-white/22 focus:outline-none focus:border-cyan-500/55 focus:bg-white/[0.09] transition-colors'
  const labelCls = 'grid gap-1.5 text-[11px] font-medium text-white/42 tracking-wide'

  return (
    <section id="contacto" className="py-20 bg-[#0b1420]" style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.18) 0%, #0b1420 45%, rgba(5,150,105,0.12) 100%)' }}>
      <div className="max-w-[1160px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-14 items-start">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.58 }}
        >
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/[0.07] text-cyan-400 text-[11px] font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
            Empeza hoy
          </div>
          <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.025em] leading-tight text-white mb-4">
            Hablemos de tu caso
          </h2>
          <p className="text-[0.975rem] text-white/50 leading-relaxed mb-8">
            Contanos el desafío que querés resolver y armamos una
            demo personalizada para tu empresa.
          </p>
          <ul className="space-y-3">
            {TRUST.map((t, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-white/50">
                <span className="text-emerald-400 text-xs font-bold">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.58, delay: 0.14 }}
          className="rounded-2xl border border-white/[0.09] bg-white/[0.04] p-7"
        >
          {success ? (
            <p className="text-emerald-400 font-semibold text-sm leading-relaxed">{success}</p>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <label className={labelCls}>
                Nombre
                <input required type="text" placeholder="Tu nombre" value={form.name} onChange={update('name')} className={inputCls} />
              </label>
              <label className={labelCls}>
                Email corporativo
                <input required type="email" placeholder="tu@empresa.com" value={form.email} onChange={update('email')} className={inputCls} />
              </label>
              <label className={labelCls}>
                Empresa
                <input type="text" placeholder="Nombre de tu empresa" value={form.company} onChange={update('company')} className={inputCls} />
              </label>
              <label className={labelCls}>
                Qué querés automatizar
                <select
                  required
                  value={form.challenge}
                  onChange={update('challenge')}
                  className="h-11 px-4 w-full rounded-lg border border-white/[0.1] bg-[#111d2e] text-white text-sm focus:outline-none focus:border-cyan-500/55 transition-colors"
                >
                  <option value="" disabled>Seleccioná tu caso...</option>
                  <option value="whatsapp">Atención por WhatsApp</option>
                  <option value="ventas">Proceso de ventas</option>
                  <option value="soporte">Soporte al cliente</option>
                  <option value="reportes">Reportes automáticos</option>
                  <option value="cobranza">Gestión de cobranza</option>
                  <option value="integraciones">Integraciones de sistemas</option>
                </select>
              </label>
              <button
                type="submit"
                className="mt-1 h-11 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-[0_4px_14px_rgba(37,99,235,0.32)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.42)]"
              >
                Solicitar demo gratuita
              </button>
              <p className="text-center text-[11px] text-white/25">Sin compromiso · Respuesta en menos de 24 hs</p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
