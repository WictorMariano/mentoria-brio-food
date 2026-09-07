export const siteConfig = {
  checkoutUrl: '#inscricao',
  linkedinUrl: '#',
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

export const deliverables: Array<{
  number: string
  icon: IconName
  title: string
  description: string
  items: string[]
  featured?: boolean
}> = [
  {
    number: '01',
    icon: 'users',
    title: '6 calls coletivas ao vivo',
    description:
      'Encontros práticos para você sair com direção clara: o que fazer, por que fazer e como aplicar no seu negócio ainda na mesma semana.',
    items: ['Orientação estratégica', 'Espaço para dúvidas', 'Tarefas de implementação'],
    featured: true,
  },
  {
    number: '02',
    icon: 'chart',
    title: 'Gestão para lucrar de verdade',
    description:
      'Pare de olhar só o faturamento. Aprenda a enxergar margem, ticket, mix e o que realmente sobra no caixa no fim do mês.',
    items: ['Margem e precificação', 'Ticket e recorrência', 'Decisões com números'],
  },
  {
    number: '03',
    icon: 'sparkles',
    title: 'Conteúdo que gera desejo e venda',
    description:
      'Stories, Reels e bastidores com intenção: não para “aparecer”, mas para atrair, aquecer e vender todos os dias.',
    items: ['Story Copy', 'Reels orgânicos', 'Prova social e lançamento'],
    featured: true,
  },
  {
    number: '04',
    icon: 'trending',
    title: 'Crescimento e buzz local',
    description:
      'Ações para sua marca ser comentada, indicada e procurada na região — com lançamentos, comunidade e parcerias.',
    items: ['Lançamentos estratégicos', 'Microinfluenciadores', 'Comunidade e recompra'],
  },
  {
    number: '05',
    icon: 'bot',
    title: 'Ferramenta com IA para redes',
    description:
      'Acelere ideias, roteiros e organização de posts para manter frequência sem viver no improviso.',
    items: ['Ideias prontas para usar', 'Roteiros de vídeos', 'Planejamento da semana'],
  },
  {
    number: '06',
    icon: 'video',
    title: 'Criador de vídeo incluso',
    description:
      'Facilite a produção de Reels e Stories e mantenha o negócio ativo nas redes sem travar na execução.',
    items: ['Produção mais rápida', 'Formatos que performam', 'Rotina de conteúdo'],
  },
  {
    number: '07',
    icon: 'shoppingBag',
    title: 'Cardápio digital próprio',
    description:
      'Venda direto pelo seu link no Instagram, WhatsApp e Google — com mais autonomia e menos dependência do iFood.',
    items: ['Canal próprio de pedidos', 'Mais margem por venda', 'Relacionamento direto'],
  },
  {
    number: '08',
    icon: 'mapPin',
    title: 'Google Meu Negócio e presença local',
    description:
      'Configure sua presença para quem pesquisa perto de você te encontrar, confiar e escolher o seu estabelecimento.',
    items: ['Busca e Maps', 'Perfil profissional', 'Mais confiança local'],
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
      'Defina produtos com mais potencial de desejo, conteúdo e venda — sem chute e sem moda vazia.',
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
      'Sim. Além das calls, você conta com suporte da equipe e grupo de acompanhamento no WhatsApp para tirar dúvidas e avançar nas tarefas.',
  },
  {
    question: 'O cardápio digital e a ferramenta de IA estão inclusos?',
    answer:
      'Sim. A oferta inclui cardápio digital para pedidos próprios e ferramenta com IA para acelerar a criação de conteúdo.',
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
    question: 'Por que entrar agora?',
    answer:
      'Porque cada semana sem método é mais uma semana improvisando. A próxima turma é limitada para manter qualidade de acompanhamento — e quem entra recebe mentoria + ferramentas + suporte no mesmo pacote.',
  },
]
