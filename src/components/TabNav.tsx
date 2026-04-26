import type { Tab } from '../data/tabs'

type Props = {
  tabs: Tab[]
  activeId: string
  onChange: (id: string) => void
}

export default function TabNav({ tabs, activeId, onChange }: Props) {
  return (
    <nav className="tab-nav" role="tablist" aria-label="Resume sections">
      {tabs.map((tab) => {
        const active = tab.id === activeId
        return (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            role="tab"
            type="button"
            aria-selected={active}
            aria-controls={`panel-${tab.id}`}
            tabIndex={active ? 0 : -1}
            className={`tab-btn ${active ? 'active' : ''}`}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </button>
        )
      })}
    </nav>
  )
}
