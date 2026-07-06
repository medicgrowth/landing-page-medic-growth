'use client'

import { motion } from 'framer-motion'
import {
  Megaphone,
  Search,
  Share2,
  Layout,
  Database,
  Zap,
  GitBranch,
  BookOpen,
  FileBarChart,
  MessageSquare,
  Headphones,
  Target,
} from 'lucide-react'

const services = [
  { icon: Target, label: 'Estratégia Personalizada', highlight: true },
  { icon: Megaphone, label: 'Gestão de Tráfego', highlight: false },
  { icon: Search, label: 'Google Ads', highlight: false },
  { icon: Share2, label: 'Meta Ads', highlight: false },
  { icon: Layout, label: 'Landing Pages', highlight: false },
  { icon: Database, label: 'CRM', highlight: false },
  { icon: Zap, label: 'Automação', highlight: false },
  { icon: GitBranch, label: 'Funil Comercial', highlight: true },
  { icon: BookOpen, label: 'Treinamento Comercial', highlight: false },
  { icon: FileBarChart, label: 'Relatórios', highlight: false },
  { icon: MessageSquare, label: 'Consultoria', highlight: false },
  { icon: Headphones, label: 'Suporte Contínuo', highlight: true },
]

export function WhatWeDeliver() {
  return (
    <section className="py-28 lg:py-36 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left column — heading */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="w-6 h-px bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs font-medium tracking-[0.2em] uppercase">
                O que entregamos
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-serif font-bold text-[#0D2625] leading-[1.15] text-pretty mb-6"
            >
              Leads.
              <br />
              Agendamentos.
              <br />
              Pacientes.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#6B7280] text-base leading-relaxed"
            >
              Uma solução integrada que cobre toda a jornada — da atração ao agendamento
              confirmado — com rastreabilidade total de resultados.
            </motion.p>

            <motion.a
              href="#cta"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 mt-8 bg-[#0D2625] text-white font-semibold px-6 py-3.5 rounded-full text-sm hover:bg-[#1a3d3b] transition-all duration-300 hover:shadow-lg hover:shadow-[#0D2625]/20 active:scale-95"
            >
              Ver como funciona
              <span>→</span>
            </motion.a>
          </div>

          {/* Right column — Services grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {services.map((service, i) => (
                <motion.div
                  key={service.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className={`group flex flex-col items-start gap-3 p-5 rounded-2xl border transition-all duration-300 cursor-default ${
                    service.highlight
                      ? 'bg-[#0D2625] border-[#0D2625] shadow-lg shadow-[#0D2625]/10'
                      : 'bg-white border-[#E8E6E0] hover:border-[#C9A96E]/30 hover:shadow-md'
                  }`}
                >
                  <service.icon
                    size={18}
                    className={service.highlight ? 'text-[#C9A96E]' : 'text-[#0D2625] group-hover:text-[#C9A96E] transition-colors'}
                  />
                  <span
                    className={`text-sm font-medium leading-snug ${
                      service.highlight ? 'text-white' : 'text-[#374151]'
                    }`}
                  >
                    {service.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
