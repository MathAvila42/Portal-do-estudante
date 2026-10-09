function normalizeStr(str) {
  return str.toLowerCase()
    .replace(/[àáâãä]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/ç/g, 'c')
    .replace(/ñ/g, 'n');
}

function singularizeWord(word) {
  return word.length > 4 && word.endsWith('s') ? word.slice(0, -1) : word;
}

function expandQueryTerms(query) {
  const q = normalizeStr(query.trim());
  if (!q) return [];
  const terms = new Map();
  const addTerm = (term, exact) => {
    if (!terms.has(term) || exact) terms.set(term, exact);
  };

  addTerm(q, false);

  const singular = singularizeWord(q);
  if (singular !== q) addTerm(singular, false);
  if (!q.endsWith('s')) addTerm(q + 's', false);

  for (const group of SEARCH_SYNONYMS) {
    const matched = group.some((term) => (term.length <= 3 ? q === term : q.indexOf(term) !== -1));
    if (matched) group.forEach((term) => addTerm(term, term.length <= 3));
  }

  return Array.from(terms, ([term, exact]) => ({ term, exact }));
}

function termMatchesText(entry, text) {
  if (!text) return false;
  const normalized = normalizeStr(text);
  if (entry.exact) {
    return new RegExp('(^|[^a-z0-9])' + entry.term + '($|[^a-z0-9])').test(normalized);
  }
  return normalized.indexOf(entry.term) !== -1;
}

function levenshtein(a, b) {
  const m = a.length;
  const n = b.length;
  const dp = [];
  for (let i = 0; i <= m; i++) dp.push(new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

function fuzzyWordMatch(queryWord, text) {
  if (!text) return false;
  const maxDist = queryWord.length <= 4 ? 1 : 2;
  const words = normalizeStr(text).split(/[^a-z0-9]+/).filter(Boolean);
  return words.some((w) => Math.abs(w.length - queryWord.length) <= maxDist && levenshtein(queryWord, w) <= maxDist);
}

function matchesTerms(item, terms) {
  const stepsText = item.steps ? item.steps.join(' ') : '';
  return terms.some((entry) =>
    termMatchesText(entry, item.q) ||
    termMatchesText(entry, item.a) ||
    (stepsText && termMatchesText(entry, stepsText))
  );
}

function matchesFuzzy(item, rawQuery) {
  const qWords = normalizeStr(rawQuery).split(/[^a-z0-9]+/).filter((w) => w.length >= 3);
  if (!qWords.length) return false;
  return qWords.every((qw) => fuzzyWordMatch(qw, item.q) || fuzzyWordMatch(qw, item.a));
}

function findFaqItemById(id) {
  for (const s of FAQ_DATA) {
    const item = s.items.find((it) => it.id === id);
    if (item) return { item, catId: s.id };
  }
  return null;
}

const searchInput = document.getElementById('search-input');
const categoryPillsEl = document.getElementById('category-pills');
const resultCountWrap = document.getElementById('result-count-wrap');
const resultCountEl = document.getElementById('result-count');
const faqSectionsEl = document.getElementById('faq-sections');
const noResultsEl = document.getElementById('no-results');
const quickLinksEl = document.getElementById('quick-links');

const searchSuggestionsEl = document.getElementById('search-suggestions');

const onboardingOverlayEl = document.getElementById('onboarding-overlay');
const onboardingIconEl = document.getElementById('onboarding-icon');
const onboardingStepLabelEl = document.getElementById('onboarding-step-label');
const onboardingTitleEl = document.getElementById('onboarding-title');
const onboardingProgressEl = document.getElementById('onboarding-progress');
const onboardingBodyEl = document.getElementById('onboarding-body');
const onboardingDotsEl = document.getElementById('onboarding-dots');
const onboardingPrevBtn = document.getElementById('onboarding-prev');
const onboardingNextBtn = document.getElementById('onboarding-next');

let activeCategory = 'vida-academica';
let openItemIds = new Set();
let searchQuery = '';
let highlightedItem = null;
let onboardingOpen = false;
let onboardingStep = 0;
let activeSuggestionIndex = -1;
function hideSuggestions() {
  searchSuggestionsEl.hidden = true;
  activeSuggestionIndex = -1;
}

function renderSuggestions() {
  const q = searchQuery.trim();
  if (normalizeStr(q).length < 2) { hideSuggestions(); return; }

  const sections = getFilteredSections();
  const hits = [];
  for (const s of sections) {
    for (const item of s.items) {
      hits.push({ item, catLabel: s.label, catId: s.id });
      if (hits.length >= 6) break;
    }
    if (hits.length >= 6) break;
  }

  if (!hits.length) { hideSuggestions(); return; }

  searchSuggestionsEl.innerHTML = hits.map(({ item, catLabel, catId }, i) => {
    const qText = item.q.length > 80 ? item.q.slice(0, 80) + '…' : item.q;
    return `<button class="search-suggestion" data-id="${item.id}" data-cat="${catId}" data-idx="${i}" type="button" tabindex="-1" role="option" aria-selected="false">
      <span class="search-suggestion__q">${qText}</span>
      <span class="search-suggestion__cat">${catLabel}</span>
    </button>`;
  }).join('');

  searchSuggestionsEl.hidden = false;
  activeSuggestionIndex = -1;

  searchSuggestionsEl.querySelectorAll('.search-suggestion').forEach((btn) => {
    btn.addEventListener('mousedown', (e) => {
      e.preventDefault();
      goToQuestion(btn.dataset.id, btn.dataset.cat);
      searchInput.value = '';
      searchQuery = '';
      hideSuggestions();
      renderPills();
      renderFaqArea();
    });
  });
}

function getFilteredSections() {
  const rawQuery = searchQuery.trim();
  const terms = expandQueryTerms(rawQuery);
  const useFuzzy = terms.length > 0 && !FAQ_DATA.some((s) => s.items.some((item) => matchesTerms(item, terms)));

  return FAQ_DATA
    .filter((s) => rawQuery.length > 0 || s.id === activeCategory)
    .map((s) => {
      const items = s.items
        .filter((item) => !terms.length || matchesTerms(item, terms) || (useFuzzy && matchesFuzzy(item, rawQuery)))
        .sort((a, b) => {
          if (a.essential && !b.essential) return -1;
          if (!a.essential && b.essential) return 1;
          return 0;
        })
        .map((item) => ({ ...item, domId: 'faq-' + item.id }));
      return { id: s.id, icon: s.icon, label: s.label, items };
    })
    .filter((s) => s.items.length > 0);
}

function renderPills() {
  categoryPillsEl.innerHTML = CATEGORIES.map((cat) => `
    <button class="pill${cat.id === activeCategory ? ' is-active' : ''}" data-id="${cat.id}" type="button" aria-pressed="${cat.id === activeCategory}">
      <span class="material-symbols-outlined">${cat.icon}</span><span>${cat.label}</span>
    </button>
  `).join('');
  categoryPillsEl.querySelectorAll('.pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.id;
      openItemIds = new Set();
      searchQuery = '';
      searchInput.value = '';
      renderPills();
      renderFaqArea();
    });
  });
}

