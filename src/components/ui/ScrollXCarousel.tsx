import * as React from 'react'
import {
  type HTMLMotionProps,
  motion,
  type MotionValue,
  useScroll,
  useTransform,
} from 'framer-motion'

interface ScrollXCarouselContextValue {
  scrollYProgress: MotionValue<number>
}

const ScrollXCarouselContext =
  React.createContext<ScrollXCarouselContextValue | null>(null)

export function useScrollXCarousel() {
  const context = React.useContext(ScrollXCarouselContext)
  if (!context) {
    throw new Error('useScrollXCarousel must be used within a ScrollXCarousel')
  }
  return context
}

export function ScrollXCarousel({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const carouselRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ['start start', 'end end'],
  })

  return (
    <ScrollXCarouselContext.Provider value={{ scrollYProgress }}>
      <div
        ref={carouselRef}
        className={`scroll-x-carousel ${className}`.trim()}
        {...props}
      >
        {children}
      </div>
    </ScrollXCarouselContext.Provider>
  )
}

export function ScrollXCarouselContainer({
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`scroll-x-carousel__container ${className}`.trim()}
      {...props}
    />
  )
}

export function ScrollXCarouselWrap({
  className = '',
  style,
  xRange = ['0%', '-45%'],
  ...props
}: HTMLMotionProps<'div'> & {
  xRange?: string[]
}) {
  const { scrollYProgress } = useScrollXCarousel()
  const x = useTransform(scrollYProgress, [0, 1], xRange)

  return (
    <motion.div
      className={`scroll-x-carousel__wrap ${className}`.trim()}
      style={{ x, ...style }}
      {...props}
    />
  )
}
