// FAQ content, categories and onboarding steps for the Central de Dúvidas EaD ULBRA page.

const CATEGORIES = [
  { id: 'vida-academica', icon: 'school', label: 'Vida Acadêmica' },
  { id: 'plataforma', icon: 'computer', label: 'Plataforma' },
  { id: 'avaliacoes', icon: 'assignment', label: 'Avaliações' },
  { id: 'disciplinas', icon: 'menu_book', label: 'Disciplinas' },
  { id: 'curso', icon: 'my_location', label: 'Curso' },
  { id: 'financeiro', icon: 'payments', label: 'Financeiro' },
  { id: 'portfolio', icon: 'work', label: 'Portfólio e Carreira' },
  { id: 'internacional', icon: 'language', label: 'Internacionalização' },
  { id: 'qualidade', icon: 'star', label: 'Qualidade Acadêmica' },
  { id: 'formatura', icon: 'emoji_events', label: 'Formatura' },
  { id: 'tecnico', icon: 'build', label: 'Problemas Técnicos' },
];

const QUICK_LINKS = [
  { icon: 'person', label: 'WebAluno', href: 'https://ac3949.mannesoftprime.com.br/webaluno/' },
  { icon: 'computer', label: 'Plataforma Aula', href: '#' },
  { icon: 'email', label: 'Webmail', href: '#' },
  { icon: 'calendar_month', label: 'Calendário Acadêmico', href: 'https://www.ulbra.br/canoas/espaco-academico/calendario-academico' },
];

const STAGE_BLOCKS = [
  {
    id: 'vida-academica',
    icon: 'menu_book',
    title: 'Minha Vida Acadêmica',
    subtitle: 'Disciplinas, avaliações e calendário',
    items: ['av1', 'av9', 'av10', 'di1', 'va10'],
  },
  {
    id: 'sistemas',
    icon: 'computer',
    title: 'Sistemas e Ferramentas',
    subtitle: 'Canvas, WebAluno, Office e Biblioteca',
    items: ['pl1', 'pl2', 'te1', 'te2'],
    note: 'Em breve traremos orientações específicas sobre Microsoft Office e Biblioteca Virtual. Por enquanto, consulte o WebAluno ou a Central de Relacionamento EaD.',
  },
  {
    id: 'solicitacoes',
    icon: 'assignment',
    title: 'Solicitações e Documentos',
    subtitle: 'Protocolos, declarações e aproveitamento',
    items: [],
    note: 'Em breve traremos orientações específicas sobre protocolos, declarações e aproveitamento de estudos. Por enquanto, essas solicitações podem ser feitas pelo WebAluno ou diretamente com a Central de Relacionamento EaD.',
  },
  {
    id: 'financeiro',
    icon: 'payments',
    title: 'Financeiro e Benefícios',
    subtitle: 'Boletos, pagamentos, bolsas e benefícios',
    items: ['fi1'],
  },
  {
    id: 'desenvolvimento',
    icon: 'eco',
    title: 'Desenvolvimento Acadêmico e Profissional',
    subtitle: 'Estágio, extensão, eventos e carreira',
    items: ['po1', 'po2', 'po4', 'in1'],
    note: 'Em breve traremos orientações específicas sobre estágio obrigatório/não obrigatório e atividades de extensão. Por enquanto, consulte a Coordenação do seu Curso ou o Espaço Acadêmico.',
  },
  {
    id: 'conclusao',
    icon: 'school',
    title: 'Conclusão do Curso',
    subtitle: 'TCC, atividades complementares, colação e diploma',
    items: ['fo1', 'fo2', 'fo3'],
    note: 'Detalhes específicos sobre o TCC variam conforme o curso. Consulte a Coordenação do seu Curso para orientações.',
  },
  {
    id: 'contatos',
    icon: 'phone',
    title: 'Contatos',
    subtitle: 'Central de Relacionamento, coordenação, polo e tutores',
    items: ['te7', 'va1', 'va13', 'va3'],
  },
];

