'use client'

import { FadeIn } from '@/components/fade-in'
import { BarChart2, Layers, Target, Headphones, PieChart, RefreshCcw } from 'lucide-react'

const cards = [
  {
    icon: BarChart2,
    title: 'Marketing orientado por dados',
    description:
      'Cada decisão é baseada em números reais. Dashboards em tempo real, rastreamento completo e relatórios detalhados.',
  },
  {
    icon: Layers,
    title: 'CRM e Funil',
    description:
      'Estruturamos o funil comercial completo, desde o primeiro clique até a confirmação da consulta.',
  },
  {
    icon: Target,
    title: 'Posicionamento Estratégico',
    description:
      'Posicionamos sua clínica ou especialidade de forma diferenciada no mercado de saúde particular.',
  },
  {
    icon: Headphones,
    title: 'Atendimento Comercial',
    description:
      'Treinamento e suporte para que sua equipe converta leads em pacientes com mais eficiência.',
  },
  {
    icon: PieChart,
    title: 'Dashboards Inteligentes',
    description:
      'Visualização clara de todos os dados da sua operação — tráfego, conversão, ROI e faturamento.',
  },
  {
    icon: RefreshCcw,
    title: 'Otimização Contínua',
    description:
      'Revisão constante de campanhas, criativos e processos para melhorar resultados mês a mês.',
  },
]

export function Differentials() {
  return (
    <section className="py-28 lg:py-36 bg-[#F7F6F2]" id="servicos">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="max-w-2xl mb-16">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-6 h-px bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs font-medium tracking-[0.2em] uppercase">
                Nosso diferencial
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0D2625] leading-[1.15] text-pretty">
              O que nos torna diferentes.
            </h2>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 80}>
              <div className="group bg-white rounded-2xl p-7 border border-[#E8E6E0] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default h-full">
                <div className="w-10 h-10 rounded-xl bg-[#0D2625]/5 flex items-center justify-center mb-5 group-hover:bg-[#0D2625] transition-colors duration-300">
                  <card.icon
                    size={18}
                    className="text-[#0D2625] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-[#0D2625] font-semibold text-base mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">{card.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
