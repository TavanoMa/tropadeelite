import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <Image
          src="/logo.png"
          alt="Logo BOPE"
          width={140}
          height={140}
          className="mx-auto mb-6 opacity-30"
        />
        <h1 className="font-display text-6xl sm:text-8xl font-bold text-zinc-700">404</h1>
        <p className="mt-4 text-xl text-zinc-400">Página não encontrada</p>
        <p className="mt-2 text-zinc-600">
          A página que você procura não existe ou foi removida.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-olive-700 text-white font-semibold text-sm uppercase tracking-wider hover:bg-olive-600 transition-colors"
          >
            Voltar ao Início
          </Link>
          <Link
            href="/busca"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/10 text-zinc-300 font-semibold text-sm uppercase tracking-wider hover:bg-white/5 transition-colors"
          >
            Buscar
          </Link>
        </div>
      </div>
    </div>
  )
}
