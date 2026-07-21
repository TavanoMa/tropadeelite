import type { Metadata } from 'next'
import Link from 'next/link'
import { Skull } from 'lucide-react'
import { Breadcrumb } from '@/components/shared/breadcrumb'
import { SectionHeader } from '@/components/shared/section-header'

export const metadata: Metadata = {
  title: 'Sobre o Portal — Tropa de Elite',
  description:
    'Conheça o portal Tropa de Elite: o maior site brasileiro dedicado ao clássico do cinema nacional. Saiba nossa missão, objetivos e como contribuímos para a memória do filme.',
  openGraph: {
    title: 'Sobre o Portal Tropa de Elite',
    description: 'O maior portal brasileiro dedicado ao filme Tropa de Elite.',
    url: '/sobre',
  },
  alternates: { canonical: '/sobre' },
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Sobre', href: '/sobre' }]} />

        <SectionHeader title="Sobre o Portal" />

        <div className="pb-20 space-y-8">
          <div className="flex justify-center mb-8">
            <Skull className="h-20 w-20 text-olive-500/40" />
          </div>

          <div className="prose prose-invert prose-zinc max-w-none space-y-6">
            <p className="text-lg text-zinc-300 leading-relaxed">
              O Portal Tropa de Elite é o maior site brasileiro dedicado exclusivamente ao filme
              Tropa de Elite (2007), dirigido por José Padilha e estrelado por Wagner Moura,
              André Ramiro e Caio Junqueira. Nosso objetivo é preservar e celebrar a memória
              de uma das obras mais importantes do cinema nacional.
            </p>

            <h2 className="font-display text-2xl font-bold uppercase tracking-tight">
              Nossa Missão
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Criamos este portal para reunir em um único lugar tudo o que faz de Tropa de Elite
              um marco cultural brasileiro: os personagens inesquecíveis, as frases que entraram
              para o vocabulário popular, as curiosidades de produção, as análises críticas e o
              impacto social que o filme continua gerando.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Acreditamos que Tropa de Elite transcendeu o entretenimento para se tornar um
              documento sobre a sociedade brasileira — sobre suas contradições, seus desafios
              e sua complexidade. Este portal é nosso tributo a essa obra e a todos os
              profissionais envolvidos em sua criação.
            </p>

            <h2 className="font-display text-2xl font-bold uppercase tracking-tight">
              O que você encontra aqui
            </h2>
            <ul className="text-zinc-400 space-y-2">
              <li>Biografias completas de todos os personagens principais</li>
              <li>Perfis detalhados dos atores e suas carreiras</li>
              <li>Todas as frases icônicas do filme com contexto</li>
              <li>Curiosidades sobre a produção, filmagens e bastidores</li>
              <li>Resumo completo separado em capítulos</li>
              <li>Quiz e teste de personalidade interativos</li>
              <li>Linha do tempo da produção ao legado cultural</li>
              <li>Recomendações de filmes semelhantes</li>
              <li>Blog com análises e artigos aprofundados</li>
            </ul>

            <h2 className="font-display text-2xl font-bold uppercase tracking-tight">
              Aviso Legal
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Este site é um projeto de fã, criado sem fins lucrativos e sem qualquer
              afiliação oficial com os produtores, distribuidores ou detentores dos
              direitos de Tropa de Elite. Todos os direitos sobre o filme, seus
              personagens e seu conteúdo pertencem à Zazen Produções e seus respectivos
              detentores.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              As imagens utilizadas neste portal são de uso editorial e referencial.
              Se você é detentor de direitos sobre qualquer conteúdo aqui publicado e
              deseja sua remoção, entre em{' '}
              <Link href="/contato" className="text-olive-400 hover:text-olive-300 underline underline-offset-4">
                contato conosco
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
