'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown, Skull } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-olive-900/20 via-transparent to-transparent" />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-olive-800/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-burnt-800/5 rounded-full blur-[100px]" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <Skull className="h-16 w-16 sm:h-20 sm:w-20 text-olive-500/60 mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase tracking-tighter"
        >
          <span className="text-gradient">Tropa</span>{' '}
          <span className="text-zinc-100">de</span>{' '}
          <span className="text-gradient">Elite</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
        >
          O maior portal brasileiro dedicado ao clássico do cinema nacional.
          Explore personagens, curiosidades, frases icônicas e muito mais.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/resumo"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-olive-700 text-white font-semibold text-sm uppercase tracking-wider hover:bg-olive-600 transition-colors min-w-[200px]"
          >
            Conheça a História
          </Link>
          <Link
            href="/quem-voce-seria"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-white/10 text-zinc-300 font-semibold text-sm uppercase tracking-wider hover:bg-white/5 hover:border-white/20 transition-colors min-w-[200px]"
          >
            Faça o Quiz
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-6 w-6 text-zinc-600" />
        </motion.div>
      </motion.div>
    </section>
  )
}
