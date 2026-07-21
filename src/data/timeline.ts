import type { TimelineEvent } from '@/types'

export const timelineEvents: TimelineEvent[] = [
  {
    id: 't1',
    year: '1997',
    title: 'Publicação de "Elite da Tropa"',
    description:
      'Luiz Eduardo Soares, André Batista e Rodrigo Pimentel publicam o livro que serve de base para o filme, reunindo relatos reais do BOPE.',
    type: 'production',
  },
  {
    id: 't2',
    year: '2005',
    title: 'Início do desenvolvimento do roteiro',
    description:
      'José Padilha e Bráulio Mantovani começam a adaptar o livro para o cinema, trabalhando intensamente no roteiro.',
    type: 'production',
  },
  {
    id: 't3',
    year: '2006',
    title: 'Início das filmagens',
    description:
      'As filmagens começam no Rio de Janeiro, com locações em favelas reais e intenso treinamento do elenco.',
    type: 'production',
  },
  {
    id: 't4',
    year: '2007 - Início',
    title: 'Vazamento do filme',
    description:
      'Uma cópia pirata vaza na internet e nos camelôs semanas antes da estreia, gerando mais de 11 milhões de cópias ilegais.',
    type: 'cultural',
  },
  {
    id: 't5',
    year: '2007 - Outubro',
    title: 'Estreia nos cinemas brasileiros',
    description:
      'Tropa de Elite estreia oficialmente nos cinemas do Brasil, atraindo milhões de espectadores apesar do vazamento.',
    type: 'film',
  },
  {
    id: 't6',
    year: '2008',
    title: 'Urso de Ouro em Berlim',
    description:
      'O filme ganha o prestigioso Urso de Ouro no Festival de Cinema de Berlim, consagrando José Padilha internacionalmente.',
    type: 'cultural',
  },
  {
    id: 't7',
    year: '2008',
    title: 'Debate nacional sobre segurança pública',
    description:
      'O filme provoca intensos debates sobre violência policial, política de drogas e segurança pública no Brasil.',
    type: 'cultural',
  },
  {
    id: 't8',
    year: '2010',
    title: 'Lançamento de Tropa de Elite 2',
    description:
      'A sequência "O Inimigo Agora é Outro" bate recorde de bilheteria com mais de 11 milhões de espectadores.',
    type: 'film',
  },
  {
    id: 't9',
    year: '2014',
    title: 'José Padilha dirige RoboCop',
    description:
      'Após o sucesso da franquia, Padilha é convidado para dirigir o remake hollywoodiano de RoboCop.',
    type: 'cultural',
  },
  {
    id: 't10',
    year: '2019',
    title: 'Falecimento de Caio Junqueira',
    description:
      'O ator que interpretou Neto falece em um acidente de carro no Rio de Janeiro, aos 46 anos, gerando comoção nacional.',
    type: 'cultural',
  },
]

export const plotTimeline: TimelineEvent[] = [
  {
    id: 'p1',
    year: 'Ato 1',
    title: 'A missão é definida',
    description:
      'O Capitão Nascimento recebe a missão de pacificar a favela antes da visita do Papa. Simultaneamente, enfrenta pressão pessoal com o nascimento iminente do filho.',
    type: 'plot',
  },
  {
    id: 'p2',
    year: 'Ato 1',
    title: 'Matias e Neto na PM convencional',
    description:
      'Os amigos testemunham a corrupção e ineficiência do batalhão convencional, decidindo tentar o ingresso no BOPE.',
    type: 'plot',
  },
  {
    id: 'p3',
    year: 'Ato 2',
    title: 'O treinamento brutal',
    description:
      'Matias e Neto enfrentam o rigoroso curso de formação do BOPE, com provações físicas e psicológicas extremas.',
    type: 'plot',
  },
  {
    id: 'p4',
    year: 'Ato 2',
    title: 'A dupla vida de Matias',
    description:
      'Matias tenta conciliar a vida na universidade com a carreira policial, enfrentando hostilidade em ambos os mundos.',
    type: 'plot',
  },
  {
    id: 'p5',
    year: 'Ato 2',
    title: 'Nascimento observa os candidatos',
    description:
      'O capitão avalia Matias e Neto como potenciais substitutos, reconhecendo qualidades complementares em cada um.',
    type: 'plot',
  },
  {
    id: 'p6',
    year: 'Ato 3',
    title: 'A tragédia',
    description:
      'Eventos trágicos nas favelas mudam o destino dos personagens de forma irreversível, culminando em perdas devastadoras.',
    type: 'plot',
  },
  {
    id: 'p7',
    year: 'Ato 3',
    title: 'A transformação de Matias',
    description:
      'Após os eventos traumáticos, Matias abandona o idealismo e abraça a mentalidade implacável do BOPE.',
    type: 'plot',
  },
  {
    id: 'p8',
    year: 'Desfecho',
    title: 'A caveira tem dono',
    description:
      'O ciclo se completa: Nascimento encontra seu sucessor, mas o preço pago por todos é devastador.',
    type: 'plot',
  },
]
