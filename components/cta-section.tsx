'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'

export function CTASection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    specialty: '',
    whatsapp: '',
    email: '',
    city: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="cta" className="py-28 lg:py-36 bg-[#0D2625] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C9A96E]/5 rounded-full" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/[0.02] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Headline */}
          <div className="lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="w-6 h-px bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs font-medium tracking-[0.2em] uppercase">
                Fale conosco
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white leading-[1.1] text-pretty mb-6"
            >
              Vamos construir um crescimento previsível para sua clínica?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/50 text-base leading-relaxed mb-10"
            >
              Agende um diagnóstico estratégico e descubra onde estão as oportunidades
              de crescimento para a sua clínica ou consultório.
            </motion.p>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col gap-3"
            >
              {[
                'Diagnóstico 100% gratuito e sem compromisso',
                'Planejamento personalizado em até 48h',
                'Atendimento por especialistas em marketing médico',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={15} className="text-[#C9A96E] shrink-0" />
                  <p className="text-white/60 text-sm">{item}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {submitted ? (
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col items-center text-center gap-5">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center"
                >
                  <CheckCircle2 size={30} className="text-green-400" />
                </motion.div>
                <h3 className="text-white font-serif font-bold text-2xl">Solicitação recebida!</h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                  Nossa equipe entrará em contato em até 24 horas para agendar seu
                  diagnóstico estratégico gratuito.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 flex flex-col gap-5"
              >
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-white/60 text-xs font-medium uppercase tracking-wide">
                    Nome completo *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Dr. João Silva"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#C9A96E]/50 focus:bg-white/8 transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="specialty" className="text-white/60 text-xs font-medium uppercase tracking-wide">
                    Especialidade *
                  </label>
                  <input
                    id="specialty"
                    name="specialty"
                    type="text"
                    required
                    value={form.specialty}
                    onChange={handleChange}
                    placeholder="Dermatologia, Ortopedia..."
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#C9A96E]/50 transition-all duration-200"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="whatsapp" className="text-white/60 text-xs font-medium uppercase tracking-wide">
                      WhatsApp *
                    </label>
                    <input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      required
                      value={form.whatsapp}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#C9A96E]/50 transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="city" className="text-white/60 text-xs font-medium uppercase tracking-wide">
                      Cidade *
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      value={form.city}
                      onChange={handleChange}
                      placeholder="São Paulo"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#C9A96E]/50 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-white/60 text-xs font-medium uppercase tracking-wide">
                    E-mail *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="contato@clinica.com.br"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#C9A96E]/50 transition-all duration-200"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group mt-2 flex items-center justify-center gap-2.5 bg-white text-[#0D2625] font-semibold py-4 rounded-full text-sm hover:bg-[#C9A96E] hover:text-white transition-all duration-300 hover:shadow-xl active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Quero meu Diagnóstico
                    </>
                  )}
                </button>

                <p className="text-white/25 text-xs text-center">
                  Sem spam. Seus dados são protegidos e não serão compartilhados.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
