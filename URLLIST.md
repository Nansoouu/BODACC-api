# BODACC.io : URL List (multilingual index)

Live site entry points, maintained for crawlers, bots and agents.
All URLs below return HTTP 200 and are publicly accessible.
One URL list per language: [العربية](docs/ar/URLLIST.md) · [Deutsch](docs/de/URLLIST.md) · [English](docs/en/URLLIST.md) · [Español](docs/es/URLLIST.md) · [فارسی](docs/fa/URLLIST.md) · [Français](docs/fr/URLLIST.md) · [עברית](docs/he/URLLIST.md) · [हिन्दी](docs/hi/URLLIST.md) · [Bahasa Indonesia](docs/id/URLLIST.md) · [Italiano](docs/it/URLLIST.md) · [日本語](docs/ja/URLLIST.md) · [한국어](docs/ko/URLLIST.md) · [Nederlands](docs/nl/URLLIST.md) · [Polski](docs/pl/URLLIST.md) · [Português](docs/pt/URLLIST.md) · [Русский](docs/ru/URLLIST.md) · [Türkçe](docs/tr/URLLIST.md) · [Українська](docs/uk/URLLIST.md) · [Tiếng Việt](docs/vi/URLLIST.md) · [中文](docs/zh/URLLIST.md)

The canonical path structure is identical in every language: `https://bodacc.io/{locale}/...`.

| Page | English | Français | Español | Deutsch |
|---|---|---|---|---|
| Home | `/en` | `/fr` | `/es` | `/de` |
| Notices | `/en/annonces` | `/fr/annonces` | `/es/annonces` | `/de/annonces` |
| Companies | `/en/entreprises` | `/fr/entreprises` | `/es/entreprises` | `/de/entreprises` |
| People | `/en/personnes` | `/fr/personnes` | `/es/personnes` | `/de/personnes` |
| Actors | `/en/acteurs` | `/fr/acteurs` | `/es/acteurs` | `/de/acteurs` |
| Pricing | `/en/tarifs` | `/fr/tarifs` | `/es/tarifs` | `/de/tarifs` |
| Technology | `/en/technologie` | `/fr/technologie` | `/es/technologie` | `/de/technologie` |
| Regions hub | `/en/regions` | `/fr/regions` | `/es/regions` | `/de/regions` |
| Cities | `/en/villes` | `/fr/villes` | `/es/villes` | `/de/villes` |

## Discovery & feeds (locale-neutral)

- RSS feed (daily recaps + latest notices): https://bodacc.io/rss.xml
- Sitemap index: https://bodacc.io/sitemap.xml
- robots.txt: https://bodacc.io/robots.txt
- llms.txt (for AI agents): https://bodacc.io/llms.txt
- ads.txt: https://bodacc.io/ads.txt
- OpenAPI spec: https://bodacc.io/api/bodacc/openapi.json

## API (public, no key required, locale-neutral)

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

---
*This file is part of the public BODACC-api repository. It lists only stable,
public entry points. See [README.md](README.md) for the full documentation.*
