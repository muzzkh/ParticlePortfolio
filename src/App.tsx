import { useEffect, useRef, useState } from 'react'
import ParticleField from './components/ParticleField'
import Header from './components/Header'
import TabNav from './components/TabNav'
import { tabs } from './data/tabs'
import { useTheme } from './hooks/useTheme'
import './App.css'

const STORAGE_KEY = 'resume.activeTab'

// Olive-green particle accents tuned per theme.
const PARTICLE_COLOR = {
  dark: '#b8cf5c',
  light: '#6b7c2a',
} as const

export default function App() {
  const cardRef = useRef<HTMLElement | null>(null)
  const { theme, toggle } = useTheme()
  const [activeId, setActiveId] = useState<string>(() => {
    if (typeof window === 'undefined') return tabs[0].id
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved && tabs.some((t) => t.id === saved)) return saved
    return tabs[0].id
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, activeId)
  }, [activeId])

  const ActivePanel =
    tabs.find((t) => t.id === activeId)?.Component ?? tabs[0].Component

  return (
    <div className="page">
      <ParticleField
        obstacleRef={cardRef}
        color={PARTICLE_COLOR[theme]}
      />

      <main className="resume-card" ref={cardRef}>
        <Header theme={theme} onToggleTheme={toggle} />

        <TabNav tabs={tabs} activeId={activeId} onChange={setActiveId} />

        <section
          id={`panel-${activeId}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeId}`}
          className="panel"
          key={activeId}
        >
          <ActivePanel />
        </section>
      </main>

      <footer className="page-footer">
        <span>
          © {new Date().getFullYear()} Muzzamil Khan · Built with React + Vite
        </span>
      </footer>
    </div>
  )
}
