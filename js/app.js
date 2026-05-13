// =============================================
// MAIN APPLICATION LOGIC — ReactLab
// =============================================

var viewer = null;
var compareViewer1 = null;
var compareViewer2 = null;
var currentReaction = null;
var activeStep = 0;
var conditionValues = { temperature: 50, pressure: 50, concentration: 50 };
var currentSortMode = 'default';

// ---- DOM UTILITIES ----
function $(id) { return document.getElementById(id); }
function $$(sel) { return document.querySelectorAll(sel); }

// ---- CHEMISTRY QUOTES ----
var CHEMISTRY_QUOTES = [
  { text: "Chemistry begins in the stars. The stars are the source of the chemical elements.", author: "— Peter Atkins" },
  { text: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.", author: "— Marie Curie" },
  { text: "To make a discovery is not necessarily the same as to understand a discovery.", author: "— Lise Meitner" },
  { text: "The important thing is not to stop questioning. Curiosity has its own reason for existing.", author: "— Albert Einstein" },
  { text: "The elegance of a mathematical theory is not a luxury but a necessity. The same applies to chemistry.", author: "— Robert Burns Woodward" },
  { text: "In the world of reaction mechanisms, every arrow tells a story.", author: "— Ronald Breslow" },
];

// ---- FUN FACTS per category ----
var FUN_FACTS = {
  condensation: "Aldol and other condensation reactions are responsible for the formation of complex biological macromolecules. The same chemistry that makes cinnamaldehyde (the scent of cinnamon) is used in your body to build steroids and hormones!",
  addition: "Cycloadditions like the Diels-Alder can form up to <strong>4 stereocenters</strong> in a single step — a feat that might otherwise take a chemist dozens of steps! This is why it earned its discoverers the Nobel Prize in Chemistry (1950).",
  substitution: "Palladium-catalyzed cross-coupling reactions (like Suzuki and Heck) are so important that they are used in roughly <strong>30% of all pharmaceutical synthesis routes</strong> today — earning the 2010 Nobel Prize.",
  elimination: "Elimination reactions are the reverse of addition — thermodynamics decides the winner. Many industrial alkene feedstocks (ethylene, propylene) are produced by elimination at very high temperatures.",
  rearrangement: "Rearrangement reactions involve atoms actually <strong>jumping from one position to another</strong> within a molecule without any intermolecular collision. The Beckmann rearrangement alone is responsible for billions of kg of Nylon-6 production annually!",
  industrial: "Industrial named reactions operate at a scale that is hard to imagine. The Haber-Bosch process makes enough ammonia every year to fertilize crops that feed over <strong>3.5 billion people</strong>! Without named reactions, modern civilization would not be possible.",
  organic: "The Cannizzaro reaction was discovered in 1853, before scientists even understood that organic molecules had a definite structure. Cannizzaro himself used this reaction's products to help establish the modern concept of molecular weight!",
};

// ---- GENERAL CHEMISTRY FACTS ----
var GENERAL_FACTS = [
  "Water expands when it freezes, unlike most substances which shrink.",
  "Diamond and graphite are both made entirely of carbon.",
  "The rarest naturally occurring element in the Earth's crust is Astatine.",
  "Helium is lighter than air, which is why helium balloons float.",
  "Oxygen is the most abundant element in the Earth's crust.",
  "The human body contains enough carbon to provide 'lead' for about 9,000 pencils.",
  "DNA is a complex molecule that carries genetic instructions.",
  "A single drop of water contains about 1.39 × 10^21 water molecules.",
  "Glass is technically an amorphous solid, not a slow-moving liquid.",
  "The smell of rain is caused by a chemical called geosmin produced by soil bacteria.",
  "Marie Curie was the first person to win two Nobel Prizes in different sciences (Physics and Chemistry).",
  "There is enough gold in the Earth's core to coat its entire surface in 1.5 feet of the glowing metal.",
  "The element Californium is often considered one of the most expensive substances on Earth.",
  "Lightning strikes can produce ozone, giving the air a distinct smell during a storm.",
  "Bananas are slightly radioactive because they contain potassium-40.",
  "Chalk is made of trillions of microscopic plankton fossils.",
  "The only letter that doesn't appear on the periodic table is J.",
  "Fluorine gas is so reactive it will ignite almost anything, including water and glass.",
  "Mars is red because its surface contains a lot of iron oxide (rust).",
  "Astatine is so highly radioactive and volatile that any macroscopic sample would instantly vaporize itself from its own heat."
];

// ---- MOBILE MENU ----
function toggleMobileMenu() {
  var nav = $('nav-links');
  var btn = $('hamburger-btn');
  if (nav && btn) {
    nav.classList.toggle('mobile-open');
    btn.classList.toggle('open');
  }
}

function closeMobileMenu() {
  var nav = $('nav-links');
  var btn = $('hamburger-btn');
  if (nav) nav.classList.remove('mobile-open');
  if (btn) btn.classList.remove('open');
}

// ---- TOAST NOTIFICATIONS ----
function showToast(icon, message, duration) {
  duration = duration || 3000;
  var container = $('toast-container');
  if (!container) return;
  var toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = '<span class="toast-icon">' + icon + '</span><span>' + message + '</span>';
  container.appendChild(toast);
  setTimeout(function() {
    toast.classList.add('toast-out');
    setTimeout(function() { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 350);
  }, duration);
}

// ---- SCROLL TO TOP ----
function initScrollTop() {
  var btn = $('scroll-top-btn');
  if (!btn) return;
  window.addEventListener('scroll', function() {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });
}

// ---- QUOTE CAROUSEL ----
function initQuoteCarousel() {
  var container = $('quote-carousel');
  if (!container) return;
  var currentQuote = 0;

  function renderQuote(idx) {
    var q = CHEMISTRY_QUOTES[idx];
    var dots = CHEMISTRY_QUOTES.map(function(_, i) {
      return '<button class="quote-dot ' + (i === idx ? 'active' : '') + '" onclick="goToQuote(' + i + ')" aria-label="Quote ' + (i+1) + '"></button>';
    }).join('');
    container.innerHTML =
      '<div class="quote-text">' + q.text + '</div>' +
      '<div class="quote-author">' + q.author + '</div>' +
      '<div class="quote-dots">' + dots + '</div>';
  }

  window.goToQuote = function(idx) {
    currentQuote = idx;
    renderQuote(currentQuote);
  };

  renderQuote(currentQuote);
  setInterval(function() {
    currentQuote = (currentQuote + 1) % CHEMISTRY_QUOTES.length;
    renderQuote(currentQuote);
  }, 6000);
}

// ---- PAGE SWITCHING ----
function showHome() {
  $('home-page').classList.remove('hidden');
  $('detail-page').classList.add('hidden');
  var compPage = $('compare-page');
  if (compPage) compPage.classList.add('hidden');
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (viewer) { viewer.destroy(); viewer = null; }
  document.title = 'ReactLab — Named Reactions';
  closeMobileMenu();
}

function showDetail(reaction) {
  currentReaction = reaction;
  activeStep = 0;
  conditionValues = { temperature: 50, pressure: 50, concentration: 50 };

  $('home-page').classList.add('hidden');
  var compPage = $('compare-page');
  if (compPage) compPage.classList.add('hidden');
  $('detail-page').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.title = reaction.name + ' — ReactLab';

  // Update breadcrumb
  var breadcrumbName = $('breadcrumb-name');
  if (breadcrumbName) breadcrumbName.textContent = reaction.name;

  renderDetail(reaction);

  // Show toast
  showToast('⚗', 'Exploring <strong>' + reaction.name + '</strong>', 2800);

  // Initialize 3D viewer after DOM settles
  if (viewer) { viewer.destroy(); viewer = null; }
  setTimeout(function() {
    viewer = new MolecularViewer3D('viewer-canvas');
    viewer.showReactants(reaction.molecule3d);
    initViewerButtons(reaction);
    var infoSteps = $('info-steps');
    if (infoSteps) infoSteps.textContent = reaction.steps.length + ' steps — click to explore';
  }, 200);
}

// ---- SORT REACTIONS ----
function sortReactions(mode) {
  currentSortMode = mode;
  var searchVal = $('search-input') ? $('search-input').value : '';
  var activeChip = document.querySelector('.chip.active');
  renderHome(activeChip ? activeChip.dataset.cat : null, searchVal);
}

// ---- SEARCH CLEAR ----
function clearSearch() {
  var input = $('search-input');
  var clearBtn = $('search-clear');
  if (input) input.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  var activeChip = document.querySelector('.chip.active');
  renderHome(activeChip ? activeChip.dataset.cat : null, '');
  if (input) input.focus();
}

// ---- RENDER HOME ----
function renderHome(filter, search) {
  filter = filter || null;
  search = search || '';

  var grid = $('reaction-grid');
  grid.innerHTML = '';

  var filtered = REACTIONS.filter(function(r) {
    var matchCat = !filter || r.category === filter;
    var matchSearch = !search ||
      r.name.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
      r.summary.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
      r.tags.some(function(t) { return t.toLowerCase().indexOf(search.toLowerCase()) > -1; });
    return matchCat && matchSearch;
  });

  // Apply sort
  if (currentSortMode === 'alpha') {
    filtered = filtered.slice().sort(function(a, b) { return a.name.localeCompare(b.name); });
  } else if (currentSortMode === 'alpha-desc') {
    filtered = filtered.slice().sort(function(a, b) { return b.name.localeCompare(a.name); });
  } else if (currentSortMode === 'year') {
    filtered = filtered.slice().sort(function(a, b) {
      var ya = parseInt((a.discovered || '').match(/\d{4}/) ? (a.discovered || '').match(/\d{4}/)[0] : 9999);
      var yb = parseInt((b.discovered || '').match(/\d{4}/) ? (b.discovered || '').match(/\d{4}/)[0] : 9999);
      return ya - yb;
    });
  } else if (currentSortMode === 'year-desc') {
    filtered = filtered.slice().sort(function(a, b) {
      var ya = parseInt((a.discovered || '').match(/\d{4}/) ? (a.discovered || '').match(/\d{4}/)[0] : 0);
      var yb = parseInt((b.discovered || '').match(/\d{4}/) ? (b.discovered || '').match(/\d{4}/)[0] : 0);
      return yb - ya;
    });
  }

  // Update result count badge
  var countEl = $('result-count-num');
  if (countEl) countEl.textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = '<div style="color:var(--text-muted);grid-column:1/-1;padding:32px;text-align:center;">No reactions found matching your search.</div>';
    return;
  }

  filtered.forEach(function(reaction, i) {
    var card = document.createElement('div');
    card.className = 'reaction-card fade-in';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.style.animationDelay = (i * 30) + 'ms';
    var yearMatch = reaction.discovered ? reaction.discovered.match(/\d{4}/) : null;
    var yearBadge = yearMatch ? '<span class="card-discovered">📅 ' + yearMatch[0] + '</span>' : '';
    var stepCount = reaction.steps ? reaction.steps.length : 0;
    card.innerHTML =
      '<span class="card-category cat-' + reaction.category + '">' + reaction.category + '</span>' +
      yearBadge +
      '<h3>' + reaction.name + '</h3>' +
      '<p>' + reaction.summary.slice(0, 130) + '…</p>' +
      '<div class="card-footer">' +
        '<div class="card-tags">' +
          reaction.tags.slice(0, 3).map(function(t) { return '<span class="card-tag">' + t + '</span>'; }).join('') +
        '</div>' +
        '<span class="card-step-count">' + stepCount + ' steps</span>' +
        '<span class="card-arrow">→</span>' +
      '</div>';
    card.addEventListener('click', (function(r) { return function() { showDetail(r); }; })(reaction));
    card.addEventListener('keydown', (function(r) { return function(e) { if (e.key === 'Enter' || e.key === ' ') showDetail(r); }; })(reaction));
    grid.appendChild(card);
    setTimeout((function(c) { return function() { c.classList.add('visible'); }; })(card), 30 + i * 30);
  });
}

// ---- RENDER DETAIL ----
function renderDetail(r) {
  $('detail-name').textContent = r.name;
  $('detail-summary').textContent = r.summary;
  $('detail-category-badge').textContent = r.category;
  $('detail-category-badge').className = 'card-category cat-' + r.category;

  // Meta badges
  var detailMeta = $('detail-meta');
  if (detailMeta) {
    var yearMatch = r.discovered ? r.discovered.match(/\d{4}/) : null;
    var year = yearMatch ? yearMatch[0] : null;
    detailMeta.innerHTML =
      (year ? '<span class="detail-meta-badge badge-year">📅 ' + year + '</span>' : '') +
      '<span class="detail-meta-badge badge-type">🔬 ' + (r.reactionType || r.category) + '</span>' +
      '<span class="detail-meta-badge badge-steps">⚗ ' + r.steps.length + ' Mechanism Steps</span>';
  }

  // Info grid
  $('info-discovered').textContent = r.discovered;
  $('info-type').textContent = r.reactionType;
  $('info-catalyst').textContent = r.catalyst;

  // Equation
  $('reaction-equation').innerHTML = r.equation.replace(/[→⇌]/g, function(m) {
    return '<span class="eq-arrow">' + m + '</span>';
  });

  // Applications
  var appList = $('applications-list');
  if (appList && r.applications && r.applications.length > 0) {
    appList.innerHTML = r.applications.map(function(app) {
      return '<li class="app-item"><span class="app-icon">✅</span> ' + app + '</li>';
    }).join('');
    $('applications-panel').style.display = 'block';
  } else if ($('applications-panel')) {
    $('applications-panel').style.display = 'none';
  }

  // Fun Fact
  var funFactEl = $('fun-fact-content');
  if (funFactEl) {
    var catFact = FUN_FACTS[r.category] ||
      '<strong>' + r.name + '</strong> is a classic named reaction that has been pivotal in advancing organic chemistry. Named reactions are cornerstones of synthesis — they allow chemists to predict and control reactivity with precision.';
    
    // Select two deterministic random facts based on reaction name
    var seed1 = r.name.charCodeAt(0) + (r.name.length * 3);
    var seed2 = r.name.charCodeAt(r.name.length - 1) + (r.name.length * 7);
    var fact1 = GENERAL_FACTS[seed1 % GENERAL_FACTS.length];
    var fact2 = GENERAL_FACTS[seed2 % GENERAL_FACTS.length];
    if (fact1 === fact2) fact2 = GENERAL_FACTS[(seed2 + 1) % GENERAL_FACTS.length];

    funFactEl.innerHTML = 
      '<ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:16px;">' +
        '<li style="display:flex; gap:12px; align-items:start;"><span style="font-size:1.4rem; line-height:1;">✨</span> <span style="font-size:0.95rem; line-height:1.6; color:var(--text-primary);">' + catFact + '</span></li>' +
        '<div style="height:1px; background:linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent); margin:4px 0;"></div>' +
        '<li style="display:flex; gap:12px; align-items:start;"><span style="font-size:1.4rem; line-height:1;">🧪</span> <span style="font-size:0.9rem; line-height:1.6; color:var(--text-secondary);">' + fact1 + '</span></li>' +
        '<li style="display:flex; gap:12px; align-items:start;"><span style="font-size:1.4rem; line-height:1;">💡</span> <span style="font-size:0.9rem; line-height:1.6; color:var(--text-secondary);">' + fact2 + '</span></li>' +
      '</ul>';
  }

  // Add animation class to panels
  var panels = $$('#detail-page .glass-panel, #detail-page .info-grid, #detail-page .reaction-equation');
  panels.forEach(function(panel, idx) {
    panel.classList.remove('slide-up-anim');
    void panel.offsetWidth; // trigger reflow
    panel.style.animationDelay = (idx * 0.1) + 's';
    panel.classList.add('slide-up-anim');
  });

  // Mechanism steps
  renderSteps(r);

  // Conditions
  renderConditions(r);
}

function renderSteps(r) {
  var list = $('mechanism-list');
  list.innerHTML = '';

  // Progress bar
  var progressBar = document.createElement('div');
  progressBar.className = 'step-progress-bar';
  r.steps.forEach(function(_, idx) {
    var dot = document.createElement('div');
    dot.className = 'step-progress-dot' + (idx < activeStep ? ' done' : idx === activeStep ? ' active' : '');
    progressBar.appendChild(dot);
  });
  list.appendChild(progressBar);

  r.steps.forEach(function(step, i) {
    var li = document.createElement('li');
    li.className = 'mech-step';
    li.dataset.idx = i;
    li.innerHTML =
      '<div class="step-num ' + (i === activeStep ? 'active-step' : '') + '">' + (i + 1) + '</div>' +
      '<div class="step-body">' +
        '<div class="step-title">' + step.title + '</div>' +
        '<div class="step-content">' + step.content + '</div>' +
        (step.formula ? '<div class="step-formula">' + step.formula + '</div>' : '') +
      '</div>';
    li.addEventListener('click', (function(idx, reaction) {
      return function() {
        activeStep = idx;
        renderSteps(reaction);
        if (viewer) {
          if (idx === 0) viewer.showReactants(reaction.molecule3d);
          else if (idx === reaction.steps.length - 1) viewer.showProducts(reaction.molecule3d);
          else viewer.showReactants(reaction.molecule3d);
        }
      };
    })(i, r));
    list.appendChild(li);
  });
}

function renderConditions(r) {
  var keys = Object.keys(r.conditions);
  keys.forEach(function(key) {
    var slider = $('slider-' + key);
    var valueEl = $('val-' + key);
    var effectEl = $('effect-' + key);
    if (!slider || !effectEl) return;

    function updateCondition(val) {
      conditionValues[key] = val;
      var condData = r.conditions[key];
      var level;
      if (val < 34) { level = 'low'; }
      else if (val < 67) { level = 'medium'; }
      else { level = 'high'; }

      var levelObj = condData[level] || condData.medium;

      var displayVal;
      if (key === 'temperature') displayVal = Math.round(val * 2.5 - 25) + '°C';
      else if (key === 'pressure') displayVal = (val / 50).toFixed(1) + ' atm';
      else displayVal = (val / 50).toFixed(1) + 'x';

      if (valueEl) valueEl.textContent = displayVal;
      effectEl.textContent = levelObj.effect;
      effectEl.className = 'cond-effect effect-' + levelObj.type;
    }

    slider.value = conditionValues[key];
    // Remove old handler if any
    if (slider._rlHandler) slider.removeEventListener('input', slider._rlHandler);
    slider._rlHandler = function(e) { updateCondition(+e.target.value); };
    slider.addEventListener('input', slider._rlHandler);
    updateCondition(conditionValues[key]);
  });

  // Hide condition rows not present in this reaction
  ['temperature', 'pressure', 'concentration'].forEach(function(key) {
    var row = $('row-' + key);
    if (row) row.style.display = r.conditions[key] ? 'block' : 'none';
  });
}

// ---- VIEWER BUTTON HANDLERS ----
function initViewerButtons(r) {
  // Clone buttons to remove stale listeners
  ['btn-reactants', 'btn-products', 'btn-animate'].forEach(function(id) {
    var btn = $(id);
    if (btn) {
      var clone = btn.cloneNode(true);
      btn.parentNode.replaceChild(clone, btn);
    }
  });

  var rBtn = $('btn-reactants');
  var pBtn = $('btn-products');
  var aBtn = $('btn-animate');

  if (rBtn) rBtn.addEventListener('click', function() {
    setActiveViewerBtn(rBtn);
    if (viewer) viewer.showReactants(r.molecule3d);
  });
  if (pBtn) pBtn.addEventListener('click', function() {
    setActiveViewerBtn(pBtn);
    if (viewer) viewer.showProducts(r.molecule3d);
  });
  if (aBtn) aBtn.addEventListener('click', function() {
    setActiveViewerBtn(aBtn);
    if (viewer) viewer.playReactionAnimation(r.molecule3d);
    showToast('🎬', 'Reaction animation started!', 2000);
  });

  // Set reactants as default active
  $$('.viewer-btn').forEach(function(b) { b.classList.remove('active-btn'); });
  if (rBtn) rBtn.classList.add('active-btn');
}

function setActiveViewerBtn(btn) {
  $$('.viewer-btn').forEach(function(b) { b.classList.remove('active-btn'); });
  btn.classList.add('active-btn');
}

// ---- SEARCH ----
function initSearch() {
  var input = $('search-input');
  var clearBtn = $('search-clear');
  if (!input) return;
  var debounce;
  input.addEventListener('input', function() {
    clearTimeout(debounce);
    if (clearBtn) clearBtn.style.display = input.value ? 'flex' : 'none';
    debounce = setTimeout(function() {
      var chips = $$('.chip');
      var activeFilter = null;
      chips.forEach(function(c) { if (c.classList.contains('active')) activeFilter = c.dataset.cat; });
      renderHome(activeFilter, input.value);
    }, 200);
  });
}

// ---- CATEGORY CHIPS ----
function initChips() {
  $$('.chip').forEach(function(chip) {
    chip.addEventListener('click', function() {
      var wasActive = chip.classList.contains('active');
      $$('.chip').forEach(function(c) { c.classList.remove('active'); });
      if (!wasActive) chip.classList.add('active');
      var cat = chip.dataset.cat;
      var search = $('search-input') ? $('search-input').value : '';
      renderHome(wasActive ? null : cat, search);
    });
  });
}

// ---- SCROLL ANIMATIONS ----
function initScrollAnimations() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  $$('.fade-in').forEach(function(el) { observer.observe(el); });
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', function() {
  renderHome();
  initSearch();
  initChips();
  initScrollAnimations();
  initScrollTop();
  initQuoteCarousel();

  // Back button
  var backBtn = $('back-btn');
  if (backBtn) backBtn.addEventListener('click', showHome);

  // Close mobile menu on outside click
  document.addEventListener('click', function(e) {
    var nav = $('nav-links');
    var btn = $('hamburger-btn');
    if (nav && btn && nav.classList.contains('mobile-open')) {
      if (!nav.contains(e.target) && !btn.contains(e.target)) {
        closeMobileMenu();
      }
    }
  });
});

