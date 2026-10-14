<div align="center">

# BODACC.io : die API BODACC für französische Bekanntmachungen und Unternehmensdaten

**Jede Veröffentlichung eines französischen Unternehmens, in Echtzeit.** Gründungen, Änderungen,
Jahresabschlüsse, Insolvenzverfahren, Verkäufe, Löschungen — jede Bekanntmachung des BODACC, verknüpft
mit ihrem Unternehmen, seinen Geschäftsführern und ihrer offiziellen Quelle. Kostenlos und offen, in 20 Sprachen.

[**bodacc.io**](https://bodacc.io) · [Dokumentation der API](https://bodacc.io/de/dokumentation) · [Swagger](https://bodacc.io/api/bodacc/docs) · [RSS](https://bodacc.io/rss.xml)

</div>

## 1. Aktuelle Daten des BODACC

| Datensatz BODACC | Einträge | Live |
|---|---|---|
| Bekanntmachungen des BODACC | 51 043 403 | ![Bekanntmachungen](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Bekanntmachungen&color=blue) |
| Französische Unternehmen | 30 032 566 | ![Unternehmen](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Unternehmen&color=green) |
| Geschäftsführer und Mandatsträger | 4 935 692 | ![Personen](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Personen&color=orange) |
| Öffentliche Aufträge (BOAMP) | 1 716 163 | ![Aufträge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=boamp&label=Aufträge&color=purple) |

Diese Zahlen sind nicht abgeschrieben: Sie werden **live von der API BODACC selbst geliefert**, unter
[`/api/bodacc/stats/counts-formatted`](https://bodacc.io/api/bodacc/stats/counts-formatted).
Prüfen Sie es selbst, und prüfen Sie es morgen noch einmal.

**Heute** (14. Oktober 2026): **5 920 Bekanntmachungen** — häufigste Familie: Jahresabschlüsse (2 306).

| Familie BODACC | Bekanntmachungen heute |
|---|---|
| Jahresabschlüsse | 2 306 |
| Gründungen | 1 415 |
| Änderungen | 1 193 |
| Löschungen | 500 |
| Insolvenzverfahren | 323 |
| Eintragungen | 118 |
| Verkäufe und Übertragungen | 65 |

## 2. Was Ihnen die API BODACC bietet

Das BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) ist das offizielle Journal des
französischen Wirtschaftslebens. Jede Gründung, jeder Jahresabschluss, jede Insolvenz, jeder Verkauf wird
dort gesetzlich veröffentlicht. BODACC.io macht aus diesem Journal eine Datenbank, die Sie abfragen können.

**Die meisten Unternehmensdatenbanken liefern Ihnen eine Momentaufnahme. Die API BODACC liefert Ihnen die Bewegung.**

Ein Verzeichnis sagt Ihnen, dass ein Unternehmen existiert: sein Name, seine Adresse, seine Registernummer.
Das BODACC sagt Ihnen, **was das Unternehmen gerade getan hat** — und wann. Genau darin liegt der Unterschied:

| | Unternehmensverzeichnisse | BODACC.io |
|---|---|---|
| Was Sie erhalten | eine eingefrorene Identitätsakte | datierte Ereignisse |
| Aktualität | quartalsweise aktualisiert | am selben Morgen veröffentlicht |
| Insolvenz | ein Statusmerkmal | das Verfahren, seine Art und sein Datum |
| Abschlüsse | ein boolesches „eingereicht“ | jede Hinterlegung, mit ihrem Bilanzstichtag |
| Mandatsträger | ein Name | jedes Mandat, mit seinen Unternehmen |
| Quelle | eine Kopie | die offizielle Bekanntmachung und ihr PDF |

## 3. Die Bekanntmachungen des BODACC im Detail

Jede Bekanntmachung trägt 23 Felder. Hier ist eine echte, genau so, wie die API BODACC sie zurückgibt:

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

Jede Bekanntmachung verweist auf **ihre vollständige Seite auf bodacc.io**, wo die offizielle Quelle und
ihr PDF nur einen Klick entfernt sind.

Die sieben Familien des BODACC, mit dem französischen Begriff, den Sie in den Daten sehen:

| Familie BODACC | In den Daten | Bedeutung |
|---|---|---|
| Gründungen | `creation` | ein neues Unternehmen wird eingetragen |
| Änderungen | `modification` | Satzung, Geschäftsführung, Sitz, Kapitaländerung |
| Jahresabschlüsse | `dpc` | beim Handelsgericht hinterlegter Jahresabschluss |
| Insolvenzverfahren | `collective` | Insolvenzverwaltung, Liquidation, Sanierung |
| Verkäufe und Übertragungen | `vente` | ein Geschäft wird verkauft oder übertragen |
| Löschungen | `radiation` | das Unternehmen wird aus dem Register entfernt |
| Eintragungen | `immatriculation` | Eintragung ins Handelsregister |

## 4. Die Unternehmensdatensätze des BODACC

Jede Bekanntmachung verweist auf das Unternehmen dahinter. Die API BODACC stellt diese Unternehmen mit der
Identität, der Tätigkeit und der Abschlusshistorie bereit:

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

Über die Identität hinaus: der Tätigkeitsschlüssel (NAF), die Rechtsform, der Verwaltungsstatus,
**das Datum der letzten Abschlusshinterlegung, der letzte Bilanzstichtag und die Anzahl der Tage seither**,
dazu die Kennzeichnungen, die ein Unternehmen tragen kann — Sozialwirtschaft, Bio, RGE, Qualiopi.

## 5. Geschäftsführer und Mandatsträger des BODACC

Hinter jedem Unternehmen stehen die Menschen, die es führen. Die API BODACC listet **4,9 Millionen
Geschäftsführer, Mandatsträger, Liquidatoren und Abschlussprüfer**, jeweils mit:

- ihren Mandaten, Unternehmen für Unternehmen, mit dem jeweiligen Zeitraum
- ihren weiteren Unternehmen, sodass Sie eine Person über eine ganze Laufbahn verfolgen können
- den Bekanntmachungen, die sie betreffen

Das macht aus einem Register einen Graphen: ein Unternehmen, seine Mandatsträger und die Unternehmen, die
diese Mandatsträger ebenfalls führen. Ein einziger Endpunkt stellt ihn direkt bereit.

## 6. Die API BODACC

REST, JSON, kein Schlüssel bei offenen Endpunkten erforderlich, bis zu 500 Datensätze pro Aufruf,
paginiert über `offset`.

```bash
# Die neuesten Bekanntmachungen des BODACC (immer die frischesten zuerst)
curl "https://bodacc.io/api/bodacc/annonces?limit=100"

# Eine einzelne Bekanntmachung, mit ihren Unternehmen, ihren Mandatsträgern und ihrem PDF
curl "https://bodacc.io/api/bodacc/annonces/C202601972306-depot-comptes-988208435-141026-holding-biiz"

# Ein Unternehmen nach SIREN
curl "https://bodacc.io/api/bodacc/entreprises/552081317"

# Jede Bekanntmachung des BODACC zu diesem Unternehmen
curl "https://bodacc.io/api/bodacc/entreprises/552081317/annonces"

# Der Unternehmensgraph: Mandatsträger und ihre weiteren Unternehmen
curl "https://bodacc.io/api/bodacc/entreprises/552081317/graphe"

# Suche nach Name, Stadt, Departement, Tätigkeitsschlüssel oder Zeitraum
curl "https://bodacc.io/api/bodacc/entreprises?q=eiffage&departement=75"
curl "https://bodacc.io/api/bodacc/annonces?famille=collective&date_debut=2026-10-01"
```

Vollständige Referenz: [bodacc.io/de/dokumentation](https://bodacc.io/de/dokumentation) — Endpunkt für
Endpunkt, mit Swagger UI und veröffentlichter OpenAPI-Spezifikation, in 20 Sprachen.

## 7. Datensätze und Exporte des BODACC

Über die API hinaus ist jede Seite von bodacc.io eine stabile, indexierbare URL — Bekanntmachungen,
Unternehmen, Mandatsträger, Regionen, Städte, Statistiken — und die Website veröffentlicht
maschinenlesbare Einstiegspunkte:

- [Sitemaps](https://bodacc.io/sitemap.xml) — das vollständige URL-Verzeichnis, pro Sprache
- [API-Katalog](https://bodacc.io/.well-known/api-catalog) — für Agenten auffindbar
- [RSS](https://bodacc.io/rss.xml) — der tägliche Feed
- [URL-Liste](URLLIST.md) — jeder Einstiegspunkt, eine Liste pro Sprache

## 8. Abdeckung und Aktualität des BODACC

Das BODACC erscheint an Werktagen, nicht am Wochenende. BODACC.io erfasst jede Veröffentlichung und stellt
sie **am selben Morgen** bereit, meist innerhalb von Minuten nach der Freigabe. Jede Bekanntmachung behält
ihr Veröffentlichungsdatum, sodass Sie immer erkennen, was neu ist.

## 9. Wofür das BODACC genutzt wird

- **Compliance und KYC** — prüfen Sie den tatsächlichen Status einer Gegenpartei vor der Unterschrift, nicht ihren Status von vor drei Monaten
- **Due Diligence** — verfolgen Sie die Einreichungen eines Unternehmens, seine Abschlüsse und seine Insolvenzhistorie
- **Kredit- und Risikobewertung** — Insolvenzverfahren und Abschlüsse sind die frühesten Signale
- **Vertriebsinformationen** — eine neue Gründung ist ein neuer Interessent, am Tag ihres Entstehens
- **Journalismus** — unternehmensbezogene Fakten, belegt und datiert
- **Forschung** — 51 Millionen Einreichungen, von den ältesten Registern bis heute Morgen
- **Recht und Buchhaltung** — finden Sie die Unternehmen, für die Sie tätig sind, und was sie eingereicht haben

## 10. Häufige Fragen zum BODACC

**Ist BODACC.io das offizielle BODACC?**

Nein. BODACC.io ist ein unabhängiger Dienst, der die öffentlichen Daten des BODACC nutzbar und abfragbar
macht. Er ist nicht mit der DILA oder einer öffentlichen Stelle verbunden. Jede Bekanntmachung verweist auf
ihre offizielle Quelle.

**Ist die API BODACC kostenlos?**

Offene Endpunkte sind kostenlos und benötigen keinen Schlüssel. Für intensive Nutzung gibt es
kostenpflichtige Tarife — [siehe Preise](https://bodacc.io/de/preise).

**Worin unterscheidet sich das BODACC von einem Unternehmensverzeichnis?**

Ein Verzeichnis liefert die Identität eines Unternehmens. Das BODACC liefert seine Tätigkeit: was es
eingereicht hat, wann, und was das Gericht darüber veröffentlicht hat. Beide ergänzen sich — BODACC.io
enthält auch die Identität.

**Wie aktuell sind die Daten?**

Bekanntmachungen erscheinen am Morgen ihrer Veröffentlichung. Unternehmensdatensätze werden aktualisiert,
sobald Bekanntmachungen eintreffen.

**Wie viele Datensätze pro Aufruf?**

Bis zu 500, mit `offset` für die Paginierung. Bei offenen Endpunkten gibt es keine Obergrenze für die
Anzahl der Aufrufe.

**Kann ich es in der Produktion einsetzen?**

Ja. Die API ist dokumentiert, versioniert und wird über Cloudflare bereitgestellt. Ein Verweis auf
[bodacc.io](https://bodacc.io) ist willkommen.

**Welche Sprachen werden unterstützt?**

Die Website und ihre Dokumentation gibt es in 20 Sprachen. Die API selbst ist sprachneutral: ihre Slugs und
Endpunkte sind für alle gleich.

## 11. Dokumentation des BODACC nach Sprache

Jeder Ordner unten enthält die vollständige Dokumentation des BODACC in seiner eigenen Sprache: die
API-Referenz, die URL-Liste und die täglichen Zusammenfassungen.

| # | Sprache | Dokumentation | URLs | Tägliche Daten |
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

## 12. Links zum BODACC

- [BODACC.io](https://bodacc.io) — die Live-Website
- [Unternehmenssuche](https://bodacc.io/de/unternehmen) · [Bekanntmachungen](https://bodacc.io/de/bekanntmachungen) · [Mandatsträger](https://bodacc.io/de/personen)
- [Dokumentation der API](https://bodacc.io/de/dokumentation) · [Swagger UI](https://bodacc.io/api/bodacc/docs)
- [Preise](https://bodacc.io/de/preise) · [Technologie](https://bodacc.io/de/technologie)
- [URL-Liste (mehrsprachiger Index)](URLLIST.md)

---

*Das BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) ist die offizielle Veröffentlichung
der rechtlichen Bekanntmachungen französischer Unternehmen. BODACC.io ist ein unabhängiger Dienst und nicht
mit der DILA verbunden.*
