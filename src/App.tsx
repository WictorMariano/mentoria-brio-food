import { useEffect, type ComponentType, type ReactNode } from 'react'
import {
  ArrowDown, ArrowRight, BarChart3, Bike, Bot, BriefcaseBusiness, Calculator, Camera,
  Check, CheckCircle2, ChevronDown, CircleX, Compass, Heart, Leaf, Lightbulb, Link2, MapPin,
  MessageCircle, PackageCheck, QrCode, ReceiptText, Repeat2, Search, Share2, ShoppingBag, Smartphone,
  Sparkles, Star, Store, Target, TrendingUp, Users, Video, WalletCards, X, type LucideProps,
} from 'lucide-react'
import {
  benefits, calls, deliverables, faqs, idealBusinesses, menuDeliverySteps, siteConfig, type IconName,
} from './data/content'
import { HeroPhotoMarquee } from './components/HeroPhotoMarquee'
import { DeliverableImageCarousel } from './components/DeliverableImageCarousel'
import { GallerySection } from './components/GallerySection'
import { BaseEpicaFeatures } from './components/BaseEpicaFeatures'
import './App.css'

const icons: Record<IconName, ComponentType<LucideProps>> = {
  users: Users,
  chart: BarChart3,
  sparkles: Sparkles,
  trending: TrendingUp,
  bot: Bot,
  video: Video,
  shoppingBag: ShoppingBag,
  mapPin: MapPin,
  compass: Compass,
  heart: Heart,
  message: MessageCircle,
  search: Search,
  store: Store,
  repeat: Repeat2,
  check: Check,
}

