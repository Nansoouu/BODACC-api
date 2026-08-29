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
> 📰 [Die vollständige zusammenfassung](recaps/README.md) · 🏠 [Hinter den Kulissen von BODACC.io](coulisses/COULISSES.md)

<div align="center">

![Python 3.12](https://img.shields.io/badge/Python-3.12-3776AB?logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-API-009688?logo=fastapi&logoColor=white)
![PostgreSQL 16](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)

![Annonces](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Bekanntmachungen&color=blue)
![Entreprises](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Unternehmen&color=green)
![Personnes](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Personen&color=orange)
![Site bodacc.io](https://img.shields.io/badge/bodacc.io-Explorer-important?logo=internetexplorer&logoColor=white&style=for-the-badge)

</div>

**Die API, die französische gesetzliche Bekanntmachungen in strukturierte, verknüpfte und nutzbare Daten verwandelt – in Echtzeit.**

Das BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) ist die offizielle Veröffentlichung, die das rechtliche Leben französischer Unternehmen nachzeichnet: Gründungen, Änderungen, Löschungen, Insolvenzverfahren, Verkäufe, Hinterlegungen von Jahresabschlüssen. Diese Texte sind öffentlich, bleiben aber rohe Dokumente: Sie sind weder strukturiert, noch miteinander verknüpft, noch einfach abfragbar.

**BODACC-api macht sie nutzbar.** Jede Bekanntmachung wird automatisch analysiert und in strukturierte Daten umgewandelt (SIREN, Firma, Adresse, NAF, Geschäftsführer, Beträge...), dann mit ihrem Unternehmen und den darin vorkommenden Personen verknüpft. Ergebnis: ein vollständiger Graph des französischen Wirtschaftslebens, abfragbar mit einer einzigen HTTP-Anfrage.

> 🌐 Website: [bodacc.io](https://bodacc.io) · 📖 Swagger: [https://bodacc.io/api/bodacc/docs](https://bodacc.io/api/bodacc/docs) · 💶 [Preise](https://bodacc.io/de/tarifs)

---

## ✨ Warum BODACC-api?

| | |
|---|---|
| 🗂 **Die gesamte Historie, seit 2008** | Millionen von Bekanntmachungen in der Datenbank, vollständige Abdeckung – kein gleitendes Zeitfenster |
| ⚡ **Echtzeit** | Die Bekanntmachungen des Tages sind jeden Morgen verfügbar, vor Büroöffnung |
| 🕸 **Ein Graph, keine Dateien** | Bekanntmachung → Unternehmen (SIREN) → Geschäftsführer → Mandate → öffentliche Aufträge: alles ist verknüpft und mit einer Anfrage abfragbar |
| ✨ **Von Rohtext zu strukturierten Daten** | SIREN, NAF, Adresse, Geschäftsführer, Verfahren... automatisch aus jedem Rechtstext extrahiert |
| 🌍 **20 Sprachen** | Die Oberfläche und die Inhalte sind übersetzt – Ihre Teams und Ihre Kunden sprechen ihre Sprache |
| 🤖 **Agent-ready** | 100/100 im isitagentready-Audit (DNSSEC, DNS-AID, auth.md, WebMCP, llms.txt) |
| 🚪 **Null Reibung zum Testen** | Alle Lese-Endpunkte sind ohne Schlüssel zugänglich – Sie bewerten, bevor Sie zahlen |

---

## 🏭 Unser Mehrwert: die Pipeline

Was den Unterschied macht, sind nicht die Rohdaten (sie sind öffentlich), sondern was wir daraus machen – jeden Tag, automatisch:

**1. Eine zuverlässige und vollständige Erfassung.** Jeden Morgen vor 09:00 Uhr werden die von der DILA veröffentlichten neuen Bekanntmachungen in unsere Datenbank integriert. Die vollständige Historie reicht bis 2008 zurück, weit über das hinaus, was die öffentliche Konsultation bietet. Eine erneute Ausführung einer Erfassung erzeugt keine Duplikate: Unsere Daten sind permanent verifiziert und konsistent.

**2. Eine intelligente Anreicherung.** Jede Bekanntmachung ist ein Rechtstext – unsere hybride Extraktions-Engine (Geschäftsregeln + KI) verwandelt ihn in strukturierte Daten: SIREN-Nummer, Firma, Adresse, NAF-Code, Geschäftsführer, Mandate, Beträge, Verfahren. Was Stunden menschlichen Lesens erfordert, wird zu abfragbaren JSON-Feldern.

**3. Ein Beziehungsgraph.** Eine Bekanntmachung über ein Insolvenzverfahren ist nur dann wertvoll, wenn man weiß, zu welchem Unternehmen sie gehört und wer dessen Geschäftsführer ist. Unsere Auflösungs-Engine verknüpft jede Bekanntmachung mit ihrem Unternehmen (SIREN), jede Person mit ihren Mandaten, jeden öffentlichen Auftrag mit seinem Auftragnehmer. Sie fragen das französische Wirtschaftsleben wie eine Datenbank ab – nicht wie einen Haufen PDFs.

**4. Eine Echtzeit-Verbreitung.** Sobald eine Bekanntmachung veröffentlicht ist, ist sie über die API verfügbar, mit ihren Beziehungen und ihrer Anreicherung. Keine Dateien zum Herunterladen, kein zu wartender ETL-Prozess: Eine HTTP-Anfrage genügt.

---

## ⚖️ Vergleich: wo wir uns positionieren

| | **Offizielle Website (bodacc.fr)** | **Pappers** | **BODACC.io** |
|---|---|---|---|
| **API** | ❌ Keine | API nur für höhere Angebote | ✅ **Dokumentierte REST-API, ohne Schlüssel zum Lesen** |
| **Strukturierte Daten** | ❌ PDF-Konsultation | ✅ Angereicherte Profile | ✅ **Bekanntmachungen + Graph Unternehmen/Personen/Aufträge** |
| **Echtzeit** | Papierveröffentlichung online einsehbar | Tägliche Aktualisierung | ✅ **Jeden Morgen vor 09:00 Uhr** |
| **Preis** | Kostenlos, aber begrenzt | Ab **29,90 €/Monat** für den Basiszugang | **Erschwingliche Tarife, ab kostenlos zum Entdecken** |
| **Zielgruppe** | Allgemeine Öffentlichkeit | Fachleute (Compliance, Monitoring) | **Entwickler, Fintech, Legaltech, Datenteams** |

**Stärken der offiziellen Website**: kostenlos, zuverlässig, offiziell. **Schwächen**: keine API, Historie auf 2008 begrenzt, keine strukturierten Daten – Sie bleiben bei den PDFs.

**Stärken von Pappers**: sehr gepflegte Oberfläche, Aggregation von INSEE + INPI + BODACC, integriertes Monitoring. **Schwächen**: der Preis (29,90 €/Monat für den Basiszugang, API und vollständige Historie sind teurer), eine auf Konsultation ausgerichtete Lösung statt auf nutzbare Daten.

**Unsere Position**: **die gesamte Historie seit 2008, schneller als auf der offiziellen Website – und zu einem niedrigeren Preis als bei Pappers.** Entwickelt für diejenigen, die die Daten in ihre eigenen Tools integrieren möchten, nicht für diejenigen, die nur einen weiteren Bildschirm wollen.

> 💶 Tarife ansehen: [bodacc.io/de/tarifs](https://bodacc.io/de/tarifs) — Kostenlos · Pro · Enterprise · LIFE

---

## 🚀 In 30 Sekunden testen

Alle Lese-Endpunkte sind **ohne Schlüssel** zugänglich:

```bash
# Ein Unternehmen nach Namen suchen
curl "https://bodacc.io/api/bodacc/annonces?q=rizom&limit=5"

# Detail einer Bekanntmachung (mit ihren Beziehungen: Unternehmen + Personen)
curl "https://bodacc.io/api/bodacc/annonces/A202601432266"

# Unternehmensprofil (aktuelle Bekanntmachungen + Geschäftsführer + öffentliche Aufträge)
curl "https://bodacc.io/api/bodacc/entreprises/912969573"

# Globale Statistiken
curl "https://bodacc.io/api/bodacc/stats"

# Tägliches Volumen (letzte 30 Tage)
curl "https://bodacc.io/api/bodacc/stats/daily30"
```

---

## 📡 Die Endpunkte

### Bekanntmachungen

| Methode | Route | Beschreibung |
|---|---|---|
| `GET` | `/bodacc/annonces` | Suche: `q` (Name/SIREN), `famille`, `departement`, Daten, Paginierung `limit`/`offset` |
| `GET` | `/bodacc/annonces/{id}` | Vollständiges Detail: `raw_data` + Anreicherung + `relations` (verknüpfte Unternehmen und Personen) |
| `GET` | `/bodacc/enrichi/{id}` | Strukturierte Version (siren, dénomination, NAF, dirigeants...) |
| `POST` | `/bodacc/enrichi/batch` | Stapel-Anreicherung |

### Unternehmen & Personen

| Methode | Route | Beschreibung |
|---|---|---|
| `GET` | `/bodacc/entreprises` | Unternehmenssuche (Name, Stadt, NAF, Postleitzahl) |
| `GET` | `/bodacc/entreprises/{siren}` | INSEE-Profil + `annonces_recentes`, `dirigeants`, `marches_publics`, `stats` |
| `GET` | `/bodacc/entreprises/by-slug/{slug}` | Profil per SEO-Slug |
| `GET` | `/bodacc/personnes/{id}` | Personenprofil: Mandate (Rollen) + verknüpfte Unternehmen |

### Statistiken

| Methode | Route | Beschreibung |
|---|---|---|
| `GET` | `/bodacc/stats` | Gesamtzahlen, nach Familie, nach Datum |
| `GET` | `/bodacc/stats/daily` | Volumen des Tages (nach Ausgabe, Département, Familie) |
| `GET` | `/bodacc/stats/daily30` | Serie der letzten 30 Tage |
| `GET` | `/bodacc/stats/counts` | Zähler: Bekanntmachungen, Unternehmen, Personen |
| `GET` | `/bodacc/graph/categories` | Verteilung nach Kategorie |

### Alerts & Integrationen

| Methode | Route | Beschreibung |
|---|---|---|
| `GET/POST/DELETE` | `/bodacc/alertes` | Alerts per SIREN (Unternehmensverfolgung) |
| `POST` | `/bodacc/ingest?target_date=YYYY-MM-DD` | Erfassung für ein Datum auslösen |
| `POST` | `/bodacc/import` | Stapelimport (Backfill) |

### NAF-Referenz (INSEE)

| Methode | Route | Beschreibung |
|---|---|---|
| `GET` | `/bodacc/naf` | Vollständiges NAF-Referenzwerk Rev. 2 (732 Unterklassen, 615 Klassen) – offizielle INSEE-Bezeichnungen |
| `GET` | `/bodacc/naf?q=commerce` | NAF-Suche nach Bezeichnung |
| `GET` | `/bodacc/naf?code=46.72Z` | Datenblatt eines NAF-Codes |

---

## 📊 Die Daten

Die Abzeichen oben auf der Seite sind **Echtzeit-Zähler**: BODACC-Bekanntmachungen, SIRENE-Unternehmen und extrahierte Personen – sie entwickeln sich im Laufe der Konsolidierung der Historie und der Anreicherung.

Stabile Referenzwerte:

- 📰 **BODACC-Bekanntmachungen**: vollständige Historie seit 2008, aktualisiert jeden Morgen vor 09:00 Uhr
- 🏢 **Unternehmen (SIRENE)**: 29,8 M französische rechtliche Einheiten (INSEE-Register)
- 👤 **Extrahierte Personen**: Geschäftsführer, Liquidatoren, Abschlussprüfer... in kontinuierlicher Konsolidierung
- 📦 **Öffentliche Aufträge (BOAMP)**: 1,69 M öffentliche Verträge 2015 → 2026

---

## 🛠 Technologie

| Ebene | Technologie |
|---|---|
| **API** | Python · FastAPI · PostgreSQL 16 |
| **Daten** | Trigramm-Indexierung, Volltextsuche, JSONB |
| **Erfassung** | Automatisierte Pipeline, tägliche Integration, idempotent |
| **Anreicherung** | Hybride Extraktion (Geschäftsregeln + KI) |
| **Frontend** | Next.js · i18n 20 Sprachen |
| **Infrastruktur** | Docker · Cloudflare (CDN, Cache, DNSSEC) |
| **KI-Agenten** | MCP-Server · DNS-AID · auth.md · llms.txt |

---

## 🔓 Open Data

Die Quelldaten sind öffentlich und kostenlos:

- **BODACC**: [data.gouv.fr / DILA](https://www.data.gouv.fr/fr/datasets/bodacc-annonces-commerciales/) (gesetzliche Bekanntmachungen)
- **SIRENE**: [INSEE](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/) (29,8 M rechtliche Einheiten)
- **BOAMP**: [Opendatasoft / DILA](https://boamp-datadila.opendatasoft.com) (öffentliche Aufträge)

**BODACC-api fügt dieser Rohdatenstruktur und -graph hinzu**: Analyse der Rechtstexte, Identitätsauflösung (Personen), Verknüpfungen Unternehmen ↔ Bekanntmachung ↔ Vertrag.

---

## 🌐 Website erkunden

[Startseite](https://bodacc.io/de) · [Bekanntmachungen](https://bodacc.io/de/annonces) · [Unternehmen](https://bodacc.io/de/entreprises) · [Personen](https://bodacc.io/de/personnes) · [Preise](https://bodacc.io/de/tarifs) · [Technologie](https://bodacc.io/de/technologie)

---

## 📄 Lizenz & Kontakt

- Lizenz: MIT (Code) – die Daten unterliegen weiterhin den Lizenzen ihrer Produzenten (DILA, INSEE)
- Website: [bodacc.io](https://bodacc.io)
- Issues & PRs: auf diesem Repository willkommen

---

*Das BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) ist die offizielle Veröffentlichung der gesetzlichen Bekanntmachungen französischer Unternehmen. Dieses Projekt ist nicht mit der DILA verbunden.*
