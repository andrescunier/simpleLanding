import { motion } from 'framer-motion'

const CATEGORIES = [
  {
    icon: '⚡',
    label: 'Módulos',
    color: 'border-blue-400/30 bg-blue-500/[0.04]',
    dot: 'bg-blue-500',
    badgeCls: 'border-blue-200 bg-blue-50 text-blue-700 hover:border-blue-300 hover:bg-blue-100',
    items: [
      'Ventas', 'Soporte', 'Cobranza', 'Onboarding', 'Reportes', 'Logística',
      'Proveedores', 'RR.HH.', 'Marketing', 'Inventario', 'Facturación',
      'Compras', 'Post-venta', 'Mesa de Ayuda', 'Finanzas', 'Auditoría',
    ],
  },
  {
    icon: '📡',
    label: 'Canales',
    color: 'border-emerald-400/30 bg-emerald-500/[0.04]',
    dot: 'bg-emerald-500',
    badgeCls: 'border-emerald-200 bg-emerald-50 text-emerald-700 hover:border-emerald-300 hover:bg-emerald-100',
    items: [
      'WhatsApp', 'Instagram', 'Facebook Messenger', 'Telegram', 'SMS',
      'Email', 'Web Chat', 'Voz', 'Formularios', 'Mercado Libre',
      'Amazon', 'Correo Argentino', 'OCA', 'Andreani', 'TikTok',
      'LinkedIn', 'Slack', 'Microsoft Teams',
    ],
  },
  {
    icon: '🔗',
    label: 'Integraciones',
    color: 'border-violet-400/30 bg-violet-500/[0.04]',
    dot: 'bg-violet-500',
    badgeCls: 'border-violet-200 bg-violet-50 text-violet-700 hover:border-violet-300 hover:bg-violet-100',
    items: [
      'Tango Gestión', 'SAP', 'Salesforce', 'VTEX', 'Mercado Libre',
      'Google Cloud', 'HubSpot', 'Odoo', 'WooCommerce', 'Shopify',
      'N8N', 'Make', 'Zapier', 'Google Workspace', 'OpenAI', 'Anthropic',
    ],
  },
  {
    icon: '🧠',
    label: 'Modelos de IA',
    color: 'border-cyan-400/30 bg-cyan-500/[0.04]',
    dot: 'bg-cyan-500',
    badgeCls: 'border-cyan-200 bg-cyan-50 text-cyan-700 hover:border-cyan-300 hover:bg-cyan-100',
    items: [
      'GPT-4o', 'o3', 'Claude 3.7 Sonnet', 'Claude 3.5 Haiku',
      'Gemini 2.0 Flash', 'Gemini 1.5 Pro', 'Grok 2', 'Grok 3',
      'Llama 3.3', 'Mistral Large', 'Command R+', 'DeepSeek V3',
    ],
  },
]

export default function Ecosystem() {
  return (
    <section id="modulos" className="py-20 bg-[#f4f8fc]">
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
            Ecosistema
          </div>
          <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.025em] leading-tight text-[#0f1a2b] mb-4">
            Módulos para cada área de tu empresa
          </h2>
          <p className="text-[0.975rem] text-[#3c4f65] leading-relaxed">
            Simple se adapta a tu negocio. Activá los módulos que necesitás hoy
            y sumá más a medida que crecés.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-2xl border p-6 ${cat.color}`}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-xl leading-none">{cat.icon}</span>
                <span className="text-[11px] font-bold text-[#3c4f65] uppercase tracking-[0.1em]">{cat.label}</span>
                <span className="ml-auto text-[10px] text-[#9baab8] font-medium">{cat.items.length} disponibles</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map(item => (
                  <span
                    key={item}
                    className={`px-3 py-1 rounded-full border text-[0.78rem] font-medium cursor-default transition-all ${cat.badgeCls}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

