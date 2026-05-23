import { motion } from 'framer-motion'

const ALERTS = [
  { icon: '🛒', text: '7 órdenes activas en pipeline', sub: 'La operación comercial tiene trabajo en curso entre pago, preparación y despacho.' },
  { icon: '⚠️', text: '2 facturas vencidas sin cobrar', sub: 'Requieren seguimiento inmediato antes del cierre del período.' },
]

const ACTIVITY = [
  { id: 'SO-1779236050739876', client: 'Cliente Ecommerce', type: 'REVENUE', time: '19 MAY · 21:14', badge: 'Cancelada', badgeCls: 'bg-red-100 text-red-600' },
  { id: 'SO-1779232962916626', client: 'Cliente Ecommerce', type: 'REVENUE', time: '19 MAY · 20:22', badge: 'Pago Pendiente', badgeCls: 'bg-amber-100 text-amber-700' },
  { id: 'SO-1779198110980831', client: 'Cliente Ecommerce', type: 'REVENUE', time: '19 MAY · 10:41', badge: 'Pago Pendiente', badgeCls: 'bg-amber-100 text-amber-700' },
]

const KPIS = [
  { label: 'DISPONIBLE', value: 'US$24.8k', sub: 'Caja y bancos consolidados', note: 'US$3.2k posición neta', color: 'border-t-blue-400' },
  { label: 'REVENUE PIPELINE', value: '8', sub: 'Órdenes creadas en el tenant activo', note: '7 en gestión', color: 'border-t-emerald-400' },
  { label: 'COBROS', value: '5', sub: 'Pagos registrados y conciliables', note: 'US$12.4k por cobrar', color: 'border-t-violet-400' },
  { label: 'STOCK CRÍTICO', value: '3', sub: 'SKU por debajo de umbral operativo', note: '15 productos catalogados', color: 'border-t-amber-400' },
]

const NAV_SECTIONS = [
  { section: 'CONTROL', sub: 'Visibilidad de operación y liquidez', items: [{ label: 'Dashboard', active: true }] },
  { section: 'INGRESOS', sub: 'Ventas, cobros y cumplimiento', items: [{ label: 'Órdenes' }, { label: 'Facturas' }, { label: 'Pagos' }, { label: 'Entregas' }] },
  { section: 'SUMINISTRO', sub: 'Catálogo, stock y compras', items: [{ label: 'Productos' }, { label: 'Movimientos' }, { label: 'Niveles Stock' }, { label: 'Compras' }, { label: 'Proveedores' }] },
]

