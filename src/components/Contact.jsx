import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../i18n'
import SectionHeader from './ui/SectionHeader'
import Button from './ui/Button'
import Card from './ui/Card'
import FlowBackdrop from './FlowBackdrop'

export default function Contact() {
  const { t } = useLang()
  const [form, setForm]       = useState({ name: '', email: '', company: '', challenge: '' })
  const [success, setSuccess] = useState('')

  const update = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    const text = [
      'Nueva consulta desde simple.cumar.com.ar',
      `Nombre: ${form.name}`,
      `Email: ${form.email}`,
      `Empresa: ${form.company || '-'}`,
      `Desafío: ${form.challenge}`,
    ].join('\n')
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ number: '5491170303709', text }),
      })
    } catch (_) { /* silenciar errores de red */ }
    setSuccess(t.contact.success(form.name))
  }

  const inputCls = 'h-10 px-3 w-full rounded-md border border-border bg-white text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors'
  const labelCls = 'grid gap-1.5 text-sm font-medium text-text-secondary'

  return (
    <section id="contacto" className="relative overflow-hidden py-14 md:py-20 bg-surface-light border-t border-border">
      <FlowBackdrop variant="light" opacity={0.16} />
      <div className="relative z-[1] max-w-[1080px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-start min-w-0">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <SectionHeader
            eyebrow={t.contact.eyebrow}
            title={t.contact.h2}
            para={t.contact.para}
            className="mb-8"
          />
          <ul className="space-y-3 m-0 p-0 list-none">
            {t.contact.trust.map((item, i) => (
              <li key={i} className="text-sm text-text-secondary pl-3 border-l-2 border-accent/30">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <Card className="p-6 sm:p-7 min-w-0">
            {success ? (
              <p className="text-sm text-text-primary font-medium leading-relaxed">{success}</p>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4">
                <label className={labelCls}>
                  {t.contact.nameLabel}
                  <input required type="text" placeholder={t.contact.namePlaceholder} value={form.name} onChange={update('name')} className={inputCls} />
                </label>
                <label className={labelCls}>
                  {t.contact.emailLabel}
                  <input required type="email" placeholder={t.contact.emailPlaceholder} value={form.email} onChange={update('email')} className={inputCls} />
                </label>
                <label className={labelCls}>
                  {t.contact.companyLabel}
                  <input type="text" placeholder={t.contact.companyPlaceholder} value={form.company} onChange={update('company')} className={inputCls} />
                </label>
                <label className={labelCls}>
                  {t.contact.challengeLabel}
                  <select
                    required
                    value={form.challenge}
                    onChange={update('challenge')}
                    className={inputCls}
                  >
                    <option value="" disabled>{t.contact.challengePlaceholder}</option>
                    {t.contact.options.map(o => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </label>
                <Button type="submit" className="w-full mt-1">{t.contact.submit}</Button>
                <p className="text-center text-xs text-text-muted m-0">{t.contact.smallPrint}</p>
              </form>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
