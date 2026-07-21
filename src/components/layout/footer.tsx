import Link from 'next/link'
import { Skull } from 'lucide-react'

const footerLinks = {
  'Sobre o Filme': [
    { href: '/resumo', label: 'Resumo' },
    { href: '/personagens', label: 'Personagens' },
    { href: '/curiosidades', label: 'Curiosidades' },
    { href: '/timeline', label: 'Linha do Tempo' },
    { href: '/galeria', label: 'Galeria' },
  ],
  Interativo: [
    { href: '/quiz', label: 'Quiz' },
    { href: '/quem-voce-seria', label: 'Quem Você Seria?' },
    { href: '/frases', label: 'Frases' },
    { href: '/filmes-parecidos', label: 'Filmes Parecidos' },
    { href: '/onde-assistir', label: 'Onde Assistir' },
  ],
  Portal: [
    { href: '/blog', label: 'Blog' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/contato', label: 'Contato' },
    { href: '/busca', label: 'Busca' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Skull className="h-6 w-6 text-olive-400" />
              <span className="font-display text-lg font-bold tracking-wide uppercase">
                Tropa de Elite
              </span>
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed">
              O maior portal brasileiro dedicado ao filme Tropa de Elite.
              Personagens, curiosidades, análises e tudo sobre o clássico
              do cinema nacional.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-zinc-300 mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Tropa de Elite Portal. Este site
            é um projeto de fã e não possui afiliação oficial com os produtores
            do filme.
          </p>
          <p className="text-xs text-zinc-600">
            Tropa de Elite &copy; Zazen Produções. Todos os direitos reservados
            aos seus respectivos detentores.
          </p>
        </div>
      </div>
    </footer>
  )
}
