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

🌍 [Français](docs/README.fr.md) · [English](README.md) · [Español](docs/README.es.md) · [Deutsch](docs/README.de.md) · [Italiano](docs/README.it.md) · [Português](docs/README.pt.md) · [Nederlands](docs/README.nl.md) · [Polski](docs/README.pl.md) · [Русский](docs/README.ru.md) · [Türkçe](docs/README.tr.md) · [Українська](docs/README.uk.md) · [Bahasa Indonesia](docs/README.id.md) · [Tiếng Việt](docs/README.vi.md) · [日本語](docs/README.ja.md) · [한국어](docs/README.ko.md) · [中文](docs/README.zh.md) · [العربية](docs/README.ar.md) · [עברית](docs/README.he.md) · [हिन्दी](docs/README.hi.md) · [فارسی](docs/README.fa.md)

<div align="center">

![Python 3.12](https://img.shields.io/badge/Python-3.12-3776AB?logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-API-009688?logo=fastapi&logoColor=white)
![PostgreSQL 16](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)

![Annonces](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Annonces&color=blue)
![Entreprises](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Entreprises&color=green)
![Personnes](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Personnes&color=orange)
![Site bodacc.io](https://img.shields.io/badge/bodacc.io-Explorer-important?logo=internetexplorer&logoColor=white&style=for-the-badge)

</div>

**The API that turns French legal notices into structured, linked, queryable data — in real time.**

BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) is the official publication tracking the legal life of French companies: creations, modifications, deregistrations, insolvency proceedings, sales, annual accounts. These texts are public — but they remain raw documents: unstructured, unlinked, and hard to query.

**BODACC-api makes them usable.** Every notice is automatically analyzed and transformed into structured data (SIREN, company name, address, NAF code, directors, amounts...), then linked to its company and the people who appear in it. The result: a complete graph of the French economy, queryable with a single HTTP request.

> 🌐 Website: [bodacc.io](https://bodacc.io) · 📖 Swagger: [https://bodacc.io/api/bodacc/docs](https://bodacc.io/api/bodacc/docs) · 💶 [Pricing](https://bodacc.io/en/pricing)

---

## ✨ Why BODACC-api?

| | |
|---|---|
| 🗂 **Full history, back to 2004** | Millions of notices in the database, complete coverage — not a rolling window |
| ⚡ **Real time** | The day's notices are available every morning, before offices open |
| 🕸 **A graph, not files** | Notice → company (SIREN) → directors → mandates → public contracts: everything linked, queryable in one request |
| ✨ **From raw text to structured data** | SIREN, NAF, address, directors, proceedings... extracted automatically from every legal text |
| 🌍 **20 languages** | The interface and content are translated — your teams and clients speak their own language |
| 🤖 **Agent-ready** | 100/100 on the isitagentready audit (DNSSEC, DNS-AID, auth.md, WebMCP, llms.txt) |
| 🚪 **Zero friction to test** | All read endpoints are accessible without a key — evaluate before you pay |

---

## 🏭 Our value: the pipeline

The data itself is public — what makes the difference is what we do with it, automatically, every day:

**1. Reliable, complete ingestion.** Every morning before 09:00, the new notices published by the DILA are integrated into our database. Full history goes back to 2004 — well beyond what public consultation offers. Re-running an ingestion creates no duplicates: our data is continuously verified and consistent.

**2. Intelligent enrichment.** Each notice is a legal text — our hybrid extraction engine (business rules + AI) turns it into structured data: SIREN number, company name, address, NAF code, directors, mandates, amounts, proceedings. What takes hours of human reading becomes queryable JSON fields.

**3. A relational graph.** A notice of insolvency proceedings is only valuable if you know which company it concerns, and who its director is. Our resolution engine links every notice to its company (SIREN), every person to their mandates, every public contract to its winner. You query the French economy like a database — not like a pile of PDFs.

**4. Real-time delivery.** As soon as a notice is published, it is available through the API with its relations and enrichment. No files to download, no ETL to maintain: a single HTTP request is enough.

---

## ⚖️ Comparison: where we stand

| | **Official website (bodacc.fr)** | **Pappers** | **BODACC.io** |
|---|---|---|---|
| **History** | From 2008 only | Commercial history depending on plan | **Complete since 2004** |
| **API** | ❌ None | API reserved for higher plans | ✅ **Documented REST API, no key for reads** |
| **Structured data** | ❌ PDF consultation | ✅ Enriched profiles | ✅ **Notices + companies/people/contracts graph** |
| **Real time** | Paper publication viewable online | Daily updates | ✅ **Every morning before 09:00** |
| **Price** | Free, but limited | From **€29.90/month** for basic access | **Affordable plans, free to explore** |
| **Audience** | General public | Professionals (compliance, monitoring) | **Developers, fintech, legaltech, data teams** |

**Official website strengths**: free, reliable, official. **Weaknesses**: no API, history limited to 2008, no structured data — you stay in the PDFs.

**Pappers strengths**: polished interface, INSEE + INPI + BODACC aggregation, built-in monitoring. **Weaknesses**: the price (€29.90/month for basic access, API and full history cost more), a consultation-oriented product rather than machine-readable data.

**Our position**: **full history since 2004, faster than the official website — at a lower price than Pappers.** Built for teams that want to plug the data into their own tools, not for those who want one more screen.

> 💶 See the plans: [bodacc.io/en/pricing](https://bodacc.io/en/pricing) — Free · Pro · Enterprise · LIFE

---

## 🚀 Try it in 30 seconds

All read endpoints are accessible **without a key**:

```bash
# Search a company by name
curl "https://bodacc.io/api/bodacc/annonces?q=rizom&limit=5"

# Notice detail (with its relations: companies + people)
curl "https://bodacc.io/api/bodacc/annonces/A202601432266"

# Company profile (recent notices + directors + public contracts)
curl "https://bodacc.io/api/bodacc/entreprises/912969573"

# Global statistics
curl "https://bodacc.io/api/bodacc/stats"

# Daily volume (last 30 days)
curl "https://bodacc.io/api/bodacc/stats/daily30"
```

---

## 📡 Endpoints

### Notices

| Method | Route | Description |
|---|---|---|
| `GET` | `/bodacc/annonces` | Search: `q` (name/SIREN), `famille`, `departement`, dates, `limit`/`offset` pagination |
| `GET` | `/bodacc/annonces/{id}` | Full detail: `raw_data` + enrichment + `relations` (linked companies and people) |
| `GET` | `/bodacc/enrichi/{id}` | Structured version (siren, denomination, NAF, directors...) |
| `POST` | `/bodacc/enrichi/batch` | Batch enrichment |

### Companies & people

| Method | Route | Description |
|---|---|---|
| `GET` | `/bodacc/entreprises` | Company search (name, city, NAF, postal code) |
| `GET` | `/bodacc/entreprises/{siren}` | INSEE profile + `annonces_recentes`, `dirigeants`, `marches_publics`, `stats` |
| `GET` | `/bodacc/entreprises/by-slug/{slug}` | Profile by SEO slug |
| `GET` | `/bodacc/personnes/{id}` | Person profile: mandates (roles) + linked companies |

### Statistics

| Method | Route | Description |
|---|---|---|
| `GET` | `/bodacc/stats` | Totals, by family, by date |
| `GET` | `/bodacc/stats/daily` | Today's volume (by publication, department, family) |
| `GET` | `/bodacc/stats/daily30` | Last 30 days series |
| `GET` | `/bodacc/stats/counts` | Counters: notices, companies, people |
| `GET` | `/bodacc/graph/categories` | Distribution by category |

### Alerts & integrations

| Method | Route | Description |
|---|---|---|
| `GET/POST/DELETE` | `/bodacc/alertes` | SIREN alerts (company tracking) |
| `POST` | `/bodacc/ingest?target_date=YYYY-MM-DD` | Trigger ingestion for a date |
| `POST` | `/bodacc/import` | Batch import (backfill) |

### NAF reference (INSEE)

| Method | Route | Description |
|---|---|---|
| `GET` | `/bodacc/naf` | Full NAF rev. 2 reference (732 sub-classes, 615 classes) — official INSEE labels |
| `GET` | `/bodacc/naf?q=commerce` | Search NAF by label |
| `GET` | `/bodacc/naf?code=46.72Z` | One NAF code entry |

---

## 📊 The data

The badges at the top of this page are **real-time counters**: BODACC notices, SIRENE companies and extracted people — they evolve as the history is consolidated and enrichment grows.

Stable reference points:

- 📰 **BODACC notices**: full history since 2004, updated every morning before 09:00
- 🏢 **Companies (SIRENE)**: 29.8M French legal units (INSEE registry)
- 👤 **Extracted people**: directors, liquidators, statutory auditors... continuously consolidated
- 📦 **Public contracts (BOAMP)**: 1.69M contracts 2015 → 2026

---

## 🛠 Technology

| Layer | Technology |
|---|---|
| **API** | Python · FastAPI · PostgreSQL 16 |
| **Data** | Trigram indexing, full-text search, JSONB |
| **Ingestion** | Automated pipeline, daily integration, idempotent |
| **Enrichment** | Hybrid extraction (business rules + AI) |
| **Frontend** | Next.js · i18n 20 languages |
| **Infra** | Docker · Cloudflare (CDN, cache, DNSSEC) |
| **AI agents** | MCP server · DNS-AID · auth.md · llms.txt |

---

## 🔓 Open data

The source data is public and free:

- **BODACC**: [data.gouv.fr / DILA](https://www.data.gouv.fr/fr/datasets/bodacc-annonces-commerciales/) (legal notices)
- **SIRENE**: [INSEE](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/) (29.8M legal units)
- **BOAMP**: [Opendatasoft / DILA](https://boamp-datadila.opendatasoft.com) (public contracts)
- **JAL (Journaux d'Annonces Légales)**: [annoncelegale.com](https://www.annoncelegale.com/) — 598 authorized legal-notice newspapers

**BODACC-api adds structure and the graph on top of this raw data**: legal text analysis, identity resolution (people), company ↔ notice ↔ contract links.

---

## 🌐 Explore the live site

[Home](https://bodacc.io/en) · [Notices](https://bodacc.io/en/notices) · [Companies](https://bodacc.io/en/companies) · [People](https://bodacc.io/en/people) · [Pricing](https://bodacc.io/en/pricing) · [Technology](https://bodacc.io/en/technology)

---

## 📄 License & contact

- License: MIT (code) — data remains subject to its producers' licenses (DILA, INSEE)
- Website: [bodacc.io](https://bodacc.io)
- Issues & PR: welcome on this repository

---

*BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) is the official publication of legal notices of French companies. This project is not affiliated with the DILA.*
