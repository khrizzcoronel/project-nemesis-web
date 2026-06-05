const SITE_CONFIG = {
  gameUrl: 'JUEGO_URL',
  version: '1.0.0-beta',
  social: {
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    email: 'team@projectnemesis.dev'
  },
};

const triviaData = [
  { questionKey: 'q0', q_es: '¿Qué motor gráfico usa Project Nemesis?', q_en: 'What game engine does Project Nemesis use?', options: ['Phaser 3', 'Phaser 4', 'Unity', 'Godot'], correct: 1, exp_es: 'Project Nemesis usa Phaser 4.1.0 con renderizado WebGL.', exp_en: 'Project Nemesis uses Phaser 4.1.0 with WebGL rendering.' },
  { questionKey: 'q1', q_es: '¿Cuál es la resolución base del juego?', q_en: 'What is the base resolution of the game?', options: ['1920x1080', '1280x720', '960x540', '640x480'], correct: 2, exp_es: 'La resolución base es 960×540 px con escalado responsive.', exp_en: 'Base resolution is 960×540 px with responsive scaling.' },
  { questionKey: 'q2', q_es: '¿Qué es Nemesis?', q_en: 'What is Nemesis?', options: ['Un jefe con HP infinito', 'Una IA que aprende del jugador', 'Un personaje secreto', 'Un modo de juego'], correct: 1, exp_es: 'Nemesis es una IA adaptativa que aprende del jugador combate tras combate.', exp_en: 'Nemesis is an adaptive AI that learns from the player fight after fight.' },
  { questionKey: 'q3', q_es: '¿Cuánto dura el estado Berserk de Nemesis?', q_en: 'How long does Nemesis Berserk state last?', options: ['5 segundos', '8 segundos', '12 segundos', '20 segundos'], correct: 2, exp_es: 'El Berserk dura 12 segundos (configurado en berserkConfig.duration).', exp_en: 'Berserk lasts 12 seconds (configured in berserkConfig.duration).' },
  { questionKey: 'q4', q_es: '¿Qué política de stack NO existe en StatusEffectRuntime?', q_en: 'Which stack policy does NOT exist in StatusEffectRuntime?', options: ['Replace', 'Refresh', 'Remove', 'Stack'], correct: 2, exp_es: 'Las tres políticas existentes son: replace, refresh y stack.', exp_en: 'The three existing policies are: replace, refresh, and stack.' },
  { questionKey: 'q5', q_es: '¿Cuál es el multiplicador de intensidad de Nemesis tras 4+ derrotas consecutivas?', q_en: 'What is Nemesis intensity multiplier after 4+ consecutive losses?', options: ['0.5', '0.7', '0.35', '0.1'], correct: 2, exp_es: 'El FrustrationRegulator reduce la intensidad a 0.35 tras 4+ derrotas.', exp_en: 'FrustrationRegulator reduces intensity to 0.35 after 4+ losses.' },
  { questionKey: 'q6', q_es: '¿Qué ataque Berserk usa Nemesis si el jugador está bloqueando?', q_en: 'Which Berserk attack does Nemesis use when the player is blocking?', options: ['Crimson Impaler', 'Neuro Storm', 'Synaptic Collapse', 'Shadow Strike'], correct: 2, exp_es: 'Synaptic Collapse es un AoE que inflige 40 de daño y rompe el bloqueo.', exp_en: 'Synaptic Collapse is an AoE dealing 40 damage and breaking block.' },
  { questionKey: 'q7', q_es: '¿En qué lenguaje está escrito el juego?', q_en: 'What language is the game written in?', options: ['TypeScript', 'JavaScript (ES Modules)', 'Python', 'C#'], correct: 1, exp_es: 'El juego está escrito en JavaScript ES Modules con Vite 8.x.', exp_en: 'The game is written in JavaScript ES Modules with Vite 8.x.' },
  { questionKey: 'q8', q_es: '¿Cuántas acciones monitorea AdaptiveMomentumSystem?', q_en: 'How many actions does AdaptiveMomentumSystem monitor?', options: ['10', '20', '40', '100'], correct: 2, exp_es: 'Monitorea las últimas 40 acciones del jugador en ventana deslizante.', exp_en: 'It monitors the last 40 player actions in a sliding window.' },
  { questionKey: 'q9', q_es: '¿Cuántas maestrías tiene Nemesis?', q_en: 'How many masteries does Nemesis have?', options: ['4', '6', '8', '10'], correct: 2, exp_es: 'Nemesis tiene 8 maestrías: defensiva, ofensiva, dash, berserk, etc.', exp_en: 'Nemesis has 8 masteries: defensive, offensive, dash, berserk, etc.' }
];

