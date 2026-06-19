---
name: music-practice
description: >
  Préparer et planifier l'apprentissage d'un morceau de musique (n'importe quel
  instrument) selon les principes de Molly Gebrian (neurosciences de la pratique)
  et la méthode de découpage de Manuel Casares. Deux usages :
  (1) SETUP — partir d'une partition/morceau, proposer le découpage en passages,
  et créer un projet de suivi dans Notion (base + passages + sous-tâches) calqué
  sur l'exemple existant « Prélude XV ».
  (2) PLANNING — fournir à l'agent de planification hebdomadaire le contrat de
  données Notion et l'algorithme pour structurer des séances respectant le
  pratique espacée, l'interleaving, les pauses et la pratique variable.
  À déclencher quand l'utilisateur donne un morceau à apprendre, parle de
  découpage/practice plan musical, ou demande de planifier ses séances de
  musique / pratique instrumentale.
---

# Music Practice — découpage & planification (Gebrian × Casares)

Ce skill couvre tout le cycle d'apprentissage d'un morceau, de l'analyse de la
partition jusqu'à la planification hebdomadaire des séances, en s'appuyant sur :

- **Molly Gebrian**, *Learn Faster, Perform Better* — les neurosciences de la
  pratique (pratique espacée, pauses, interleaving, pratique mentale,
  mémorisation, pratique variable). → `references/molly-principles.md`
- **Manuel Casares** — la méthode de découpage d'un morceau en passages
  travaillés section difficile d'abord, mains/composantes séparées, en chunks
  reconnectés. → `references/casares-decoupage.md`

Le tout est **agnostique de l'instrument** : la dimension « mains » du piano est
généralisée en « composantes » adaptées à chaque famille d'instrument.
→ `references/instrument-profiles.md`

## Quand utiliser quel workflow

| Situation | Workflow | Section |
|---|---|---|
| L'utilisateur donne un morceau / partition / PDF à apprendre | **SETUP** | ci-dessous |
| L'utilisateur (ou l'agent de planif hebdo) veut organiser les séances | **PLANNING** | ci-dessous |

---

## Workflow SETUP — découper un morceau et créer le projet Notion

Objectif : produire un découpage exploitable et le matérialiser dans Notion en
respectant **exactement** la structure de l'exemple « Prélude XV » déjà présent
dans le workspace (voir `references/example-prelude-xv.md`).

### Étapes

1. **Identifier le contexte** (demander seulement ce qui manque) :
   - Instrument (→ choisir le profil dans `references/instrument-profiles.md`).
   - Niveau visé / échéance (concert, examen, plaisir) — influence le tempo
     cible et la planif (mémorisation 6 semaines avant un concert).
   - Tempo cible (BPM) si connu ; sinon estimer d'après la partition / une
     référence.

2. **Analyser la partition** pour le découpage. Appliquer
   `references/casares-decoupage.md` :
   - Repérer la **structure** (sections, phrases, séquences, motifs récurrents,
     cadences) et les **points difficiles** (Rouge) à attaquer en premier.
   - Découper en **passages** courts (souvent 2–4 mesures, ou une unité
     musicale). Un passage doit être maîtrisable en quelques séances.
   - Classer chaque passage Rouge / Jaune / Vert (méthode de Gebrian, ch. 2).
   - Noter doigtés critiques, articulations, techniques (gammes, arpèges,
     trilles, legato, staccato…), tempo de travail.

3. **Proposer le découpage à l'utilisateur AVANT d'écrire dans Notion** :
   un tableau ordonné des passages avec, pour chacun : mesures, priorité
   (R/J/V), composantes à travailler, techniques, difficulté, tempo cible,
   ordre d'apprentissage recommandé (section difficile d'abord). Valider /
   ajuster avec lui.

4. **Créer le projet Notion** selon `references/notion-contract.md` :
   - Créer une **page projet** dans la base « Projects » (statut *In progress*).
   - Créer une **base dédiée au morceau** avec le schéma canonique (calqué sur
     « Prélude XV ») + les champs de planification (`Dernière séance`,
     `Prochaine séance`, `Nb séances`, `Priorité`, `Ordre`).
   - Pour chaque passage : créer **1 passage principal** + **N sous-tâches**
     (une par composante du profil instrument — ex. piano : Main gauche, Main
     droite, Mains ensemble), reliées via `Parent`.
   - Créer les vues (Tableau de bord kanban par Progression, Passages
     principaux, Vue détaillée) comme dans l'exemple.
   - Ajouter une page « 📖 Guide du projet » expliquant la structure (réutiliser
     le gabarit de l'exemple existant).

5. **Ne jamais** écrire dans Notion sans validation du découpage à l'étape 3
   (action difficilement réversible). Confirmer le résultat avec les URLs créées.

---

## Workflow PLANNING — alimenter l'agent de planification hebdomadaire

L'agent de planification hebdomadaire doit pouvoir, **pour n'importe quel
instrument** : (a) lire l'état d'avancement dans Notion, (b) en déduire des
séances structurées conformes aux principes de Gebrian, (c) réécrire les dates
de pratique dans Notion (et, en option, créer les événements Google Calendar).

Tout est spécifié dans :

- `references/notion-contract.md` — **le contrat de données** : où lire, quels
  champs, comment interpréter Progression / tempo / composantes / espacement,
  et quoi réécrire après chaque séance.
- `references/weekly-planning.md` — **l'algorithme de planification** :
  sélection des passages dus (pratique espacée, ch. 6), priorisation
  Rouge→Jaune→Vert, interleaving et évitement de l'interférence rétroactive
  (ch. 4, 7, 8), structure intra-séance (composante difficile d'abord →
  séparé → ensemble → reconnexion → pratique variable → montée en tempo),
  pauses (micro-pauses + 5 min / 25–30 min), pratique mentale, et le **format
  de sortie** d'un plan de semaine.

Règle d'or pour la cohérence : le plan généré doit **refléter ce qui existe
déjà dans Notion** (mêmes passages, mêmes composantes MG/MD/ME, mêmes chunks)
et faire progresser chaque passage le long de
`À travailler → En travail → Fluide → Maîtrisé`.

---

## Fichiers de référence

- `references/molly-principles.md` — principes & stratégies de Gebrian (condensé actionnable).
- `references/casares-decoupage.md` — méthode de découpage de Casares.
- `references/instrument-profiles.md` — composantes & pratique variable par famille d'instrument.
- `references/notion-contract.md` — schéma Notion canonique + opérations de lecture/écriture.
- `references/weekly-planning.md` — algorithme et format du plan hebdomadaire.
- `references/example-prelude-xv.md` — l'exemple de référence (structure exacte à imiter).
</content>
</invoke>
