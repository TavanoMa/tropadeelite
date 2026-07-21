export interface Character {
  id: string
  name: string
  actor: string
  actorSlug: string
  nickname?: string
  rank?: string
  role: string
  shortBio: string
  fullBio: string
  history: string
  importance: string
  traits: string[]
  quotes: Quote[]
  curiosities: string[]
  relationships: Relationship[]
  films: string[]
  imageUrl: string
  imageAlt: string
}

export interface Quote {
  id: string
  text: string
  character: string
  characterSlug: string
  context?: string
  film: string
}

export interface Actor {
  id: string
  slug: string
  name: string
  birthDate: string
  birthPlace: string
  bio: string
  filmography: FilmEntry[]
  curiosities: string[]
  imageUrl: string
  imageAlt: string
  awards?: string[]
}

export interface FilmEntry {
  title: string
  year: number
  role: string
  director?: string
}

export interface Curiosity {
  id: string
  title: string
  content: string
  category: string
  source?: string
}

export interface TimelineEvent {
  id: string
  year: string
  title: string
  description: string
  type: 'film' | 'plot' | 'production' | 'cultural'
}

export interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface PersonalityQuestion {
  id: number
  question: string
  options: PersonalityOption[]
}

export interface PersonalityOption {
  text: string
  scores: Record<string, number>
}

export interface PersonalityResult {
  id: string
  character: string
  title: string
  description: string
  traits: string[]
  imageUrl: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  readingTime: number
  tags: string[]
  relatedPosts: string[]
  imageUrl: string
  imageAlt: string
}

export interface SimilarFilm {
  id: string
  title: string
  year: number
  director: string
  synopsis: string
  whySimilar: string
  whereToWatch: string[]
  imageUrl: string
  imageAlt: string
  internalLink?: string
}

export interface StreamingPlatform {
  name: string
  url: string
  type: 'subscription' | 'rent' | 'buy'
  price?: string
  logo: string
}

export interface Relationship {
  character: string
  characterSlug: string
  type: string
  description: string
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  width: number
  height: number
  category: string
}

export interface SearchResult {
  type: 'character' | 'quote' | 'curiosity' | 'post' | 'page'
  title: string
  excerpt: string
  url: string
}

export interface ChapterSection {
  id: string
  title: string
  content: string
  highlights?: string[]
}
