import type { QuizQuestion, PersonalityQuestion, PersonalityResult } from '@/types'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Qual é o nome completo do protagonista interpretado por Wagner Moura?',
    options: ['Roberto Nascimento', 'Carlos Nascimento', 'Paulo Nascimento', 'Ricardo Nascimento'],
    correctAnswer: 0,
    explanation: 'O Capitão Roberto Nascimento é o protagonista e narrador do filme Tropa de Elite.',
  },
  {
    id: 2,
    question: 'Qual batalhão da Polícia Militar é retratado no filme?',
    options: ['CORE', 'BOPE', 'GOE', 'GATE'],
    correctAnswer: 1,
    explanation: 'O BOPE (Batalhão de Operações Policiais Especiais) é a unidade de elite da PM do Rio de Janeiro.',
  },
  {
    id: 3,
    question: 'Qual é o bordão mais famoso do Capitão Nascimento?',
    options: ['Sobe, BOPE!', 'Pede pra sair!', 'Missão cumprida!', 'Caveira!'],
    correctAnswer: 1,
    explanation: '"Pede pra sair!" se tornou um dos bordões mais icônicos do cinema brasileiro.',
  },
  {
    id: 4,
    question: 'Qual ator interpretou André Matias?',
    options: ['Caio Junqueira', 'André Ramiro', 'Milhem Cortaz', 'Seu Jorge'],
    correctAnswer: 1,
    explanation: 'André Ramiro, que era policial militar na vida real, interpretou Matias.',
  },
  {
    id: 5,
    question: 'Qual curso Matias frequentava paralelamente à carreira policial?',
    options: ['Medicina', 'Engenharia', 'Direito', 'Administração'],
    correctAnswer: 2,
    explanation: 'Matias cursava Direito em uma universidade pública, vivendo entre dois mundos.',
  },
  {
    id: 6,
    question: 'Quem dirigiu Tropa de Elite?',
    options: ['Fernando Meirelles', 'José Padilha', 'Walter Salles', 'Cidade de Deus'],
    correctAnswer: 1,
    explanation: 'José Padilha dirigiu ambos os filmes da franquia Tropa de Elite.',
  },
  {
    id: 7,
    question: 'Em qual festival o filme ganhou o Urso de Ouro?',
    options: ['Cannes', 'Veneza', 'Berlim', 'Toronto'],
    correctAnswer: 2,
    explanation: 'Tropa de Elite ganhou o Urso de Ouro no Festival de Cinema de Berlim em 2008.',
  },
  {
    id: 8,
    question: 'Qual evento motivou a missão principal do BOPE no filme?',
    options: ['Eleições', 'Visita do Papa', 'Olimpíadas', 'Copa do Mundo'],
    correctAnswer: 1,
    explanation: 'A visita do Papa ao Rio de Janeiro é o que motiva a urgência da missão do BOPE no filme.',
  },
  {
    id: 9,
    question: 'Qual é o símbolo do BOPE?',
    options: [
      'Águia com espada',
      'Caveira com faca cravada',
      'Leão com escudo',
      'Serpente com estrela',
    ],
    correctAnswer: 1,
    explanation: 'A caveira com a faca cravada é o símbolo icônico do BOPE.',
  },
  {
    id: 10,
    question: 'Qual ator interpretou Neto?',
    options: ['André Ramiro', 'Wagner Moura', 'Caio Junqueira', 'Milhem Cortaz'],
    correctAnswer: 2,
    explanation: 'Caio Junqueira interpretou Neto, personagem cuja trajetória é uma das mais impactantes do filme.',
  },
  {
    id: 11,
    question: 'Qual livro serviu de base para o roteiro do filme?',
    options: ['Cidade de Deus', 'Elite da Tropa', 'Capitão Nascimento', 'Guerra do Rio'],
    correctAnswer: 1,
    explanation: 'O livro "Elite da Tropa" de Luiz Eduardo Soares, André Batista e Rodrigo Pimentel inspirou o filme.',
  },
  {
    id: 12,
    question: 'Em que ano Tropa de Elite foi lançado?',
    options: ['2005', '2006', '2007', '2008'],
    correctAnswer: 2,
    explanation: 'Tropa de Elite foi lançado nos cinemas brasileiros em outubro de 2007.',
  },
  {
    id: 13,
    question: 'Qual é a principal motivação pessoal de Nascimento para deixar o BOPE?',
    options: [
      'Aposentadoria',
      'Nascimento do filho e pressão da esposa',
      'Promoção para coronel',
      'Mudança de cidade',
    ],
    correctAnswer: 1,
    explanation: 'Nascimento enfrenta a pressão de Rosane e o nascimento iminente do filho como motivadores pessoais.',
  },
  {
    id: 14,
    question: 'O que acontece com a cópia do filme antes da estreia?',
    options: [
      'Foi roubada do estúdio',
      'Vazou na internet e nos camelôs',
      'Foi censurada pelo governo',
      'Nada de especial',
    ],
    correctAnswer: 1,
    explanation: 'Uma cópia pirata vazou semanas antes da estreia, gerando mais de 11 milhões de cópias ilegais.',
  },
  {
    id: 15,
    question: 'Qual é a relação entre Matias e Neto?',
    options: ['Irmãos', 'Primos', 'Melhores amigos', 'Rivais'],
    correctAnswer: 2,
    explanation: 'Matias e Neto são melhores amigos que juntos decidem ingressar no BOPE.',
  },
  {
    id: 16,
    question: 'Quem escreveu o roteiro junto com José Padilha?',
    options: ['Fernando Meirelles', 'Bráulio Mantovani', 'Paulo Lins', 'Glauber Rocha'],
    correctAnswer: 1,
    explanation: 'Bráulio Mantovani, também roteirista de Cidade de Deus, co-escreveu o roteiro.',
  },
  {
    id: 17,
    question: 'Qual é o nome da esposa do Capitão Nascimento?',
    options: ['Maria', 'Ana', 'Rosane', 'Fernanda'],
    correctAnswer: 2,
    explanation: 'Rosane é a esposa de Nascimento, que pressiona para que ele deixe o BOPE.',
  },
  {
    id: 18,
    question: 'Wagner Moura é natural de qual estado brasileiro?',
    options: ['Rio de Janeiro', 'São Paulo', 'Bahia', 'Minas Gerais'],
    correctAnswer: 2,
    explanation: 'Wagner Moura é baiano, nascido em Salvador, e precisou trabalhar o sotaque carioca para o papel.',
  },
  {
    id: 19,
    question: 'Qual filme hollywoodiano José Padilha dirigiu após Tropa de Elite?',
    options: ['Die Hard 6', 'RoboCop', 'The Expendables', 'Fast & Furious'],
    correctAnswer: 1,
    explanation: 'José Padilha dirigiu o remake de RoboCop (2014) em Hollywood.',
  },
  {
    id: 20,
    question: 'Quantos espectadores Tropa de Elite 2 atraiu aos cinemas?',
    options: ['5 milhões', '8 milhões', '11 milhões', '15 milhões'],
    correctAnswer: 2,
    explanation: 'Tropa de Elite 2 atraiu mais de 11 milhões de espectadores, recorde na época.',
  },
]

