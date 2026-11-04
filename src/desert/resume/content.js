// In this repo the desert's resume comes from src/data/resume.ts:
// edit that file, not this one.
export { profile, experience, education, projects, skills } from '../../data/resume'

// Where the codex's "PDF" link points. `plain: null` hides the plain-version
// link; without WebGL the intro screen then offers the PDF and contact links.
export const site = {
  pdf: '/Muzzamil_Khan_Resume.pdf',
  plain: null,
}
