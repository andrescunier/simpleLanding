export default function Footer() {
  return (
    <footer className="border-t border-[#e2eaf3] bg-white">
      <div className="max-w-[1160px] mx-auto px-5 h-16 flex items-center justify-between gap-6">
        <div className="flex items-center gap-2 opacity-80">
          <span className="relative w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-sky-200">
            <span className="absolute inset-[6px] rounded-full bg-white/90" />
            <span className="absolute inset-[10px] rounded-full bg-cyan-300" />
          </span>
          <span className="text-[0.82rem] font-extrabold tracking-[0.12em] text-[#0f1a2b]">SIMPLE</span>
        </div>
        <p className="text-[0.84rem] text-[#6b7f96] m-0">
          Simple &copy; 2025 &middot; Tu empresa aumentada por IA
        </p>
      </div>
    </footer>
  )
}
