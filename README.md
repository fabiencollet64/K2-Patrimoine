# K2 Patrimoine : maquette de démonstration

Site statique (HTML, CSS, JavaScript vanilla, sans framework) réalisé par Collet Marketing pour présenter une proposition de refonte à K2 Patrimoine, cabinet indépendant de conseil en investissement immobilier patrimonial, spécialiste de la nue-propriété.

## Pages

| Fichier | Contenu |
|---|---|
| `index.html` | Accueil : hero avec recherche de programmes, chiffres clés, dispositifs, pédagogie nue-propriété, sélection de programmes, méthode, simulateur, témoignages, guides, FAQ, formulaire de contact |
| `programmes.html` | Listing de 12 programmes avec filtres JavaScript (dispositif, zone, département, budget, typologie), filtres pré-remplis depuis l’URL |
| `programme.html` | Fiche programme type (galerie, chiffres clés, typologies, décote, plan de financement indicatif, localisation, formulaire plaquette), personnalisée par le paramètre `?id=` |
| `nue-propriete.html` | Page pilier pédagogique et SEO/GEO sur la nue-propriété, avec sommaire, exemple chiffré, comparatif et FAQ |
| `contact.html` | Formulaire de rendez-vous ou de rappel avec créneaux, coordonnées, plan OpenStreetMap |

## Structure

```
assets/css/styles.css        Design system (tokens, composants, responsive mobile first)
assets/js/programmes-data.js Catalogue des programmes et rendu des cartes
assets/js/main.js            Header, menu mobile, apparition au scroll, FAQ, formulaires, simulateur
assets/js/programmes.js      Moteur de filtres du listing
assets/js/programme.js       Personnalisation de la fiche programme
```

## Lancer en local

```
python3 -m http.server 8080
```

Puis ouvrir http://localhost:8080/.

## Notes

- Les formulaires n’envoient rien : un message de confirmation s’affiche en JavaScript.
- Les photos proviennent d’Unsplash via URL, les polices de Google Fonts : une connexion internet est nécessaire.
- Tous les chiffres fiscaux et financiers sont indicatifs et non contractuels.
- Les mentions réglementaires du pied de page (ORIAS, carte T, RCP) sont des placeholders à compléter.