let currentLang = localStorage.getItem('pn-lang') || 'es';
let currentTheme = localStorage.getItem('pn-theme') || 'dark';

(function init() {
  applyTheme();
  applyLang();
  setupNavbar();
  setupParticles();
  setupThemeToggle();
  setupLangToggle();
  setupLightbox();
  setupTimelineReveal();
  setupQuiz();
  setupGameControls();
  setupCharTabs();
  setupScrollSpy();
  setupBackToTop();
})();

function t(path) {
  const parts = path.split('.');
  let val = LANG[currentLang];
  for (const p of parts) {
    if (val && val[p] !== undefined) val = val[p];
    else return path;
  }
  return val;
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  const toggle = document.getElementById('themeToggle');
  if (toggle) toggle.checked = currentTheme === 'light';
}

function applyLang() {
  const flag = document.getElementById('langFlag');
  const btn = document.getElementById('langToggle');
  if (flag) flag.src = currentLang === 'es' ? 'assets/icons/flags/ec.svg' : 'assets/icons/flags/us.svg';
  if (btn) btn.innerHTML = '<img id="langFlag" class="flag-icon" src="' + (currentLang === 'es' ? 'assets/icons/flags/ec.svg' : 'assets/icons/flags/us.svg') + '" alt=""> ' + currentLang.toUpperCase();

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (val && val !== key) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = val;
      else el.innerHTML = val;
    }
  });

  renderAllSections();
}

function renderAllSections() {
  renderHeroTech();
  renderTechGrid();
  renderToolsGrid();
  renderAlgoAccordion();
  renderDevNodes();
  renderGallery();
  renderTimeline();
  renderChangelog();
  renderControlsGrid();
}

function renderTechGrid() {
  const grid = document.getElementById('techGrid');
  if (!grid) return;
  const cards = t('tecnicas.cards');
  grid.innerHTML = cards.map(c => `
    <div class="tech-card" data-tooltip="${c.tooltip}">
      <span class="material-icons tech-icon">${c.icon || ''}</span>
      <h3>${c.title}</h3>
      <p>${c.desc}</p>
    </div>
  `).join('');
}

function renderToolsGrid() {
  const grid = document.getElementById('toolsGrid');
  if (!grid) return;
  const items = t('techtools.tools');
  grid.innerHTML = items.map(item => {
    const techClass = item.title.toLowerCase().replace(/[\s.+]+/g, '-').replace(/[^a-z0-9-]/g, '');
    return `
    <div class="tools-card">
      <div class="tools-icon" data-tech="${techClass}"><img src="${item.iconSrc}" alt="${item.title}" class="tools-svg"></div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `}).join('');
}