const ONBOARDING_STEPS = [
  {
    icon: 'school',
    title: 'Bem-vindo à ULBRA EaD!',
    bullets: [
      { icon: 'domain', title: 'Modalidade 100% on-line', text: 'Você estuda no seu ritmo, de onde quiser. Aulas, materiais e atividades estão disponíveis 24h na Plataforma Aula.' },
      { icon: 'location_on', title: 'Polo de apoio presencial', text: 'Você está vinculado a um polo onde realizará as avaliações presenciais. Anote o endereço e os contatos do seu polo.' },
    ],
    note: 'Esta Central de Dúvidas reúne as respostas mais importantes do EaD ULBRA. Volte aqui sempre que precisar!',
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
      { icon: 'push_pin', title: 'Datas que você precisa marcar', text: 'Início e fim das aulas, períodos das AP1 e AP2, Avaliação Semestral (AS), Avaliação Final (AF) e prazo de rematrícula.' },
      { icon: 'smartphone', title: 'Salve no seu celular', text: 'Registre as datas críticas na agenda com lembretes de antecedência — especialmente para as avaliações presenciais.' },
    ],
    note: 'Calendário disponível em: ulbra.br/canoas/espaco-academico/calendario-academico',
    cta: { label: 'Abrir calendário acadêmico', href: 'https://www.ulbra.br/canoas/espaco-academico/calendario-academico' },
  },
  {
    icon: 'computer',
    title: 'Sistemas e calendário',
    bullets: [
      { icon: 'menu_book', title: 'Plataforma Aula', text: 'Onde você assiste aulas, realiza atividades, interage com professores e faz as provas AP1 e AP2.' },
      { icon: 'event', title: 'Prazos são sua responsabilidade', text: 'No EaD, cumprir os prazos depende de você. Use o calendário acadêmico EaD para organizar o semestre.' },
      { icon: 'search', title: 'Existe mais de um calendário', text: 'Há calendários para presencial, medicina e EaD. Consulte sempre o calendário EaD.' },
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
      { icon: 'domain', title: 'Polo de apoio presencial', text: 'Primeiro ponto de contato para dúvidas, provas e suporte local. Guarde o contato do seu polo!' },
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
      { icon: 'looks_3', title: 'Consulte o calendário EaD', text: 'Marque as datas das avaliações na sua agenda agora!' },
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
    note: 'Tudo certo! Você está pronto para começar bem no EaD ULBRA. Bons estudos!',
  },
];

const SEARCH_SYNONYMS = [
  ['ava', 'ambiente virtual de aprendizagem', 'aula', 'plataforma aula'],
  ['af', 'avaliacao final', 'recuperacao', 'segunda chamada', 'perdi a prova', 'faltei na prova', 'nao fiz a prova', 'esqueci da prova'],
  ['boleto', 'mensalidade', 'pagamento', 'segunda via', 'vencimento', 'negociacao', 'negociar', 'bolsa', 'bolsas', 'imposto de renda', 'ir'],
  ['matricula', 'rematricula', 'inscricao'],
  ['nota', 'notas', 'media', 'aprovacao', 'pontuacao'],
  ['senha', 'login', 'esqueci a senha'],
  ['polo', 'polo de apoio', 'presencial', 'apoio presencial', 'local de prova'],
  ['email', 'e-mail', 'webmail', 'email institucional', 'comunicados'],
  ['prova', 'provas', 'ap1', 'ap2', 'as', 'avaliacao semestral', 'atividade pratica'],
  ['coordenador', 'coordenacao', 'professor', 'tutor', 'mediador', 'central de relacionamento', 'contato'],
  ['disciplina', 'disciplinas', 'eletiva', 'eletivas', 'grade curricular', 'credito', 'creditos'],
  ['tcc', 'formatura', 'diploma', 'colacao', 'atividades complementares', 'conclusao', 'concluir'],
  ['enade', 'cpa', 'avaliacao docente', 'qualidade'],
  ['intercambio', 'internacional', 'mobilidade'],
  ['webaluno', 'web aluno', 'primeiro acesso', 'acesso', 'cpf'],
  ['calendario', 'datas', 'prazo', 'prazos', 'semestre', 'periodo'],
  ['portfolio', 'curriculo', 'estagio', 'carreira', 'mercado de trabalho'],
];

