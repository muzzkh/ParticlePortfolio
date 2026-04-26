import { skills } from '../../data/resume'

export default function Skills() {
  return (
    <div className="section">
      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.category} className="skill-group">
            <h3 className="skill-category">{group.category}</h3>
            <ul className="tag-list">
              {group.items.map((s) => (
                <li key={s} className="tag">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
