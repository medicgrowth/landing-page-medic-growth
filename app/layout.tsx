import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const _playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Medic Growth — Marketing que gera pacientes particulares',
  description:
    'A Medic Growth integra Marketing, CRM e Inteligência Comercial para transformar investimento em crescimento previsível para clínicas e médicos.',
  keywords: [
    'marketing médico',
    'marketing para clínicas',
    'médicos particulares',
    'assessoria médica',
    'tráfego pago médico',
    'CRM médico',
    'agendamento pacientes',
  ],
  authors: [{ name: 'Medic Growth' }],
  openGraph: {
    title: 'Medic Growth — Marketing que gera pacientes particulares',
    description:
      'Marketing, CRM e Inteligência Comercial para crescimento previsível de clínicas e médicos.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Medic Growth',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medic Growth — Marketing que gera pacientes particulares',
    description:
      'Marketing, CRM e Inteligência Comercial para crescimento previsível de clínicas e médicos.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0D2625',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <head />
      <body className={`antialiased font-sans ${_inter.variable} ${_playfair.variable}`}>
        {children}
      </body>
    </html>
  )
}
