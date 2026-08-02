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
![Next.js 14](https://img.shields.io/badge/Next.js-14-000000?logo=nextdotjs&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Deploy-2496ED?logo=docker&logoColor=white)

![Annonces](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Annonces&color=blue)
![Entreprises](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Entreprises&color=green)
![Personnes](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Personnes&color=orange)
![Site bodacc.io](https://img.shields.io/badge/bodacc.io-Explorer-important?logo=internetexplorer&logoColor=white&style=for-the-badge)

</div>

**Nowoczesne API francuskich ogłoszeń prawnych (BODACC). Szukaj, przeglądaj i śledź ogłoszenia Dziennika Urzędowego: utworzenia, zmiany, wykreślenia, postępowania zbiorowe, depozyty sprawozdań finansowych... w czasie rzeczywistym, w 20 językach, z grafem firm, dyrektorów i zamówień publicznych.**

> 🌐 Live site : [bodacc.io](https://bodacc.io) · 📖 Swagger : [https://bodacc.io/api/bodacc/docs](https://bodacc.io/api/bodacc/docs)

---

## ✨ Highlights

| | |
|---|---|
| 🗂 **Ponad 6 milionów ogłoszeń** | Historia BODACC (2004 → dziś, backfill w toku) |
| 🕸 **Graf trójkątny** | Każde ogłoszenie jest powiązane z firmami (SIREN) i osobami (dyrektorzy, likwidatorzy, biegli...) |
| 📦 **Zamówienia publiczne (BOAMP)** | 1,7 mln zamówień powiązanych z firmami po nazwie (2015 → 2026) |
| ✨ **Wzbogacone dane** | Strukturalne wzbogacanie (regex + LLM): SIREN, NAF, adres, dyrektorzy wyodrębnieni z tekstu prawnego |
| 🌍 **20 języków** | Interfejs i treści są przetłumaczone |
| 🤖 **Agent-ready** | 100/100 na isitagentready (DNSSEC, DNS-AID, auth.md, WebMCP, llms.txt) |

---

## 🚀 Szybki start

Wszystkie trasy są dostępne bez klucza do publicznego odczytu:


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

## 📡 Endpointy


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


### NAF reference (INSEE)

| Méthode | Route | Description |
|---|---|---|
| `GET` | `/bodacc/naf` | Full NAF rev. 2 reference (732 sub-classes, 615 classes) — official INSEE labels |
| `GET` | `/bodacc/naf?q=commerce` | Search NAF by label (ILIKE) |
| `GET` | `/bodacc/naf?code=46.72Z` | One NAF code entry |

> 📄 Source: INSEE NAF rév. 2 file `int_courts_naf_rev_2.xls` (file dated 2008-07-01, still the current official reference — NAF rev. 2 nomenclature, 732 sub-classes). The same labels are joined into every company profile (`naf_libelle`).

---

## 📅 Jak codziennie uzyskać dane BODACC?

Dane są publikowane przez DILA na platformie Opendatasoft:


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

## 🧠 Graf: firmy ↔ osoby ↔ ogłoszenia

To jest wartość dodana BODACC-api. Każde ogłoszenie zawiera surowy tekst (rejestr, osoby, procedury). Wzbogacanie strukturyzuje ten tekst:

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

## 🛠 Technologie


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

## 🔓 Otwarte dane

Dane źródłowe są publiczne i bezpłatne:


- **BODACC** : [data.gouv.fr / DILA](https://www.data.gouv.fr/fr/datasets/bodacc-annonces-commerciales/) (legal notices)
- **SIRENE** : [INSEE](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/) (29.8M legal units)
- **BOAMP** : [Opendatasoft / DILA](https://boamp-datadila.opendatasoft.com) (public contracts)


BODACC-api dodaje strukturę i graf na tych surowych danych: parsowanie tekstów prawnych, rozwiązywanie tożsamości (osoby), powiązania krzyżowe firma ↔ ogłoszenie ↔ zamówienie.

---

## 🌐 Zobacz stronę na żywo:

[Strona główna](https://bodacc.io/pl) · [Ogłoszenia](https://bodacc.io/pl/ogloszenia) · [Firmy](https://bodacc.io/pl/firmy) · [Osoby](https://bodacc.io/pl/osoby) · [Cennik](https://bodacc.io/pl/cennik) · [Technologia](https://bodacc.io/pl/technologia)

---

## 📄 Licencja i kontakt

- Licence : MIT (code) — data remains subject to its producers' licenses (DILA, INSEE)
- Site : [bodacc.io](https://bodacc.io)
- Issues & PR : welcome on this repository

---

*BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) to oficjalna publikacja ogłoszeń prawnych francuskich firm. Ten projekt nie jest powiązany z DILA.*
