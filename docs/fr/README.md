<div align="center">

<pre>
             ____   ____  _____          _____ _____               _
            |  _ \ / __ \|  __ \   /\   / ____/ ____|             (_)
            | |_) | |  | | |  | | /  \ | |   | |        __ _ _ __  _
            |  _ <| |  | | |  | |/ /\ \| |   | |       / _` | '_ \| |
            | |_) | |__| | |__| / ____ \ |___| |____  | (_| | |_) | |
            |____/ \____/|_____/_/    \_\_____\_____|  \__,_| .__/|_|
                                                             | |
                                                             |_|
</pre>
</div>

# 🌐 [bodacc.io](https://bodacc.io)

🌍 [Français](../fr/README.md) · [English](../en/README.md) · [Español](../es/README.md) · [Deutsch](../de/README.md) · [Italiano](../it/README.md) · [Português](../pt/README.md) · [Nederlands](../nl/README.md) · [Polski](../pl/README.md) · [Русский](../ru/README.md) · [Türkçe](../tr/README.md) · [Українська](../uk/README.md) · [Bahasa Indonesia](../id/README.md) · [Tiếng Việt](../vi/README.md) · [日本語](../ja/README.md) · [한국어](../ko/README.md) · [中文](../zh/README.md) · [العربية](../ar/README.md) · [עברית](../he/README.md) · [हिन्दी](../hi/README.md) · [فارسی](../fa/README.md)
> 📰 [Récapitulatifs](recaps/README.md) · 🏠 [Dans les coulisses de BODACC.io](coulisses/COULISSES.md)

<div align="center">

![Python 3.12](https://img.shields.io/badge/Python-3.12-3776AB?logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-API-009688?logo=fastapi&logoColor=white)
![PostgreSQL 16](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)

![Annonces](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Annonces&color=blue)
![Entreprises](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Entreprises&color=green)
![Personnes](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Personnes&color=orange)
![Site bodacc.io](https://img.shields.io/badge/bodacc.io-Explorer-important?logo=internetexplorer&logoColor=white&style=for-the-badge)

</div>

**L'API qui transforme les annonces légales françaises en données structurées, reliées et exploitables — en temps réel.**

Le BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) est la publication officielle qui retrace la vie juridique des entreprises françaises : créations, modifications, radiations, procédures collectives, ventes, dépôts de comptes. Ces textes sont publics, mais rester à l'état de documents bruts : ils ne sont ni structurés, ni reliés entre eux, ni facilement interrogables.

**BODACC-api les rend exploitables.** Chaque annonce est automatiquement analysée et transformée en données structurées (SIREN, raison sociale, adresse, NAF, dirigeants, montants...), puis reliée à son entreprise et aux personnes qui y apparaissent. Résultat : un graphe complet de la vie économique française, interrogeable en une seule requête HTTP.

> 🌐 Site : [bodacc.io](https://bodacc.io) · 📖 Swagger : [https://bodacc.io/api/bodacc/docs](https://bodacc.io/api/bodacc/docs) · 💶 [Tarifs](https://bodacc.io/fr/tarifs)

---

## ✨ Pourquoi BODACC-api ?

| | |
|---|---|
| 🗂 **Tout l'historique, depuis 2004** | Des millions d'annonces en base, couverture complète — pas une fenêtre glissante |
| ⚡ **Temps réel** | Les annonces du jour sont disponibles chaque matin, avant l'ouverture des bureaux |
| 🕸 **Un graphe, pas des fichiers** | Annonce → entreprise (SIREN) → dirigeants → mandats → marchés publics : tout est relié et interrogable en une requête |
| ✨ **Du texte brut aux données structurées** | SIREN, NAF, adresse, dirigeants, procédures... extraits automatiquement de chaque texte juridique |
| 🌍 **20 langues** | L'interface et les contenus sont traduits — vos équipes et vos clients parlent leur langue |
| 🤖 **Agent-ready** | 100/100 à l'audit isitagentready (DNSSEC, DNS-AID, auth.md, WebMCP, llms.txt) |
| 🚪 **Zéro friction pour tester** | Tous les endpoints de lecture sont accessibles sans clé — vous évaluez avant de payer |

---

## 🏭 Notre valeur ajoutée : le pipeline

Ce qui fait la différence, ce n'est pas la donnée brute (elle est publique), c'est ce que nous en faisons — chaque jour, automatiquement :

**1. Une ingestion fiable et complète.** Chaque matin avant 09:00, les nouvelles annonces publiées par la DILA sont intégrées à notre base. L'historique complet remonte à 2004, bien au-delà de ce qu'offre la consultation publique. Ré-exécuter une ingestion ne crée aucun doublon : nos données sont vérifiées et cohérentes en permanence.

**2. Un enrichissement intelligent.** Chaque annonce est un texte juridique — notre moteur d'extraction hybride (règles métier + IA) le transforme en données structurées : numéro SIREN, raison sociale, adresse, code NAF, dirigeants, mandats, montants, procédures. Ce qui demande des heures de lecture humaine devient des champs JSON interrogables.

**3. Un graphe relationnel.** Une annonce de procédure collective ne vaut que si l'on sait à quelle entreprise elle se rattache, et qui en est le dirigeant. Notre moteur de résolution relie chaque annonce à son entreprise (SIREN), chaque personne à ses mandats, chaque marché public à son attributaire. Vous interrogez la vie économique française comme une base de données — pas comme un tas de PDF.

**4. Une diffusion temps réel.** Dès qu'une annonce est publiée, elle est disponible via l'API, avec ses relations et son enrichissement. Pas de fichiers à télécharger, pas d'ETL à maintenir : une requête HTTP suffit.

---

## ⚖️ Comparatif : où nous nous situons

| | **Site officiel (bodacc.fr)** | **Pappers** | **BODACC.io** |
|---|---|---|---|
| **Historique** | Depuis 2008 uniquement | Historique commercial selon abonnement | **Complet depuis 2004** |
| **API** | ❌ Aucune | API réservée aux offres supérieures | ✅ **API REST documentée, sans clé en lecture** |
| **Données structurées** | ❌ Consultation PDF | ✅ Profils enrichis | ✅ **Annonces + graphe entreprises/personnes/marchés** |
| **Temps réel** | Publication papier consultable en ligne | Actualisation quotidienne | ✅ **Chaque matin avant 09:00** |
| **Prix** | Gratuit, mais limité | À partir de **29,90 €/mo** pour l'accès de base | **Forfaits accessibles, dès la gratuité pour explorer** |
| **Public** | Grand public | Professionnels (conformité, veille) | **Développeurs, fintech, legaltech, data teams** |

**Points forts du site officiel** : gratuit, fiable, officiel. **Points faibles** : pas d'API, historique limité à 2008, aucune donnée structurée — vous restez dans les PDF.

**Points forts de Pappers** : interface très soignée, agrégation INSEE + INPI + BODACC, veille intégrée. **Points faibles** : le prix (29,90 €/mo pour l'accès de base, l'API et l'historique complet sont plus chers), une solution orientée consultation plutôt que données exploitables.

**Notre position** : **tout l'historique depuis 2004, plus vite que sur le site officiel — et à un tarif inférieur à celui de Pappers.** Pensé pour ceux qui veulent brancher la donnée dans leurs propres outils, pas pour ceux qui veulent un écran en plus.

> 💶 Voir les forfaits : [bodacc.io/fr/tarifs](https://bodacc.io/fr/tarifs) — Gratuit · Pro · Enterprise · LIFE

---

## 🚀 Essayer en 30 secondes

Tous les endpoints de lecture sont accessibles **sans clé** :

```bash
# Rechercher une entreprise par son nom
curl "https://bodacc.io/api/bodacc/annonces?q=rizom&limit=5"

