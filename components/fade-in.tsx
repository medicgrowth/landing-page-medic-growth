'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 600,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -1px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const translateMap = {
    up: 'translate-y-5',
    down: '-translate-y-5',
    left: 'translate-x-5',
    right: '-translate-x-5',
    none: '',
  }

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all',
        !visible ? `opacity-0 ${translateMap[direction]}` : 'opacity-100 translate-x-0 translate-y-0',
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: visible ? `${delay}ms` : '0ms',
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {children}
    </div>
  )
}
