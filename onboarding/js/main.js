function resolveByModality(field, modality) {
  if (field && typeof field === 'object') return field[modality] ?? Object.values(field)[0];
  return field;
}

function getStepsForModality(modality) {
  return ONBOARDING_STEPS.filter((step) => !step.modalityOnly || step.modalityOnly === modality);
}

const modalityCardsEl = document.getElementById('modality-cards');
const quickLinksEl = document.getElementById('quick-links');

const onboardingOverlayEl = document.getElementById('onboarding-overlay');
const onboardingIconEl = document.getElementById('onboarding-icon');
const onboardingStepLabelEl = document.getElementById('onboarding-step-label');
const onboardingTitleEl = document.getElementById('onboarding-title');
const onboardingProgressEl = document.getElementById('onboarding-progress');
const onboardingBodyEl = document.getElementById('onboarding-body');
const onboardingDotsEl = document.getElementById('onboarding-dots');
const onboardingPrevBtn = document.getElementById('onboarding-prev');
const onboardingNextBtn = document.getElementById('onboarding-next');
const closeOnboardingBtn = document.getElementById('close-onboarding');
const switchModalityBtn = document.getElementById('switch-modality');

let currentModality = null;
let currentSteps = [];
let onboardingStep = 0;
let onboardingOpen = false;

function renderModalityCards() {
  modalityCardsEl.innerHTML = MODALITIES.map((m) => `
    <button class="modality-card${m.id === currentModality ? ' is-active' : ''}" data-id="${m.id}" type="button" aria-pressed="${m.id === currentModality}">
      <div class="modality-card__icon"><span class="material-symbols-outlined">${m.icon}</span></div>
      <div class="modality-card__label">${m.label}</div>
      <div class="modality-card__desc">${m.desc}</div>
    </button>
  `).join('');
  modalityCardsEl.querySelectorAll('.modality-card').forEach((btn) => {
    btn.addEventListener('click', () => selectModality(btn.dataset.id));
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

function renderOnboarding() {
  const stepCount = currentSteps.length;
  const step = currentSteps[onboardingStep] || currentSteps[0];
  const isLastStep = onboardingStep === stepCount - 1;

  onboardingIconEl.innerHTML = '<span class="material-symbols-outlined">' + step.icon + '</span>';
  onboardingStepLabelEl.textContent = `Passo ${onboardingStep + 1} de ${stepCount}`;
  onboardingTitleEl.textContent = step.title;
  onboardingProgressEl.style.width = Math.round(((onboardingStep + 1) / stepCount) * 100) + '%';

  const bulletsHtml = step.bullets.map((b) => `
    <div class="modal__bullet">
      <div class="modal__bullet-icon"><span class="material-symbols-outlined">${b.icon}</span></div>
      <div class="modal__bullet-body">
        <div class="modal__bullet-title">${resolveByModality(b.title, currentModality)}</div>
        <div class="modal__bullet-text">${resolveByModality(b.text, currentModality)}</div>
      </div>
    </div>
  `).join('');
  const noteText = resolveByModality(step.note, currentModality);
  const noteHtml = noteText ? `
    <div class="modal__note">
      <span class="modal__note-icon"><span class="material-symbols-outlined">lightbulb</span></span>
      <p class="modal__note-text">${noteText}</p>
    </div>
  ` : '';
  const ctaHtml = step.cta ? `
    <a class="modal__cta" href="${step.cta.href}" target="_blank" rel="noopener">${step.cta.label} <span class="material-symbols-outlined">open_in_new</span></a>
  ` : '';
  onboardingBodyEl.innerHTML = bulletsHtml + noteHtml + ctaHtml + '<div class="modal__spacer"></div>';

  onboardingDotsEl.innerHTML = currentSteps.map((_, i) => `
    <button class="dot${i === onboardingStep ? ' is-active' : ''}" data-step="${i}" type="button" aria-current="${i === onboardingStep ? 'step' : 'false'}" aria-label="Ir para o passo ${i + 1}"></button>
  `).join('');
  onboardingDotsEl.querySelectorAll('.dot').forEach((btn) => {
    btn.addEventListener('click', () => {
      onboardingStep = Number(btn.dataset.step);
      renderOnboarding();
    });
  });

  onboardingPrevBtn.hidden = onboardingStep === 0;
  onboardingNextBtn.innerHTML = isLastStep ? 'Ir para o WebAluno <span class="material-symbols-outlined">check</span>' : 'Próximo <span class="material-symbols-outlined">arrow_forward</span>';
}

function openOnboarding() {
  onboardingOpen = true;
  onboardingOverlayEl.hidden = false;
  renderOnboarding();
}

function closeOnboarding() {
  onboardingOpen = false;
  onboardingOverlayEl.hidden = true;
}

function selectModality(modality) {
  currentModality = modality;
  currentSteps = getStepsForModality(modality);
  onboardingStep = 0;

  renderModalityCards();
  openOnboarding();
}

onboardingPrevBtn.addEventListener('click', () => {
  onboardingStep = Math.max(0, onboardingStep - 1);
  renderOnboarding();
});

onboardingNextBtn.addEventListener('click', () => {
  const stepCount = currentSteps.length;
  if (onboardingStep === stepCount - 1) {
    window.open('https://ac3949.mannesoftprime.com.br/webaluno/', '_blank');
  } else {
    onboardingStep = Math.min(stepCount - 1, onboardingStep + 1);
    renderOnboarding();
  }
});

closeOnboardingBtn.addEventListener('click', closeOnboarding);

switchModalityBtn.addEventListener('click', () => {
  currentModality = null;
  closeOnboarding();
  renderModalityCards();
  document.getElementById('modality-cards').scrollIntoView({ behavior: 'smooth', block: 'center' });
});

onboardingOverlayEl.addEventListener('click', (e) => {
  if (e.target === onboardingOverlayEl) closeOnboarding();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && onboardingOpen) closeOnboarding();
});

renderModalityCards();
renderQuickLinks();
