'use client'

import { motion } from 'framer-motion'
import React, { useRef } from 'react'

function Animation({
  className,
  key,
  fade,
  duration,
  slideInLeft,
  slideInTop,
  slideInBottom,
  slideInRight,
  children,
  delay,
}: {
  className?: string
  key?: string
  children: React.ReactNode
  fade?: boolean
  duration?: number
  slideInLeft?: boolean
  slideInTop?: boolean
  slideInBottom?: boolean
  slideInRight?: boolean
  delay?: number
}) {
  const ref = useRef(null)

  return (
    <motion.div
      className={className}
      key={key ?? undefined}
      transition={{
        delay: delay ?? 0,
        duration: duration ?? 0.5,
      }}
      initial={{
        opacity: fade ? 0 : 1,
        x: slideInLeft ? -100 : slideInRight ? 100 : 0,
        y: slideInBottom ? 100 : slideInTop ? -100 : 0,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      ref={ref}
    >
      {children}
    </motion.div>
  )
}

export default Animation
