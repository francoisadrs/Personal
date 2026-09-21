# Contrat de données Notion

Spécifie **où** et **comment** lire/écrire dans Notion, pour le SETUP (création
d'un projet) comme pour le PLANNING (lecture par l'agent hebdo, réécriture des
dates). Utiliser les outils MCP `notion-search`, `notion-fetch`,
`notion-create-database`, `notion-create-pages`, `notion-update-page`,
`notion-create-view`.

> Avant toute création/écriture, **toujours `notion-fetch`** la base cible pour
> récupérer le schéma et les `data_source_id` à jour (les IDs ci-dessous sont
> ceux constatés ; ils peuvent évoluer — re-vérifier).

## Modèle Notion (4 objets)

1. **Base « Projects »** — un projet de haut niveau par morceau.
   - DB : `https://app.notion.com/p/c5f6dd5308a14e63a28beb6ea02b3f2e`
   - data source : `collection://3341dd3f-1852-4666-a64d-532e3bd7ae00`
   - Champs existants : `Project name` (title), `Status` (ex. *In progress*),
     `Completion`, `Dates`, `Tasks`.
   - **Champs de difficulté à ajouter** (cf. `difficulty-assessment.md`) :
     `Niveau morceau (D)` (number 1–10), `Source niveau` (select : ABRSM/Trinity,
     RCM, Henle, Conservatoire, A Dozen a Day, Le Bach à nos jours, Suzuki,
     Autre), `Référence` (text, ex. « ABRSM G6 list A »), `Palier` (select :
     Confort, Cible, Étirement, Étirement fort), `Difficulté relative (R)`
     (number), `Durée estimée (h)` (number), `Durée réelle (h)` (number),
     `Date début` (date), `Date maîtrise` (date), `Vélocité` (number).
   - **Champs roadmap à ajouter** (cf. `roadmap-and-deadlines.md`) :
     `Mode` (select : *Au long cours*, *Échéance*), `Date échéance` (date),
     `Roadmap` (text : jalons + dates cibles), `Faisabilité` (select : OK, Serré,
     À risque).
   - Exemple : page « 🎹 Prelude XV ».

2. **Base dédiée au morceau** — les passages et leur suivi détaillé.
   - Exemple « Prélude XV » : DB `fe26f568-2704-4c04-b397-2cb52d7ed7ee`,
     data source `collection://5e993a84-a908-4049-a878-bae06ead0f33`.
   - Une base **par morceau**.

3. **Page « Profil pratiquant »** — le niveau du joueur et sa courbe d'apprentissage.
   - Un objet **unique** (à créer si absent). Contenu :
     - `Niveau actuel (L)` (number 1–10) **par instrument** (un bloc/ligne par
       instrument si le joueur en pratique plusieurs) ;
     - `Instrument` ;
     - **Historique** des morceaux appris : pour chacun `Niveau (D)` + `Durée
       réelle (h)` + `Date maîtrise` (peut être une vue filtrée de la base
       Projects sur `Status = Done`/`Date maîtrise` renseignée, plutôt que
       re-saisir) ;
     - **Courbe « heures par niveau »** : dérivée de l'historique, sert à prédire
       les `Durée estimée` et à situer `L` (cf. `difficulty-assessment.md` §3, §6).
   - C'est le planner qui met `L` à jour à chaque morceau maîtrisé et à la revue
     mensuelle ; le SETUP y lit `L` pour calculer `R`.

4. **Base « Journal de cours »** — les retours du professeur (cf.
   `lesson-integration.md`). Une base **globale** (à créer si absente), une
   entrée par conseil :
   - `Conseil` (title) · `Date` (date) · `Morceau` (relation → Projects) ·
     `Passage concerné` (text) · `Type` (select : Doigté, Correction d'habitude,
     Astuce/Raccourci, Indication ajoutée, Nouvelle technique, Musicalité) ·
     `Action` (text) · `Impact` (select : Ré-ouvre passage, Nouvelle couche/passage,
     Baisse difficulté, Mini-objectif, Aucun) · `Statut` (select : À traiter,
     Intégré).
   - Lue par la **revue automatisée** (`lesson-integration.md`) : les conseils
     `À traiter` sont appliqués au projet puis passés à `Intégré`.

## Schéma canonique de la base d'un morceau

> **Principe.** C'est le skill qui définit la structure, pas l'inverse. **Tout
> projet de morceau doit suivre ce schéma canonique** — y compris les projets
> déjà créés (ex. Prélude XV), qui doivent être **normalisés** (voir plus bas).
> On ne dégrade jamais le skill pour s'adapter à une base incomplète : on met la
> base en conformité.

Schéma **canonique et obligatoire** (toutes ces propriétés font partie du
standard) :

