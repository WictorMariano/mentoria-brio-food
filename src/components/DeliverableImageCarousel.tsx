import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type CarouselImage = {
  src: string
  alt: string
}

export function DeliverableImageCarousel({ images }: { images: CarouselImage[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) return undefined

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [images.length])

  const goTo = (next: number) => {
    const total = images.length
    setIndex((next + total) % total)
  }

  return (
    <div className="deliverable-carousel">
      <div className="deliverable-carousel__track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((image) => (
          <figure className="deliverable-carousel__slide" key={image.src}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </figure>
        ))}
      </div>

      {images.length > 1 ? (
        <>
          <button
            type="button"
            className="deliverable-carousel__nav deliverable-carousel__nav--prev"
            aria-label="Imagem anterior"
            onClick={() => goTo(index - 1)}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            className="deliverable-carousel__nav deliverable-carousel__nav--next"
            aria-label="Próxima imagem"
            onClick={() => goTo(index + 1)}
          >
            <ChevronRight size={20} />
          </button>
          <div className="deliverable-carousel__dots" role="tablist" aria-label="Referências do cardápio">
            {images.map((image, dotIndex) => (
              <button
                type="button"
                key={image.src}
                role="tab"
                aria-selected={dotIndex === index}
                aria-label={`Ver referência ${dotIndex + 1}`}
                className={dotIndex === index ? 'is-active' : undefined}
                onClick={() => setIndex(dotIndex)}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  )
}
