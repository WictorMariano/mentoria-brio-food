import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'
import {
  ScrollXCarousel,
  ScrollXCarouselContainer,
  ScrollXCarouselWrap,
  useScrollXCarousel,
} from './ui/ScrollXCarousel'
import { galleryRowOne, galleryRowTwo, type GalleryImage } from '../data/gallery'

const GALLERY_EYEBROW = 'Influenciadores'
const GALLERY_TITLE = 'Como contratar influenciadores da maneira correta'

function GalleryCard({ src, alt }: GalleryImage) {
  return (
    <figure className="gallery-card">
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  )
}

function GalleryHeadingStatic() {
  return (
    <div className="gallery-heading">
      <p className="gallery-heading__eyebrow">{GALLERY_EYEBROW}</p>
      <h2>{GALLERY_TITLE}</h2>
    </div>
  )
}

function GalleryHeadingAnimated() {
  const { scrollYProgress } = useScrollXCarousel()
  const lockedRef = useRef(false)
  const effectiveProgress = useMotionValue(0)

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (progress >= 0.42) {
      lockedRef.current = true
      effectiveProgress.set(0.42)
      return
    }

    if (lockedRef.current) {
      if (progress <= 0.05) {
        lockedRef.current = false
        effectiveProgress.set(progress)
      } else {
        effectiveProgress.set(0.42)
      }
      return
    }

    effectiveProgress.set(progress)
  })

  const smoothProgress = useSpring(effectiveProgress, {
    stiffness: 55,
    damping: 28,
    mass: 0.45,
    restDelta: 0.001,
  })

  const eyebrowOpacity = useTransform(smoothProgress, [0, 0.18, 0.42], [1, 0.4, 0])
  const eyebrowY = useTransform(smoothProgress, [0, 0.42], [0, -14])
  const titleY = useTransform(smoothProgress, [0, 0.42], [0, 36])
  const titleScale = useTransform(smoothProgress, [0, 0.42], [1, 0.97])

  return (
    <div className="gallery-heading gallery-heading--animated">
      <div className="gallery-heading__slot">
        <motion.p
          className="gallery-heading__eyebrow"
          style={{ opacity: eyebrowOpacity, y: eyebrowY }}
        >
          {GALLERY_EYEBROW}
        </motion.p>
        <motion.h2 style={{ y: titleY, scale: titleScale }}>
          {GALLERY_TITLE}
        </motion.h2>
      </div>
    </div>
  )
}

function AutoMarqueeRow({
  items,
  reverse = false,
}: {
  items: GalleryImage[]
  reverse?: boolean
}) {
  const loop = [...items, ...items, ...items]

  return (
    <div className={`gallery-marquee ${reverse ? 'gallery-marquee--reverse' : ''}`}>
      <div className="gallery-marquee__track">
        {loop.map((item, index) => (
          <GalleryCard key={`${item.src}-${index}`} src={item.src} alt={item.alt} />
        ))}
      </div>
    </div>
  )
}

export function GallerySection() {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return (
      <section id="galeria" className="gallery-section gallery-section--static">
        <GalleryHeadingStatic />
        <div className="gallery-section__rows">
          <AutoMarqueeRow items={galleryRowOne} />
          <AutoMarqueeRow items={galleryRowTwo} reverse />
        </div>
      </section>
    )
  }

  return (
    <section id="galeria" className="gallery-section">
      <ScrollXCarousel className="gallery-section__scroll">
        <ScrollXCarouselContainer className="gallery-section__sticky">
          <div className="gallery-section__inner">
            <GalleryHeadingAnimated />
            <div className="gallery-section__rows">
              <div className="gallery-section__row">
                <ScrollXCarouselWrap
                  xRange={['8%', '-55%']}
                  className="gallery-section__wrap"
                >
                  {[...galleryRowOne, ...galleryRowOne].map((item, index) => (
                    <GalleryCard
                      key={`r1-${item.src}-${index}`}
                      src={item.src}
                      alt={item.alt}
                    />
                  ))}
                </ScrollXCarouselWrap>
              </div>
              <div className="gallery-section__row">
                <ScrollXCarouselWrap
                  xRange={['-55%', '8%']}
                  className="gallery-section__wrap"
                >
                  {[...galleryRowTwo, ...galleryRowTwo].map((item, index) => (
                    <GalleryCard
                      key={`r2-${item.src}-${index}`}
                      src={item.src}
                      alt={item.alt}
                    />
                  ))}
                </ScrollXCarouselWrap>
              </div>
            </div>
          </div>
        </ScrollXCarouselContainer>
      </ScrollXCarousel>
    </section>
  )
}
