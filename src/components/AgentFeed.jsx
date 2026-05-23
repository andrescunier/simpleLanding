const METRICS = [
  { stat: '43',   label: 'flujos hoy' },
  { stat: '98.2%',label: 'resueltos IA' },
  { stat: '12 min',label: 'promedio' },
]

export default function AgentFeed() {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/[0.07] bg-[#0b1420] shadow-[0_32px_80px_rgba(11,20,32,0.55),0_0_0_1px_rgba(255,255,255,0.04)]">

      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.07]">
        <div className="flex items-center gap-2">
          <span className="relative w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-sky-200 shadow-[0_0_22px_rgba(6,182,212,0.35)]">
            <span className="absolute inset-[6px] rounded-full bg-[#0b1420]" />
            <span className="absolute inset-[10px] rounded-full bg-cyan-300" />
          </span>
          <span className="text-[0.82rem] font-extrabold tracking-[0.12em] text-white/80">SIMPLE</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-white/45 font-medium">
          <span
            className="w-2 h-2 rounded-full bg-emerald-400"
            style={{ animation: 'livePulse 2s ease-in-out infinite', boxShadow: '0 0 0 3px rgba(52,211,153,0.2)' }}
          />
          Brainiac activo
        </div>
      </div>

      {/* Feed body */}
      <div className="px-5 py-5 flex flex-col gap-3">

        {/* Incoming message */}
        <div className="flex items-start gap-3 feed-in delay-1">
          <div className="w-8 h-8 rounded-full bg-white/10 text-white/55 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
            WA
          </div>
          <div className="bg-white/[0.07] border border-white/[0.09] rounded-[14px] rounded-tl-[4px] px-4 py-2.5 max-w-[86%]">
            <span className="block text-[10px] font-semibold text-white/32 mb-1">
              Cliente · WhatsApp
            </span>
            <p className="text-[0.82rem] text-white/80 leading-snug m-0">
              Hola, ¿me pueden decir el estado del pedido #4821 y si llega antes del viernes?
            </p>
          </div>
        </div>

        {/* Processing event */}
        <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/[0.14] feed-in delay-2">
          <span className="px-2 py-0.5 rounded-full bg-cyan-500/[0.15] border border-cyan-400/[0.25] text-cyan-400 text-[9px] font-bold uppercase tracking-wider shrink-0">
            Brainiac
          </span>
          <span className="text-[0.78rem] text-white/42">
            Detectando intención · consultando ERP · generando respuesta
          </span>
        </div>

        {/* Outgoing message */}
        <div className="flex items-start gap-3 flex-row-reverse feed-in delay-3">
          <div className="bg-blue-600/30 border border-blue-500/35 rounded-[14px] rounded-tr-[4px] px-4 py-2.5 max-w-[86%]">
            <span className="block text-[10px] font-semibold text-white/32 mb-1 text-right">
              Agente Simple
            </span>
            <p className="text-[0.82rem] text-white/85 leading-snug m-0">
              ¡Claro! Tu pedido #4821 sale hoy y llega el jueves. ¿Podemos ayudarte con algo más?
            </p>
          </div>
        </div>

        {/* Action tags */}
        <div className="flex flex-wrap gap-1.5 feed-in delay-4">
          {['ERP actualizado', 'CRM registrado', 'Trazabilidad OK'].map(tag => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/[0.08] text-emerald-400 text-[11px] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Metrics footer */}
      <div className="border-t border-white/[0.07] grid grid-cols-3">
        {METRICS.map((m, i) => (
          <div
            key={i}
            className={`px-5 py-3.5 flex flex-col gap-0.5 ${i > 0 ? 'border-l border-white/[0.07]' : ''}`}
          >
            <strong className="text-white text-[0.92rem] font-bold tracking-tight">{m.stat}</strong>
            <span className="text-white/32 text-[11px]">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
