# Composants SVG pour Figma

À glisser-déposer dans Figma (ou *File → Place image* / copier-coller du code SVG). Les calques sont nommés
et le texte reste éditable (police **Open Sans** 400/600/700, à installer ou activer dans Figma).

| Fichier | Taille | Contenu |
|---|---|---|
| `image-carousel.svg` | 457×343 | Titre de section, boutons précédent (désactivé) / suivant, 3 cartes image + légende, points de pagination |
| `search-bar.svg` | 457×56 | Barre de recherche, état par défaut (placeholder + bouton filtre) |
| `search-bar-filled.svg` | 457×56 | État focus avec saisie, bouton effacer et badge « 2 filtres actifs » |
| `filter-panel.svg` | 537×321 | Panneau de filtres ouvert (457×225 + marge pour l'ombre portée) |
| `active-filters-bar.svg` | 457×56 | Chips de filtres actifs, nombre de résultats, « Tout effacer » |
| `library-panel.svg` | 505×1080 | Side panel complet assemblant les composants |

La largeur de 457 px correspond au contenu du side panel de 505 px avec 24 px de marge de chaque côté.
Les images des cartes sont des dégradés d'exemple : dans Figma, sélectionne le calque `Image` et remplace le remplissage par ton image.
