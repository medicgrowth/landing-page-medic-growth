'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Globe, Link2, MessageCircle, ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-white border-t border-[#E8E6E0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-verde-fundo-transparente-Lljt8iwS5lv8GXB91928G7jW5ESS5V.png"
              alt="Medic Growth"
              width={160}
              height={48}
              className="h-9 w-auto object-contain mb-5"
            />
            <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xs mb-6">
              Assessoria especializada em Marketing para médicos e clínicas particulares.
              Integramos Marketing, CRM e Inteligência Comercial para crescimento previsível.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/medicgrowth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Medic Growth"
                className="w-9 h-9 rounded-full bg-[#F7F6F2] flex items-center justify-center text-[#6B7280] hover:bg-[#0D2625] hover:text-white transition-all duration-300"
              >
                <Globe size={15} />
              </a>
              <a
                href="https://linkedin.com/company/medicgrowth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Medic Growth"
                className="w-9 h-9 rounded-full bg-[#F7F6F2] flex items-center justify-center text-[#6B7280] hover:bg-[#0D2625] hover:text-white transition-all duration-300"
              >
                <Link2 size={15} />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Medic Growth"
                className="w-9 h-9 rounded-full bg-[#F7F6F2] flex items-center justify-center text-[#6B7280] hover:bg-[#25D366] hover:text-white transition-all duration-300"
              >
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[#0D2625] font-semibold text-sm mb-5 uppercase tracking-widest text-xs">
              Serviços
            </p>
            <ul className="flex flex-col gap-3">
              {[
                'Estratégia de Marketing',
                'Tráfego Pago',
                'CRM e Funil',
                'Landing Pages',
                'Consultoria',
                'Relatórios',
              ].map((item) => (
                <li key={item}>
                  <span className="text-[#9CA3AF] text-sm hover:text-[#0D2625] transition-colors duration-200 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#0D2625] font-semibold text-sm mb-5 uppercase tracking-widest text-xs">
              Contato
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:contato@medicgrowth.com.br"
                  className="text-[#9CA3AF] text-sm hover:text-[#0D2625] transition-colors duration-200"
                >
                  contato@medicgrowth.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9CA3AF] text-sm hover:text-[#0D2625] transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/medicgrowth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9CA3AF] text-sm hover:text-[#0D2625] transition-colors duration-200"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/medicgrowth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9CA3AF] text-sm hover:text-[#0D2625] transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <a
                href="#cta"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 bg-[#0D2625] text-white font-semibold px-5 py-2.5 rounded-full text-xs hover:bg-[#1a3d3b] transition-all duration-300 active:scale-95"
              >
                Agendar Diagnóstico
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#E8E6E0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#C4C2BC] text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Medic Growth. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="group flex items-center gap-2 text-[#9CA3AF] text-xs hover:text-[#0D2625] transition-colors duration-200"
          >
            Voltar ao topo
            <div className="w-6 h-6 rounded-full border border-[#E8E6E0] flex items-center justify-center group-hover:border-[#0D2625] transition-colors duration-200">
              <ArrowUp size={10} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}
