# 🏠 Dans les coulisses de BODACC.io

BODACC.io rend les annonces officielles des entreprises françaises **faciles à
consulter**. Mais d'où viennent ces données ? Comment arrivent-elles jusqu'à
votre écran ?

C'est une petite équipe de travailleurs automatiques qui s'active chaque jour
dans les coulisses. Voici leur histoire.

---

## 🌅 Le matin : le facteur

Chaque matin, très tôt, notre **facteur** part chercher les annonces officielles
de la veille : créations d'entreprises, changements de dirigeants, liquidations,
dépôts de comptes... Il les ramène toutes, sans en perdre une seule, et les
range dans notre grande bibliothèque.

> 👤 **Incarné par Thom** — agent ingestion : il récupère chaque jour les
> annonces officielles et les structure pour la base de données. C'est lui qui
> fait tourner la machine.

→ [Découvrir le travail du facteur](le-facteur/README.md)

## 📖 Ensuite : le traducteur

Les annonces officielles sont des textes écrits en langage administratif, pas
toujours faciles à lire. Notre **traducteur** les lit toutes et les transforme
en fiches claires : le nom de l'entreprise, son adresse, son activité, ses
dirigeants, les montants...

→ [Découvrir le travail du traducteur](le-traducteur/README.md)

## 🔍 Puis : l'enquêteur

Une fois la fiche prête, notre **enquêteur** la complète avec les informations
**publiques** de l'entreprise : son site web, son téléphone, ses réseaux
sociaux. Rien de privé, rien de secret — uniquement ce que l'entreprise
montre elle-même.

> 👤 **Incarné par Elysa** — agent enrichissement : elle complète les fiches
> entreprises (site web, téléphone, réseaux sociaux des dirigeants). Elle ne
> récupère que les données publiques exposées : rien n'est recherché dans des
> endroits interdits.

→ [Découvrir le travail de l'enquêteur](lenqueteur/README.md)

## 🧩 En même temps : le puzzle des personnes

Chaque annonce parle de personnes : des dirigeants, des liquidateurs, des
commissaires aux comptes. Notre **puzzle** relie chaque personne à ses
entreprises, pour qu'on puisse retrouver facilement « qui fait quoi ».

→ [Découvrir le puzzle des personnes](le-puzzle/README.md)

## 🗺️ Et le géographe

Notre **géographe** vérifie que chaque entreprise existe bien sur la carte
(Google Maps) : son adresse, sa catégorie, sa note. Comme ça, la fiche montre
aussi la présence réelle de l'entreprise dans la vraie vie.

→ [Découvrir le travail du géographe](le-geographe/README.md)

## 📚 Enfin : la bibliothèque des contrats

Les marchés publics (contrats passés par les administrations) sont eux aussi
archivés dans notre **bibliothèque** : plus d'un million de contrats, consultables
librement.

→ [Découvrir la bibliothèque des contrats](la-bibliotheque/README.md)

## 🧭 Et l'explorateur, pour tout rassembler

Une fois tout le travail fait, notre **explorateur** ouvre les portes : il
prépare les vues (annonces, entreprises, personnes, régions), les statistiques
du jour et les récapitulatifs que tout le monde peut consulter. C'est lui qui
amène les données jusqu'à votre écran.

→ [Découvrir le travail de l'explorateur](lexplorateur/README.md)

---

## 👥 L'équipe qui fait tourner les coulisses

| Personne | Rôle | Domaine |
|---|---|---|
| **Nansou** | Chef de projet | Vision, stratégie, contenu — il orchestre tout |
| **Thom** | Agent ingestion | Le facteur : récupérer les annonces chaque jour |
| **Elysa** | Agent enrichissement | L'enquêteur : compléter les fiches publiques |
| **Karan** | Agent international et SEO | Traductions, visibilité à l'international |
| **Ruby** | Agent supervision | Vérifier que tout fonctionne, en permanence |

---

## 📊 Les compteurs en direct

![Annonces](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Annonces&color=blue)
![Entreprises](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Entreprises&color=green)
![Personnes](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Personnes&color=orange)

Ces chiffres sont réels et évoluent chaque jour. Chaque matin, le facteur
apporte son lot, le traducteur le lit, et tout le monde peut venir consulter.

---

## 📅 Le journal de bord

Chaque travailleur tient son petit journal : combien de documents traités dans
la journée, et les petites améliorations apportées. On le retrouve dans chaque
fiche :

| Date | Annonces arrivées | Fiches lues | Petites améliorations |
|---|---|---|---|
| _(complété chaque jour)_ | | | |

## 🔍 Vérifiez par vous-même

Tout est public et gratuit — chacun peut vérifier :

- Les dernières annonces : [`https://bodacc.io/fr/annonces`](https://bodacc.io/fr/annonces)
- Les compteurs en direct : [`https://bodacc.io/api/bodacc/stats/counts`](https://bodacc.io/api/bodacc/stats/counts)
- Une entreprise : [`https://bodacc.io/fr/entreprises/514494491`](https://bodacc.io/fr/entreprises/514494491)

---

*Ce document fait partie du dépôt public BODACC-api. Il décrit ce que nous
faisons, simplement — sans dévoiler nos méthodes internes.*
