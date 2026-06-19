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
- Morceaux actifs (`Status = In progress` dans Projects).

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
</content>