function renderAlgoAccordion() {
  const acc = document.getElementById('algoAccordion');
  if (!acc) return;
  const items = t('algoritmos.items');

  const COLORS = ['#6644ff', '#f59e0b', '#00d4ff', '#00cc66'];

  acc.innerHTML = items.map((item, i) => {
    const color = COLORS[i];
    let extra = '';

    if (item.table) {
      const vals = item.table.values.slice(1);
      const barColors = ['#00cc66', '#a3e635', '#f59e0b', '#ef4444'];
      extra = `<div class="algo-table">
        <div class="algo-table-row algo-table-header">
          ${item.table.headers.map(h => `<span>${h}</span>`).join('')}
        </div>
        <div class="algo-table-row algo-table-values">
          <span>${item.table.values[0]}</span>
          ${vals.map((v, vi) => `
            <span class="algo-bar-cell">
              <span class="algo-bar" style="width:${parseFloat(v) * 100}%;background:${barColors[vi]}"></span>
              <span class="algo-bar-label">${v}</span>
            </span>
          `).join('')}
        </div>
      </div>`;
    }

    if (item.policies) {
      const policyIcons = { Replace: 'swap_horiz', Refresh: 'refresh', Stack: 'layers' };
      const policyColors = { Replace: '#00d4ff', Refresh: '#f59e0b', Stack: '#6644ff' };
      extra = `<div class="algo-policies">
        ${item.policies.map(p => `
          <div class="algo-policy" style="border-color:${policyColors[p.name]}">
            <span class="material-icons algo-policy-icon" style="color:${policyColors[p.name]}">${policyIcons[p.name]}</span>
            <div>
              <strong style="color:${policyColors[p.name]}">${p.name}</strong>
              <p>${p.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>`;
    }

    if (item.tags) {
      extra = `<div class="algo-tags">
        ${item.tags.map(t => `
          <div class="algo-tag-item">
            <span class="algo-tag-label">${t.label}</span>
            <code class="${t.highlight ? 'algo-code-highlight' : ''}">${t.code}</code>
          </div>
        `).join('')}
      </div>`;
    }

    return `<div class="accordion-item" style="--accent:${color}">
      <button class="accordion-header">
        <span class="accordion-badge">${item.num}</span>
        <span class="material-icons accordion-icon">${item.icon}</span>
        <span class="accordion-title">${item.title}</span>
        <span class="material-icons accordion-arrow">expand_more</span>
      </button>
      <div class="accordion-body">
        <div class="accordion-content">
          <p class="algo-desc">${item.desc}</p>
          ${extra}
        </div>
      </div>
    </div>`;
  }).join('');

  setupAlgoAccordion();
}

function setupAlgoAccordion() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const body = item.querySelector('.accordion-body');
      const content = body.querySelector('.accordion-content');
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.accordion-item.open').forEach(openItem => {
        if (openItem !== item) {
          const ob = openItem.querySelector('.accordion-body');
          openItem.classList.remove('open');
          ob.style.height = '0px';
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        body.style.height = '0px';
      } else {
        item.classList.add('open');
        body.style.height = content.scrollHeight + 'px';
      }
    });
  });

  window.addEventListener('resize', () => {
    document.querySelectorAll('.accordion-item.open').forEach(item => {
      const body = item.querySelector('.accordion-body');
      const content = body.querySelector('.accordion-content');
      body.style.height = content.scrollHeight + 'px';
    });
  });
}

function renderDevNodes() {
  const container = document.getElementById('statusGrid');
  if (!container) return;
  const items = t('estado.items');
  const count = items.length;
  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth < 1024;
  const centerR = isMobile ? 30 : isTablet ? 37 : 44;
  const angleStep = (2 * Math.PI) / count;

  const ICONS = {
    done: `<svg viewBox="0 0 32 32" width="28" height="28"><circle cx="16" cy="16" r="14" fill="none" stroke="#00cc66" stroke-width="2.5"/><path d="M10 16l4 4 8-8" fill="none" stroke="#00cc66" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    wip: `<svg viewBox="0 0 32 32" width="28" height="28"><circle cx="16" cy="16" r="14" fill="none" stroke="var(--accent-orange)" stroke-width="2.5"/><path d="M16 8v8l6 4" fill="none" stroke="var(--accent-orange)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="16" cy="16" r="3" fill="var(--accent-orange)"/></svg>`,
    pending: `<svg viewBox="0 0 32 32" width="28" height="28"><circle cx="16" cy="16" r="14" fill="none" stroke="var(--text-muted)" stroke-width="2" stroke-dasharray="4 3"/><circle cx="16" cy="16" r="4" fill="none" stroke="var(--text-muted)" stroke-width="1.5"/></svg>`
  };

  let svgLines = '';
  let nodesHtml = '';

  items.forEach((item, i) => {
    const angle = angleStep * i - Math.PI / 2;
    const x = 50 + centerR * Math.cos(angle);
    const y = 50 + centerR * Math.sin(angle);
    nodesHtml += `<div class="star-node status-${item.status}" style="--sx:${x.toFixed(2)}%;--sy:${y.toFixed(2)}%">
      <div class="star-node-icon">${ICONS[item.status]}</div>
      <strong>${item.title}</strong>
    </div>`;
    svgLines += `<line x1="50%" y1="50%" x2="${x.toFixed(2)}%" y2="${y.toFixed(2)}%" stroke="var(--border-color)" stroke-width="1" stroke-dasharray="4 3"/>`;
  });

  for (let i = 0; i < count; i++) {
    const next = (i + 4) % count;
    const a1 = angleStep * i - Math.PI / 2;
    const a2 = angleStep * next - Math.PI / 2;
    const x1 = 50 + centerR * Math.cos(a1);
    const y1 = 50 + centerR * Math.sin(a1);
    const x2 = 50 + centerR * Math.cos(a2);
    const y2 = 50 + centerR * Math.sin(a2);
    svgLines += `<line x1="${x1.toFixed(2)}%" y1="${y1.toFixed(2)}%" x2="${x2.toFixed(2)}%" y2="${y2.toFixed(2)}%" stroke="var(--accent-secondary)" stroke-width="0.8" stroke-dasharray="3 4" opacity="0.35"/>`;
  }

  container.innerHTML = `
    <div class="star-map">
      <svg class="star-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">${svgLines}</svg>
      <div class="star-center">
        <h3>PROJECT<br>NEMESIS</h3>
      </div>
      ${nodesHtml}
    </div>`;
}

function renderGallery() {
  const tabsContainer = document.getElementById('galleryTabs');
  const gridsContainer = document.getElementById('galleryGrids');
  if (!tabsContainer || !gridsContainer) return;

  const tabs = t('galeria.tabs');
  const keys = ['player', 'nemesis', 'designs'];

  tabsContainer.innerHTML = tabs.map((tab, i) =>
    `<button class="gallery-tab${i === 0 ? ' active' : ''}" data-tab="${keys[i]}">${tab}</button>`
  ).join('');

  gridsContainer.innerHTML = '';
  keys.forEach((key, i) => {
    const items = t(`galeria.${key}`);
    const grid = document.createElement('div');
    grid.className = `gallery-grid${i === 0 ? ' active' : ''}`;
    grid.id = `gallery-${key}`;
    grid.innerHTML = items.map(item =>
      `<div class="gallery-item"><img src="${item.src}" alt="${item.label}" loading="lazy"><span>${item.label}</span></div>`
    ).join('');
    gridsContainer.appendChild(grid);
  });

  document.querySelectorAll('.gallery-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.gallery-grid').forEach(g => g.classList.remove('active'));
      const target = document.getElementById('gallery-' + tab.dataset.tab);
      if (target) target.classList.add('active');
    });
  });

  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      const lb = document.getElementById('lightbox');
      const lbImg = document.getElementById('lightboxImg');
      if (lb && lbImg) {
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        lb.classList.add('open');
      }
    });
  });
}