export const personalityQuestions: PersonalityQuestion[] = [
  {
    id: 1,
    question: 'Diante de uma injustiça, qual é sua primeira reação?',
    options: [
      { text: 'Tomo uma atitude imediata, não importa o risco', scores: { nascimento: 3, neto: 2 } },
      { text: 'Analiso a situação antes de agir', scores: { matias: 3, fabio: 1 } },
      { text: 'Busco resolver com inteligência e estratégia', scores: { matias: 2, fabio: 2 } },
      { text: 'Sigo as regras mesmo discordando', scores: { fabio: 3 } },
    ],
  },
  {
    id: 2,
    question: 'Como você lida com pressão extrema?',
    options: [
      { text: 'Fico mais focado e determinado', scores: { nascimento: 3 } },
      { text: 'Mantenho a calma e penso racionalmente', scores: { matias: 3 } },
      { text: 'Uso a adrenalina como combustível', scores: { neto: 3 } },
      { text: 'Sigo o protocolo e confio no treinamento', scores: { fabio: 3 } },
    ],
  },
  {
    id: 3,
    question: 'Qual qualidade você mais valoriza em um líder?',
    options: [
      { text: 'Autoridade e decisão firme', scores: { nascimento: 3 } },
      { text: 'Inteligência e visão estratégica', scores: { matias: 3, fabio: 1 } },
      { text: 'Coragem e disposição para a linha de frente', scores: { neto: 3 } },
      { text: 'Lealdade e disciplina', scores: { fabio: 3 } },
    ],
  },
  {
    id: 4,
    question: 'Como você trabalha melhor?',
    options: [
      { text: 'Liderando e tomando decisões sozinho', scores: { nascimento: 3 } },
      { text: 'Em dupla, com alguém de confiança', scores: { neto: 2, matias: 2 } },
      { text: 'Planejando cada detalhe antes de executar', scores: { matias: 3 } },
      { text: 'Seguindo ordens de alguém que respeito', scores: { fabio: 3 } },
    ],
  },
  {
    id: 5,
    question: 'O que te motiva no dia a dia?',
    options: [
      { text: 'Cumprir minha missão a qualquer custo', scores: { nascimento: 3 } },
      { text: 'Fazer a diferença no mundo', scores: { neto: 3 } },
      { text: 'Conhecimento e crescimento pessoal', scores: { matias: 3 } },
      { text: 'Manter a ordem e a disciplina', scores: { fabio: 3 } },
    ],
  },
  {
    id: 6,
    question: 'Como você reage quando alguém questiona sua decisão?',
    options: [
      { text: 'Não tolero questionamentos — eu sei o que faço', scores: { nascimento: 3 } },
      { text: 'Considero o argumento, mas defendo minha posição', scores: { matias: 3 } },
      { text: 'Fico irritado mas ouço', scores: { neto: 2, nascimento: 1 } },
      { text: 'Aceito feedback e ajusto se necessário', scores: { fabio: 2, matias: 1 } },
    ],
  },
  {
    id: 7,
    question: 'Em uma situação de risco, você:',
    options: [
      { text: 'Comando a operação e assumo a responsabilidade', scores: { nascimento: 3 } },
      { text: 'Vou direto para a ação, sem pensar duas vezes', scores: { neto: 3 } },
      { text: 'Busco a melhor rota estratégica', scores: { matias: 3 } },
      { text: 'Executo o plano definido pelo líder', scores: { fabio: 3 } },
    ],
  },
  {
    id: 8,
    question: 'O que você faria se descobrisse corrupção no seu ambiente de trabalho?',
    options: [
      { text: 'Confrontaria diretamente, com consequências', scores: { nascimento: 3 } },
      { text: 'Documentaria provas e agiria no momento certo', scores: { matias: 3 } },
      { text: 'Denunciaria imediatamente, sem medo', scores: { neto: 3 } },
      { text: 'Reportaria ao superior hierárquico', scores: { fabio: 3 } },
    ],
  },
  {
    id: 9,
    question: 'Qual é seu maior medo?',
    options: [
      { text: 'Não conseguir proteger quem depende de mim', scores: { nascimento: 3 } },
      { text: 'Perder minha identidade no processo', scores: { matias: 3 } },
      { text: 'Não poder fazer nada enquanto algo errado acontece', scores: { neto: 3 } },
      { text: 'Falhar na missão', scores: { fabio: 3 } },
    ],
  },
  {
    id: 10,
    question: 'Como é seu círculo social?',
    options: [
      { text: 'Pequeno e seleto — poucos merecem minha confiança', scores: { nascimento: 3 } },
      { text: 'Diversificado — convivo com pessoas de todos os tipos', scores: { matias: 3 } },
      { text: 'Leal e unido — meus amigos são minha família', scores: { neto: 3 } },
      { text: 'Baseado no trabalho — meus colegas são meus aliados', scores: { fabio: 3 } },
    ],
  },
  {
    id: 11,
    question: 'Qual frase mais te representa?',
    options: [
      { text: 'Missão dada é missão cumprida', scores: { nascimento: 3 } },
      { text: 'Conhecimento é a melhor arma', scores: { matias: 3 } },
      { text: 'Coragem não é ausência de medo', scores: { neto: 3 } },
      { text: 'Disciplina é liberdade', scores: { fabio: 3 } },
    ],
  },
  {
    id: 12,
    question: 'Como você lida com regras que considera injustas?',
    options: [
      { text: 'Imponho minha própria justiça', scores: { nascimento: 3 } },
      { text: 'Trabalho para mudá-las de dentro do sistema', scores: { matias: 3 } },
      { text: 'Quebro as regras se for necessário', scores: { neto: 3 } },
      { text: 'Sigo as regras enquanto busco alterá-las', scores: { fabio: 3 } },
    ],
  },
  {
    id: 13,
    question: 'O que você faz quando está sob estresse emocional?',
    options: [
      { text: 'Canalizo para o trabalho', scores: { nascimento: 3 } },
      { text: 'Reflito e busco entender a situação', scores: { matias: 3 } },
      { text: 'Desabafo com quem confio', scores: { neto: 3 } },
      { text: 'Mantenho a compostura e sigo em frente', scores: { fabio: 3 } },
    ],
  },
  {
    id: 14,
    question: 'Qual seria seu papel em uma equipe de resgate?',
    options: [
      { text: 'Comandante — tomando todas as decisões', scores: { nascimento: 3 } },
      { text: 'Estrategista — planejando a melhor abordagem', scores: { matias: 3 } },
      { text: 'Primeiro a entrar — liderando pelo exemplo', scores: { neto: 3 } },
      { text: 'Executor — garantindo que o plano seja cumprido', scores: { fabio: 3 } },
    ],
  },
  {
    id: 15,
    question: 'Como você quer ser lembrado?',
    options: [
      { text: 'Como alguém que nunca recuou diante do perigo', scores: { nascimento: 3 } },
      { text: 'Como alguém que pensou além do óbvio', scores: { matias: 3 } },
      { text: 'Como alguém que lutou pelo que acreditava', scores: { neto: 3 } },
      { text: 'Como alguém em quem sempre se podia confiar', scores: { fabio: 3 } },
    ],
  },
]

