import { projects } from '../../data/resume'

export default function Projects() {
  if (projects.length === 0) {
    return (
      <div className="section">
        <div className="empty-state">
          <h3>Projects coming soon</h3>
          <p>
            Add new entries to <code>projects</code> in{' '}
            <code>src/data/resume.ts</code> and they will appear here
            automatically.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="section">
      <ul className="project-grid">
        {projects.map((p) => (
          <li
            key={p.name}
            className={`project-card ${p.highlight ? 'highlight' : ''}`}
          >
            <header className="project-head">
              <h3 className="project-name">{p.name}</h3>
              <div className="project-links">
                {p.href && (
                  <a href={p.href} target="_blank" rel="noreferrer noopener">
                    Live
                  </a>
                )}
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer noopener">
                    Code
                  </a>
                )}
              </div>
            </header>
            <p className="project-desc">{p.description}</p>
            {p.stack && p.stack.length > 0 && (
              <ul className="tag-list">
                {p.stack.map((s) => (
                  <li key={s} className="tag">
                    {s}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
