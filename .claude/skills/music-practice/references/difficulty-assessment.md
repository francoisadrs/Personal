# Évaluation de la difficulté & du niveau (calibration de la méthode)

Les principes de Gebrian ne changent pas ; ce sont leurs **paramètres** qui
s'adaptent à la **difficulté du morceau relative au niveau du pratiquant**. Ce
module : (1) estime la difficulté d'un morceau, (2) estime le niveau du
pratiquant, (3) en déduit des **réglages** pour le découpage et la planification,
(4) **ré-évalue régulièrement** pour recalibrer le plan. Valable quel que soit
l'instrument.

## 1. Échelle normalisée commune (1–10)
Tout — morceau **et** pratiquant — est ramené à une même échelle « **Niveau**
1–10 » pour pouvoir les comparer :

| Niveau | Repère |
|---|---|
| 1-2 | grand débutant → débutant |
| 3 | fin débutant / début intermédiaire |
| 4-5 | intermédiaire |
| 6 | intermédiaire avancé |
| 7-8 | avancé |
| 9-10 | pré-professionnel → professionnel/virtuose |

### Tables de correspondance avec les standards (approximatives, calibrables)
Servir d'**ancre de réputation** : le niveau auquel un morceau est demandé.

| Standard | → Niveau 1–10 |
|---|---|
| **ABRSM / Trinity** | Initial≈1,5 · G1=2 · G2=2,5 · G3=3 · G4=4 · G5=5 · G6=6 · G7=7 · G8=8 · ARSM=8,5 · DipABRSM=9 · LRSM=9,5 · FRSM=10 |
| **RCM (Royal Conservatory)** | Prep=1 · G1=2 · G2=2,5 · G3=3 · G4=3,5 · G5=4 · G6=5 · G7=6 · G8=7 · G9=7,5 · G10=8 · ARCT=9 |
| **Henle (par pièce, piano)** | 1≈2 · 2≈3 · 3≈3,5 · 4≈4,5 · 5≈5,5 · 6≈6,5 · 7≈7,5 · 8≈8,5 · 9≈9,5 |
| **Conservatoire FR (cycles)** | 1er cycle (1C1–1C4)=1–3 · 2e cycle (2C)=4–6 · 3e cycle / fin d'études=6–7 · DEM / cycle spécialisé=8 · Supérieur (CNSM, Prix)=9–10 |
| **A Dozen a Day** | Mini-book=1 · Prep/Book1=1,5 · Book2=2 · Book3=2,5 · Book4=3 · Book5=3,5 |
| **Le Bach à nos jours** | Vol 1A≈1,5 · 1B≈2 · Vol 2≈3 · Vol 3≈4 · Vol 4≈5 · Vol 5≈6 · Vol 6≈7 |
| **Suzuki (toutes familles)** | Bk1=1–2 · Bk2=2,5 · Bk3=3 · Bk4=4 · Bk5=4,5 · Bk6=5 · Bk7=6 · Bk8=6,5 · Bk9=7 · Bk10=7,5 |

> Autres instruments : utiliser les syllabus d'instrument (ABRSM/Trinity/RCM
> cordes, bois, cuivres, chant), Suzuki, ou le cycle de conservatoire — même
> logique. Si un morceau apparaît dans plusieurs syllabus, prendre la médiane.

## 2. Difficulté d'un morceau **D** (1–10)
Combiner jusqu'à 5 signaux (utiliser ceux disponibles, pondérer vers les plus
fiables) :

1. **Réputation / niveau d'étude** (ancre principale) : grade du morceau dans les
   standards ci-dessus (conservatoire, ABRSM, Henle, anthologies…).
2. **Complexité structurelle intrinsèque** : nombre de **passages techniques**
   (≈ nombre de passages classés 🔴 au découpage), diversité des techniques
   requises, tempo cible, longueur, polyphonie/voix, sauts, tonalité/altérations.
3. **Difficulté relative empirique** : par rapport aux morceaux déjà appris
   (cf. §3 et l'historique Notion).
4. **Étalonnage par le temps d'apprentissage** : durée qu'a pris le **morceau
   précédent de niveau équivalent** (signal fort et personnel).
5. **Borne haute** : durée/estimation pour un morceau de **niveau plus
   difficile** déjà tenté → cadre par le haut.

`D` = ancre réputation, **ajustée** par la complexité intrinsèque (±1–2) et
**vérifiée** contre l'empirique. Noter la source dans Notion (`Source niveau`,
`Référence`).

> **Mode « auto + validation »** : le skill **propose** `D` (et `R`, `Palier`,
> `Durée estimée`) à partir des standards, de la partition et de l'historique,
> puis **l'utilisateur valide/ajuste** avant toute écriture dans Notion.