function renderQuickLinks() {
  quickLinksEl.innerHTML = QUICK_LINKS.map((link) => `
    <a class="quick-link" href="${link.href}">
      <span class="quick-link__icon"><span class="material-symbols-outlined">${link.icon}</span></span>
      <span class="quick-link__label">${link.label}</span>
      <span class="quick-link__arrow">›</span>
    </a>
  `).join('');
}

function renderFaqItem(item) {
  const isOpen = openItemIds.has(item.id);
  const isHighlighted = highlightedItem === item.id;
  const classes = ['faq-item'];
  if (isOpen) classes.push('is-open');
  if (isHighlighted) classes.push('is-highlighted');

  const stepsHtml = item.steps
    ? `<ol class="faq-item__steps">${item.steps.map((step) => `<li>${step}</li>`).join('')}</ol>`
    : '';

  const relatedRefs = (item.related || []).map(findFaqItemById).filter(Boolean);
  const relatedHtml = relatedRefs.length
    ? `<div class="faq-item__related">
        <div class="faq-item__related-label">Veja também</div>
        ${relatedRefs.map(({ item: ri, catId }) => `<button class="faq-item__related-link" data-id="${ri.id}" data-cat="${catId}" type="button">${ri.q}</button>`).join('')}
      </div>`
    : '';

  const systemHtml = item.system
    ? `<div class="faq-item__system"><span class="faq-item__system-icon"><span class="material-symbols-outlined">location_on</span></span> Onde resolver: <strong>${item.system}</strong></div>`
    : '';

  return `
    <div class="${classes.join(' ')}" id="${item.domId}">
      <button class="faq-item__toggle" data-id="${item.id}" type="button" aria-expanded="${isOpen}" aria-controls="${item.domId}-answer">
        <div class="faq-item__content">
          ${item.essential ? '<div><span class="faq-item__essential"><span class="material-symbols-outlined">star</span> Essencial</span></div>' : ''}
          <span class="faq-item__question">${item.q}</span>
        </div>
        <span class="faq-item__chevron">›</span>
      </button>
      <div class="faq-item__answer" id="${item.domId}-answer"><p>${item.a}</p>${stepsHtml}${relatedHtml}${systemHtml}</div>
    </div>
  `;
}

