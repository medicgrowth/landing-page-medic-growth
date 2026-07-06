'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Diagnóstico',
    description:
      'Analisamos sua presença digital, funil atual, posicionamento e mercado para identificar os pontos de alavanca.',
    detail: 'Análise completa em 48h',
  },
  {
    number: '02',
    title: 'Planejamento',
    description:
      'Criamos um plano estratégico personalizado com metas, canais, cronograma e estrutura de campanhas.',
    detail: 'Documento estratégico detalhado',
  },
  {
    number: '03',
    title: 'Implementação',
    description:
      'Estruturamos tudo: campanhas, landing pages, CRM, automações e processos de atendimento.',
    detail: 'Go-live em até 15 dias',
  },
  {
    number: '04',
    title: 'Otimização',
    description:
      'Monitoramos resultados diariamente e ajustamos campanhas, criativos e processos para maximizar ROI.',
    detail: 'Otimização semanal',
  },
  {
    number: '05',
    title: 'Escala',
    description:
      'Com a operação validada, escalamos o investimento de forma previsível e controlada.',
    detail: 'Crescimento sustentável',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-28 lg:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="max-w-2xl mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-6 h-px bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-xs font-medium tracking-[0.2em] uppercase">
              Como funciona
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-serif font-bold text-[#0D2625] leading-[1.15] text-pretty"
          >
            Do diagnóstico à escala.
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8E6E0] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col"
              >
                {/* Step number with circle */}
                <div className="flex lg:flex-col items-center lg:items-start gap-4 mb-5">
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#0D2625] text-white font-bold text-xs font-mono shrink-0">
                    {step.number}
                  </div>
                  {/* Mobile connector */}
                  <div className="lg:hidden flex-1 h-px bg-[#E8E6E0]" />
                </div>

                <div className="lg:mt-0">
                  <h3 className="text-[#0D2625] font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed mb-3">{step.description}</p>
                  <span className="inline-block text-[#C9A96E] text-xs font-medium bg-[#C9A96E]/8 px-3 py-1 rounded-full">
                    {step.detail}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-[#F7F6F2] rounded-2xl border border-[#E8E6E0]"
        >
          <div>
            <p className="text-[#0D2625] font-semibold text-lg mb-1">Pronto para começar?</p>
            <p className="text-[#9CA3AF] text-sm">
              Agende seu diagnóstico gratuito e receba um plano personalizado em 48h.
            </p>
          </div>
          <a
            href="#cta"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="shrink-0 bg-[#0D2625] text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-[#1a3d3b] transition-all duration-300 hover:shadow-lg active:scale-95 whitespace-nowrap"
          >
            Agendar Diagnóstico
          </a>
        </motion.div>
      </div>
    </section>
  )
}
