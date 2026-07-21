import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, ChevronRight } from 'lucide-react'
import { Breadcrumb } from '@/components/shared/breadcrumb'
import { SectionHeader } from '@/components/shared/section-header'
import { movieChapters } from '@/data/chapters'

export const metadata: Metadata = {
  title: 'Resumo Completo de Tropa de Elite — A História do Filme em Detalhes',
  description:
    'Resumo completo e detalhado de Tropa de Elite, separado em capítulos. Conheça toda a trama, os personagens e os eventos que marcaram o clássico do cinema brasileiro de 2007.',
  keywords: [
    'resumo Tropa de Elite',
    'história Tropa de Elite',
    'sinopse Tropa de Elite',
    'trama Tropa de Elite',
    'enredo Tropa de Elite',
    'Tropa de Elite filme completo',
  ],
  openGraph: {
    title: 'Resumo Completo de Tropa de Elite',
    description: 'A história completa do filme separada em capítulos detalhados.',
    url: '/resumo',
  },
  alternates: { canonical: '/resumo' },
}

export default function SummaryPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Resumo', href: '/resumo' }]} />

        <SectionHeader
          title="Resumo Completo"
          subtitle="A história de Tropa de Elite contada em capítulos detalhados"
        />

        <nav className="mb-12 rounded-xl border border-white/5 bg-zinc-900/50 p-6">
          <h2 className="font-display text-sm uppercase tracking-wider text-zinc-500 mb-4 flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Índice de Capítulos
          </h2>
          <ol className="space-y-2">
            {movieChapters.map((chapter, i) => (
              <li key={chapter.id}>
                <a
                  href={`#${chapter.id}`}
                  className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-200 transition-colors py-1"
                >
                  <span className="text-olive-500 font-mono text-xs w-6">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{chapter.title}</span>
                  <ChevronRight className="h-3 w-3 ml-auto text-zinc-600" />
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-16 pb-20">
          {movieChapters.map((chapter, i) => (
            <article key={chapter.id} id={chapter.id} className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs text-olive-500 bg-olive-900/30 px-2.5 py-1 rounded-md">
                  Capítulo {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-6">
                {chapter.title}
              </h2>

              <div className="prose prose-invert prose-zinc max-w-none">
                {chapter.content.split('\n\n').map((paragraph, j) => (
                  <p key={j} className="text-zinc-300 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {chapter.highlights && chapter.highlights.length > 0 && (
                <div className="mt-8 rounded-xl border border-olive-800/30 bg-olive-900/10 p-5">
                  <h3 className="text-xs text-olive-400 uppercase tracking-wider font-medium mb-3">
                    Destaques deste capítulo
                  </h3>
                  <ul className="space-y-2">
                    {chapter.highlights.map((highlight, k) => (
                      <li key={k} className="flex items-start gap-2 text-sm text-zinc-400">
                        <span className="text-olive-500 mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {i < movieChapters.length - 1 && (
                <div className="mt-12 border-b border-white/5" />
              )}
            </article>
          ))}
        </div>

        <div className="pb-20 pt-8 border-t border-white/5">
          <h3 className="font-display text-sm uppercase tracking-wider text-zinc-500 mb-4">
            Continue explorando
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/personagens"
              className="px-4 py-2 rounded-lg border border-white/5 text-sm text-zinc-400 hover:text-zinc-200 hover:border-olive-700/30 transition-colors"
            >
              Personagens
            </Link>
            <Link
              href="/curiosidades"
              className="px-4 py-2 rounded-lg border border-white/5 text-sm text-zinc-400 hover:text-zinc-200 hover:border-olive-700/30 transition-colors"
            >
              Curiosidades
            </Link>
            <Link
              href="/timeline"
              className="px-4 py-2 rounded-lg border border-white/5 text-sm text-zinc-400 hover:text-zinc-200 hover:border-olive-700/30 transition-colors"
            >
              Linha do Tempo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
