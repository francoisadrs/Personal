# Algorithme de planification hebdomadaire

À l'usage de l'agent de planification hebdomadaire. Entrée : l'état des passages
lu dans Notion (`notion-contract.md`). Sortie : un plan de semaine de séances
**structurées selon Gebrian**, cohérent avec le découpage déjà présent
(mêmes passages, mêmes composantes, mêmes chunks), valable **quel que soit
l'instrument**.

## Paramètres à connaître (demander si absent)
- Jours et durée disponibles par jour (ex. 5 j × 45 min).
- Échéances éventuelles (concert/examen) → si concert : viser **mémorisation 6
  semaines avant**, et densifier l'interleaving en performance simulée.
- Morceaux actifs (`Status = In progress` dans Projects) **et leur `Palier`**.

## Étape 0 — Calibrer par le palier + le mode
Lire le `Palier` (Confort / Cible / Étirement / Étirement fort) de chaque morceau
(`difficulty-assessment.md` §5) et en déduire les **curseurs** du plan : taille
des chunks, % de surapprentissage, moment du passage blocked→serial→interleaved,
vitesse de montée en tempo, nb de revisites/jour, espacement, fréquence de
pratique mentale, et surtout le **nombre de passages neufs ouverts en parallèle**
(faible en Étirement). Le délai de mémorisation avant concert suit aussi le
palier (3–4 / 6 / 8+ semaines). En l'absence de palier, le **calculer** d'abord
(D, L → R) ou demander validation.

Lire aussi le **`Mode`** (`roadmap-and-deadlines.md`) : en **Échéance**, planifier
**à l'intérieur de la roadmap** (jalons à rebours, faisabilité) et prioriser ce
qui est en retard sur les jalons ; en **Au long cours**, suivre le rythme espacé
dicté par le palier, sans compression.

## Étape 1 — Déterminer les passages « dus » (pratique espacée, ch. 6)
Pour chaque sous-tâche (passage × composante), calculer s'il est dû cette
semaine selon `Progression`, `Dernière séance` et `Nb séances` :

| Progression | Fréquence cible | Règle |
|---|---|---|
| `À travailler` (nouveau) | quasi quotidien | revisiter **2-3×/jour** les tout premiers jours, puis **3 jours de suite**, puis 1 jour off |
| `En travail` | tous les 1-2 jours | maintenir, puis commencer à espacer (un jour sur deux) |
| `Fluide` | ~2×/semaine | un jour sur deux × 3 puis espacement plus large ; introduire la **pratique variable** |
| `Maîtrisé` | entretien | 1×/semaine à 1×/2 semaines ; surtout en performance simulée / mémoire |

Un passage est **dû** si `Dernière séance` + intervalle ≤ jour planifié. Les
nouveaux et les Rouges sont toujours prioritaires.

**Projet non conforme au schéma canonique ?** (ex. le Prélude XV existant, avec
`Main` au lieu de `Composante` et sans `Priorité`/`Dernière séance`/…) → **le
normaliser d'abord** (cf. `notion-contract.md` → « Normaliser un projet
existant »), puis planifier. Le planner n'a **pas de mode dégradé** : tous les
projets de morceau suivent la même logique du skill.

