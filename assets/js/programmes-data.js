/* Catalogue des programmes (données de démonstration)
   Les cinq premiers reprennent des exemples réels fournis par le cabinet,
   les suivants sont fictifs mais crédibles. */
window.K2_PROGRAMMES = [
  {
    id: 'newton-rueil',
    nom: 'Newton',
    ville: 'Rueil-Malmaison',
    dept: '92',
    region: 'idf',
    regionLabel: 'Île-de-France',
    dispositif: 'nue-propriete',
    dispositifLabel: 'Nue-propriété',
    typologies: ['T3'],
    typoLabel: '3 pièces',
    prix: 412500,
    livraison: '4e trimestre 2027',
    decote: 38,
    usufruit: 15,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=70',
    alt: 'Résidence neuve aux lignes contemporaines entourée de verdure',
    accroche: 'Quartier résidentiel recherché à dix minutes de La Défense, à proximité du parc de Bois-Préau.',
    nouveau: true
  },
  {
    id: 'vue-en-scene-meudon',
    nom: 'Vue en Scène',
    ville: 'Meudon',
    dept: '92',
    region: 'idf',
    regionLabel: 'Île-de-France',
    dispositif: 'nue-propriete',
    dispositifLabel: 'Nue-propriété',
    typologies: ['T1', 'T2', 'T3', 'T4'],
    typoLabel: 'Du studio au 4 pièces',
    prix: 144300,
    livraison: 'Janvier 2027',
    decote: 40,
    usufruit: 16,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=70',
    alt: 'Immeuble résidentiel moderne avec balcons et façade claire',
    accroche: 'Sur les hauteurs de Meudon, à deux pas de la forêt et de la gare, vue dégagée sur Paris pour les étages hauts.',
    nouveau: false
  },
  {
    id: 'coeur-orsay',
    nom: 'Cœur Orsay',
    ville: 'Orsay',
    dept: '91',
    region: 'idf',
    regionLabel: 'Île-de-France',
    dispositif: 'nue-propriete',
    dispositifLabel: 'Nue-propriété',
    typologies: ['T3'],
    typoLabel: '3 pièces',
    prix: 239300,
    livraison: 'Avril 2028',
    decote: 36,
    usufruit: 15,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=70',
    alt: 'Résidence neuve à taille humaine avec jardin paysager',
    accroche: 'Au cœur du plateau de Saclay, à proximité immédiate de l’université et du RER B.',
    nouveau: false
  },
  {
    id: 'alba-vanves',
    nom: 'Alba',
    ville: 'Vanves',
    dept: '92',
    region: 'idf',
    regionLabel: 'Île-de-France',
    dispositif: 'nue-propriete',
    dispositifLabel: 'Nue-propriété',
    typologies: ['T1', 'T2', 'T3', 'T4'],
    typoLabel: 'Du studio au 4 pièces',
    prix: 159400,
    livraison: 'Octobre 2028',
    decote: 42,
    usufruit: 17,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=70',
    alt: 'Façade blanche d’un immeuble neuf au soleil',
    accroche: 'Aux portes de Paris, à 400 mètres du métro Malakoff-Plateau de Vanves et du parc Frédéric-Pic.',
    nouveau: true
  },
  {
    id: 'eclat-de-lune-valmorel',
    nom: 'Éclat de Lune',
    ville: 'Valmorel',
    dept: '73',
    region: 'montagne',
    regionLabel: 'Montagne',
    dispositif: 'lmnp',
    dispositifLabel: 'LMNP résidence de tourisme',
    typologies: ['T2', 'T3', 'T4'],
    typoLabel: 'Du 2 au 4 pièces',
    prix: 270722,
    livraison: 'Octobre 2027',
    decote: null,
    usufruit: null,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=70',
    alt: 'Chalet contemporain en bois face aux montagnes enneigées',
    accroche: 'Résidence de tourisme au pied des pistes du Grand Domaine, gestion déléguée et récupération de la TVA.',
    nouveau: false
  },
  {
    id: 'villa-des-arts-lyon',
    nom: 'Villa des Arts',
    ville: 'Lyon 6e',
    dept: '69',
    region: 'metropole',
    regionLabel: 'Grandes métropoles',
    dispositif: 'jeanbrun',
    dispositifLabel: 'Loi Jeanbrun',
    typologies: ['T2', 'T3'],
    typoLabel: '2 et 3 pièces',
    prix: 289000,
    livraison: '2e trimestre 2028',
    decote: null,
    usufruit: null,
    image: 'https://images.unsplash.com/photo-1486304873000-235643847519?auto=format&fit=crop&w=900&q=70',
    alt: 'Immeuble haussmannien et bâtiment neuf côte à côte dans une rue arborée',
    accroche: 'Entre le parc de la Tête d’Or et les Brotteaux, dans l’un des quartiers les plus recherchés de Lyon.',
    nouveau: true
  },
  {
    id: 'les-terrasses-du-port-bordeaux',
    nom: 'Les Terrasses du Port',
    ville: 'Bordeaux',
    dept: '33',
    region: 'metropole',
    regionLabel: 'Grandes métropoles',
    dispositif: 'nue-propriete',
    dispositifLabel: 'Nue-propriété',
    typologies: ['T2', 'T3', 'T4'],
    typoLabel: 'Du 2 au 4 pièces',
    prix: 178900,
    livraison: '1er trimestre 2028',
    decote: 39,
    usufruit: 16,
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=70',
    alt: 'Résidence contemporaine aux larges terrasses en bois',
    accroche: 'Quartier des Bassins à flot, à dix minutes du centre historique par le tramway.',
    nouveau: false
  },
  {
    id: 'hotel-de-sully-nantes',
    nom: 'Hôtel de Sully',
    ville: 'Nantes',
    dept: '44',
    region: 'metropole',
    regionLabel: 'Grandes métropoles',
    dispositif: 'malraux',
    dispositifLabel: 'Malraux',
    typologies: ['T2', 'T3', 'T4'],
    typoLabel: 'Du 2 au 4 pièces',
    prix: 265000,
    livraison: '4e trimestre 2027',
    decote: null,
    usufruit: null,
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=900&q=70',
    alt: 'Façade en pierre d’un hôtel particulier restauré',
    accroche: 'Réhabilitation complète d’un hôtel particulier du XVIIIe siècle en secteur sauvegardé, plein centre de Nantes.',
    nouveau: false
  },
  {
    id: 'le-clos-saint-germain-saint-germain-en-laye',
    nom: 'Le Clos Saint-Germain',
    ville: 'Saint-Germain-en-Laye',
    dept: '78',
    region: 'idf',
    regionLabel: 'Île-de-France',
    dispositif: 'deficit-foncier',
    dispositifLabel: 'Déficit foncier',
    typologies: ['T1', 'T2', 'T3'],
    typoLabel: 'Du studio au 3 pièces',
    prix: 198000,
    livraison: '3e trimestre 2027',
    decote: null,
    usufruit: null,
    image: 'https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?auto=format&fit=crop&w=900&q=70',
    alt: 'Immeuble ancien rénové avec volets en bois et façade claire',
    accroche: 'Immeuble ancien entièrement rénové à cinq minutes à pied du RER A et du château.',
    nouveau: false
  },
  {
    id: 'les-balcons-de-l-aiguille-chamonix',
    nom: 'Les Balcons de l’Aiguille',
    ville: 'Chamonix-Mont-Blanc',
    dept: '74',
    region: 'montagne',
    regionLabel: 'Montagne',
    dispositif: 'lmnp',
    dispositifLabel: 'LMNP résidence de tourisme',
    typologies: ['T2', 'T3'],
    typoLabel: '2 et 3 pièces',
    prix: 342000,
    livraison: 'Décembre 2027',
    decote: null,
    usufruit: null,
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=70',
    alt: 'Village de montagne au pied des sommets au lever du soleil',
    accroche: 'Résidence quatre étoiles face au massif du Mont-Blanc, exploitée par un gestionnaire reconnu.',
    nouveau: true
  },
  {
    id: 'residence-les-platanes-montpellier',
    nom: 'Résidence Les Platanes',
    ville: 'Montpellier',
    dept: '34',
    region: 'metropole',
    regionLabel: 'Grandes métropoles',
    dispositif: 'lmnp',
    dispositifLabel: 'LMNP résidence seniors',
    typologies: ['T1', 'T2'],
    typoLabel: 'Studio et 2 pièces',
    prix: 126500,
    livraison: '2e trimestre 2027',
    decote: null,
    usufruit: null,
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=70',
    alt: 'Résidence moderne avec jardin méditerranéen et terrasses',
    accroche: 'Résidence services seniors dans le quartier Port Marianne, bail commercial de longue durée.',
    nouveau: false
  },
  {
    id: 'canal-saint-martin-paris',
    nom: 'Quai des Jemmapes',
    ville: 'Paris 10e',
    dept: '75',
    region: 'idf',
    regionLabel: 'Île-de-France',
    dispositif: 'lli',
    dispositifLabel: 'Logement locatif intermédiaire',
    typologies: ['T2', 'T3'],
    typoLabel: '2 et 3 pièces',
    prix: 395000,
    livraison: '1er trimestre 2029',
    decote: null,
    usufruit: null,
    image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=900&q=70',
    alt: 'Toits de Paris au coucher du soleil',
    accroche: 'Programme neuf à deux pas du canal Saint-Martin, TVA réduite et exonération de taxe foncière.',
    nouveau: false
  }
];

