import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Quote, Lightbulb, Users, Film } from 'lucide-react'
import { Breadcrumb } from '@/components/shared/breadcrumb'
import { SectionHeader } from '@/components/shared/section-header'
import { characters, getCharacterBySlug, getAllCharacterSlugs } from '@/data/characters'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllCharacterSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const character = getCharacterBySlug(slug)
  if (!character) return {}

  return {
    title: `${character.name} — Personagem de Tropa de Elite`,
    description: `Tudo sobre ${character.name} em Tropa de Elite: biografia, história, curiosidades, frases marcantes e análise completa do personagem interpretado por ${character.actor}.`,
    keywords: [
      character.name,
      character.actor,
      'Tropa de Elite',
      'personagem',
      'BOPE',
      `${character.name} ator`,
      `${character.name} frases`,
    ],
    openGraph: {
      title: `${character.name} — Tropa de Elite`,
      description: `Biografia e análise completa de ${character.name}, interpretado por ${character.actor}.`,
      url: `/personagens/${slug}`,
      images: [{ url: character.imageUrl, alt: character.imageAlt }],
    },
    alternates: { canonical: `/personagens/${slug}` },
  }
}

export default async function CharacterPage({ params }: Props) {
  const { slug } = await params
  const character = getCharacterBySlug(slug)
  if (!character) notFound()

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: character.name,
    description: character.shortBio,
    url: `https://tropadeelite.com.br/personagens/${slug}`,
  }

  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Personagens', href: '/personagens' },
            { label: character.name, href: `/personagens/${slug}` },
          ]}
        />

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {character.rank && (
              <span className="px-3 py-1 text-xs rounded-full bg-olive-900/40 text-olive-300 border border-olive-800/30 uppercase tracking-wider font-medium">
                {character.rank}
              </span>
            )}
            <span className="px-3 py-1 text-xs rounded-full bg-zinc-800 text-zinc-400 border border-white/5">
              {character.role}
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tighter">
            {character.name}
          </h1>
          <p className="mt-3 text-lg text-zinc-400">
            Interpretado por{' '}
            <Link
              href={`/atores/${character.actorSlug}`}
              className="text-olive-400 hover:text-olive-300 transition-colors underline underline-offset-4"
            >
              {character.actor}
            </Link>
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {character.traits.map((trait) => (
              <span
                key={trait}
                className="px-3 py-1 text-xs rounded-full bg-zinc-800/80 text-zinc-300 border border-white/5"
              >
                {trait}
              </span>
            ))}
          </div>
        </header>

        <section className="mb-16" id="biografia">
          <SectionHeader title="Biografia" align="left" />
          <div className="prose prose-invert prose-zinc max-w-none">
            {character.fullBio.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-zinc-300 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="mb-16" id="historia">
          <SectionHeader title="História no Filme" align="left" />
          <div className="prose prose-invert prose-zinc max-w-none">
            {character.history.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-zinc-300 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="mb-16" id="importancia">
          <SectionHeader title="Importância" align="left" />
          <div className="prose prose-invert prose-zinc max-w-none">
            {character.importance.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-zinc-300 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {character.quotes.length > 0 && (
          <section className="mb-16" id="frases">
            <SectionHeader title="Frases Marcantes" align="left" />
            <div className="space-y-4">
              {character.quotes.map((quote) => (
                <div
                  key={quote.id}
                  className="glass-light rounded-xl p-6 border-l-4 border-olive-600"
                >
                  <Quote className="h-6 w-6 text-olive-600/40 mb-2" />
                  <blockquote className="text-lg font-medium text-zinc-200">
                    &ldquo;{quote.text}&rdquo;
                  </blockquote>
                  {quote.context && (
                    <p className="mt-2 text-sm text-zinc-500">{quote.context}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {character.curiosities.length > 0 && (
          <section className="mb-16" id="curiosidades">
            <SectionHeader title="Curiosidades" align="left" />
            <ul className="space-y-3">
              {character.curiosities.map((curiosity, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-300">
                  <Lightbulb className="h-5 w-5 text-burnt-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{curiosity}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {character.relationships.length > 0 && (
          <section className="mb-16" id="relacionamentos">
            <SectionHeader title="Relacionamentos" align="left" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {character.relationships.map((rel) => (
                <Link
                  key={rel.characterSlug}
                  href={`/personagens/${rel.characterSlug}`}
                  className="rounded-xl border border-white/5 bg-zinc-900/50 p-5 hover:border-olive-700/30 transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4 text-olive-500" />
                    <span className="text-xs text-olive-400 uppercase tracking-wider font-medium">
                      {rel.type}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold">{rel.character}</h3>
                  <p className="mt-1 text-sm text-zinc-400 leading-relaxed">{rel.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mb-16" id="filmes">
          <SectionHeader title="Aparições" align="left" />
          <div className="space-y-3">
            {character.films.map((film) => (
              <div
                key={film}
                className="flex items-center gap-3 rounded-xl border border-white/5 bg-zinc-900/50 p-4"
              >
                <Film className="h-5 w-5 text-olive-500 shrink-0" />
                <span className="text-zinc-300">{film}</span>
              </div>
            ))}
          </div>
        </section>

        <nav className="pb-20 pt-8 border-t border-white/5">
          <h3 className="font-display text-sm uppercase tracking-wider text-zinc-500 mb-4">
            Outros Personagens
          </h3>
          <div className="flex flex-wrap gap-3">
            {characters
              .filter((c) => c.id !== slug)
              .map((c) => (
                <Link
                  key={c.id}
                  href={`/personagens/${c.id}`}
                  className="px-4 py-2 rounded-lg border border-white/5 text-sm text-zinc-400 hover:text-zinc-200 hover:border-olive-700/30 transition-colors"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </nav>
      </div>
    </div>
  )
}
