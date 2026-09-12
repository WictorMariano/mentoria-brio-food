import { useEffect, useState } from 'react'
import {
  heroGalleryColumnA,
  heroGalleryColumnB,
  type HeroGalleryItem,
} from '../data/heroGallery'

function MarqueeColumn({
  items,
  reverse = false,
  duration = 42,
  paused = false,
}: {
  items: HeroGalleryItem[]
  reverse?: boolean
  duration?: number
  paused?: boolean
}) {
  const loop = [...items, ...items]

  return (
    <div className="hero-photo-marquee__column">
      <div
        className={`hero-photo-marquee__track ${reverse ? 'hero-photo-marquee__track--reverse' : ''} ${paused ? 'hero-photo-marquee__track--paused' : ''}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {loop.map((item, index) => (
          <div
            key={`${item.src}-${index}`}
            className={`hero-photo-marquee__card ${item.tall ? 'hero-photo-marquee__card--tall' : 'hero-photo-marquee__card--wide'}`}
          >
            <img src={item.src} alt={item.alt} loading={index < 2 ? 'eager' : 'lazy'} />
          </div>
        ))}
      </div>
    </div>
  )
}

export function HeroPhotoMarquee({ className = '' }: { className?: string }) {
  const [pausedByClick, setPausedByClick] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  const paused = reduceMotion || pausedByClick

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={pausedByClick}
      aria-label={pausedByClick ? 'Retomar carrossel de fotos' : 'Pausar carrossel de fotos'}
      className={`hero-photo-marquee ${className}`}
      onClick={() => {
        if (reduceMotion) return
        setPausedByClick((value) => !value)
      }}
      onKeyDown={(event) => {
        if (reduceMotion) return
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          setPausedByClick((value) => !value)
        }
      }}
    >
      <div className="hero-photo-marquee__columns">
        <MarqueeColumn items={heroGalleryColumnA} duration={48} paused={paused} />
        <MarqueeColumn items={heroGalleryColumnB} reverse duration={56} paused={paused} />
      </div>
      <div className="hero-photo-marquee__fade hero-photo-marquee__fade--top" aria-hidden="true" />
      <div className="hero-photo-marquee__fade hero-photo-marquee__fade--bottom" aria-hidden="true" />
    </div>
  )
}
