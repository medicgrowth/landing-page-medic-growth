'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '3+', label: 'Anos de especialização em marketing médico' },
  { value: '50+', label: 'Clínicas e médicos atendidos' },
  { value: '17x', label: 'ROI médio comprovado em cases reais' },
]

export function WhoWeAre() {
  return (
    <section id="quem-somos" className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="w-6 h-px bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs font-medium tracking-[0.2em] uppercase">
                Quem Somos
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-serif font-bold text-[#0D2625] leading-[1.15] text-pretty mb-6"
            >
              Muito além do tráfego pago.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#6B7280] text-lg leading-relaxed mb-10 max-w-lg"
            >
              A Medic Growth conecta marketing, atendimento e gestão comercial para
              construir uma operação previsível de aquisição de pacientes particulares.
              Não gerenciamos campanhas — construímos máquinas de crescimento.
            </motion.p>

            {/* Stats */}
            <div className="flex flex-col gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-5"
                >
                  <span className="text-3xl font-serif font-bold text-[#0D2625] w-16 shrink-0">
                    {stat.value}
                  </span>
                  <div className="w-px h-10 bg-[#E8E6E0] shrink-0" />
                  <p className="text-[#6B7280] text-sm leading-snug">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Abstract illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative bg-[#F7F6F2] rounded-3xl p-8 overflow-hidden">
              {/* Decorative top-right accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#C9A96E]/8 rounded-bl-[80px]" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#0D2625]/5 rounded-tr-[60px]" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-[#9CA3AF] text-xs tracking-wide uppercase mb-1">Integração completa</p>
                    <p className="text-[#0D2625] font-semibold text-lg">Operação de Crescimento</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#0D2625] flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-[#C9A96E] rounded-full" />
                  </div>
                </div>

                {/* Integration flow */}
                <div className="space-y-3">
                  {[
                    { label: 'Tráfego Pago', icon: '↗', color: 'bg-blue-50 text-blue-700' },
                    { label: 'Landing Page', icon: '⬡', color: 'bg-purple-50 text-purple-700' },
                    { label: 'CRM & Funil', icon: '◈', color: 'bg-amber-50 text-amber-700' },
                    { label: 'Atendimento Comercial', icon: '◎', color: 'bg-green-50 text-green-700' },
                    { label: 'Dashboards & Dados', icon: '▣', color: 'bg-rose-50 text-rose-700' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                      className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-[#E8E6E0]/60 hover:shadow-md transition-shadow duration-200"
                    >
                      <span className={`text-xs font-mono w-6 text-center ${item.color} rounded px-1 py-0.5`}>
                        {item.icon}
                      </span>
                      <span className="text-[#0D2625] text-sm font-medium">{item.label}</span>
                      <span className="ml-auto w-2 h-2 bg-green-400 rounded-full" />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-[#E8E6E0] flex items-center justify-between">
                  <p className="text-[#9CA3AF] text-xs">Resultado final</p>
                  <p className="text-[#0D2625] font-bold text-sm">Crescimento Previsível</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
