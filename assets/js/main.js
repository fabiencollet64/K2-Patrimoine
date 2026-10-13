/* K2 Patrimoine : comportements communs */
(function () {
  'use strict';

  /* ---------- Header : ombre au scroll ---------- */
  var header = document.querySelector('.header');
  function onScroll() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Menu mobile ---------- */
  var burger = document.querySelector('.burger');
  var mobileMenu = document.querySelector('.mobile-menu');
  if (burger && mobileMenu) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      burger.setAttribute('aria-label', open ? 'Ouvrir le menu' : 'Fermer le menu');
      mobileMenu.classList.toggle('open', !open);
      document.body.style.overflow = open ? '' : 'hidden';
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        burger.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        burger.click();
        burger.focus();
      }
    });
  }

  /* ---------- Lien actif dans la navigation ---------- */
  var current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a, .mobile-menu a').forEach(function (a) {
    var href = a.getAttribute('href') || '';
    if (href.split('#')[0] === current && href.indexOf('#') === -1) a.setAttribute('aria-current', 'page');
  });

  /* ---------- Apparition au scroll ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }
  /* Les éléments injectés dynamiquement (cartes programmes) */
  window.K2_observeReveals = function (root) {
    (root || document).querySelectorAll('.reveal:not(.visible)').forEach(function (el) {
      if (io) io.observe(el); else el.classList.add('visible');
    });
  };

  /* ---------- FAQ accordéon ---------- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var btn = item.querySelector('.faq-q');
    var panel = item.querySelector('.faq-a');
    if (!btn || !panel) return;
    btn.addEventListener('click', function () {
      var open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      panel.hidden = false;
    });
  });

  /* ---------- Formulaires de démonstration ---------- */
  document.querySelectorAll('form[data-demo]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var mode = form.querySelector('input[name="mode"]:checked');
      var slot = form.querySelector('input[name="creneau"]:checked');
      var prenom = form.querySelector('[name="nom"]');
      var msg = form.getAttribute('data-success') || 'Votre demande a bien été prise en compte. Un conseiller vous recontacte sous 24 heures ouvrées.';
      if (mode && mode.value === 'rappel') msg = 'Votre demande de rappel est enregistrée. Un conseiller vous appelle au créneau choisi.';
      if (slot) msg = 'Votre demande de rappel est enregistrée pour le créneau « ' + slot.getAttribute('data-label') + ' ». Un conseiller vous appelle à ce moment-là.';
      var box = document.createElement('div');
      box.className = 'form-success';
      box.setAttribute('role', 'status');
      box.innerHTML = '<strong>Merci' + (prenom && prenom.value ? ' ' + prenom.value.split(' ')[0] : '') + '.</strong>' + msg +
        '<p class="note" style="margin-top:8px">Démonstration : aucune donnée n’est transmise.</p>';
      form.replaceWith(box);
      box.focus();
    });
  });

  /* ---------- Module de recherche du hero ---------- */
  var search = document.getElementById('search-form');
  if (search) {
    search.addEventListener('submit', function (e) {
      e.preventDefault();
      var params = new URLSearchParams();
      ['region', 'dispositif', 'budget'].forEach(function (k) {
        var el = search.elements[k];
        if (el && el.value) params.set(k, el.value);
      });
      location.href = 'programmes.html' + (params.toString() ? '?' + params.toString() : '');
    });
  }

  /* ---------- Simulateur indicatif ---------- */
  var sim = document.getElementById('simulateur');
  if (sim) {
    var impot = sim.querySelector('#sim-impot');
    var budget = sim.querySelector('#sim-budget');
    var duree = sim.querySelector('#sim-duree');
    var outImpot = sim.querySelector('#out-impot');
    var outBudget = sim.querySelector('#out-budget');
    var outDuree = sim.querySelector('#out-duree');
    var rDecote = sim.querySelector('#r-decote');
    var rValeur = sim.querySelector('#r-valeur');
    var rEconomie = sim.querySelector('#r-economie');
    var rGain = sim.querySelector('#r-gain');
    var euro = window.K2_UTILS ? window.K2_UTILS.euro : function (n) { return Math.round(n) + ' €'; };

    function compute() {
      var i = Number(impot.value);
      var b = Number(budget.value);
      var d = Number(duree.value);
      /* Hypothèses indicatives : décote de 35 % à 15 ans, 40 % à 17 ans, 45 % à 20 ans */
      var decote = d <= 15 ? 0.35 : d <= 17 ? 0.40 : 0.45;
      var pleine = b / (1 - decote);
      var gain = pleine - b;
      /* Économie d'impôt indicative : absence de revenus fonciers imposables et d'IFI sur le bien
         pendant l'usufruit, estimée prudemment à une fraction de l'impôt actuel plafonnée. */
      var eco = Math.min(i * 0.25, b * 0.012) * d;
      outImpot.textContent = euro(i);
      outBudget.textContent = euro(b);
      outDuree.textContent = d + ' ans';
      rDecote.textContent = Math.round(decote * 100) + ' %';
      rValeur.textContent = euro(pleine);
      rGain.textContent = '+ ' + euro(gain);
      rEconomie.textContent = euro(eco);
    }
    [impot, budget, duree].forEach(function (el) { el.addEventListener('input', compute); });
    compute();
  }

  /* ---------- Sommaire actif (page pilier) ---------- */
  var tocLinks = document.querySelectorAll('.toc a');
  if (tocLinks.length && 'IntersectionObserver' in window) {
    var map = {};
    tocLinks.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var tocIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          tocLinks.forEach(function (a) { a.classList.remove('active'); });
          var link = map[en.target.id];
          if (link) link.classList.add('active');
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) tocIo.observe(el);
    });
  }

  /* ---------- Sélection de programmes sur l'accueil ---------- */
  var homeGrid = document.getElementById('home-programmes');
  if (homeGrid && window.K2_PROGRAMMES) {
    var ids = ['newton-rueil', 'vue-en-scene-meudon', 'coeur-orsay', 'alba-vanves', 'eclat-de-lune-valmorel', 'villa-des-arts-lyon'];
    homeGrid.innerHTML = ids.map(function (id) {
      var p = window.K2_PROGRAMMES.filter(function (x) { return x.id === id; })[0];
      return p ? window.K2_UTILS.programmeCard(p) : '';
    }).join('');
    window.K2_observeReveals(homeGrid);
  }

  /* ---------- Année du footer ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
