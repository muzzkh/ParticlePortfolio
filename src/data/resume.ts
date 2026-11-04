// Resume data — edit this file to update content across the site.
// Adding a new section is as simple as appending a new entry that matches
// one of the section shapes below and registering it in `tabs.ts`.

export type LinkItem = {
  label: string
  href: string
  icon?: 'mail' | 'linkedin' | 'github' | 'globe' | 'external'
}

export type EducationItem = {
  school: string
  location: string
  degree: string
  graduation: string
  gpa?: string
  coursework?: string[]
}

export type ExperienceItem = {
  company: string
  role: string
  period: string
  location?: string
  bullets: string[]
  tags?: string[]
}

export type ProjectItem = {
  name: string
  description: string
  href?: string
  repo?: string
  stack?: string[]
  highlight?: boolean
}

export type SkillGroup = {
  category: string
  items: string[]
}

export const profile = {
  name: 'Muzzamil Khan',
  title: 'Software Engineer',
  // shown above the name on the desert's intro screen
  headline: 'Computer Engineer',
  tagline: 'Computer Engineer building reliable, AI-forward software at scale.',
  links: [
    { label: 'muzzkprof@gmail.com', href: 'mailto:muzzkprof@gmail.com', icon: 'mail' },
    { label: 'linkedin.com/in/muzzamil-khan', href: 'https://linkedin.com/in/muzzamil-khan/', icon: 'linkedin' },
  ] as LinkItem[],
}

// Newest first: the first entry is also the waystone closest to where the
// desert walk starts.
export const experience: ExperienceItem[] = [
  {
    company: 'Geico',
    role: 'Software Engineer II',
    period: 'February 2026 – Present',
    bullets: [
      'Led the end-to-end re-platforming of a legacy claims frontend in Flutter, owning the system architecture, technical RFC, and multi-quarter delivery roadmap adopted across the team.',
      'Designed and rolled out an Azure Blob Storage–based deployment strategy, cutting cumulative passive build/deploy time by 300+ hours per year and unblocking parallel release trains.',
      'Shipped 80+ features using an AI-first approach for the inaugural release, scaling the platform from pilot to four states with zero P1 incidents at launch.',
      'Established frontend engineering standards (component architecture, state management, CI/CD) that the broader team has adopted as the baseline for new Flutter work.',
    ],
    tags: ['Flutter', 'Azure Blob Storage', 'CI/CD', 'System design', 'AI-first'],
  },
  {
    company: 'Geico',
    role: 'Software Engineer I',
    period: 'July 2024 – February 2026',
    bullets: [
      'Led implementation of a React + TypeScript / Spring Boot vehicle damage intake application embedded in a C# host serving 40,000+ requests per day, owning API contracts, component design, and rollout.',
      'Integrated structured damage data into a predictive ML pipeline that outputs estimated monetary loss per claim, directly informing downstream adjuster workflows.',
      'Led the overhaul of the shop selection and appointment reservation flow, migrating from legacy ATLAS data to the Entegral (Enterprise) vendor integration, modernizing the data contract and reducing brittle legacy coupling.',
      'Delivered 35+ features across the Damages and Scheduling claims applications and resolved 15+ production and pre-prod defects, materially reducing exception rates and improving reliability.',
      'Drove an AI-first initiative to make existing claims applications MCP-ready, enabling LLM-driven tooling and automated workflows on top of internal services.',
    ],
    tags: ['React', 'TypeScript', 'Spring Boot', 'C#', 'ML pipeline', 'MCP'],
  },
  {
    company: 'University of Maryland',
    role: 'Engineering Lab / Lecture Teaching Fellow',
    period: 'August 2021 – May 2024',
    bullets: [
      'Mentored 40 students per semester building autonomous vehicles for five mission-specific challenges; supported lectures for a course of 300 students.',
      'Designed and fabricated a family of 10 modular rovers capable of completing randomized obstacle courses via an overhead-camera tracking system, and rebuilt the Python-based vision pipeline for ArUco-marker tracking.',
      'Authored 2 new ML modules on Nvidia Jetson Nano, including lecture content and a graded assignment, introducing ML fundamentals into the core curriculum.',
    ],
    tags: ['Python', 'Computer vision', 'Jetson Nano', 'Robotics', 'Teaching'],
  },
  {
    company: 'Bechtel',
    role: 'Startup Engineering Intern',
    period: 'June 2023 – August 2023',
    bullets: [
      "Built 10 training videos and tooling support for Hexagon's smart completions tool used across active project sites.",
      'Analyzed 30,000+ rows of SQL-backed completions data; fixed a Microsoft PowerApps data-import bug that improved end-to-end performance by ~3 minutes per run.',
    ],
    tags: ['SQL', 'PowerApps', 'Hexagon'],
  },
  {
    company: 'Bechtel',
    role: 'Data Management Intern',
    period: 'June 2022 – August 2022',
    bullets: [
      'Built a Python (scikit-learn) classifier with locality-sensitive hashing to map incoming records to 18,000 government HTS codes, achieving 80% accuracy on historical data.',
    ],
    tags: ['Python', 'Scikit-learn', 'LSH', 'ML'],
  },
]

export const education: EducationItem[] = [
  {
    school: 'Johns Hopkins University',
    location: 'Whiting School of Engineering',
    degree: 'M.S. Robotics and Autonomous Systems',
    graduation: 'May 2029',
  },
  {
    school: 'University of Maryland',
    location: 'College Park, MD',
    degree: 'B.S. Computer Engineering',
    graduation: 'May 2024',
    gpa: '3.7',
    coursework: [
      'Foundations of ML',
      'Circuit Design',
      'Digital Logic',
      'Discrete Signals',
      'Computer Security',
      'Reverse Engineering',
      'Data Analysis',
      'Computer Architecture',
      'Operating Systems',
      'Software Engineering',
    ],
  },
]

// Add new projects here — they render on the Projects tab and get their own
// waystone in the desert.
export const projects: ProjectItem[] = [
  // {
  //   name: 'Project name',
  //   description: 'Short blurb describing what it is and why it matters.',
  //   href: 'https://example.com',
  //   repo: 'https://github.com/your/repo',
  //   stack: ['React', 'TypeScript'],
  //   highlight: true,
  // },
]

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Java', 'C#', 'Python', 'TypeScript', 'MATLAB'],
  },
  {
    category: 'Frameworks & libraries',
    items: ['Spring Boot', 'React', 'Flutter', 'PyTorch', 'Scikit-learn', 'Arduino'],
  },
  {
    category: 'Platforms & tools',
    items: ['Azure', 'CI/CD', 'MCP', 'SQL', 'PowerApps', 'Jetson Nano', 'Cursor'],
  },
]
