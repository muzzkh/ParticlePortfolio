// The shape of src/data/site.json: everything the site shows. /management edits
// it for you; these types are here for editing it by hand. Paths to files
// (cover, model.src, site.pdf, images in body) are relative to public/.

export type LinkItem = {
  label: string
  href: string
  icon?: 'mail' | 'linkedin' | 'github' | 'globe' | 'external'
}

export type Profile = {
  name: string
  // used where there's no headline
  title: string
  // the line above the name on the intro screen
  headline?: string
  tagline?: string
  // replaces the generated intro text when set
  intro?: string
  links: LinkItem[]
}

export type Model = {
  // the built-in ornithopter, a plain cargo pod, or an uploaded .glb
  type: 'ornithopter' | 'pod' | 'glb'
  src?: string
  scale?: number
  // degrees
  yaw?: number
  // metres above the pad
  y?: number
  // rise and hover when a visitor walks up
  lift?: boolean
}

export type Entry = {
  // used in links (…/#id)
  id: string
  // experience, education and skills are waystones along the road (in this
  // order); projects are landing pads along the project path
  kind: 'experience' | 'education' | 'project' | 'skills'
  title: string
  org?: string
  // projects: shown on the label and card, like 'In progress'
  status?: string
  period?: string
  // the short years label; worked out from `period` when missing
  years?: string
  location?: string
  // the lead-in at the top of the card
  summary?: string
  bullets?: string[]
  // Markdown, with images
  body?: string
  cover?: string
  coverAlt?: string
  tags?: string[]
  tagsLabel?: string
  // [label, value] pairs, like ['GPA', '3.7']
  facts?: [string, string][]
  links?: { label: string; href: string }[]
  // skills only
  groups?: { category: string; items: string[] }[]
  // projects only
  model?: Model
  // placed by hand: metres from where visitors start (x east, z south) and a
  // turn in degrees; without it, the entry takes the next spot on its path
  place?: { dx: number; dz: number; rot?: number }
  // waystone size, 0.5 to 2
  scale?: number
  // kept in the file, not shown
  hidden?: boolean
}

// the three games in the desert: hide one, or place it by hand (rot turns the
// way its course runs, in degrees from straight away from the start)
export type GameSettings = {
  hidden?: boolean
  place?: { dx: number; dz: number; rot?: number }
}

export type SiteContent = {
  version: 1
  profile: Profile
  site: { pdf?: string }
  world: { seed?: number; time?: number }
  games?: { worm?: GameSettings; run?: GameSettings; fly?: GameSettings }
  entries: Entry[]
}
