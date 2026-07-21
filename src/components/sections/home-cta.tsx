'use client'

import Link from 'next/link'
import { Film, Brain, BookOpen, MapPin, Clock, Play } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/shared/motion-wrapper'

const features = [
  { icon: Film, title: 'Galeria', description: 'Imagens marcantes do filme', href: '/galeria' },
  { icon: Brain, title: 'Quiz', description: 'Teste seus conhecimentos', href: '/quiz' },
  { icon: BookOpen, title: 'Blog', description: 'Análises e artigos', href: '/blog' },
  { icon: MapPin, title: 'Onde Assistir', description: 'Plataformas disponíveis', href: '/onde-assistir' },
  { icon: Clock, title: 'Linha do Tempo', description: 'A história completa', href: '/timeline' },
  { icon: Play, title: 'Trailer', description: 'Assista ao trailer oficial', href: '/trailer' },
]

export function HomeCTA() {
  return (
    <section className="py-20 lg:py-32 bg-zinc-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight">
              Explore o Portal
            </h2>
            <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
              Tudo sobre Tropa de Elite em um único lugar
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((feature) => (
            <StaggerItem key={feature.href}>
              <Link href={feature.href} className="group block">
                <div className="rounded-xl border border-white/5 bg-zinc-900/50 p-5 text-center transition-all duration-300 hover:border-olive-700/30 hover:bg-zinc-900/80 group-hover:-translate-y-1 h-full">
                  <feature.icon className="h-8 w-8 text-olive-500 mx-auto mb-3" />
                  <h3 className="font-display text-sm font-bold uppercase tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-500">{feature.description}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.5} className="mt-16 text-center">
          <div className="glass-light rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
              Quem você seria no BOPE?
            </h3>
            <p className="mt-3 text-zinc-400">
              Descubra qual personagem de Tropa de Elite mais combina com sua personalidade
            </p>
            <Link
              href="/quem-voce-seria"
              className="inline-flex items-center justify-center px-8 py-3 mt-6 rounded-lg bg-burnt-600 text-white font-semibold text-sm uppercase tracking-wider hover:bg-burnt-500 transition-colors"
            >
              Fazer o Teste
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