// ---- EXTRAS (COMPARE MODE) ----
window.showCompare = function() {
  $('home-page').classList.add('hidden');
  $('detail-page').classList.add('hidden');
  
  var compPage = $('compare-page');
  if (compPage) compPage.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (viewer) { viewer.destroy(); viewer = null; }
  document.title = 'Compare Reactions — ReactLab';
  closeMobileMenu();

  var sel1 = $('compare-select-1');
  var sel2 = $('compare-select-2');
  if (sel1 && sel1.options.length === 0) {
    if (window.filterCompareSelect) {
      window.filterCompareSelect(1, '');
      window.filterCompareSelect(2, '');
    }

    
    if (REACTIONS.length >= 2) {
      sel1.value = REACTIONS[0].id;
      sel2.value = REACTIONS[1].id;
      window.loadCompareSide(1, REACTIONS[0].id);
      window.loadCompareSide(2, REACTIONS[1].id);
    }
  } else {
    if (sel1 && sel1.value) window.loadCompareSide(1, sel1.value);
    if (sel2 && sel2.value) window.loadCompareSide(2, sel2.value);
  }
};

window.loadCompareSide = function(side, reactionId) {
  if (!reactionId) return;
  var r = REACTIONS.find(function(rx) { return rx.id === reactionId; });
  if (!r) return;
  
  // Category badge
  var catBadge = $('comp' + side + '-category');
  if (catBadge) {
    catBadge.innerHTML = '<span class="card-category cat-' + r.category + '" style="margin:0;">' + r.category + '</span>';
  }
  
  // Discovered
  var discEl = $('comp' + side + '-discovered');
  if (discEl) discEl.textContent = r.discovered || 'Not specified';

  // Reaction type
  var typeEl = $('comp' + side + '-type');
  if (typeEl) typeEl.textContent = r.reactionType || r.category;

  // Catalyst
  var catEl = $('comp' + side + '-catalyst');
  if (catEl) catEl.textContent = r.catalyst || 'None / Thermal';

  // Equation
  var eqEl = $('comp' + side + '-equation');
  if (eqEl) {
    eqEl.innerHTML = r.equation.replace(/[→⇌]/g, function(m) {
      return '<span class="eq-arrow" style="margin:0 4px;">' + m + '</span>';
    });
  }

  // Applications
  var appList = $('comp' + side + '-applications');
  if (appList && r.applications && r.applications.length > 0) {
    appList.innerHTML = r.applications.map(function(app) {
      return '<li class="app-item" style="padding:10px 14px;"><span class="app-icon">✅</span> ' + app + '</li>';
    }).join('');
  } else if (appList) {
    appList.innerHTML = '<li style="color:var(--text-muted); font-size:0.85rem;">No applications listed</li>';
  }

  // Mechanism steps
  var stepsList = $('comp' + side + '-steps');
  if (stepsList) {
    stepsList.innerHTML = r.steps.map(function(step, i) {
      return '<li class="mech-step" style="padding:12px; cursor:default;">' +
               '<div class="step-num" style="width:30px; height:30px; font-size:0.75rem;">' + (i + 1) + '</div>' +
               '<div class="step-body">' +
                 '<div class="step-title" style="font-size:0.88rem;">' + step.title + '</div>' +
                 '<div class="step-content" style="font-size:0.82rem; margin-top:4px;">' + step.content + '</div>' +
                 (step.formula ? '<div class="step-formula" style="margin-top:8px; padding:8px 12px; font-size:0.8rem;">' + step.formula + '</div>' : '') +
               '</div>' +
             '</li>';
    }).join('');
  }

  // 3D Model — use longer delay to ensure container is laid out
  setTimeout(function() {
    var canvasId = 'compare-canvas-' + side;
    var container = $(canvasId);
    if (!container) return;
    
    // Destroy previous viewer properly FIRST before clearing HTML
    if (side === 1) {
      if (compareViewer1) {
        try { compareViewer1.destroy(); } catch(e) {}
        compareViewer1 = null;
      }
    } else {
      if (compareViewer2) {
        try { compareViewer2.destroy(); } catch(e) {}
        compareViewer2 = null;
      }
    }
    
    // Clear HTML first
    container.innerHTML = '';
    
    // Force layout reflow
    void container.offsetWidth;
    void container.offsetHeight;
    
    if (side === 1) {
      compareViewer1 = new MolecularViewer3D(canvasId);
      if (compareViewer1 && r.molecule3d) {
        compareViewer1.showReactants(r.molecule3d);
      }
    } else {
      compareViewer2 = new MolecularViewer3D(canvasId);
      if (compareViewer2 && r.molecule3d) {
        compareViewer2.showReactants(r.molecule3d);
      }
    }
  }, 500);

  if (window.analyzeDifferences) window.analyzeDifferences();
};

