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

> **Principe directeur (non négociable).** Le skill ne se limite pas à un
> planning : il doit incarner toute la pédagogie de Gebrian et son fondement
> neurologique. *Jouer ≠ pratiquer* — pratiquer, c'est **résoudre des problèmes**
> et **entraîner le cerveau** (renforcer le bon chemin neuronal, myéliniser,
> consolider pendant les pauses/sommeil, éviter les interférences). Le **pourquoi**
> est détaillé dans `references/neuroscience.md`, qui contient une **grille
> d'auto-contrôle en 10 points**. Cette grille doit être **passée avant** d'écrire
> un découpage dans Notion (SETUP) et **avant** d'émettre un plan (PLANNING).

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
   - **Mode** (`references/roadmap-and-deadlines.md`) : *Échéance* (date fixe →
     roadmap à rebours + faisabilité) ou *Au long cours* (rythmé par la
     difficulté). Si Échéance : récupérer la `Date échéance`.
   - Tempo cible (BPM) si connu ; sinon estimer d'après la partition / une
     référence.

2. **Évaluer la difficulté et le niveau** (`references/difficulty-assessment.md`) :
   - Estimer la **difficulté du morceau `D`** (réputation/standard : ABRSM,
     conservatoire, Henle, A Dozen a Day, Le Bach à nos jours… + complexité
     intrinsèque + étalonnage par les durées passées).
   - Estimer le **niveau du pratiquant `L`** (historique des morceaux maîtrisés
     dans Notion).
   - En déduire le **palier `R = D − L`** (Confort / Cible / Étirement) → il fixe
     les **curseurs** du découpage et du plan (taille des chunks, % de
     surapprentissage, montée en tempo, etc.). Prédire une **durée estimée**.

3. **Analyser la partition** pour le découpage. Appliquer
   `references/casares-decoupage.md`, **calibré par le palier** (étape 2) :
   - Repérer la **structure** (sections, phrases, séquences, motifs récurrents,
     cadences) et les **points difficiles** (Rouge) à attaquer en premier.
   - Découper en **passages** dont la taille suit le palier (Confort :
     phrase/section ; Cible : 2–4 mesures ; Étirement : 1–2 mes / motif).
     Un passage doit être maîtrisable en quelques séances.
   - Classer chaque passage Rouge / Jaune / Vert (méthode de Gebrian, ch. 2).
   - Le **nombre de passages 🔴** alimente en retour l'estimation de `D`.
   - Noter doigtés critiques, articulations, techniques (gammes, arpèges,
     trilles, legato, staccato…), tempo de travail.

4. **Proposer le découpage à l'utilisateur AVANT d'écrire dans Notion** :
   le **palier de difficulté `R`** + une **durée estimée**, puis un tableau
   ordonné des passages avec, pour chacun : mesures, priorité (R/J/V),
   composantes à travailler, techniques, difficulté, tempo cible, ordre
   d'apprentissage recommandé (section difficile d'abord). Valider / ajuster.

5. **Créer (ou normaliser) le projet Notion** selon
   `references/notion-contract.md`. **C'est le skill qui impose la structure** :
   tout projet de morceau suit le **schéma canonique**, sans exception.
   - Si le morceau **n'a pas encore** de projet → le créer :
     - une **page projet** dans la base « Projects » (statut *In progress*),
       avec les champs de difficulté (`Niveau morceau (D)`, `Source niveau`,
       `Palier`, `Difficulté relative`, `Durée estimée`, `Date début`…) ;
     - une **base dédiée au morceau** avec le schéma canonique complet
       (`Composante`, `Progression`, `Priorité`, `Ordre`, `Techniques`,
       `Tempo actuel/cible`, `Doigtés`, `Observations`, `Dernière séance`,
       `Prochaine séance`, `Nb séances`, `Parent`/`Enfants`).
   - Si un projet **existe déjà mais n'est pas conforme** (ex. le Prélude XV :
     propriété `Main`, champs de planif manquants) → le **normaliser** (cf.
     « Normaliser un projet existant ») au lieu de le contourner.
   - Pour chaque passage : créer **1 passage principal** + **N sous-tâches**
     (une par composante du profil instrument — ex. piano : Main gauche, Main
     droite, Mains ensemble), reliées via `Parent`.
   - Créer les vues (Tableau de bord kanban par Progression, Passages
     principaux, Vue détaillée) comme dans l'exemple.
   - Ajouter une page « 📖 Guide du projet » expliquant la structure (réutiliser
     le gabarit de l'exemple existant).

6. **Contrôle de fidélité** : avant d'écrire, passer le découpage à la **grille
   d'auto-contrôle** de `references/neuroscience.md` (faiblesses d'abord ?
   chunking pour l'encodage ? interférence rétroactive évitée dans l'ordre des
   passages ? composantes correctes ? curseurs cohérents avec le palier `R` ?).
   Corriger si un point échoue.
