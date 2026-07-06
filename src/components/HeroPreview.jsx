import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../i18n'
import AgentFeed from './AgentFeed'
import PreviewScreenshot, { PreviewShell } from './PreviewScreenshot'

const ease = [0.16, 1, 0.3, 1]

function OverviewPreview() {
  const { t } = useLang()
  const layers = t.hero.preview.overviewLayers

  return (
    <PreviewShell label={t.hero.preview.labels.overview} badge={t.hero.preview.badges.included}>
      <div className="p-3 sm:p-4 grid grid-cols-1 min-[420px]:grid-cols-2 gap-2 sm:gap-2.5">
        {layers.map(layer => (
          <div key={layer.title} className="rounded-lg border border-border bg-white p-3 sm:p-3.5 flex flex-col gap-1 min-w-0">
            <span className="text-[10px] font-medium text-accent uppercase tracking-wide">{layer.tag}</span>
            <span className="text-sm font-semibold text-text-primary">{layer.title}</span>
            <span className="text-[11px] text-text-secondary leading-snug">{layer.desc}</span>
          </div>
        ))}
      </div>
    </PreviewShell>
  )
}

const SLIDES = ['overview', 'dashboard', 'front', 'agents', 'apis']

export default function HeroPreview({ index = 0 }) {
  const { t } = useLang()
  const p = t.hero.preview
  const slide = SLIDES[index % SLIDES.length]

  const content = {
    overview: <OverviewPreview />,
    dashboard: (
      <PreviewScreenshot
        src="/preview-dashboard.png"
        alt={p.screenshots.dashboard.alt}
        label={p.labels.dashboard}
        badge={p.badges.live}
        dark
        url={p.screenshots.dashboard.url}
        aspect="aspect-[16/11]"
      />
    ),
    front: (
      <PreviewScreenshot
        src="/preview-front.png"
        alt={p.screenshots.front.alt}
        label={p.labels.front}
        badge={p.badges.template}
        url={p.screenshots.front.url}
        aspect="aspect-[16/11]"
        objectPosition="object-top"
      />
    ),
    agents: (
      <PreviewShell label={p.labels.agents} badge={p.badges.live} dark>
        <AgentFeed embedded />
      </PreviewShell>
    ),
    apis: (
      <PreviewScreenshot
        src="/preview-apis.png"
        alt={p.screenshots.apis.alt}
        label={p.labels.apis}
        badge={p.badges.available}
        url={p.screenshots.apis.url}
        aspect="aspect-[16/11]"
      />
    ),
  }[slide]

  return (
    <div className="w-full min-w-0">
      <div className="flex items-center justify-center gap-1.5 mb-3" role="tablist" aria-label="Vista previa">
        {SLIDES.map((id, i) => (
          <span
            key={id}
            role="presentation"
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index % SLIDES.length ? 'w-6 bg-accent' : 'w-1.5 bg-border'
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="min-h-[220px] sm:min-h-[260px] md:min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full min-w-0"
          >
            {content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export { SLIDES as HERO_PREVIEW_SLIDES }
