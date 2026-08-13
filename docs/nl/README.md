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
> 📰 [Het volledige overzicht](recaps/README.md) · 🏠 [Achter de schermen van BODACC.io](coulisses/COULISSES.md)

<div align="center">

![Python 3.12](https://img.shields.io/badge/Python-3.12-3776AB?logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-API-009688?logo=fastapi&logoColor=white)
![PostgreSQL 16](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)

![Annonces](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Bekendmakingen&color=blue)
![Entreprises](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Bedrijven&color=green)
![Personnes](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Personen&color=orange)
![Site bodacc.io](https://img.shields.io/badge/bodacc.io-Explorer-important?logo=internetexplorer&logoColor=white&style=for-the-badge)

</div>

**De API die Franse wettelijke bekendmakingen omzet in gestructureerde, gerelateerde en bruikbare gegevens — in realtime.**

Het BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) is de officiële publicatie die het juridische leven van Franse bedrijven volgt: oprichtingen, wijzigingen, doorhalingen, collectieve procedures, verkopen, deponering van jaarrekeningen. Deze teksten zijn openbaar, maar blijven ruwe documenten: ze zijn niet gestructureerd, niet onderling verbonden en niet eenvoudig doorzoekbaar.

**BODACC-api maakt ze bruikbaar.** Elke bekendmaking wordt automatisch geanalyseerd en omgezet in gestructureerde gegevens (SIREN, handelsnaam, adres, NAF, bestuurders, bedragen...), en vervolgens gekoppeld aan het betreffende bedrijf en de personen die erin voorkomen. Resultaat: een complete graaf van het Franse economische leven, doorzoekbaar met één enkele HTTP-aanvraag.

> 🌐 Website: [bodacc.io](https://bodacc.io) · 📖 Swagger: [https://bodacc.io/api/bodacc/docs](https://bodacc.io/api/bodacc/docs) · 💶 [Tarieven](https://bodacc.io/nl/tarifs)

---

## ✨ Waarom BODACC-api?

| | |
|---|---|
| 🗂 **Volledige historiek, sinds 2004** | Miljoenen bekendmakingen in de database, volledige dekking — geen glijdend venster |
| ⚡ **Realtime** | De bekendmakingen van vandaag zijn elke ochtend beschikbaar, vóór opening van kantoren |
| 🕸 **Een graaf, geen bestanden** | Bekendmaking → bedrijf (SIREN) → bestuurders → mandaten → overheidsopdrachten: alles is verbonden en doorzoekbaar in één aanvraag |
| ✨ **Van ruwe tekst naar gestructureerde gegevens** | SIREN, NAF, adres, bestuurders, procedures... automatisch geëxtraheerd uit elke juridische tekst |
| 🌍 **20 talen** | De interface en inhoud zijn vertaald — uw teams en klanten spreken hun eigen taal |
| 🤖 **Agent-ready** | 100/100 op de isitagentready-audit (DNSSEC, DNS-AID, auth.md, WebMCP, llms.txt) |
| 🚪 **Nul frictie om te testen** | Alle lees-endpoints zijn toegankelijk zonder sleutel — u evalueert vóór u betaalt |

---

## 🏭 Onze toegevoegde waarde: de pipeline

Wat het verschil maakt, is niet de ruwe data (die is openbaar), maar wat wij ermee doen — elke dag, automatisch:

**1. Betrouwbare en volledige ingestie.** Elke ochtend vóór 09:00 worden de nieuwe bekendmakingen die door de DILA zijn gepubliceerd, in onze database opgenomen. De volledige historiek gaat terug tot 2004, veel verder dan wat de openbare raadpleging biedt. Het opnieuw uitvoeren van een ingestie creëert geen duplicaten: onze gegevens worden continu geverifieerd en zijn consistent.

**2. Intelligente verrijking.** Elke bekendmaking is een juridische tekst — onze hybride extractiemotor (bedrijfsregels + AI) zet deze om in gestructureerde gegevens: SIREN-nummer, handelsnaam, adres, NAF-code, bestuurders, mandaten, bedragen, procedures. Wat uren menselijk leeswerk vereist, wordt doorzoekbare JSON-velden.

**3. Een relationele graaf.** Een bekendmaking van een collectieve procedure is alleen waardevol als je weet aan welk bedrijf deze is gekoppeld en wie de bestuurder is. Onze resolutiemotor verbindt elke bekendmaking met het bedrijf (SIREN), elke persoon met zijn mandaten, elke overheidsopdracht met zijn opdrachtnemer. U doorzoekt het Franse economische leven als een database — niet als een stapel PDF's.

**4. Realtime verspreiding.** Zodra een bekendmaking is gepubliceerd, is deze beschikbaar via de API, met zijn relaties en verrijking. Geen bestanden om te downloaden, geen ETL om te onderhouden: één HTTP-aanvraag volstaat.

---

## ⚖️ Vergelijking: waar wij ons positioneren

| | **Officiële website (bodacc.fr)** | **Pappers** | **BODACC.io** |
|---|---|---|---|
| **Historiek** | Alleen sinds 2008 | Commerciële historiek afhankelijk van abonnement | **Volledig sinds 2004** |
| **API** | ❌ Geen | API alleen voor hogere abonnementen | ✅ **Gedocumenteerde REST-API, zonder sleutel voor lezen** |
| **Gestructureerde gegevens** | ❌ PDF-raadpleging | ✅ Verrijkte profielen | ✅ **Bekendmakingen + graaf van bedrijven/personen/opdrachten** |
| **Realtime** | Papieren publicatie online raadpleegbaar | Dagelijkse actualisering | ✅ **Elke ochtend vóór 09:00** |
| **Prijs** | Gratis, maar beperkt | Vanaf **€ 29,90/mnd** voor basistoegang | **Toegankelijke pakketten, vanaf gratis om te verkennen** |
| **Publiek** | Algemeen publiek | Professionals (compliance, monitoring) | **Ontwikkelaars, fintech, legaltech, datateams** |

**Sterke punten van de officiële website**: gratis, betrouwbaar, officieel. **Zwakke punten**: geen API, historiek beperkt tot 2008, geen gestructureerde gegevens — u blijft in PDF's.

**Sterke punten van Pappers**: zeer verzorgde interface, aggregatie INSEE + INPI + BODACC, geïntegreerde monitoring. **Zwakke punten**: de prijs (€ 29,90/mnd voor basistoegang, de API en volledige historiek zijn duurder), een oplossing gericht op raadpleging in plaats van bruikbare gegevens.

**Onze positie**: **volledige historiek sinds 2004, sneller dan op de officiële website — en tegen een lager tarief dan Pappers.** Ontworpen voor wie data in eigen tools wil integreren, niet voor wie een extra scherm wil.

> 💶 Bekijk de pakketten: [bodacc.io/nl/tarifs](https://bodacc.io/nl/tarifs) — Gratis · Pro · Enterprise · LIFE

---

## 🚀 Probeer het in 30 seconden

Alle lees-endpoints zijn toegankelijk **zonder sleutel**:

```bash
# Zoek een bedrijf op naam
curl "https://bodacc.io/api/bodacc/annonces?q=rizom&limit=5"

# Detail van een bekendmaking (met relaties: bedrijven + personen)
curl "https://bodacc.io/api/bodacc/annonces/A202601432266"

# Bedrijfsprofiel (recente bekendmakingen + bestuurders + overheidsopdrachten)
curl "https://bodacc.io/api/bodacc/entreprises/912969573"

# Algemene statistieken
curl "https://bodacc.io/api/bodacc/stats"

# Dagelijks volume (afgelopen 30 dagen)
curl "https://bodacc.io/api/bodacc/stats/daily30"
```

---

## 📡 De endpoints

### Bekendmakingen

| Methode | Route | Beschrijving |
|---|---|---|
| `GET` | `/bodacc/annonces` | Zoeken: `q` (naam/SIREN), `famille`, `departement`, datums, paginering `limit`/`offset` |
| `GET` | `/bodacc/annonces/{id}` | Volledig detail: `raw_data` + verrijking + `relations` (gerelateerde bedrijven en personen) |
| `GET` | `/bodacc/enrichi/{id}` | Gestructureerde versie (siren, benaming, NAF, bestuurders...) |
| `POST` | `/bodacc/enrichi/batch` | Verrijking in batch |

### Bedrijven & personen

| Methode | Route | Beschrijving |
|---|---|---|
| `GET` | `/bodacc/entreprises` | Bedrijfszoekopdracht (naam, stad, NAF, postcode) |
| `GET` | `/bodacc/entreprises/{siren}` | INSEE-profiel + `annonces_recentes`, `dirigeants`, `marches_publics`, `stats` |
| `GET` | `/bodacc/entreprises/by-slug/{slug}` | Profiel op SEO-slug |
| `GET` | `/bodacc/personnes/{id}` | Personenprofiel: mandaten (rollen) + gerelateerde bedrijven |

### Statistieken

| Methode | Route | Beschrijving |
|---|---|---|
| `GET` | `/bodacc/stats` | Totalen, per familie, per datum |
| `GET` | `/bodacc/stats/daily` | Volume van de dag (per publicatie, departement, familie) |
| `GET` | `/bodacc/stats/daily30` | Reeks van de afgelopen 30 dagen |
| `GET` | `/bodacc/stats/counts` | Tellers: bekendmakingen, bedrijven, personen |
| `GET` | `/bodacc/graph/categories` | Verdeling per categorie |

### Alerts & integraties

| Methode | Route | Beschrijving |
|---|---|---|
| `GET/POST/DELETE` | `/bodacc/alertes` | Alerts op SIREN (bedrijfsopvolging) |
| `POST` | `/bodacc/ingest?target_date=YYYY-MM-DD` | Ingestie voor een datum activeren |
| `POST` | `/bodacc/import` | Batch-import (backfill) |

### NAF-referentiekader (INSEE)

| Methode | Route | Beschrijving |
|---|---|---|
| `GET` | `/bodacc/naf` | Volledig NAF-referentiekader rev. 2 (732 subklassen, 615 klassen) — officiële INSEE-benamingen |
| `GET` | `/bodacc/naf?q=commerce` | NAF-zoekopdracht op benaming |
| `GET` | `/bodacc/naf?code=46.72Z` | Fiche van een NAF-code |

---

## 📊 De gegevens

De badges bovenaan de pagina zijn **realtime tellers**: BODACC-bekendmakingen, SIRENE-bedrijven en geëxtraheerde personen — ze evolueren naarmate de historiek wordt geconsolideerd en verrijkt.

Stabiele referentiepunten:

- 📰 **BODACC-bekendmakingen**: volledige historiek sinds 2004, elke ochtend vóór 09:00 bijgewerkt
- 🏢 **Bedrijven (SIRENE)**: 29,8 M Franse rechtspersonen (INSEE-register)
- 👤 **Geëxtraheerde personen**: bestuurders, vereffenaars, commissarissen... in voortdurende consolidatie
- 📦 **Overheidsopdrachten (BOAMP)**: 1,69 M overheidscontracten 2015 → 2026

---

## 🛠 Technologie

| Laag | Technologie |
|---|---|
| **API** | Python · FastAPI · PostgreSQL 16 |
| **Gegevens** | Trigram-indexering, full-text zoeken, JSONB |
| **Ingestie** | Geautomatiseerde pipeline, dagelijkse integratie, idempotent |
| **Verrijking** | Hybride extractie (bedrijfsregels + AI) |
| **Frontend** | Next.js · i18n 20 talen |
| **Infra** | Docker · Cloudflare (CDN, cache, DNSSEC) |
| **AI-agents** | MCP-server · DNS-AID · auth.md · llms.txt |

---

## 🔓 Open data

De brongegevens zijn openbaar en gratis:

- **BODACC**: [data.gouv.fr / DILA](https://www.data.gouv.fr/fr/datasets/bodacc-annonces-commerciales/) (wettelijke bekendmakingen)
- **SIRENE**: [INSEE](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/) (29,8 M rechtspersonen)
- **BOAMP**: [Opendatasoft / DILA](https://boamp-datadila.opendatasoft.com) (overheidsopdrachten)

**BODACC-api voegt structuur en de graaf toe aan deze ruwe data**: analyse van juridische teksten, identiteitsresolutie (personen), links bedrijf ↔ bekendmaking ↔ contract.

---

## 🌐 Verken de website

[Home](https://bodacc.io/nl) · [Bekendmakingen](https://bodacc.io/nl/annonces) · [Bedrijven](https://bodacc.io/nl/entreprises) · [Personen](https://bodacc.io/nl/personnes) · [Tarieven](https://bodacc.io/nl/tarifs) · [Technologie](https://bodacc.io/nl/technologie)

---

## 📄 Licentie & contact

- Licentie: MIT (code) — de gegevens blijven onderworpen aan de licenties van hun producenten (DILA, INSEE)
- Website: [bodacc.io](https://bodacc.io)
- Issues & PR: welkom op deze repository

---

*Het BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) is de officiële publicatie van wettelijke bekendmakingen van Franse bedrijven. Dit project is niet gelieerd aan de DILA.*
