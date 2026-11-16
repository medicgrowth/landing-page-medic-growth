'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

function LanguageSwitcher({ inverse = false }: { inverse?: boolean }) {
  const { language, setLanguage } = useLanguage()

  return (
    <div className={`inline-flex items-center gap-1 rounded-full border p-1 ${inverse ? 'border-white/20 bg-white/5' : 'border-[#E8E6E0] bg-white'}`} aria-label="Seleccionar idioma / Selecionar idioma">
      {(['pt', 'es'] as const).map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => setLanguage(locale)}
          aria-label={locale === 'pt' ? 'Português' : 'Español de España'}
          aria-pressed={language === locale}
          className={`flex items-center gap-1.5 rounded-full px-2 py-1 text-[10px] font-semibold tracking-wide transition-colors ${
            language === locale
              ? inverse ? 'bg-white/15 text-white' : 'bg-[#0D2625] text-white'
              : inverse ? 'text-white/60 hover:text-white' : 'text-[#6B7280] hover:text-[#0D2625]'
          }`}
        >
          <span
            aria-hidden="true"
            className={`relative inline-flex h-3.5 w-3.5 shrink-0 overflow-hidden rounded-full border ${inverse ? 'border-white/25' : 'border-black/10'} ${locale === 'pt' ? 'bg-[#159447]' : 'bg-[#AA151B]'}`}
          >
            {locale === 'pt' ? (
              <span className="absolute left-[3px] top-[3px] h-2 w-2 rotate-45 bg-[#FFDF00]" />
            ) : (
              <span className="absolute inset-x-0 top-[4px] h-[5px] bg-[#F1BF00]" />
            )}
          </span>
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

const navLinks = [
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Case', href: '#case' },
]

export function Navbar() {
  const { language } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E8E6E0]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex-shrink-0"
            aria-label="Medic Growth - página inicial"
          >
            <Image
              src={
                scrolled
                  ? 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-verde-fundo-transparente-Lljt8iwS5lv8GXB91928G7jW5ESS5V.png'
                  : 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-off-white-fundo-transparente-GLEKx54qJvJyQKI8oAAWofFBV0Y6yS.png'
              }
              alt="Medic Growth"
              width={160}
              height={48}
              className="h-8 lg:h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:opacity-70 ${
                  scrolled ? 'text-[#111111]' : 'text-white/90'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/5521975737591?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20para%20a%20minha%20cl%C3%ADnica."
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${
                scrolled
                  ? 'bg-[#0D2625] text-white hover:bg-[#1a3d3b]'
                  : 'bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <MessageCircle size={16} aria-hidden="true" />
                Falar no Whatsapp
              </span>
            </a>
            <LanguageSwitcher inverse={!scrolled} />
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher inverse={!scrolled} />
            {/* Mobile Menu Toggle */}
            <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-[#111111] hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#0D2625] flex flex-col pt-20 pb-10 px-8"
          >
            <nav className="flex flex-col gap-6 mt-8" aria-label="Menu mobile">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-2xl font-serif text-white/90 text-left hover:text-white hover:text-[#C9A96E] transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <div className="mt-auto">
              <a
                href="https://wa.me/5521975737591?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20para%20a%20minha%20cl%C3%ADnica."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-[#0D2625] font-semibold py-4 rounded-full text-base hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Falar no Whatsapp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
