'use client'

import { FadeIn } from '@/components/fade-in'
import { BarChart2, Link2, Stethoscope, RefreshCcw, Heart } from 'lucide-react'

const items = [
  {
    icon: BarChart2,
    title: 'Marketing orientado por dados',
    description: 'Cada ação é mensurada. Sem achismo, sem desperdício — apenas decisões baseadas em métricas reais.',
  },
  {
    icon: Link2,
    title: 'Integração entre marketing e vendas',
    description: 'Conectamos tráfego pago, atendimento e CRM para uma operação coesa e sem furos no funil.',
  },
  {
    icon: Stethoscope,
    title: 'Especialização em clínicas particulares',
    description: 'Não somos uma agência genérica. Conhecemos profundamente o mercado de saúde privada.',
  },
  {
    icon: RefreshCcw,
    title: 'Melhoria contínua',
    description: 'Revisamos e otimizamos a operação constantemente para melhorar resultados mês a mês.',
  },
  {
    icon: Heart,
    title: 'Acompanhamento próximo',
    description: 'Acesso direto à equipe, reuniões periódicas e suporte ativo — nada de atendimento engessado.',
  },
]

export function WhyUs() {
  return (
    <section className="py-28 lg:py-36 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-6 h-px bg-[#C9A96E]" />
                <span className="text-[#C9A96E] text-xs font-medium tracking-[0.2em] uppercase">
                  Por que a Medic Growth
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0D2625] leading-[1.15] text-pretty">
                Construímos operações, não campanhas.
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={180}>
            <p className="text-[#6B7280] text-base leading-relaxed max-w-sm lg:text-right">
              A diferença está na integração. Não terceirizamos partes do trabalho — assumimos
              a operação comercial completa da sua clínica.
            </p>
          </FadeIn>
        </div>

        {/* Items list */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 80}>
              <div className="group bg-white rounded-2xl p-7 border border-[#E8E6E0] hover:border-[#0D2625]/10 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#0D2625]/5 flex items-center justify-center group-hover:bg-[#0D2625] transition-colors duration-300">
                    <item.icon
                      size={16}
                      className="text-[#0D2625] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-[#0D2625] font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">{item.description}</p>
              </div>
            </FadeIn>
          ))}

          {/* CTA card */}
          <FadeIn delay={items.length * 80}>
            <div className="bg-[#0D2625] rounded-2xl p-7 flex flex-col justify-between h-full">
              <div>
                <p className="text-[#C9A96E] text-xs font-medium uppercase tracking-widest mb-3">
                  Pronto para crescer?
                </p>
                <p className="text-white font-serif text-2xl font-bold leading-snug">
                  Agende seu diagnóstico gratuito.
                </p>
              </div>
              <a
                href="#cta"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="mt-6 w-full bg-white text-[#0D2625] font-semibold py-3.5 rounded-full text-sm text-center hover:bg-[#C9A96E] hover:text-white transition-all duration-300"
              >
                Começar agora
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
