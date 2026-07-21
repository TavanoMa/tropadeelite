import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/shared/breadcrumb'
import { SectionHeader } from '@/components/shared/section-header'
import { SearchInterface } from '@/features/search/search-interface'

export const metadata: Metadata = {
  title: 'Busca — Encontre tudo sobre Tropa de Elite',
  description:
    'Pesquise personagens, frases, curiosidades, artigos e tudo sobre o filme Tropa de Elite.',
  openGraph: {
    title: 'Busca — Tropa de Elite',
    description: 'Encontre tudo sobre Tropa de Elite.',
    url: '/busca',
  },
  alternates: { canonical: '/busca' },
}

export default function SearchPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Busca', href: '/busca' }]} />
        <SectionHeader title="Busca" subtitle="Encontre tudo sobre Tropa de Elite" />
        <SearchInterface />
      </div>
    </div>
  )
}
