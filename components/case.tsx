'use client'

import { useRef, useEffect, useState } from 'react'
import { FadeIn } from '@/components/fade-in'
import { TrendingUp, Users, Calendar, DollarSign, Zap } from 'lucide-react'

function useCountUp(target: number, duration = 1.5, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])

  return count
}

const metrics = [
  { icon: DollarSign, label: 'Investimento', prefix: 'R$', value: 10434, suffix: '', color: 'text-[#6B7280]', highlight: false },
  { icon: Users, label: 'Leads gerados', prefix: '', value: 308, suffix: '', color: 'text-blue-400', highlight: false },
  { icon: Calendar, label: 'Agendamentos', prefix: '', value: 41, suffix: '', color: 'text-purple-400', highlight: false },
  { icon: DollarSign, label: 'Faturamento gerado', prefix: 'R$', value: 180560, suffix: '', color: 'text-green-400', highlight: true },
  { icon: TrendingUp, label: 'Retorno sobre investimento', prefix: '', value: 17, suffix: 'x', color: 'text-[#C9A96E]', highlight: true },
]

const chartData = [
  { label: 'Jan', value: 20 },
  { label: 'Fev', value: 35 },
  { label: 'Mar', value: 28 },
  { label: 'Abr', value: 55 },
  { label: 'Mai', value: 70 },
  { label: 'Jun', value: 100 },
]

export function Case() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -1px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const counts = metrics.map((m) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useCountUp(m.value, 1.8, inView)
  )

  return (
    <section id="case" ref={ref} className="py-28 lg:py-36 bg-[#0D2625] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="max-w-2xl mb-16">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-6 h-px bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs font-medium tracking-[0.2em] uppercase">
                Case de sucesso
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white leading-[1.15] text-pretty">
              Resultados reais.<br />
              <span className="text-[#C9A96E]">Números verificáveis.</span>
            </h2>
          </FadeIn>
        </div>

        {/* Main case card */}
        <FadeIn delay={150}>
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 lg:p-12 overflow-hidden relative">
            {/* Gold accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A96E]/5 rounded-bl-full pointer-events-none" />

            {/* Case header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 relative z-10">
              <div>
                <span className="inline-block bg-[#C9A96E]/10 text-[#C9A96E] text-xs font-medium tracking-widest uppercase px-3 py-1.5 rounded-full mb-3">
                  Médica Dermatologista
                </span>
                <h3 className="text-white font-serif font-bold text-2xl lg:text-3xl">
                  Um caso de sucesso
                </h3>
                <p className="text-white/40 text-sm mt-1">Clínica particular — São Paulo</p>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5">
                <Zap size={16} className="text-[#C9A96E]" />
                <div>
                  <p className="text-white/40 text-xs">Tempo de resultado</p>
                  <p className="text-white font-semibold text-sm">90 dias</p>
                </div>
              </div>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-12 relative z-10">
              {metrics.map((metric, i) => (
                <div
                  key={metric.label}
                  className={`rounded-2xl p-5 ${
                    metric.highlight
                      ? 'bg-white/10 border border-[#C9A96E]/20'
                      : 'bg-white/5 border border-white/5'
                  }`}
                >
                  <metric.icon size={16} className={`${metric.color} mb-3 opacity-70`} />
                  <p className="font-bold text-2xl text-white mb-1">
                    {metric.prefix}
                    {metric.value >= 1000
                      ? counts[i].toLocaleString('pt-BR')
                      : counts[i]}
                    {metric.suffix}
                  </p>
                  <p className="text-white/40 text-xs leading-snug">{metric.label}</p>
                </div>
              ))}
            </div>

            {/* Mini chart */}
            <div className="relative z-10">
              <div className="flex items-end justify-between gap-2 mb-3">
                <p className="text-white/40 text-xs uppercase tracking-wide">Evolução do faturamento</p>
                <span className="text-green-400 text-xs font-medium">+400% em 6 meses</span>
              </div>
              <div className="flex items-end gap-2 h-24">
                {chartData.map((bar, i) => (
                  <div key={bar.label} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full rounded-t-md transition-all duration-700"
                      style={{
                        height: inView ? `${bar.value}%` : '4px',
                        background:
                          i === chartData.length - 1
                            ? '#C9A96E'
                            : `rgba(201,169,110,${0.15 + i * 0.12})`,
                        transitionDelay: `${300 + i * 100}ms`,
                        minHeight: '4px',
                      }}
                    />
                    <span className="text-white/30 text-[10px]">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Bottom CTA */}
        <FadeIn delay={300}>
          <div className="mt-8 text-center">
            <p className="text-white/40 text-sm mb-4">
              Quer resultados similares para a sua clínica?
            </p>
            <a
              href="#cta"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 bg-[#C9A96E] text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-[#D4B97E] transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A96E]/20 active:scale-95"
            >
              Quero meu diagnóstico
              <span>→</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
