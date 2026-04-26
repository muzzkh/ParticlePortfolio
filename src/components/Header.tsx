import { profile } from '../data/resume'
import ThemeToggle from './ThemeToggle'
import type { Theme } from '../hooks/useTheme'

const iconPaths: Record<string, string> = {
  mail: 'M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5v-9zm2.5-.5a.5.5 0 0 0-.5.5v.379l7 4.2 7-4.2V7.5a.5.5 0 0 0-.5-.5h-13zM19 9.954l-6.485 3.89a1 1 0 0 1-1.03 0L5 9.954V16.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V9.954z',
  linkedin:
    'M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001zM3 9.75h4v11H3v-11zm7 0h3.84v1.5h.05c.54-1 1.86-2.05 3.83-2.05 4.1 0 4.86 2.7 4.86 6.2V20.75H18.7v-4.65c0-1.1 0-2.5-1.5-2.5s-1.74 1.18-1.74 2.42v4.73H10v-11z',
  github:
    'M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18.91-.25 1.89-.38 2.86-.39.97.01 1.95.14 2.86.39 2.18-1.49 3.14-1.18 3.14-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.79.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z',
  globe:
    'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.93 8zM12 4c.83 1.16 1.91 3.04 2.6 4H9.4C10.09 7.04 11.17 5.16 12 4zM4.26 14a8.06 8.06 0 0 1 0-4h3.38a16.6 16.6 0 0 0 0 4H4.26zm.81 2h2.95c.32 1.25.78 2.45 1.38 3.56A8.03 8.03 0 0 1 5.07 16zm2.95-8H5.07a8.03 8.03 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.02 8zM12 20c-.83-1.16-1.91-3.04-2.6-4h5.2C13.91 16.96 12.83 18.84 12 20zm3.04-6H8.96a14.6 14.6 0 0 1 0-4h6.08a14.6 14.6 0 0 1 0 4zm.55 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14a16.6 16.6 0 0 0 0-4h3.38a8.06 8.06 0 0 1 0 4h-3.38z',
  external:
    'M14 3a1 1 0 1 0 0 2h3.59l-9.3 9.29a1 1 0 1 0 1.42 1.42L19 6.41V10a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-6zM5 5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 1 0-2 0v5H5V7h5a1 1 0 1 0 0-2H5z',
}

function Icon({ name }: { name: keyof typeof iconPaths }) {
  return (
    <svg
      className="link-icon"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden="true"
    >
      <path d={iconPaths[name] || iconPaths.external} fill="currentColor" />
    </svg>
  )
}

type HeaderProps = {
  theme: Theme
  onToggleTheme: () => void
}

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="resume-header">
      <div className="header-top">
        <div className="header-text">
          <h1 className="name">{profile.name}</h1>
          <p className="title">{profile.title}</p>
          <p className="tagline">{profile.tagline}</p>
        </div>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
      <ul className="links">
        {profile.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer noopener' : undefined}
            >
              <Icon name={(link.icon ?? 'external') as keyof typeof iconPaths} />
              <span>{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
