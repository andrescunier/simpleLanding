import { useLang } from '../i18n'
import { Avatar } from './Actors'
import Button from './ui/Button'
import FlowBackdrop from './FlowBackdrop'

export default function ActorPage({ actor }) {
  const { t } = useLang()
  const labels = t.actors.page
  const page = actor.page
  const others = t.actors.list.filter(a => a.id !== actor.id)

  return (
    <div className="relative bg-surface-dark overflow-hidden">
      <FlowBackdrop variant="dark" opacity={0.22} />
      <div className="relative z-[1]">

      <section className="pt-28 pb-12 md:pt-32 md:pb-16 border-b border-border-dark">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8 text-sm text-text-muted" aria-label="Breadcrumb">
            <a href="#/" className="hover:text-white/70 transition-colors">{labels.breadcrumbHome}</a>
            <span aria-hidden="true">/</span>
            <a href="#agentes" className="hover:text-white/70 transition-colors">{labels.breadcrumbActors}</a>
            <span aria-hidden="true">/</span>
            <span className="text-white/60">{page.hi}</span>
          </nav>

          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <Avatar actor={actor} size="xl" />
            <div className="min-w-0 flex-1">
              <p className="text-xs text-text-muted uppercase tracking-wide mb-2">{page.subtitle}</p>
              <h1 className="text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.02em] text-white mb-4 m-0">
                {page.hi}
              </h1>
              <p className="text-base text-white/60 leading-relaxed mb-4">{page.heroText}</p>
              <p className="text-sm text-text-muted mb-5">{labels.platformNote}</p>
              <Button href="#contacto" variant="dark">{labels.cta}</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-semibold text-white mb-2">{labels.howTitle}</h2>
          <p className="text-sm text-white/45 mb-8">{labels.mixedFlows}</p>
          <ul className="space-y-5 m-0 p-0 list-none">
            {page.how.map((item, i) => (
              <li key={i} className="border-l-2 border-accent/40 pl-5">
                <h3 className="text-sm font-medium text-white mb-1">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed m-0">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 md:py-16 border-t border-border-dark">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-semibold text-white mb-4">{labels.aboutTitle}</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-2">{page.about}</p>
          <p className="text-sm text-white/45 m-0">{actor.personality.join(' · ')}</p>
        </div>
      </section>

      <section className="py-12 md:py-16 border-t border-border-dark">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-white/45 mb-5">{labels.closingNote}</p>
          <Button href="#contacto" variant="dark">{labels.cta}</Button>
        </div>
      </section>

      <section className="py-12 md:py-16 border-t border-border-dark">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-semibold text-white mb-6">{labels.othersTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {others.map(a => (
              <a
                key={a.id}
                href={`#/actor/${a.id}`}
                className="flex items-center gap-3 p-3 rounded-lg border border-border-dark hover:border-white/15 hover:bg-white/[0.02] transition-colors no-underline"
              >
                <Avatar actor={a} size="md" />
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-white">{a.name}</span>
                  <span className="block text-xs text-white/45 truncate">{a.role}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      </div>
    </div>
  )
}
