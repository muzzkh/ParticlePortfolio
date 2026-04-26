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
  tagline:
    'Computer Engineer building reliable, AI-forward software at scale.',
  links: [
    { label: 'muzzkprof@gmail.com', href: 'mailto:muzzkprof@gmail.com', icon: 'mail' },
    {
      label: 'linkedin.com/in/muzzamil-khan',
      href: 'https://linkedin.com/in/muzzamil-khan/',
      icon: 'linkedin',
    },
  ] as LinkItem[],
}

export const education: EducationItem[] = [
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

export const experience: ExperienceItem[] = [
  {
    company: 'Geico',
    role: 'Software Engineer',
    period: 'July 2024 – Present',
    bullets: [
      'Led the implementation of a new React + Spring vehicle damage intake application embedded within a C# host application receiving more than 40,000 requests per day.',
      'Fed damages data to a predictive machine learning algorithm outputting estimated monetary loss.',
      'Fixed over 15 development and production bugs, leading to a significant decrease in application exceptions and increasing reliability.',
      'Led the overhaul of a shop selection and appointment reservation feature, switching from legacy ATLAS data to the vendor Entegral by Enterprise.',
      'Developed over 35 features to implement functionality for Damages and Scheduling applications in Claims.',
      'Utilized an AI-first approach to make current applications MCP ready.',
    ],
    tags: ['React', 'Spring Boot', 'C#', 'ML', 'MCP'],
  },
  {
    company: 'University of Maryland',
    role: 'Engineering Lab / Lecture Teaching Fellow',
    period: 'August 2021 – May 2024',
    bullets: [
      'Guided 40 students during the lab section of the course as they built a purpose-specific autonomous vehicle for one of five challenges.',
      'Fabricated a family of 10 modular rovers that complete randomized obstacle courses using an overhead camera.',
      'Revamped a Python-based vision system for coordinate tracking of bots using ArUco markers.',
      'Pioneered 2 Machine Learning modules using the Nvidia Jetson Nano. Conducted an immersive lecture and formulated a targeted homework task to elevate ML awareness in engineering for 300 students.',
      'Assisted the professor during lecture and hands-on activities with Nvidia Jetsons, Fusion CAD, and Arduino.',
    ],
    tags: ['Python', 'Computer Vision', 'Jetson Nano', 'Arduino', 'Teaching'],
  },
  {
    company: 'Bechtel',
    role: 'Startup Engineering Intern',
    period: 'June 2023 – August 2023',
    bullets: [
      'Applied the engineering process for managing and maintaining Bechtel project sites using in-house Hexagon and Oracle based applications.',
      "Created 10 videos for training material on the application of Hexagon's smart completion tool.",
      'Analyzed 30,000 rows of data stored in the SQL database used by the smart completions tools.',
      'Fixed a bug in the Microsoft PowerApps implementation of the smart completions tool caused by how the SQL data was imported into the application, improving performance by 3 minutes.',
    ],
    tags: ['SQL', 'PowerApps', 'Hexagon', 'Oracle'],
  },
  {
    company: 'Bechtel',
    role: 'Data Management Intern',
    period: 'June 2022 – August 2022',
    bullets: [
      'Utilized machine learning and locality-sensitive hashing techniques to group new data and map it to 18,000 government HTS codes.',
      "Developed, implemented, and trained a machine learning model using Python's Scikit library to complete data analysis and processing of HTS codes. The model achieved 80% accuracy on pre-existing data.",
      "Conducted in-depth interviews with members of the IS&T department to gain insights into information management, data flow, project IT, drone usage, digital twins, and the role of Hexagon's suite of tools in the engineering process.",
    ],
    tags: ['Python', 'Scikit-learn', 'LSH', 'ML'],
  },
]

// Add new projects here — they'll automatically render on the Projects tab.
export const projects: ProjectItem[] = [
  // Example placeholder — replace or remove.
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
    items: ['Java', 'JavaScript', 'TypeScript', 'C++', 'C#', 'Python', 'MATLAB', 'x86', 'Racket'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['Spring Boot', 'React', 'Flutter', 'PyTorch', 'Scikit-learn', 'Arduino'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Cursor', 'Git', 'SQL', 'Hexagon', 'Oracle', 'PowerApps'],
  },
]
