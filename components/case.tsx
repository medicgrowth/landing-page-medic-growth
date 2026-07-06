'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
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
  {
    icon: DollarSign,
    label: 'Investimento',
    prefix: 'R$',
    value: 10434,
    suffix: '',
    color: 'text-[#6B7280]',
    size: 'small',
  },
  {
    icon: Users,
    label: 'Leads gerados',
    prefix: '',
    value: 308,
    suffix: '',
    color: 'text-blue-600',
    size: 'small',
  },
  {
    icon: Calendar,
    label: 'Agendamentos',
    prefix: '',
    value: 41,
    suffix: '',
    color: 'text-purple-600',
    size: 'small',
  },
  {
    icon: DollarSign,
    label: 'Faturamento gerado',
    prefix: 'R$',
    value: 180560,
    suffix: '',
    color: 'text-green-600',
    size: 'large',
    highlight: true,
  },
  {
    icon: TrendingUp,
    label: 'Retorno sobre investimento',
    prefix: '',
    value: 17,
    suffix: 'x',
    color: 'text-[#C9A96E]',
    size: 'large',
    highlight: true,
  },
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
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const counts = metrics.map((m) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useCountUp(m.value, 1.8, isInView)
  )

  return (
    <section id="case" ref={ref} className="py-28 lg:py-36 bg-[#0D2625] overflow-hidden">
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
              Case de sucesso
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-serif font-bold text-white leading-[1.15] text-pretty"
          >
            Resultados reais.<br />
            <span className="text-[#C9A96E]">Números verificáveis.</span>
          </motion.h2>
        </div>

        {/* Main case card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 lg:p-12 overflow-hidden relative"
        >
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
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className={`rounded-2xl p-5 ${
                  metric.highlight
                    ? 'bg-white/10 border border-[#C9A96E]/20 col-span-1'
                    : 'bg-white/5 border border-white/5'
                }`}
              >
                <metric.icon size={16} className={`${metric.color} mb-3 opacity-70`} />
                <p className={`font-bold ${metric.size === 'large' ? 'text-3xl' : 'text-2xl'} text-white mb-1`}>
                  {metric.prefix}
                  {metric.value >= 1000
                    ? counts[i].toLocaleString('pt-BR')
                    : counts[i]}
                  {metric.suffix}
                </p>
                <p className="text-white/40 text-xs leading-snug">{metric.label}</p>
              </motion.div>
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
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${bar.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                    className="w-full rounded-t-md"
                    style={{
                      background:
                        i === chartData.length - 1
                          ? '#C9A96E'
                          : `rgba(201,169,110,${0.15 + i * 0.12})`,
                      minHeight: '4px',
                    }}
                  />
                  <span className="text-white/30 text-[10px]">{bar.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
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
        </motion.div>
      </div>
    </section>
  )
}