function renderFaqCategory(section) {
  return `
    <div class="faq-category">
      <div class="faq-category__header">
        <span class="faq-category__icon"><span class="material-symbols-outlined">${section.icon}</span></span>
        <h2 class="faq-category__title">${section.label}</h2>
        <span class="faq-category__count">${section.items.length}</span>
      </div>
      ${section.items.map(renderFaqItem).join('')}
    </div>
  `;
}

function attachFaqItemListeners() {
  faqSectionsEl.querySelectorAll('.faq-item__toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      if (openItemIds.has(id)) {
        openItemIds.delete(id);
      } else {
        openItemIds.add(id);
      }
      renderFaqArea();
    });
  });
  faqSectionsEl.querySelectorAll('.faq-item__related-link').forEach((btn) => {
    btn.addEventListener('click', () => {
      goToQuestion(btn.dataset.id, btn.dataset.cat);
    });
  });
}

function renderFaqArea() {
  const q = searchQuery.trim();
  const hasSearch = normalizeStr(q).length > 0;
  const sections = getFilteredSections();
  const totalCount = sections.reduce((n, s) => n + s.items.length, 0);

  resultCountWrap.hidden = !hasSearch;
  if (hasSearch) {
    resultCountEl.textContent = `${totalCount} resultado${totalCount !== 1 ? 's' : ''} para "${q}"`;
  }

  noResultsEl.hidden = sections.length !== 0;
  faqSectionsEl.innerHTML = sections.map(renderFaqCategory).join('');
  attachFaqItemListeners();
}

function goToQuestion(id, catId) {
  activeCategory = catId;
  openItemIds = new Set([id]);
  highlightedItem = id;
  searchQuery = '';
  searchInput.value = '';

  renderPills();
  renderFaqArea();

  setTimeout(() => {
    const el = document.getElementById('faq-' + id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 90, behavior: 'smooth' });
  }, 100);

  setTimeout(() => {
    highlightedItem = null;
    renderFaqArea();
  }, 2500);
}

searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderPills();
  renderFaqArea();
  renderSuggestions();
});

searchInput.addEventListener('blur', () => {
  setTimeout(hideSuggestions, 150);
});

searchInput.addEventListener('focus', () => {
  if (searchQuery.trim().length >= 2) renderSuggestions();
});

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    const btns = searchSuggestionsEl.querySelectorAll('.search-suggestion');
    if (!btns.length) return;
    activeSuggestionIndex = Math.min(activeSuggestionIndex + 1, btns.length - 1);
    btns.forEach((b, i) => b.classList.toggle('is-active', i === activeSuggestionIndex));
    return;
  }
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    const btns = searchSuggestionsEl.querySelectorAll('.search-suggestion');
    if (!btns.length) return;
    activeSuggestionIndex = Math.max(activeSuggestionIndex - 1, -1);
    btns.forEach((b, i) => b.classList.toggle('is-active', i === activeSuggestionIndex));
    return;
  }
  if (e.key === 'Escape') {
    if (!searchSuggestionsEl.hidden) { hideSuggestions(); return; }
    return;
  }
  if (e.key !== 'Enter') return;

  if (activeSuggestionIndex >= 0 && !searchSuggestionsEl.hidden) {
    const btn = searchSuggestionsEl.querySelectorAll('.search-suggestion')[activeSuggestionIndex];
    if (btn) {
      goToQuestion(btn.dataset.id, btn.dataset.cat);
      searchInput.value = '';
      searchQuery = '';
      hideSuggestions();
      renderPills();
      renderFaqArea();
      return;
    }
  }

  const sections = getFilteredSections();
  const firstItem = sections[0] && sections[0].items[0];
  if (!firstItem) return;

  openItemIds = new Set([firstItem.id]);
  highlightedItem = firstItem.id;
  hideSuggestions();
  renderFaqArea();

  setTimeout(() => {
    const el = document.getElementById('faq-' + firstItem.id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 90, behavior: 'smooth' });
  }, 120);

  setTimeout(() => {
    highlightedItem = null;
    renderFaqArea();
  }, 2500);
});

