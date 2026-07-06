import { useState } from 'react'
import { useLang } from '../i18n'
import Button from './ui/Button'
import BrandLogo from './BrandLogo'

function LangToggle({ className = '' }) {
  const { lang, setLang } = useLang()
  return (
    <div className={`flex items-center rounded-md border border-border overflow-hidden text-sm font-medium w-full sm:w-auto ${className}`}>
      {['es', 'en'].map(l => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`flex-1 sm:flex-none px-3 h-9 uppercase transition-colors ${
            lang === l ? 'bg-accent text-white' : 'bg-white text-text-secondary hover:text-text-primary'
          }`}
          aria-pressed={lang === l}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const { t } = useLang()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 h-[4.5rem] flex items-center gap-4 lg:gap-8">

        <a href="/" className="flex items-center flex-shrink-0 min-w-0 no-underline">
          <BrandLogo size="md" />
        </a>

        <nav className="hidden lg:flex flex-1 justify-center gap-1">
          {t.header.nav.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="h-10 px-3.5 inline-flex items-center text-[0.9375rem] font-medium text-text-secondary hover:text-text-primary rounded-md hover:bg-surface-muted transition-colors whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LangToggle />
          <Button href="#contacto" className="h-10 px-6">{t.header.cta}</Button>
        </div>

        <button
          className="lg:hidden ml-auto w-11 h-11 flex flex-col justify-center items-center gap-[5px] border border-border rounded-md bg-white"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-label="Menu"
        >
          <span className={`block h-0.5 w-5 bg-text-primary origin-center transition-transform duration-200 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block h-0.5 w-5 bg-text-primary transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-5 bg-text-primary origin-center transition-transform duration-200 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white px-4 py-2 flex flex-col gap-0.5">
          {t.header.nav.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="h-11 px-3 flex items-center text-[0.9375rem] font-medium text-text-secondary hover:text-text-primary hover:bg-surface-muted rounded-md"
            >
              {l.label}
            </a>
          ))}
          <div className="px-3 py-3 flex flex-col gap-3">
            <LangToggle />
            <Button href="#contacto" className="w-full justify-center" onClick={() => setOpen(false)}>{t.header.cta}</Button>
          </div>
        </div>
      )}
    </header>
  )
}
