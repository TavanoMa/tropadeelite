import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({ title, subtitle, align = 'center', className }: SectionHeaderProps) {
  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left', 'mb-12', className)}>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          'mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-olive-500 to-burnt-500',
          align === 'center' ? 'mx-auto' : ''
        )}
      />
    </div>
  )
}