# Détail d'une annonce (avec ses relations : entreprises + personnes)
curl "https://bodacc.io/api/bodacc/annonces/A202601432266"

# Profil entreprise (annonces récentes + dirigeants + marchés publics)
curl "https://bodacc.io/api/bodacc/entreprises/912969573"

# Statistiques globales
curl "https://bodacc.io/api/bodacc/stats"

# Volume quotidien (30 derniers jours)
curl "https://bodacc.io/api/bodacc/stats/daily30"
```

---

## 📡 Les endpoints

### Annonces

| Méthode | Route | Description |
|---|---|---|
| `GET` | `/bodacc/annonces` | Recherche : `q` (nom/SIREN), `famille`, `departement`, dates, pagination `limit`/`offset` |
| `GET` | `/bodacc/annonces/{id}` | Détail complet : `raw_data` + enrichissement + `relations` (entreprises et personnes liées) |
| `GET` | `/bodacc/enrichi/{id}` | Version structurée (siren, dénomination, NAF, dirigeants...) |
| `POST` | `/bodacc/enrichi/batch` | Enrichissement par lot |

### Entreprises & personnes

| Méthode | Route | Description |
|---|---|---|
| `GET` | `/bodacc/entreprises` | Recherche d'entreprise (nom, ville, NAF, code postal) |
| `GET` | `/bodacc/entreprises/{siren}` | Profil INSEE + `annonces_recentes`, `dirigeants`, `marches_publics`, `stats` |
| `GET` | `/bodacc/entreprises/by-slug/{slug}` | Profil par slug SEO |
| `GET` | `/bodacc/personnes/{id}` | Profil personne : mandats (rôles) + entreprises liées |

### Statistiques

| Méthode | Route | Description |
|---|---|---|
| `GET` | `/bodacc/stats` | Totaux, par famille, par date |
| `GET` | `/bodacc/stats/daily` | Volume du jour (par parution, département, famille) |
| `GET` | `/bodacc/stats/daily30` | Série des 30 derniers jours |
| `GET` | `/bodacc/stats/counts` | Compteurs : annonces, entreprises, personnes |
| `GET` | `/bodacc/graph/categories` | Répartition par catégorie |

### Alertes & intégrations

| Méthode | Route | Description |
|---|---|---|
| `GET/POST/DELETE` | `/bodacc/alertes` | Alertes par SIREN (suivi d'entreprise) |
| `POST` | `/bodacc/ingest?target_date=YYYY-MM-DD` | Déclencher une ingestion pour une date |
| `POST` | `/bodacc/import` | Import par lot (backfill) |

### Référentiel NAF (INSEE)

| Méthode | Route | Description |
|---|---|---|
| `GET` | `/bodacc/naf` | Référentiel NAF rév. 2 complet (732 sous-classes, 615 classes) — libellés officiels INSEE |
| `GET` | `/bodacc/naf?q=commerce` | Recherche NAF par libellé |
| `GET` | `/bodacc/naf?code=46.72Z` | Fiche d'un code NAF |

---

## 📊 Les données

Les badges en haut de page sont des **compteurs en temps réel** : annonces BODACC, entreprises SIRENE et personnes extraites — ils évoluent au fil de la consolidation de l'historique et de l'enrichissement.

Repères stables :

- 📰 **Annonces BODACC** : historique complet depuis 2004, mis à jour chaque matin avant 09:00
- 🏢 **Entreprises (SIRENE)** : 29,8 M d'unités légales françaises (registre INSEE)
- 👤 **Personnes extraites** : dirigeants, liquidateurs, commissaires aux comptes... en consolidation continue
- 📦 **Marchés publics (BOAMP)** : 1,69 M de contrats publics 2015 → 2026

---

## 🛠 Technologie

| Couche | Technologie |
|---|---|
| **API** | Python · FastAPI · PostgreSQL 16 |
| **Données** | Indexation trigram, recherche plein texte, JSONB |
| **Ingestion** | Pipeline automatisé, intégration quotidienne, idempotent |
| **Enrichissement** | Extraction hybride (règles métier + IA) |
| **Frontend** | Next.js · i18n 20 langues |
| **Infra** | Docker · Cloudflare (CDN, cache, DNSSEC) |
| **Agents IA** | Serveur MCP · DNS-AID · auth.md · llms.txt |

---

## 🔓 Open data

Les données sources sont publiques et gratuites :

- **BODACC** : [data.gouv.fr / DILA](https://www.data.gouv.fr/fr/datasets/bodacc-annonces-commerciales/) (annonces légales)
- **SIRENE** : [INSEE](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/) (29,8 M unités légales)
- **BOAMP** : [Opendatasoft / DILA](https://boamp-datadila.opendatasoft.com) (marchés publics)
- **JAL (Journaux d'Annonces Légales)** : [annoncelegale.com](https://www.annoncelegale.com/) — 598 journaux habilités

**BODACC-api ajoute la structure et le graphe sur cette donnée brute** : analyse des textes juridiques, résolution d'identité (personnes), liens entreprise ↔ annonce ↔ contrat.

---

## 🌐 Explorer le site

[Accueil](https://bodacc.io/fr) · [Annonces](https://bodacc.io/fr/annonces) · [Entreprises](https://bodacc.io/fr/entreprises) · [Personnes](https://bodacc.io/fr/personnes) · [Tarifs](https://bodacc.io/fr/tarifs) · [Technologie](https://bodacc.io/fr/technologie)

---

## 📄 Licence & contact

- Licence : MIT (code) — les données restent soumises aux licences de leurs producteurs (DILA, INSEE)
- Site : [bodacc.io](https://bodacc.io)
- Issues & PR : bienvenues sur ce dépôt

---

*Le BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) est la publication officielle des annonces légales des entreprises françaises. Ce projet n'est pas affilié à la DILA.*
