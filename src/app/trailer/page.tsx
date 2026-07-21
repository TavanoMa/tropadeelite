import type { Metadata } from 'next'
import { Film, Calendar, Clock, Award } from 'lucide-react'
import { Breadcrumb } from '@/components/shared/breadcrumb'
import { SectionHeader } from '@/components/shared/section-header'

export const metadata: Metadata = {
  title: 'Trailer Oficial de Tropa de Elite — Assista ao Trailer do Filme',
  description:
    'Assista ao trailer oficial de Tropa de Elite (2007). O filme dirigido por José Padilha com Wagner Moura como Capitão Nascimento que conquistou o Urso de Ouro em Berlim.',
  keywords: [
    'trailer Tropa de Elite',
    'trailer oficial BOPE',
    'assistir trailer Tropa de Elite',
    'vídeo Tropa de Elite',
  ],
  openGraph: {
    title: 'Trailer Oficial — Tropa de Elite',
    description: 'Assista ao trailer oficial do filme Tropa de Elite.',
    url: '/trailer',
  },
  alternates: { canonical: '/trailer' },
}

export default function TrailerPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Trailer', href: '/trailer' }]} />

        <SectionHeader
          title="Trailer Oficial"
          subtitle="Assista ao trailer que apresentou ao mundo o Capitão Nascimento"
        />

        <div className="mb-12">
          <div className="aspect-video rounded-2xl overflow-hidden border border-white/5 bg-zinc-900">
            <iframe
              src="https://www.youtube.com/embed/quRDDJSxjME"
              title="Trailer Oficial — Tropa de Elite (2007)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {[
            { icon: Film, label: 'Gênero', value: 'Crime / Drama' },
            { icon: Calendar, label: 'Lançamento', value: 'Outubro 2007' },
            { icon: Clock, label: 'Duração', value: '115 minutos' },
            { icon: Award, label: 'Prêmio', value: 'Urso de Ouro' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/5 bg-zinc-900/50 p-4 text-center"
            >
              <item.icon className="h-5 w-5 text-olive-500 mx-auto mb-2" />
              <p className="text-xs text-zinc-500 uppercase tracking-wider">{item.label}</p>
              <p className="font-display text-sm font-bold mt-1">{item.value}</p>
            </div>
          ))}
        </div>

        <section className="pb-20">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight mb-6">
            Sobre o Trailer
          </h2>
          <div className="prose prose-invert prose-zinc max-w-none space-y-4">
            <p className="text-zinc-400 leading-relaxed">
              O trailer oficial de Tropa de Elite captura em poucos minutos a essência do que tornaria
              o filme um fenômeno cultural brasileiro. Com cortes rápidos, a voz marcante de Wagner Moura
              como narrador e cenas de ação visceral, o trailer prometia uma experiência cinematográfica
              diferente de tudo o que o público brasileiro já havia visto.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              A trilha sonora intensa, composta por Pedro Bromfman, estabelece o tom desde os primeiros
              segundos. As imagens alternam entre o treinamento brutal do BOPE, as operações nas favelas
              e os momentos de tensão pessoal do Capitão Nascimento, oferecendo um vislumbre da
              complexidade narrativa do filme.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Quando o trailer foi lançado, já existia uma enorme expectativa pelo filme — em parte
              devido ao vazamento da cópia pirata que circulou antes da estreia. O trailer oficial
              confirmou as expectativas: Tropa de Elite seria um filme que não pouparia o espectador.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
