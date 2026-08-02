# BODACC-api

🌍 [Français](README.fr.md) · [English](../README.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [Italiano](README.it.md) · [Português](README.pt.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Русский](README.ru.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Bahasa Indonesia](README.id.md) · [Tiếng Việt](README.vi.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [中文](README.zh.md) · [العربية](README.ar.md) · [עברית](README.he.md) · [हिन्दी](README.hi.md) · [فارسی](README.fa.md)

**Fransız resmi ilanlarının (BODACC) modern API'si. Resmi Bülten ilanlarını arayın, keşfedin ve takip edin: kuruluşlar, değişiklikler, silinmeler, toplu işlemler, hesap depoları... gerçek zamanlı, 20 dilde, şirketler, yöneticiler ve kamu sözleşmeleri grafiğiyle.**

> 🌐 Live site : [bodacc.io](https://bodacc.io) · 📖 Swagger : [https://bodacc.io/api/bodacc/docs](https://bodacc.io/api/bodacc/docs)

---

## ✨ Highlights

| | |
|---|---|
| 🗂 **6 milyondan fazla ilan** | BODACC geçmişi (2004 → bugün, backfill devam ediyor) |
| 🕸 **Üçgen grafik** | Her ilan şirketleriyle (SIREN) ve kişilerle (yöneticiler, tasfiye memurları, denetçiler...) bağlantılıdır |
| 📦 **Kamu sözleşmeleri (BOAMP)** | 1,7M sözleşme adlarıyla şirketlere bağlı (2015 → 2026) |
| ✨ **Zenginleştirilmiş veriler** | Yapılandırılmış zenginleştirme (regex + LLM): SIREN, NAF, adres, yasal metinden çıkarılan yöneticiler |
| 🌍 **20 dil** | Arayüz ve içerikler çevrilmiştir |
| 🤖 **Agent-ready** | isitagentready'de 100/100 (DNSSEC, DNS-AID, auth.md, WebMCP, llms.txt) |

---

## 🚀 Hızlı başlangıç

Tüm rotalar herkese açık okuma için anahtarsız erişilebilir:


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

## 📡 Uç noktalar


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

## 📅 BODACC verileri her gün nasıl alınır?

Veriler DILA tarafından Opendatasoft platformunda yayınlanır:


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

## 🧠 Grafik: şirketler ↔ kişiler ↔ ilanlar

Bu BODACC-api'nin katma değeridir. Her ilan ham metin içerir (sicil, kişiler, prosedürler). Zenginleştirme bu metni yapılandırır:

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

## 🛠 Teknolojiler


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

## 🔓 Açık veri

Kaynak veriler herkese açık ve ücretsizdir:


- **BODACC** : [data.gouv.fr / DILA](https://www.data.gouv.fr/fr/datasets/bodacc-annonces-commerciales/) (legal notices)
- **SIRENE** : [INSEE](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/) (29.8M legal units)
- **BOAMP** : [Opendatasoft / DILA](https://boamp-datadila.opendatasoft.com) (public contracts)


BODACC-api bu ham verilerin üzerine yapıyı ve grafiği ekler: yasal metinlerin ayrıştırılması, kimlik çözümü (kişiler), şirket ↔ ilan ↔ sözleşme çapraz bağlantıları.

---

## 🌐 Canlı siteyi keşfedin:

[Ana sayfa](https://bodacc.io/tr) · [İlanlar](https://bodacc.io/tr/ilanlar) · [Şirketler](https://bodacc.io/tr/sirketler) · [Kişiler](https://bodacc.io/tr/kisiler) · [Fiyatlar](https://bodacc.io/tr/fiyatlar) · [Teknoloji](https://bodacc.io/tr/teknoloji)

---

## 📄 Lisans ve iletişim

- Licence : MIT (code) — data remains subject to its producers' licenses (DILA, INSEE)
- Site : [bodacc.io](https://bodacc.io)
- Issues & PR : welcome on this repository

---

*BODACC (Bulletin Officiel des Annonces Civiles et Commerciales), Fransız şirketlerinin resmi ilanlarının yayın organıdır. Bu proje DILA ile bağlantılı değildir.*
