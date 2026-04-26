import { education } from '../../data/resume'

export default function EducationSection() {
  return (
    <div className="section">
      {education.map((ed) => (
        <article key={ed.school} className="edu-card">
          <header className="edu-head">
            <div>
              <h3 className="edu-school">{ed.school}</h3>
              <p className="edu-meta">
                {ed.degree}
                {ed.location ? ` · ${ed.location}` : ''}
              </p>
            </div>
            <div className="edu-side">
              <span className="edu-period">{ed.graduation}</span>
              {ed.gpa && <span className="edu-gpa">GPA {ed.gpa}</span>}
            </div>
          </header>

          {ed.coursework && ed.coursework.length > 0 && (
            <>
              <h4 className="edu-subhead">Relevant Coursework</h4>
              <ul className="tag-list">
                {ed.coursework.map((c) => (
                  <li key={c} className="tag">
                    {c}
                  </li>
                ))}
              </ul>
            </>
          )}
        </article>
      ))}
    </div>
  )
}
