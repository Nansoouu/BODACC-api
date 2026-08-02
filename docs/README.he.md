# BODACC-api

🌍 [Français](README.fr.md) · [English](../README.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [Italiano](README.it.md) · [Português](README.pt.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Русский](README.ru.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Bahasa Indonesia](README.id.md) · [Tiếng Việt](README.vi.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [中文](README.zh.md) · [العربية](README.ar.md) · [עברית](README.he.md) · [हिन्दी](README.hi.md) · [فارسی](README.fa.md)

**ה-API המודרני להודעות משפטיות צרפתיות (BODACC). חפשו, חקרו ועקבו אחר ההודעות של העלון הרשמי: הקמות, שינויים, מחיקות, הליכים קיבוציים, הפקדות דוחות... בזמן אמת, ב-20 שפות, עם גרף של חברות, מנהלים וחוזים ציבוריים.**

> 🌐 Live site : [bodacc.io](https://bodacc.io) · 📖 Swagger : [https://bodacc.io/api/bodacc/docs](https://bodacc.io/api/bodacc/docs)

---

## ✨ Highlights

| | |
|---|---|
| 🗂 **יותר מ-6 מיליון הודעות** | היסטוריית BODACC (2004 ← היום, מילוי רקע מתבצע) |
| 🕸 **גרף משולש** | כל הודעה מקושרת לחברות שלה (SIREN) ולאנשים (מנהלים, מפרקים, רואי חשבון...) |
| 📦 **חוזים ציבוריים (BOAMP)** | 1.7 מיליון חוזים מקושרים לחברות בשם (2015 ← 2026) |
| ✨ **נתונים מועשרים** | העשרה מובנית (regex + LLM): SIREN, NAF, כתובת, מנהלים שחולצו מהטקסט המשפטי |
| 🌍 **20 שפות** | הממשק והתוכן מתורגמים |
| 🤖 **Agent-ready** | 100/100 ב-isitagentready (DNSSEC, DNS-AID, auth.md, WebMCP, llms.txt) |

---

## 🚀 התחלה מהירה

כל המסלולים נגישים ללא מפתח לקריאה ציבורית:


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

## 📡 נקודות הקצה


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

## 📅 איך מקבלים נתוני BODACC כל יום?

הנתונים מתפרסמים על ידי DILA בפלטפורמת Opendatasoft:


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

## 🧠 הגרף: חברות ↔ אנשים ↔ הודעות

זו התוספת של BODACC-api. כל הודעה מכילה טקסט גולמי (מרשם, אנשים, הליכים). ההעשרה מבנה את הטקסט הזה:

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

## 🛠 טכנולוגיות


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

## 🔓 נתונים פתוחים

נתוני המקור הם ציבוריים וחינמיים:


- **BODACC** : [data.gouv.fr / DILA](https://www.data.gouv.fr/fr/datasets/bodacc-annonces-commerciales/) (legal notices)
- **SIRENE** : [INSEE](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/) (29.8M legal units)
- **BOAMP** : [Opendatasoft / DILA](https://boamp-datadila.opendatasoft.com) (public contracts)


BODACC-api מוסיף את המבנה והגרף מעל הנתונים הגולמיים: ניתוח טקסטים משפטיים, פתרון זהות (אנשים), קישורים צולבים חברה ↔ הודעה ↔ חוזה.

---

## 🌐 חקרו את האתר החי:

[בית](https://bodacc.io/he) · [הודעות](https://bodacc.io/he/odaot) · [חברות](https://bodacc.io/he/khavarot) · [אנשים](https://bodacc.io/he/anashim) · [מחירים](https://bodacc.io/he/mehirim) · [טכנולוגיה](https://bodacc.io/he/tehnologia)

---

## 📄 רישיון ויצירת קשר

- Licence : MIT (code) — data remains subject to its producers' licenses (DILA, INSEE)
- Site : [bodacc.io](https://bodacc.io)
- Issues & PR : welcome on this repository

---

*BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) הוא הפרסום הרשמי של ההודעות המשפטיות של חברות צרפתיות. פרויקט זה אינו מזוהה עם DILA.*
