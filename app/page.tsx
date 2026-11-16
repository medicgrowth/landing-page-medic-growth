'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Logos } from '@/components/logos'
import { WhoWeAre } from '@/components/who-we-are'
import { Differentials } from '@/components/differentials'
import { ForWho } from '@/components/for-who'
import { WhatWeDeliver } from '@/components/what-we-deliver'
import { HowItWorks } from '@/components/how-it-works'
import { Case } from '@/components/case'
import { Planning } from '@/components/planning'
import { WhyUs } from '@/components/why-us'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { LanguageProvider, type Language } from '@/components/language-provider'

function LandingPage() {
  const searchParams = useSearchParams()
  const initialLanguage: Language = searchParams.get('lang') === 'es' ? 'es' : 'pt'

  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <main id="page-content">
        <Navbar />
        <Hero />
        <Logos />
        <WhoWeAre />
        <Differentials />
        <ForWho />
        <WhatWeDeliver />
        <HowItWorks />
        <Case />
        <Planning />
        <WhyUs />
        <CTASection />
        <Footer />
      </main>
    </LanguageProvider>
  )
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <LandingPage />
    </Suspense>
  )
}
