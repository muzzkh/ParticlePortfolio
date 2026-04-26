import { profile, experience, education } from '../../data/resume'

export default function About() {
  const currentRole = experience[0]
  const school = education[0]

  return (
    <div className="section about-section">
      <p className="lead">
        Hi, I'm {profile.name.split(' ')[0]}. I'm a software engineer who enjoys
        shipping reliable, AI-forward products. Most recently I've been working on
        large React + Spring applications that handle tens of thousands of
        requests per day.
      </p>

      <div className="quick-grid">
        <div className="quick-card">
          <span className="quick-label">Currently</span>
          <span className="quick-value">{currentRole.role}</span>
          <span className="quick-sub">{currentRole.company}</span>
        </div>
        <div className="quick-card">
          <span className="quick-label">Education</span>
          <span className="quick-value">{school.degree}</span>
          <span className="quick-sub">
            {school.school} · GPA {school.gpa}
          </span>
        </div>
        <div className="quick-card">
          <span className="quick-label">Focus</span>
          <span className="quick-value">Full-stack + ML</span>
          <span className="quick-sub">React · Spring · Python</span>
        </div>
      </div>
    </div>
  )
}
