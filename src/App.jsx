import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Dashboard from './components/Dashboard'
import Brainiac from './components/Brainiac'
import Francisco from './components/Francisco'
import Ecosystem from './components/Ecosystem'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Dashboard />
        <Brainiac />
        <Francisco />
        <Ecosystem />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
