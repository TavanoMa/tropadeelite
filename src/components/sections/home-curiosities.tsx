'use client'

import Link from 'next/link'
import { Lightbulb, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/shared/section-header'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/shared/motion-wrapper'
import { curiosities } from '@/data/curiosities'

export function HomeCuriosities() {
  const featured = curiosities.slice(0, 4)

  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            title="Curiosidades"
            subtitle="Fatos surpreendentes sobre a produção, o elenco e o impacto cultural do filme"
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((curiosity) => (
            <StaggerItem key={curiosity.id}>
              <div className="rounded-xl border border-white/5 bg-zinc-900/50 p-6 h-full">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-burnt-900/30 shrink-0">
                    <Lightbulb className="h-5 w-5 text-burnt-500" />
                  </div>
                  <div>
                    <span className="text-xs text-burnt-400 uppercase tracking-wider font-medium">
                      {curiosity.category}
                    </span>
                    <h3 className="font-display text-lg font-bold mt-1">{curiosity.title}</h3>
                    <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                      {curiosity.content}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="mt-10 text-center">
          <Link
            href="/curiosidades"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            Ver todas as curiosidades
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
