import { profile, experience, education } from '../../data/resume'

export default function About() {
  const currentRole = experience[0]
  const school = education[0]

  return (
    <div className="section about-section">
      <p className="lead">
        Hi, I'm {profile.name.split(' ')[0]}. I'm a software engineer at{' '}
        {currentRole.company}, where I lead the Flutter re-platforming of a
        claims frontend and build AI-first tooling on top of our services. I'm
        also pursuing an M.S. in Robotics and Autonomous Systems at Johns
        Hopkins.
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
            {school.school}
            {school.gpa ? ` · GPA ${school.gpa}` : ` · ${school.graduation}`}
          </span>
        </div>
        <div className="quick-card">
          <span className="quick-label">Focus</span>
          <span className="quick-value">Frontend platforms + ML</span>
          <span className="quick-sub">Flutter · React · Spring · Python</span>
        </div>
      </div>
    </div>
  )
}
