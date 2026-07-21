import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function readingTime(text: string): number {
  const wordsPerMinute = 200
  const words = text.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trimEnd() + '...'
}

export function generateBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://tropadeelite.com.br${item.url}`,
    })),
  }
}

export function generateMovieJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Movie',
    name: 'Tropa de Elite',
    alternateName: 'Elite Squad',
    dateCreated: '2007-10-05',
    director: {
      '@type': 'Person',
      name: 'José Padilha',
    },
    actor: [
      { '@type': 'Person', name: 'Wagner Moura' },
      { '@type': 'Person', name: 'André Ramiro' },
      { '@type': 'Person', name: 'Caio Junqueira' },
    ],
    genre: ['Crime', 'Drama', 'Action'],
    contentRating: '16',
    inLanguage: 'pt-BR',
    countryOfOrigin: {
      '@type': 'Country',
      name: 'Brasil',
    },
    description:
      'Tropa de Elite é um filme brasileiro de 2007 que retrata a rotina do BOPE no combate ao tráfico de drogas nas favelas do Rio de Janeiro.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '8.0',
      bestRating: '10',
      ratingCount: '120000',
    },
    image: '/images/tropa-de-elite-poster.jpg',
    url: 'https://tropadeelite.com.br',
  }
}

export function generateSearchActionJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Tropa de Elite',
    url: 'https://tropadeelite.com.br',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate:
          'https://tropadeelite.com.br/busca?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }
}
