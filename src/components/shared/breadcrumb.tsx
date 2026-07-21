import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { generateBreadcrumbJsonLd } from '@/lib/utils'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ label: 'Início', href: '/' }, ...items]
  const jsonLd = generateBreadcrumbJsonLd(
    allItems.map((item) => ({ name: item.label, url: item.href }))
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center gap-1 text-sm text-zinc-500 flex-wrap">
          {allItems.map((item, index) => (
            <li key={item.href} className="flex items-center gap-1">
              {index > 0 && <ChevronRight className="h-3.5 w-3.5 shrink-0" />}
              {index === allItems.length - 1 ? (
                <span className="text-zinc-300">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-zinc-300 transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
