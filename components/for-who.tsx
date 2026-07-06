'use client'

import { FadeIn } from '@/components/fade-in'
import { CheckCircle2 } from 'lucide-react'

const challenges = [
  'Dependem excessivamente de convênios',
  'Querem aumentar o volume de pacientes particulares',
  'Precisam organizar o processo de atendimento',
  'Investem em marketing sem previsibilidade de retorno',
  'Não sabem onde está o gargalo da operação',
  'Têm baixa conversão de leads em pacientes',
]

const profiles = [
  { title: 'Médicos Especialistas', desc: 'Dermatologistas, Ortopedistas, Cardiologistas e outras especialidades que atendem particular.' },
  { title: 'Clínicas Particulares', desc: 'Clínicas multi ou monoespecialistas que precisam escalar com previsibilidade.' },
  { title: 'Consultórios em expansão', desc: 'Profissionais que querem sair do modelo convênio e construir uma carteira de pacientes própria.' },
]

export function ForWho() {
  return (
    <section className="py-28 lg:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="max-w-2xl mb-16">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-6 h-px bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs font-medium tracking-[0.2em] uppercase">
                Para quem é
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0D2625] leading-[1.15] text-pretty">
              Para médicos e clínicas que enfrentam desafios reais.
            </h2>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Profiles */}
          <div className="flex flex-col gap-5">
            {profiles.map((profile, i) => (
              <FadeIn key={profile.title} delay={i * 100} direction="left">
                <div className="group flex gap-5 p-6 rounded-2xl border border-[#E8E6E0] hover:border-[#C9A96E]/30 hover:bg-[#F7F6F2] transition-all duration-300 cursor-default">
                  <div className="w-10 h-10 rounded-full bg-[#0D2625] flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-sm font-serif">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-[#0D2625] font-semibold text-base mb-1">{profile.title}</h3>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed">{profile.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Right: Challenges list */}
          <div>
            <FadeIn delay={0}>
              <p className="text-[#9CA3AF] text-sm font-medium uppercase tracking-widest mb-8">
                Reconhece algum desses cenários?
              </p>
            </FadeIn>

            <div className="flex flex-col gap-4">
              {challenges.map((item, i) => (
                <FadeIn key={item} delay={60 + i * 60} direction="right">
                  <div className="flex items-start gap-4 group">
                    <CheckCircle2
                      size={18}
                      className="text-[#C9A96E] mt-0.5 shrink-0 group-hover:text-[#0D2625] transition-colors duration-200"
                    />
                    <p className="text-[#374151] text-base leading-snug">{item}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={400}>
              <div className="mt-10 p-6 bg-[#0D2625] rounded-2xl">
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Se você se identificou com pelo menos um desses cenários, a Medic Growth pode
                  transformar sua operação comercial.
                </p>
                <a
                  href="#cta"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center gap-2 text-[#C9A96E] text-sm font-semibold hover:gap-4 transition-all duration-200"
                >
                  Quero meu diagnóstico gratuito
                  <span>→</span>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
