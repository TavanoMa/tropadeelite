import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/shared/breadcrumb'
import { SectionHeader } from '@/components/shared/section-header'
import { QuizGame } from '@/features/quiz/quiz-game'

export const metadata: Metadata = {
  title: 'Quiz Tropa de Elite — Teste seus Conhecimentos sobre o Filme',
  description:
    'Quanto você sabe sobre Tropa de Elite? Responda 20 perguntas sobre o filme, os personagens, a produção e as curiosidades. Teste seus conhecimentos e descubra sua pontuação!',
  keywords: [
    'quiz Tropa de Elite',
    'perguntas Tropa de Elite',
    'teste Tropa de Elite',
    'trivia BOPE',
    'conhecimentos cinema brasileiro',
  ],
  openGraph: {
    title: 'Quiz Tropa de Elite — Teste seus Conhecimentos',
    description: 'Quanto você sabe sobre Tropa de Elite? Responda 20 perguntas e descubra!',
    url: '/quiz',
  },
  alternates: { canonical: '/quiz' },
}

export default function QuizPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Quiz', href: '/quiz' }]} />
        <SectionHeader
          title="Quiz"
          subtitle="Teste seus conhecimentos sobre Tropa de Elite com 20 perguntas"
        />
        <QuizGame />
      </div>
    </div>
  )
}
