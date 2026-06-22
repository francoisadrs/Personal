#!/usr/bin/env bash
#
# install.sh — installe les skills de ce dépôt dans Claude Code (niveau utilisateur)
#
# Copie chaque skill de .claude/skills/ vers ~/.claude/skills/ pour le rendre
# disponible dans toutes tes sessions Claude Code, partout sur ta machine.
#
# Usage :
#   ./install.sh           # installe / met à jour tous les skills
#   ./install.sh --link    # crée des symlinks au lieu de copier (maj auto via git pull)
#   ./install.sh --dry-run  # montre ce qui serait fait, sans rien écrire
#
set -euo pipefail

# Répertoire du dépôt (là où vit ce script), quel que soit l'endroit d'où on l'appelle.
REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SRC_DIR="$REPO_DIR/.claude/skills"
DEST_DIR="$HOME/.claude/skills"

MODE="copy"
DRY_RUN=false
for arg in "$@"; do
  case "$arg" in
    --link)    MODE="link" ;;
    --dry-run) DRY_RUN=true ;;
    -h|--help)
      grep '^#' "$0" | sed 's/^# \{0,1\}//'
      exit 0 ;;
    *) echo "Argument inconnu : $arg" >&2; exit 1 ;;
  esac
done

if [[ ! -d "$SRC_DIR" ]]; then
  echo "❌ Aucun dossier de skills trouvé : $SRC_DIR" >&2
  exit 1
fi

echo "📦 Source      : $SRC_DIR"
echo "🎯 Destination : $DEST_DIR"
echo "🔧 Mode        : $MODE$($DRY_RUN && echo ' (dry-run)')"
echo

mkdir -p "$DEST_DIR"

installed=0
for skill_path in "$SRC_DIR"/*/; do
  [[ -d "$skill_path" ]] || continue
  skill_name="$(basename "$skill_path")"
  target="$DEST_DIR/$skill_name"

  echo "→ $skill_name"

  if $DRY_RUN; then
    echo "   (dry-run) installerait dans $target"
    installed=$((installed+1))
    continue
  fi

  # On retire toute version précédente (copie ou symlink) pour une install propre.
  rm -rf "$target"

  if [[ "$MODE" == "link" ]]; then
    ln -s "${skill_path%/}" "$target"
    echo "   ✅ symlink → ${skill_path%/}"
  else
    cp -R "${skill_path%/}" "$target"
    echo "   ✅ copié dans $target"
  fi
  installed=$((installed+1))
done

echo
echo "✨ Terminé : $installed skill(s) installé(s) dans $DEST_DIR"
echo "   Lance/relance Claude Code, puis tape /music-practice pour vérifier."
