'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Lightbulb } from 'lucide-react'
import type { Curiosity } from '@/types'
import { cn } from '@/lib/utils'

interface Props {
  curiosities: Curiosity[]
  categories: string[]
}

export function CuriositiesList({ curiosities, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [openId, setOpenId] = useState<string | null>(null)

  const filtered = activeCategory
    ? curiosities.filter((c) => c.category === activeCategory)
    : curiosities

  return (
    <div className="pb-20">
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory(null)}
          className={cn(
            'px-4 py-2 text-xs rounded-full border transition-colors uppercase tracking-wider font-medium',
            !activeCategory
              ? 'bg-olive-700 border-olive-600 text-white'
              : 'border-white/10 text-zinc-400 hover:bg-white/5'
          )}
        >
          Todas
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
            className={cn(
              'px-4 py-2 text-xs rounded-full border transition-colors uppercase tracking-wider font-medium',
              cat === activeCategory
                ? 'bg-olive-700 border-olive-600 text-white'
                : 'border-white/10 text-zinc-400 hover:bg-white/5'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((curiosity) => (
          <div
            key={curiosity.id}
            className="rounded-xl border border-white/5 bg-zinc-900/50 overflow-hidden"
          >
            <button
              onClick={() => setOpenId(openId === curiosity.id ? null : curiosity.id)}
              className="w-full flex items-start gap-4 p-5 text-left hover:bg-white/[0.02] transition-colors"
              aria-expanded={openId === curiosity.id}
            >
              <Lightbulb className="h-5 w-5 text-burnt-500 shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <span className="text-xs text-burnt-400 uppercase tracking-wider font-medium">
                  {curiosity.category}
                </span>
                <h3 className="font-display text-lg font-bold mt-0.5">{curiosity.title}</h3>
              </div>
              <ChevronDown
                className={cn(
                  'h-5 w-5 text-zinc-500 shrink-0 transition-transform duration-200',
                  openId === curiosity.id && 'rotate-180'
                )}
              />
            </button>
            <AnimatePresence>
              {openId === curiosity.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pl-14">
                    <p className="text-zinc-400 leading-relaxed">{curiosity.content}</p>
                    {curiosity.source && (
                      <p className="mt-2 text-xs text-zinc-600">Fonte: {curiosity.source}</p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}
