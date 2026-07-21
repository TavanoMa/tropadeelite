import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Breadcrumb } from '@/components/shared/breadcrumb'
import { SectionHeader } from '@/components/shared/section-header'
import { blogPosts } from '@/data/blog'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Blog — Análises e Artigos sobre Tropa de Elite e Cinema Brasileiro',
  description:
    'Artigos, análises e reflexões sobre Tropa de Elite, cinema brasileiro e a cultura do BOPE. Leia sobre personagens, impacto social e curiosidades do filme.',
  keywords: [
    'blog Tropa de Elite',
    'análise Tropa de Elite',
    'artigos cinema brasileiro',
    'crítica Tropa de Elite',
  ],
  openGraph: {
    title: 'Blog — Tropa de Elite',
    description: 'Análises e artigos sobre Tropa de Elite.',
    url: '/blog',
  },
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Blog', href: '/blog' }]} />

        <SectionHeader
          title="Blog"
          subtitle="Análises, reflexões e artigos sobre Tropa de Elite e o cinema brasileiro"
        />

        <div className="space-y-8 pb-20">
          {blogPosts.map((post) => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="rounded-xl border border-white/5 bg-zinc-900/50 p-6 sm:p-8 transition-all hover:border-olive-700/30 hover:bg-zinc-900/80">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-2.5 py-1 text-xs rounded-full bg-olive-900/30 text-olive-300 border border-olive-800/30 uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                      <Calendar className="h-3 w-3" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                      <Clock className="h-3 w-3" />
                      {post.readingTime} min de leitura
                    </span>
                  </div>

                  <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight group-hover:text-olive-300 transition-colors">
                    {post.title}
                  </h2>

                  <p className="mt-3 text-zinc-400 leading-relaxed">{post.excerpt}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs text-zinc-500 bg-zinc-800 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-sm text-olive-400 font-medium group-hover:text-olive-300 transition-colors">
                    Ler artigo completo
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