window.filterCompareSelect = function(side, query) {
  var sel = $('compare-select-' + side);
  if (!sel) return;
  query = (query || '').toLowerCase();
  
  // Maintain current selection
  var currentVal = sel.value;
  var opts = '<option value="">-- Choose Reaction --</option>';
  REACTIONS.forEach(function(r) {
    if (!query || r.name.toLowerCase().indexOf(query) > -1 || r.category.toLowerCase().indexOf(query) > -1) {
      var selected = (r.id === currentVal) ? ' selected' : '';
      opts += '<option value="' + r.id + '"' + selected + '>' + r.name + '</option>';
    }
  });
  sel.innerHTML = opts;
};

window.analyzeDifferences = function() {
  var sel1 = $('compare-select-1');
  var sel2 = $('compare-select-2');
  var analysisEl = $('compare-analysis');
  if (!sel1 || !sel2 || !analysisEl) return;
  
  var r1 = REACTIONS.find(function(rx) { return rx.id === sel1.value; });
  var r2 = REACTIONS.find(function(rx) { return rx.id === sel2.value; });
  
  if (!r1 || !r2) {
    analysisEl.innerHTML = '<div style="color:var(--text-muted);">Select two reactions above to see a detailed educational comparison.</div>';
    return;
  }

  // --- Helper: extract concepts from reaction data ---
  function extractConcepts(rx) {
    var text = JSON.stringify(rx.steps || []).toLowerCase() + ' ' + (rx.summary || '').toLowerCase() + ' ' + (rx.reactionType || '').toLowerCase();
    var c = [];
    if (text.includes('carbocation')) c.push('Carbocation Intermediate');
    if (text.includes('carbanion')) c.push('Carbanion Intermediate');
    if (text.includes('radical') || text.includes('free radical')) c.push('Free Radical');
    if (text.includes('concerted') || text.includes('pericyclic')) c.push('Concerted / Pericyclic');
    if (text.includes('nucleophil')) c.push('Nucleophilic Attack');
    if (text.includes('electrophil')) c.push('Electrophilic Attack');
    if (text.includes('oxida')) c.push('Oxidation');
    if (text.includes('reduc')) c.push('Reduction');
    if (text.includes('proton') && !text.includes('deproton')) c.push('Proton Transfer');
    if (text.includes('deproton')) c.push('Deprotonation');
    if (text.includes('sn1')) c.push('SN1 Pathway');
    if (text.includes('sn2')) c.push('SN2 Pathway');
    if (text.includes('cycloaddition') || text.includes('[4+2]') || text.includes('[2+2]')) c.push('Cycloaddition');
    if (text.includes('rearrangement') || text.includes('migration')) c.push('Rearrangement / Migration');
    if (text.includes('elimination')) c.push('Elimination');
    if (text.includes('enolate') || text.includes('enoliz')) c.push('Enolate Chemistry');
    if (text.includes('cross-coupling') || text.includes('coupling')) c.push('Cross-Coupling');
    if (text.includes('palladium') || text.includes('pd')) c.push('Pd Catalysis');
    if (text.includes('stereo') || text.includes('inversion')) c.push('Stereospecific');
    if (text.includes('metal') || text.includes('organometal')) c.push('Organometallic');
    if (c.length === 0) c.push('Standard Mechanism');
    return c;
  }

  // --- Helper: classify reaction complexity ---
  function getComplexity(rx) {
    var steps = rx.steps ? rx.steps.length : 0;
    if (steps <= 2) return { level: 'Low', label: 'Beginner Friendly', color: 'var(--accent-green)' };
    if (steps <= 4) return { level: 'Moderate', label: 'Intermediate', color: 'var(--accent-orange)' };
    return { level: 'High', label: 'Advanced', color: 'var(--accent-red)' };
  }

  // --- Helper: get year from discovered string ---
  function getYear(rx) {
    var match = (rx.discovered || '').match(/\d{4}/);
    return match ? parseInt(match[0]) : null;
  }

  // --- Helper: determine if reaction has Nobel connection ---
  function hasNobel(rx) {
    return (rx.discovered || '').toLowerCase().includes('nobel');
  }

  var concepts1 = extractConcepts(r1);
  var concepts2 = extractConcepts(r2);
  var complexity1 = getComplexity(r1);
  var complexity2 = getComplexity(r2);
  var year1 = getYear(r1);
  var year2 = getYear(r2);
  
  // Find shared and unique concepts
  var shared = concepts1.filter(function(c) { return concepts2.indexOf(c) > -1; });
  var unique1 = concepts1.filter(function(c) { return concepts2.indexOf(c) === -1; });
  var unique2 = concepts2.filter(function(c) { return concepts1.indexOf(c) === -1; });

  // --- Build the comparison HTML ---
  var html = '<div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">';
  
  // 1. Reaction Classification
  html += '<div class="compare-insight-card">' +
    '<span class="compare-insight-icon">🏷️</span>' +
    '<div class="compare-insight-title">Reaction Classification</div>' +
    '<div class="compare-insight-body">' +
      '<strong>' + r1.name + '</strong><br>' +
      '<span class="card-category cat-' + r1.category + '" style="margin:4px 0; font-size:0.7rem;">' + r1.category + '</span><br>' +
      '<span style="color:var(--text-muted); font-size:0.82rem;">' + (r1.reactionType || r1.category) + '</span>' +
    '</div>' +
  '</div>';
  html += '<div class="compare-insight-card">' +
    '<span class="compare-insight-icon">🏷️</span>' +
    '<div class="compare-insight-title">Reaction Classification</div>' +
    '<div class="compare-insight-body">' +
      '<strong>' + r2.name + '</strong><br>' +
      '<span class="card-category cat-' + r2.category + '" style="margin:4px 0; font-size:0.7rem;">' + r2.category + '</span><br>' +
      '<span style="color:var(--text-muted); font-size:0.82rem;">' + (r2.reactionType || r2.category) + '</span>' +
    '</div>' +
  '</div>';

  // 2. Mechanism Concepts (side by side)
  html += '<div class="compare-insight-card">' +
    '<span class="compare-insight-icon">⚙️</span>' +
    '<div class="compare-insight-title">' + r1.name + ' — Key Concepts</div>' +
    '<div class="compare-insight-body">' +
      concepts1.map(function(c) { return '<span class="compare-badge">' + c + '</span>'; }).join('') +
    '</div>' +
  '</div>';
  html += '<div class="compare-insight-card">' +
    '<span class="compare-insight-icon">⚙️</span>' +
    '<div class="compare-insight-title">' + r2.name + ' — Key Concepts</div>' +
    '<div class="compare-insight-body">' +
      concepts2.map(function(c) { return '<span class="compare-badge">' + c + '</span>'; }).join('') +
    '</div>' +
  '</div>';

  // 3. Catalyst & Conditions Comparison (full width)
  html += '<div class="compare-insight-card" style="grid-column:1/-1;">' +
    '<span class="compare-insight-icon">🧪</span>' +
    '<div class="compare-insight-title">Catalyst & Conditions Comparison</div>' +
    '<div class="compare-insight-body" style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">' +
      '<div>' +
        '<strong>' + r1.name + '</strong><br>' +
        '<span style="color:var(--accent-cyan);">Catalyst:</span> ' + (r1.catalyst || 'None / Thermal') + '<br>' +
        '<span style="color:var(--accent-cyan);">Steps:</span> ' + r1.steps.length + ' mechanism steps' +
      '</div>' +
      '<div>' +
        '<strong>' + r2.name + '</strong><br>' +
        '<span style="color:var(--accent-cyan);">Catalyst:</span> ' + (r2.catalyst || 'None / Thermal') + '<br>' +
        '<span style="color:var(--accent-cyan);">Steps:</span> ' + r2.steps.length + ' mechanism steps' +
      '</div>' +
    '</div>' +
  '</div>';

  // 4. Complexity & Difficulty Level
  html += '<div class="compare-insight-card">' +
    '<span class="compare-insight-icon">📊</span>' +
    '<div class="compare-insight-title">Complexity Level</div>' +
    '<div class="compare-insight-body">' +
      '<span style="color:' + complexity1.color + '; font-weight:700; font-size:1.1rem;">' + complexity1.level + '</span><br>' +
      '<span style="font-size:0.82rem; color:var(--text-muted);">' + complexity1.label + ' · ' + r1.steps.length + ' steps</span>' +
    '</div>' +
  '</div>';
  html += '<div class="compare-insight-card">' +
    '<span class="compare-insight-icon">📊</span>' +
    '<div class="compare-insight-title">Complexity Level</div>' +
    '<div class="compare-insight-body">' +
      '<span style="color:' + complexity2.color + '; font-weight:700; font-size:1.1rem;">' + complexity2.level + '</span><br>' +
      '<span style="font-size:0.82rem; color:var(--text-muted);">' + complexity2.label + ' · ' + r2.steps.length + ' steps</span>' +
    '</div>' +
  '</div>';

  // 5. Historical Context (full width)
  var historyHtml = '';
  if (year1 && year2) {
    var yearDiff = Math.abs(year1 - year2);
    var olderRx = year1 < year2 ? r1 : r2;
    var newerRx = year1 < year2 ? r2 : r1;
    historyHtml = '<strong>' + olderRx.name + '</strong> was discovered ' + yearDiff + ' years before <strong>' + newerRx.name + '</strong>. ';
    if (yearDiff > 50) {
      historyHtml += 'This significant gap reflects the evolution of chemical understanding — from classical organic chemistry to modern catalytic methods.';
    } else if (yearDiff > 20) {
      historyHtml += 'Both reactions emerged during active periods of organic chemistry development.';
    } else {
      historyHtml += 'These reactions were discovered in a similar era of chemical research.';
    }
  } else {
    historyHtml = 'Historical dates not fully available for comparison.';
  }
  if (hasNobel(r1)) historyHtml += ' <strong style="color:var(--accent-orange);">🏅 ' + r1.name + ' earned a Nobel Prize!</strong>';
  if (hasNobel(r2)) historyHtml += ' <strong style="color:var(--accent-orange);">🏅 ' + r2.name + ' earned a Nobel Prize!</strong>';

  html += '<div class="compare-insight-card" style="grid-column:1/-1;">' +
    '<span class="compare-insight-icon">📜</span>' +
    '<div class="compare-insight-title">Historical Context</div>' +
    '<div class="compare-insight-body">' + historyHtml + '</div>' +
  '</div>';

  // 6. Shared concepts
  if (shared.length > 0) {
    html += '<div class="compare-insight-card" style="grid-column:1/-1;">' +
      '<span class="compare-insight-icon">🔗</span>' +
      '<div class="compare-insight-title">Shared Mechanistic Concepts</div>' +
      '<div class="compare-insight-body">' +
        'Both reactions share: ' +
        shared.map(function(c) { return '<span class="compare-badge">' + c + '</span>'; }).join('') +
        '<br><span style="font-size:0.82rem; color:var(--text-muted); margin-top:8px; display:block;">Understanding these shared concepts will help you see connections between seemingly different reactions — a key skill for JEE/NEET.</span>' +
      '</div>' +
    '</div>';
  }

  // 7. Exam Tips (full width)
  var examTip = '';
  if (r1.category !== r2.category) {
    examTip = 'These two reactions belong to different categories (<strong>' + r1.category + '</strong> vs <strong>' + r2.category + '</strong>). Exam questions often ask you to identify the <em>type</em> of reaction. Remember: ' + r1.name + ' is a ' + (r1.reactionType || r1.category) + ', while ' + r2.name + ' is a ' + (r2.reactionType || r2.category) + '.';
  } else {
    examTip = 'Both reactions are classified as <strong>' + r1.category + '</strong> reactions. Exams may test your ability to differentiate between reactions of the <em>same type</em>. Focus on the specific reagents, catalysts, and intermediates to tell them apart.';
  }
  examTip += '<br><br><strong>🎯 Quick Tip:</strong> For competitive exams, always note the <em>catalyst</em>, <em>key intermediate</em>, and <em>stereochemical outcome</em> — these are the three things examiners test most frequently.';

  html += '<div class="compare-insight-card" style="grid-column:1/-1;">' +
    '<span class="compare-insight-icon">🎓</span>' +
    '<div class="compare-insight-title">JEE / NEET Exam Tips</div>' +
    '<div class="compare-insight-body">' + examTip + '</div>' +
  '</div>';

  html += '</div>'; // close grid

  // 8. Study Verdict
  html += '<div class="compare-verdict">' +
    '<div class="compare-verdict-title">📝 Study Verdict</div>' +
    '<div class="compare-verdict-body">' +
      'When studying <strong>' + r1.name + '</strong> and <strong>' + r2.name + '</strong> together, focus on: ' +
      '<ul style="margin-top:8px; padding-left:20px; display:flex; flex-direction:column; gap:6px;">' +
        '<li>How the <em>key intermediate</em> differs between them</li>' +
        '<li>The role of the <strong>catalyst/reagent</strong> in driving each reaction forward</li>' +
        '<li>Whether the mechanism is <strong>concerted</strong> (one step) or <strong>stepwise</strong> (multiple intermediates)</li>' +
        '<li>The <strong>stereochemical</strong> implications — does the reaction preserve, invert, or scramble configuration?</li>' +
        '<li>Real-world <strong>applications</strong> — examiners love asking "where is this reaction used?"</li>' +
      '</ul>' +
    '</div>' +
  '</div>';

  analysisEl.innerHTML = html;
};

// ---- GLOBAL EXPORTS ----
window.showHome = showHome;
window.showDetail = showDetail;
window.showCompare = window.showCompare;
window.sortReactions = sortReactions;
window.clearSearch = clearSearch;
window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;

