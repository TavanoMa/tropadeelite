import type { Metadata } from 'next'
import { Film, Clapperboard, Globe, BookOpen } from 'lucide-react'
import { Breadcrumb } from '@/components/shared/breadcrumb'
import { SectionHeader } from '@/components/shared/section-header'
import { timelineEvents, plotTimeline } from '@/data/timeline'

export const metadata: Metadata = {
  title: 'Linha do Tempo de Tropa de Elite — Cronologia Completa',
  description:
    'A cronologia completa de Tropa de Elite: da publicação do livro ao impacto cultural. Veja a linha do tempo da produção, lançamento, premiações e eventos marcantes.',
  keywords: [
    'linha do tempo Tropa de Elite',
    'cronologia Tropa de Elite',
    'história Tropa de Elite',
    'timeline BOPE filme',
  ],
  openGraph: {
    title: 'Linha do Tempo de Tropa de Elite',
    description: 'Cronologia completa do filme Tropa de Elite.',
    url: '/timeline',
  },
  alternates: { canonical: '/timeline' },
}

const typeIcons = {
  film: Film,
  production: Clapperboard,
  cultural: Globe,
  plot: BookOpen,
}

const typeColors = {
  film: 'border-burnt-600 bg-burnt-900/20 text-burnt-400',
  production: 'border-olive-600 bg-olive-900/20 text-olive-400',
  cultural: 'border-zinc-500 bg-zinc-800/50 text-zinc-400',
  plot: 'border-olive-500 bg-olive-900/20 text-olive-400',
}

export default function TimelinePage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Linha do Tempo', href: '/timeline' }]} />

        <SectionHeader
          title="Linha do Tempo"
          subtitle="A cronologia completa de Tropa de Elite: da concepção ao legado cultural"
        />

        <section className="mb-20">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight mb-8">
            Produção e Impacto
          </h2>
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/5" />
            <div className="space-y-8">
              {timelineEvents.map((event) => {
                const Icon = typeIcons[event.type]
                const colorClass = typeColors[event.type]

                return (
                  <div key={event.id} className="relative flex gap-6">
                    <div className={`relative z-10 w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 ${colorClass}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="pb-2 pt-1">
                      <span className="text-xs text-olive-400 font-mono font-medium">
                        {event.year}
                      </span>
                      <h3 className="font-display text-lg font-bold mt-1">{event.title}</h3>
                      <p className="text-sm text-zinc-400 leading-relaxed mt-1">
                        {event.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight mb-8">
            Trama do Filme
          </h2>
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/5" />
            <div className="space-y-8">
              {plotTimeline.map((event) => {
                const Icon = typeIcons[event.type]
                const colorClass = typeColors[event.type]

                return (
                  <div key={event.id} className="relative flex gap-6">
                    <div className={`relative z-10 w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 ${colorClass}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="pb-2 pt-1">
                      <span className="text-xs text-olive-400 font-mono font-medium">
                        {event.year}
                      </span>
                      <h3 className="font-display text-lg font-bold mt-1">{event.title}</h3>
                      <p className="text-sm text-zinc-400 leading-relaxed mt-1">
                        {event.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
