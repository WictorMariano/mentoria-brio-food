import { useState } from 'react'
import {
  ChevronDown, Clapperboard, ImagePlus, LayoutTemplate, Library, Play,
} from 'lucide-react'
import type { DeliverableAccordionItem, DeliverableDemoType } from '../data/content'

const TEMPLATE_OPTIONS = [
  { id: 'acai', label: 'Promoções', hint: 'Oferta + CTA', image: '/images/base-epica/template-carrossel.png' },
  { id: 'lancamento', label: 'Entreter Educar', hint: 'Desejo + prova', image: '/images/base-epica/template-entreter-educar.png' },
  { id: 'bastidores', label: 'Bastidores', hint: 'Rotina da marca', image: '/images/base-epica/template-bastidores.png' },
  { id: 'prova', label: 'Datas Especiais', hint: 'Clientes reais', image: '/images/base-epica/template-datas-especiais.jpg' },
]

const ACCORDION_ICONS: Record<DeliverableDemoType, typeof LayoutTemplate> = {
  carrosseis: LayoutTemplate,
  aprimoramento: ImagePlus,
  videos: Clapperboard,
  biblioteca: Library,
}

function AccordionDemo({ item }: { item: DeliverableAccordionItem }) {
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
    return (
      <div className="epica-demo epica-demo--videos">
        <div className="epica-video-frame">
          <button type="button" tabIndex={-1} aria-hidden="true">
            <Play size={28} fill="currentColor" />
          </button>
          <div>
            <strong>Reels do negócio</strong>
            <p>Roteiro + cena + CTA em poucos cliques</p>
          </div>
        </div>
        <div className="epica-video-chips">
          <span>Stories</span>
          <span>Reels</span>
          <span>Anúncio curto</span>
        </div>
      </div>
    )
  }

  return (
    <div className="epica-demo epica-demo--biblioteca">
      {(item.images ?? []).map((image) => (
        <figure key={image.src}>
          <img src={image.src} alt={image.alt} loading="lazy" />
        </figure>
      ))}
    </div>
  )
}

export function BaseEpicaAccordion({
  items,
  defaultOpenId,
}: {
  items: DeliverableAccordionItem[]
  defaultOpenId: string
}) {
  const [openId, setOpenId] = useState(defaultOpenId)

  return (
    <div className="epica-accordion">
      {items.map((item) => {
        const isOpen = item.id === openId
        const Icon = ACCORDION_ICONS[item.demoType]
        return (
          <div className={`epica-accordion__item ${isOpen ? 'is-open' : ''}`} key={item.id}>
            <button
              type="button"
              className="epica-accordion__trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenId(item.id)}
            >
              <span className="epica-accordion__icon" aria-hidden="true">
                <Icon size={18} />
              </span>
              <span className="epica-accordion__copy">
                <strong>{item.title}</strong>
                <small>{item.description}</small>
              </span>
              <ChevronDown size={18} aria-hidden="true" />
            </button>
            {isOpen ? (
              <div className="epica-accordion__panel">
                <AccordionDemo item={item} />
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
