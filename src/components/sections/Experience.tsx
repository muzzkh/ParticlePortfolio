import { experience } from '../../data/resume'

export default function Experience() {
  return (
    <div className="section">
      <ol className="timeline">
        {experience.map((job, idx) => (
          <li key={`${job.company}-${idx}`} className="timeline-item">
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <div className="timeline-head">
                <div>
                  <h3 className="job-role">{job.role}</h3>
                  <p className="job-company">{job.company}</p>
                </div>
                <span className="job-period">{job.period}</span>
              </div>
              <ul className="job-bullets">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              {job.tags && job.tags.length > 0 && (
                <ul className="tag-list" aria-label="Technologies">
                  {job.tags.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