export const personalityResults: PersonalityResult[] = [
  {
    id: 'nascimento',
    character: 'Capitão Nascimento',
    title: 'Você é o Capitão Nascimento!',
    description:
      'Líder nato, determinado e implacável. Você não tolera injustiça e está sempre disposto a tomar as decisões difíceis que ninguém mais quer tomar. Sua força de vontade é admirável, mas cuidado para não deixar que a missão consuma sua vida pessoal.',
    traits: ['Liderança', 'Determinação', 'Autoridade', 'Incorruptibilidade'],
    imageUrl: '/images/results/nascimento.jpg',
  },
  {
    id: 'matias',
    character: 'André Matias',
    title: 'Você é o Matias!',
    description:
      'Inteligente, estratégico e observador. Você consegue transitar entre diferentes mundos e adaptar-se a qualquer situação. Sua maior força é a capacidade de análise, mas sua dualidade pode ser fonte de conflito interno.',
    traits: ['Inteligência', 'Estratégia', 'Adaptabilidade', 'Análise'],
    imageUrl: '/images/results/matias.jpg',
  },
  {
    id: 'neto',
    character: 'Neto',
    title: 'Você é o Neto!',
    description:
      'Corajoso, idealista e leal até o fim. Você vive com intensidade e não tem medo de colocar a cara no perigo por aquilo em que acredita. Seus amigos sabem que podem contar com você em qualquer situação.',
    traits: ['Coragem', 'Idealismo', 'Lealdade', 'Intensidade'],
    imageUrl: '/images/results/neto.jpg',
  },
  {
    id: 'fabio',
    character: 'Capitão Fábio',
    title: 'Você é o Capitão Fábio!',
    description:
      'Disciplinado, confiável e eficiente. Você é o tipo de pessoa em quem todos confiam para executar qualquer tarefa com perfeição. Sua lealdade e pragmatismo fazem de você o aliado perfeito em qualquer situação.',
    traits: ['Disciplina', 'Confiabilidade', 'Eficiência', 'Lealdade'],
    imageUrl: '/images/results/fabio.jpg',
  },
]
