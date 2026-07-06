'use client'

import { FadeIn } from '@/components/fade-in'

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
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-6 h-px bg-[#C9A96E]" />
                <span className="text-[#C9A96E] text-xs font-medium tracking-[0.2em] uppercase">
                  Quem Somos
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0D2625] leading-[1.15] text-pretty mb-6">
                Muito além do tráfego pago.
              </h2>
            </FadeIn>

            <FadeIn delay={180}>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-10 max-w-lg">
                A Medic Growth conecta marketing, atendimento e gestão comercial para
                construir uma operação previsível de aquisição de pacientes particulares.
                Não gerenciamos campanhas — construímos máquinas de crescimento.
              </p>
            </FadeIn>

            {/* Stats */}
            <div className="flex flex-col gap-6">
              {stats.map((stat, i) => (
                <FadeIn key={stat.value} delay={260 + i * 80} direction="left">
                  <div className="flex items-center gap-5">
                    <span className="text-3xl font-serif font-bold text-[#0D2625] w-16 shrink-0">
                      {stat.value}
                    </span>
                    <div className="w-px h-10 bg-[#E8E6E0] shrink-0" />
                    <p className="text-[#6B7280] text-sm leading-snug">{stat.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right — Abstract illustration */}
          <FadeIn delay={150} direction="none">
            <div className="relative">
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
                      { label: 'Tráfego Pago', color: 'bg-blue-50 text-blue-700', icon: '↗' },
                      { label: 'Landing Page', color: 'bg-purple-50 text-purple-700', icon: '⬡' },
                      { label: 'CRM & Funil', color: 'bg-amber-50 text-amber-700', icon: '◈' },
                      { label: 'Atendimento Comercial', color: 'bg-green-50 text-green-700', icon: '◎' },
                      { label: 'Dashboards & Dados', color: 'bg-rose-50 text-rose-700', icon: '▣' },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-[#E8E6E0]/60 hover:shadow-md transition-shadow duration-200"
                      >
                        <span className={`text-xs font-mono w-6 text-center ${item.color} rounded px-1 py-0.5`}>
                          {item.icon}
                        </span>
                        <span className="text-[#0D2625] text-sm font-medium">{item.label}</span>
                        <span className="ml-auto w-2 h-2 bg-green-400 rounded-full" />
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-[#E8E6E0] flex items-center justify-between">
                    <p className="text-[#9CA3AF] text-xs">Resultado final</p>
                    <p className="text-[#0D2625] font-bold text-sm">Crescimento Previsível</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
