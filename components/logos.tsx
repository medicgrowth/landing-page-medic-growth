'use client'

const clients = [
  {
    name: 'UFRJ',
    image: 'https://medicgrowth.com.br/wp-content/uploads/2026/09/1_logo_ufrj.png',
    href: 'https://www.instagram.com/ufrj.oficial/',
  },
  {
    name: 'Sandoz',
    image: 'https://medicgrowth.com.br/wp-content/uploads/2026/09/2_logo_sandoz.png',
    href: 'https://www.instagram.com/sandozbrasil/',
  },
  {
    name: 'Dra. Leticia',
    image: 'https://medicgrowth.com.br/wp-content/uploads/2026/09/3_logo_dra_leticia.png',
    href: 'https://www.instagram.com/draleticiadechiara/',
  },
  {
    name: 'PhysioPlace',
    image: 'https://medicgrowth.com.br/wp-content/uploads/2026/09/4_logo_physioplace.png',
    href: 'https://www.instagram.com/physioplacerj/',
  },
  {
    name: 'BV Dermatologia',
    image: 'https://medicgrowth.com.br/wp-content/uploads/2026/09/5_logo_bv_dermatologia.png',
    href: 'https://www.instagram.com/bvdermatologia/',
  },
  {
    name: 'Dra. Iana Simão',
    image: 'https://medicgrowth.com.br/wp-content/uploads/2026/09/6_logo_dra_iana_simao.png',
    href: 'https://www.instagram.com/ianasimao/',
  },
]

export function Logos() {
  return (
    <section className="bg-white border-b border-[#E8E6E0] py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-center text-xs font-medium tracking-[0.2em] uppercase text-[#9CA3AF] mb-10">
          Clientes que já confiam
        </p>

        <div className="overflow-hidden">
          <div className="flex w-max items-center gap-[52px] animate-marquee lg:w-full lg:flex-nowrap lg:animate-none lg:justify-center">
            {[...clients, ...clients].map((client, index) => (
              <a
                key={`${client.name}-${index}`}
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram de ${client.name}`}
                className={`flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 shrink-0 ${index >= clients.length ? 'lg:hidden' : ''}`}
              >
                <img
                  src={client.image}
                  alt={`Logo ${client.name}`}
                  className="h-[35px] w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