function renderHeroTech() {
  const el = document.getElementById('heroTech');
  if (!el) return;
  const tech = t('hero.tech');
  el.innerHTML = tech.map(t => `<span>${t}</span>`).join('');
}

function renderControlsGrid() {
  const grid = document.getElementById('controlsGrid');
  if (!grid) return;
  const controls = t('jugar.controls');
  grid.innerHTML = controls.map(c =>
    `<div class="control-key"><kbd>${c.key}</kbd> <span>${c.label}</span></div>`
  ).join('');
}

function renderTimeline() {
  const tl = document.getElementById('timeline');
  if (!tl) return;
  const items = t('roadmap.items');
  tl.innerHTML = items.map(item => {
    let cls = 'timeline-future';
    if (item.done) cls = 'timeline-done';
    else if (item.current) cls = 'timeline-current';
    const marker = item.done ? '✓' : item.current ? '●' : '○';
    return `<div class="timeline-snake-item ${cls}">
      <div class="timeline-marker">${marker}</div>
      <div class="timeline-content">
        <span class="timeline-date">${item.date}</span>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    </div>`;
  }).join('');
}

function renderChangelog() {
  const cl = document.getElementById('changelogList');
  if (!cl) return;
  const items = t('changelog.items');
  cl.innerHTML = items.map(item => `
    <div class="changelog-item">
      <button class="changelog-header">
        <span class="changelog-version">${item.version}</span>
        <span class="changelog-date">${item.date}</span>
        <span class="changelog-arrow">▾</span>
      </button>
      <div class="changelog-body"><ul>${item.changes.map(c => `<li>${c}</li>`).join('')}</ul></div>
    </div>
  `).join('');
  document.querySelectorAll('.changelog-header').forEach(h => {
    h.addEventListener('click', () => h.parentElement.classList.toggle('open'));
  });
}