## Étape 2 — Prioriser (R/J/V + difficile d'abord)
Trier les passages dus par : `Priorité` **Rouge → Jaune → Vert**, puis par
`Ordre` (section difficile d'abord, Casares). Les points Rouges/nouveaux sont
travaillés **en début de séance** (cerveau frais) et **juste avant le sommeil /
au réveil** s'il s'agit de mémorisation (ch. 13).

## Étape 3 — Répartir sur la semaine : blocked → serial → interleaved (ch. 7-8)
⚠️ **Ne pas entrelacer trop tôt.** L'interleaving prépare la *performance*, mais
sur du matériel **non encore solidifié** il augmente l'interférence rétroactive
et **ralentit** l'apprentissage. Suivre la progression de Molly, par passage,
selon sa `Progression` :

1. **Blocked** (passage `À travailler`/`En travail`, neuf) : travail concentré
   et répété **par blocs** pour solidifier (il faut pouvoir le jouer ≥ 5× de
   suite avant d'espérer le *performer*).
2. **Serial** (passage `Fluide`) : alternance **prévisible** entre quelques
   passages (A, B, C, A, B, C…) → le cerveau s'entraîne à changer de geste.
3. **Interleaved / aléatoire** (passage `Fluide`→`Maîtrisé`, et prépa concert) :
   passages tirés dans un **ordre aléatoire**, premier essai à chaque fois →
   simule la performance.

Règles transverses :
- **Éviter l'interférence rétroactive** : **ne pas enchaîner deux passages
  neufs très similaires** (mesures voisines encore fragiles, deux motifs
  proches). Les séparer par ≥ 6 h, un autre jour, ou un passage contrastant.
- **Respecter le schedule espacé** : un passage neuf est revisité **~3×/jour
  espacées (~1 h d'écart, pas en boucle continue — fenêtre LTP)** les premiers
  jours, ~3 jours rapprochés, puis on espace ; alimenter `Prochaine séance`.
- Pendant les **pauses**, prévoir de la musique **contrastante** (un passage
  *similaire* annulerait la consolidation).
- **Mesure au lendemain (anti-illusion de maîtrise)** : ne jamais conclure
  « acquis » sur une bonne fin de séance ; prévoir une **reprise à froid le
  lendemain** comme vrai test, et n'avancer la `Progression` qu'en fonction.

## Étape 4 — Structurer chaque séance
Squelette d'une séance (ex. 45 min) :
1. **Échauffement court** (technique liée aux passages du jour : gammes/arpèges
   /sons filés selon l'instrument).
2. **Bloc Rouge / nouveau** en premier : travail délibéré, **chunks**,
   **micro-pauses** (3 reps correctes → 10 s), surapprentissage (≥ 5 correctes,
   idéalement +50-100 %).
3. **Bloc(s) Jaune** : consolidation, montée en tempo (click-up, at-tempo
   chunking), connexion des chunks et des passages.
4. **Bloc Vert / Maîtrisé** : **pratique variable** (cf. `instrument-profiles.md`)
   — seulement une fois le passage propre, et au **« sweet spot »** : garder un
   même paramètre **~3 reps puis varier** (le tout-aléatoire est trop dur, le
   constant trop facile) — + performance simulée (serial → ordre aléatoire,
   interval timer) + test de mémoire.
5. **Pause ≥ 5 min toutes les 25-30 min** ; séance idéalement ≤ 60-90 min puis
   longue pause ; ≤ 5 h/jour au total.

### Structure intra-passage (Casares × Gebrian)
Pour un passage donné, suivre l'ordre des composantes du profil :
1. **Composante difficile d'abord**, **séparée** (ex. main gauche seule),
   en chunks, par cœur.
2. Les **autres composantes séparées** (mais espacer si elles sont neuves et
   similaires → interférence).
3. **Ensemble** : focus sur une couche pendant que l'autre tourne en automatique.
4. **Connecter** les chunks, puis les passages voisins.
5. Quand c'est propre : **pratique variable** + **montée en tempo**
   (`Tempo actuel` → `Tempo cible`) ; mémoire.

### Pratique mentale (à intégrer systématiquement, ch. 9-10)
Ce n'est pas optionnel : prévoir de la **pratique mentale (~20 min max/bloc)**
dans la semaine, en particulier :
- quand un créneau est court ou sans instrument (transport, pas d'accès au jeu) ;
- en **clôture de séance** sur un passage neuf (consolide avant le sommeil) ;
- pour la **mémorisation** : alterner mental/physique, mesure par mesure ;
- avant un passage difficile : audier le son/justesse voulus avant de jouer.
Au moins **un bloc mental par semaine** par morceau actif ; davantage à
l'approche d'un concert.

### Journal de pratique (à produire à chaque séance, Conclusion du livre)
Le planner alimente le champ `Observations` de Notion **après chaque passage
travaillé** avec : objectif du moment, méthode utilisée, point bloquant +
solution trouvée, et « à retravailler la prochaine fois ». C'est une sortie
standard, pas un extra : c'est ce qui rend l'espacement et le suivi pilotables.

## Étape 5 — Écrire le plan + mettre à jour Notion
- Produire le plan (format ci-dessous).
- Après accord / après chaque séance, mettre à jour Notion via
  `notion-update-page` : `Dernière séance`, `Nb séances`+1, `Prochaine séance`,
  et `Progression`/`Tempo actuel` si l'utilisateur signale un progrès
  (`notion-contract.md`).
- En option, créer les événements Google Calendar.

## Étape 6 — Revue automatisée : ré-évaluer & intégrer les cours
Lancer la **revue automatisée** (`lesson-integration.md`) à chaque revue hebdo
(et après un cours). Elle :
- **Intègre les conseils `À traiter`** du Journal de cours : ré-ouverture de
  passages (doigté/habitude → matériel neuf), nouvelles couches/mini-objectifs
  (indication/technique), astuces adoptées ; puis conseils → `Intégré`.
- **Mesure la vélocité** (séances→`Fluide`, % passages avancés vs `Durée
  estimée`). <0,7× pendant ~2 sem → **monter d'un palier** (chunks plus petits,
  plus d'espacement, interleaving plus tardif, moins de fronts neufs) + revoir
  `D` ; >1,3× → **descendre d'un palier**. Écrire `Vélocité`/`Palier`.
- **Met à jour la roadmap / `Faisabilité`** (`roadmap-and-deadlines.md`) : en mode
  Échéance, **re-compresser + avertir** si la date se tend.
- **À chaque morceau maîtrisé** : `Status = Done`, `Date maîtrise`,
  `Durée réelle` ; recalcul de la courbe heures/niveau et **mise à jour de
  `Niveau actuel (L)`** (Profil) → `R` des morceaux en cours recalculé.
- **Garde-fou anti-frustration** : si un morceau en Étirement fort stagne,
  réduire les fronts ouverts et intercaler un morceau Confort/Cible.

## Format de sortie d'un plan de semaine

Pour chaque jour, un tableau de blocs ordonnés :

```
### Lundi — 45 min
| # | Morceau | Passage | Composante | Prio | Méthode (Gebrian) | Tempo | Durée |
|---|---------|---------|-----------|------|-------------------|-------|-------|
| 1 | Échauffement — gammes liées aux passages du jour | — | — | — | — | — | 5 min |
| 2 | Bach Prélude XV | Mes. 13-15 | Main gauche | 🔴 | chunks + micro-pauses, par cœur | 60 | 12 min |
| 3 | Bach Prélude XV | Mes. 16-18 | Main droite | 🟡 | click-up, connexion chunks | 80 | 10 min |
|   | ⏸️ Pause 5 min | | | | | | |
| 4 | (autre morceau) | ... | Ensemble | 🟢 | pratique variable + test mémoire | 100 | 13 min |
```

Terminer par : récap de la **progression visée** dans la semaine (quels passages
doivent passer À travailler → En travail → Fluide → Maîtrisé) et les
`Prochaine séance` calculées.

## Garde-fous
- Respecter scrupuleusement le **découpage existant** : ne pas inventer de
  passages absents de Notion ; refléter MG/MD/ME (ou les composantes du profil)
  tels qu'enregistrés.
- Si un passage n'a pas de `Tempo cible` ou de `Priorité`, le signaler plutôt
  que de deviner silencieusement.
- Ne pas dépasser le temps disponible déclaré ; mieux vaut moins de passages
  bien espacés que tout, mal réparti.
