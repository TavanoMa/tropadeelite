import type { Metadata } from 'next'
import { Film, ArrowRight } from 'lucide-react'
import { Breadcrumb } from '@/components/shared/breadcrumb'
import { SectionHeader } from '@/components/shared/section-header'
import { similarFilms } from '@/data/similar-films'

export const metadata: Metadata = {
  title: 'Filmes Parecidos com Tropa de Elite — Recomendações de Filmes Semelhantes',
  description:
    'Gostou de Tropa de Elite? Confira nossa lista de filmes parecidos: Cidade de Deus, Sicario, Dia de Treinamento e mais. Recomendações para quem ama cinema de ação e drama policial.',
  keywords: [
    'filmes parecidos Tropa de Elite',
    'filmes semelhantes BOPE',
    'filmes como Tropa de Elite',
    'recomendações cinema brasileiro',
    'filmes policiais brasileiros',
  ],
  openGraph: {
    title: 'Filmes Parecidos com Tropa de Elite',
    description: 'Recomendações de filmes para quem amou Tropa de Elite.',
    url: '/filmes-parecidos',
  },
  alternates: { canonical: '/filmes-parecidos' },
}

export default function SimilarFilmsPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Filmes Parecidos', href: '/filmes-parecidos' }]} />

        <SectionHeader
          title="Filmes Parecidos"
          subtitle="Se você amou Tropa de Elite, vai gostar destes filmes"
        />

        <div className="space-y-8 pb-20">
          {similarFilms.map((film) => (
            <article
              key={film.id}
              className="rounded-xl border border-white/5 bg-zinc-900/50 overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Film className="h-5 w-5 text-olive-500 shrink-0" />
                  <span className="text-xs text-zinc-500 font-mono">{film.year}</span>
                  <span className="text-xs text-zinc-600">•</span>
                  <span className="text-xs text-zinc-500">{film.director}</span>
                </div>

                <h2 className="font-display text-2xl font-bold uppercase tracking-tight">
                  {film.title}
                </h2>

                <p className="mt-3 text-zinc-400 leading-relaxed">{film.synopsis}</p>

                <div className="mt-4 rounded-lg bg-olive-900/10 border border-olive-800/20 p-4">
                  <p className="text-xs text-olive-400 uppercase tracking-wider font-medium mb-1">
                    Por que é parecido
                  </p>
                  <p className="text-sm text-zinc-300 leading-relaxed">{film.whySimilar}</p>
                </div>

                {film.whereToWatch.length > 0 && (
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="text-xs text-zinc-500">Onde assistir:</span>
                    {film.whereToWatch.map((platform) => (
                      <span
                        key={platform}
                        className="px-2.5 py-1 text-xs rounded-full bg-zinc-800 text-zinc-400 border border-white/5"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
