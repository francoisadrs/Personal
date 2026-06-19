# Contrat de données Notion

Spécifie **où** et **comment** lire/écrire dans Notion, pour le SETUP (création
d'un projet) comme pour le PLANNING (lecture par l'agent hebdo, réécriture des
dates). Utiliser les outils MCP `notion-search`, `notion-fetch`,
`notion-create-database`, `notion-create-pages`, `notion-update-page`,
`notion-create-view`.

> Avant toute création/écriture, **toujours `notion-fetch`** la base cible pour
> récupérer le schéma et les `data_source_id` à jour (les IDs ci-dessous sont
> ceux constatés ; ils peuvent évoluer — re-vérifier).

## Modèle à deux niveaux (existant)

1. **Base « Projects »** — un projet de haut niveau par morceau.
   - DB : `https://app.notion.com/p/c5f6dd5308a14e63a28beb6ea02b3f2e`
   - data source : `collection://3341dd3f-1852-4666-a64d-532e3bd7ae00`
   - Champs utiles : `Project name` (title), `Status` (ex. *In progress*),
     `Completion`, `Dates`, `Tasks`.
   - Exemple : page « 🎹 Prelude XV ».

2. **Base dédiée au morceau** — les passages et leur suivi détaillé.
   - Exemple « Prélude XV » : DB `fe26f568-2704-4c04-b397-2cb52d7ed7ee`,
     data source `collection://5e993a84-a908-4049-a878-bae06ead0f33`.
   - Une base **par morceau**.

## Schéma canonique de la base d'un morceau

Champs **existants** dans « Prélude XV » (à conserver tels quels pour la
compatibilité) :

| Propriété | Type | Valeurs / note |
|---|---|---|
| `Passage` | title | nom du passage, ex. « Mesures 13-15 » |
| `Composante`† | select | couches du profil instrument. Piano : `Main gauche`, `Main droite`, `Mains ensemble` |
| `Progression` | select | `À travailler` (rouge), `En travail` (jaune), `Fluide` (vert), `Maîtrisé` (bleu) |
| `Techniques` | multi-select | ex. `Arpèges`, `Trilles`, `Gammes`, `Accords`, `Legato`, `Staccato` (adapter au profil) |
| `Tempo actuel` | number | BPM de travail courant |
| `Tempo cible` | number | BPM visé |
| `Doigtés` | text | doigtés critiques |
| `Observations` | text | difficultés, rappels, métronome |
| `Parent` | relation (self) | relie une sous-tâche à son passage principal |
| `Enfants` | relation (self) | inverse de `Parent` |

† **Note legacy** : dans l'exemple « Prélude XV », cette propriété s'appelle
**`Main`** (piano). Pour un nouveau morceau d'un autre instrument, utiliser le
nom générique **`Composante`** avec les options du profil. **Le planner doit
lire indifféremment `Main` ou `Composante`** = le select qui porte les couches.

Champs **à ajouter** pour activer la planification espacée (recommandé pour tout
nouveau morceau ; on peut aussi les ajouter à « Prélude XV » via
`notion-update-data-source`) :

| Propriété | Type | Rôle |
|---|---|---|
| `Priorité` | select | `Rouge`, `Jaune`, `Vert` (méthode R/J/V de Gebrian) |
| `Ordre` | number | ordre d'apprentissage (section difficile d'abord) |
| `Dernière séance` | date | date du dernier travail effectif (écrit par le planner) |
| `Prochaine séance` | date | prochaine date due (calculée par le planner) |
| `Nb séances` | number | compteur de séances effectuées (pour le schedule 3-jours) |

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

1. `notion-create-pages` dans la base **Projects** : page du morceau,
   `Status = In progress`.
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

## Lecture par le planner (PLANNING) — quoi lire

1. `notion-search` / la base Projects pour la liste des morceaux **actifs**
   (`Status = In progress`).
2. Pour chaque morceau, `notion-fetch` sa base de passages, puis lire les pages.
   Pour chaque **sous-tâche** (entrée avec `Composante` renseignée et `Parent`
   non vide) collecter :
   - `Passage` (via le parent), `Composante`, `Progression`, `Priorité`,
     `Techniques`, `Tempo actuel`, `Tempo cible`, `Ordre`,
     `Dernière séance`, `Prochaine séance`, `Nb séances`, `Observations`.
3. En déduire l'état pour l'algorithme de `weekly-planning.md`.

## Réécriture par le planner — après avoir planifié / après une séance

Via `notion-update-page` sur chaque sous-tâche travaillée :
- `Dernière séance` ← date de la séance ;
- `Nb séances` ← +1 ;
- `Prochaine séance` ← date due calculée (cf. schedule espacé) ;
- `Progression` ← mise à jour si l'utilisateur signale un palier
  (À travailler → En travail → Fluide → Maîtrisé) ;
- `Tempo actuel` ← nouveau BPM atteint, le cas échéant ;
- `Observations` ← note brève (méthode utilisée, point bloquant).

> Le planner **ne crée pas** de nouveaux passages ; il consomme le découpage
> existant. La création/modification du découpage relève du workflow SETUP.

## Intégration agenda (optionnelle)
Si demandé, le planner peut matérialiser les séances dans **Google Calendar**
(`Google_Calendar.create_event`) : un événement par bloc/séance, avec en
description la liste ordonnée des passages × composantes × méthode × tempo.
</content>
