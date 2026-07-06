'use client'

import { motion } from 'framer-motion'
import { FileText, CheckSquare, ArrowRight } from 'lucide-react'

const planItems = [
  { label: 'Diagnóstico completo da situação atual' },
  { label: 'Plano de ação com metas e cronograma' },
  { label: 'Estrutura das campanhas de tráfego' },
  { label: 'Mapeamento do funil comercial' },
  { label: 'Estratégia de posicionamento digital' },
]

export function Planning() {
  return (
    <section className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Document mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Shadow document */}
            <div className="absolute -bottom-4 -right-4 bg-[#F7F6F2] rounded-2xl border border-[#E8E6E0] w-full h-full" />
            <div className="absolute -bottom-2 -right-2 bg-[#F0EEE9] rounded-2xl border border-[#E8E6E0] w-full h-full" />

            {/* Main document */}
            <div className="relative bg-white rounded-2xl border border-[#E8E6E0] shadow-xl p-8 z-10">
              {/* Document header */}
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#E8E6E0]">
                <div className="w-10 h-10 bg-[#0D2625] rounded-xl flex items-center justify-center shrink-0">
                  <FileText size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-[#9CA3AF] text-xs uppercase tracking-wide">Documento</p>
                  <p className="text-[#0D2625] font-semibold text-sm">
                    Planejamento Estratégico Personalizado
                  </p>
                </div>
                <span className="ml-auto inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Gratuito
                </span>
              </div>

              {/* Checklist items */}
              <div className="flex flex-col gap-3 mb-8">
                {planItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="flex items-center gap-3 py-2.5 border-b border-[#F7F6F2] last:border-0"
                  >
                    <CheckSquare size={15} className="text-[#C9A96E] shrink-0" />
                    <span className="text-[#374151] text-sm">{item.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Document footer */}
              <div className="bg-[#F7F6F2] rounded-xl p-4">
                <p className="text-[#9CA3AF] text-xs mb-1">Entregue em até</p>
                <p className="text-[#0D2625] font-bold text-lg">48 horas</p>
                <p className="text-[#9CA3AF] text-xs mt-0.5">após o diagnóstico</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Text */}
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
                Planejamento Estratégico
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-serif font-bold text-[#0D2625] leading-[1.15] text-pretty mb-6"
            >
              Um plano feito sob medida para sua clínica.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#6B7280] text-base leading-relaxed mb-8"
            >
              Antes de qualquer campanha, mapeamos sua realidade, seus objetivos e os
              caminhos mais eficientes para chegar lá. O planejamento estratégico é a
              base de tudo — e você recebe gratuitamente no diagnóstico.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col gap-4 mb-10"
            >
              {[
                'Diagnóstico detalhado do cenário atual',
                'Identificação dos principais gargalos',
                'Estratégia personalizada por especialidade',
                'Previsão realista de resultados',
              ].map((benefit, i) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#C9A96E] rounded-full shrink-0" />
                  <p className="text-[#374151] text-sm">{benefit}</p>
                </div>
              ))}
            </motion.div>

            <motion.a
              href="#cta"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="group inline-flex items-center gap-2 bg-[#0D2625] text-white font-semibold px-7 py-4 rounded-full text-sm hover:bg-[#1a3d3b] transition-all duration-300 hover:shadow-xl hover:shadow-[#0D2625]/20 active:scale-95"
            >
              Solicitar Diagnóstico
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
