'use client'

import Link from 'next/link'
import { Quote, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/shared/section-header'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/shared/motion-wrapper'
import { quotes } from '@/data/quotes'

export function HomeQuotes() {
  const featuredQuotes = quotes.slice(0, 6)

  return (
    <section className="py-20 lg:py-32 bg-zinc-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            title="Frases Icônicas"
            subtitle="As falas que marcaram gerações e entraram para a cultura popular brasileira"
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredQuotes.map((quote) => (
            <StaggerItem key={quote.id}>
              <div className="glass-light rounded-xl p-6 h-full flex flex-col">
                <Quote className="h-8 w-8 text-olive-600/40 mb-4 shrink-0" />
                <blockquote className="text-lg font-medium text-zinc-200 leading-relaxed flex-1">
                  &ldquo;{quote.text}&rdquo;
                </blockquote>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <Link
                    href={`/personagens/${quote.characterSlug}`}
                    className="text-sm text-olive-400 hover:text-olive-300 transition-colors"
                  >
                    — {quote.character}
                  </Link>
                  {quote.context && (
                    <p className="text-xs text-zinc-600 mt-1">{quote.context}</p>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="mt-10 text-center">
          <Link
            href="/frases"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            Ver todas as frases
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