function setupNavbar() {
  const nav = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll > 100) nav.classList.add('nav-hidden');
    else nav.classList.remove('nav-hidden');
    lastScroll = currentScroll;
  });

  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }
}

function setupThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;
  toggle.addEventListener('change', () => {
    currentTheme = toggle.checked ? 'light' : 'dark';
    localStorage.setItem('pn-theme', currentTheme);
    applyTheme();
  });
}

function setupLangToggle() {
  const btn = document.getElementById('langToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('pn-lang', currentLang);
    applyLang();
  });
}

function setupParticles() {
  const canvas = document.getElementById('particlesCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];

  function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  const count = Math.min(80, Math.floor(w * h / 15000));
  for (let i = 0; i < count; i++) {
    particles.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5, r: Math.random() * 2 + 0.5, a: Math.random() * 0.4 + 0.1 });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const hero = document.getElementById('hero');
    const rect = hero.getBoundingClientRect();
    if (rect.bottom < 0) return;

    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(102, 68, 255, ${p.a})`; ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(102, 68, 255, ${0.08 * (1 - dist / 120)})`; ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

function setupLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  const lbImg = document.getElementById('lightboxImg');
  const lbClose = lb.querySelector('.lightbox-close');
  if (lbClose) lbClose.addEventListener('click', () => lb.classList.remove('open'));
  lb.addEventListener('click', (e) => { if (e.target === lb) lb.classList.remove('open'); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') lb.classList.remove('open'); });
}

function setupTimelineReveal() {
  setTimeout(() => {
    const items = document.querySelectorAll('.timeline-snake-item');
    if (!items.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.01 });
    items.forEach(item => observer.observe(item));
  }, 200);
}

function setupQuiz() {
  const startEl = document.getElementById('quizStart');
  const activeEl = document.getElementById('quizActive');
  const resultEl = document.getElementById('quizResult');
  const startBtn = document.getElementById('quizStartBtn');
  const retryBtn = document.getElementById('quizRetry');
  const questionEl = document.getElementById('quizQuestion');
  const optionsEl = document.getElementById('quizOptions');
  const counterEl = document.getElementById('quizCounter');
  const progressBar = document.getElementById('quizProgressBar');
  const prevBtn = document.getElementById('quizPrev');
  const nextBtn = document.getElementById('quizNext');
  const resultIcon = document.getElementById('resultIcon');
  const resultTitle = document.getElementById('resultTitle');
  const resultScore = document.getElementById('resultScore');
  const resultPct = document.getElementById('resultPct');
  const resultMsg = document.getElementById('resultMsg');
  const resultErrors = document.getElementById('resultErrors');
  const errorsList = document.getElementById('errorsList');

  let state = { questions: triviaData, current: 0, answers: new Array(triviaData.length).fill(null) };

  function getQText(q) { return currentLang === 'es' ? q.q_es : q.q_en; }
  function getExpText(q) { return currentLang === 'es' ? q.exp_es : q.exp_en; }

  function updateProgress() {
    const answered = state.answers.filter(a => a !== null).length;
    const pct = (answered / state.questions.length) * 100;
    progressBar.style.setProperty('--pct', pct + '%');
    progressBar.style.setProperty('width', pct + '%');
    counterEl.textContent = `${state.current + 1} / ${state.questions.length}`;
  }

  function renderQuestion() {
    const q = state.questions[state.current];
    questionEl.textContent = getQText(q);
    let html = '';
    q.options.forEach((opt, i) => {
      const selected = state.answers[state.current] === i;
      html += `<button class="quiz-option${selected ? ' selected' : ''}" data-index="${i}">${opt}</button>`;
    });
    optionsEl.innerHTML = html;
    optionsEl.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => {
        state.answers[state.current] = parseInt(btn.dataset.index);
        optionsEl.querySelectorAll('.quiz-option').forEach(b => {
          b.classList.toggle('selected', parseInt(b.dataset.index) === state.answers[state.current]);
        });
        updateProgress();
      });
    });
    updateProgress();
    prevBtn.disabled = state.current === 0;
    nextBtn.textContent = state.current === state.questions.length - 1
      ? (currentLang === 'es' ? 'Ver resultado ▶' : 'View result ▶')
      : (currentLang === 'es' ? 'Siguiente ▶' : 'Next ▶');
  }

  function renderResult() {
    const correctCount = state.answers.filter((a, i) => a === state.questions[i].correct).length;
    const pct = Math.round((correctCount / state.questions.length) * 100);
    const results = t('trivia.results');
    const r = pct >= 90 ? results.master : pct >= 70 ? results.warrior : pct >= 50 ? results.learner : results.novice;
    resultIcon.textContent = r.icon;
    resultTitle.textContent = r.title;
    resultScore.textContent = `${correctCount} / ${state.questions.length}`;
    resultPct.textContent = pct + '%';
    resultMsg.textContent = r.msg;

    const wrong = [];
    state.answers.forEach((a, i) => {
      if (a !== state.questions[i].correct) wrong.push(i);
    });

    if (wrong.length > 0) {
      resultErrors.classList.remove('hidden');
      errorsList.innerHTML = wrong.map(i => {
        const q = state.questions[i];
        return `<div class="error-item">
          <div class="error-q">${getQText(q)}</div>
          <div class="error-a">${t('trivia.your_answer')} ${q.options[state.answers[i]]}</div>
          <div class="error-c">${t('trivia.correct_answer')} ${q.options[q.correct]}. ${getExpText(q)}</div>
        </div>`;
      }).join('');
    } else {
      resultErrors.classList.add('hidden');
    }
  }

  function showStart() { startEl.classList.remove('hidden'); activeEl.classList.add('hidden'); resultEl.classList.add('hidden'); }
  function showQuiz() { startEl.classList.add('hidden'); activeEl.classList.remove('hidden'); resultEl.classList.add('hidden'); state.current = 0; state.answers = new Array(state.questions.length).fill(null); renderQuestion(); }
  function showResult() { startEl.classList.add('hidden'); activeEl.classList.add('hidden'); resultEl.classList.remove('hidden'); renderResult(); }

  if (startBtn) startBtn.addEventListener('click', showQuiz);
  if (retryBtn) retryBtn.addEventListener('click', showQuiz);
  if (prevBtn) prevBtn.addEventListener('click', () => { if (state.current > 0) { state.current--; renderQuestion(); } });
  if (nextBtn) nextBtn.addEventListener('click', () => { if (state.current < state.questions.length - 1) { state.current++; renderQuestion(); } else showResult(); });
}

