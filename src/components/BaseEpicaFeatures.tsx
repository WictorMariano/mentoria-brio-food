import { useState } from 'react'
import {
  Clapperboard, ImagePlus, LayoutTemplate, Library, Play,
} from 'lucide-react'
import type { DeliverableFeatureItem, DeliverableDemoType } from '../data/content'

const TEMPLATE_OPTIONS = [
  { id: 'acai', label: 'Promoções', hint: 'Oferta + CTA', image: '/images/base-epica/template-carrossel.png' },
  { id: 'lancamento', label: 'Entreter Educar', hint: 'Desejo + prova', image: '/images/base-epica/template-entreter-educar.png' },
  { id: 'bastidores', label: 'Bastidores', hint: 'Rotina da marca', image: '/images/base-epica/template-bastidores.png' },
  { id: 'prova', label: 'Datas Especiais', hint: 'Clientes reais', image: '/images/base-epica/template-datas-especiais.jpg' },
]

const FEATURE_META: Record<
  DeliverableDemoType,
  { Icon: typeof LayoutTemplate; tone: string }
> = {
  carrosseis: { Icon: LayoutTemplate, tone: 'lime' },
  aprimoramento: { Icon: ImagePlus, tone: 'purple' },
  videos: { Icon: Clapperboard, tone: 'orange' },
  biblioteca: { Icon: Library, tone: 'coral' },
}

function FeatureDemo({ item }: { item: DeliverableFeatureItem }) {
  const [activeTemplate, setActiveTemplate] = useState(TEMPLATE_OPTIONS[0].id)
  const selected = TEMPLATE_OPTIONS.find((option) => option.id === activeTemplate) ?? TEMPLATE_OPTIONS[0]

  if (item.demoType === 'carrosseis') {
    return (
      <div className="epica-demo epica-demo--carrosseis">
        <div className="epica-demo__panel">
          <span className="epica-demo__label">Escolha o template</span>
          <div className="epica-template-list">
            {TEMPLATE_OPTIONS.map((option) => (
              <button
                type="button"
                key={option.id}
                className={option.id === activeTemplate ? 'is-active' : undefined}
                onClick={() => setActiveTemplate(option.id)}
              >
                <span className="epica-template-list__thumb" aria-hidden="true">
                  {option.image ? (
                    <img src={option.image} alt="" />
                  ) : (
                    <LayoutTemplate size={16} />
                  )}
                </span>
                <span>
                  <strong>{option.label}</strong>
                  <small>{option.hint}</small>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="epica-demo__panel epica-demo__panel--preview">
          <div className="epica-demo__preview-top">
            <span className="epica-demo__label">Template selecionado</span>
            <span className="epica-demo__chip">Pronto para gerar</span>
          </div>
          <figure className="epica-template-preview">
            <img
              src={selected.image ?? item.images?.[0]?.src ?? '/images/base-epica/template-carrossel.png'}
              alt={selected.image ? `Template ${selected.label}` : (item.images?.[0]?.alt ?? 'Template de carrossel')}
              loading="lazy"
            />
          </figure>
          <p className="epica-demo__caption">
            A Base Épica adapta o layout ao seu negócio e monta o carrossel automático.
          </p>
        </div>
      </div>
    )
  }

  if (item.demoType === 'aprimoramento') {
    const before = item.images?.[0]
    const after = item.images?.[1]
    return (
      <div className="epica-demo epica-demo--aprimoramento">
        <article className="epica-gastro-card">
          <div className="epica-gastro-card__compare">
            <figure>
              {before ? <img src={before.src} alt={before.alt} loading="lazy" /> : null}
              <span className="epica-gastro-badge epica-gastro-badge--antes">Antes</span>
            </figure>
            <figure>
              {after ? <img src={after.src} alt={after.alt} loading="lazy" /> : null}
              <span className="epica-gastro-badge epica-gastro-badge--depois">Depois</span>
            </figure>
          </div>
        </article>
        <aside className="epica-gastro-video">
          <video
            src="/videos/feature-styles-preview.mp4"
            controls
            playsInline
            preload="metadata"
            aria-label="Vídeo explicando como realizar o aprimoramento de imagem"
          />
        </aside>
      </div>
    )
  }

  if (item.demoType === 'videos') {
    const poster = item.images?.[0]
    return (
      <div className="epica-demo epica-demo--videos">
        <div className="epica-video-split__copy">
          <strong>Reels, Stories e anúncios prontos</strong>
          <p>
            A Base Épica monta vídeos curtos com cara da sua marca: roteiro,
            cena e CTA para publicar sem travar.
          </p>
          <div className="epica-video-chips">
            <span>Stories</span>
            <span>Reels</span>
            <span>Anúncio curto</span>
          </div>
        </div>
        <aside className="epica-video-player" aria-hidden="true">
          <div className="epica-video-player__screen">
            {poster ? (
              <img src={poster.src} alt="" loading="lazy" />
            ) : null}
            <span className="epica-video-player__play">
              <Play size={22} fill="currentColor" />
            </span>
            <div className="epica-video-player__bar">
              <span className="epica-video-player__progress" />
              <small>0:12 / 0:28</small>
            </div>
          </div>
        </aside>
      </div>
    )
  }

  return (
    <div className="epica-demo epica-demo--biblioteca">
      <div className="epica-biblio-marquee" aria-label="Biblioteca de referências em carrossel">
        <div className="epica-biblio-marquee__track">
          {[...(item.images ?? []), ...(item.images ?? [])].map((image, index) => (
            <figure key={`${image.src}-${index}`}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
        <div className="epica-biblio-marquee__fade epica-biblio-marquee__fade--left" aria-hidden="true" />
        <div className="epica-biblio-marquee__fade epica-biblio-marquee__fade--right" aria-hidden="true" />
      </div>
    </div>
  )
}

export function BaseEpicaFeatures({ items }: { items: DeliverableFeatureItem[] }) {
  return (
    <div className="epica-features">
      {items.map((item) => {
        const { Icon, tone } = FEATURE_META[item.demoType]
        const isHero = item.demoType === 'carrosseis'
        return (
          <article
            className={`epica-feature-card ${isHero ? 'epica-feature-card--hero' : ''}`}
            key={item.id}
          >
            <header className="epica-feature-card__head">
              <span className={`epica-feature-card__icon epica-feature-card__icon--${tone}`} aria-hidden="true">
                <Icon size={20} />
              </span>
              <div className="epica-feature-card__copy">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </header>
            <div className="epica-feature-card__body">
              <FeatureDemo item={item} />
            </div>
          </article>
        )
      })}
    </div>
  )
}
