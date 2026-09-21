# Roadmap & échéances (deadline vs au long cours)

Deux façons d'apprendre un morceau, choisies à la création (champ `Mode` sur le
projet, cf. `notion-contract.md`). Dans les deux cas, les **principes de Gebrian
restent** ; seul le tempo de déploiement change.

## Mode « Au long cours » (par défaut)
Pas de date imposée : le morceau est rythmé **intrinsèquement par sa difficulté**.
- On suit le **schedule espacé** dicté par le palier (`difficulty-assessment.md`
  §5) sans compression : 3 jours rapprochés puis espacement, fronts neufs limités
  en Étirement, etc.
- Jalons **souples** ; c'est la **ré-évaluation** (vélocité) qui pilote le rythme.
- Bon pour le travail de fond, le répertoire d'étude, l'absence d'enjeu daté.

## Mode « Échéance » (date fixe : concert, examen, audition)
Planification **à rebours** depuis la date cible `Date échéance`.

### 1. Estimer puis vérifier la faisabilité
- **Durée estimée** = difficulté `D` × courbe « heures/niveau » du pratiquant
  (`difficulty-assessment.md` §2-3), ajustée par la vélocité réelle si le travail
  a commencé.
- **Temps disponible** = (jours jusqu'à l'échéance) × (heures/semaine déclarées),
  moins une **marge de sécurité** (~15-20 %).
- **Faisabilité** = temps disponible vs durée estimée → stockée dans `Faisabilité`.

### 2. Jalons à rebours (depuis la date)
Construire la roadmap en remontant le temps :
- **T-0** : prêt à jouer en public (performance simulée réussie plusieurs fois).
- **dernières semaines** : phase **performance** — interleaving/aléatoire,
  performances simulées, jeu de mémoire pour d'autres (ch. 7, 13).
- **mémorisation complète** à **T- (3-4 / 6 / 8+ semaines)** selon le palier
  (Confort / Cible / Étirement) — Gebrian : mémorisé ≥ 6 sem. avant un concert.
- **tous les passages au moins `Fluide`** avant le début de la phase mémorisation.
- **passages 🔴 (les plus durs) abordés en premier et tôt** (Casares + ch. 1).
- placer en amont les passages selon `Ordre`, en respectant l'espacement et
  l'évitement d'interférence rétroactive.

### 3. Si la date n'est pas réaliste → **compresser automatiquement + avertir**
(Comportement validé.) Quand `durée estimée > temps disponible`, le skill
**compresse** le plan au mieux et **signale explicitement les compromis** :
leviers de compression, par ordre de préférence (du moins au plus risqué) :
1. **Densifier** : plus de revisites/jour, sessions un peu plus longues (sans
   dépasser 5 h/j ni sacrifier les pauses — non négociables chez Gebrian).
2. **Resserrer l'espacement** au strict minimum sûr (rester ≥ fenêtre LTP ~1 h ;
   garder l'évitement d'interférence rétroactive sur le matériel neuf).
3. **Avancer l'interleaving** d'un cran (accepter un peu plus d'interférence).
4. **Réduire la marge** de sécurité.
5. En dernier recours, **signaler que le périmètre devra être réduit** ou la date
   repoussée (le skill le dit, ne tranche pas seul au-delà de la compression).

⚠️ **Garde-fous Gebrian non compressibles** : pauses (micro-pauses + 5 min/25-30
min), plafond ~5 h/j, et le fait que la consolidation se fait *pendant* les
pauses. La compression ne doit jamais les supprimer — sinon on apprend **moins
vite**, pas plus. Toujours **avertir** des risques pris (rétention plus fragile,
mémoire moins sûre) et proposer date/périmètre alternatifs.

### 4. Suivi
La roadmap (jalons + dates cibles) est stockée dans `Roadmap` ; à chaque revue,
la **faisabilité est recalculée** avec la vélocité réelle. Si elle se dégrade, ré-
avertir et re-compresser. Le planner hebdo travaille **à l'intérieur** de cette
roadmap (cf. `weekly-planning.md`).
