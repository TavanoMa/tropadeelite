import type { Metadata } from 'next'
import { Mail, MessageSquare } from 'lucide-react'
import { Breadcrumb } from '@/components/shared/breadcrumb'
import { SectionHeader } from '@/components/shared/section-header'

export const metadata: Metadata = {
  title: 'Contato — Tropa de Elite Portal',
  description:
    'Entre em contato com o Portal Tropa de Elite. Envie sugestões, reportar erros, solicitar remoção de conteúdo ou propor parcerias.',
  openGraph: {
    title: 'Contato — Tropa de Elite',
    description: 'Entre em contato com o Portal Tropa de Elite.',
    url: '/contato',
  },
  alternates: { canonical: '/contato' },
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Contato', href: '/contato' }]} />

        <SectionHeader
          title="Contato"
          subtitle="Tem alguma sugestão, correção ou quer falar conosco? Envie sua mensagem"
        />

        <div className="pb-20 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="rounded-xl border border-white/5 bg-zinc-900/50 p-6 text-center">
              <Mail className="h-8 w-8 text-olive-500 mx-auto mb-3" />
              <h3 className="font-display text-sm font-bold uppercase tracking-tight">E-mail</h3>
              <p className="text-sm text-zinc-500 mt-1">contato@tropadeelite.com.br</p>
            </div>
            <div className="rounded-xl border border-white/5 bg-zinc-900/50 p-6 text-center">
              <MessageSquare className="h-8 w-8 text-olive-500 mx-auto mb-3" />
              <h3 className="font-display text-sm font-bold uppercase tracking-tight">Redes Sociais</h3>
              <p className="text-sm text-zinc-500 mt-1">@tropadeeliteportal</p>
            </div>
          </div>

          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-zinc-900/80 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-olive-600/50 focus:ring-1 focus:ring-olive-600/30 transition-colors"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-zinc-900/80 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-olive-600/50 focus:ring-1 focus:ring-olive-600/30 transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-zinc-400 mb-2">
                Assunto
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-zinc-900/80 text-zinc-100 focus:outline-none focus:border-olive-600/50 focus:ring-1 focus:ring-olive-600/30 transition-colors"
              >
                <option value="sugestao">Sugestão</option>
                <option value="correcao">Correção de informação</option>
                <option value="parceria">Parceria</option>
                <option value="direitos">Direitos autorais</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-zinc-900/80 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-olive-600/50 focus:ring-1 focus:ring-olive-600/30 transition-colors resize-y"
                placeholder="Sua mensagem..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-olive-700 text-white font-semibold text-sm uppercase tracking-wider hover:bg-olive-600 transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
