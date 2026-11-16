'use client'

import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export type Language = 'pt' | 'es'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const translations: Record<string, string> = {
  'Quem Somos': 'Quiénes somos',
  'Serviços': 'Servicios',
  'Como Funciona': 'Cómo funciona',
  'Como funciona': 'Cómo funciona',
  'Case': 'Casos de éxito',
  'Falar no Whatsapp': 'Hablar por WhatsApp',
  'Fechar menu': 'Cerrar menú',
  'Abrir menu': 'Abrir menú',
  'Assessoria em Marketing Médico': 'Asesoría de marketing médico',
  'Otimize a jornada e atraia pacientes particulares, sem achismos.': 'Optimiza el recorrido y capta pacientes privados, con decisiones basadas en datos.',
  'A Medic Growth integra Marketing e Inteligência Comercial para transformar investimento em crescimento previsível para clínicas e médicos.': 'Medic Growth integra marketing y gestión comercial para convertir la inversión en crecimiento previsible para vuestra clínica.',
  'Agendar Diagnóstico': 'Solicitar Diagnóstico',
  'Ver Case de Sucesso': 'Ver caso de éxito',
  'A escolha de clínicas com mais de 30 anos de história.': 'La elección de clínicas con más de 30 años de historia.',
  'Dashboard': 'Panel de control',
  'Visão Geral': 'Vista general',
  'Ao Vivo': 'En directo',
  'ROI Médio': 'ROI medio',
  'retorno sobre investimento': 'retorno de la inversión',
  'Leads': 'Contactos',
  'leads qualificados/mês': 'contactos cualificados/mes',
  'Agendamentos': 'Citas',
  'novas consultas/mês': 'nuevas consultas/mes',
  'Conversão': 'Conversión',
  'taxa de agendamento': 'tasa de cita',
  'Faturamento': 'Facturación',
  'Conversão do funil': 'Conversión del embudo',
  'Impressões': 'Impresiones',
  'Cliques': 'Clics',
  'Pacientes': 'Pacientes',
  'Investimento': 'Inversión',
  'Faturamento gerado': 'Facturación generada',
  'Médica Dermatologista': 'Dermatóloga',
  'ROI médio': 'ROI medio',
  'Leads/mês': 'Contactos/mes',
  'Clientes que já confiam': 'Clínicas que ya confían en nosotros',
  'Anos de especialização em marketing médico': 'Años de especialización en marketing médico',
  'Clínicas e médicos atendidos': 'Clínicas y profesionales atendidos',
  'ROI médio comprovado em cases reais': 'ROI medio demostrado en casos reales',
  'Muito além do tráfego pago.': 'Mucho más que publicidad de pago.',
  'A Medic Growth conecta marketing, atendimento e gestão comercial para construir uma operação previsível de aquisição de pacientes particulares. Não gerenciamos campanhas — construímos máquinas de crescimento.': 'Medic Growth conecta marketing, atención y gestión comercial para construir un sistema previsible de captación de pacientes privados. No nos limitamos a gestionar campañas: creamos motores de crecimiento.',
  'Integração completa': 'Integración completa',
  'Operação de Crescimento': 'Sistema de crecimiento',
  'Tráfego Pago': 'Publicidad de pago',
  'Landing Page': 'Página de captación',
  'CRM & Funil': 'CRM y embudo',
  'Atendimento Comercial': 'Atención comercial',
  'Dashboards & Dados': 'Paneles y datos',
  'Resultado final': 'Resultado final',
  'Crescimento Previsível': 'Crecimiento previsible',
  'Nosso diferencial': 'Nuestro valor diferencial',
  'O que nos torna diferentes.': 'Lo que nos hace diferentes.',
  'Marketing orientado por dados': 'Marketing basado en datos',
  'Cada decisão é baseada em números reais. Dashboards em tempo real, rastreamento completo e relatórios detalhados.': 'Cada decisión se basa en datos reales. Paneles en tiempo real, seguimiento completo e informes detallados.',
  'CRM e Funil': 'CRM y embudo',
  'Estruturamos o funil comercial completo, desde o primeiro clique até a confirmação da consulta.': 'Estructuramos todo el embudo comercial, desde el primer clic hasta la confirmación de la cita.',
  'Posicionamento Estratégico': 'Posicionamiento estratégico',
  'Posicionamos sua clínica ou especialidade de forma diferenciada no mercado de saúde particular.': 'Posicionamos vuestra clínica o especialidad de forma diferencial en el mercado sanitario privado.',
  'Treinamento e suporte para que sua equipe converta leads em pacientes com mais eficiência.': 'Formación y acompañamiento para que vuestro equipo convierta contactos en pacientes con mayor eficacia.',
  'Dashboards Inteligentes': 'Paneles inteligentes',
  'Visualização clara de todos os dados da sua operação — tráfego, conversão, ROI e faturamento.': 'Una visión clara de todos los datos de vuestra actividad: tráfico, conversión, ROI y facturación.',
  'Otimização Contínua': 'Optimización continua',
  'Revisão constante de campanhas, criativos e processos para melhorar resultados mês a mês.': 'Revisión constante de campañas, creatividades y procesos para mejorar los resultados mes a mes.',
  'Para quem é': 'Para quién es',
  'Para médicos e clínicas que enfrentam desafios reais.': 'Para profesionales y clínicas que afrontan retos reales.',
  'Médicos Especialistas': 'Especialistas médicos',
  'Dermatologistas, Ortopedistas, Cardiologistas e outras especialidades que atendem particular.': 'Dermatólogos, traumatólogos, cardiólogos y otras especialidades que atienden a pacientes privados.',
  'Clínicas Particulares': 'Clínicas privadas',
  'Clínicas multi ou monoespecialistas que precisam escalar com previsibilidade.': 'Clínicas multiespecialidad o monográficas que quieren crecer de forma previsible.',
  'Consultórios em expansão': 'Consultas en expansión',
  'Profissionais que querem sair do modelo convênio e construir uma carteira de pacientes própria.': 'Profesionales que quieren dejar atrás las aseguradoras y crear su propia cartera de pacientes.',
  'Dependem excessivamente de convênios': 'Dependencia excesiva de aseguradoras',
  'Querem aumentar o volume de pacientes particulares': 'Quieren captar más pacientes privados',
  'Precisam organizar o processo de atendimento': 'Necesitan organizar el proceso de atención',
  'Investem em marketing sem previsibilidade de retorno': 'Invierten en marketing sin previsión de retorno',
  'Não sabem onde está o gargalo da operação': 'No saben dónde está el cuello de botella',
  'Têm baixa conversão de leads em pacientes': 'Convierten pocos contactos en pacientes',
  'Reconhece algum desses cenários?': '¿Os resulta familiar alguna de estas situaciones?',
  'Se você se identificou com pelo menos um desses cenários, a Medic Growth pode transformar sua operação comercial.': 'Si os identificáis con alguna de estas situaciones, Medic Growth puede transformar la gestión comercial de vuestra clínica.',
  'Quero meu diagnóstico gratuito': 'Solicitar Diagnóstico',
  'O que entregamos': 'Qué ofrecemos',
  'Estratégia Personalizada': 'Estrategia personalizada',
  'Gestão de Tráfego': 'Gestión de tráfico',
  'Google Ads': 'Google Ads',
  'Meta Ads': 'Meta Ads',
  'Landing Pages': 'Páginas de captación',
  'Automação': 'Automatización',
  'Funil Comercial': 'Embudo comercial',
  'Treinamento Comercial': 'Formación comercial',
  'Relatórios': 'Informes',
  'Consultoria': 'Consultoría',
  'Suporte Contínuo': 'Acompañamiento continuo',
  'Leads.': 'Contactos.',
  'Agendamentos.': 'Citas.',
  'Pacientes.': 'Pacientes.',
  'Uma solução integrada que cobre toda a jornada — da atração ao agendamento confirmado — com rastreabilidade total de resultados.': 'Una solución integrada que cubre todo el recorrido, desde la captación hasta la cita confirmada, con trazabilidad completa.',
  'Ver como funciona': 'Descubre cómo funciona',
  'Diagnóstico': 'Diagnóstico',
  'Analisamos sua presença digital, funil atual, posicionamento e mercado para identificar os pontos de alavanca.': 'Analizamos vuestra presencia digital, embudo, posicionamiento y mercado para detectar oportunidades de crecimiento.',
  'Análise completa em 48h': 'Análisis completo en 48 h',
  'Planejamento': 'Planificación',
  'Criamos um plano estratégico personalizado com metas, canais, cronograma e estrutura de campanhas.': 'Diseñamos un plan estratégico a medida con objetivos, canales, calendario y estructura de campañas.',
  'Documento estratégico detalhado': 'Documento estratégico detallado',
  'Implementação': 'Implementación',
  'Estruturamos tudo: campanhas, landing pages, CRM, automações e processos de atendimento.': 'Lo ponemos todo en marcha: campañas, páginas de captación, CRM, automatizaciones y procesos de atención.',
  'Go-live em até 15 dias': 'Lanzamiento en un máximo de 15 días',
  'Otimização': 'Optimización',
  'Monitoramos resultados diariamente e ajustamos campanhas, criativos e processos para maximizar ROI.': 'Supervisamos los resultados a diario y ajustamos campañas, creatividades y procesos para maximizar el ROI.',
  'Otimização semanal': 'Optimización semanal',
  'Escala': 'Escalado',
  'Com a operação validada, escalamos o investimento de forma previsível e controlada.': 'Una vez validado el sistema, aumentamos la inversión de forma previsible y controlada.',
  'Crescimento sustentável': 'Crecimiento sostenible',
  'Do diagnóstico à escala.': 'Del diagnóstico al crecimiento.',
  'Pronto para começar?': '¿Preparados para empezar?',
  'Agende seu diagnóstico gratuito e receba um plano personalizado em 48h.': 'Solicitad un diagnóstico gratuito y recibid un plan a medida en 48 h.',
  'Case de sucesso': 'Caso de éxito',
  'Resultados reais.': 'Resultados reales.',
  'Números verificáveis.': 'Resultados medibles.',
  'Um caso de sucesso': 'Un caso de éxito',
  'Clínica particular — São Paulo': 'Clínica privada — São Paulo',
  'Leads gerados': 'Contactos captados',
  'Retorno sobre investimento': 'Retorno de la inversión',
  'Tempo de resultado': 'Tiempo para obtener resultados',
  '90 dias': '90 días',
  'Evolução do faturamento': 'Evolución de la facturación',
  'Quer resultados similares para a sua clínica?': '¿Queréis resultados similares para vuestra clínica?',
  'Quero meu diagnóstico': 'Solicitar Diagnóstico',
  'Documento': 'Documento',
  'Planejamento Estratégico Personalizado': 'Plan estratégico personalizado',
  'Gratuito': 'Gratuito',
  'Diagnóstico completo da situação atual': 'Diagnóstico completo de la situación actual',
  'Plano de ação com metas e cronograma': 'Plan de acción con objetivos y calendario',
  'Estrutura das campanhas de tráfego': 'Estructura de las campañas de tráfico',
  'Mapeamento do funil comercial': 'Análisis del embudo comercial',
  'Estratégia de posicionamento digital': 'Estrategia de posicionamiento digital',
  'Entregue em até': 'Entrega en un máximo de',
  '48 horas': '48 horas',
  'após o diagnóstico': 'tras el diagnóstico',
  'Um plano feito sob medida para sua clínica.': 'Un plan a medida para vuestra clínica.',
  'Antes de qualquer campanha, mapeamos sua realidade, seus objetivos e os caminhos mais eficientes para chegar lá. O planejamento estratégico é a base de tudo — e você recebe gratuitamente no diagnóstico.': 'Antes de lanzar campañas, analizamos vuestra situación, objetivos y las vías más eficaces para alcanzarlos. La planificación estratégica es la base y la recibiréis gratis con el diagnóstico.',
  'Diagnóstico detalhado do cenário atual': 'Diagnóstico detallado de la situación actual',
  'Identificação dos principais gargalos': 'Identificación de los principales obstáculos',
  'Estratégia personalizada por especialidade': 'Estrategia a medida para cada especialidad',
  'Previsão realista de resultados': 'Previsión realista de resultados',
  'Por que a Medic Growth': 'Por qué Medic Growth',
  'Planejamento Estratégico': 'Planificación estratégica',
  'PLANEJAMENTO ESTRATÉGICO': 'PLANIFICACIÓN ESTRATÉGICA',
  'A diferença está na integração. Não terceirizamos partes do trabalho — assumimos a operação comercial completa da sua clínica.': 'La diferencia está en la integración. No externalizamos partes del trabajo: asumimos la gestión comercial completa de vuestra clínica.',
  'Construímos operações, não campanhas.': 'Creamos sistemas, no solo campañas.',
  'Cada ação é mensurada. Sem achismo, sem desperdício — apenas decisões baseadas em métricas reais.': 'Medimos cada acción. Sin suposiciones ni desperdicio: solo decisiones basadas en métricas reales.',
  'Integração entre marketing e vendas': 'Integración entre marketing y ventas',
  'Conectamos tráfego pago, atendimento e CRM para uma operação coesa e sem furos no funil.': 'Conectamos publicidad, atención y CRM para una gestión comercial coordinada y sin fisuras.',
  'Especialização em clínicas particulares': 'Especialización en clínicas privadas',
  'Não somos uma agência genérica. Conhecemos profundamente o mercado de saúde privada.': 'No somos una agencia generalista. Conocemos a fondo el sector sanitario privado.',
  'Melhoria contínua': 'Mejora continua',
  'Revisamos e otimizamos a operação constantemente para melhorar resultados mês a mês.': 'Revisamos y optimizamos la actividad continuamente para mejorar los resultados mes a mes.',
  'Acompanhamento próximo': 'Acompañamiento cercano',
  'Acesso direto à equipe, reuniões periódicas e suporte ativo — nada de atendimento engessado.': 'Contacto directo con el equipo, reuniones periódicas y apoyo activo, sin procesos impersonales.',
  'Pronto para crescer?': '¿Preparados para crecer?',
  'Agende seu diagnóstico gratuito.': 'Solicitad un diagnóstico gratuito.',
  'Começar agora': 'Empezar ahora',
  'Fale conosco': 'Hablemos',
  'Vamos construir um crescimento previsível para sua clínica?': '¿Construimos un crecimiento previsible para vuestra clínica?',
  'Agende um diagnóstico estratégico e descubra onde estão as oportunidades de crescimento para a sua clínica ou consultório.': 'Solicitad un diagnóstico estratégico y descubrid las oportunidades de crecimiento de vuestra clínica o consulta.',
  'Diagnóstico 100% gratuito e sem compromisso': 'Diagnóstico 100 % gratuito y sin compromiso',
  'Planejamento personalizado em até 48h': 'Planificación a medida en un máximo de 48 h',
  'Atendimento por especialistas em marketing médico': 'Atención por especialistas en marketing médico',
  'Solicitação recebida!': '¡Solicitud recibida!',
  'Nossa equipe entrará em contato em até 24 horas para agendar seu diagnóstico estratégico gratuito.': 'Nuestro equipo se pondrá en contacto en un máximo de 24 horas para concertar vuestro diagnóstico estratégico gratuito.',
  'Nome completo *': 'Nombre completo *',
  'Especialidade *': 'Especialidad *',
  'WhatsApp *': 'WhatsApp *',
  'Cidade *': 'Ciudad *',
  'E-mail *': 'Correo electrónico *',
  'Enviando...': 'Enviando...',
  'Quero meu Diagnóstico': 'Solicitar Diagnóstico',
  'Sem spam. Seus dados são protegidos e não serão compartilhados.': 'Sin spam. Tus datos están protegidos y no se compartirán.',
  'Estratégia de Marketing': 'Estrategia de marketing',
  'Contato': 'Contacto',
  'Todos os direitos reservados.': 'Todos los derechos reservados.',
  'Medic Growth. Todos os direitos reservados.': 'Medic Growth. Todos los derechos reservados.',
  'Assessoria especializada em Marketing para médicos e clínicas particulares. Integramos Marketing, CRM e Inteligência Comercial para crescimento previsível.': 'Asesoría especializada en marketing para profesionales y clínicas privadas. Integramos marketing, CRM y gestión comercial para lograr un crecimiento previsible.',
  'Voltar ao topo': 'Volver arriba',
  'Jan': 'Ene',
  'Fev': 'Feb',
  'Mar': 'Mar',
  'Abr': 'Abr',
  'Mai': 'May',
  'Jun': 'Jun',
  'R$10.434': '1.850 €',
  'R$180.560': '31.450 €',
  'R$180k': '31.450 €',
}

