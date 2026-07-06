'use client'

import { motion } from 'framer-motion'
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
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-6 h-px bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-xs font-medium tracking-[0.2em] uppercase">
              Nosso diferencial
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-serif font-bold text-[#0D2625] leading-[1.15] text-pretty"
          >
            O que nos torna diferentes.
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(13,38,37,0.08)' }}
              className="group bg-white rounded-2xl p-7 border border-[#E8E6E0] transition-all duration-300 cursor-default"
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
