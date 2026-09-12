export const siteConfig = {
  checkoutUrl: '#inscricao',
  linkedinUrl: 'https://www.linkedin.com/in/celeste-lacerda-b640a719a/',
  instagramUrl: '#',
  supportEmail: 'contato@briofood.com.br',
}

export type IconName =
  | 'users'
  | 'chart'
  | 'sparkles'
  | 'trending'
  | 'bot'
  | 'video'
  | 'shoppingBag'
  | 'mapPin'
  | 'compass'
  | 'heart'
  | 'message'
  | 'search'
  | 'store'
  | 'repeat'
  | 'check'

export type DeliverableDemoType =
  | 'carrosseis'
  | 'aprimoramento'
  | 'videos'
  | 'biblioteca'

export type DeliverableFeatureItem = {
  id: string
  title: string
  description: string
  demoType: DeliverableDemoType
  images?: Array<{ src: string; alt: string }>
}

export const deliverables: Array<{
  number: string
  icon: IconName
  title: string
  titleAccent?: string
  description: string
  items: string[]
  image?: string
  imageAlt?: string
  logo?: string
  logoAlt?: string
  images?: Array<{ src: string; alt: string }>
  badge?: string
  featured?: boolean
  variant?: 'split' | 'features'
  featureItems?: DeliverableFeatureItem[]
  partner?: {
    name: string
    logo: string
    logoAlt: string
    headline: string
    text: string
  }
}> = [
  {
    number: '01',
    icon: 'shoppingBag',
    title: 'Site Cardápio Digital Delivery',
    titleAccent: 'Sem depender de Aplicativos de terceiro.',
    description:
      'Seu próprio canal de pedidos: site + cardápio digital delivery para vender pelo Instagram, WhatsApp e Google, com mais margem e sem ficar refém de aplicativos de terceiros.',
    items: ['Site do seu negócio', 'Cardápio digital delivery', 'Pedidos pelo seu canal'],
    featured: true,
    partner: {
      name: 'OrdemFlux',
      logo: '/images/partners/ordemflux.png',
      logoAlt: 'Logo OrdemFlux',
      headline: '3 meses grátis incluso',
      text:
        'Os mentorados terão acesso à ferramenta OrdemFlux por 3 meses grátis. Depois, podem assinar o plano ou adquirir a ferramenta para sempre com uma compra única.',
    },
    images: [
      {
        src: '/images/cardapios-digitais/comida-japonesa.png',
        alt: 'Exemplo de cardápio digital delivery para restaurante japonês',
      },
      {
        src: '/images/cardapios-digitais/cardapio-acai.png',
        alt: 'Exemplo de cardápio digital delivery para açaíteria',
      },
      {
        src: '/images/cardapios-digitais/hamburgueria.png',
        alt: 'Exemplo de cardápio digital delivery para hamburgueria',
      },
    ],
  },
  {
    number: '02',
    icon: 'sparkles',
    title: 'Base Épica',
    titleAccent: 'Sistema exclusivo de geração de mídia.',
    description:
      'Um sistema que conhece o seu negócio e facilita carrosséis automáticos, artes profissionais sem cara de IA, aprimoramento de imagem e vídeos para alavancar suas redes.',
    items: [
      'Carrosséis automáticos',
      'Aprimoramento de imagem',
      'Vídeos',
      'Biblioteca',
    ],
    variant: 'features',
    logo: '/images/base-epica/logotipo-base-epica.jpg',
    logoAlt: 'Logotipo Base Épica',
    image: '/images/base-epica/dashboard-hero.png',
    imageAlt: 'Interface da Base Épica: sistema de geração de mídia para redes sociais',
    featureItems: [
      {
        id: 'carrosseis',
        title: 'Carrosséis automáticos',
        description: 'Escolha o template e a Base Épica monta a sequência pronta para publicar.',
        demoType: 'carrosseis',
        images: [
          {
            src: '/images/base-epica/template-carrossel.png',
            alt: 'Template de carrossel promocional para açaíteria',
          },
        ],
      },
      {
        id: 'aprimoramento',
        title: 'Aprimoramento de imagem',
        description: 'Eleve fotos de produto gastronômico com resultado profissional, sem visual genérico de IA.',
        demoType: 'aprimoramento',
        images: [
          {
            src: '/images/base-epica/gastro-antes.png',
            alt: 'Antes: foto simples do sanduíche',
          },
          {
            src: '/images/base-epica/gastro-depois.png',
            alt: 'Depois: foto profissional com luz e apetite de anúncio',
          },
        ],
      },
      {
        id: 'videos',
        title: 'Vídeos para o seu negócio',
        description: 'Gere vídeos curtos alinhados à sua marca para Reels, Stories e anúncios.',
        demoType: 'videos',
        images: [
          {
            src: '/images/base-epica/video-poster-acai.jpg',
            alt: 'Prévia de vídeo gastronômico: bowl de açaí',
          },
        ],
      },
      {
        id: 'biblioteca',
        title: 'Biblioteca',
        description: 'Referências prontas para inspirar e acelerar a criação de conteúdo.',
        demoType: 'biblioteca',
        images: [
          { src: '/images/base-epica/biblioteca/ref-01.jpg', alt: 'Referência de arte 1' },
          { src: '/images/base-epica/biblioteca/ref-02.jpg', alt: 'Referência de arte 2' },
          { src: '/images/base-epica/biblioteca/ref-03.jpg', alt: 'Referência de arte 3' },
          { src: '/images/base-epica/biblioteca/ref-04.jpg', alt: 'Referência de arte 4' },
          { src: '/images/base-epica/biblioteca/ref-05.jpg', alt: 'Referência de arte 5' },
          { src: '/images/base-epica/biblioteca/ref-06.jpg', alt: 'Referência de arte 6' },
          { src: '/images/base-epica/biblioteca/ref-07.jpg', alt: 'Referência de arte 7' },
          { src: '/images/base-epica/biblioteca/ref-08.jpg', alt: 'Referência de arte 8' },
          { src: '/images/base-epica/biblioteca/ref-09.jpg', alt: 'Referência de arte 9' },
          { src: '/images/base-epica/biblioteca/ref-10.jpg', alt: 'Referência de arte 10' },
          { src: '/images/base-epica/biblioteca/ref-11.jpg', alt: 'Referência de arte 11' },
          { src: '/images/base-epica/biblioteca/ref-12.jpg', alt: 'Referência de arte 12' },
          { src: '/images/base-epica/biblioteca/ref-13.jpg', alt: 'Referência de arte 13' },
        ],
      },
    ],
  },
  {
    number: '03',
    icon: 'mapPin',
    title: 'Google Meu Negócio Pro',
    description:
      'Os participantes recebem suporte para configurar o Google Meu Negócio da forma correta e serem encontrados com mais facilidade por quem pesquisa perto de você.',
    items: [
      'Configuração correta do perfil',
      'Mais chances de ser encontrado no Google',
      'Suporte para deixar sua presença local profissional',
    ],
    image: '/images/google-meu-negocio/cartao-google.png',
    imageAlt: 'Google Meu Negócio Pro: configuração profissional para ser encontrado',
  },
]

