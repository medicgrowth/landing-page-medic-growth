import { cn } from '@/lib/utils'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'none'
  duration?: number
}

/**
 * FadeIn — server-rendered, always visible.
 * Applies a CSS animation on load so above-fold content fades in gracefully.
 * Below-fold content is always fully visible (no JS required).
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 550,
}: FadeInProps) {
  return (
    <div
      className={cn(className)}
      style={{
        animation: `fade-up ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms both`,
      }}
    >
      {children}
    </div>
  )
}
