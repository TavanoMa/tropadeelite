'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Quote as QuoteIcon, Copy, Check, Share2 } from 'lucide-react'
import type { Quote } from '@/types'

export function QuoteCard({ quote }: { quote: Quote }) {
  const [copied, setCopied] = useState(false)

  async function copyQuote() {
    await navigator.clipboard.writeText(`"${quote.text}" — ${quote.character}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareUrl = `https://wa.me/?text=${encodeURIComponent(`"${quote.text}" — ${quote.character}\n\nhttps://tropadeelite.com.br/frases`)}`

  return (
    <div className="glass-light rounded-xl p-6 h-full flex flex-col border-l-4 border-olive-600/50">
      <QuoteIcon className="h-7 w-7 text-olive-600/30 mb-3 shrink-0" />
      <blockquote className="text-lg font-medium text-zinc-200 leading-relaxed flex-1">
        &ldquo;{quote.text}&rdquo;
      </blockquote>
      <div className="mt-4 pt-4 border-t border-white/5">
        <Link
          href={`/personagens/${quote.characterSlug}`}
          className="text-sm text-olive-400 hover:text-olive-300 transition-colors font-medium"
        >
          — {quote.character}
        </Link>
        {quote.context && (
          <p className="text-xs text-zinc-600 mt-1">{quote.context}</p>
        )}
        <div className="mt-3 flex items-center gap-2">
          <button
            onClick={copyQuote}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-zinc-500 border border-white/10 rounded-md hover:bg-white/5 transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 text-olive-400" />
                Copiado!
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                Copiar
              </>
            )}
          </button>
          <a
            href={shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-zinc-500 border border-white/10 rounded-md hover:bg-white/5 transition-colors"
          >
            <Share2 className="h-3 w-3" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
