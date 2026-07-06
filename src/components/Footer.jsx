import { useLang } from '../i18n'
import FlowBackdrop from './FlowBackdrop'
import BrandLogo from './BrandLogo'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="relative overflow-hidden border-t border-border bg-white">
      <FlowBackdrop variant="light" opacity={0.18} />
      <div className="relative z-[1] max-w-[1080px] mx-auto px-4 sm:px-6 py-5 sm:py-0 sm:h-[4.5rem] flex flex-col sm:flex-row items-center justify-between gap-3">
        <BrandLogo size="sm" className="opacity-85" />
        <p className="text-sm text-text-muted m-0 text-center sm:text-right">
          Simple &copy; 2026 · {t.footer.tagline}
        </p>
      </div>
    </footer>
  )
}