function SectionHeading({
  eyebrow, title, description, light = false, center = false,
}: {
  eyebrow: string
  title: string
  description?: string
  light?: boolean
  center?: boolean
}) {
  return (
    <div className={`section-heading reveal ${light ? 'section-heading--light' : ''} ${center ? 'section-heading--center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function CtaLink({
  children, variant = 'primary', className = '',
}: {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'light'
  className?: string
}) {
  return (
    <a className={`button button--${variant} ${className}`} href={siteConfig.checkoutUrl}>
      <span>{children}</span>
      <ArrowRight size={18} aria-hidden="true" />
    </a>
  )
}

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )
    elements.forEach((element) => observer.observe(element))

    const fallback = window.setTimeout(() => {
      elements.forEach((element) => element.classList.add('is-visible'))
    }, 1200)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  return (
    <div className="site-shell">
      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-shell">
            <div className="hero-copy">
              <a href="#inicio" className="hero-brand" aria-label="BrioFood: início">
                <img src="/briofood-logo.svg" alt="BrioFood" />
              </a>
              <p className="hero-kicker">Mentoria Para Negócios Locais Alimentícios</p>
              <h1>
                Transforme seu negócio de comida em uma marca local que vende mais e lucra melhor.
              </h1>
              <p className="hero-lead">
                Pare de depender só do boca a boca, do iFood e de posts aleatórios.
                Na Mentoria BrioFood você recebe método, conteúdo, gestão e ferramentas
                para atrair clientes, gerar desejo e colocar mais dinheiro no caixa.
              </p>
              <div className="hero-actions">
                <CtaLink>Quero garantir minha vaga</CtaLink>
                <a className="text-link" href="#mentoria">
                  Ver tudo o que está incluso <ArrowDown size={17} aria-hidden="true" />
                </a>
              </div>
              <div className="hero-badges">
                <span className="pill pill--green"><span className="pulse" />Vagas limitadas</span>
                <span className="pill">6 calls ao vivo</span>
                <span className="pill">Ferramentas inclusas</span>
                <span className="pill">Suporte da equipe</span>
              </div>

              <div className="hero-marquee-mobile">
                <HeroPhotoMarquee />
              </div>
            </div>

            <div className="hero-visual-desktop">
              <HeroPhotoMarquee className="hero-photo-marquee--fill" />
            </div>
          </div>

          <div className="business-marquee" aria-label="Negócios atendidos pela mentoria">
            <div className="marquee-track">
              {[...idealBusinesses, ...idealBusinesses].map((item, index) => (
                <span key={`${item}-${index}`}><Leaf size={13} fill="currentColor" />{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="problem-section" id="reconhecimento">
          <div className="problem-backdrop" aria-hidden="true">
            <img src="/images/problem-backdrop.png" alt="" />
          </div>
          <div className="container problem-wrap">
            <div className="problem-header reveal">
              <span className="problem-kicker">Se Você Se Reconhece Nisso</span>
              <h2>
                Seu negócio não precisa de mais improviso.{' '}
                <em>Precisa de direção.</em>
              </h2>
              <p>
                A Mentoria BrioFood foi criada para donos de negócios locais de alimentação
                que querem sair do achismo e construir uma marca desejada, com método,
                conteúdo, gestão e execução.
              </p>
            </div>

            <div className="problem-cards reveal">
              <article className="problem-card problem-card--pain">
                <span className="problem-card__label">Realidade de muitos negócios locais</span>
                <h3>O que costuma travar o crescimento</h3>
                <ul>
                  {[
                    {
                      icon: Smartphone,
                      title: 'Você posta todo dia… e quase não gera venda?',
                      text: 'Sua comunicação aparece, mas não cria desejo nem movimento.',
                    },
                    {
                      icon: Bike,
                      title: 'Depende demais do iFood ou do boca a boca?',
                      text: 'Seu negócio fica vulnerável e sem controle sobre a demanda.',
                    },
                    {
                      icon: Lightbulb,
                      title: 'Não sabe o que lançar, nem como lançar?',
                      text: 'Novidades saem sem estratégia, sem campanha e sem resultado.',
                    },
                    {
                      icon: Star,
                      title: 'Tem um ótimo produto, mas pouca gente conhece?',
                      text: 'Qualidade sozinha não basta se a marca não é lembrada.',
                    },
                    {
                      icon: BarChart3,
                      title: 'Não sabe quanto realmente lucra em cada item?',
                      text: 'Você vende, fatura… e ainda assim não enxerga a margem.',
                    },
                    {
                      icon: Users,
                      title: 'Ainda não tem comunidade, recorrência nem buzz local?',
                      text: 'Clientes passam, mas não voltam nem indicam com força.',
                    },
                  ].map((item) => {
                    const Icon = item.icon
                    return (
                      <li key={item.title}>
                        <span><Icon size={18} /></span>
                        <div>
                          <strong>{item.title}</strong>
                          <p>{item.text}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </article>

              <article className="problem-card problem-card--solution">
                <span className="problem-card__label">Com a mentoria, você tem</span>
                <h3>Estratégia prática para transformar o seu negócio</h3>
                <p className="problem-card__lead">
                  Eu passei anos estudando e aplicando marketing na vida real.
                  observando o que funciona nas grandes operações e validando cada
                  decisão no meu próprio negócio, o Tazza. Foi assim que desenvolvi
                  uma estratégia feita para negócios locais de alimentação.
                </p>
                <p className="problem-card__promise">
                  Uma estratégia que pode ser aplicada em qualquer negócio local
                  e gerar resultados de crescimento de <strong>3x a 10x</strong>.
                </p>
                <div className="problem-pillars">
                  {[
                    { icon: Target, title: 'Mais clareza', text: 'Saiba o que priorizar agora.' },
                    { icon: TrendingUp, title: 'Mais intenção', text: 'Conteúdo e oferta que vendem.' },
                    { icon: Users, title: 'Mais resultado', text: 'Movimento, margem e marca.' },
                  ].map((pillar) => {
                    const Icon = pillar.icon
                    return (
                      <div key={pillar.title}>
                        <Icon size={20} />
                        <strong>{pillar.title}</strong>
                        <p>{pillar.text}</p>
                      </div>
                    )
                  })}
                </div>
                <CtaLink className="problem-card__cta">Quero aplicar essa estratégia</CtaLink>
                <small className="problem-card__foot">Gastronomia local. Mais que comida, negócios reais.</small>
              </article>
            </div>
          </div>
        </section>

        <section className="method-section section-pad" id="metodo">
          <div className="container method-shell reveal">
            <div className="method-copy">
              <span className="eyebrow">Meu método à sua disposição</span>
              <h2>O simples bem feito ainda funciona. E eu vou te mostrar como.</h2>
              <p className="method-lead">
                Não é sobre complicar. É sobre fazer as pequenas coisas certas:
                aquelas que, juntas, geram grandes resultados no seu negócio local.
              </p>
              <p>
                Vamos fazer isso juntos, em um grupo fechado e seleto no WhatsApp,
                com reuniões quinzenais analisando o seu negócio ponto a ponto e
                implementando o método que eu adaptei de grandes empresas para a
                minha própria operação.
              </p>
              <p>
                Além disso, você recebe uma infraestrutura digital para levar o
                negócio a outro patamar e se destacar dos demais.
              </p>
              <p className="method-highlight">
                Vamos achar o que torna o seu negócio único e mostrar que
                <strong> não existe concorrência</strong> quando você se posiciona
                da maneira certa.
              </p>
              <CtaLink>Quero me inscrever na mentoria</CtaLink>
            </div>
            <div className="method-points">
              {[
                {
                  icon: MessageCircle,
                  title: 'Grupo fechado no WhatsApp',
                  text: 'Uma comunidade seleta para acompanhar, trocar e avançar com suporte.',
                },
                {
                  icon: Users,
                  title: 'Reuniões quinzenais',
                  text: 'Análise do seu negócio ponto a ponto, com direção prática para implementar.',
                },
                {
                  icon: Target,
                  title: 'Método validado na prática',
                  text: 'Estratégias adaptadas de grandes empresas para a realidade da operação local.',
                },
                {
                  icon: Sparkles,
                  title: 'Infraestrutura digital',
                  text: 'Ferramentas e estrutura para destacar sua marca e acelerar o crescimento.',
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <article key={item.title}>
                    <span><Icon size={20} /></span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="offer-section section-pad" id="mentoria">
          <div className="container">
            <SectionHeading
              eyebrow="O que você vai levar"
              title="Um pacote completo para colocar seu negócio à frente do que há de mais novo."
              description="Minha equipe tech vai te entregar as ferramentas mais vantajosas para você criar conteúdo, ter o seu próprio site delivery, ser encontrado e recomendado no Google, e muito mais. Confira."
              center
            />
            <div className="deliverables-stack">
              {deliverables.map((item, index) => {
                const Icon = icons[item.icon]
                const isAlt = (index - 1) % 2 === 1
                const isFeature = Boolean(item.featured && item.images?.length)
                const isFeatures = item.variant === 'features' && Boolean(item.featureItems?.length)

                if (isFeatures) {
                  return (
                    <article className="deliverable-card deliverable-card--features reveal" key={item.number}>
                      <div className="deliverable-features-top">
                        <div className="deliverable-copy">
                          <span className="epica-kicker">Ferramenta inclusa</span>
                          <h3>
                            {item.logo ? (
                              <span className="epica-title-brand">
                                <img src={item.logo} alt={item.logoAlt ?? item.title} />
                                <span>{item.title}</span>
                              </span>
                            ) : (
                              item.title
                            )}
                            {item.titleAccent ? (
                              <>
                                {' '}
                                <em>{item.titleAccent}</em>
                              </>
                            ) : null}
                          </h3>
                          <p>{item.description}</p>
                          <div className="epica-pill-row">
                            {item.items.map((detail) => (
                              <span key={detail}>{detail}</span>
                            ))}
                          </div>
                        </div>
                        <div className="deliverable-features-visual">
                          <img
                            src={item.image}
                            alt={item.imageAlt}
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <BaseEpicaFeatures items={item.featureItems!} />
                    </article>
                  )
                }

                if (isFeature) {
                  return (
                    <div className="deliverable-feature-block" key={item.number}>
                      <article className="deliverable-card deliverable-card--feature reveal">
                        <div className="deliverable-copy">
                          <div className="card-topline">
                            <span className="card-icon"><Icon size={22} /></span>
                          </div>
                          <h3>
                            {item.title}
                            {item.titleAccent ? (
                              <>
                                {' '}
                                <em>{item.titleAccent}</em>
                              </>
                            ) : null}
                          </h3>
                          <p>{item.description}</p>
                          <ul>
                            {item.items.map((detail) => (
                              <li key={detail}><Check size={14} strokeWidth={3} />{detail}</li>
                            ))}
                          </ul>
                          {item.partner ? (
                            <aside className="partner-strip">
                              <img src={item.partner.logo} alt={item.partner.logoAlt} />
                              <div>
                                <strong>{item.partner.headline}</strong>
                                <p>{item.partner.text}</p>
                              </div>
                            </aside>
                          ) : null}
                        </div>
                        <div className="deliverable-media deliverable-media--carousel">
                          <DeliverableImageCarousel images={item.images!} />
                        </div>
                      </article>

                      <div className="menu-steps reveal">
                        <div className="menu-steps__heading">
                          <h4>
                            Comece a receber pedidos em{' '}
                            <em>3 passos simples</em>
                          </h4>
                          <p>Configure uma vez, receba pedidos para sempre. Sem complicação, sem burocracia.</p>
                        </div>

                        <div className="menu-steps__flow">
                          {menuDeliverySteps.map((step, stepIndex) => (
                            <div className="menu-step-wrap" key={step.number}>
                              <article className={`menu-step menu-step--${step.tone}`}>
                                <span className="menu-step__number">{step.number}</span>
                                <div className="menu-step__preview" aria-hidden="true">
                                  {step.tone === 'menu' ? (
                                    <div className="menu-preview">
                                      <div className="menu-preview__search">Buscar no cardápio...</div>
                                      <div className="menu-preview__tags">
                                        <span className="is-active">Destaques</span>
                                        <span>Combos</span>
                                        <span>Pizzas</span>
                                      </div>
                                      <div className="menu-preview__item">
                                        <span />
                                        <div>
                                          <strong>Combo Burger</strong>
                                          <small>R$ 34,90</small>
                                        </div>
                                        <button type="button">+</button>
                                      </div>
                                    </div>
                                  ) : null}
                                  {step.tone === 'share' ? (
                                    <div className="share-preview">
                                      <p>seucardapio.com/seu-negocio</p>
                                      <div className="share-preview__qr"><QrCode size={54} strokeWidth={1.5} /></div>
                                      <span className="share-preview__btn"><Share2 size={16} /><Link2 size={16} /></span>
                                    </div>
                                  ) : null}
                                  {step.tone === 'orders' ? (
                                    <div className="orders-preview">
                                      {[
                                        ['Lucas O.', 'Novo', 'R$ 55,70'],
                                        ['Mariana S.', 'Em preparo', 'R$ 42,00'],
                                        ['Pedro H.', 'Pronto', 'R$ 31,90'],
                                      ].map(([name, status, price]) => (
                                        <div key={name}>
                                          <strong>{name}</strong>
                                          <span data-status={status}>{status}</span>
                                          <small>{price}</small>
                                        </div>
                                      ))}
                                    </div>
                                  ) : null}
                                </div>
                                <h5>{step.title}</h5>
                                <p>{step.description}</p>
                              </article>
                              {stepIndex < menuDeliverySteps.length - 1 ? (
                                <span className="menu-step__arrow" aria-hidden="true"><ArrowRight size={18} /></span>
                              ) : null}
                            </div>
                          ))}

                          <aside className="menu-steps__phone" aria-label="Exemplo de pedido no WhatsApp">
                            <div className="wa-phone">
                              <div className="wa-phone__notch" />
                              <div className="wa-phone__screen">
                                <div className="wa-phone__header">
                                  <strong>Seu Negócio</strong>
                                  <small>online</small>
                                </div>
                                <div className="wa-phone__chat">
                                  <div className="wa-bubble">
                                    <p><strong>Novo pedido</strong></p>
                                    <p>1x Combo Burger</p>
                                    <p>1x Batata Frita</p>
                                    <p>1x Coca 350ml</p>
                                    <p><strong>Total R$ 55,70</strong></p>
                                  </div>
                                  <div className="wa-bubble wa-bubble--ok">
                                    <CheckCircle2 size={14} /> Pedido recebido com sucesso!
                                  </div>
                                </div>
                              </div>
                            </div>
                          </aside>
                        </div>
                      </div>
                    </div>
                  )
                }

                return (
                  <article
                    className={`deliverable-card deliverable-card--compact reveal ${isAlt ? 'deliverable-card--alt' : ''} ${item.badge ? 'deliverable-card--bonus' : ''}`}
                    key={item.number}
                  >
                    <div className="deliverable-copy">
                      <div className="card-topline">
                        <span className="card-icon"><Icon size={22} /></span>
                        {item.badge ? (
                          <span className="card-badge">{item.badge}</span>
                        ) : null}
                      </div>
                      <h3>
                        {item.title}
                        {item.titleAccent ? (
                          <>
                            {' '}
                            <em>{item.titleAccent}</em>
                          </>
                        ) : null}
                      </h3>
                      <p>{item.description}</p>
                      <ul>
                        {item.items.map((detail) => (
                          <li key={detail}><Check size={14} strokeWidth={3} />{detail}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="deliverable-media">
                      <img src={item.image} alt={item.imageAlt} loading="lazy" />
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <GallerySection />

        <section className="benefits-section section-pad" id="beneficios">
          <div className="container">
            <SectionHeading
              eyebrow="Resultados que importam"
              title="O que muda no seu negócio quando você entra na BrioFood"
              description="Você para de tentar “fazer de tudo” e passa a executar o que realmente gera desejo, venda e lucro."
              center
            />
            <div className="benefits-grid">
              {benefits.map((benefit, index) => {
                const Icon = icons[benefit.icon]
                return (
                  <article className="benefit-card reveal" key={benefit.title}>
                    <span className="benefit-index">0{index + 1}</span>
                    <Icon size={23} />
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="audience-section section-pad">
          <div className="container">
            <SectionHeading
              eyebrow="Para quem é"
              title="Feita para quem quer ser mais do que “só mais uma opção”."
              description="Se você tem um negócio de alimentação e está disposto a executar, a BrioFood foi desenhada para você."
              center
            />
            <div className="audience-grid">
              <article className="audience-card audience-card--yes reveal">
                <div className="audience-title">
                  <span><CheckCircle2 /></span>
                  <div>
                    <small>É para você se</small>
                    <h3>Quer vender mais e construir marca</h3>
                  </div>
                </div>
                <ul>
                  {[
                    'Quer atrair mais clientes todos os dias',
                    'Quer conteúdo com intenção de venda',
                    'Quer lançar produtos com estratégia',
                    'Quer lucrar melhor, não só faturar mais',
                    'Está disposto a aplicar as tarefas',
                  ].map((item) => <li key={item}><Check size={16} />{item}</li>)}
                </ul>
                <div className="business-tags">
                  {idealBusinesses.slice(0, 8).map((business) => <span key={business}>{business}</span>)}
                </div>
              </article>
              <article className="audience-card audience-card--no reveal">
                <div className="audience-title">
                  <span><CircleX /></span>
                  <div>
                    <small>Não é para quem</small>
                    <h3>Quer resultado sem ação</h3>
                  </div>
                </div>
                <ul>
                  {[
                    'Não quer aplicar nada no negócio',
                    'Acha que postar qualquer coisa já basta',
                    'Quer só ferramenta, sem estratégia',
                    'Não pretende participar das calls',
                  ].map((item) => <li key={item}><X size={15} />{item}</li>)}
                </ul>
                <p>A mentoria entrega o caminho. Quem executa transforma direção em resultado.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="profit-section section-pad" id="bonus-financeiro">
          <div className="container">
            <div className="bonus-badge reveal">Bônus incluso</div>
            <SectionHeading
              eyebrow="Gestão financeira na prática"
              title="Você pode vender mais e também lucrar melhor com o que já vende."
              description="Como bônus da mentoria, você também aprende a olhar os números que mostram se o movimento do negócio está virando dinheiro de verdade."
              light
            />
            <div className="profit-grid">
              {[
                {
                  icon: Calculator,
                  title: 'Precificar com margem',
                  text: 'Entenda custo, percepção de valor e preço justo para não vender muito e sobrar pouco.',
                },
                {
                  icon: WalletCards,
                  title: 'Aumentar ticket médio',
                  text: 'Crie combos, complementos e ofertas que elevam o valor de cada pedido.',
                },
                {
                  icon: PackageCheck,
                  title: 'Focar no mix certo',
                  text: 'Descubra o que atrai, o que lucra e o que só ocupa operação sem retorno.',
                },
                {
                  icon: ReceiptText,
                  title: 'Gerar recorrência',
                  text: 'Faça o cliente voltar mais vezes e acompanhe indicadores simples de resultado.',
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <article className="profit-card reveal" key={item.title}>
                    <span className="profit-icon"><Icon size={22} /></span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                )
              })}
            </div>
            <div className="profit-bottom reveal">
              <TrendingUp size={22} />
              <p>
                <strong>O segredo não é só faturar mais.</strong>
                {' '}É fazer cada venda, cada post e cada lançamento render mais.
              </p>
            </div>
          </div>
        </section>

        <section className="mentor-section section-pad" id="celeste">
          <div className="container mentor-grid">
            <div className="mentor-visual reveal">
              <div className="mentor-image">
                <img src="/images/celeste-mentor.png" alt="Celeste Lacerda com croissant do Tazza" />
              </div>
            </div>
            <div className="mentor-content reveal">
              <span className="eyebrow">Quem vai te guiar</span>
              <h2>Aprenda com quem construiu marca local na prática.</h2>
              <div className="mentor-name">
                <div>
                  <strong>Celeste Lacerda</strong>
                  <span>Fundadora do Tazza e da Agência Brio 360</span>
                </div>
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Celeste Lacerda"
                >
                  <BriefcaseBusiness size={19} />
                </a>
              </div>
              <p>
                Na BrioFood, Celeste compartilha o que funciona de verdade: produto,
                pesquisa, conteúdo, lançamentos, comunidade, influência local e crescimento.
              </p>
              <p>
                Não é teoria de quem nunca abriu um caixa. É método de quem entende
                o desafio diário de vender, se destacar e construir uma marca desejada.
              </p>
              <blockquote>
                “Você vai aprender com uma empreendedora que vive o desafio real
                de transformar um bom produto em uma marca que as pessoas procuram.”
              </blockquote>
            </div>
          </div>
        </section>

        <section className="pricing-section section-pad" id="inscricao">
          <div className="container">
            <div className="pricing-shell reveal">
              <div className="pricing-copy">
                <span className="pill pill--cream">Próxima turma · vagas limitadas</span>
                <h2>Entre agora e saia do improviso de uma vez.</h2>
                <p>
                  Mentoria com Celeste Lacerda, ferramentas digitais e suporte para
                  transformar seu negócio de alimentação em uma marca local desejada.
                </p>
                <div className="pricing-list">
                  {[
                    '6 calls coletivas ao vivo',
                    'Tarefas + suporte da equipe',
                    'Acesso anual ao grupo de acompanhamento',
                    'Site e cardápio digital delivery',
                    'Base Épica para redes sociais',
                    'Google Meu Negócio Pro incluso',
                  ].map((item) => (
                    <span key={item}><Check size={15} strokeWidth={3} />{item}</span>
                  ))}
                </div>
              </div>
              <div className="price-card">
                <span className="price-label">Investimento da mentoria</span>
                <p className="price-coming">
                  <span className="price-installments">4x de</span>
                  <strong>R$ 255</strong>
                </p>
                <p className="price-cash">ou <strong>R$ 998</strong> à vista</p>
                <p className="price-note">
                  Inclui acesso anual ao grupo de acompanhamento: você fica no grupo por 1 ano.
                </p>
                <CtaLink variant="light">Quero entrar para a próxima turma</CtaLink>
                <small><CheckCircle2 size={14} />Vagas limitadas para manter qualidade no acompanhamento.</small>
              </div>
            </div>
          </div>
        </section>

        <section className="journey-section section-pad" id="jornada">
          <div className="container">
            <SectionHeading
              eyebrow="Sua jornada em 6 calls"
              title="Toda semana, uma ação concreta para o seu negócio."
              description="Não é para assistir e esquecer. É para diagnosticar, criar, publicar, medir e crescer."
              light
            />
            <div className="journey-list">
              {calls.map((call) => (
                <article className="journey-card reveal" key={call.number}>
                  <div className="journey-number">
                    <span>Call</span>
                    <strong>{call.number}</strong>
                  </div>
                  <div className="journey-main">
                    <h3>{call.title}</h3>
                    <p>{call.description}</p>
                    <div className="journey-topics">
                      {call.topics.map((topic) => <span key={topic}>{topic}</span>)}
                    </div>
                  </div>
                  <div className="journey-task">
                    <span><CheckCircle2 size={16} /> Tarefa prática</span>
                    <p>{call.task}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="support-strip reveal">
              <div>
                <Users size={22} />
                <p><strong>Grupo no WhatsApp por 1 ano</strong>Acesso anual para networking, dúvidas e troca de experiências.</p>
              </div>
              <div>
                <MessageCircle size={22} />
                <p><strong>Suporte da equipe</strong>Ajuda para executar as tarefas entre as calls.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="action-section section-pad">
          <div className="container action-grid">
            <div className="action-copy reveal">
              <span className="eyebrow">Oferta imperdível</span>
              <h2>Você não compra só informação. Compra direção para executar.</h2>
              <p>
                Cada call vem com tarefa. Cada tarefa aproxima sua marca de mais desejo,
                mais movimento e mais lucro. É isso que torna a BrioFood diferente.
              </p>
              <CtaLink>Quero garantir minha vaga agora</CtaLink>
            </div>
            <div className="action-checklist reveal">
              {[
                '6 calls coletivas ao vivo',
                'Tarefas práticas em cada etapa',
                'Grupo de acompanhamento por 1 ano',
                'Suporte da equipe',
                'Site, cardápio e Base Épica',
                'Google Meu Negócio Pro',
              ].map((item, index) => (
                <div key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{item}</p>
                  <Check size={18} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-section section-pad" id="faq">
          <div className="container faq-grid">
            <div className="faq-intro reveal">
              <span className="eyebrow">Dúvidas frequentes</span>
              <h2>Ainda tem alguma dúvida antes de garantir sua vaga?</h2>
              <p>Respostas diretas para você decidir com clareza.</p>
              <div className="faq-contact">
                <MessageCircle size={20} />
                <div>
                  <strong>Prefere falar com a equipe?</strong>
                  <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
                </div>
              </div>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details className="faq-item reveal" key={faq.question} open={index === 0}>
                  <summary>
                    <span>{faq.question}</span>
                    <span className="faq-toggle"><ChevronDown size={18} /></span>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta-inner reveal">
            <div>
              <span className="eyebrow eyebrow--light">Último passo</span>
              <h2>Seu negócio pode continuar improvisando… ou pode virar uma marca desejada.</h2>
            </div>
            <CtaLink variant="light">Quero fazer parte da BrioFood</CtaLink>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <img src="/briofood-logo.svg" alt="BrioFood" />
              <p>
                Mentoria prática para negócios locais de alimentação que querem
                vender mais, lucrar melhor e se tornar marcas desejadas.
              </p>
            </div>
            <div className="footer-links">
              <strong>Institucional</strong>
              <a href="#">Termos de uso</a>
              <a href="#">Política de privacidade</a>
              <a href="#">Política de reembolso</a>
            </div>
            <div className="footer-social">
              <strong>Acompanhe</strong>
              <div>
                <a href={siteConfig.instagramUrl} aria-label="Instagram da BrioFood"><Camera size={19} /></a>
                <a href={siteConfig.linkedinUrl} aria-label="LinkedIn da BrioFood"><BriefcaseBusiness size={19} /></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} BrioFood. Todos os direitos reservados.</span>
            <span>Produto • Conteúdo • Lucro • Marca</span>
          </div>
        </div>
      </footer>

      <a className="mobile-sticky-cta" href={siteConfig.checkoutUrl}>
        Garantir minha vaga <ArrowRight size={17} />
      </a>
    </div>
  )
}

export default App
