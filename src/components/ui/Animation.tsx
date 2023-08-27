'use client'

import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

function Animation({
  className,
  key,
  fade,
  duration = 0.2,
  slideInLeft,
  slideInTop,
  slideInBottom,
  slideInRight,
  children,
  delay,
}: {
  className?: string
  key?: string | number
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
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const isInView = useInView(ref)
  return (
    <motion.div
      className={className}
      key={key ?? undefined}
      transition={{
        delay,
        duration,
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
      viewport={{ once: true, amount: 0.9, margin: '10px' }}
      ref={ref}
    >
      {children}
    </motion.div>
  )
}

export default Animation