| Propriété | Type | Valeurs / note |
|---|---|---|
| `Passage` | title | nom du passage, ex. « Mesures 13-15 » |
| `Composante` | select | couches du profil instrument. Piano : `Main gauche`, `Main droite`, `Mains ensemble` (cf. `instrument-profiles.md`) |
| `Progression` | select | `À travailler` (rouge), `En travail` (jaune), `Fluide` (vert), `Maîtrisé` (bleu) |
| `Priorité` | select | `Rouge`, `Jaune`, `Vert` (méthode R/J/V de Gebrian) |
| `Techniques` | multi-select | ex. `Arpèges`, `Trilles`, `Gammes`, `Accords`, `Legato`, `Staccato` (adapter au profil) |
| `Tempo actuel` | number | BPM de travail courant |
| `Tempo cible` | number | BPM visé |
| `Ordre` | number | ordre d'apprentissage (section difficile d'abord) |
| `Doigtés` | text | doigtés critiques |
| `Observations` | text | journal : difficultés, méthode, métronome, à retravailler |
| `Dernière séance` | date | date du dernier travail effectif (écrit par le planner) |
| `Prochaine séance` | date | prochaine date due (calculée par le planner) |
| `Nb séances` | number | compteur de séances effectuées (schedule espacé) |
| `Parent` | relation (self) | relie une sous-tâche à son passage principal |
| `Enfants` | relation (self) | inverse de `Parent` |

La propriété de couche s'appelle **`Composante`** (nom uniforme pour que le
planner la lise de la même façon quel que soit l'instrument) ; seules ses
**options** changent selon le profil. Un projet existant qui l'appellerait
autrement (ex. `Main`) doit être renommé lors de la normalisation.

### DDL pour créer une base de morceau (exemple piano)

À passer à `notion-create-database` (parent = page du morceau, ou workspace) :

```sql
CREATE TABLE (
  "Passage" TITLE,
  "Composante" SELECT('Main gauche':blue, 'Main droite':purple, 'Mains ensemble':green),
  "Progression" SELECT('À travailler':red, 'En travail':yellow, 'Fluide':green, 'Maîtrisé':blue),
  "Priorité" SELECT('Rouge':red, 'Jaune':yellow, 'Vert':green),
  "Techniques" MULTI_SELECT('Arpèges':purple, 'Trilles':pink, 'Gammes':yellow, 'Accords':blue, 'Legato':green, 'Staccato':orange),
  "Tempo actuel" NUMBER,
  "Tempo cible" NUMBER,
  "Ordre" NUMBER,
  "Doigtés" RICH_TEXT,
  "Observations" RICH_TEXT,
  "Dernière séance" DATE,
  "Prochaine séance" DATE,
  "Nb séances" NUMBER
)
```

Puis, en 2e temps (les self-relations se posent après création, via
`notion-update-data-source`, en réinjectant le `data_source_id` retourné) :
ajouter `Parent` RELATION(self, DUAL 'Enfants') et `Enfants` RELATION(self,
DUAL 'Parent').

> Adapter `Composante` et `Techniques` au profil instrument
> (`instrument-profiles.md`).

## Création d'un projet (SETUP) — séquence

0. **Difficulté, niveau & mode** : lire `L` sur la page « Profil pratiquant » (la
   créer si absente), estimer `D` puis `R`/`Palier` et la `Durée estimée`
   (`difficulty-assessment.md`) ; déterminer le **`Mode`** (Au long cours /
   Échéance + `Date échéance`) et, si Échéance, la **roadmap à rebours** +
   `Faisabilité` (`roadmap-and-deadlines.md`) — **proposer le tout à
   l'utilisateur pour validation** (mode « auto + validation »). S'assurer aussi
   que la base globale **Journal de cours** existe (la créer sinon).
