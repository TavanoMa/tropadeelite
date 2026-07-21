import type { Metadata } from 'next'
import Link from 'next/link'
import { Skull, ArrowRight, Shield, Users, Crosshair } from 'lucide-react'
import { Breadcrumb } from '@/components/shared/breadcrumb'
import { SectionHeader } from '@/components/shared/section-header'
import { characters } from '@/data/characters'
import type { Character } from '@/types'

export const metadata: Metadata = {
  title: 'Personagens de Tropa de Elite — Protagonistas, Coadjuvantes e Antagonistas',
  description:
    'Conheça todos os personagens de Tropa de Elite: Capitão Nascimento, Matias, Neto, Maria, Rosane, Baiano e Capitão Fábio. Biografias completas, curiosidades, frases e análises detalhadas.',
  keywords: [
    'personagens Tropa de Elite',
    'Capitão Nascimento',
    'André Matias',
    'Neto',
    'Maria',
    'Rosane',
    'Baiano',
    'personagens BOPE',
    'Wagner Moura personagem',
  ],
  openGraph: {
    title: 'Personagens de Tropa de Elite',
    description: 'Biografias completas de todos os personagens do filme Tropa de Elite.',
    url: '/personagens',
  },
  alternates: { canonical: '/personagens' },
}

const categoryConfig = {
  protagonista: {
    label: 'Personagens Principais',
    description: 'Os protagonistas que conduzem a narrativa de Tropa de Elite',
    icon: Shield,
    accent: 'olive',
  },
  coadjuvante: {
    label: 'Personagens Coadjuvantes',
    description: 'Personagens essenciais que enriquecem a trama e humanizam os protagonistas',
    icon: Users,
    accent: 'zinc',
  },
  antagonista: {
    label: 'Antagonistas',
    description: 'As forças opostas que definem o conflito central do filme',
    icon: Crosshair,
    accent: 'burnt',
  },
} as const

type Category = keyof typeof categoryConfig
const categoryOrder: Category[] = ['protagonista', 'coadjuvante', 'antagonista']

function CharacterCard({ character }: { character: Character }) {
  const badgeMap: Record<Category, string> = {
    protagonista: 'bg-olive-900/40 text-olive-300 border-olive-700/40',
    coadjuvante: 'bg-zinc-800/60 text-zinc-300 border-zinc-600/40',
    antagonista: 'bg-red-900/30 text-red-400 border-red-800/30',
  }

  return (
    <Link href={`/personagens/${character.id}`} className="group block">
      <article className="rounded-xl border border-white/5 bg-zinc-900/50 overflow-hidden transition-all duration-300 hover:border-olive-700/30 hover:bg-zinc-900/80 group-hover:-translate-y-1 h-full flex flex-col">
        <div className="aspect-[4/3] bg-gradient-to-br from-olive-900/30 to-zinc-900 flex items-center justify-center relative">
          <Skull className="h-20 w-20 text-olive-700/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
          <div className="absolute top-4 right-4">
            <span
              className={`px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full border ${badgeMap[character.category]}`}
            >
              {character.category}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-xs text-olive-400 font-medium uppercase tracking-wider">
              {character.rank ?? character.role}
            </p>
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight mt-1">
              {character.name}
            </h3>
            <p className="text-sm text-zinc-500">Interpretado por {character.actor}</p>
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <p className="text-sm text-zinc-400 leading-relaxed flex-1">
            {character.shortBio}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {character.traits.slice(0, 3).map((trait) => (
              <span
                key={trait}
                className="px-2.5 py-1 text-xs rounded-full bg-olive-900/30 text-olive-300 border border-olive-800/30"
              >
                {trait}
              </span>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-1 text-sm text-olive-400 font-medium group-hover:text-olive-300 transition-colors">
            Ver perfil completo
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </article>
    </Link>
  )
}

export default function CharactersPage() {
  const grouped = categoryOrder
    .map((cat) => ({
      category: cat,
      config: categoryConfig[cat],
      chars: characters.filter((c) => c.category === cat),
    }))
    .filter((g) => g.chars.length > 0)

  return (
    <div className="pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Personagens', href: '/personagens' }]} />

        <SectionHeader
          title="Personagens"
          subtitle="Todos os protagonistas, coadjuvantes e antagonistas que definiram uma geração do cinema brasileiro"
        />

        <div className="space-y-16 pb-20">
          {grouped.map(({ category, config, chars }) => {
            const Icon = config.icon
            return (
              <section key={category}>
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="h-5 w-5 text-olive-500" />
                  <h2 className="font-display text-xl font-bold uppercase tracking-wide text-zinc-100">
                    {config.label}
                  </h2>
                </div>
                <p className="text-sm text-zinc-500 mb-8 ml-8">{config.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {chars.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