function renderOnboarding() {
  const stepCount = ONBOARDING_STEPS.length;
  const step = ONBOARDING_STEPS[onboardingStep] || ONBOARDING_STEPS[0];
  const isLastStep = onboardingStep === stepCount - 1;

  onboardingIconEl.innerHTML = '<span class="material-symbols-outlined">' + step.icon + '</span>';
  onboardingStepLabelEl.textContent = `Passo ${onboardingStep + 1} de ${stepCount}`;
  onboardingTitleEl.textContent = step.title;
  onboardingProgressEl.style.width = Math.round(((onboardingStep + 1) / stepCount) * 100) + '%';

  const bulletsHtml = step.bullets.map((b) => `
    <div class="modal__bullet">
      <div class="modal__bullet-icon"><span class="material-symbols-outlined">${b.icon}</span></div>
      <div class="modal__bullet-body">
        <div class="modal__bullet-title">${b.title}</div>
        <div class="modal__bullet-text">${b.text}</div>
      </div>
    </div>
  `).join('');
  const noteHtml = step.note ? `
    <div class="modal__note">
      <span class="modal__note-icon"><span class="material-symbols-outlined">lightbulb</span></span>
      <p class="modal__note-text">${step.note}</p>
    </div>
  ` : '';
  const ctaHtml = step.cta ? `
    <a class="modal__cta" href="${step.cta.href}" target="_blank" rel="noopener">${step.cta.label} <span class="material-symbols-outlined">open_in_new</span></a>
  ` : '';
  onboardingBodyEl.innerHTML = bulletsHtml + noteHtml + ctaHtml + '<div class="modal__spacer"></div>';

  onboardingDotsEl.innerHTML = ONBOARDING_STEPS.map((_, i) => `
    <button class="dot${i === onboardingStep ? ' is-active' : ''}" data-step="${i}" type="button" aria-current="${i === onboardingStep ? 'step' : 'false'}" aria-label="Ir para o passo ${i + 1}"></button>
  `).join('');
  onboardingDotsEl.querySelectorAll('.dot').forEach((btn) => {
    btn.addEventListener('click', () => {
      onboardingStep = Number(btn.dataset.step);
      renderOnboarding();
    });
  });

  onboardingPrevBtn.hidden = onboardingStep === 0;
  onboardingNextBtn.innerHTML = isLastStep ? 'Começar agora <span class="material-symbols-outlined">check</span>' : 'Próximo <span class="material-symbols-outlined">arrow_forward</span>';
}

function openOnboarding() {
  onboardingOpen = true;
  onboardingStep = 0;
  onboardingOverlayEl.hidden = false;
  renderOnboarding();
}

function closeOnboarding() {
  onboardingOpen = false;
  onboardingOverlayEl.hidden = true;
}

document.getElementById('open-onboarding').addEventListener('click', openOnboarding);
document.getElementById('close-onboarding').addEventListener('click', closeOnboarding);

onboardingPrevBtn.addEventListener('click', () => {
  onboardingStep = Math.max(0, onboardingStep - 1);
  renderOnboarding();
});

onboardingNextBtn.addEventListener('click', () => {
  const stepCount = ONBOARDING_STEPS.length;
  if (onboardingStep === stepCount - 1) {
    window.open('https://ac3949.mannesoftprime.com.br/webaluno/', '_blank');
    closeOnboarding();
  } else {
    onboardingStep = Math.min(stepCount - 1, onboardingStep + 1);
    renderOnboarding();
  }
});

onboardingOverlayEl.addEventListener('click', (e) => {
  if (e.target === onboardingOverlayEl) closeOnboarding();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && onboardingOpen) {
    closeOnboarding();
    return;
  }
  if (e.key === 'Escape' && document.activeElement === searchInput && searchQuery) {
    searchQuery = '';
    searchInput.value = '';
    renderPills();
    renderFaqArea();
    return;
  }
  if (e.key === '/' && !onboardingOpen) {
    const tag = document.activeElement && document.activeElement.tagName;
    if (tag !== 'INPUT' && tag !== 'TEXTAREA') {
      e.preventDefault();
      searchInput.focus();
    }
  }
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search')) hideSuggestions();
});

renderQuickLinks();
renderPills();
renderFaqArea();
