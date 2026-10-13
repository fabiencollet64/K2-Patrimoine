/* Fiche programme : adapte l'en-tête et les chiffres clés au programme demandé (?id=)
   et propose trois programmes similaires. La fiche détaillée reste celle de Vue en Scène
   pour les blocs rédactionnels (démonstration). */
(function () {
  'use strict';
  var data = window.K2_PROGRAMMES || [];
  var id = new URLSearchParams(location.search).get('id') || 'vue-en-scene-meudon';
  var p = data.filter(function (x) { return x.id === id; })[0] || data[1];
  var euro = window.K2_UTILS.euro;
  function set(sel, txt) { var el = document.querySelector(sel); if (el && txt != null) el.textContent = txt; }

  set('#prog-name', p.nom);
  set('#bc-name', p.nom);
  set('#prog-city', p.ville + ' (' + p.dept + ')');
  set('#prog-typo', p.typoLabel);
  set('#prog-livraison', p.livraison.charAt(0).toLowerCase() + p.livraison.slice(1));
  set('#kf-livraison', p.livraison);
  set('#kf-prix', euro(p.prix));
  set('#side-prix', euro(p.prix));
  set('#b-dispositif', p.dispositifLabel);
  set('#prog-accroche', p.accroche + ' ' + document.querySelector('#prog-accroche').textContent.split('. ').slice(1).join('. '));
  document.title = p.nom + ' à ' + p.ville + ' (' + p.dept + ') : ' + p.typoLabel.toLowerCase() + ' en ' + p.dispositifLabel + ' dès ' + euro(p.prix) + ' | K2 Patrimoine';
  var g1 = document.getElementById('g1');
  if (g1) { g1.src = p.image.replace('w=900', 'w=1400'); g1.alt = p.alt; }

  if (p.decote) {
    set('#kf-decote', p.decote + ' %');
    set('#kf-usufruit', p.usufruit + ' ans');
    set('#side-decote', p.decote + ' %');
    set('#side-usufruit', p.usufruit + ' ans');
  } else {
    set('#kf-decote', 'Sans objet');
    set('#kf-usufruit', 'Sans objet');
    var sideNote = document.querySelector('#side-decote');
    if (sideNote) sideNote.parentNode.textContent = p.dispositifLabel + ' · gestion déléguée';
  }

  var grid = document.getElementById('similar-grid');
  if (grid) {
    var similar = data.filter(function (x) { return x.id !== p.id && (x.dispositif === p.dispositif || x.region === p.region); }).slice(0, 3);
    grid.innerHTML = similar.map(window.K2_UTILS.programmeCard).join('');
    if (window.K2_observeReveals) window.K2_observeReveals(grid);
  }
})();
