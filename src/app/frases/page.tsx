import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/shared/breadcrumb'
import { SectionHeader } from '@/components/shared/section-header'
import { QuoteCard } from '@/features/quotes-page'
import { quotes } from '@/data/quotes'

export const metadata: Metadata = {
  title: 'Frases de Tropa de Elite — As Falas Mais Icônicas do Filme',
  description:
    'Todas as frases marcantes de Tropa de Elite: "Pede pra sair!", "Missão dada é missão cumprida" e muito mais. Copie, compartilhe e descubra o contexto de cada fala.',
  keywords: [
    'frases Tropa de Elite',
    'Pede pra sair',
    'Missão dada é missão cumprida',
    'frases Capitão Nascimento',
    'citações Tropa de Elite',
    'bordões BOPE',
  ],
  openGraph: {
    title: 'Frases Icônicas de Tropa de Elite',
    description: 'Todas as frases mais marcantes do filme Tropa de Elite.',
    url: '/frases',
  },
  alternates: { canonical: '/frases' },
}

export default function QuotesPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Frases', href: '/frases' }]} />

        <SectionHeader
          title="Frases Icônicas"
          subtitle='As falas que marcaram gerações — de "Pede pra sair!" a "Missão dada é missão cumprida"'
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
          {quotes.map((quote) => (
            <QuoteCard key={quote.id} quote={quote} />
          ))}
        </div>
      </div>
    </div>
  )
}
