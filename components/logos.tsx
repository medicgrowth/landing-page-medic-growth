'use client'

import { motion } from 'framer-motion'

const clients = [
  { name: 'UFRJ', abbr: 'UFRJ' },
  { name: 'Sandoz', abbr: 'SANDOZ' },
  { name: 'PhysioPlace', abbr: 'PhysioPlace' },
  { name: 'Workshop FMF', abbr: 'Workshop FMF' },
  { name: 'Leidicio de Chiara', abbr: 'Leidicio de Chiara' },
  { name: 'Gunther Kissmann', abbr: 'Gunther Kissmann' },
]

export function Logos() {
  return (
    <section className="bg-white border-b border-[#E8E6E0] py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-medium tracking-[0.2em] uppercase text-[#9CA3AF] mb-10"
        >
          Confiaram no nosso trabalho
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group"
            >
              <div className="px-5 py-3 rounded-lg border border-[#E8E6E0] bg-white grayscale hover:grayscale-0 transition-all duration-300 hover:border-[#C9A96E]/40 hover:shadow-sm">
                <span className="text-[#9CA3AF] group-hover:text-[#0D2625] text-sm font-semibold tracking-wide transition-colors duration-300">
                  {client.abbr}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
