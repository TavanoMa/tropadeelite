import type { Metadata, Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { ThemeProvider } from '@/components/layout/theme-provider'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ScrollToTop } from '@/components/shared/scroll-to-top'
import { generateSearchActionJsonLd, generateMovieJsonLd } from '@/lib/utils'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://tropadeelite.com.br'),
  title: {
    default: 'Tropa de Elite — O Maior Portal Brasileiro sobre o Filme',
    template: '%s | Tropa de Elite',
  },
  description:
    'O maior portal brasileiro dedicado ao filme Tropa de Elite. Personagens, frases, curiosidades, quiz, análises e tudo sobre o clássico do cinema nacional dirigido por José Padilha.',
  keywords: [
    'Tropa de Elite',
    'BOPE',
    'Capitão Nascimento',
    'Wagner Moura',
    'José Padilha',
    'cinema brasileiro',
    'filme brasileiro',
    'Pede pra sair',
    'Elite Squad',
  ],
  authors: [{ name: 'Tropa de Elite Portal' }],
  creator: 'Tropa de Elite Portal',
  publisher: 'Tropa de Elite Portal',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://tropadeelite.com.br',
    siteName: 'Tropa de Elite',
    title: 'Tropa de Elite — O Maior Portal Brasileiro sobre o Filme',
    description:
      'O maior portal brasileiro dedicado ao filme Tropa de Elite. Personagens, frases, curiosidades e tudo sobre o clássico do cinema nacional.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tropa de Elite — Portal dedicado ao filme',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tropa de Elite — O Maior Portal Brasileiro sobre o Filme',
    description:
      'O maior portal brasileiro dedicado ao filme Tropa de Elite. Personagens, frases, curiosidades, quiz e muito mais.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  alternates: {
    canonical: 'https://tropadeelite.com.br',
    types: {
      'application/rss+xml': 'https://tropadeelite.com.br/feed.xml',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${oswald.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateMovieJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateSearchActionJsonLd()),
          }}
        />
      </head>
      <body className="bg-zinc-950 text-zinc-100 font-sans antialiased">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
