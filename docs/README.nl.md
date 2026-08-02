# BODACC-api

🌍 [Français](README.fr.md) · [English](../README.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [Italiano](README.it.md) · [Português](README.pt.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Русский](README.ru.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Bahasa Indonesia](README.id.md) · [Tiếng Việt](README.vi.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [中文](README.zh.md) · [العربية](README.ar.md) · [עברית](README.he.md) · [हिन्दी](README.hi.md) · [فارسی](README.fa.md)

<div align="center">

**Python 3.12** ![Python](https://img.shields.io/badge/Python-3.12-3776AB?logo=python&logoColor=white)
**FastAPI** ![FastAPI](https://img.shields.io/badge/FastAPI-API-009688?logo=fastapi&logoColor=white)
**PostgreSQL 16** ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)
**Next.js 14** ![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=nextdotjs&logoColor=white)
**Docker** ![Docker](https://img.shields.io/badge/Docker-deploy-2496ED?logo=docker&logoColor=white)

![Annonces](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts&query=annonces&label=Annonces&color=blue)
![Entreprises](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts&query=entreprises&label=Entreprises&color=green)
![Personnes](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts&query=personnes&label=Personnes&color=orange)

</div>

**De moderne API voor Franse wettelijke bekendmakingen (BODACC). Zoek, verken en volg de aankondigingen van het Officiële Bulletin: oprichtingen, wijzigingen, doorhalingen, collectieve procedures, depots van jaarrekeningen... in realtime, in 20 talen, met een graaf van bedrijven, bestuurders en overheidsopdrachten.**

> 🌐 Live site : [bodacc.io](https://bodacc.io) · 📖 Swagger : [https://bodacc.io/api/bodacc/docs](https://bodacc.io/api/bodacc/docs)

---

## ✨ Highlights

| | |
|---|---|
| 🗂 **Meer dan 6 miljoen aankondigingen** | BODACC-geschiedenis (2004 → vandaag, backfill loopt) |
| 🕸 **Driehoeksgraaf** | Elke aankondiging is gekoppeld aan haar bedrijven (SIREN) en personen (bestuurders, vereffenaars, commissarissen...) |
| 📦 **Overheidsopdrachten (BOAMP)** | 1,7M opdrachten gekoppeld aan bedrijven op naam (2015 → 2026) |
| ✨ **Verrijkte data** | Gestructureerde verrijking (regex + LLM): SIREN, NAF, adres, bestuurders geëxtraheerd uit de juridische tekst |
| 🌍 **20 talen** | De interface en inhoud zijn vertaald |
| 🤖 **Agent-ready** | 100/100 op isitagentready (DNSSEC, DNS-AID, auth.md, WebMCP, llms.txt) |

---

## 🚀 Snelstart

Alle routes zijn toegankelijk zonder sleutel voor openbare leestoegang:


```bash
# Search a company by name
curl "https://bodacc.io/api/bodacc/annonces?q=rizom&limit=5"

# Notice detail (with company + people relations)
curl "https://bodacc.io/api/bodacc/annonces/A202601432266"

# Company profile (recent notices + directors + BOAMP contracts)
curl "https://bodacc.io/api/bodacc/entreprises/912969573"

# Global statistics
curl "https://bodacc.io/api/bodacc/stats"

# Daily volume (last 30 days)
curl "https://bodacc.io/api/bodacc/stats/daily30"
```


---

## 📡 De endpoints


### Annonces

| Méthode | Route | Description |
|---|---|---|
| `GET` | `/bodacc/annonces` | Search: `q` (name/SIREN), `famille`, `departement`, dates, pagination `limit`/`offset` |
| `GET` | `/bodacc/annonces/{id}` | Full detail with `raw_data` + enrichment + `relations` (linked companies and people) |
| `GET` | `/bodacc/enrichi/{id}` | Structured enriched version (siren, denomination, NAF, directors...) |
| `POST` | `/bodacc/enrichi/batch` | Batch enrichment |

### Companies & people

| Méthode | Route | Description |
|---|---|---|
| `GET` | `/bodacc/entreprises` | Company search (name, city, NAF, postal code) |
| `GET` | `/bodacc/entreprises/{siren}` | INSEE profile + `annonces_recentes`, `dirigeants`, `marches_publics`, `stats` |
| `GET` | `/bodacc/entreprises/by-slug/{slug}` | Profile by SEO slug |
| `GET` | `/bodacc/personnes/{id}` | Person profile: mandates (roles) + linked companies |

### Statistics

| Méthode | Route | Description |
|---|---|---|
| `GET` | `/bodacc/stats` | Totals, by family, by date |
| `GET` | `/bodacc/stats/daily` | Today's volume (by publication, department, family) |
| `GET` | `/bodacc/stats/daily30` | Last 30 days series |
| `GET` | `/bodacc/stats/counts` | Counters: notices, companies, people |
| `GET` | `/bodacc/graph/categories` | Distribution by category |

### Alerts & ingestion

| Méthode | Route | Description |
|---|---|---|
| `GET/POST/DELETE` | `/bodacc/alertes` | SIREN alerts (company tracking) |
| `POST` | `/bodacc/ingest?target_date=YYYY-MM-DD` | Trigger ingestion for a date |
| `POST` | `/bodacc/import` | Batch import (for backfill) |


---

## 📅 Hoe krijgt u elke dag BODACC-gegevens?

De gegevens worden gepubliceerd door de DILA op het Opendatasoft-platform:


The data is published by the **DILA** on the **Opendatasoft** platform:

```
Source : https://bodacc-datadila.opendatasoft.com/api/explore/v2.1
Dataset : annonces-commerciales (publications A/B/C)
```

**Publication rhythm** (observed on real data):
- 05:30 UTC : publications A/B (~25% of volume)
- 08:00-09:00 UTC : publication C (annual accounts) → full daily volume
- Notices carry publication date **D** but are published at **D+1** early morning

**The BODACC.io ingestion pipeline:**
1. `POST /bodacc/ingest?target_date=YYYY-MM-DD` → fetch via 210 sub-queries (3 publications × 8 departments × 10 families), each under 10,000 records
2. **Upsert by `id`** → idempotent (re-running creates no duplicates)
3. Daily cron at 05:30 UTC + monitoring every 15 min from 06:00 to 10:30 UTC (catches publication C)
4. Cross-check DB ↔ Opendatasoft (`total_count`)


---

## 🧠 De graaf: bedrijven ↔ personen ↔ aankondigingen

Dit is de toegevoegde waarde van BODACC-api. Elke aankondiging bevat ruwe tekst (register, personen, procedures). De verrijking structureert deze tekst:

```
Annonce (creation, insolvency proceedings, annual accounts...)
 ├── Company(ies) : SIREN, name, address, NAF, status
 └── Person(s) : name, first name, role (director, president, liquidator, auditor...)
      └── Mandates : all notices where the person appears
```

```
Company (SIREN)
 ├── Legal notices (full history)
 ├── Directors (individuals and companies)
 └── Public contracts won (buyer, subject, amount, date)
```

---


---

## 📊 Data state — live volumes (updated 2026-08-02)

| Dataset | Volume | Detail |
|---|---|---|
| 📰 Annonces BODACC | **6 159 881** | History 2004 → today (backfill in progress: 2023 + early 2024) |
| 🏢 Entreprises (SIRENE) | **29 805 853** | French legal units (INSEE) |
| 👤 Personnes extraites | **1 354+** | Directors, liquidators, auditors... (growing with enrichment) |
| 📦 Marchés publics (BOAMP) | **1 694 145** | Public contracts 2015 → 2026 |
| 🔗 Liens annonce → entreprise | **352 515+** | SIREN resolution from legal text |
| ✨ Annonces enrichies | **435 000+** | Structured extraction (regex, no LLM) — ~96% of all notices |

The badges above read the live counters from the API (`/bodacc/stats/counts`).

## 🛠 Technologieën


| Couche | Technologie |
|---|---|
| **API** | Python 3.12 · FastAPI · uvicorn · asyncpg |
| **Base de données** | PostgreSQL 16 (trigram, GiST KNN, JSONB indexes) |
| **Ingestion** | Asynchronous pipeline (httpx) + systemd cron |
| **Enrichissement** | Regex (Layer 2) + LLM fallback (DeepSeek) — ~96% structured without LLM |
| **Frontend** | Next.js 14 (App Router) · i18n 20 languages · Tailwind |
| **Infra** | Docker · Cloudflare (CDN, cache, DNSSEC) |
| **AI agents** | MCP server · DNS-AID · auth.md · llms.txt · selective robots.txt |


---

## 🔓 Open data

De brongegevens zijn openbaar en gratis:


- **BODACC** : [data.gouv.fr / DILA](https://www.data.gouv.fr/fr/datasets/bodacc-annonces-commerciales/) (legal notices)
- **SIRENE** : [INSEE](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/) (29.8M legal units)
- **BOAMP** : [Opendatasoft / DILA](https://boamp-datadila.opendatasoft.com) (public contracts)


BODACC-api voegt de structuur en de graaf toe bovenop deze ruwe gegevens: parsing van juridische teksten, identiteitsresolutie (personen), kruisverbanden bedrijf ↔ aankondiging ↔ opdracht.

---

## 🌐 Verken de live website:

[Home](https://bodacc.io/nl) · [Aankondigingen](https://bodacc.io/nl/aankondigingen) · [Bedrijven](https://bodacc.io/nl/bedrijven) · [Personen](https://bodacc.io/nl/personen) · [Prijzen](https://bodacc.io/nl/prijzen) · [Technologie](https://bodacc.io/nl/technologie)

---

## 📄 Licentie en contact

- Licence : MIT (code) — data remains subject to its producers' licenses (DILA, INSEE)
- Site : [bodacc.io](https://bodacc.io)
- Issues & PR : welcome on this repository

---

*BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) is de officiële publicatie van wettelijke bekendmakingen van Franse bedrijven. Dit project is niet verbonden aan de DILA.*
