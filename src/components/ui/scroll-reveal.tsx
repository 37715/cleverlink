'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function ScrollReveal({ 
  children, 
  className, 
  delay = 0,
  direction = 'up' 
}: ScrollRevealProps) {
  const directionVariants = {
    up: { y: 60, opacity: 0 },
    down: { y: -60, opacity: 0 },
    left: { x: 60, opacity: 0 },
    right: { x: -60, opacity: 0 }
  }

  return (
    <motion.div
      className={className}
      initial={directionVariants[direction]}
      whileInView={{
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }}
      viewport={{ once: true, margin: '-10%' }}
    >
      {children}
    </motion.div>
  )
}

export function FadeIn({ 
  children, 
  className, 
  delay = 0 
}: { 
  children: ReactNode, 
  className?: string, 
  delay?: number 
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1,
          delay: delay,
          ease: 'easeOut'
        }
      }}
      viewport={{ once: true, margin: '-10%' }}
    >
      {children}
    </motion.div>
  )
} 