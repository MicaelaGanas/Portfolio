export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  liveLabel?: string
  sourceUrl?: string
}

export interface Award {
  id: string
  title: string
  project: string
  event: string
  image: string
  year?: string
}

export interface AwardReflectionPhoto {
  src: string
  alt: string
  caption: string
}

export interface AwardReflection {
  quote: string
  paragraphs: string[]
  event: string
  eventDetail: string
  project: string
  awardCount: number
  tags: string[]
  photos: AwardReflectionPhoto[]
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  image: string
  year?: string
  credentialUrl?: string
}

export type AchievementIcon = 'scholar' | 'certificate' | 'star' | 'award'

export interface Achievement {
  icon: AchievementIcon
  label: string
}

export interface PersonalInterest {
  tag: string
  detail: string
}

export interface Stat {
  label: string
  value: number | null
  suffix?: string
  display?: string
}

export interface NavLink {
  href: string
  label: string
}

export type CardBg = 'black' | 'white' | 'red'
export type CardGraphic = 'spiral' | 'topo' | 'halftone'

export interface TbhonShowcase {
  title: string
  shortTitle: string
  tagline: string
  summary: string
  heroImage: string
  figmaEmbedUrl: string
  figmaLink: string
  apkUrl: string
  sourceUrl: string
  background: string
  goal: string
  workflow: string[]
  stack: { label: string; items: string[] }[]
  designProcess: string[]
  metrics: { label: string; value: string }[]
  disclaimer: string
}
