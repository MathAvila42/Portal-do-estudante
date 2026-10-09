// Onboarding content for new ULBRA students (EaD and Semipresencial).

const QUICK_LINKS = [
  { icon: 'person', label: 'WebAluno', href: 'https://ac3949.mannesoftprime.com.br/webaluno/' },
  { icon: 'computer', label: 'Plataforma Aula', href: '#' },
  { icon: 'email', label: 'Webmail', href: '#' },
  { icon: 'calendar_month', label: 'Calendário Acadêmico', href: 'https://www.ulbra.br/canoas/espaco-academico/calendario-academico' },
];

const MODALITIES = [
  { id: 'ead', icon: 'public', label: 'Sou aluno EaD', desc: 'Curso 100% on-line, com avaliações presenciais no polo.' },
  { id: 'semipresencial', icon: 'groups', label: 'Sou aluno Semipresencial', desc: 'Aulas on-line + práticas presenciais periódicas no polo.' },
];

// Bullet/note text can be a plain string (same for every modality) or an
// object keyed by modality id when the wording needs to change.
const ONBOARDING_STEPS = [
  {
    icon: 'school',
    title: 'Bem-vindo à ULBRA!',
    bullets: [
      {
        icon: 'domain',
        title: { ead: 'Modalidade 100% on-line', semipresencial: 'Modalidade semipresencial' },
        text: {
          ead: 'Você estuda no seu ritmo, de onde quiser. Aulas, materiais e atividades estão disponíveis 24h na Plataforma Aula.',
          semipresencial: 'Suas aulas acontecem 100% on-line, na Plataforma Aula. Além delas, você realiza atividades práticas presenciais periódicas no seu polo de apoio.',
        },
      },
      {
        icon: 'location_on',
        title: 'Polo de apoio presencial',
        text: {
          ead: 'Você está vinculado a um polo onde realizará as avaliações presenciais. Anote o endereço e os contatos do seu polo.',
          semipresencial: 'Você está vinculado a um polo onde realizará as avaliações e as práticas presenciais. Anote o endereço e os contatos do seu polo.',
        },
      },
    ],
    note: 'Este guia reúne o passo a passo essencial para você começar bem na ULBRA. Você pode navegar pelos passos a qualquer momento.',
  },
  {
    icon: 'person',
    title: 'WebAluno: seu portal principal',
    bullets: [
      { icon: 'person', title: 'WebAluno', text: 'Portal principal: matrícula, notas, dados do curso e acesso aos demais sistemas.' },
      { icon: 'key', title: 'Primeiro acesso', text: 'No WebAluno, use seu CPF como usuário e sua data de nascimento (ddmmaa) como senha. Exemplo: nascido em 01/02/2000 → senha inicial 010200.' },
    ],
    note: 'Todos os sistemas são acessados pelo Espaço Acadêmico no site da ULBRA (Já sou aluno).',
  },
  {
    icon: 'calendar_month',
    title: 'Datas que você precisa marcar',
    bullets: [
      {
        icon: 'push_pin',
        title: 'Datas que você precisa marcar',
        text: {
          ead: 'Início e fim das aulas, períodos das AP1 e AP2, Avaliação Semestral (AS), Avaliação Final (AF) e prazo de rematrícula.',
          semipresencial: 'Início e fim das aulas, períodos das AP1 e AP2, datas das práticas presenciais, Avaliação Semestral (AS), Avaliação Final (AF) e prazo de rematrícula.',
        },
      },
      { icon: 'smartphone', title: 'Salve no seu celular', text: 'Registre as datas críticas na agenda com lembretes de antecedência — especialmente para as avaliações e atividades presenciais.' },
    ],
    note: 'Calendário disponível em: ulbra.br/canoas/espaco-academico/calendario-academico',
    cta: { label: 'Abrir calendário acadêmico', href: 'https://www.ulbra.br/canoas/espaco-academico/calendario-academico' },
  },
  {
    modalityOnly: 'semipresencial',
    icon: 'groups',
    title: 'Práticas presenciais no seu polo',
    bullets: [
      { icon: 'domain', title: 'O que são as práticas presenciais', text: 'São atividades práticas obrigatórias, realizadas periodicamente no seu polo de apoio, que complementam o aprendizado das aulas on-line.' },
      { icon: 'event_available', title: 'Fique de olho nas datas', text: 'As datas das práticas presenciais estão no calendário acadêmico do seu polo. Anote-as junto com as demais avaliações.' },
    ],
    note: 'Diferente do EaD 100% on-line, no semipresencial você não tem aulas presenciais — apenas essas práticas pontuais no polo.',
  },
  {
    icon: 'computer',
    title: 'Sistemas e calendário',
    bullets: [
      { icon: 'menu_book', title: 'Plataforma Aula', text: 'Onde você assiste aulas, realiza atividades, interage com professores e faz as provas AP1 e AP2.' },
      { icon: 'event', title: 'Prazos são sua responsabilidade', text: 'Cumprir os prazos depende de você. Use o calendário acadêmico para organizar o semestre.' },
      { icon: 'search', title: 'Existe mais de um calendário', text: 'Há calendários para presencial, medicina, EaD e semipresencial. Consulte sempre o calendário da sua modalidade.' },
    ],
    note: null,
  },
  {
    icon: 'assignment',
    title: 'Como funcionam as avaliações (1/2)',
    bullets: [
      { icon: 'monitor', title: 'AP1 e AP2 — on-line (Plataforma Aula)', text: 'Prova objetiva + atividade prática. AP1 vale 2,0 pts; AP2 vale 3,0 pts.' },
      { icon: 'domain', title: 'AS — presencial no polo', text: 'Avaliação Semestral vale 5,0 pts. Deve ser agendada com antecedência no polo de apoio.' },
    ],
    note: null,
  },
  {
    icon: 'assignment',
    title: 'Como funcionam as avaliações (2/2)',
    bullets: [
      { icon: 'refresh', title: 'AF — segunda chance presencial', text: 'Para quem ficou abaixo de 6,0 pts. A nota final é a maior entre a PS e a AF.' },
      { icon: 'check_circle', title: 'Aprovação com PS ≥ 6,0', text: 'PS = AP1 + AP2 + AS. Resultado igual ou superior a 6,0 = aprovado!' },
    ],
    note: null,
  },
  {
    icon: 'handshake',
    title: 'Comunicação e suporte (1/2)',
    bullets: [
      { icon: 'mail', title: 'Crie seu e-mail institucional', text: 'Dentro do WebAluno, crie seu e-mail institucional com usuário e senha definitivos — é por ele que chegam os comunicados oficiais.' },
      { icon: 'email', title: 'Webmail Institucional', text: 'Comunicados oficiais chegam exclusivamente por aqui. Acesse com regularidade!' },
    ],
    note: null,
  },
  {
    icon: 'handshake',
    title: 'Comunicação e suporte (2/2)',
    bullets: [
      {
        icon: 'domain',
        title: 'Polo de apoio presencial',
        text: {
          ead: 'Primeiro ponto de contato para dúvidas, provas e suporte local. Guarde o contato do seu polo!',
          semipresencial: 'Primeiro ponto de contato para dúvidas, provas, práticas presenciais e suporte local. Guarde o contato do seu polo!',
        },
      },
      { icon: 'person', title: 'Professores e tutores', text: 'Tire dúvidas de conteúdo pelos fóruns e mensagens na Plataforma Aula.' },
    ],
    note: null,
  },
  {
    icon: 'phone',
    title: 'Quando precisar de mais ajuda',
    bullets: [
      { icon: 'phone', title: 'Central de Relacionamento EaD', text: 'Para dúvidas não resolvidas no polo, problemas técnicos e solicitações acadêmicas: (51) 99274-1192 (ligação ou WhatsApp) ou relac.canoas@ulbra.br.' },
      { icon: 'school', title: 'Coordenação do curso', text: 'Para grade, aproveitamento de disciplinas e orientações específicas, consulte os contatos da coordenação do seu curso no site da ULBRA.' },
    ],
    note: 'Nunca fique com dúvida! Use os canais certos para resolver logo.',
  },
  {
    icon: 'check_circle',
    title: 'Checklist: seus primeiros passos (1/2)',
    bullets: [
      { icon: 'looks_one', title: 'Acesse o WebAluno', text: 'Confirme seus dados, curso e polo de apoio.' },
      { icon: 'looks_two', title: 'Entre na Plataforma Aula', text: 'Conheça suas disciplinas e ative todas as notificações.' },
      { icon: 'looks_3', title: 'Consulte o calendário da sua modalidade', text: 'Marque as datas das avaliações (e práticas presenciais, se for o seu caso) na sua agenda agora!' },
    ],
    note: null,
  },
  {
    icon: 'check_circle',
    title: 'Checklist: seus primeiros passos (2/2)',
    bullets: [
      { icon: 'looks_4', title: 'Configure o Webmail', text: 'Acesse o e-mail institucional e ative os alertas de novas mensagens.' },
      { icon: 'looks_5', title: 'Anote o contato do polo', text: 'Salve o telefone e e-mail do seu polo de apoio presencial.' },
    ],
    note: {
      ead: 'Tudo certo! Você está pronto para começar bem no EaD ULBRA. Bons estudos!',
      semipresencial: 'Tudo certo! Não esqueça de conferir as datas das práticas presenciais no seu polo. Você está pronto para começar bem no semipresencial ULBRA. Bons estudos!',
    },
  },
];
