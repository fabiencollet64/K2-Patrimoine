/* Listing des programmes : filtres côté client */
(function () {
  'use strict';
  var data = window.K2_PROGRAMMES || [];
  var grid = document.getElementById('programmes-grid');
  var count = document.getElementById('results-count');
  var chips = document.getElementById('active-filters');
  var empty = document.getElementById('empty-state');
  var form = document.getElementById('filters');
  if (!grid || !form) return;

  var fields = {
    dispositif: form.elements['dispositif'],
    region: form.elements['region'],
    dept: form.elements['dept'],
    budget: form.elements['budget'],
    typologie: form.elements['typologie']
  };

  /* Alimente la liste des départements depuis les données */
  var depts = {};
  data.forEach(function (p) { depts[p.dept] = p.regionLabel; });
  var deptNames = { '75': 'Paris', '77': 'Seine-et-Marne', '78': 'Yvelines', '91': 'Essonne', '92': 'Hauts-de-Seine', '93': 'Seine-Saint-Denis', '94': 'Val-de-Marne', '95': 'Val-d’Oise', '69': 'Rhône', '33': 'Gironde', '44': 'Loire-Atlantique', '34': 'Hérault', '73': 'Savoie', '74': 'Haute-Savoie' };
  Object.keys(depts).sort().forEach(function (d) {
    var opt = document.createElement('option');
    opt.value = d;
    opt.textContent = d + ' · ' + (deptNames[d] || '');
    fields.dept.appendChild(opt);
  });

  /* Pré-remplissage depuis l'URL (module de recherche de l'accueil) */
  var params = new URLSearchParams(location.search);
  Object.keys(fields).forEach(function (k) {
    if (params.get(k) && fields[k]) fields[k].value = params.get(k);
  });

  var labels = {
    dispositif: 'Dispositif',
    region: 'Zone',
    dept: 'Département',
    budget: 'Budget',
    typologie: 'Typologie'
  };

  function matches(p) {
    var f = fields;
    if (f.dispositif.value && p.dispositif !== f.dispositif.value) return false;
    if (f.region.value && p.region !== f.region.value) return false;
    if (f.dept.value && p.dept !== f.dept.value) return false;
    if (f.typologie.value && p.typologies.indexOf(f.typologie.value) === -1) return false;
    if (f.budget.value) {
      var parts = f.budget.value.split('-');
      var min = Number(parts[0]) || 0;
      var max = parts[1] ? Number(parts[1]) : Infinity;
      if (p.prix < min || p.prix > max) return false;
    }
    return true;
  }

  function render() {
    var list = data.filter(matches);
    grid.innerHTML = list.map(window.K2_UTILS.programmeCard).join('');
    if (window.K2_observeReveals) window.K2_observeReveals(grid);
    count.textContent = list.length + (list.length > 1 ? ' programmes' : ' programme');
    empty.hidden = list.length > 0;
    grid.hidden = list.length === 0;

    chips.innerHTML = '';
    Object.keys(fields).forEach(function (k) {
      var el = fields[k];
      if (!el.value) return;
      var text = el.options[el.selectedIndex].textContent;
      var chip = document.createElement('span');
      chip.className = 'chip';
      chip.innerHTML = labels[k] + ' : ' + text + ' <button type="button" aria-label="Retirer le filtre ' + labels[k] + '">×</button>';
      chip.querySelector('button').addEventListener('click', function () {
        el.value = '';
        render();
      });
      chips.appendChild(chip);
    });

    /* Mise à jour de l'URL sans rechargement */
    var q = new URLSearchParams();
    Object.keys(fields).forEach(function (k) { if (fields[k].value) q.set(k, fields[k].value); });
    history.replaceState(null, '', location.pathname + (q.toString() ? '?' + q.toString() : ''));
  }

  Object.keys(fields).forEach(function (k) { fields[k].addEventListener('change', render); });
  form.addEventListener('submit', function (e) { e.preventDefault(); render(); });
  form.addEventListener('reset', function (e) {
    e.preventDefault();
    Object.keys(fields).forEach(function (k) { fields[k].value = ''; });
    render();
  });
  render();
})();
