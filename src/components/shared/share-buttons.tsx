'use client'

import { Share2, Copy, Check } from 'lucide-react'
import { useState } from 'react'

interface ShareButtonsProps {
  url: string
  title: string
  text?: string
}

export function ShareButtons({ url, title, text }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const fullUrl = `https://tropadeelite.com.br${url}`
  const shareText = text ?? title

  async function copyLink() {
    await navigator.clipboard.writeText(fullUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={copyLink}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-zinc-400 border border-white/10 rounded-md hover:bg-white/5 transition-colors"
        aria-label="Copiar link"
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 text-olive-400" />
            Copiado
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5" />
            Copiar
          </>
        )}
      </button>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(fullUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-zinc-400 border border-white/10 rounded-md hover:bg-white/5 transition-colors"
        aria-label="Compartilhar no Twitter"
      >
        <Share2 className="h-3.5 w-3.5" />
        Twitter
      </a>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(`${shareText} ${fullUrl}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-zinc-400 border border-white/10 rounded-md hover:bg-white/5 transition-colors"
        aria-label="Compartilhar no WhatsApp"
      >
        <Share2 className="h-3.5 w-3.5" />
        WhatsApp
      </a>
    </div>
  )
}
