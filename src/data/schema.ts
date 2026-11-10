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
  // built in: the ornithopter, a rover, a data core, a tracking dish or a plain
  // cargo pod; or an uploaded .glb
  type: 'ornithopter' | 'rover' | 'core' | 'dish' | 'pod' | 'glb'
  src?: string
  scale?: number
  // degrees
  yaw?: number
  // metres above the pad
  y?: number
  // come to life (lift off, wake, spin up) when a visitor walks up
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
  // projects: groups them in the index and colours the pad, label, card and map
  // marker. 'Robotics', 'Software', 'AI / ML', 'Hardware', 'Research', 'Web' and
  // 'Games' have their own colours; any other name gets one of its own
  category?: string
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
  world: {
    seed?: number
    // the hour visitors arrive at
    time?: number
    // minutes for a full day and night once they walk out (default 24; 0: the sun stands still)
    cycle?: number
    // what else is out there; everything is on unless turned off, walkers default to 4
    life?: { walkers?: number; wildlife?: boolean; spice?: boolean; events?: boolean }
  }
  games?: { worm?: GameSettings; run?: GameSettings; fly?: GameSettings }
  entries: Entry[]
}
