import type { Theme } from '../hooks/useTheme'

type Props = {
  theme: Theme
  onToggle: () => void
}

export default function ThemeToggle({ theme, onToggle }: Props) {
  const isDark = theme === 'dark'
  const nextLabel = isDark ? 'Switch to light theme' : 'Switch to dark theme'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={nextLabel}
      title={nextLabel}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <line x1="12" y1="2.6" x2="12" y2="5.2" />
        <line x1="12" y1="18.8" x2="12" y2="21.4" />
        <line x1="2.6" y1="12" x2="5.2" y2="12" />
        <line x1="18.8" y1="12" x2="21.4" y2="12" />
        <line x1="5.2" y1="5.2" x2="7.0" y2="7.0" />
        <line x1="17.0" y1="17.0" x2="18.8" y2="18.8" />
        <line x1="5.2" y1="18.8" x2="7.0" y2="17.0" />
        <line x1="17.0" y1="7.0" x2="18.8" y2="5.2" />
      </g>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.5 14.4A8 8 0 0 1 9.6 3.5a.6.6 0 0 0-.8-.7 9.5 9.5 0 1 0 12.4 12.4.6.6 0 0 0-.7-.8z"
      />
    </svg>
  )
}