function DashboardMockup() {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-[0_24px_80px_rgba(15,26,43,0.18)] text-[11px] select-none flex"
      style={{ background: '#f8fafc', fontFamily: 'Inter, sans-serif', minHeight: 520 }}
    >
      {/* Sidebar */}
      <div className="w-[168px] shrink-0 flex flex-col border-r border-gray-200" style={{ background: '#111827' }}>
        {/* Logo */}
        <div className="px-4 py-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 via-cyan-400 to-sky-300 shrink-0" />
            <span className="text-white font-bold tracking-[0.1em] text-[11px]">SIMPLE</span>
          </div>
        </div>
        {/* Nav */}
        <div className="flex-1 py-3 overflow-hidden">
          {NAV_SECTIONS.map(sec => (
            <div key={sec.section} className="mb-3">
              <div className="px-4 mb-0.5">
                <div className="text-white/40 font-bold text-[8px] tracking-widest uppercase">{sec.section}</div>
                <div className="text-white/20 text-[7.5px] truncate">{sec.sub}</div>
              </div>
              {sec.items.map(item => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 mx-2 px-2.5 py-[5px] rounded-lg cursor-default mb-0.5 ${
                    item.active ? 'bg-blue-600/30 border border-blue-500/30' : ''
                  }`}
                >
                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.active ? 'bg-blue-400' : 'bg-white/20'}`} />
                  <span className={`text-[9.5px] font-medium truncate ${item.active ? 'text-blue-200' : 'text-white/45'}`}>{item.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 bg-white">
          <div>
            <div className="text-[8.5px] font-semibold text-gray-400 tracking-widest uppercase">DASHBOARD</div>
            <div className="text-[13px] font-bold text-gray-800 leading-tight">Dashboard</div>
            <div className="text-[8px] text-gray-400">KPIs, alertas, cashflow y actividad reciente</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5">
              <span className="text-gray-300 text-[10px]">🏢</span>
              <div>
                <div className="text-[7px] text-gray-400 uppercase tracking-wider">WORKSPACE</div>
                <div className="text-[8.5px] font-semibold text-gray-600">Prestameya</div>
              </div>
            </div>
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-[8px]">A</div>
          </div>
        </div>

        {/* Search bar */}
        <div className="px-5 py-2.5 border-b border-gray-100 bg-white">
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
            <span className="text-gray-300 text-[10px]">🔍</span>
            <span className="text-gray-300 text-[9px]">Ir a módulo, acción o vista</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 flex flex-col gap-4 overflow-hidden">
          {/* Executive Overview */}
          <div>
            <div className="text-[8px] font-bold text-gray-400 tracking-widest uppercase mb-1">EXECUTIVE OVERVIEW</div>
            <h3 className="text-[15px] font-bold text-gray-800 leading-tight mb-1">Control financiero y operativo</h3>
            <p className="text-[8.5px] text-gray-500 leading-relaxed mb-2.5 max-w-[480px]">
              Unifica liquidez, ritmo comercial, cumplimiento y señales de riesgo en un cockpit de backoffice con foco en la operación diaria.
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-600 text-[8px] font-semibold border border-blue-200">Multi-workspace ready</span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[8px] font-semibold border border-emerald-200">10 clientes activos</span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[8px] font-semibold border border-amber-200">Cobranza al día</span>
            </div>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-4 gap-3">
            {KPIS.map(kpi => (
              <div key={kpi.label} className={`bg-white rounded-xl border-t-2 border border-gray-200 p-3 ${kpi.color}`}>
                <div className="text-[7.5px] font-bold text-gray-400 tracking-widest uppercase mb-1.5">{kpi.label}</div>
                <div className="text-[18px] font-bold text-gray-800 leading-none mb-1">{kpi.value}</div>
                <div className="text-[7.5px] text-gray-400 leading-tight mb-2">{kpi.sub}</div>
                <div className="text-[7px] text-gray-400 border-t border-gray-100 pt-1.5">{kpi.note}</div>
                <div className="text-[7.5px] text-blue-500 font-medium mt-1 cursor-default">Ver detalle ↗</div>
              </div>
            ))}
          </div>

          {/* Bottom: alerts + activity */}
          <div className="grid grid-cols-[1fr_1fr] gap-3">
            {/* Alertas */}
            <div className="bg-white rounded-xl border border-gray-200 p-3">
              <div className="text-[9px] font-bold text-gray-700 mb-0.5">Alertas prioritarias</div>
              <div className="text-[7.5px] text-gray-400 mb-2.5">Eventos que merecen decisión o seguimiento inmediato.</div>
              {ALERTS.map((a, i) => (
                <div key={i} className="flex items-start gap-2.5 p-2 bg-blue-50/60 rounded-lg border border-blue-100 mb-1.5">
                  <span className="text-[12px] shrink-0">{a.icon}</span>
                  <div>
                    <div className="text-[8.5px] font-semibold text-gray-700">{a.text}</div>
                    <div className="text-[7.5px] text-gray-400 leading-relaxed">{a.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Actividad reciente */}
            <div className="bg-white rounded-xl border border-gray-200 p-3">
              <div className="text-[9px] font-bold text-gray-700 mb-0.5">Actividad reciente</div>
              <div className="text-[7.5px] text-gray-400 mb-2.5">Últimos eventos operativos relevantes en ventas, billing y fulfillment.</div>
              {ACTIVITY.map((a, i) => (
                <div key={i} className="flex items-start justify-between gap-2 py-1.5 border-b border-gray-100 last:border-0">
                  <div className="flex items-start gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-[3px] shrink-0" />
                    <div>
                      <div className="text-[8px] font-semibold text-gray-700 font-mono">Orden {a.id}</div>
                      <div className="text-[7.5px] text-gray-400">{a.client}</div>
                      <div className="text-[7px] text-gray-300">{a.type} · {a.time}</div>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[7px] font-semibold shrink-0 ${a.badgeCls}`}>{a.badge}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default function Dashboard() {
  return (
    <section id="dashboard" className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1160px] mx-auto px-5">

        <motion.div
          className="max-w-[600px] mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.58 }}
        >
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-[11px] font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
            Panel de control
          </div>
          <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.025em] leading-tight text-[#0f1a2b] mb-4">
            Todo en un solo lugar
          </h2>
          <p className="text-[0.975rem] text-[#3c4f65] leading-relaxed">
            Desde el dashboard de Simple ves en tiempo real qué está pasando con cada conversación,
            cada agente y cada flujo. Sin abrir cinco herramientas distintas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Ambient glow */}
          <div className="absolute inset-x-[10%] -top-8 h-24 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />
          <DashboardMockup />
        </motion.div>

        {/* Feature pills below */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {[
            'Actualización en tiempo real',
            'Filtros por agente, canal o módulo',
            'Alertas automáticas',
            'Exportación a Excel / Google Sheets',
            'Acceso para todo tu equipo',
          ].map(f => (
            <span key={f} className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#dde5f0] bg-[#f4f8fc] text-[#3c4f65] text-[0.78rem] font-medium">
              <span className="text-emerald-500 text-[10px]">✓</span>
              {f}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
