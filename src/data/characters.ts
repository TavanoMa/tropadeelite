import type { Character } from '@/types'

export const characters: Character[] = [
  {
    id: 'capitao-nascimento',
    name: 'Capitão Nascimento',
    actor: 'Wagner Moura',
    actorSlug: 'wagner-moura',
    rank: 'Capitão',
    role: 'Protagonista e narrador',
    category: 'protagonista',
    shortBio:
      'Capitão do BOPE obcecado com a missão de pacificar as favelas do Rio de Janeiro antes da visita do Papa. Dividido entre a brutalidade necessária do trabalho e os conflitos pessoais que ameaçam destruir sua família.',
    fullBio: `Roberto Nascimento é o capitão do Batalhão de Operações Policiais Especiais (BOPE), a unidade de elite da Polícia Militar do Rio de Janeiro. Veterano de inúmeras operações em favelas dominadas pelo tráfico de drogas, Nascimento carrega o peso de uma missão que parece impossível: combater o crime organizado em um sistema corrompido.

Seu caráter inflexível e sua determinação inabalável o transformaram em um líder respeitado — e temido — dentro do batalhão. Nascimento não tolera corrupção, covardia ou incompetência. Para ele, o BOPE representa a última linha de defesa entre a ordem e o caos nas ruas do Rio.

No entanto, a pressão constante do trabalho cobra seu preço. Nascimento sofre de crises de pânico, seu casamento com Rosane está desmoronando e ele precisa urgentemente encontrar um substituto à altura para assumir seu posto. É nesse contexto que ele avalia dois candidatos promissores: Neto e Matias.

A complexidade de Nascimento reside justamente na contradição que ele encarna. É um homem que acredita genuinamente em justiça, mas que opera dentro de um sistema que frequentemente exige brutalidade. Suas escolhas morais — ou a impossibilidade delas — formam o coração dramático do filme.

Inspirado em figuras reais do BOPE, o Capitão Nascimento se tornou um dos personagens mais icônicos do cinema brasileiro, gerando debates intensos sobre violência policial, segurança pública e a guerra às drogas no Brasil.`,
    history: `A trajetória do Capitão Nascimento no filme começa com a revelação de que ele precisa encontrar um substituto antes da visita do Papa ao Rio de Janeiro. A pressão institucional para garantir a segurança do evento se soma à pressão pessoal: seu filho está prestes a nascer e Rosane, sua esposa, exige que ele deixe o BOPE.

Nascimento narra em primeira pessoa os eventos que se desenrolam, oferecendo ao espectador uma perspectiva íntima e por vezes brutal do cotidiano policial. Ele observa de perto a formação de dois aspirantes — André Matias e Neto — durante o rigoroso treinamento do BOPE.

Ao longo do filme, Nascimento é forçado a tomar decisões impossíveis. Cada operação em favela representa um risco de vida, mas também um teste moral. Ele questiona constantemente os limites entre dever e desumanidade, entre proteger a sociedade e perpetuar um ciclo de violência.

O clímax de sua jornada acontece quando tragédias pessoais e profissionais se entrelaçam, culminando em um desfecho que redefine não apenas seu destino, mas o de todos ao seu redor.`,
    importance: `O Capitão Nascimento é mais do que um personagem — é um símbolo. Ele representa o dilema central da segurança pública brasileira: como combater o crime sem se tornar parte dele? Sua importância transcende o cinema e alimentou debates reais sobre política de drogas, militarização da polícia e desigualdade social.

Wagner Moura criou uma interpretação tão poderosa que o bordão "Pede pra sair!" entrou definitivamente no vocabulário popular brasileiro. O personagem foi eleito diversas vezes como um dos maiores do cinema nacional.

Nascimento também é importante por desafiar o maniqueísmo. Ele não é herói nem vilão — é um homem complexo operando em um sistema falido, e é justamente essa ambiguidade que torna o filme tão provocador.`,
    traits: [
      'Determinado',
      'Autoritário',
      'Leal',
      'Atormentado',
      'Incorruptível',
      'Implacável',
    ],
    quotes: [
      {
        id: 'q1',
        text: 'Pede pra sair!',
        character: 'Capitão Nascimento',
        characterSlug: 'capitao-nascimento',
        context: 'Grito durante o treinamento do BOPE',
        film: 'Tropa de Elite',
      },
      {
        id: 'q2',
        text: 'O sistema é foda, parceiro.',
        character: 'Capitão Nascimento',
        characterSlug: 'capitao-nascimento',
        context: 'Reflexão sobre a corrupção sistêmica',
        film: 'Tropa de Elite',
      },
      {
        id: 'q3',
        text: 'Você não sabe o que é pressão. Pressão é acordar de madrugada, pegar uma arma e entrar numa favela achando que pode não voltar.',
        character: 'Capitão Nascimento',
        characterSlug: 'capitao-nascimento',
        context: 'Desabafo sobre a realidade do trabalho policial',
        film: 'Tropa de Elite',
      },
      {
        id: 'q4',
        text: 'Missão dada é missão cumprida.',
        character: 'Capitão Nascimento',
        characterSlug: 'capitao-nascimento',
        context: 'Lema do BOPE',
        film: 'Tropa de Elite',
      },
    ],
    curiosities: [
      'Wagner Moura ganhou 25kg de massa muscular para o papel e treinou com policiais reais do BOPE durante meses.',
      'O personagem foi inspirado em relatos de policiais reais que colaboraram com o roteiro do filme.',
      'A frase "Pede pra sair!" virou um dos bordões mais famosos da cultura pop brasileira.',
      'Nascimento aparece tanto no primeiro quanto no segundo filme, com arcos narrativos complementares.',
      'A interpretação de Wagner Moura rendeu prêmios em festivais internacionais e catapultou sua carreira para Hollywood.',
    ],
    relationships: [
      {
        character: 'André Matias',
        characterSlug: 'matias',
        type: 'Mentor',
        description:
          'Nascimento vê em Matias a inteligência e o potencial para ser seu substituto no BOPE. A relação evolui de observação distante para mentoria direta.',
      },
      {
        character: 'Neto',
        characterSlug: 'neto',
        type: 'Subordinado/Admirado',
        description:
          'Neto representa a coragem pura que Nascimento admira, mas também a impulsividade que pode ser fatal. Nascimento respeita sua bravura.',
      },
      {
        character: 'Rosane',
        characterSlug: 'rosane',
        type: 'Esposa',
        description:
          'O casamento de Nascimento com Rosane é uma das maiores casualidades da vida no BOPE. Ela representa tudo o que ele arrisca perder.',
      },
    ],
    films: ['Tropa de Elite (2007)', 'Tropa de Elite 2: O Inimigo Agora é Outro (2010)'],
    imageUrl: '/capitao-nascimento.jfif',
    imageAlt: 'Capitão Nascimento interpretado por Wagner Moura em Tropa de Elite',
  },
  {
    id: 'matias',
    name: 'André Matias',
    actor: 'André Ramiro',
    actorSlug: 'andre-ramiro',
    role: 'Protagonista',
    category: 'protagonista',
    shortBio:
      'Policial e estudante de Direito que tenta conciliar dois mundos completamente opostos. Matias é o personagem que melhor representa o conflito entre ideologia e realidade.',
    fullBio: `André Matias é um jovem policial militar que, paralelamente à carreira na polícia, cursa Direito em uma universidade pública. Inteligente, observador e estratégico, Matias vive uma dupla vida que se torna cada vez mais insustentável.

Na universidade, ele convive com estudantes de classe média que romantizam a favela e criticam a polícia sem conhecer sua realidade. Na corporação, enfrenta a corrupção endêmica que compromete até os policiais mais bem-intencionados.

Matias é o personagem mais cerebral do filme. Enquanto Neto age por instinto e bravura, Matias analisa, planeja e calcula. É essa inteligência tática que chama a atenção do Capitão Nascimento, que passa a vê-lo como um potencial sucessor.

A jornada de Matias no filme é uma descida gradual: de estudante idealista a policial endurecido. Os eventos traumáticos que ele testemunha — e dos quais participa — vão moldando sua personalidade até transformá-lo em algo que ele mesmo não reconhece.

O arco de Matias é particularmente poderoso porque ele começa como o personagem com quem o público mais se identifica. Sua transformação é, em muitos sentidos, mais perturbadora do que a brutalidade explícita de Nascimento.`,
    history: `Matias ingressa no curso de formação do BOPE ao lado de seu amigo Neto. Enquanto Neto é movido pela adrenalina e pelo idealismo de combater o crime, Matias carrega motivações mais complexas: ele quer provar que é possível ser um policial honesto em um sistema corrupto.

O treinamento brutal do BOPE testa seus limites físicos e psicológicos. Matias enfrenta humilhações, exaustão e pressão extrema, mas sua determinação silenciosa o mantém firme quando muitos desistem.

Na universidade, a situação se complica quando seus colegas descobrem que ele é policial. A hostilidade cresce, e Matias se vê cada vez mais isolado entre dois mundos que se recusam a aceitá-lo por inteiro.

A morte de Neto marca o ponto de virada definitivo. A partir desse momento, Matias abandona qualquer resquício de ingenuidade e abraça a mentalidade do BOPE com uma intensidade que surpreende até Nascimento.`,
    importance: `Matias representa a tese central do filme: a de que o sistema transforma as pessoas. Ele é a prova viva de que mesmo os mais idealistas podem ser moldados pela violência institucional.

Sua dualidade universidade-polícia também funciona como uma crítica social afiada. Através de Matias, o filme questiona a hipocrisia da classe média intelectualizada que consome drogas enquanto condena a polícia.

O personagem é fundamental para dar ao filme sua dimensão intelectual e filosófica, equilibrando a ação com reflexão.`,
    traits: [
      'Inteligente',
      'Estratégico',
      'Reservado',
      'Determinado',
      'Observador',
      'Adaptável',
    ],
    quotes: [
      {
        id: 'q5',
        text: 'Eu não vou pedir pra sair.',
        character: 'André Matias',
        characterSlug: 'matias',
        context: 'Determinação durante o treinamento do BOPE',
        film: 'Tropa de Elite',
      },
      {
        id: 'q6',
        text: 'Na faculdade eu era policial. Na polícia, eu era o universitário. Eu não pertencia a lugar nenhum.',
        character: 'André Matias',
        characterSlug: 'matias',
        context: 'Reflexão sobre sua dupla vida',
        film: 'Tropa de Elite',
      },
    ],
    curiosities: [
      'André Ramiro era policial militar na vida real antes de se tornar ator.',
      'A experiência real de Ramiro como PM contribuiu enormemente para a autenticidade do personagem.',
      'Matias é considerado o personagem com o arco de transformação mais completo do filme.',
      'O conflito universidade vs. polícia foi baseado em histórias reais de policiais que cursavam faculdade.',
    ],
    relationships: [
      {
        character: 'Neto',
        characterSlug: 'neto',
        type: 'Melhor amigo',
        description:
          'A amizade entre Matias e Neto é o coração emocional do filme. São complementares: Neto é impulsivo, Matias é calculista.',
      },
      {
        character: 'Capitão Nascimento',
        characterSlug: 'capitao-nascimento',
        type: 'Mentor/Comandante',
        description:
          'Nascimento reconhece em Matias as qualidades necessárias para liderar o BOPE. A relação mentor-pupilo define o destino de ambos.',
      },
      {
        character: 'Maria',
        characterSlug: 'maria',
        type: 'Interesse amoroso',
        description:
          'Maria representa o mundo universitário de Matias. Sua relação expõe o conflito entre os dois mundos que ele tenta habitar.',
      },
    ],
    films: ['Tropa de Elite (2007)', 'Tropa de Elite 2: O Inimigo Agora é Outro (2010)'],
    imageUrl: '/matias.jpg',
    imageAlt: 'André Matias interpretado por André Ramiro em Tropa de Elite',
  },
  {
    id: 'neto',
    name: 'Neto',
    actor: 'Caio Junqueira',
    actorSlug: 'caio-junqueira',
    role: 'Protagonista',
    category: 'protagonista',
    shortBio:
      'Policial corajoso e idealista, melhor amigo de Matias. Neto representa a bravura impulsiva e o idealismo que o sistema acaba destruindo.',
    fullBio: `Neto é um jovem policial militar movido por um idealismo feroz e uma coragem que beira a imprudência. Junto com seu melhor amigo André Matias, ele ingressa no BOPE determinado a fazer a diferença no combate ao crime organizado no Rio de Janeiro.

Diferentemente de Matias, que analisa e calcula, Neto age por instinto. Sua bravura é genuína, nascida de uma indignação profunda contra a injustiça e a corrupção que presencia diariamente na polícia convencional.

Neto é o tipo de soldado que todo comandante deseja: destemido, leal e incansável. No entanto, sua impulsividade é também sua maior fraqueza. Ele se coloca em situações de risco extremo sem medir as consequências, guiado por uma certeza moral inabalável.

No treinamento do BOPE, Neto se destaca pela resistência física e mental. Ele encara cada provação como um desafio pessoal, recusando-se a desistir mesmo quando seu corpo implora por alívio.

A tragédia de Neto é a tragédia do idealismo confrontado com a realidade brutal da violência urbana. Ele entra no BOPE acreditando que pode mudar o mundo, sem perceber que o mundo pode mudá-lo — ou destruí-lo — primeiro.`,
    history: `Neto e Matias servem juntos em um batalhão da PM convencional, onde testemunham diariamente a corrupção e a ineficiência do sistema. Frustrados, decidem tentar o ingresso no BOPE, o único lugar onde acreditam poder fazer um trabalho honesto.

O treinamento os leva ao limite. Neto enfrenta as provações com uma determinação quase teimosa, alimentada pela convicção de que o BOPE é o único caminho para combater o crime de verdade.

Fora do quartel, Neto mantém uma relação próxima com Maria, que traz humanidade ao personagem e contrasta com a violência de seu cotidiano profissional.

O destino de Neto é um dos momentos mais impactantes do cinema brasileiro. Sua história serve como catalisador para a transformação final de Matias e como um lembrete devastador de que, na guerra do tráfico, os idealistas são frequentemente as primeiras vítimas.`,
    importance: `Neto é o coração emocional de Tropa de Elite. Enquanto Nascimento representa a dureza e Matias a inteligência, Neto representa o sentimento — a raiva pura contra a injustiça, o desejo genuíno de fazer o certo.

Sua trajetória no filme funciona como uma parábola sobre o custo humano da violência urbana. Neto não é apenas um personagem; é um símbolo de todos os jovens que são consumidos pelo ciclo de violência que tentam combater.

O impacto de seu destino no público brasileiro foi imenso, gerando comoção e debates sobre a vulnerabilidade dos policiais nas operações em favelas.

Caio Junqueira, que interpretou Neto, faleceu em 2019 em um acidente de carro no Rio de Janeiro, tornando o personagem ainda mais simbólico e emocionante para os fãs do filme.`,
    traits: [
      'Corajoso',
      'Impulsivo',
      'Idealista',
      'Leal',
      'Passional',
      'Destemido',
    ],
    quotes: [
      {
        id: 'q7',
        text: 'Eu entrei na polícia pra fazer a diferença, não pra ficar assistindo.',
        character: 'Neto',
        characterSlug: 'neto',
        context: 'Motivação para entrar no BOPE',
        film: 'Tropa de Elite',
      },
      {
        id: 'q8',
        text: 'Ninguém vai me fazer desistir. Ninguém.',
        character: 'Neto',
        characterSlug: 'neto',
        context: 'Determinação durante o treinamento',
        film: 'Tropa de Elite',
      },
    ],
    curiosities: [
      'Caio Junqueira se preparou intensamente para o papel, participando de treinamentos com policiais militares.',
      'O ator faleceu em janeiro de 2019, aos 46 anos, em um trágico acidente no Rio de Janeiro.',
      'A cena do destino final de Neto é considerada uma das mais impactantes do cinema nacional.',
      'Caio Junqueira já era um ator reconhecido antes de Tropa de Elite, com trabalhos em novelas e outros filmes.',
    ],
    relationships: [
      {
        character: 'André Matias',
        characterSlug: 'matias',
        type: 'Melhor amigo',
        description:
          'Neto e Matias compartilham uma amizade profunda forjada na adversidade. Suas diferenças de temperamento se complementam.',
      },
      {
        character: 'Capitão Nascimento',
        characterSlug: 'capitao-nascimento',
        type: 'Comandante admirado',
        description:
          'Neto admira Nascimento pela coragem e integridade, vendo nele o modelo de policial que deseja se tornar.',
      },
      {
        character: 'Maria',
        characterSlug: 'maria',
        type: 'Namorada',
        description:
          'Maria é a namorada de Neto. A relação entre eles representa a humanidade e a ternura que existem por trás da vida policial violenta.',
      },
    ],
    films: ['Tropa de Elite (2007)'],
    imageUrl: '/neto.jpeg',
    imageAlt: 'Neto interpretado por Caio Junqueira em Tropa de Elite',
  },
  {
    id: 'maria',
    name: 'Maria',
    actor: 'Fernanda Machado',
    actorSlug: 'fernanda-machado',
    role: 'Coadjuvante — namorada de Neto e amiga de Matias',
    category: 'coadjuvante',
    shortBio:
      'Estudante universitária, namorada de Neto e ligação entre o mundo da universidade e o mundo policial. Maria é a ponte entre dois universos que se chocam violentamente no filme.',
    fullBio: `Maria é uma jovem estudante universitária que se torna a ligação emocional entre o mundo civil e o mundo policial em Tropa de Elite. Namorada de Neto e próxima de Matias no ambiente da faculdade, Maria representa a perspectiva de quem vive fora da guerra urbana mas é diretamente afetada por ela.

Na universidade, Maria faz parte do círculo de estudantes de classe média que frequentam as aulas de Direito junto com Matias. Ela é sensível, inteligente e genuinamente preocupada com questões sociais — mas sua visão de mundo é inevitavelmente limitada pela distância que a separa da realidade das favelas e do cotidiano policial.

O relacionamento de Maria com Neto coloca em evidência o contraste entre o idealismo acadêmico e a brutalidade prática do combate ao crime. Enquanto Maria discute teorias sobre justiça social na universidade, Neto arrisca a vida enfrentando traficantes armados nas vielas das favelas.

Maria também funciona como uma ponte narrativa entre Matias e o mundo universitário. É através dela que parte da tensão entre a vida dupla de Matias se manifesta, já que Maria conhece ambos os lados de sua existência.

A presença de Maria no filme humaniza os protagonistas masculinos. Ela mostra que por trás dos policiais endurecidos existem homens com vínculos afetivos, medos e vulnerabilidades que o uniforme não consegue esconder.

Sua trajetória no filme acompanha a escalada de violência: à medida que os eventos se tornam mais dramáticos, Maria é forçada a confrontar a realidade de que as pessoas que ama vivem constantemente entre a vida e a morte.`,
    history: `Maria aparece no filme principalmente nos cenários universitários e nos momentos de intimidade com Neto. Ela é apresentada como uma jovem alegre e engajada, que contrasta com a atmosfera sombria e violenta do restante da trama.

Na universidade, Maria convive com estudantes que romantizam a favela e consomem drogas de forma recreativa, sem perceber as consequências sociais de seus atos. Ela ocupa uma posição intermediária: não é tão ingênua quanto alguns de seus colegas, mas também não compreende plenamente a realidade que Neto e Matias enfrentam.

À medida que a trama avança, Maria se torna cada vez mais consciente dos riscos que Neto corre. As despedidas antes das operações, as ligações que podem ser as últimas, a constante incerteza — tudo isso pesa sobre o relacionamento.

Os eventos trágicos do filme atingem Maria de forma devastadora, transformando-a de observadora periférica em vítima direta da violência que permeia toda a narrativa.`,
    importance: `Maria é fundamental para o equilíbrio emocional de Tropa de Elite. Sem ela, o filme seria uma sequência ininterrupta de ação e tensão sem pausas para a humanidade dos personagens respirar.

Ela representa o público — alguém de fora do mundo policial que tenta entender e conviver com uma realidade que não escolheu. Através de Maria, o espectador se conecta emocionalmente com os protagonistas de uma forma que a narrativa em primeira pessoa de Nascimento, por si só, não permitiria.

O personagem também é importante para a crítica social do filme. Maria faz parte do meio universitário que o filme questiona — a classe média que consome drogas e critica a polícia sem se dar conta de sua própria contradição. No entanto, diferente de outros personagens desse universo, Maria demonstra empatia genuína e capacidade de enxergar além dos estereótipos.

Fernanda Machado trouxe ao papel uma sensibilidade que torna Maria memorável apesar de seu tempo de tela relativamente limitado em comparação com os protagonistas masculinos.`,
    traits: [
      'Sensível',
      'Empática',
      'Corajosa',
      'Idealista',
      'Afetuosa',
      'Perceptiva',
    ],
    quotes: [],
    curiosities: [
      'Fernanda Machado é uma atriz brasileira que também fez carreira em Hollywood, atuando em séries americanas.',
      'O papel de Maria, embora coadjuvante, foi essencial para dar dimensão emocional ao filme.',
      'As cenas entre Maria e Neto foram algumas das poucas do filme que mostram leveza e ternura.',
      'A relação Maria-Neto-Matias forma um triângulo emocional que permeia toda a narrativa.',
    ],
    relationships: [
      {
        character: 'Neto',
        characterSlug: 'neto',
        type: 'Namorado',
        description:
          'Maria e Neto vivem um relacionamento amoroso que humaniza o personagem e contrasta com a violência de sua rotina.',
      },
      {
        character: 'André Matias',
        characterSlug: 'matias',
        type: 'Amiga / colega de universidade',
        description:
          'Maria conhece Matias da faculdade e é uma das poucas pessoas que transita entre os dois mundos que ele habita.',
      },
    ],
    films: ['Tropa de Elite (2007)'],
    imageUrl: '/maria.jpg',
    imageAlt: 'Maria interpretada por Fernanda Machado em Tropa de Elite',
  },
  {
    id: 'rosane',
    name: 'Rosane',
    actor: 'Maria Ribeiro',
    actorSlug: 'maria-ribeiro',
    role: 'Coadjuvante — esposa do Capitão Nascimento',
    category: 'coadjuvante',
    shortBio:
      'Esposa do Capitão Nascimento, grávida e pressionando o marido a deixar o BOPE. Rosane representa o custo pessoal e familiar da vida policial.',
    fullBio: `Rosane é a esposa do Capitão Nascimento e uma das personagens mais importantes para compreender a dimensão humana do protagonista. Grávida do primeiro filho do casal, ela exige que Nascimento deixe o BOPE — um pedido que funciona como motor de toda a trama do filme.

Rosane não é uma personagem passiva. Ela é articulada, firme e não tem medo de confrontar o marido, mesmo sabendo quem ele é dentro do batalhão. Para ela, a vida do filho e a integridade da família são prioridades absolutas que deveriam se sobrepor a qualquer missão.

O conflito entre Rosane e Nascimento é, em essência, o conflito entre a vida pessoal e a vida profissional levado ao extremo. Nascimento sabe que sua esposa tem razão — que o BOPE está destruindo sua saúde mental e seu casamento — mas é incapaz de abandonar a missão enquanto não encontrar um substituto digno.

Rosane oferece ao espectador uma perspectiva raramente mostrada em filmes policiais: a da família que espera em casa. Ela vive com o medo constante de que cada operação pode ser a última, de que cada telefonema pode trazer a notícia que toda esposa de policial teme.

A atuação de Maria Ribeiro confere a Rosane uma dignidade e uma força que vão além do papel tradicional de "esposa preocupada". Rosane é uma mulher que faz escolhas e impõe limites, ainda que esses limites sejam constantemente testados pela obsessão do marido com o trabalho.`,
    history: `Rosane aparece ao longo do filme em momentos-chave que ilustram a deterioração do casamento com Nascimento. As discussões entre eles se intensificam à medida que a missão de pacificar a favela se torna mais urgente e perigosa.

A gravidez de Rosane adiciona uma camada de urgência à trama. O nascimento do filho representa não apenas uma nova vida, mas um ultimato: ou Nascimento muda, ou perde sua família.

As cenas domésticas entre Rosane e Nascimento contrastam radicalmente com as cenas de operação policial. No quartel, Nascimento é o comandante inabalável. Em casa, é um marido que não sabe se comunicar, que traz para dentro de casa a tensão que deveria ficar no batalhão.

O desfecho do filme afeta Rosane diretamente, e sua reação reflete o custo real que a violência policial cobra não apenas dos profissionais, mas de suas famílias inteiras.`,
    importance: `Rosane é essencial porque representa o preço pessoal da guerra contra o crime. Sem ela, Nascimento seria apenas um policial em missão. Com ela, ele é um homem dividido entre dois deveres — e é essa divisão que torna o personagem tridimensional.

O casamento em crise de Nascimento e Rosane funciona como uma metáfora da própria sociedade brasileira: dividida entre a necessidade de segurança e o custo humano de obtê-la.

Maria Ribeiro, uma das atrizes mais talentosas de sua geração, trouxe ao papel uma autenticidade que eleva todas as cenas domésticas do filme. Sua Rosane não é um acessório narrativo — é uma personagem com voz, vontade e importância próprias.`,
    traits: [
      'Determinada',
      'Protetora',
      'Articulada',
      'Confrontadora',
      'Amorosa',
      'Resiliente',
    ],
    quotes: [],
    curiosities: [
      'Maria Ribeiro é uma das atrizes mais premiadas do cinema e teatro brasileiro.',
      'As cenas entre Rosane e Nascimento foram improvisadas em vários momentos para captar naturalidade.',
      'O conflito conjugal de Nascimento foi baseado em relatos reais de policiais do BOPE sobre a pressão sobre suas famílias.',
      'Maria Ribeiro e Wagner Moura já haviam trabalhado juntos antes de Tropa de Elite.',
    ],
    relationships: [
      {
        character: 'Capitão Nascimento',
        characterSlug: 'capitao-nascimento',
        type: 'Esposo',
        description:
          'O casamento com Nascimento está sob pressão extrema. Rosane ama o marido mas não aceita perdê-lo para o BOPE.',
      },
    ],
    films: ['Tropa de Elite (2007)', 'Tropa de Elite 2: O Inimigo Agora é Outro (2010)'],
    imageUrl: '/rosane.jfif',
    imageAlt: 'Rosane interpretada por Maria Ribeiro em Tropa de Elite',
  },
  {
    id: 'baiano',
    name: 'Baiano',
    actor: 'Fernanda de Freitas',
    actorSlug: 'baiano-ator',
    nickname: 'Baiano',
    role: 'Antagonista principal',
    category: 'antagonista',
    shortBio:
      'Traficante que comanda o morro e representa a face visível do crime organizado nas favelas retratadas no filme.',
    fullBio: `Baiano é o chefe do tráfico de drogas na favela retratada em Tropa de Elite. Cruel, astuto e territorialista, ele representa a face mais visível do crime organizado que o BOPE tenta combater.

Como líder do tráfico local, Baiano controla não apenas a venda de drogas, mas também a vida dos moradores da comunidade. Ele impõe suas regras com violência e mantém um exército de soldados armados prontos para defender seu território contra facções rivais e contra a polícia.

O personagem serve como contraponto direto ao Capitão Nascimento. Enquanto Nascimento opera dentro da lei — ainda que nas suas margens —, Baiano é a encarnação da criminalidade que o BOPE jura combater. No entanto, o filme também sugere que ambos são produtos do mesmo sistema falido.

Baiano não é retratado como um vilão unidimensional. O filme mostra como o tráfico de drogas cria suas próprias hierarquias e códigos de conduta, oferecendo a jovens sem perspectiva uma estrutura que o Estado falha em proporcionar.

A existência de Baiano é, em última análise, uma consequência da desigualdade social brasileira. Sem justificar suas ações, o filme usa o personagem para ilustrar como a guerra às drogas cria um ciclo interminável de violência.`,
    history: `Baiano ascendeu nas fileiras do tráfico através de uma combinação de brutalidade e inteligência de rua. Ele conhece cada beco, cada entrada e cada esconderijo de seu território, o que lhe confere uma vantagem tática significativa contra as incursões policiais.

Ao longo do filme, Baiano aparece como o obstáculo concreto que o BOPE precisa superar. Suas ações provocam a resposta violenta da polícia, perpetuando o ciclo de violência que define a relação entre morro e asfalto.

O confronto entre o mundo de Baiano e os protagonistas do filme atinge seu ápice quando os interesses do tráfico colidem diretamente com a missão do BOPE de garantir a segurança para a visita papal.`,
    importance: `Baiano é essencial para a estrutura narrativa de Tropa de Elite porque ele dá rosto ao inimigo que o BOPE combate. Sem um antagonista concreto, a missão de Nascimento seria abstrata demais.

Mais do que isso, Baiano permite ao filme explorar o outro lado da guerra às drogas. Ao mostrar a lógica interna do tráfico, o filme evita o simplismo de retratar o conflito como uma luta entre mocinhos e bandidos.

O personagem também é importante porque representa milhares de jovens reais que encontram no tráfico a única opção de ascensão em comunidades abandonadas pelo Estado.`,
    traits: [
      'Violento',
      'Territorialista',
      'Astuto',
      'Autoritário',
      'Desconfiado',
      'Implacável',
    ],
    quotes: [
      {
        id: 'q9',
        text: 'Aqui quem manda sou eu.',
        character: 'Baiano',
        characterSlug: 'baiano',
        context: 'Demonstrando controle sobre o território',
        film: 'Tropa de Elite',
      },
    ],
    curiosities: [
      'O personagem Baiano foi construído a partir de relatos sobre traficantes reais do Rio de Janeiro.',
      'O nome "Baiano" faz referência à origem nordestina do personagem, refletindo os fluxos migratórios reais para o Rio.',
      'As cenas do morro foram filmadas em locações reais, com figurantes da própria comunidade.',
    ],
    relationships: [
      {
        character: 'Capitão Nascimento',
        characterSlug: 'capitao-nascimento',
        type: 'Inimigo',
        description:
          'Baiano e Nascimento representam lados opostos do mesmo conflito. O confronto entre eles é inevitável e definitivo.',
      },
    ],
    films: ['Tropa de Elite (2007)'],
    imageUrl: '/baiano.jpg',
    imageAlt: 'Baiano em cena de Tropa de Elite',
  },
  {
    id: 'fabio',
    name: 'Capitão Fábio',
    actor: 'Milhem Cortaz',
    actorSlug: 'milhem-cortaz',
    rank: 'Capitão',
    role: 'Coadjuvante — braço direito de Nascimento',
    category: 'coadjuvante',
    shortBio:
      'Oficial do BOPE que serve como braço direito de Nascimento. Fábio é um soldado dedicado que compartilha a visão implacável do capitão sobre o combate ao crime.',
    fullBio: `O Capitão Fábio é um oficial experiente do BOPE que opera ao lado do Capitão Nascimento nas operações mais perigosas. Disciplinado e leal, Fábio encarna o espírito de corpo do batalhão e segue as ordens de Nascimento com precisão militar.

Diferentemente de Nascimento, que carrega o peso da liderança e os conflitos internos dela decorrentes, Fábio representa o soldado ideal: focado, eficiente e sem questionamentos existenciais sobre a natureza do trabalho.

Sua presença no filme reforça a ideia de que o BOPE é uma máquina de guerra, composta por homens treinados para operar em condições extremas. Fábio não é movido por dilemas morais — ele é movido pela missão.

A relação entre Fábio e Nascimento é baseada em respeito mútuo e confiança forjada no campo de batalha. Fábio sabe que Nascimento tomará as decisões difíceis quando necessário, e Nascimento sabe que pode contar com Fábio para executá-las sem hesitação.

O personagem, embora tenha menos tempo de tela do que os protagonistas principais, contribui significativamente para a construção do universo do BOPE como instituição, mostrando que Nascimento não é um lobo solitário, mas parte de uma unidade coesa.`,
    history: `Fábio aparece ao longo do filme como participante ativo das operações do BOPE nas favelas. Sua experiência e frieza em combate o tornam um elemento indispensável da equipe.

Ele acompanha Nascimento nas decisões mais difíceis e serve como um termômetro da mentalidade do BOPE: pragmático, direto e sem espaço para sentimentalismos.`,
    importance: `Fábio é importante para completar o retrato do BOPE como instituição. Ele mostra que a mentalidade de Nascimento não é individual, mas compartilhada por toda a unidade.

O personagem também humaniza a estrutura do BOPE ao mostrar a camaradagem e a lealdade que existem entre seus membros, contrastando com a imagem de brutalidade que o batalhão projeta para o mundo exterior.`,
    traits: [
      'Disciplinado',
      'Leal',
      'Pragmático',
      'Focado',
      'Eficiente',
      'Reservado',
    ],
    quotes: [
      {
        id: 'q10',
        text: 'Sobe, BOPE!',
        character: 'Capitão Fábio',
        characterSlug: 'fabio',
        context: 'Comando durante operação na favela',
        film: 'Tropa de Elite',
      },
    ],
    curiosities: [
      'Milhem Cortaz é um dos atores mais respeitados do cinema e teatro brasileiro.',
      'O ator participou de diversas produções premiadas antes e depois de Tropa de Elite.',
      'Fábio ganhou mais destaque no segundo filme da franquia.',
    ],
    relationships: [
      {
        character: 'Capitão Nascimento',
        characterSlug: 'capitao-nascimento',
        type: 'Parceiro de operações',
        description:
          'Fábio e Nascimento compartilham anos de serviço juntos no BOPE. A confiança entre eles é absoluta.',
      },
    ],
    films: ['Tropa de Elite (2007)', 'Tropa de Elite 2: O Inimigo Agora é Outro (2010)'],
    imageUrl: '/fabio.jpg',
    imageAlt: 'Capitão Fábio interpretado por Milhem Cortaz em Tropa de Elite',
  },
]

export function getCharacterBySlug(slug: string): Character | undefined {
  return characters.find((c) => c.id === slug)
}

export function getAllCharacterSlugs(): string[] {
  return characters.map((c) => c.id)
}
