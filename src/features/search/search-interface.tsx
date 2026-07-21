'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, User, MessageSquareQuote, Lightbulb } from 'lucide-react'
import { characters } from '@/data/characters'
import { quotes } from '@/data/quotes'
import { curiosities } from '@/data/curiosities'
import type { SearchResult } from '@/types'

function buildIndex(): SearchResult[] {
  const results: SearchResult[] = []

  for (const c of characters) {
    results.push({
      type: 'character',
      title: c.name,
      excerpt: c.shortBio,
      url: `/personagens/${c.id}`,
    })
  }

  for (const q of quotes) {
    results.push({
      type: 'quote',
      title: `"${q.text}"`,
      excerpt: `${q.character} — ${q.context ?? q.film}`,
      url: `/frases`,
    })
  }

  for (const cur of curiosities) {
    results.push({
      type: 'curiosity',
      title: cur.title,
      excerpt: cur.content.slice(0, 150) + '...',
      url: `/curiosidades`,
    })
  }

  results.push(
    { type: 'page', title: 'Resumo Completo', excerpt: 'A história de Tropa de Elite contada em capítulos detalhados.', url: '/resumo' },
    { type: 'page', title: 'Quiz', excerpt: 'Teste seus conhecimentos sobre Tropa de Elite.', url: '/quiz' },
    { type: 'page', title: 'Quem Você Seria?', excerpt: 'Teste de personalidade do Tropa de Elite.', url: '/quem-voce-seria' },
    { type: 'page', title: 'Onde Assistir', excerpt: 'Plataformas para assistir Tropa de Elite.', url: '/onde-assistir' },
    { type: 'page', title: 'Filmes Parecidos', excerpt: 'Filmes similares a Tropa de Elite.', url: '/filmes-parecidos' },
    { type: 'page', title: 'Linha do Tempo', excerpt: 'Cronologia do filme Tropa de Elite.', url: '/timeline' },
  )

  return results
}

const typeIcons = {
  character: User,
  quote: MessageSquareQuote,
  curiosity: Lightbulb,
  post: Lightbulb,
  page: Search,
}

const typeLabels = {
  character: 'Personagem',
  quote: 'Frase',
  curiosity: 'Curiosidade',
  post: 'Artigo',
  page: 'Página',
}

export function SearchInterface() {
  const [query, setQuery] = useState('')
  const index = useMemo(() => buildIndex(), [])

  const results = useMemo(() => {
    if (query.length < 2) return []
    const q = query.toLowerCase()
    return index.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q)
    )
  }, [query, index])

  return (
    <div className="pb-20">
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar personagens, frases, curiosidades..."
          className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/10 bg-zinc-900/80 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-olive-600/50 focus:ring-1 focus:ring-olive-600/30 transition-colors"
          autoFocus
        />
      </div>

      {query.length >= 2 && (
        <p className="text-sm text-zinc-500 mb-4">
          {results.length} resultado{results.length !== 1 ? 's' : ''} para &ldquo;{query}&rdquo;
        </p>
      )}

      <div className="space-y-3">
        {results.map((result, i) => {
          const Icon = typeIcons[result.type]
          return (
            <Link
              key={`${result.url}-${i}`}
              href={result.url}
              className="block rounded-xl border border-white/5 bg-zinc-900/50 p-5 hover:border-olive-700/30 hover:bg-zinc-900/80 transition-all"
            >
              <div className="flex items-start gap-3">
                <Icon className="h-5 w-5 text-olive-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-olive-400 uppercase tracking-wider font-medium">
                    {typeLabels[result.type]}
                  </span>
                  <h3 className="font-display text-lg font-bold mt-0.5">{result.title}</h3>
                  <p className="text-sm text-zinc-400 mt-1 line-clamp-2">{result.excerpt}</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {query.length >= 2 && results.length === 0 && (
        <div className="text-center py-12">
          <Search className="h-12 w-12 text-zinc-700 mx-auto mb-4" />
          <p className="text-zinc-500">Nenhum resultado encontrado para &ldquo;{query}&rdquo;</p>
          <p className="text-sm text-zinc-600 mt-1">Tente termos diferentes ou mais gerais</p>
        </div>
      )}
    </div>
  )
}