1. `notion-create-pages` dans la base **Projects** : page du morceau,
   `Status = In progress`, + champs de difficulté validés (`Niveau morceau (D)`,
   `Source niveau`, `Référence`, `Palier`, `Difficulté relative (R)`,
   `Durée estimée (h)`, `Date début` = aujourd'hui) + champs de mode
   (`Mode`, `Date échéance`, `Roadmap`, `Faisabilité`).
2. `notion-create-database` : la base du morceau (DDL ci-dessus, parent = la page
   créée à l'étape 1). Récupérer le `data_source_id`.
3. `notion-update-data-source` : ajouter les self-relations `Parent`/`Enfants`.
4. Pour **chaque passage** du découpage validé :
   - créer le **passage principal** : `Passage` = nom, `Composante` vide,
     `Priorité`, `Ordre`, `Tempo cible`, `Techniques`, `Doigtés`,
     `Observations`, `Progression = À travailler`.
   - créer **une sous-tâche par composante** du profil (ex. MG, MD, ME) :
     `Composante` = la couche, `Parent` = URL du passage principal,
     `Progression = À travailler`.
   - On peut batcher les `notion-create-pages` (jusqu'à 100 pages/appel), mais le
     `Parent` exige l'URL du parent → créer d'abord les principaux, récupérer
     leurs URLs, puis créer les sous-tâches.
5. `notion-create-view` : recréer les vues de l'exemple —
   **Tableau de bord** (board, groupé par `Progression`),
   **Passages principaux** (table, filtre `Parent` is_empty),
   **Vue détaillée** (table, toutes colonnes).
6. `notion-create-pages` : page « 📖 Guide du projet » (gabarit dans
   `example-prelude-xv.md`).
7. Restituer à l'utilisateur les URLs créées.

## Normaliser un projet existant (mise en conformité)

Un projet de morceau déjà présent qui ne suit pas le schéma canonique (ex. le
**Prélude XV**, qui a la propriété `Main` et n'a pas `Priorité` / `Ordre` /
`Dernière séance` / `Prochaine séance` / `Nb séances`) doit être **mis en
conformité avant** d'être planifié. Procédure (toujours **proposer/confirmer
avec l'utilisateur** d'abord — modification de données existantes) :

1. `notion-fetch` la base pour relire le schéma et le `data_source_id` à jour.
2. `notion-update-data-source` :
   - **renommer** la propriété de couche `Main` → `Composante` (les options
     `Main gauche/droite/ensemble` sont conservées — c'est juste le nom qui
     s'uniformise) ;
   - **ajouter** les propriétés manquantes du schéma canonique (`Priorité`,
     `Ordre`, `Dernière séance`, `Prochaine séance`, `Nb séances`).
3. Renseigner rétroactivement `Priorité` et `Ordre` sur les passages existants
   (d'après le découpage), pour que la priorisation du planner fonctionne.
4. Les vues existantes restent valides ; ajouter la vue manquante au besoin.

Après normalisation, le projet suit la même logique que tout nouveau projet : le
planner n'a **pas** de mode dégradé, il lit partout le schéma canonique.

## Lecture par le planner (PLANNING) — quoi lire

1. `notion-search` / la base Projects pour la liste des morceaux **actifs**
   (`Status = In progress`) + leurs champs de difficulté (`Palier`,
   `Difficulté relative (R)`, `Durée estimée/réelle`, `Date début`, `Vélocité`).
2. Page « Profil pratiquant » : lire `Niveau actuel (L)` (par instrument) et la
   courbe heures/niveau.
3. Pour chaque morceau, `notion-fetch` sa base de passages, puis lire les pages.
   Pour chaque **sous-tâche** (entrée avec `Composante` renseignée et `Parent`
   non vide) collecter :
   - `Passage` (via le parent), `Composante`, `Progression`, `Priorité`,
     `Techniques`, `Tempo actuel`, `Tempo cible`, `Ordre`,
     `Dernière séance`, `Prochaine séance`, `Nb séances`, `Observations`.
4. Lire le **`Mode`** + roadmap/échéance du morceau (`roadmap-and-deadlines.md`)
   et les conseils **`À traiter`** dans la base **Journal de cours**
   (`lesson-integration.md`).
5. En déduire l'état **et le `Palier`** pour `weekly-planning.md` (le palier
   règle les curseurs ; cf. `difficulty-assessment.md`).

## Réécriture par le planner — après avoir planifié / après une séance

Via `notion-update-page` sur chaque sous-tâche travaillée :
- `Dernière séance` ← date de la séance ;
- `Nb séances` ← +1 ;
- `Prochaine séance` ← date due calculée (cf. schedule espacé) ;
- `Progression` ← mise à jour si l'utilisateur signale un palier
  (À travailler → En travail → Fluide → Maîtrisé) ;
- `Tempo actuel` ← nouveau BPM atteint, le cas échéant ;
- `Observations` ← note brève (méthode utilisée, point bloquant).

**Ré-évaluation (cf. `difficulty-assessment.md` §6)** — sur la page Projects du
morceau et la page « Profil pratiquant » :
- `Vélocité` ← mesurée (séances→`Fluide`, % passages avancés vs `Durée estimée`) ;
- `Palier` / `Difficulté relative (R)` ← recalibrés si vélocité <0,7× ou >1,3× ;
- à la maîtrise du morceau : `Status = Done`, `Date maîtrise`, `Durée réelle (h)` ;
  puis recalcul de la courbe heures/niveau et **mise à jour de `Niveau actuel (L)`**.

**Revue automatisée des conseils (cf. `lesson-integration.md`)** : appliquer les
entrées `À traiter` du Journal de cours (ré-ouverture de passage, `Doigtés` mis à
jour, nouvelle couche/passage, mini-objectif), recalculer `D`/`Palier` si la
charge change, mettre à jour la **roadmap/`Faisabilité`** (en mode Échéance :
**re-compresser + avertir**), puis passer les conseils à `Intégré`.

> Le planner peut **ré-ouvrir** des passages et **ajouter** des couches/mini-
> objectifs **uniquement** suite à un conseil de cours (via la revue automatisée).
> La création initiale du découpage relève du workflow SETUP.

## Intégration agenda (optionnelle)
Si demandé, le planner peut matérialiser les séances dans **Google Calendar**
(`Google_Calendar.create_event`) : un événement par bloc/séance, avec en
description la liste ordonnée des passages × composantes × méthode × tempo.
