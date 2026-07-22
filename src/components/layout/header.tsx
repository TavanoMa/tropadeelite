'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search } from 'lucide-react'

const navLinks = [
  { href: '/resumo', label: 'Resumo' },
  { href: '/personagens', label: 'Personagens' },
  { href: '/frases', label: 'Frases' },
  { href: '/curiosidades', label: 'Curiosidades' },
  { href: '/quiz', label: 'Quiz' },
  { href: '/quem-voce-seria', label: 'Teste' },
  { href: '/onde-assistir', label: 'Onde Assistir' },
  { href: '/blog', label: 'Blog' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="Logo BOPE - Tropa de Elite"
              width={44}
              height={44}
              className="transition-transform group-hover:scale-110"
            />
            <span className="font-display text-lg font-bold tracking-wide uppercase">
              Tropa de Elite
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100 rounded-md hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/busca"
              className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors rounded-md hover:bg-white/5"
              aria-label="Buscar"
            >
              <Search className="h-5 w-5" />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-white/5 overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
