import type { StreamingPlatform } from '@/types'

export const streamingPlatforms: StreamingPlatform[] = [
  {
    name: 'Globoplay',
    url: 'https://globoplay.globo.com',
    type: 'subscription',
    price: 'A partir de R$ 24,90/mês',
    logo: '/images/platforms/globoplay.svg',
  },
  {
    name: 'Amazon Prime Video',
    url: 'https://www.primevideo.com',
    type: 'subscription',
    price: 'R$ 14,90/mês',
    logo: '/images/platforms/prime-video.svg',
  },
  {
    name: 'Apple TV',
    url: 'https://tv.apple.com',
    type: 'rent',
    price: 'Aluguel a partir de R$ 9,90',
    logo: '/images/platforms/apple-tv.svg',
  },
  {
    name: 'Google Play Filmes',
    url: 'https://play.google.com/store/movies',
    type: 'rent',
    price: 'Aluguel a partir de R$ 7,90',
    logo: '/images/platforms/google-play.svg',
  },
  {
    name: 'YouTube (Aluguel)',
    url: 'https://www.youtube.com',
    type: 'rent',
    price: 'Aluguel a partir de R$ 7,90',
    logo: '/images/platforms/youtube.svg',
  },
]
