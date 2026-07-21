import type { Metadata } from 'next'
import { ExternalLink, Tv, ShoppingCart, CreditCard } from 'lucide-react'
import { Breadcrumb } from '@/components/shared/breadcrumb'
import { SectionHeader } from '@/components/shared/section-header'
import { streamingPlatforms } from '@/data/streaming'

export const metadata: Metadata = {
  title: 'Onde Assistir Tropa de Elite — Plataformas de Streaming e Aluguel',
  description:
    'Descubra onde assistir Tropa de Elite legalmente em 2025. Veja todas as plataformas de streaming, aluguel e compra disponíveis no Brasil: Globoplay, Amazon Prime e mais.',
  keywords: [
    'onde assistir Tropa de Elite',
    'Tropa de Elite streaming',
    'Tropa de Elite Netflix',
    'Tropa de Elite Globoplay',
    'assistir Tropa de Elite online',
    'Tropa de Elite Amazon Prime',
  ],
  openGraph: {
    title: 'Onde Assistir Tropa de Elite',
    description: 'Todas as plataformas onde você pode assistir Tropa de Elite legalmente.',
    url: '/onde-assistir',
  },
  alternates: { canonical: '/onde-assistir' },
}

const typeLabels = {
  subscription: { label: 'Assinatura', icon: Tv, color: 'text-olive-400' },
  rent: { label: 'Aluguel', icon: ShoppingCart, color: 'text-burnt-400' },
  buy: { label: 'Compra', icon: CreditCard, color: 'text-zinc-400' },
}

export default function WhereToWatchPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Onde Assistir', href: '/onde-assistir' }]} />

        <SectionHeader
          title="Onde Assistir"
          subtitle="Todas as formas legais de assistir Tropa de Elite no Brasil"
        />

        <div className="space-y-4 mb-16">
          {streamingPlatforms.map((platform) => {
            const typeInfo = typeLabels[platform.type]
            const Icon = typeInfo.icon

            return (
              <div
                key={platform.name}
                className="rounded-xl border border-white/5 bg-zinc-900/50 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className={`h-4 w-4 ${typeInfo.color}`} />
                    <span className={`text-xs uppercase tracking-wider font-medium ${typeInfo.color}`}>
                      {typeInfo.label}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold">{platform.name}</h3>
                  {platform.price && (
                    <p className="text-sm text-zinc-500 mt-1">{platform.price}</p>
                  )}
                </div>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-olive-700 text-white text-sm font-semibold uppercase tracking-wider hover:bg-olive-600 transition-colors shrink-0"
                >
                  Acessar
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            )
          })}
        </div>

        <section className="pb-20">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight mb-6">
            Sobre a disponibilidade
          </h2>
          <div className="prose prose-invert prose-zinc max-w-none space-y-4">
            <p className="text-zinc-400 leading-relaxed">
              Tropa de Elite (2007) e sua sequência Tropa de Elite 2: O Inimigo Agora é Outro (2010) estão
              disponíveis em diversas plataformas de streaming e locação digital no Brasil. A disponibilidade
              pode variar conforme a região e acordos de licenciamento vigentes.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Recomendamos sempre verificar diretamente nas plataformas indicadas, pois os catálogos de
              streaming são atualizados periodicamente. As informações de preço apresentadas são aproximadas
              e podem sofrer alterações.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              O filme também está disponível em formato físico (DVD e Blu-ray) em lojas especializadas
              e marketplaces online. Para uma experiência completa, recomendamos assistir em alta definição,
              que valoriza a fotografia e as cenas de ação do filme.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Importante: sempre opte por meios legais para assistir ao filme. A pirataria prejudica a
              indústria cinematográfica brasileira e os profissionais envolvidos na produção. Ao escolher
              uma plataforma oficial, você contribui para o fortalecimento do cinema nacional.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
