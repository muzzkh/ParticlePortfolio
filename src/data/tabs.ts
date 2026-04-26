import type { ComponentType } from 'react'
import About from '../components/sections/About'
import Experience from '../components/sections/Experience'
import EducationSection from '../components/sections/Education'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'

export type Tab = {
  id: string
  label: string
  Component: ComponentType
}

// Add a new tab by adding a new entry below — order here defines tab order.
export const tabs: Tab[] = [
  { id: 'about', label: 'About', Component: About },
  { id: 'experience', label: 'Experience', Component: Experience },
  { id: 'education', label: 'Education', Component: EducationSection },
  { id: 'projects', label: 'Projects', Component: Projects },
  { id: 'skills', label: 'Skills', Component: Skills },
]
