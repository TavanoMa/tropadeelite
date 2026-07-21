import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Film, Lightbulb, Award, Calendar, MapPin } from 'lucide-react'
import { Breadcrumb } from '@/components/shared/breadcrumb'
import { SectionHeader } from '@/components/shared/section-header'
import { getActorBySlug, getAllActorSlugs } from '@/data/actors'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllActorSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const actor = getActorBySlug(slug)
  if (!actor) return {}

  return {
    title: `${actor.name} — Ator de Tropa de Elite`,
    description: `Biografia completa de ${actor.name}: filmografia, curiosidades, prêmios e carreira do ator de Tropa de Elite.`,
    keywords: [actor.name, 'Tropa de Elite', 'ator', 'cinema brasileiro', 'filmografia'],
    openGraph: {
      title: `${actor.name} — Ator de Tropa de Elite`,
      description: `Biografia e filmografia de ${actor.name}.`,
      url: `/atores/${slug}`,
    },
    alternates: { canonical: `/atores/${slug}` },
  }
}

export default async function ActorPage({ params }: Props) {
  const { slug } = await params
  const actor = getActorBySlug(slug)
  if (!actor) notFound()

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: actor.name,
    birthDate: actor.birthDate,
    birthPlace: actor.birthPlace,
    description: actor.bio.split('\n\n')[0],
    url: `https://tropadeelite.com.br/atores/${slug}`,
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
            { label: 'Atores', href: '/personagens' },
            { label: actor.name, href: `/atores/${slug}` },
          ]}
        />

        <header className="mb-12">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tighter">
            {actor.name}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {actor.birthDate}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {actor.birthPlace}
            </span>
          </div>
        </header>

        <section className="mb-16" id="biografia">
          <SectionHeader title="Biografia" align="left" />
          <div className="prose prose-invert prose-zinc max-w-none">
            {actor.bio.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-zinc-300 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="mb-16" id="filmografia">
          <SectionHeader title="Filmografia" align="left" />
          <div className="space-y-3">
            {actor.filmography.map((film) => (
              <div
                key={`${film.title}-${film.year}`}
                className="rounded-xl border border-white/5 bg-zinc-900/50 p-4 flex items-center gap-4"
              >
                <Film className="h-5 w-5 text-olive-500 shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base font-bold">{film.title}</h3>
                  <p className="text-sm text-zinc-500">
                    {film.year} • {film.role}
                    {film.director ? ` • Dir: ${film.director}` : ''}
                  </p>
                </div>
                <span className="text-xs text-zinc-600 font-mono shrink-0">{film.year}</span>
              </div>
            ))}
          </div>
        </section>

        {actor.awards && actor.awards.length > 0 && (
          <section className="mb-16" id="premios">
            <SectionHeader title="Prêmios" align="left" />
            <ul className="space-y-3">
              {actor.awards.map((award, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-300">
                  <Award className="h-5 w-5 text-burnt-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{award}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mb-16" id="curiosidades">
          <SectionHeader title="Curiosidades" align="left" />
          <ul className="space-y-3">
            {actor.curiosities.map((curiosity, i) => (
              <li key={i} className="flex items-start gap-3 text-zinc-300">
                <Lightbulb className="h-5 w-5 text-burnt-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{curiosity}</span>
              </li>
            ))}
          </ul>
        </section>

        <nav className="pb-20 pt-8 border-t border-white/5">
          <Link
            href="/personagens"
            className="text-sm text-olive-400 hover:text-olive-300 transition-colors"
          >
            ← Voltar para Personagens
          </Link>
        </nav>
      </div>
    </div>
  )
}