## 3. Niveau du pratiquant **L** (1–10)
- `L` = le **plus haut niveau de morceau réellement maîtrisé** récemment (statut
  `Maîtrisé`, joué proprement à tempo et de mémoire si attendu), tempéré par la
  **vélocité** (cf. §6). Un morceau juste « Fluide » ne compte pas pour relever L.
- Maintenir un **historique** (base Projects) : pour chaque morceau appris,
  `Niveau (D)`, `Durée réelle (h)`. Cela donne une courbe **« heures par unité de
  niveau »** propre au pratiquant, qui sert à **prédire** les durées futures.
- `L` évolue : le **ré-évaluer** à chaque morceau terminé et au moins une fois
  par mois.

## 4. Difficulté relative **R = D − L** → palier de réglage
| Palier | R | Signification |
|---|---|---|
| **Confort** | R ≤ −1 | facile pour le niveau actuel |
| **Cible** | −1 < R ≤ +1 | pile au niveau (zone d'apprentissage idéale) |
| **Étirement** | +1 < R ≤ +2 | exigeant |
| **Étirement fort** | R > +2 | très au-dessus : prudence, jalons rapprochés |

## 5. Comment le palier paramètre la méthode de Gebrian
Les principes restent ; on règle les **curseurs** :

| Curseur | Confort | Cible | Étirement (+ fort) |
|---|---|---|---|
| Taille des **chunks** | phrase / section | 2–4 mesures | 1–2 mes / motif (voire 1 temps) |
| **Composantes** séparées | parfois directement Ensemble | toutes (MG/MD/ME ou profil) | toutes + sous-voix isolées |
| **Surapprentissage** | 50 % (≥ 5 d'affilée) | 50–100 % | **100 % systématique** |
| **blocked→serial→interleaved** | interleaving tôt | progression standard | blocked **long**, interleaving **tardif** |
| **Montée en tempo** | grands paliers, rapide | paliers standard | **petits** paliers, nombreux |
| **Revisites/jour** (fenêtre LTP) | 1–2 | 2–3 | 3 (espacées ~1 h) |
| **Espacement** | s'allonge vite | 3 jours puis off | reste **resserré** plus longtemps |
| **Pratique mentale** | optionnelle | 1 bloc/sem. | **fréquente** (alternance mental/physique) |
| **Délai mémorisation** av. concert | 3–4 sem. | 6 sem. | **8+ sem.** |
| **Pratique variable** | dès que jouable | quand `Fluide` | seulement quand **bien** `Fluide` |
| **Vol. de passages neufs/semaine** | élevé | modéré | **faible** (peu de fronts ouverts à la fois) |

Le palier est stocké dans Notion (`Difficulté relative`, `Palier`) et **lu par le
planner** (`weekly-planning.md`) pour fixer ses défauts.

## 6. Boucle de ré-évaluation (régulière)
Objectif : savoir si le plan est bien calibré et l'ajuster.

**Mesurer la vélocité réelle** (à partir de Notion) :
- par passage : nombre de **séances pour atteindre `Fluide`** ;
- par morceau : **% de passages `Fluide`/`Maîtrisé`** et heures cumulées vs
  **durée estimée** (issue de la courbe « heures/niveau » du pratiquant).

**Cadence** : à chaque revue hebdo (léger) + à chaque morceau terminé + revue
mensuelle du niveau `L` (lourd).

**Règles d'ajustement** :
- Vélocité < **0,7×** la prévision pendant ~2 semaines → le morceau est plus dur
  que prévu : **monter d'un palier** (chunks plus petits, plus d'espacement,
  interleaving plus tardif, moins de fronts neufs) et revoir `D` à la hausse.
- Vélocité > **1,3×** la prévision → **descendre d'un palier** (accélérer :
  chunks plus grands, interleaving plus tôt, montée en tempo plus rapide).
- À chaque morceau **`Maîtrisé`** : enregistrer `Durée réelle`, recalculer la
  courbe heures/niveau, et **ré-évaluer `L`** (et donc `R` des morceaux en cours).
- Garde-fou anti-frustration (Gebrian) : si un morceau en **Étirement fort**
  stagne, réduire le nombre de passages ouverts simultanément et intercaler un
  morceau **Confort/Cible** (motivation + interleaving contrastant).

## 7. Ce qui est stocké dans Notion
Voir `notion-contract.md`.
- **Au niveau du projet/morceau** (base Projects) : `Niveau morceau (D)`,
  `Source niveau`, `Référence`, `Palier`, `Difficulté relative (R)`,
  `Durée estimée`, `Durée réelle`, `Date début`, `Date maîtrise`, `Vélocité`.
- **Page « Profil pratiquant » dédiée** : `Niveau actuel (L)` par `Instrument`,
  l'historique des morceaux (niveau + durée, dérivable des projets terminés) et
  la **courbe heures/niveau**. C'est la source de `L` pour calculer `R`, mise à
  jour par le planner à chaque morceau maîtrisé et à la revue mensuelle.
