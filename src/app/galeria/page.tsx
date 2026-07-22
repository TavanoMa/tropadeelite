import type { Metadata } from 'next'
import Image from 'next/image'
import { Breadcrumb } from '@/components/shared/breadcrumb'
import { SectionHeader } from '@/components/shared/section-header'

export const metadata: Metadata = {
  title: 'Galeria de Imagens — Tropa de Elite',
  description:
    'Galeria com as melhores imagens de Tropa de Elite: cenas marcantes, bastidores, personagens e momentos icônicos do filme que marcou o cinema brasileiro.',
  keywords: [
    'galeria Tropa de Elite',
    'imagens Tropa de Elite',
    'fotos Tropa de Elite',
    'cenas Tropa de Elite',
  ],
  openGraph: {
    title: 'Galeria de Imagens — Tropa de Elite',
    description: 'As melhores imagens do filme Tropa de Elite.',
    url: '/galeria',
  },
  alternates: { canonical: '/galeria' },
}

const galleryCategories = [
  'Personagens',
  'Cenas de Ação',
  'Treinamento BOPE',
  'Bastidores',
  'Favela',
  'Pôsteres',
]

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Galeria', href: '/galeria' }]} />

        <SectionHeader
          title="Galeria"
          subtitle="Imagens marcantes do filme que definiu uma geração do cinema brasileiro"
        />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 pb-20">
          {Array.from({ length: 12 }, (_, i) => {
            const heights = ['aspect-[4/3]', 'aspect-[3/4]', 'aspect-square', 'aspect-[16/9]']
            const height = heights[i % heights.length]
            const category = galleryCategories[i % galleryCategories.length]

            return (
              <div
                key={i}
                className="mb-4 break-inside-avoid rounded-xl border border-white/5 bg-zinc-900/50 overflow-hidden group cursor-pointer"
              >
                <div className={`${height} bg-gradient-to-br from-olive-900/20 to-zinc-900 flex items-center justify-center relative`}>
                  <Image
                    src="/logo.png"
                    alt="Placeholder"
                    width={72}
                    height={72}
                    className="opacity-20 group-hover:opacity-30 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  <span className="absolute bottom-3 left-3 text-xs text-zinc-500 bg-black/40 px-2 py-1 rounded-md">
                    {category}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="pb-20 text-center">
          <p className="text-zinc-500 text-sm">
            Adicione suas próprias imagens à galeria substituindo os placeholders em{' '}
            <code className="text-olive-400 text-xs">/public/images/gallery/</code>
          </p>
        </div>
      </div>
    </div>
  )
}
