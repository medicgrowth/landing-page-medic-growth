'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Calendar, BarChart3 } from 'lucide-react'

const floatingCards = [
  {
    icon: TrendingUp,
    label: 'ROI Médio',
    value: '17x',
    sub: 'retorno sobre investimento',
    color: '#C9A96E',
    delay: 0,
  },
  {
    icon: Users,
    label: 'Leads',
    value: '+308',
    sub: 'leads qualificados/mês',
    color: '#0D2625',
    delay: 0.15,
  },
  {
    icon: Calendar,
    label: 'Agendamentos',
    value: '+41',
    sub: 'novas consultas/mês',
    color: '#0D2625',
    delay: 0.3,
  },
  {
    icon: BarChart3,
    label: 'Conversão',
    value: '13%',
    sub: 'taxa de agendamento',
    color: '#C9A96E',
    delay: 0.45,
  },
]

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  return (
    <span>
      {suffix}
      {value}
    </span>
  )
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#0D2625] pb-32"
      aria-label="Hero — Medic Growth"
    >
      {/* Background texture */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_-10%,#1a3d3b,transparent)]" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex-1 flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 lg:pt-36 lg:pb-24 w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

            {/* Left Column */}
            <div className="flex flex-col gap-8">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 w-fit"
              >
                <span className="w-6 h-px bg-[#C9A96E]" />
                <span className="text-[#C9A96E] text-xs font-medium tracking-[0.2em] uppercase">
                  Assessoria em Marketing Médico
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.5rem] font-serif font-bold text-white leading-[1.1] tracking-tight text-pretty"
              >
                Otimize a jornada e atraia pacientes particulares, sem achismos.
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="text-white/60 text-base lg:text-lg leading-relaxed max-w-lg"
              >
                A Medic Growth integra Marketing e Inteligência Comercial para transformar investimento em crescimento previsível para clínicas e médicos.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#cta"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="group inline-flex items-center justify-center gap-2 bg-white text-[#0D2625] font-semibold px-7 py-4 rounded-full text-sm transition-all duration-300 hover:bg-[#C9A96E] hover:text-white hover:shadow-xl hover:shadow-white/10 active:scale-95"
                >
                  Agendar Diagnóstico
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#case"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#case')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 font-medium px-7 py-4 rounded-full text-sm transition-all duration-300 hover:border-white/50 hover:text-white hover:bg-white/5 active:scale-95"
                >
                  Ver Case de Sucesso
                </a>
              </motion.div>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-3"
              >
                <div className="flex items-center pl-3" aria-label="Clientes da Medic Growth">
                  <a
                    href="https://www.instagram.com/draleticiadechiara/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram da Dra. Leticia"
                  >
                    <img
                      src="https://medicgrowth.com.br/midias/perfil-clientes-medic-growth_one.png"
                      alt="Dra. Leticia"
                      className="w-10 h-10 rounded-full object-cover border-2 border-[#0D2625] -ml-3"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/bvdermatologia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram da BV Dermatologia"
                  >
                    <img
                      src="https://medicgrowth.com.br/midias/perfil-clientes-medic-growth_two.png"
                      alt="BV Dermatologia"
                      className="w-10 h-10 rounded-full object-cover border-2 border-[#0D2625] -ml-3"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/physioplacerj/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram da PhysioPlace"
                  >
                    <img
                      src="https://medicgrowth.com.br/midias/perfil-clientes-medic-growth_three.png"
                      alt="PhysioPlace - Dr Mauricio"
                      className="w-10 h-10 rounded-full object-cover border-2 border-[#0D2625] -ml-3"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/ianasimao/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram da Dra. Iana Simão"
                  >
                    <img
                      src="https://medicgrowth.com.br/wp-content/uploads/2026/09/perfil-clientes-medic-growth-for.png"
                      alt="Dra. Iana Simão"
                      className="w-10 h-10 rounded-full object-cover border-2 border-[#0D2625] -ml-3"
                    />
                  </a>
                </div>
                <p className="text-white/30 text-xs tracking-wide">A escolha de clínicas com mais de 30 anos de história.</p>
              </motion.div>
            </div>

            {/* Right Column — Dashboard Mockup + Floating Cards */}
            <div className="relative hidden lg:flex justify-center items-center">
              {/* Central dashboard card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-sm bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-white/40 text-xs tracking-wide uppercase">Dashboard</p>
                    <p className="text-white font-semibold mt-0.5">Visão Geral</p>
                  </div>
                  <span className="flex items-center gap-1.5 bg-green-500/10 text-green-400 text-xs font-medium px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    Ao Vivo
                  </span>
                </div>

                {/* Metrics grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: 'Leads', value: '308', delta: '+24%' },
                    { label: 'Agendamentos', value: '41', delta: '+18%' },
                    { label: 'Faturamento', value: 'R$180k', delta: '+210%' },
                    { label: 'ROI', value: '17x', delta: '+3x' },
                  ].map((m) => (
                    <div key={m.label} className="bg-white/5 rounded-xl p-3">
                      <p className="text-white/40 text-xs mb-1">{m.label}</p>
                      <p className="text-white text-lg font-bold">{m.value}</p>
                      <p className="text-green-400 text-xs font-medium">{m.delta}</p>
                    </div>
                  ))}
                </div>

                {/* Mini chart bars */}
                <div>
                  <p className="text-white/30 text-xs mb-3">Conversão do funil</p>
                  <div className="space-y-2">
                    {[
                      { label: 'Impressões', pct: 100 },
                      { label: 'Cliques', pct: 68 },
                      { label: 'Leads', pct: 42 },
                      { label: 'Agendamentos', pct: 18 },
                      { label: 'Pacientes', pct: 12 },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center gap-3">
                        <span className="text-white/40 text-xs w-24 shrink-0">{row.label}</span>
                        <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${row.pct}%` }}
                            transition={{ duration: 1, delay: 0.8 + row.pct * 0.003 }}
                            className="h-full bg-gradient-to-r from-[#C9A96E] to-[#0D9488] rounded-full"
                          />
                        </div>
                        <span className="text-white/40 text-xs w-8 text-right">{row.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl px-4 py-3 border border-[#E8E6E0]"
              >
                <p className="text-[#6B7280] text-xs">Investimento</p>
                <p className="text-[#0D2625] font-bold text-xl">R$10.434</p>
                <p className="text-green-600 text-xs font-medium">↑ ROI 17x</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.85 }}
                className="absolute -bottom-6 -left-8 bg-[#0D2625] rounded-2xl shadow-2xl px-4 py-3"
              >
                <p className="text-white/50 text-xs">Faturamento gerado</p>
                <p className="text-white font-bold text-xl">R$180.560</p>
                <p className="text-[#C9A96E] text-xs font-medium">Médica Dermatologista</p>
              </motion.div>
            </div>
          </div>

          {/* Mobile Metrics Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:hidden mt-12 grid grid-cols-2 gap-3"
          >
            {[
              { label: 'ROI médio', value: '17x', icon: TrendingUp },
              { label: 'Leads/mês', value: '+308', icon: Users },
              { label: 'Agendamentos', value: '+41', icon: Calendar },
              { label: 'Faturamento', value: 'R$180k', icon: BarChart3 },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <item.icon size={18} className="text-[#C9A96E] mb-2" />
                <p className="text-white font-bold text-xl">{item.value}</p>
                <p className="text-white/40 text-xs mt-0.5">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
