<div align="center">

# BODACC.io : the BODACC API for French legal notices and company data

**Every French company filing, in real time.** Incorporations, amendments, accounts filings,
insolvency proceedings, sales, strike-offs — every BODACC notice, linked to its company, its
directors and its official source. Free and open, in 20 languages.

[**bodacc.io**](https://bodacc.io) · [API documentation](https://bodacc.io/fr/docs) · [Swagger](https://bodacc.io/api/bodacc/docs) · [RSS](https://bodacc.io/rss.xml)

</div>

## 1. Live BODACC data

| BODACC dataset | Records | Live |
|---|---|---|
| Notices | 51 043 403 | ![Notices](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=notices&color=blue) |
| Companies | 30 032 566 | ![Companies](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=companies&color=green) |
| People | 4 935 692 | ![People](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=people&color=orange) |
| Contracts (BOAMP) | 1 716 163 | ![Contracts](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=boamp&label=contracts&color=purple) |

Those figures are not copy-pasted: they are **served live by the BODACC API itself**, on
[`/api/bodacc/stats/counts-formatted`](https://bodacc.io/api/bodacc/stats/counts-formatted).
Check them yourself, then check them again tomorrow.

**Today** (31 October 2026): **21 514 notices** — most common family: Dépôts des comptes (10841).

| BODACC family | Notices today |
|---|---|
| Accounts filings | 2 306 |
| Incorporations | 1 415 |
| Amendments | 1 193 |
| Strike-offs | 500 |
| Insolvency proceedings | 323 |
| Registrations | 118 |
| Sales and transfers | 65 |

## 2. What the BODACC API gives you

The BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) is the official journal of French
corporate life. Every incorporation, every accounts filing, every insolvency, every sale is published
there by law. BODACC.io turns that journal into a database you can query.

**Most company databases give you a snapshot. The BODACC API gives you the movement.**

A directory tells you a company exists: its name, its address, its registration number. The BODACC
tells you **what the company just did**, and when. That difference is the whole point:

| | Company directories | BODACC.io |
|---|---|---|
| What you get | a frozen identity record | dated events |
| Freshness | refreshed quarterly | published the same morning |
| Insolvency | a status flag | the proceeding, its nature and its date |
| Accounts | a boolean "filed" | each filing, with its closing date |
| Officers | a name | every mandate, with its companies |
| Source | a copy | the official notice and its PDF |

## 3. BODACC legal notices, in detail

Every notice carries 23 fields. Here is a real one, exactly as the BODACC API returns it:

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

Each notice links to **its full page on bodacc.io**, where the official source and its PDF are one
click away.

The seven BODACC families, with the French term you will see in the data:

| BODACC family | In the data | What it means |
|---|---|---|
| Incorporations | `creation` | a new company is registered |
| Amendments | `modification` | statutes, management, address, capital change |
| Accounts filings | `dpc` | annual accounts filed at the court registry |
| Insolvency proceedings | `collective` | receivership, liquidation, recovery |
| Sales and transfers | `vente` | a business is sold or transferred |
| Strike-offs | `radiation` | the company is removed from the register |
| Registrations | `immatriculation` | registration at the trade register |

## 4. BODACC company records

Each notice points to the company behind it. The BODACC API exposes those companies with the
identity, the activity and the accounting history:

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

Beyond the identity: the activity code (NAF), the legal form, the administrative status, **the date of
the last accounts filing, the last closing date and the number of days since**, plus the labels a
company may carry — social economy, bio, RGE, Qualiopi.

## 5. BODACC directors and officers

Behind every company, the people who run it. The BODACC API lists **4.9 million directors, officers,
liquidators and auditors**, each with:

- their mandates, company by company, with the period involved
- their other companies, so you can follow a person across a career
- the notices that concern them

That is what turns a register into a graph: a company, its officers, and the companies those officers
also run. One endpoint exposes it directly.

## 6. The BODACC API

REST, JSON, no key required on open endpoints, up to 500 records per call, paginated by `offset`.

```bash
# The latest BODACC notices (always the freshest first)
curl "https://bodacc.io/api/bodacc/annonces?limit=100"

# A single notice, with its companies, its officers and its PDF
curl "https://bodacc.io/api/bodacc/annonces/C202601972306-depot-comptes-988208435-141026-holding-biiz"

# A company by SIREN
curl "https://bodacc.io/api/bodacc/entreprises/552081317"

# Every BODACC notice concerning that company
curl "https://bodacc.io/api/bodacc/entreprises/552081317/annonces"

# The company graph: officers and their other companies
curl "https://bodacc.io/api/bodacc/entreprises/552081317/graphe"

# Search by name, city, department, activity code or date range
curl "https://bodacc.io/api/bodacc/entreprises?q=eiffage&departement=75"
curl "https://bodacc.io/api/bodacc/annonces?famille=collective&date_debut=2026-10-01"
```

Full reference: [bodacc.io/fr/docs](https://bodacc.io/fr/docs) — endpoint by endpoint, with a Swagger
UI and a published OpenAPI specification, in 20 languages.

## 7. BODACC datasets and exports

Beyond the API, every page of bodacc.io is a stable, crawlable URL — legal notices, companies,
officers, regions, cities, statistics — and the site publishes machine-readable entry points:

- [Sitemaps](https://bodacc.io/sitemap.xml) — the full URL inventory, per language
- [API catalog](https://bodacc.io/.well-known/api-catalog) — discoverable by agents
- [RSS](https://bodacc.io/rss.xml) — the daily feed
- [URL list](URLLIST.md) — every entry point, one list per language

## 8. BODACC coverage and freshness

The BODACC is published on working days, not at weekends. BODACC.io collects each publication and
makes it available **the same morning**, usually within minutes of release. Every notice keeps its
publication date, so you can always tell what is new.

## 9. What people use the BODACC for

- **Compliance and KYC** — check a counterparty's real status before signing, not its status three months ago
- **Due diligence** — follow a company's filings, its accounts and its insolvency history
- **Credit and risk scoring** — insolvency proceedings and accounts filings are the earliest signals
- **Sales intelligence** — a new incorporation is a new prospect, the day it happens
- **Journalism** — company-level facts, sourced and dated
- **Research** — 51 million filings, from the oldest registers to this morning
- **Legal and accounting** — find the companies you act for, and what they filed

## 10. BODACC frequently asked questions

**Is BODACC.io the official BODACC?**

No. BODACC.io is an independent service that makes the public BODACC data usable and queryable. It is
not affiliated with the DILA or any public body. Every notice links back to its official source.

**Is the BODACC API free?**

Open endpoints are free and need no key. Paid tiers exist for heavy use —
[see pricing](https://bodacc.io/fr/tarifs).

**What is the difference between the BODACC and a company directory?**

A directory gives you a company's identity. The BODACC gives you its activity: what it filed, when,
and what the court published about it. The two are complementary — BODACC.io also carries the identity.

**How fresh is the data?**

Notices appear the morning they are published. Company records are updated as notices arrive.

**How many records per call?**

Up to 500, with `offset` for pagination. There is no cap on the number of calls on open endpoints.

**Can I use it in production?**

Yes. The API is documented, versioned and served from Cloudflare. Attribution to
[bodacc.io](https://bodacc.io) is welcome.

**Which languages are supported?**

The site and its documentation exist in 20 languages. The API itself is language-neutral: its slugs and
endpoints are the same for everyone.

## 11. BODACC documentation, per language

Each folder below holds the full BODACC documentation in its own language: the API reference, the URL
list and the daily recaps.

| # | Language | Documentation | URLs | Daily data |
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

## 12. BODACC links

- [BODACC.io](https://bodacc.io) — the live site
- [Company search](https://bodacc.io/fr/entreprises) · [Legal notices](https://bodacc.io/fr/annonces) · [Directors](https://bodacc.io/fr/personnes)
- [API documentation](https://bodacc.io/fr/docs) · [Swagger UI](https://bodacc.io/api/bodacc/docs)
- [Pricing](https://bodacc.io/fr/tarifs) · [Technology](https://bodacc.io/fr/technologie)
- [URL list (multilingual index)](URLLIST.md)

---

*BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) is the official publication of French
company legal notices. BODACC.io is an independent service and is not affiliated with the DILA.*
