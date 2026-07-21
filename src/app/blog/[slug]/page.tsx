import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import { Breadcrumb } from '@/components/shared/breadcrumb'
import { ShareButtons } from '@/components/shared/share-buttons'
import { getPostBySlug, getAllPostSlugs, blogPosts } from '@/data/blog'
import { formatDate } from '@/lib/utils'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    alternates: { canonical: `/blog/${slug}` },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author },
    url: `https://tropadeelite.com.br/blog/${slug}`,
  }

  const relatedPosts = post.relatedPosts
    .map((relSlug) => blogPosts.find((p) => p.slug === relSlug))
    .filter(Boolean)

  const headings = post.content
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) => ({
      text: line.replace('## ', ''),
      id: line
        .replace('## ', '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, ''),
    }))

  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Blog', href: '/blog' },
            { label: post.title, href: `/blog/${slug}` },
          ]}
        />

        <article className="pb-20">
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
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

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tighter leading-tight">
              {post.title}
            </h1>

            <p className="mt-4 text-lg text-zinc-400 leading-relaxed">{post.excerpt}</p>

            <div className="mt-6">
              <ShareButtons url={`/blog/${slug}`} title={post.title} text={post.excerpt} />
            </div>
          </header>

          {headings.length > 0 && (
            <nav className="mb-10 rounded-xl border border-white/5 bg-zinc-900/50 p-5">
              <h2 className="text-xs text-zinc-500 uppercase tracking-wider font-medium mb-3">
                Neste artigo
              </h2>
              <ol className="space-y-1.5">
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="prose prose-invert prose-zinc max-w-none">
            {post.content.split('\n\n').map((block, i) => {
              if (block.startsWith('## ')) {
                const text = block.replace('## ', '')
                const id = text
                  .toLowerCase()
                  .normalize('NFD')
                  .replace(/[̀-ͯ]/g, '')
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/(^-|-$)/g, '')
                return (
                  <h2
                    key={i}
                    id={id}
                    className="font-display text-2xl font-bold uppercase tracking-tight mt-12 mb-6 scroll-mt-24"
                  >
                    {text}
                  </h2>
                )
              }
              return (
                <p key={i} className="text-zinc-300 leading-relaxed mb-4">
                  {block}
                </p>
              )
            })}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-zinc-800 text-zinc-400 border border-white/5"
              >
                #{tag}
              </span>
            ))}
          </div>

          {relatedPosts.length > 0 && (
            <section className="mt-16 pt-10 border-t border-white/5">
              <h2 className="font-display text-xl font-bold uppercase tracking-tight mb-6">
                Posts Relacionados
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map((related) => (
                  <Link
                    key={related!.slug}
                    href={`/blog/${related!.slug}`}
                    className="rounded-xl border border-white/5 bg-zinc-900/50 p-5 hover:border-olive-700/30 transition-all group"
                  >
                    <span className="text-xs text-olive-400 uppercase tracking-wider">
                      {related!.category}
                    </span>
                    <h3 className="font-display text-base font-bold mt-1 group-hover:text-olive-300 transition-colors">
                      {related!.title}
                    </h3>
                    <p className="text-sm text-zinc-500 mt-1 line-clamp-2">{related!.excerpt}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <nav className="mt-10 pt-8 border-t border-white/5">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-olive-400 hover:text-olive-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao Blog
            </Link>
          </nav>
        </article>
      </div>
    </div>
  )
}
