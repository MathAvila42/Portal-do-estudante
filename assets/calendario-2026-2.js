// Calendário EaD 2026/2 — fonte única das datas.
// Usado pela página do Calendário (lista por etapa) e pelo Início (próxima data importante).
// Para atualizar o semestre, edite só este arquivo.
//
// Campos:
//   stage   etapa do calendário (1 a 4)
//   start   data (AAAA-MM-DD); end só quando for um período
//   text    texto da linha no Calendário (pode ter <strong>)
//   short   texto curto para o Início; em períodos, use startShort / endShort
//   home    false para não aparecer como "próxima data" no Início
var CALENDARIO = [
  { stage: 1, start: '2026-08-05', text: 'Abertura das salas e ambientação no AVA (5 dias antes do início do período letivo)', short: 'Abertura das salas no AVA' },
  { stage: 1, start: '2026-08-10', text: 'Início do período letivo · início das aulas das disciplinas EaD', short: 'Início do período letivo' },
  { stage: 1, start: '2026-12-19', text: 'Último dia letivo de 2026/2', short: 'Último dia letivo de 2026/2' },

  { stage: 2, start: '2026-08-24', end: '2026-10-05', text: 'AP1 · Avaliação Parcial 1', startShort: 'Abre a janela da AP1 (Avaliação Parcial 1)', endShort: 'Fim da janela da AP1 (Avaliação Parcial 1)' },
  { stage: 2, start: '2026-10-05', end: '2026-11-16', text: 'AP2 · Avaliação Parcial 2', startShort: 'Abre a janela da AP2 (Avaliação Parcial 2)', endShort: 'Fim da janela da AP2 (Avaliação Parcial 2)' },
  { stage: 2, start: '2026-11-26', end: '2026-12-09', text: 'AS · Avaliação Semestral (objetiva)', startShort: 'Começa a Avaliação Semestral (AS)', endShort: 'Fim da Avaliação Semestral (AS)' },
  { stage: 2, start: '2026-12-10', end: '2026-12-19', text: 'AF · Avaliação Final (objetiva)', startShort: 'Começa a Avaliação Final (AF)', endShort: 'Fim da Avaliação Final (AF)' },

  { stage: 3, start: '2026-07-31', text: 'Último dia do mês para trancamento ou cancelamento total de matrícula com isenção das parcelas subsequentes de 2026/2', short: 'Trancamento com isenção das parcelas seguintes' },
  { stage: 3, start: '2026-08-06', text: 'Último dia para solicitar Extraordinário Aproveitamento de Estudos de 2026/2, com documentação comprobatória', short: 'Último dia para Extraordinário Aproveitamento 2026/2' },
  { stage: 3, start: '2026-08-21', text: 'Último dia para solicitar aproveitamento de disciplinas cursadas em outra IES (ingressantes 2026/2)', short: 'Último dia para aproveitamento de disciplinas de outra IES' },
  { stage: 3, start: '2026-08-31', text: 'Último dia do semestre para cancelamento total de matrícula, trancamento e cancelamento de disciplinas <strong>com isenção financeira</strong>', short: 'Último dia para trancamento/cancelamento com isenção financeira' },
  { stage: 3, start: '2026-10-06', text: 'Último dia do semestre para trancamento de matrícula e cancelamento de disciplinas regulares — efeito apenas acadêmico, sem isenção financeira', short: 'Último dia para trancamento sem isenção financeira' },
  { stage: 3, start: '2026-12-02', text: 'Abre o período de solicitação de Extraordinário Aproveitamento de Estudos para 2027/1', short: 'Abre solicitação de Extraordinário Aproveitamento para 2027/1' },

  { stage: 4, start: '2026-09-07', text: 'Independência do Brasil', short: 'Independência do Brasil (feriado)' },
  { stage: 4, start: '2026-10-10', text: 'Feriado ponte', short: 'Feriado ponte' },
  { stage: 4, start: '2026-10-12', text: 'Nossa Senhora Aparecida', short: 'Nossa Senhora Aparecida (feriado)' },
  { stage: 4, start: '2026-10-13', text: 'Antecipação do Dia do Professor', short: 'Antecipação do Dia do Professor (feriado)' },
  { stage: 4, start: '2026-11-02', text: 'Finados', short: 'Finados (feriado)' },
  { stage: 4, start: '2026-11-20', text: 'Dia da Consciência Negra', short: 'Dia da Consciência Negra (feriado)' },
  { stage: 4, start: '2026-12-25', text: 'Natal', short: 'Natal (feriado)' }
];

// Dia da semana de uma data AAAA-MM-DD: 'long' → "segunda-feira", 'short' → "seg".
function calendarioDiaSemana(iso, formato) {
  var nome = new Date(iso + 'T12:00:00').toLocaleDateString('pt-BR', { weekday: formato === 'short' ? 'short' : 'long' });
  return nome.replace('.', '');
}

// Data de hoje em AAAA-MM-DD, no fuso do aluno.
function calendarioHoje() {
  var d = new Date();
  var mm = String(d.getMonth() + 1).padStart(2, '0');
  var dd = String(d.getDate()).padStart(2, '0');
  return d.getFullYear() + '-' + mm + '-' + dd;
}

// Lista de marcos (uma data, um texto curto) em ordem, para o Início.
// Períodos geram dois marcos: abertura e fim. Marcos do mesmo dia viram um só.
function calendarioMarcos() {
  var marcos = [];
  CALENDARIO.forEach(function (e) {
    if (e.home === false) return;
    if (e.end) {
      marcos.push({ date: e.start, label: e.startShort });
      marcos.push({ date: e.end, label: e.endShort });
    } else {
      marcos.push({ date: e.start, label: e.short });
    }
  });
  marcos.sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; });

  // Junta marcos do mesmo dia num texto só.
  return marcos.reduce(function (lista, m) {
    var ultimo = lista[lista.length - 1];
    if (ultimo && ultimo.date === m.date) {
      ultimo.label += ' · ' + m.label;
    } else {
      lista.push({ date: m.date, label: m.label });
    }
    return lista;
  }, []);
}
