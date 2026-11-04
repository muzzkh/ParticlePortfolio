// In this repo the desert reads the same resume as the classic page:
// edit src/data/resume.ts, not this file.
export { profile, experience, education, projects, skills } from '../../data/resume'

// Where the codex's "PDF" and "Plain" links point. Without WebGL the desert
// redirects to `plain`.
export const site = {
  pdf: '/Muzzamil_Khan_Resume.pdf',
  plain: '/classic/',
}
