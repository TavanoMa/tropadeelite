import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/shared/breadcrumb'
import { SectionHeader } from '@/components/shared/section-header'
import { CuriositiesList } from '@/features/curiosities-page'
import { curiosities, getCuriosityCategories } from '@/data/curiosities'

export const metadata: Metadata = {
  title: 'Curiosidades sobre Tropa de Elite — Fatos Surpreendentes sobre o Filme',
  description:
    'Descubra 20 curiosidades fascinantes sobre Tropa de Elite: o vazamento do filme, o treinamento dos atores, o Urso de Ouro em Berlim e muito mais fatos sobre a produção.',
  keywords: [
    'curiosidades Tropa de Elite',
    'fatos Tropa de Elite',
    'bastidores Tropa de Elite',
    'produção Tropa de Elite',
    'Urso de Ouro Berlim',
    'vazamento Tropa de Elite',
  ],
  openGraph: {
    title: 'Curiosidades sobre Tropa de Elite',
    description: 'Fatos surpreendentes sobre a produção, o elenco e o impacto do filme.',
    url: '/curiosidades',
  },
  alternates: { canonical: '/curiosidades' },
}

export default function CuriositiesPage() {
  const categories = getCuriosityCategories()

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: curiosities.slice(0, 10).map((c) => ({
      '@type': 'Question',
      name: c.title,
      acceptedAnswer: {
        '@type': 'Answer',
        text: c.content,
      },
    })),
  }

  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Curiosidades', href: '/curiosidades' }]} />

        <SectionHeader
          title="Curiosidades"
          subtitle="Fatos surpreendentes sobre a produção, o elenco e o impacto cultural de Tropa de Elite"
        />

        <CuriositiesList curiosities={curiosities} categories={categories} />
      </div>
    </div>
  )
}
