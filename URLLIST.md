# BODACC.io : URL List (machine-readable)

Live site entry points — maintained for crawlers, bots and agents.
All URLs below return HTTP 200 and are publicly accessible.

## Site (multilingual : 20 locales, `/en` shown; all locales share the same slugs)

The canonical path structure is identical in every language: `https://bodacc.io/{locale}/...`.
Localized URL lists: [docs/ar/URLLIST.md](docs/ar/URLLIST.md) · [docs/de/URLLIST.md](docs/de/URLLIST.md) · [docs/en/URLLIST.md](docs/en/URLLIST.md) · [docs/es/URLLIST.md](docs/es/URLLIST.md) · [docs/fa/URLLIST.md](docs/fa/URLLIST.md) · [docs/fr/URLLIST.md](docs/fr/URLLIST.md) · [docs/he/URLLIST.md](docs/he/URLLIST.md) · [docs/hi/URLLIST.md](docs/hi/URLLIST.md) · [docs/id/URLLIST.md](docs/id/URLLIST.md) · [docs/it/URLLIST.md](docs/it/URLLIST.md) · [docs/ja/URLLIST.md](docs/ja/URLLIST.md) · [docs/ko/URLLIST.md](docs/ko/URLLIST.md) · [docs/nl/URLLIST.md](docs/nl/URLLIST.md) · [docs/pl/URLLIST.md](docs/pl/URLLIST.md) · [docs/pt/URLLIST.md](docs/pt/URLLIST.md) · [docs/ru/URLLIST.md](docs/ru/URLLIST.md) · [docs/tr/URLLIST.md](docs/tr/URLLIST.md) · [docs/uk/URLLIST.md](docs/uk/URLLIST.md) · [docs/vi/URLLIST.md](docs/vi/URLLIST.md) · [docs/zh/URLLIST.md](docs/zh/URLLIST.md)

| Page | English | Français | Español | Deutsch |
|---|---|---|---|---|
| Home | `/en` | `/fr` | `/es` | `/de` |
| Notices | `/en/annonces` | `/fr/annonces` | `/es/annonces` | `/de/annonces` |
| Companies | `/en/entreprises` | `/fr/entreprises` | `/es/entreprises` | `/de/entreprises` |
| People | `/en/personnes` | `/fr/personnes` | `/es/personnes` | `/de/personnes` |
| Acteurs | `/en/acteurs` | `/fr/acteurs` | `/es/acteurs` | `/de/acteurs` |
| Pricing | `/en/tarifs` | `/fr/tarifs` | `/es/tarifs` | `/de/tarifs` |
| Technology | `/en/technologie` | `/fr/technologie` | `/es/technologie` | `/de/technologie` |
| Regions hub | `/en/regions` | `/fr/regions` | `/es/regions` | `/de/regions` |
| Cities | `/en/villes` | `/fr/villes` | `/es/villes` | `/de/villes` |

## Discovery & feeds

- RSS feed (daily recaps + latest notices): https://bodacc.io/rss.xml
- Sitemap index: https://bodacc.io/sitemap.xml
- robots.txt: https://bodacc.io/robots.txt
- llms.txt (for AI agents): https://bodacc.io/llms.txt
- ads.txt: https://bodacc.io/ads.txt
- OpenAPI spec: https://bodacc.io/api/bodacc/openapi.json

## API (public, no key required)

- Base: https://bodacc.io/api/bodacc
- Notices search: https://bodacc.io/api/bodacc/annonces?limit=20
- Notice detail: https://bodacc.io/api/bodacc/annonces/A202601511039
- Companies search: https://bodacc.io/api/bodacc/entreprises?q=paris&limit=20
- Company by SIREN: https://bodacc.io/api/bodacc/entreprises/514494491
- Company by slug: https://bodacc.io/api/bodacc/entreprises/by-slug/042285445-copr-l-edelweiss
- People: https://bodacc.io/api/bodacc/personnes/397362
- Live counters: https://bodacc.io/api/bodacc/stats/counts
- Daily stats: https://bodacc.io/api/bodacc/stats/daily
- NAF reference: https://bodacc.io/api/bodacc/naf

## Examples (entity pages)

- Notice detail (EN): https://bodacc.io/en/annonces/A202601452836
- Company detail (EN): https://bodacc.io/en/entreprises/042285445-copr-l-edelweiss
- Person detail (EN): https://bodacc.io/en/personnes/lafon-laura-397362

---
*This file is part of the public BODACC-api repository — crawled by GitHub's
indexer. It lists only stable, public entry points. See README.md for the full
API documentation.*
