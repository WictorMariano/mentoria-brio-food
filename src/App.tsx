import { useEffect, type ComponentType, type ReactNode } from 'react'
import {
  ArrowDown, ArrowRight, BarChart3, Bot, BriefcaseBusiness, Calculator, Camera,
  Check, CheckCircle2, ChevronDown, CircleX, Compass, Heart, Leaf, MapPin,
  MessageCircle, PackageCheck, ReceiptText, Repeat2, Search, ShoppingBag,
  Sparkles, Store, TrendingUp, Users, Video, WalletCards, X, type LucideProps,
} from 'lucide-react'
import {
  benefits, calls, deliverables, faqs, idealBusinesses, siteConfig, type IconName,
} from './data/content'
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
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <a href="#inicio" className="hero-brand" aria-label="BrioFood — início">
                <img src="/briofood-logo.svg" alt="BrioFood" />
              </a>
              <p className="hero-kicker">Mentoria em grupo para negócios locais de alimentação</p>
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
              <div className="hero-proof">
                <div className="proof-avatar">
                  <img src="/images/mentora-placeholder.png" alt="" />
                </div>
                <p>
                  Com <strong>Celeste Lacerda</strong>
                  <span>Fundadora do Tazza e da Agência Brio 360</span>
                </p>
              </div>
            </div>

            <div className="hero-visual reveal">
              <div className="hero-image-frame">
                <img src="/images/mentora-placeholder.png" alt="Celeste Lacerda em um ambiente de cafeteria" />
                <div className="image-tint" />
              </div>
              <div className="floating-card floating-card--top">
                <span className="floating-icon"><TrendingUp size={17} /></span>
                <div><strong>Mais movimento</strong><small>Conteúdo que vende</small></div>
              </div>
              <div className="floating-card floating-card--bottom">
                <div className="mini-chart" aria-hidden="true"><i /><i /><i /><i /></div>
                <div><strong>Mais lucro</strong><small>Margem e recorrência</small></div>
              </div>
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

        <section className="problem-section section-pad">
          <div className="container problem-grid">
            <div>
              <SectionHeading
                eyebrow="Se você se reconhece nisso"
                title="Seu produto é bom. O problema é que quase ninguém sente desejo de comprar de você."
              />
              <div className="problem-image reveal">
                <img src="/images/gastronomia-briofood.png" alt="Produtos gastronômicos sendo preparados para criação de conteúdo" />
                <div className="image-caption"><Sparkles size={16} />Bom produto precisa de marca</div>
              </div>
            </div>
            <div className="problem-content reveal">
              <p className="large-copy">
                Muitos negócios de alimentação trabalham o dia inteiro, postam nas redes,
                abrem o delivery… e ainda assim vivem no improviso.
              </p>
              <p>
                Não falta esforço. Falta método para criar desejo, comunicar valor,
                lançar novidades e transformar presença digital em movimento real.
              </p>
              <div className="pain-list">
                {[
                  'Posta todo dia, mas quase não gera venda',
                  'Depende demais do iFood ou do boca a boca',
                  'Não sabe o que lançar nem como lançar',
                  'Tem um ótimo produto, mas pouca gente conhece',
                  'Não sabe quanto realmente lucra em cada item',
                  'Não tem comunidade, recorrência nem buzz local',
                ].map((pain) => (
                  <div key={pain}><span><ArrowRight size={15} /></span>{pain}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="profit-section section-pad">
          <div className="container">
            <SectionHeading
              eyebrow="Gestão financeira na prática"
              title="Você pode vender mais — e também lucrar melhor com o que já vende."
              description="A BrioFood não fala só de marketing. Você também aprende a olhar os números que mostram se o movimento do negócio está virando dinheiro de verdade."
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

        <section className="offer-section section-pad" id="mentoria">
          <div className="container">
            <SectionHeading
              eyebrow="O que você leva"
              title="Não é só mentoria. É um pacote completo para sair do improviso."
              description="Calls ao vivo, tarefas práticas, suporte, ferramentas digitais e plano de crescimento — tudo para você aplicar no seu negócio de alimentação."
              center
            />
            <div className="deliverables-grid">
              {deliverables.map((item) => {
                const Icon = icons[item.icon]
                return (
                  <article
                    className={`deliverable-card reveal ${item.featured ? 'deliverable-card--featured' : ''}`}
                    key={item.number}
                  >
                    <div className="card-topline">
                      <span className="card-icon"><Icon size={22} /></span>
                      <span className="card-number">{item.number}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <ul>
                      {item.items.map((detail) => (
                        <li key={detail}><Check size={14} strokeWidth={3} />{detail}</li>
                      ))}
                    </ul>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

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

        <section className="value-banner">
          <div className="container value-banner-grid">
            <div className="value-copy reveal">
              <span className="eyebrow eyebrow--light">Por que a oferta é forte</span>
              <h2>Mentoria + ferramentas + suporte. Tudo no mesmo lugar.</h2>
              <p>
                Em vez de comprar curso, ferramenta e consultoria separados,
                você recebe uma jornada prática para aplicar no seu negócio de alimentação.
              </p>
              <CtaLink variant="light">Quero entrar na próxima turma</CtaLink>
            </div>
            <div className="value-seals reveal">
              {[
                ['06', 'Calls ao vivo'],
                ['✓', 'Tarefas práticas'],
                ['1 ano', 'Acesso ao grupo'],
                ['IA', 'Ferramentas inclusas'],
              ].map(([highlight, label]) => (
                <div className="value-seal" key={label}>
                  <strong>{highlight}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mentor-section section-pad" id="celeste">
          <div className="container mentor-grid">
            <div className="mentor-visual reveal">
              <div className="mentor-image">
                <img src="/images/mentora-placeholder.png" alt="Retrato de Celeste Lacerda, mentora da BrioFood" />
              </div>
              <div className="mentor-card">
                <small>Experiência real</small>
                <strong>Tazza <span>+</span> Brio 360</strong>
                <p>Quem vive o desafio de transformar comida em marca.</p>
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
                <a href={siteConfig.linkedinUrl} aria-label="LinkedIn de Celeste Lacerda">
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
                'IA + criador de vídeo + cardápio digital',
                'Plano de crescimento de 90 dias',
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
                    'Produto, conteúdo, gestão e crescimento',
                    'IA, vídeo e cardápio digital inclusos',
                    'Google Meu Negócio + plano de 90 dias',
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
                  Inclui acesso anual ao grupo de acompanhamento — você fica no grupo por 1 ano.
                </p>
                <CtaLink variant="light">Quero entrar para a próxima turma</CtaLink>
                <small><CheckCircle2 size={14} />Vagas limitadas para manter qualidade no acompanhamento.</small>
              </div>
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
