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
