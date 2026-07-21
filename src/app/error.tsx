'use client'

import { Skull } from 'lucide-react'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <Skull className="h-20 w-20 text-burnt-700/30 mx-auto mb-6" />
        <h1 className="font-display text-6xl sm:text-8xl font-bold text-zinc-700">500</h1>
        <p className="mt-4 text-xl text-zinc-400">Algo deu errado</p>
        <p className="mt-2 text-zinc-600">
          Ocorreu um erro inesperado. Tente novamente.
        </p>
        <button
          onClick={reset}
          className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-olive-700 text-white font-semibold text-sm uppercase tracking-wider hover:bg-olive-600 transition-colors"
        >
          Tentar Novamente
        </button>
      </div>
    </div>
  )
}