7. **Ne jamais** écrire dans Notion sans validation (du **palier/durée estimée**
   et du **découpage**) à l'étape 4 — action difficilement réversible. Mettre à
   jour la page **« Profil pratiquant »** (`Date début`) et confirmer les URLs.

---

## Workflow PLANNING — alimenter l'agent de planification hebdomadaire

L'agent de planification hebdomadaire doit pouvoir, **pour n'importe quel
instrument** : (a) lire l'état d'avancement **et le palier de difficulté** dans
Notion, (b) en déduire des séances structurées conformes aux principes de
Gebrian **et calibrées par le palier** (`references/difficulty-assessment.md`),
(c) réécrire les dates de pratique dans Notion (et, en option, créer les
événements Google Calendar), (d) **ré-évaluer régulièrement** la vélocité et le
niveau, et recalibrer le palier (mise à jour de la page « Profil pratiquant »).

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
- `references/difficulty-assessment.md` — **calibration par la difficulté** :
  comment le palier `R` règle les curseurs du plan, et la **boucle de
  ré-évaluation** (vélocité, recalibrage, mise à jour du niveau `L`).

Règle d'or pour la cohérence : le plan généré doit **refléter ce qui existe
déjà dans Notion** (mêmes passages, mêmes composantes MG/MD/ME, mêmes chunks)
et faire progresser chaque passage le long de
`À travailler → En travail → Fluide → Maîtrisé`.

---

## Workflow LESSON — intégrer les retours de cours (revue automatisée)

Après un cours, l'utilisateur saisit (ou dicte) les retours du professeur. Le
skill les **capture** dans la base « Journal de cours », puis la **revue
automatisée** les classe et met la base à jour — voir
`references/lesson-integration.md`. Chaque conseil est typé (doigté à changer,
correction d'habitude, astuce qui accélère, indication ajoutée, technique neuve)
et appliqué selon la science de Gebrian (nouvelle voie neuronale, *old way / new
way*, surapprentissage, pratique espacée + transfert), avec ré-ouverture de
passage, mise à jour des doigtés, création de couches/mini-objectifs, et
**recalcul de `D` / palier / roadmap** au besoin. Cette revue tourne aussi à
chaque planification hebdo (`weekly-planning.md` Étape 6) : **c'est elle qui
tient Notion à jour**, pas la saisie manuelle.

---

## Fichiers de référence

- `references/neuroscience.md` — **le « pourquoi »** : mécanismes neuro, philosophie pédagogique, **grille d'auto-contrôle en 10 points**.
- `references/molly-principles.md` — principes & stratégies de Gebrian (condensé actionnable).
- `references/difficulty-assessment.md` — **évaluation de la difficulté du morceau & du niveau du pratiquant**, et comment ils règlent les curseurs de la méthode + boucle de ré-évaluation.
- `references/roadmap-and-deadlines.md` — **mode Échéance vs Au long cours** : planification à rebours, faisabilité, compression + alerte.
- `references/lesson-integration.md` — **intégrer les retours de cours** (doigté/astuce/indication/technique) + **revue automatisée** qui met la base à jour.
- `references/casares-decoupage.md` — méthode de découpage de Casares.
- `references/instrument-profiles.md` — composantes & pratique variable par famille d'instrument.
- `references/notion-contract.md` — schéma Notion canonique + opérations de lecture/écriture.
- `references/weekly-planning.md` — algorithme et format du plan hebdomadaire.
- `references/example-prelude-xv.md` — l'exemple de référence (structure exacte à imiter).
