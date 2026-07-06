import { useEffect, useState } from 'react'
import { LangProvider, useLang } from './i18n'
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Platform from './components/Platform'
import ProductShowcase from './components/ProductShowcase'
import Augmented from './components/Augmented'
import Solution from './components/Solution'
import Dashboard from './components/Dashboard'
import Brainiac from './components/Brainiac'
import Actors from './components/Actors'
import ActorPage from './components/ActorPage'
import Agents from './components/Agents'
import UseCases from './components/UseCases'
import Ecosystem from './components/Ecosystem'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Routing liviano por hash: '#/actor/:id' muestra el perfil, cualquier otro hash es un ancla de la landing.
function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

function Landing() {
  return (
    <>
      <Hero />
      <Problem />
      <Platform />
      <ProductShowcase />
      <Augmented />
      <Solution />
      <Dashboard />
      <Brainiac />
      <Actors />
      <Agents />
      <UseCases />
      <Ecosystem />
      <Pricing />
      <Contact />
    </>
  )
}

function Router() {
  const { t } = useLang()
  const hash = useHashRoute()

  const actorId = hash.startsWith('#/actor/') ? hash.slice('#/actor/'.length) : null
  const actor = actorId ? t.actors.list.find(a => a.id === actorId) : null

  useEffect(() => {
    if (actor) {
      window.scrollTo({ top: 0 })
      return
    }
    // Al volver de un perfil con un ancla (#contacto, #agentes...), la sección
    // recién existe después de este render: scrolleamos manualmente.
    if (hash && !hash.startsWith('#/')) {
      const el = document.getElementById(hash.slice(1))
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash, actor])

  return (
    <>
      <Header />
      <main className="relative min-w-0 overflow-x-hidden">
        <div className="relative z-[1]">
          {actor ? <ActorPage actor={actor} /> : <Landing />}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <LangProvider>
      <Router />
    </LangProvider>
  )
}
