'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface CardProps {
  href?: string
  className?: string
  children: ReactNode
  hover?: boolean
}

export function Card({ href, className, children, hover = true }: CardProps) {
  const cardClasses = cn(
    'rounded-xl border border-white/5 bg-zinc-900/50 overflow-hidden',
    hover && 'transition-all duration-300 hover:border-olive-700/30 hover:bg-zinc-900/80',
    className
  )

  const content = (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2 }}
      className={cardClasses}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}

export function CardImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={cn('relative overflow-hidden bg-zinc-800', className)}>
      <div className="aspect-[16/10] w-full bg-gradient-to-br from-olive-900/40 to-zinc-900 flex items-center justify-center">
        <span className="text-zinc-600 text-sm">{alt}</span>
      </div>
    </div>
  )
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('p-5', className)}>{children}</div>
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={cn('font-display text-lg font-bold uppercase tracking-tight', className)}>
      {children}
    </h3>
  )
}

export function CardDescription({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('mt-2 text-sm text-zinc-400 leading-relaxed', className)}>
      {children}
    </p>
  )
}