export const menuDeliverySteps = [
  {
    number: '01',
    title: 'Crie seu cardápio',
    description: 'Cadastre produtos, preços e adicionais em poucos minutos.',
    tone: 'menu' as const,
  },
  {
    number: '02',
    title: 'Envie o link',
    description: 'Coloque na bio, status ou envie direto no WhatsApp.',
    tone: 'share' as const,
  },
  {
    number: '03',
    title: 'Receba pedidos organizados',
    description: 'Pedido chega no WhatsApp e no painel do restaurante.',
    tone: 'orders' as const,
  },
]

export const benefits: Array<{
  icon: IconName
  title: string
  description: string
}> = [
  {
    icon: 'compass',
    title: 'Clareza do próximo passo',
    description: 'Saiba o que priorizar agora para crescer sem se perder em mil ideias soltas.',
  },
  {
    icon: 'heart',
    title: 'Produto que desperta desejo',
    description: 'Crie ofertas e apresentações que as pessoas querem provar, fotografar e indicar.',
  },
  {
    icon: 'message',
    title: 'Conteúdo que vira movimento',
    description: 'Troque posts “bonitos e vazios” por comunicação que aquece e vende.',
  },
  {
    icon: 'chart',
    title: 'Mais lucro, não só volume',
    description: 'Melhore margem, ticket e recorrência sem depender só de aumentar o faturamento.',
  },
  {
    icon: 'store',
    title: 'Canais próprios mais fortes',
    description: 'Reduza a dependência de marketplace e fortaleça seu Instagram, WhatsApp e cardápio digital.',
  },
  {
    icon: 'users',
    title: 'Comunidade e indicação',
    description: 'Transforme clientes em divulgadores e construa buzz real na sua cidade.',
  },
]

