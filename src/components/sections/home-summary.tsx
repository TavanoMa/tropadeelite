'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/shared/motion-wrapper'

export function HomeSummary() {
  return (
    <section className="py-20 lg:py-32 bg-zinc-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn direction="left">
            <div>
              <span className="text-xs text-olive-400 uppercase tracking-widest font-medium">
                Sobre o filme
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight mt-3">
                Uma obra-prima do cinema brasileiro
              </h2>
              <div className="mt-6 space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Lançado em 2007 e dirigido por José Padilha, Tropa de Elite é um
                  dos filmes mais impactantes e debatidos da história do cinema
                  nacional. Vencedor do Urso de Ouro no Festival de Berlim, o filme
                  retrata a rotina brutal do BOPE no combate ao tráfico de drogas
                  nas favelas do Rio de Janeiro.
                </p>
                <p>
                  Com atuações memoráveis de Wagner Moura, André Ramiro e Caio
                  Junqueira, o filme transcendeu o entretenimento para se tornar um
                  fenômeno cultural que gerou debates profundos sobre segurança
                  pública, violência policial e desigualdade social no Brasil.
                </p>
              </div>
              <Link
                href="/resumo"
                className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-olive-400 hover:text-olive-300 transition-colors"
              >
                Ler o resumo completo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Ano', value: '2007' },
                { label: 'Diretor', value: 'José Padilha' },
                { label: 'Prêmio', value: 'Urso de Ouro' },
                { label: 'Nota IMDb', value: '8.0/10' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/5 bg-zinc-900/50 p-5"
                >
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">{item.label}</p>
                  <p className="font-display text-2xl font-bold mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
