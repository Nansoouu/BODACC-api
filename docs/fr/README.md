<div align="center">

# BODACC.io : l'API BODACC des annonces légales et des données d'entreprises

**Chaque annonce légale française, en temps réel.** Créations, modifications, dépôts de comptes,
procédures collectives, ventes, radiations : toutes les annonces du BODACC, reliées à leur
entreprise, à leurs dirigeants et à leur source officielle. Gratuit et ouvert, en 20 langues.

[**bodacc.io**](https://bodacc.io) · [Documentation de l'API](https://bodacc.io/fr/docs) · [Swagger](https://bodacc.io/api/bodacc/docs) · [RSS](https://bodacc.io/rss.xml)

</div>

## 1. Les données BODACC en direct

| Jeu de données BODACC | Enregistrements | En direct |
|---|---|---|
| Annonces légales BODACC | 51 043 403 | ![Annonces](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=annonces&color=blue) |
| Entreprises françaises | 30 032 566 | ![Entreprises](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=entreprises&color=green) |
| Dirigeants et mandataires | 4 935 692 | ![Personnes](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=personnes&color=orange) |
| Marchés publics (BOAMP) | 1 716 163 | ![Marchés](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=boamp&label=march%C3%A9s&color=purple) |

Ces chiffres ne sont pas recopiés : ils sont **servis en direct par l'API BODACC elle-même**, sur
[`/api/bodacc/stats/counts-formatted`](https://bodacc.io/api/bodacc/stats/counts-formatted).
Vérifiez-les vous-même, puis revérifiez demain.

**Aujourd'hui** (14 octobre 2026) : **5 920 annonces** — famille la plus fréquente : Dépôts des comptes (2 306).

Le BODACC a publié aujourd'hui des annonces dans sept familles :

| Famille BODACC | Annonces du jour |
|---|---|
| Dépôts des comptes | 2 306 |
| Créations | 1 415 |
| Modifications | 1 193 |
| Radiations | 500 |
| Procédures collectives | 323 |
| Immatriculations | 118 |
| Ventes et cessions | 65 |

## 2. Ce que l'API BODACC vous donne

Le BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) est le journal officiel de la vie
des entreprises françaises. Chaque création, chaque dépôt de comptes, chaque procédure collective,
chaque cession y est publiée par la loi. BODACC.io transforme ce journal en base de données
interrogeable.

**La plupart des bases d'entreprises vous donnent une photo. L'API BODACC vous donne le mouvement.**

Un annuaire vous dit qu'une entreprise existe : son nom, son adresse, son numéro d'immatriculation.
Le BODACC vous dit **ce que l'entreprise vient de faire**, et quand. Toute la différence est là :

| | Les annuaires d'entreprises | BODACC.io |
|---|---|---|
| Ce que vous recevez | une fiche figée | des événements datés |
| Fraîcheur | actualisée au trimestre | publiée le matin même |
| Insolvabilité | un indicateur de statut | la procédure, sa nature et sa date |
| Comptes | un booléen « déposé » | chaque dépôt, avec sa date de clôture |
| Dirigeants | un nom | chaque mandat, avec ses sociétés |
| Source | une copie | l'annonce officielle et son PDF |

## 3. Les annonces légales BODACC en détail

Chaque annonce porte 23 champs. En voici une réelle, exactement telle que l'API BODACC la renvoie :

```json
{
  "id": "C202601972306",
  "dateparution": "2026-10-14",
  "familleavis": "dpc",
  "familleavis_lib": "Dépôts des comptes",
  "typeavis_lib": "Avis initial",
  "commercant": "HOLDING BIIZ",
  "ville": "Saint-Louis",
  "cp": "97450",
  "departement_nom_officiel": "La Réunion",
  "tribunal": "Greffe du Tribunal Mixte de Commerce de saint-pierre",
  "registre": ["988208435", "988 208 435"],
  "url": "https://bodacc.io/fr/annonces/C202601972306-depot-comptes-988208435-141026-holding-biiz"
}
```

Chaque annonce renvoie vers **sa fiche complète sur bodacc.io**, où vous trouverez l'accès à
l'annonce officielle et à son PDF.

Les sept familles du BODACC, avec le terme que vous verrez dans les données :

| Famille BODACC | Dans les données | Ce que cela signifie |
|---|---|---|
| Créations | `creation` | une nouvelle entreprise est immatriculée |
| Modifications | `modification` | statuts, direction, adresse, capital |
| Dépôts des comptes | `dpc` | comptes annuels déposés au greffe |
| Procédures collectives | `collective` | redressement, liquidation, rétablissement |
| Ventes et cessions | `vente` | un fonds est vendu ou transmis |
| Radiations | `radiation` | l'entreprise est radiée du registre |
| Immatriculations | `immatriculation` | inscription au registre du commerce |

## 4. Les fiches d'entreprises BODACC

Chaque annonce renvoie vers l'entreprise concernée. L'API BODACC expose ces entreprises avec leur
identité, leur activité et leur historique comptable :

```json
{
  "siren": "552081317",
  "nom_complet": "EIFFAGE ENERGIE SYSTEMES - INDUSTRIE TERTIAIRE BOURGOGNE FRANCHE-COMTE",
  "adresse_complete": "245 Rue Charles de Freycinet 21600 Longvic",
  "naf_code": "43.21A",
  "nature_juridique": "5710",
  "date_creation": "2025-04-24",
  "etat_administratif": "A",
  "depot_comptes": "oui",
  "dernier_depot": "2026-07-31",
  "derniere_cloture": "2025-12-31",
  "dernier_ecart_jours": 212
}
```

Au-delà de l'identité : le code d'activité (NAF), la forme juridique, l'état administratif,
**la date du dernier dépôt de comptes, la dernière date de clôture et le nombre de jours écoulés**,
ainsi que les labels qu'une entreprise peut porter : économie sociale et solidaire, bio, RGE,
Qualiopi.

## 5. Les dirigeants et mandataires BODACC

Derrière chaque entreprise, les personnes qui la dirigent. L'API BODACC recense **4,9 millions de
dirigeants, mandataires, liquidateurs et commissaires aux comptes**, chacun avec :

- ses mandats, société par société, avec la période concernée
- ses autres sociétés, pour suivre une personne tout au long de sa carrière
- les annonces qui le concernent

C'est ce qui transforme un registre en graphe : une entreprise, ses dirigeants, et les entreprises
que ces dirigeants dirigent aussi. Un point d'accès l'expose directement.

## 6. L'API BODACC

REST, JSON, aucune clé requise sur les points d'accès ouverts, jusqu'à 500 enregistrements par appel,
paginés par `offset`.

```bash
# Les dernières annonces BODACC (toujours les plus fraîches d'abord)
curl "https://bodacc.io/api/bodacc/annonces?limit=100"

# Une annonce, avec ses entreprises et ses dirigeants
curl "https://bodacc.io/api/bodacc/annonces/C202601972306-depot-comptes-988208435-141026-holding-biiz"

# Une entreprise par son SIREN
curl "https://bodacc.io/api/bodacc/entreprises/552081317"

# Toutes les annonces BODACC concernant cette entreprise
curl "https://bodacc.io/api/bodacc/entreprises/552081317/annonces"

# Le graphe de l'entreprise : dirigeants et leurs autres sociétés
curl "https://bodacc.io/api/bodacc/entreprises/552081317/graphe"

# Recherche par nom, ville, département, code d'activité ou période
curl "https://bodacc.io/api/bodacc/entreprises?q=eiffage&departement=75"
curl "https://bodacc.io/api/bodacc/annonces?famille=collective&date_debut=2026-10-01"
```

Référence complète : [bodacc.io/fr/docs](https://bodacc.io/fr/docs) — point d'accès par point d'accès,
avec une interface Swagger et une spécification OpenAPI publiée, en 20 langues.

## 7. Les jeux de données BODACC

Au-delà de l'API, chaque page de bodacc.io est une adresse stable et explorable : annonces légales,
entreprises, dirigeants, régions, villes, statistiques. Le site publie ses points d'entrée
lisibles par une machine :

- [Sitemaps](https://bodacc.io/sitemap.xml) — l'inventaire complet des adresses, par langue
- [Catalogue d'API](https://bodacc.io/.well-known/api-catalog) — découvrable par les agents
- [RSS](https://bodacc.io/rss.xml) — le fil quotidien
- [Liste des URLs](URLLIST.md) — tous les points d'entrée, une liste par langue

## 8. Couverture et fraîcheur des données BODACC

Le BODACC paraît les jours ouvrés, pas le week-end. BODACC.io collecte chaque publication et la rend
disponible **le matin même**, généralement quelques minutes après sa sortie. Chaque annonce conserve
sa date de parution : vous savez toujours ce qui est nouveau.

## 9. À quoi sert le BODACC

- **Conformité et KYC** — vérifier l'état réel d'un partenaire avant de signer, pas son état d'il y a trois mois
- **Due diligence** — suivre les publications d'une entreprise, ses comptes et son historique d'insolvabilité
- **Scoring de risque et de crédit** — les procédures collectives et les dépôts de comptes sont les signaux les plus précoces
- **Prospection** — une création d'entreprise est un prospect, le jour même
- **Journalisme** — des faits d'entreprise, sourcés et datés
- **Recherche** — 51 millions de publications, du plus ancien registre à ce matin
- **Cabinets juridiques et comptables** — retrouver les entreprises que vous suivez et ce qu'elles ont déposé

## 10. Questions fréquentes sur le BODACC

**BODACC.io est-il le BODACC officiel ?**

Non. BODACC.io est un service indépendant qui rend les données publiques du BODACC utilisables et
interrogeables. Il n'est affilié ni à la DILA ni à aucun organisme public. Chaque annonce renvoie vers
sa source officielle depuis sa fiche.

**L'API BODACC est-elle gratuite ?**

Les points d'accès ouverts sont gratuits et sans clé. Des offres payantes existent pour les usages
intensifs — [voir les tarifs](https://bodacc.io/fr/tarifs).

**Quelle différence entre le BODACC et un annuaire d'entreprises ?**

Un annuaire vous donne l'identité d'une entreprise. Le BODACC vous donne son activité : ce qu'elle a
publié, quand, et ce que le tribunal a rendu public à son sujet. Les deux sont complémentaires :
BODACC.io porte aussi l'identité.

**Quelle est la fraîcheur des données ?**

Les annonces apparaissent le matin de leur parution. Les fiches d'entreprises sont mises à jour au fur
et à mesure des annonces.

**Combien d'enregistrements par appel ?**

Jusqu'à 500, avec `offset` pour la pagination. Le nombre d'appels sur les points d'accès ouverts n'est
pas limité.

**Puis-je l'utiliser en production ?**

Oui. L'API est documentée, versionnée et servie depuis Cloudflare. Une attribution vers
[bodacc.io](https://bodacc.io) est bienvenue.

**Quelles langues sont prises en charge ?**

Le site et sa documentation existent en 20 langues. L'API, elle, est neutre : ses adresses et ses
points d'accès sont les mêmes pour tous.

## 11. La documentation BODACC, par langue

Chaque dossier ci-dessous contient la documentation complète du BODACC dans sa langue : la référence
de l'API, la liste des URLs et les récapitulatifs quotidiens.

| # | Langue | Documentation | URLs | Données quotidiennes |
|---|---|---|---|---|
| 1 | العربية | [docs/ar/](docs/ar/README.md) | [URLLIST](docs/ar/URLLIST.md) | [recaps](docs/ar/recaps/README.md) |
| 2 | Deutsch | [docs/de/](docs/de/README.md) | [URLLIST](docs/de/URLLIST.md) | [recaps](docs/de/recaps/README.md) |
| 3 | English | [docs/en/](docs/en/README.md) | [URLLIST](docs/en/URLLIST.md) | [recaps](docs/en/recaps/README.md) |
| 4 | Español | [docs/es/](docs/es/README.md) | [URLLIST](docs/es/URLLIST.md) | [recaps](docs/es/recaps/README.md) |
| 5 | فارسی | [docs/fa/](docs/fa/README.md) | [URLLIST](docs/fa/URLLIST.md) | [recaps](docs/fa/recaps/README.md) |
| 6 | Français | [docs/fr/](docs/fr/README.md) | [URLLIST](docs/fr/URLLIST.md) | [recaps](docs/fr/recaps/README.md) |
| 7 | עברית | [docs/he/](docs/he/README.md) | [URLLIST](docs/he/URLLIST.md) | [recaps](docs/he/recaps/README.md) |
| 8 | हिन्दी | [docs/hi/](docs/hi/README.md) | [URLLIST](docs/hi/URLLIST.md) | [recaps](docs/hi/recaps/README.md) |
| 9 | Bahasa Indonesia | [docs/id/](docs/id/README.md) | [URLLIST](docs/id/URLLIST.md) | [recaps](docs/id/recaps/README.md) |
| 10 | Italiano | [docs/it/](docs/it/README.md) | [URLLIST](docs/it/URLLIST.md) | [recaps](docs/it/recaps/README.md) |
| 11 | 日本語 | [docs/ja/](docs/ja/README.md) | [URLLIST](docs/ja/URLLIST.md) | [recaps](docs/ja/recaps/README.md) |
| 12 | 한국어 | [docs/ko/](docs/ko/README.md) | [URLLIST](docs/ko/URLLIST.md) | [recaps](docs/ko/recaps/README.md) |
| 13 | Nederlands | [docs/nl/](docs/nl/README.md) | [URLLIST](docs/nl/URLLIST.md) | [recaps](docs/nl/recaps/README.md) |
| 14 | Polski | [docs/pl/](docs/pl/README.md) | [URLLIST](docs/pl/URLLIST.md) | [recaps](docs/pl/recaps/README.md) |
| 15 | Português | [docs/pt/](docs/pt/README.md) | [URLLIST](docs/pt/URLLIST.md) | [recaps](docs/pt/recaps/README.md) |
| 16 | Русский | [docs/ru/](docs/ru/README.md) | [URLLIST](docs/ru/URLLIST.md) | [recaps](docs/ru/recaps/README.md) |
| 17 | Türkçe | [docs/tr/](docs/tr/README.md) | [URLLIST](docs/tr/URLLIST.md) | [recaps](docs/tr/recaps/README.md) |
| 18 | Українська | [docs/uk/](docs/uk/README.md) | [URLLIST](docs/uk/URLLIST.md) | [recaps](docs/uk/recaps/README.md) |
| 19 | Tiếng Việt | [docs/vi/](docs/vi/README.md) | [URLLIST](docs/vi/URLLIST.md) | [recaps](docs/vi/recaps/README.md) |
| 20 | 中文 | [docs/zh/](docs/zh/README.md) | [URLLIST](docs/zh/URLLIST.md) | [recaps](docs/zh/recaps/README.md) |

## 12. Liens BODACC

- [BODACC.io](https://bodacc.io) — le site en direct
- [Recherche d'entreprises](https://bodacc.io/fr/entreprises) · [Annonces légales](https://bodacc.io/fr/annonces) · [Dirigeants](https://bodacc.io/fr/personnes)
- [Documentation de l'API](https://bodacc.io/fr/docs) · [Interface Swagger](https://bodacc.io/api/bodacc/docs)
- [Tarifs](https://bodacc.io/fr/tarifs) · [Technologie](https://bodacc.io/fr/technologie)
- [Liste des URLs (index multilingue)](URLLIST.md)

---

*Le BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) est la publication officielle des
annonces légales des entreprises françaises. BODACC.io est un service indépendant, non affilié à la
DILA.*
