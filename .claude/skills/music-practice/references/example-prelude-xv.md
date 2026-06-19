# Exemple de référence — Prélude XV (Bach, BWV 860)

Structure exacte à imiter pour tout nouveau projet. Source : workspace Notion de
l'utilisateur + *Practice Plan* de Manuel Casares.

## Pages/bases existantes
- Projet (haut niveau) : page « 🎹 Prelude XV » dans la base **Projects**
  (`collection://3341dd3f-1852-4666-a64d-532e3bd7ae00`), `Status = In progress`.
- Base du morceau : « Prélude XV »
  (`fe26f568-2704-4c04-b397-2cb52d7ed7ee`,
  data source `collection://5e993a84-a908-4049-a878-bae06ead0f33`).
- Page « 📖 Guide du projet Prélude XV » (gabarit du guide ci-dessous).

## Schéma observé (base du morceau)
`Passage` (title) · `Main` (select : Main gauche / Main droite / Mains ensemble) ·
`Progression` (À travailler / En travail / Fluide / Maîtrisé) · `Techniques`
(multi : Arpèges, Trilles, Gammes, Accords, Legato, Staccato) · `Tempo actuel`
(number) · `Tempo cible` (number) · `Doigtés` (text) · `Observations` (text) ·
`Parent`/`Enfants` (relation self).
Vues : **Tableau de bord** (board), **Passages principaux** (table, filtre
`Parent` is_empty), **Vue détaillée** (table).

> Pour un nouveau morceau d'un autre instrument : renommer `Main` → `Composante`
> et adapter les options/techniques au profil (`instrument-profiles.md`), et
> ajouter les champs de planification (`Priorité`, `Ordre`, `Dernière séance`,
> `Prochaine séance`, `Nb séances`).

## Découpage de Casares (à transcrire en passages)
Ordre d'apprentissage **section difficile d'abord** :
1. **Mes. 13-15** (la plus dure) — MG seule (jusqu'au sol grave m.16), puis MD
   seule (jusqu'au si tenu m.16), par cœur, en chunks. Doigtés vitaux. Legato
   (relâcher activement les doigts). 🔴
2. **Mes. 13-15 mains ensemble** — focus sur une main pendant que l'autre tourne
   en auto ; très petits chunks puis connexion. Alterner avec d'autres steps
   pour éviter le burnout. 🔴
3. **Mes. 16-18** (« la plus fun ») — séquence/pattern qui descend ; seule note
   d'attention : F#. Articulation legato vs staccato MG. Puis mains ensemble. 🟢
4. **Reste des triolets de doubles croches** (legato) — une main à la fois,
   focus sur les triolets + la croche de fin ; legato parfait en lenteur. 🟡
5. **Reste des croches** (staccato) — joindre aux triolets ; staccato très court,
   « jamais lier deux croches ». 🟡
6. **Assemblage** — connecter chunks → sections → grandes sections → morceau.

→ Chaque ligne ci-dessus devient un **passage principal** + sous-tâches MG/MD/ME.

## Gabarit « 📖 Guide du projet » (contenu de la page)

```
## Structure
Ce projet est organisé pour tracker votre apprentissage de <MORCEAU>. Pour
chaque passage que vous travaillez, vous créez :
1. Un passage principal → le nom du passage (ex : « Mesures 13-15 »)
2. Des sous-tâches liées → une par composante de l'instrument
   - (piano) Main gauche (MG) / Main droite (MD) / Mains ensemble (ME)

## Workflow recommandé
1) Créer un nouveau passage (vue « Passages principaux »), Parent vide, Statut
   « À commencer/À travailler ».
2) Créer les sous-tâches (une par composante), reliées via « Parent ».
3) Suivre la progression sur le « Tableau de bord » ; mettre à jour Progression
   À travailler → En travail → Fluide → Maîtrisé ; noter dans Observations.

## Vues
- Tableau de bord : kanban groupé par Progression.
- Passages principaux : liste sans les sous-tâches.
- Vue détaillée : toutes les colonnes.

## Conseils (Gebrian)
- Section difficile d'abord, en petits chunks, micro-pauses.
- Pratique espacée : ~3 jours rapprochés puis espacer.
- Entrelacer les passages ; éviter deux passages neufs très proches à la suite.
- Pratique variable une fois le passage propre ; tester la mémoire tôt.
```
</content>
