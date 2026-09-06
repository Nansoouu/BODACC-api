# PENDING — changements à commiter (ledger du janitor git)

Repo public BODACC-api — les agents **ne commitent jamais** : ils ajoutent UNE ligne
par modification terminée, et le janitor (cron toutes les 5 min) commit + push.

Format d'une ligne :
  [ ] AAAA-MM-JJ HH:MM | <fichiers ou dossiers> | <message de commit>

Optionnel (pas de JOURNAL.md dans ce repo — le segment § est donc ignoré) :
  [ ] ... | ... | message | §Titre§Audience§Système§Utilisateur§Pages

Règles :
- Une ligne par modification terminée (message = ce que fait le commit).
- Ne pas commiter/pusher à la main — le janitor s'en charge.
- Le janitor coche [x] les entrées traitées et pousse tout sur GitHub.
[x] 2026-09-01 06:58 | README.md | docs : corrections
[x] 2026-09-06 11:20 | README.md docs/ar/recaps/README.md docs/de/recaps/README.md docs/en/recaps/README.md docs/es/recaps/README.md docs/fa/recaps/README.md docs/fr/recaps/README.md docs/he/recaps/README.md docs/hi/recaps/README.md docs/id/recaps/README.md docs/it/recaps/README.md docs/ja/recaps/README.md docs/ko/recaps/README.md docs/nl/recaps/README.md docs/pl/recaps/README.md docs/pt/recaps/README.md docs/ru/recaps/README.md docs/tr/recaps/README.md docs/uk/recaps/README.md docs/vi/recaps/README.md docs/zh/recaps/README.md docs/ar/coulisses/lexplorateur/README.md docs/de/coulisses/lexplorateur/README.md docs/en/coulisses/lexplorateur/README.md docs/es/coulisses/lexplorateur/README.md docs/fa/coulisses/lexplorateur/README.md docs/fr/coulisses/lexplorateur/README.md docs/he/coulisses/lexplorateur/README.md docs/hi/coulisses/lexplorateur/README.md docs/id/coulisses/lexplorateur/README.md docs/it/coulisses/lexplorateur/README.md docs/ja/coulisses/lexplorateur/README.md docs/ko/coulisses/lexplorateur/README.md docs/nl/coulisses/lexplorateur/README.md docs/pl/coulisses/lexplorateur/README.md docs/pt/coulisses/lexplorateur/README.md docs/ru/coulisses/lexplorateur/README.md docs/tr/coulisses/lexplorateur/README.md docs/uk/coulisses/lexplorateur/README.md docs/vi/coulisses/lexplorateur/README.md docs/zh/coulisses/lexplorateur/README.md | docs : données et récapitulatifs à jour