export const calls = [
  {
    number: '01',
    title: 'Diagnóstico e posicionamento',
    description:
      'Enxergue onde sua marca está hoje, o que te diferencia e onde está a maior oportunidade de crescer.',
    topics: ['Diagnóstico da marca', 'Público e concorrência', 'Percepção de valor'],
    task: 'Mapear posicionamento, concorrentes e pontos fortes do negócio.',
  },
  {
    number: '02',
    title: 'Produto campeão e pesquisa',
    description:
      'Defina produtos com mais potencial de desejo, conteúdo e venda, sem chute e sem moda vazia.',
    topics: ['Pesquisa de mercado', 'Produto autoral', 'Oferta e apresentação'],
    task: 'Escolher ou desenvolver um produto com potencial de destaque.',
  },
  {
    number: '03',
    title: 'Story Copy e conteúdo que vende',
    description:
      'Monte sequências de Stories que aquecem, criam desejo e pedem a compra de forma natural.',
    topics: ['Sequências de Stories', 'Bastidores', 'Desejo e prova social'],
    task: 'Publicar uma sequência de Stories com intenção de venda.',
  },
  {
    number: '04',
    title: 'Vídeos orgânicos e crescimento',
    description:
      'Transforme a rotina do negócio em Reels que aumentam alcance, reconhecimento e movimento.',
    topics: ['Ganchos para Reels', 'Conteúdo de produto', 'Frequência'],
    task: 'Produzir e publicar uma sequência de vídeos curtos.',
  },
  {
    number: '05',
    title: 'Influenciadores, comunidade e buzz',
    description:
      'Crie ações locais com clientes e microinfluenciadores para gerar prova social e conversa.',
    topics: ['Microinfluenciadores', 'Collabs locais', 'Experiências presenciais'],
    task: 'Montar uma ação com cliente, parceiro ou influenciador local.',
  },
  {
    number: '06',
    title: 'Presença digital e plano de 90 dias',
    description:
      'Feche a jornada com canais próprios, Google e um plano claro para continuar crescendo depois da mentoria.',
    topics: ['Google Meu Negócio', 'Canal próprio', 'Métricas e plano'],
    task: 'Melhorar a presença digital e montar o plano dos próximos 90 dias.',
  },
]

export const idealBusinesses = [
  'Cafeterias',
  'Restaurantes',
  'Hamburguerias',
  'Pizzarias',
  'Docerias',
  'Confeitarias',
  'Lanchonetes',
  'Food trucks',
  'Deliverys',
  'Marcas artesanais',
]

export const faqs = [
  {
    question: 'A mentoria é ao vivo?',
    answer:
      'Sim. São 6 calls coletivas ao vivo, com direcionamento prático, espaço para dúvidas e tarefas para aplicar no seu negócio entre os encontros.',
  },
  {
    question: 'As calls ficam gravadas?',
    answer:
      'Sim. A proposta é disponibilizar as gravações por tempo limitado para quem não conseguir participar ao vivo acompanhar e aplicar.',
  },
  {
    question: 'Para quem é a BrioFood?',
    answer:
      'Para donos de cafeterias, restaurantes, hamburguerias, docerias, confeitarias, lanchonetes, food trucks, deliverys e marcas locais de alimentação que querem vender mais e se destacar.',
  },
  {
    question: 'Preciso já ter um negócio funcionando?',
    answer:
      'O ideal é já ter o negócio em operação ou estar prestes a lançar. A mentoria fica muito mais forte quando você consegue aplicar as tarefas no mundo real.',
  },
  {
    question: 'Serve para quem vende só por delivery?',
    answer:
      'Sim. Delivery também precisa de marca, conteúdo, presença digital e canal próprio. A BrioFood ajuda exatamente nisso.',
  },
  {
    question: 'Vou receber suporte?',
    answer:
      'Sim. Além das calls, você conta com suporte da equipe e acesso anual ao grupo de acompanhamento no WhatsApp para tirar dúvidas e avançar nas tarefas.',
  },
  {
    question: 'Quanto tempo dura o acesso ao grupo?',
    answer:
      'O acesso ao grupo de acompanhamento é anual: você permanece no grupo por 1 ano a partir da entrada na turma.',
  },
  {
    question: 'O cardápio digital e a Base Épica estão inclusos?',
    answer:
      'Sim. A oferta inclui o site cardápio digital delivery e acesso à Base Épica, a ferramenta de geração de mídia para carrosséis, artes, aprimoramento de imagem e vídeos.',
  },
  {
    question: 'A mentoria ensina tráfego pago?',
    answer:
      'O foco principal não é anúncio pago. O coração da BrioFood é produto, conteúdo orgânico, Story Copy, comunidade, influência local, Google e canais próprios.',
  },
  {
    question: 'Quanto tempo dura a mentoria?',
    answer:
      'A estrutura principal tem 6 calls coletivas, com tarefas entre os encontros. O calendário completo da turma será confirmado na abertura das inscrições.',
  },
  {
    question: 'Qual é o investimento?',
    answer:
      'A mentoria custa 4x de R$ 255 ou R$ 998 à vista. O valor inclui a jornada completa e o acesso anual ao grupo de acompanhamento.',
  },
  {
    question: 'Por que entrar agora?',
    answer:
      'Porque cada semana sem método é mais uma semana improvisando. A próxima turma é limitada para manter qualidade de acompanhamento, e quem entra recebe mentoria + ferramentas + suporte no mesmo pacote.',
  },
]