const FAQ_DATA = [
  {
    id: 'vida-academica', icon: 'school', label: 'Vida Acadêmica',
    items: [
      { id: 'va1', q: 'Quem é o meu coordenador e como entrar em contato?', a: 'Consulte o Espaço Acadêmico ou o WebAluno para encontrar as informações de contato do coordenador do seu curso. A lista de coordenadores e seus e-mails está disponível na área do aluno.', system: 'Espaço Acadêmico / WebAluno' },
      { id: 'va13', q: 'Onde encontro o professor, tutor ou mediador da minha disciplina?', a: 'O contato do professor e do tutor/mediador de cada disciplina está disponível dentro da própria disciplina, na plataforma Aula. Acesse a disciplina desejada e consulte os fóruns, mensagens e mural de avisos para tirar dúvidas e entrar em contato.', system: 'Plataforma Aula' },
      { id: 'va2', q: 'Como descubro qual é o meu polo de apoio presencial?', a: 'Essa informação está disponível no seu WebAluno, na área de dados do curso. O polo de apoio é o local onde você realiza as provas presenciais e pode buscar suporte acadêmico.', system: 'WebAluno' },
      { id: 'va3', q: 'Como entro em contato com o meu polo?', a: 'Os dados de contato do polo (telefone, e-mail e endereço) estão disponíveis no WebAluno e no Espaço Acadêmico da ULBRA.', system: 'WebAluno / Espaço Acadêmico' },
      { id: 'va4', q: 'Onde encontro o calendário acadêmico?', essential: true, a: 'O calendário acadêmico está disponível no Espaço Acadêmico da ULBRA (ulbra.br/canoas/espaco-academico/calendario-academico). Nele você encontra as datas oficiais do semestre: início e término das aulas, períodos de avaliações e demais prazos.\n\nAtenção: existem mais de um calendário — para cursos presenciais, medicina e cursos EaD. Certifique-se de consultar o calendário EaD.', system: 'Espaço Acadêmico', related: ['va5', 'va10'] },
      { id: 'va5', q: 'Quais são as datas importantes do semestre?', a: 'Fique atento às datas de início e término das aulas, aos períodos de AP1 e AP2 (provas on-line na plataforma Aula), à data da Avaliação Semestral (AS) presencial e ao prazo para a Avaliação Final (AF). Todas estão no calendário acadêmico EaD.', system: 'Espaço Acadêmico', related: ['va4'] },
      { id: 'va6', q: 'Como utilizar uma agenda para organizar meus estudos?', a: 'Registre no calendário as datas das atividades práticas, provas e avaliações. Estabeleça uma rotina semanal de estudos, separando tempo para cada disciplina. Use lembretes para não perder prazos importantes.' },
      { id: 'va7', q: 'Como acessar meu e-mail institucional?', essential: true, a: 'O e-mail institucional pode ser acessado pelo Espaço Acadêmico ou pelo WebAluno, onde também estão disponíveis os demais sistemas acadêmicos.\n\nVerifique o e-mail regularmente — comunicados oficiais, avisos sobre avaliações e informações do curso são enviados exclusivamente por esse canal.', system: 'Espaço Acadêmico / WebAluno', related: ['va12', 'va8'] },
      { id: 'va8', q: 'Por que devo consultar meu e-mail institucional regularmente?', a: 'Comunicados oficiais, avisos sobre avaliações e informações do curso são enviados exclusivamente ao e-mail institucional. Deixar de acompanhá-lo pode fazer você perder prazos e informações importantes.', related: ['va7'] },
      { id: 'va9', q: 'Onde encontro as informações oficiais do meu curso?', a: 'As informações oficiais estão no Espaço Acadêmico, no WebAluno, na plataforma Aula e no portal da ULBRA. Consulte também o Manual do Aluno EaD.', system: 'Espaço Acadêmico / WebAluno / Plataforma Aula' },
      { id: 'va10', q: 'Como fazer a rematrícula?', essential: true, a: 'A rematrícula é realizada semestralmente pelo WebAluno. Observe o calendário acadêmico e realize a matrícula nas disciplinas conforme a sequência prevista no seu curso, dentro do prazo estipulado.', system: 'WebAluno', related: ['va4'] },
      { id: 'va11', q: 'O que são os créditos das disciplinas?', a: 'Créditos representam a carga horária de cada disciplina. Cada crédito equivale a uma determinada quantidade de horas de estudo. Consulte a grade curricular do seu curso no WebAluno para mais detalhes.' },
      { id: 'va12', q: 'Como faço meu primeiro acesso ao WebAluno e crio meu e-mail institucional?', essential: true, a: 'Siga os passos abaixo para fazer seu primeiro acesso e criar seu e-mail institucional:', steps: ['Acesse o WebAluno em https://ac3949.mannesoftprime.com.br/webaluno/index.php.', 'Use seu CPF como usuário.', 'Use sua data de nascimento no formato ddmmaa como senha. Exemplo: nascido em 01/02/2000 → senha inicial 010200.', 'Dentro do WebAluno, crie seu e-mail institucional com usuário e senha definitivos.', 'Use esse e-mail institucional para acessar o Webmail e receber os comunicados oficiais.'], system: 'WebAluno', related: ['va7', 'pl1', 'te1'] },
    ],
  },
  {
    id: 'plataforma', icon: 'computer', label: 'Plataforma',
    items: [
      { id: 'pl1', q: 'Como acessar a plataforma Aula para acompanhar as disciplinas?', essential: true, a: 'O acesso ao Ambiente Virtual de Aprendizagem (Aula) é feito pelo site da ULBRA, na área "Já sou aluno", por meio do WebAluno. O ambiente também está disponível em aplicativo para dispositivos móveis — busque por "ULBRA" na loja de aplicativos.', system: 'WebAluno / Plataforma Aula', related: ['va12', 'te2'] },
      { id: 'pl2', q: 'Como ativar todas as notificações da plataforma Aula?', a: 'Acesse as configurações do seu perfil na plataforma Aula e habilite todas as notificações por e-mail e push. Assim você será avisado sobre novas atividades, avisos de professores e prazos importantes.', system: 'Plataforma Aula' },
      { id: 'pl4', q: 'Por que não recebo avisos das disciplinas?', a: 'Verifique se as notificações estão ativadas na plataforma Aula e se o e-mail institucional no sistema está correto. Caso o problema persista, entre em contato com a Central de Relacionamento EaD.', system: 'Plataforma Aula / Central de Relacionamento EaD' },
      { id: 'pl3', q: 'Quais canais de comunicação devo acompanhar?', a: 'Acompanhe regularmente: a plataforma Aula (fóruns, avisos e mensagens das disciplinas), o e-mail institucional e as notificações do WebAluno.' },
      { id: 'pl5', q: 'Como alterar meu e-mail ou telefone de contato?', a: 'Essa alteração é realizada pelo WebAluno. Acesse com seus dados de aluno e atualize as informações na seção de dados pessoais.', system: 'WebAluno' },
    ],
  },
  {
    id: 'avaliacoes', icon: 'assignment', label: 'Avaliações',
    items: [
      { id: 'av1', q: 'Como funciona o sistema de avaliação?', essential: true, a: 'Nas disciplinas teóricas e teórico-práticas, a avaliação é composta por atividades práticas, provas objetivas (AP1 e AP2) e uma Avaliação Semestral (AS) presencial. Caso necessário, o aluno pode realizar a Avaliação Final (AF).\n\nDisciplinas como estágios, TCCs e projetos possuem regras próprias e avaliações totalmente on-line.', related: ['av2', 'av9', 'av10'] },
      { id: 'av2', q: 'Quanto vale cada avaliação (AP1, AP2, AS e AF)?', a: 'AP1: 2,0 pontos\n  • Atividade prática: 0,5 ponto\n  • Prova objetiva: 1,5 pontos\n\nAP2: 3,0 pontos\n  • Atividade prática: 0,5 ponto\n  • Prova objetiva: 2,5 pontos\n\nAS: 5,0 pontos\n\nAF: até 10,0 pontos. A Pontuação Final será a maior entre a Pontuação Semestral (PS) e a nota da AF.', related: ['av1', 'av9'] },
      { id: 'av3', q: 'Onde realizo cada prova?', a: 'As provas da Avaliação Semestral (AS) e da Avaliação Final (AF) são presenciais, realizadas no polo de apoio, mediante agendamento e conforme o calendário acadêmico.\n\nAs provas objetivas das etapas AP1 e AP2 são realizadas na plataforma Aula (on-line).', system: 'Polo de Apoio (AS/AF) / Plataforma Aula (AP1/AP2)', related: ['av4', 'av5'] },
      { id: 'av4', q: 'Como agendar a Avaliação Semestral (AS)?', a: 'O agendamento é feito diretamente com o polo de apoio presencial. Verifique as datas disponíveis no calendário acadêmico EaD e procure seu polo com antecedência.', system: 'Polo de Apoio', related: ['av3', 'av5'] },
      { id: 'av5', q: 'Preciso entrar em contato com o polo para fazer a AS?', a: 'Sim. O agendamento da Avaliação Semestral deve ser feito diretamente com o polo de apoio presencial, dentro do prazo estabelecido no calendário acadêmico.', system: 'Polo de Apoio', related: ['av4', 'av3'] },
      { id: 'av6', q: 'O que é a Avaliação Final (AF)?', a: 'É uma avaliação presencial, individual e sem consulta, para alunos que não atingiram a pontuação mínima ou que desejam melhorar seu desempenho. Vale até 10 pontos — a Pontuação Final será a maior nota entre a PS e a AF.', related: ['av9', 'av10'] },
      { id: 'av7', q: 'As atividades práticas valem nota?', a: 'Sim. Nas disciplinas teóricas e teórico-práticas, cada atividade prática vale 0,5 ponto e compõe a nota da AP1 e da AP2.' },
      { id: 'av8', q: 'Mesmo sem nota, preciso entregar as atividades práticas?', a: 'Sim. As atividades práticas são parte obrigatória do processo de aprendizagem. Sua entrega é esperada e pode ser exigida para aprovação na disciplina.' },
      { id: 'av9', q: 'Como é calculada minha média final?', essential: true, a: 'Sua média final é calculada em duas etapas:', steps: ['Calcule a Pontuação Semestral (PS): PS = AP1 + AP2 + AS.', 'Se você realizar a Avaliação Final (AF), a Pontuação Final passa a ser a maior nota entre a PS e a AF.'], related: ['av2', 'av10', 'av6'] },
      { id: 'av10', q: 'Qual é a média para aprovação?', essential: true, a: 'A aprovação ocorre com Pontuação Semestral igual ou superior a 6,0 pontos. Caso a PS seja inferior a 6,0, o aluno poderá realizar a Avaliação Final (AF) para tentar atingir a média.', related: ['av9', 'av6'] },
    ],
  },
  {
    id: 'disciplinas', icon: 'menu_book', label: 'Disciplinas',
    items: [
      { id: 'di1', q: 'As disciplinas eletivas são obrigatórias?', a: 'As disciplinas eletivas são obrigatórias para a conclusão do curso, mas o aluno tem flexibilidade para escolher quais cursar dentro das opções disponíveis. Consulte o WebAluno para ver as eletivas do seu curso.' },
      { id: 'di2', q: 'Posso deixar uma disciplina eletiva para outro semestre?', a: 'Sim, dentro do prazo máximo de integralização do curso. Planeje com atenção para não acumular disciplinas no final da graduação. Consulte o coordenador do curso para orientações específicas.', system: 'Coordenação do Curso' },
      { id: 'di3', q: 'Como saber quais disciplinas estou cursando?', a: 'As disciplinas matriculadas estão disponíveis no WebAluno e na plataforma Aula, onde aparecem no menu de disciplinas ativas do semestre.', system: 'WebAluno / Plataforma Aula' },
    ],
  },
  {
    id: 'curso', icon: 'my_location', label: 'Curso',
    items: [
      { id: 'cu1', q: 'Onde encontro o site do curso?', a: 'O site do seu curso está no portal da ULBRA (ulbra.br). Navegue até a seção de cursos EaD para acessar grade curricular, projeto pedagógico e corpo docente.', system: 'Portal ULBRA' },
      { id: 'cu2', q: 'Onde acompanho notícias e eventos do curso?', a: 'Acompanhe na plataforma Aula (avisos e fóruns), no e-mail institucional e no portal da ULBRA. Alguns cursos também mantêm grupos em redes sociais.', system: 'Plataforma Aula' },
      { id: 'cu3', q: 'Como participar das lives e encontros on-line?', a: 'Os links para as lives são divulgados com antecedência na plataforma Aula e enviados para o e-mail institucional. Ative as notificações para não perder nenhum encontro.', system: 'Plataforma Aula' },
      { id: 'cu4', q: 'As lives ficam gravadas?', a: 'Sim. As gravações ficam disponíveis na plataforma Aula para acesso posterior, caso você não possa participar ao vivo.', system: 'Plataforma Aula' },
      { id: 'cu5', q: 'Vale a pena participar dos encontros ao vivo?', a: 'Sim. Participar ao vivo permite tirar dúvidas em tempo real com professores e interagir com colegas. Aproveite esses momentos de conexão e aprendizado colaborativo.' },
    ],
  },
  {
    id: 'financeiro', icon: 'payments', label: 'Financeiro',
    items: [
      { id: 'fi1', q: 'Como emitir boleto, negociar pagamentos ou consultar bolsas e Imposto de Renda?', a: 'Questões financeiras — emissão de boleto, segunda via, negociação de pagamentos, bolsas de estudo e informações para Imposto de Renda — devem ser tratadas diretamente com a Central de Relacionamento EaD.', system: 'Central de Relacionamento EaD' },
    ],
  },
  {
    id: 'portfolio', icon: 'work', label: 'Portfólio e Carreira',
    items: [
      { id: 'po1', q: 'O que é o portfólio?', a: 'O portfólio é um compilado dos seus trabalhos e produções ao longo da graduação, usado para demonstrar competências e evolução profissional. É uma ferramenta importante para o mercado de trabalho.' },
      { id: 'po2', q: 'Quando devo começar a montar meu portfólio?', a: 'Desde o primeiro semestre! Guarde todos os trabalhos relevantes realizados nas disciplinas. Quanto antes você começar, mais rico será seu portfólio ao se formar.' },
      { id: 'po3', q: 'Como organizar meus trabalhos para utilizá-los profissionalmente?', a: 'Para organizar seus trabalhos de forma profissional:', steps: ['Selecione os melhores trabalhos de cada semestre.', 'Organize-os por tema ou disciplina.', 'Descreva brevemente cada projeto: objetivo, ferramentas utilizadas e resultados alcançados.'] },
      { id: 'po4', q: 'Como melhorar meu currículo durante a graduação?', a: 'Participe de eventos acadêmicos, projetos de extensão, estágios, atividades complementares e competições da área. Cada experiência diferencia você no mercado de trabalho.' },
    ],
  },
  {
    id: 'internacional', icon: 'language', label: 'Internacionalização',
    items: [
      { id: 'in1', q: 'O que é o programa de internacionalização?', a: 'É uma iniciativa da ULBRA que oferece oportunidades de experiência internacional por meio de parcerias com instituições estrangeiras e programas de mobilidade acadêmica.' },
      { id: 'in2', q: 'Como participar de oportunidades internacionais?', a: 'Consulte o Espaço Acadêmico e o site da ULBRA para conhecer os programas disponíveis. Entre em contato com o setor de internacionalização para informações sobre requisitos e inscrições.', system: 'Setor de Internacionalização' },
      { id: 'in3', q: 'Existem intercâmbios ou cursos internacionais disponíveis?', a: 'Sim. A ULBRA possui acordos com instituições de vários países. Consulte o setor de internacionalização para conhecer as oportunidades atuais, incluindo intercâmbios e parcerias acadêmicas internacionais.' },
    ],
  },
  {
    id: 'qualidade', icon: 'star', label: 'Qualidade Acadêmica',
    items: [
      { id: 'qa1', q: 'O que é a CPA?', a: 'A CPA (Comissão Própria de Avaliação) é o órgão responsável pela avaliação institucional da ULBRA. Ela coleta opiniões de alunos, professores e funcionários para promover a melhoria contínua da universidade.', related: ['qa2'] },
      { id: 'qa2', q: 'Por que responder à CPA é importante?', a: 'Sua participação contribui diretamente para a melhoria dos cursos, da estrutura e dos serviços da universidade. A CPA garante que a voz do aluno seja ouvida e gere mudanças reais.', related: ['qa1'] },
      { id: 'qa3', q: 'O que é a Avaliação Docente?', a: 'É uma avaliação periódica dos professores realizada pelos alunos, para fins de melhoria contínua da qualidade do ensino na ULBRA.' },
      { id: 'qa4', q: 'Por que devo responder à Avaliação Docente?', a: 'Sua participação é fundamental para garantir a qualidade do corpo docente. As respostas são tratadas de forma sigilosa e usadas para aprimorar a experiência acadêmica de todos.' },
      { id: 'qa5', q: 'O que é o ENADE?', a: 'O ENADE (Exame Nacional de Desempenho dos Estudantes) é uma avaliação do MEC que mede o desempenho dos estudantes concluintes e integra o Sistema Nacional de Avaliação da Educação Superior (SINAES). A ULBRA disponibiliza orientações no Manual do Aluno e no Espaço Acadêmico.', system: 'Espaço Acadêmico', related: ['qa6', 'qa7'] },
      { id: 'qa6', q: 'Quem precisa realizar o ENADE?', a: 'Alunos concluintes dos cursos avaliados naquele ciclo trienal. A ULBRA identifica e comunica os habilitados. Fique atento ao e-mail institucional e aos avisos no Espaço Acadêmico.', system: 'Espaço Acadêmico', related: ['qa5'] },
      { id: 'qa7', q: 'O ENADE é obrigatório?', a: 'Sim. Para os alunos convocados, a participação é obrigatória por lei. A não participação pode resultar em restrições para a obtenção do diploma de graduação.', related: ['qa5', 'qa6'] },
    ],
  },
  {
    id: 'formatura', icon: 'emoji_events', label: 'Formatura',
    items: [
      { id: 'fo1', q: 'Quando posso solicitar a colação de grau?', a: 'Após integralizar todos os créditos e requisitos do curso, incluindo atividades complementares e TCC (quando exigido). A solicitação deve ser feita junto à Central de Relacionamento EaD, dentro dos prazos do calendário acadêmico.', system: 'Central de Relacionamento EaD', related: ['fo2', 'fo3'] },
      { id: 'fo2', q: 'Quais são os requisitos para me formar?', a: 'É necessário cumprir todas as disciplinas obrigatórias e eletivas, atividades complementares, estágio (quando exigido), TCC (quando aplicável) e demais requisitos do projeto pedagógico do seu curso.', related: ['fo1', 'fo3'] },
      { id: 'fo3', q: 'Como funciona a cerimônia de formatura?', a: 'A ULBRA realiza cerimônias de colação de grau ao final de cada semestre. As informações sobre datas, locais e procedimentos são divulgadas pelo e-mail institucional e no Espaço Acadêmico com antecedência.', system: 'Espaço Acadêmico', related: ['fo1'] },
    ],
  },
  {
    id: 'tecnico', icon: 'build', label: 'Problemas Técnicos',
    items: [
      { id: 'te1', q: 'Esqueci minha senha. Como recuperá-la?', essential: true, a: 'Para recuperar sua senha, siga estes passos:', steps: ['Acesse o WebAluno ou a plataforma Aula.', 'Use a opção "Esqueci minha senha".', 'Se o problema persistir, entre em contato com a Central de Relacionamento ao Aluno EaD ou com seu polo de apoio.'], system: 'WebAluno / Plataforma Aula', related: ['va12', 'pl1'] },
      { id: 'te2', q: 'Não consigo acessar a plataforma Aula. O que fazer?', essential: true, a: 'Se não conseguir acessar a plataforma Aula, siga esta ordem:', steps: ['Verifique se está acessando pelo WebAluno (caminho correto).', 'Tente outro navegador ou limpe o cache.', 'Caso o problema persista, entre em contato com a Central de Relacionamento EaD ou com seu polo de apoio presencial.'], system: 'Central de Relacionamento EaD', related: ['te1', 'pl1', 'te5'] },
      { id: 'te3', q: 'A prova não abriu. Como proceder?', a: 'Se a prova não abrir, siga esta ordem:', steps: ['Verifique se está dentro do horário e período previsto no calendário acadêmico.', 'Tente outro navegador ou dispositivo.', 'Se o problema persistir, entre em contato imediatamente com a Central de Relacionamento EaD.'], system: 'Central de Relacionamento EaD', related: ['te4', 'te6', 'te5'] },
      { id: 'te4', q: 'O sistema apresentou erro durante a avaliação. O que devo fazer?', a: 'Se o sistema apresentar erro durante uma avaliação:', steps: ['Faça prints da tela com o erro.', 'Registre a data e o horário exatos.', 'Entre em contato imediatamente com a Central de Relacionamento EaD ou polo de apoio, apresentando os registros do problema.'], system: 'Central de Relacionamento EaD', related: ['te3', 'te6', 'te5'] },
      { id: 'te5', q: 'Com quem falo quando tenho um problema técnico?', a: 'Problemas de acesso ou suporte técnico podem ser encaminhados à Central de Relacionamento ao Aluno EaD ou ao polo de apoio presencial, por e-mail, telefone ou presencialmente.', system: 'Central de Relacionamento EaD / Polo de Apoio', related: ['te7'] },
      { id: 'te6', q: 'Como comprovar um problema ocorrido durante uma prova?', a: 'Para comprovar um problema ocorrido durante uma prova:', steps: ['Tire prints da tela com o erro.', 'Registre a data e o horário.', 'Entre em contato com o polo ou a Central EaD o mais rápido possível — quanto antes você reportar, melhor será a análise do caso.'], system: 'Central de Relacionamento EaD / Polo de Apoio', related: ['te4', 'te3', 'te5'] },
      { id: 'te7', q: 'Qual o telefone e e-mail da Central de Relacionamento EaD?', essential: true, a: 'Você pode falar com a Central de Relacionamento ao Aluno EaD pelo telefone (51) 99274-1192 (ligação ou WhatsApp) ou pelo e-mail relac.canoas@ulbra.br.\n\nPara questões acadêmicas específicas do seu curso, consulte os contatos da coordenação do curso no site da ULBRA.', system: 'Central de Relacionamento EaD', related: ['te5'] },
    ],
  },
];
