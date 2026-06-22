# Personal

Dépôt personnel d'automatisations & de skills pour Claude Code.

## Skills disponibles

| Skill | Rôle | Dépendances |
|---|---|---|
| **music-practice** | Découpe un morceau (Gebrian × Casares) et crée/planifie un projet de suivi dans Notion. | MCP **Notion** (requis), MCP **Google Calendar** (optionnel) |

## Installation locale (macOS)

Les skills vivent dans `.claude/skills/`. Le script `install.sh` les copie dans
`~/.claude/skills/` pour les rendre disponibles dans **toutes** tes sessions
Claude Code, partout sur ta machine.

```bash
# 1. Cloner le dépôt (si ce n'est pas déjà fait)
git clone <url-du-repo> Personal
cd Personal

# 2. Installer les skills au niveau utilisateur
./install.sh
```

Puis (re)lance Claude Code et tape `/music-practice` pour vérifier qu'il est
bien chargé.

### Options du script

```bash
./install.sh            # copie les skills dans ~/.claude/skills (défaut)
./install.sh --link     # crée des symlinks → maj automatique après un git pull
./install.sh --dry-run  # montre ce qui serait fait, sans rien écrire
```

> 💡 Si tu veux que les `git pull` futurs mettent à jour tes skills sans
> réinstaller, utilise `./install.sh --link`.

### Mettre à jour

```bash
git pull
./install.sh        # (inutile si tu avais utilisé --link)
```

## Prérequis MCP

Le skill `music-practice` pilote **Notion** (et, en option, **Google Calendar**)
via MCP. Ces serveurs doivent être configurés dans ta config Claude Code locale
(`~/.claude.json` ou via `claude mcp add`). Vérifier avec :

```bash
claude mcp list
```

Tu dois y voir au moins `Notion` connecté. (Côté Notion, l'intégration doit
avoir accès à la base « Projects » et à l'exemple « Prélude XV ».)
