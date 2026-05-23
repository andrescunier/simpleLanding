import { motion } from 'framer-motion'

const MODULES = [
  'Ventas', 'Soporte', 'Cobranza', 'Onboarding', 'Reportes', 'Logística',
  'Proveedores', 'RR.HH.', 'Marketing', 'Inventario', 'Facturación',
  'Compras', 'Post-venta', 'Mesa de Ayuda', 'Finanzas', 'Auditoría',
]

const CHANNELS = [
  'WhatsApp', 'Instagram', 'Facebook Messenger', 'Telegram', 'SMS',
  'Email', 'Web Chat', 'Voz', 'Formularios', 'Mercado Libre',
  'Amazon', 'Correo Argentino', 'OCA', 'Andreani', 'TikTok',
  'LinkedIn', 'Slack', 'Microsoft Teams',
]

const INTEGRATIONS = [
  'Tango Gestión', 'SAP', 'Salesforce', 'VTEX', 'Mercado Libre',
  'Google Cloud', 'HubSpot', 'Odoo', 'WooCommerce', 'Shopify',
  'N8N', 'Make', 'Zapier', 'Google Workspace', 'OpenAI', 'Anthropic',
]

const MODELS = [
  'GPT-4o', 'o3', 'Claude 3.7 Sonnet', 'Claude 3.5 Haiku',
  'Gemini 2.0 Flash', 'Gemini 1.5 Pro', 'Grok 2', 'Grok 3',
  'Llama 3.3', 'Mistral Large', 'Command R+', 'DeepSeek V3',
]

const BadgeRow = ({ items, light }) =>
  items.map(item => (
    <span
      key={item}
      className={`h-9 px-4 inline-flex items-center rounded-full border text-sm font-medium cursor-default transition-all ${
        light
          ? 'border-transparent bg-[#e8eef6] text-[#6b7f96] text-[0.8rem]'
          : 'border-[#e2eaf3] bg-white text-[#3c4f65] shadow-sm hover:border-gray-300 hover:shadow-md'
      }`}
    >
      {item}
    </span>
  ))

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="space-y-7"
        >
          <div>
              <p className="text-[10px] font-bold text-[#6b7f96] uppercase tracking-[0.1em] mb-3">Módulos</p>
            <div className="flex flex-wrap gap-2">
              <BadgeRow items={MODULES} />
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold text-[#6b7f96] uppercase tracking-[0.1em] mb-3">Canales</p>
            <div className="flex flex-wrap gap-2">
              <BadgeRow items={CHANNELS} />
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold text-[#6b7f96] uppercase tracking-[0.1em] mb-3">Integraciones</p>
            <div className="flex flex-wrap gap-2">
              <BadgeRow items={INTEGRATIONS} light />
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold text-[#6b7f96] uppercase tracking-[0.1em] mb-3">Modelos de IA</p>
            <div className="flex flex-wrap gap-2">
              <BadgeRow items={MODELS} light />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
