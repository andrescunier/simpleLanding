import { createContext, useContext, useEffect, useState } from 'react'
import { es, en } from './locales'

const LangContext = createContext(null)

const DICTS = { es, en }

function detectLang() {
  try {
    const saved = localStorage.getItem('simple-lang')
    if (saved in DICTS) return saved
  } catch { /* localStorage bloqueado */ }
  return (navigator.language || '').toLowerCase().startsWith('es') ? 'es' : 'en'
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(detectLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = l => {
    setLangState(l)
    try { localStorage.setItem('simple-lang', l) } catch { /* ignorar */ }
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t: DICTS[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