function applyTranslations(root: HTMLElement, language: Language, originalText: WeakMap<Text, string>, originalAttributes: WeakMap<Element, Map<string, string>>) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  let node: Node | null
  while ((node = walker.nextNode())) {
    const textNode = node as Text
    if (!originalText.has(textNode)) originalText.set(textNode, textNode.nodeValue ?? '')
    const original = originalText.get(textNode) ?? ''
    const trimmed = original.trim()
    const translated = language === 'es' ? translations[trimmed] : trimmed
    if (translated !== undefined && translated !== trimmed) {
      const leading = original.match(/^\s*/)?.[0] ?? ''
      const trailing = original.match(/\s*$/)?.[0] ?? ''
      const next = `${leading}${translated}${trailing}`
      if (textNode.nodeValue !== next) textNode.nodeValue = next
    } else if (language === 'pt' && textNode.nodeValue !== original) {
      textNode.nodeValue = original
    }
  }

  const elements = root.querySelectorAll<HTMLElement>('*')
  for (const element of elements) {
    const attrNames = ['placeholder', 'aria-label', 'title', 'href']
    for (const name of attrNames) {
      if (!element.hasAttribute(name)) continue
      let values = originalAttributes.get(element)
      if (!values) {
        values = new Map()
        originalAttributes.set(element, values)
      }
      if (!values.has(name)) values.set(name, element.getAttribute(name) ?? '')
      const original = values.get(name) ?? ''
      let translated = original
      if (name === 'placeholder' && language === 'es') {
        translated = ({
          'Dr. João Silva': 'Dr. Luis García',
          'Dermatologia, Ortopedia...': 'Dermatología, traumatología...',
          '(11) 99999-9999': '+34 600 000 000',
          'São Paulo': 'Madrid / Barcelona',
          'contato@clinica.com.br': 'contacto@clinica.es',
        } as Record<string, string>)[original] ?? original
      }
      if (name === 'href' && original.startsWith('https://wa.me/')) {
        const text = language === 'es'
          ? 'Hola, me gustaría solicitar un diagnóstico gratuito para mi clínica.'
          : 'Olá! Vim através do site e gostaria de solicitar um diagnóstico para a minha clínica.'
        translated = `https://wa.me/5521975737591?text=${encodeURIComponent(text)}`
      }
      if (name === 'aria-label' && language === 'es') {
        translated = original
          .replace('Navegação principal', 'Navegación principal')
          .replace('Menu mobile', 'Menú móvil')
          .replace('Clientes da Medic Growth', 'Clientes de Medic Growth')
          .replace('Medic Growth - página inicial', 'Medic Growth - página de inicio')
      }
      if (element.getAttribute(name) !== translated) element.setAttribute(name, translated)
    }
  }
}

export function LanguageProvider({ children, initialLanguage = 'pt' }: { children: React.ReactNode; initialLanguage?: Language }) {
  const [language, setCurrentLanguage] = useState<Language>(initialLanguage)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const textOriginals = useRef(new WeakMap<Text, string>())
  const attrOriginals = useRef(new WeakMap<Element, Map<string, string>>())

  useEffect(() => {
    const root = document.getElementById('page-content')
    if (!root) return
    const update = () => applyTranslations(root, language, textOriginals.current, attrOriginals.current)
    update()
    const observer = new MutationObserver(update)
    observer.observe(root, { childList: true, subtree: true, characterData: true })
    document.documentElement.lang = language === 'es' ? 'es-ES' : 'pt-BR'
    return () => observer.disconnect()
  }, [language])

  const setLanguage = (next: Language) => {
    setCurrentLanguage(next)
    const params = new URLSearchParams(searchParams.toString())
    params.set('lang', next)
    const query = params.toString()
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false })
  }

  const value = useMemo(() => ({ language, setLanguage }), [language])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
