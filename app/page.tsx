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

export default function Home() {
  return (
    <main>
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
  )
}