function setupCharTabs() {
  document.querySelectorAll('.char-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.char-showcase-visual');
      parent.querySelectorAll('.char-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      const img = parent.querySelector('.char-showcase-sprite-big');
      if (img) img.src = btn.dataset.img;
    });
  });
}

function setupGameControls() {
  const iframe = document.getElementById('gameIframe');
  const loader = document.getElementById('gameLoader');

  if (iframe) {
    if (SITE_CONFIG.gameUrl !== 'JUEGO_URL') iframe.src = SITE_CONFIG.gameUrl;
    else iframe.src = iframe.dataset.src;
    iframe.addEventListener('load', () => { if (loader) loader.classList.add('hidden'); });
    iframe.addEventListener('error', () => { if (loader) { loader.innerHTML = '<span>Error al cargar el juego</span>'; } });
  }

  const fullBtn = document.getElementById('fullscreenBtn');
  const reloadBtn = document.getElementById('reloadBtn');

  if (fullBtn) {
    fullBtn.addEventListener('click', () => {
      const container = document.getElementById('gameContainer');
      if (container.requestFullscreen) container.requestFullscreen();
      else if (container.webkitRequestFullscreen) container.webkitRequestFullscreen();
    });
  }

  if (reloadBtn && iframe) {
    reloadBtn.addEventListener('click', () => {
      iframe.src = iframe.src;
      if (loader) loader.classList.remove('hidden');
    });
  }
}

function setupScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('.section[id]');
  if (!sections.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === '#' + entry.target.id ? 'var(--accent-primary)' : '';
        });
      }
    });
  }, { threshold: 0.3 });
  sections.forEach(s => observer.observe(s));
}

function setupBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  const heroSection = document.getElementById('hero');
  if (!heroSection) return;
  window.addEventListener('scroll', () => {
    const rect = heroSection.getBoundingClientRect();
    btn.classList.toggle('visible', rect.bottom < 0);
  }, { passive: true });
}

// end
