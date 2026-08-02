# BODACC-api

🌍 [Français](README.fr.md) · [English](README.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [Italiano](README.it.md) · [Português](README.pt.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Русский](README.ru.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Bahasa Indonesia](README.id.md) · [Tiếng Việt](README.vi.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [中文](README.zh.md) · [العربية](README.ar.md) · [עברית](README.he.md) · [हिन्दी](README.hi.md) · [فارسی](README.fa.md)

**API hiện đại cho thông báo pháp lý của Pháp (BODACC). Tìm kiếm, khám phá và theo dõi các thông báo của Công báo chính thức: thành lập, sửa đổi, xóa đăng ký, thủ tục tập thể, nộp báo cáo tài chính... theo thời gian thực, bằng 20 ngôn ngữ, với biểu đồ doanh nghiệp, giám đốc và hợp đồng công.**

> 🌐 Live site : [bodacc.io](https://bodacc.io) · 📖 Swagger : [https://bodacc.io/api/bodacc/docs](https://bodacc.io/api/bodacc/docs)

---

## ✨ Highlights

| | |
|---|---|
| 🗂 **Hơn 6 triệu thông báo** | Lịch sử BODACC (2004 → nay, backfill đang tiến hành) |
| 🕸 **Biểu đồ tam giác** | Mỗi thông báo liên kết đến doanh nghiệp (SIREN) và người (giám đốc, thanh lý viên, kiểm toán...) |
| 📦 **Hợp đồng công (BOAMP)** | 1,7 triệu hợp đồng liên kết với doanh nghiệp theo tên (2015 → 2026) |
| ✨ **Dữ liệu được làm giàu** | Làm giàu có cấu trúc (regex + LLM): SIREN, NAF, địa chỉ, giám đốc trích xuất từ văn bản pháp lý |
| 🌍 **20 ngôn ngữ** | Giao diện và nội dung đã được dịch |
| 🤖 **Agent-ready** | 100/100 trên isitagentready (DNSSEC, DNS-AID, auth.md, WebMCP, llms.txt) |

---

## 🚀 Bắt đầu nhanh

Tất cả các tuyến đều có thể truy cập không cần khóa để đọc công khai:


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

## 📡 Các endpoint


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

## 📅 Làm thế nào để có dữ liệu BODACC mỗi ngày?

Dữ liệu được DILA công bố trên nền tảng Opendatasoft:


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

## 🧠 Biểu đồ: doanh nghiệp ↔ người ↔ thông báo

Đây là giá trị gia tăng của BODACC-api. Mỗi thông báo chứa văn bản thô (sổ đăng ký, người, thủ tục). Việc làm giàu cấu trúc văn bản này:

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

## 🛠 Công nghệ


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

## 🔓 Dữ liệu mở

Dữ liệu nguồn là công khai và miễn phí:


- **BODACC** : [data.gouv.fr / DILA](https://www.data.gouv.fr/fr/datasets/bodacc-annonces-commerciales/) (legal notices)
- **SIRENE** : [INSEE](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/) (29.8M legal units)
- **BOAMP** : [Opendatasoft / DILA](https://boamp-datadila.opendatasoft.com) (public contracts)


BODACC-api thêm cấu trúc và biểu đồ trên dữ liệu thô này: phân tích văn bản pháp lý, giải quyết danh tính (người), liên kết chéo doanh nghiệp ↔ thông báo ↔ hợp đồng.

---

## 🌐 Khám phá trang web trực tiếp:

[Trang chủ](https://bodacc.io/vi) · [Thông báo](https://bodacc.io/vi/thong-bao) · [Doanh nghiệp](https://bodacc.io/vi/cong-ty) · [Người](https://bodacc.io/vi/ca-nhan) · [Bảng giá](https://bodacc.io/vi/bang-gia) · [Công nghệ](https://bodacc.io/vi/cong-nghe)

---

## 📄 Giấy phép và liên hệ

- Licence : MIT (code) — data remains subject to its producers' licenses (DILA, INSEE)
- Site : [bodacc.io](https://bodacc.io)
- Issues & PR : welcome on this repository

---

*BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) là ấn phẩm chính thức về thông báo pháp lý của các công ty Pháp. Dự án này không trực thuộc DILA.*
