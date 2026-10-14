<div align="center">

# BODACC.io : de BODACC API voor Franse wettelijke bekendmakingen en bedrijfsgegevens

**Elke Franse bedrijfsaangifte, in realtime.** Oprichtingen, wijzigingen, deponering van
jaarrekeningen, insolventieprocedures, verkopen, doorhalingen — elke bekendmaking van BODACC,
gekoppeld aan haar bedrijf, haar bestuurders en haar officiële bron. Gratis en open, in 20 talen.

[**bodacc.io**](https://bodacc.io) · [API-documentatie](https://bodacc.io/nl/documentatie) · [Swagger](https://bodacc.io/api/bodacc/docs) · [RSS](https://bodacc.io/rss.xml)

</div>

## 1. Live gegevens van BODACC

| Gegevensset van BODACC | Records | Live |
|---|---|---|
| Wettelijke bekendmakingen van BODACC | 51 043 403 | ![Bekendmakingen](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Bekendmakingen&color=blue) |
| Franse bedrijven | 30 032 566 | ![Bedrijven](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Bedrijven&color=green) |
| Bestuurders en functionarissen | 4 935 692 | ![Personen](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Personen&color=orange) |
| Overheidsopdrachten (BOAMP) | 1 716 163 | ![Contracten](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=boamp&label=Contracten&color=purple) |

Die cijfers zijn niet gekopieerd en geplakt: ze worden **live geleverd door de BODACC API zelf**, op
[`/api/bodacc/stats/counts-formatted`](https://bodacc.io/api/bodacc/stats/counts-formatted).
Controleer ze zelf, en controleer ze morgen opnieuw.

**Vandaag** (14 oktober 2026): **5 920 bekendmakingen** — meest voorkomende familie: deponering van jaarrekeningen (2 306).

| Familie van BODACC | Bekendmakingen vandaag |
|---|---|
| Deponering van jaarrekeningen | 2 306 |
| Oprichtingen | 1 415 |
| Wijzigingen | 1 193 |
| Doorhalingen | 500 |
| Insolventieprocedures | 323 |
| Inschrijvingen | 118 |
| Verkopen en overdrachten | 65 |

## 2. Wat de BODACC API u biedt

De BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) is het officiële publicatieblad
van het Franse bedrijfsleven. Elke oprichting, elke deponering van een jaarrekening, elk
faillissement, elke verkoop worden daar wettelijk gepubliceerd. BODACC.io maakt van dat
publicatieblad een database die u kunt bevragen.

**De meeste bedrijfsdatabases geven u een momentopname. De BODACC API geeft u de beweging.**

Een register vertelt u dat een bedrijf bestaat: zijn naam, zijn adres, zijn registratienummer. De
BODACC vertelt u **wat het bedrijf zojuist heeft gedaan**, en wanneer. Dat verschil is de kern:

| | Bedrijvengidsen | BODACC.io |
|---|---|---|
| Wat u krijgt | een bevroren identiteitsfiche | gedateerde gebeurtenissen |
| Actualiteit | elk kwartaal vernieuwd | dezelfde ochtend gepubliceerd |
| Insolventie | een statusmarkering | de procedure, haar aard en haar datum |
| Jaarrekeningen | een boolean "gedeponeerd" | elke deponering, met haar afsluitdatum |
| Bestuurders | een naam | elk mandaat, met zijn bedrijven |
| Bron | een kopie | de officiële bekendmaking en haar PDF |

## 3. Wettelijke bekendmakingen van BODACC in detail

Elke bekendmaking bevat 23 velden. Hier is er een echte, precies zoals de BODACC API die teruggeeft:

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

Elke bekendmaking linkt naar **haar volledige pagina op bodacc.io**, waar de officiële bron en haar
PDF één klik verwijderd zijn.

De zeven families van BODACC, met de Franse term die u in de gegevens ziet:

| Familie van BODACC | In de gegevens | Wat het betekent |
|---|---|---|
| Oprichtingen | `creation` | een nieuw bedrijf wordt ingeschreven |
| Wijzigingen | `modification` | statuten, bestuur, adres, kapitaalwijziging |
| Deponering van jaarrekeningen | `dpc` | jaarrekening gedeponeerd bij de griffie van de rechtbank |
| Insolventieprocedures | `collective` | gerechtelijke bescherming, liquidatie, herstel |
| Verkopen en overdrachten | `vente` | een onderneming wordt verkocht of overgedragen |
| Doorhalingen | `radiation` | het bedrijf wordt uit het register geschrapt |
| Inschrijvingen | `immatriculation` | inschrijving in het handelsregister |

## 4. Bedrijfsfiches van BODACC

Elke bekendmaking wijst naar het bedrijf erachter. De BODACC API stelt die bedrijven beschikbaar met
de identiteit, de activiteit en de boekhoudkundige geschiedenis:

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

Meer dan de identiteit: de activiteitencode (NAF), de rechtsvorm, de administratieve status, **de
datum van de laatste deponering van een jaarrekening, de laatste afsluitdatum en het aantal dagen
sindsdien**, plus de labels die een bedrijf kan dragen — sociale economie, bio, RGE, Qualiopi.

## 5. Bestuurders en functionarissen van BODACC

Achter elk bedrijf staan de mensen die het leiden. De BODACC API vermeldt **4,9 miljoen bestuurders,
functionarissen, vereffenaars en commissarissen**, elk met:

- hun mandaten, bedrijf per bedrijf, met de betrokken periode
- hun andere bedrijven, zodat u een persoon door een loopbaan heen kunt volgen
- de bekendmakingen die hen betreffen

Dat is wat een register in een graaf verandert: een bedrijf, zijn bestuurders, en de bedrijven die
die bestuurders ook leiden. Eén endpoint stelt dat rechtstreeks beschikbaar.

## 6. De BODACC API

REST, JSON, geen sleutel nodig op open endpoints, tot 500 records per oproep, gepagineerd met `offset`.

```bash
# De nieuwste bekendmakingen van BODACC (altijd de meest recente eerst)
curl "https://bodacc.io/api/bodacc/annonces?limit=100"

# Eén bekendmaking, met haar bedrijven, haar bestuurders en haar PDF
curl "https://bodacc.io/api/bodacc/annonces/C202601972306-depot-comptes-988208435-141026-holding-biiz"

# Een bedrijf op SIREN
curl "https://bodacc.io/api/bodacc/entreprises/552081317"

# Elke bekendmaking van BODACC over dat bedrijf
curl "https://bodacc.io/api/bodacc/entreprises/552081317/annonces"

# De bedrijfsgraaf: bestuurders en hun andere bedrijven
curl "https://bodacc.io/api/bodacc/entreprises/552081317/graphe"

# Zoeken op naam, stad, departement, activiteitencode of datumbereik
curl "https://bodacc.io/api/bodacc/entreprises?q=eiffage&departement=75"
curl "https://bodacc.io/api/bodacc/annonces?famille=collective&date_debut=2026-10-01"
```

Volledige referentie: [bodacc.io/nl/documentatie](https://bodacc.io/nl/documentatie) — endpoint per
endpoint, met een Swagger-interface en een gepubliceerde OpenAPI-specificatie, in 20 talen.

## 7. Gegevensverzamelingen en exports van BODACC

Naast de API is elke pagina van bodacc.io een stabiele, crawlbare URL — wettelijke bekendmakingen,
bedrijven, bestuurders, regio's, steden, statistieken — en de site publiceert machineleesbare
ingangspunten:

- [Sitemaps](https://bodacc.io/sitemap.xml) — de volledige URL-inventaris, per taal
- [API-catalogus](https://bodacc.io/.well-known/api-catalog) — vindbaar voor agents
- [RSS](https://bodacc.io/rss.xml) — de dagelijkse feed
- [URL-lijst](URLLIST.md) — elk ingangspunt, één lijst per taal

## 8. Dekking en actualiteit van BODACC

De BODACC verschijnt op werkdagen, niet in het weekend. BODACC.io verzamelt elke publicatie en maakt
ze **dezelfde ochtend** beschikbaar, meestal binnen enkele minuten na vrijgave. Elke bekendmaking
behoudt haar publicatiedatum, zodat u altijd kunt zien wat nieuw is.

## 9. Waarvoor men BODACC gebruikt

- **Naleving en KYC** — controleer de werkelijke status van een tegenpartij vóór ondertekening, niet haar status van drie maanden geleden
- **Due diligence** — volg de aangiften van een bedrijf, zijn jaarrekeningen en zijn insolventieverleden
- **Krediet- en risicoscoring** — insolventieprocedures en deponeringen van jaarrekeningen zijn de vroegste signalen
- **Verkoopintelligentie** — een nieuwe inschrijving is een potentiële nieuwe klant, op de dag dat ze plaatsvindt
- **Journalistiek** — feiten op bedrijfsniveau, met bron en datum
- **Onderzoek** — 51 miljoen aangiften, van de oudste registers tot deze ochtend
- **Rechtskundig en boekhoudkundig** — vind de bedrijven waarvoor u optreedt, en wat zij hebben gedeponeerd

## 10. Veelgestelde vragen over BODACC

**Is BODACC.io de officiële BODACC?**

Nee. BODACC.io is een onafhankelijke dienst die de openbare gegevens van BODACC bruikbaar en
bevraagbaar maakt. Hij is niet verbonden met de DILA of enige openbare instantie. Elke bekendmaking
linkt terug naar haar officiële bron.

**Is de BODACC API gratis?**

Open endpoints zijn gratis en vereisen geen sleutel. Voor intensief gebruik bestaan er betaalde
formules — [zie de prijzen](https://bodacc.io/nl/prijzen).

**Wat is het verschil tussen de BODACC en een bedrijvengids?**

Een gids geeft u de identiteit van een bedrijf. De BODACC geeft u zijn activiteit: wat het heeft
gedeponeerd, wanneer, en wat de rechtbank erover heeft gepubliceerd. De twee vullen elkaar aan —
BODACC.io bevat ook de identiteit.

**Hoe actueel zijn de gegevens?**

Bekendmakingen verschijnen de ochtend waarop ze worden gepubliceerd. Bedrijfsfiches worden bijgewerkt zodra er bekendmakingen binnenkomen.

**Hoeveel records per oproep?**

Tot 500, met `offset` voor paginering. Er is geen limiet op het aantal oproepen op open endpoints.

**Kan ik het in productie gebruiken?**

Ja. De API is gedocumenteerd, geversioneerd en geserveerd vanaf Cloudflare. Naamsvermelding van
[bodacc.io](https://bodacc.io) wordt gewaardeerd.

**Welke talen worden ondersteund?**

De site en haar documentatie bestaan in 20 talen. De API zelf is taalneutraal: de slugs en endpoints
zijn voor iedereen dezelfde.

## 11. Documentatie van BODACC per taal

Elke map hieronder bevat de volledige documentatie van BODACC in haar eigen taal: de API-referentie,
de URL-lijst en de dagelijkse overzichten.

| # | Taal | Documentatie | URL's | Dagelijkse gegevens |
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

## 12. Links naar BODACC

- [BODACC.io](https://bodacc.io) — de live site
- [Bedrijfszoekopdracht](https://bodacc.io/nl/bedrijven) · [Wettelijke bekendmakingen](https://bodacc.io/nl/aankondigingen) · [Bestuurders](https://bodacc.io/nl/personen)
- [API-documentatie](https://bodacc.io/nl/documentatie) · [Swagger-interface](https://bodacc.io/api/bodacc/docs)
- [Prijzen](https://bodacc.io/nl/prijzen) · [Technologie](https://bodacc.io/nl/technologie)
- [URL-lijst (meertalige index)](URLLIST.md)

---

*BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) is de officiële publicatie van
wettelijke bekendmakingen van Franse bedrijven. BODACC.io is een onafhankelijke dienst en is niet
verbonden met de DILA.*