window.K2_DISPOSITIFS = {
  'nue-propriete': 'Nue-propriété',
  'lmnp': 'LMNP / LMP en résidence services',
  'jeanbrun': 'Loi Jeanbrun',
  'deficit-foncier': 'Déficit foncier',
  'malraux': 'Malraux et Monuments historiques',
  'lli': 'Logement locatif intermédiaire'
};

window.K2_UTILS = {
  euro: function (n) {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);
  },
  programmeCard: function (p) {
    var badges = '<span class="badge">' + p.dispositifLabel + '</span>';
    if (p.nouveau) badges += '<span class="badge gold">Nouveau</span>';
    var meta = '<span>' + p.typoLabel + '</span><span>Livraison ' + p.livraison + '</span>';
    if (p.decote) meta += '<span>Décote ' + p.decote + ' %</span>';
    return '' +
      '<article class="card reveal">' +
        '<a href="programme.html?id=' + p.id + '" class="card-media" aria-label="Voir le programme ' + p.nom + ' à ' + p.ville + '">' +
          '<img src="' + p.image + '" alt="' + p.alt + '" loading="lazy" width="900" height="675">' +
          badges +
        '</a>' +
        '<div class="card-body">' +
          '<span class="card-city"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 22s7-7.5 7-12.5a7 7 0 1 0-14 0C5 14.5 12 22 12 22z"/><circle cx="12" cy="9.5" r="2.5"/></svg>' + p.ville + ' (' + p.dept + ')</span>' +
          '<h3><a href="programme.html?id=' + p.id + '">' + p.nom + '</a></h3>' +
          '<div class="card-meta">' + meta + '</div>' +
          '<div class="card-foot">' +
            '<div class="card-price"><small>À partir de</small><strong>' + window.K2_UTILS.euro(p.prix) + '</strong></div>' +
            '<a href="programme.html?id=' + p.id + '" class="btn-link">Découvrir <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>' +
          '</div>' +
        '</div>' +
      '</article>';
  }
};
