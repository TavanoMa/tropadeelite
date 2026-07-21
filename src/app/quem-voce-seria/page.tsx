import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/shared/breadcrumb'
import { SectionHeader } from '@/components/shared/section-header'
import { PersonalityTest } from '@/features/personality/personality-test'

export const metadata: Metadata = {
  title: 'Quem Você Seria no BOPE? — Teste de Personalidade Tropa de Elite',
  description:
    'Descubra qual personagem de Tropa de Elite mais combina com você! Responda 15 perguntas e descubra se você é o Capitão Nascimento, Matias, Neto ou Capitão Fábio.',
  keywords: [
    'teste personalidade Tropa de Elite',
    'qual personagem BOPE',
    'quem você seria Tropa de Elite',
    'teste Capitão Nascimento',
    'personalidade BOPE',
  ],
  openGraph: {
    title: 'Quem Você Seria no BOPE?',
    description: 'Teste de personalidade: descubra qual personagem de Tropa de Elite você seria!',
    url: '/quem-voce-seria',
  },
  alternates: { canonical: '/quem-voce-seria' },
}

export default function PersonalityPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Quem Você Seria?', href: '/quem-voce-seria' }]} />
        <SectionHeader
          title="Quem Você Seria?"
          subtitle="Descubra qual personagem de Tropa de Elite mais combina com sua personalidade"
        />
        <PersonalityTest />
      </div>
    </div>
  )
}
