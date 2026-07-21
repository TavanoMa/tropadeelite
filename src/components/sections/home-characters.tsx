'use client'

import Link from 'next/link'
import { Skull, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/shared/section-header'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/shared/motion-wrapper'
import { characters } from '@/data/characters'

export function HomeCharacters() {
  const mainCharacters = characters.slice(0, 4)

  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            title="Personagens"
            subtitle="Conheça os protagonistas que marcaram a história do cinema brasileiro"
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainCharacters.map((character) => (
            <StaggerItem key={character.id}>
              <Link href={`/personagens/${character.id}`} className="group block">
                <div className="rounded-xl border border-white/5 bg-zinc-900/50 overflow-hidden transition-all duration-300 hover:border-olive-700/30 hover:bg-zinc-900/80 group-hover:-translate-y-1">
                  <div className="aspect-[3/4] bg-gradient-to-br from-olive-900/30 to-zinc-900 flex items-center justify-center relative">
                    <Skull className="h-16 w-16 text-olive-700/30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-xs text-olive-400 font-medium uppercase tracking-wider">
                        {character.rank ?? character.role}
                      </p>
                      <h3 className="font-display text-xl font-bold uppercase tracking-tight mt-1">
                        {character.name}
                      </h3>
                      <p className="text-xs text-zinc-500 mt-1">{character.actor}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                      {character.shortBio}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-xs text-olive-400 font-medium group-hover:text-olive-300 transition-colors">
                      Ver perfil completo
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="mt-10 text-center">
          <Link
            href="/personagens"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            Ver todos os personagens
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
