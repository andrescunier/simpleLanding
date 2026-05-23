import { useState } from 'react'

const NAV = [
  { href: '#problema', label: 'Problema' },
  { href: '#flujo',    label: 'Flujo' },
  { href: '#brainiac', label: 'Brainiac' },
  { href: '#agentes',  label: 'Agentes' },
  { href: '#modulos',  label: 'Módulos' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-xl border-b border-gray-100/90">
      <div className="max-w-[1160px] mx-auto px-5 h-[66px] flex items-center gap-6">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="relative w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-sky-200 shadow-sm">
            <span className="absolute inset-[6px] rounded-full bg-white/90" />
            <span className="absolute inset-[10px] rounded-full bg-cyan-300" />
          </span>
          <span className="text-[0.82rem] font-extrabold tracking-[0.12em] text-[#0f1a2b]">SIMPLE</span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex flex-1 justify-center gap-0.5">
          {NAV.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="h-9 px-3.5 inline-flex items-center text-sm font-medium text-[#3c4f65] hover:text-[#0f1a2b] hover:bg-gray-50 rounded-lg transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contacto"
          className="hidden md:inline-flex h-9 px-4 items-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
        >
          Solicitar demo
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden ml-auto w-10 h-10 flex flex-col justify-center items-center gap-[5px] border border-gray-200 rounded-lg bg-white"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-label="Menu"
        >
          <span className={`block h-0.5 w-5 bg-[#0f1a2b] origin-center transition-transform duration-200 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block h-0.5 w-5 bg-[#0f1a2b] transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-5 bg-[#0f1a2b] origin-center transition-transform duration-200 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white/98 px-4 py-2 flex flex-col gap-0.5">
          {NAV.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="h-10 px-3 flex items-center text-sm font-medium text-[#3c4f65] hover:text-[#0f1a2b] hover:bg-gray-50 rounded-lg"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="h-10 px-3 flex items-center text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-lg"
          >
            Solicitar demo
          </a>
        </div>
      )}
    </header>
  )
}
