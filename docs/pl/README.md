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
> 📰 [Pełne podsumowanie](recaps/README.md) · 🏠 [Za kulisami BODACC.io](coulisses/COULISSES.md)

<div align="center">

![Python 3.12](https://img.shields.io/badge/Python-3.12-3776AB?logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-API-009688?logo=fastapi&logoColor=white)
![PostgreSQL 16](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)

![Annonces](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Ogłoszenia&color=blue)
![Entreprises](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Firmy&color=green)
![Personnes](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Osoby&color=orange)
![Site bodacc.io](https://img.shields.io/badge/bodacc.io-Explorer-important?logo=internetexplorer&logoColor=white&style=for-the-badge)

</div>

**API, która przekształca francuskie ogłoszenia prawne w dane ustrukturyzowane, powiązane i użyteczne — w czasie rzeczywistym.**

BODACC (Biuletyn Urzędowy Ogłoszeń Cywilnych i Handlowych) to oficjalna publikacja dokumentująca życie prawne francuskich przedsiębiorstw: rejestracje, zmiany, wykreślenia, postępowania upadłościowe, sprzedaże, depozyty sprawozdań finansowych. Te teksty są publiczne, ale pozostają w formie surowych dokumentów: nie są ustrukturyzowane, nie są ze sobą powiązane ani łatwe do przeszukiwania.

**BODACC-api czyni je użytecznymi.** Każde ogłoszenie jest automatycznie analizowane i przekształcane w dane ustrukturyzowane (SIREN, nazwa firmy, adres, NAF, członkowie zarządu, kwoty...), a następnie powiązane z przedsiębiorstwem i osobami w nim występującymi. Efekt: kompletny graf francuskiego życia gospodarczego, dostępny za pomocą jednego zapytania HTTP.

> 🌐 Strona: [bodacc.io](https://bodacc.io) · 📖 Swagger: [https://bodacc.io/api/bodacc/docs](https://bodacc.io/api/bodacc/docs) · 💶 [Cennik](https://bodacc.io/pl/tarifs)

---

## ✨ Dlaczego BODACC-api?

| | |
|---|---|
| 🗂 **Pełna historia od 2004 roku** | Miliony ogłoszeń w bazie, pełne pokrycie — nie ruchome okno |
| ⚡ **Czas rzeczywisty** | Dzisiejsze ogłoszenia są dostępne każdego ranka, przed otwarciem biur |
| 🕸 **Graf, nie pliki** | Ogłoszenie → przedsiębiorstwo (SIREN) → członkowie zarządu → mandaty → zamówienia publiczne: wszystko jest powiązane i dostępne w jednym zapytaniu |
| ✨ **Od surowego tekstu do danych ustrukturyzowanych** | SIREN, NAF, adres, członkowie zarządu, procedury... automatycznie wyodrębniane z każdego tekstu prawnego |
| 🌍 **20 języków** | Interfejs i treści są tłumaczone — Twoje zespoły i klienci mówią w swoim języku |
| 🤖 **Gotowość dla agentów AI** | 100/100 w audycie isitagentready (DNSSEC, DNS-AID, auth.md, WebMCP, llms.txt) |
| 🚪 **Zero tarcia przy testowaniu** | Wszystkie endpointy odczytu są dostępne bez klucza — oceniasz przed zapłatą |

---

## 🏭 Nasza wartość dodana: potok przetwarzania

To, co robi różnicę, to nie surowe dane (są publiczne), ale to, co z nimi robimy — każdego dnia, automatycznie:

**1. Niezawodna i kompletna ingestia.** Każdego ranka przed 09:00 nowe ogłoszenia opublikowane przez DILA są integrowane z naszą bazą. Pełna historia sięga 2004 roku, znacznie dalej niż oferuje publiczna konsultacja. Ponowne uruchomienie ingestii nie tworzy żadnych duplikatów: nasze dane są stale weryfikowane i spójne.

**2. Inteligentne wzbogacanie.** Każde ogłoszenie to tekst prawny — nasz hybrydowy silnik ekstrakcji (reguły biznesowe + AI) przekształca go w dane ustrukturyzowane: numer SIREN, nazwę firmy, adres, kod NAF, członków zarządu, mandaty, kwoty, procedury. To, co wymaga godzin ludzkiego czytania, staje się polami JSON dostępnymi do zapytań.

**3. Graf relacyjny.** Ogłoszenie o postępowaniu upadłościowym jest wartościowe tylko wtedy, gdy wiemy, do jakiego przedsiębiorstwa się odnosi i kto jest jego członkiem zarządu. Nasz silnik rozwiązywania tożsamości łączy każde ogłoszenie z jego przedsiębiorstwem (SIREN), każdą osobę z jej mandatami, każde zamówienie publiczne z jego wykonawcą. Pytasz o francuskie życie gospodarcze jak o bazę danych — nie jak o stos plików PDF.

**4. Dystrybucja w czasie rzeczywistym.** Gdy tylko ogłoszenie zostanie opublikowane, jest dostępne przez API, wraz z relacjami i wzbogaceniem. Bez plików do pobierania, bez ETL do utrzymania: wystarczy jedno zapytanie HTTP.

---

## ⚖️ Porównanie: gdzie jesteśmy

| | **Oficjalna strona (bodacc.fr)** | **Pappers** | **BODACC.io** |
|---|---|---|---|
| **Historia** | Tylko od 2008 roku | Historia komercyjna w zależności od abonamentu | **Kompletna od 2004 roku** |
| **API** | ❌ Brak | API zarezerwowane dla wyższych ofert | ✅ **Udokumentowane API REST, bez klucza do odczytu** |
| **Dane ustrukturyzowane** | ❌ Konsultacja PDF | ✅ Wzbogacone profile | ✅ **Ogłoszenia + graf przedsiębiorstwa/osoby/zamówienia** |
| **Czas rzeczywisty** | Publikacja papierowa dostępna online | Codzienna aktualizacja | ✅ **Każdego ranka przed 09:00** |
| **Cena** | Bezpłatne, ale ograniczone | Od **29,90 €/mies.** za podstawowy dostęp | **Przystępne pakiety, od darmowego do eksploracji** |
| **Odbiorcy** | Szeroka publiczność | Profesjonaliści (zgodność, monitoring) | **Developerzy, fintech, legaltech, zespoły danych** |

**Mocne strony oficjalnej strony**: bezpłatna, niezawodna, oficjalna. **Słabe strony**: brak API, historia ograniczona do 2008 roku, brak danych ustrukturyzowanych — pozostajesz w plikach PDF.

**Mocne strony Pappers**: bardzo dopracowany interfejs, agregacja INSEE + INPI + BODACC, wbudowany monitoring. **Słabe strony**: cena (29,90 €/mies. za podstawowy dostęp, API i pełna historia są droższe), rozwiązanie zorientowane na konsultację, a nie na użyteczne dane.

**Nasza pozycja**: **pełna historia od 2004 roku, szybciej niż na oficjalnej stronie — i w cenie niższej niż Pappers.** Zaprojektowany dla tych, którzy chcą podłączyć dane do własnych narzędzi, a nie dla tych, którzy chcą kolejnego ekranu.

> 💶 Zobacz pakiety: [bodacc.io/pl/tarifs](https://bodacc.io/pl/tarifs) — Bezpłatny · Pro · Enterprise · LIFE

---

## 🚀 Wypróbuj w 30 sekund

Wszystkie endpointy odczytu są dostępne **bez klucza**:

```bash
# Wyszukaj przedsiębiorstwo po nazwie
curl "https://bodacc.io/api/bodacc/annonces?q=rizom&limit=5"

# Szczegóły ogłoszenia (z relacjami: przedsiębiorstwa + osoby)
curl "https://bodacc.io/api/bodacc/annonces/A202601432266"

# Profil przedsiębiorstwa (ostatnie ogłoszenia + członkowie zarządu + zamówienia publiczne)
curl "https://bodacc.io/api/bodacc/entreprises/912969573"

# Statystyki globalne
curl "https://bodacc.io/api/bodacc/stats"

# Wolumen dzienny (ostatnie 30 dni)
curl "https://bodacc.io/api/bodacc/stats/daily30"
```

---

## 📡 Endpointy

### Ogłoszenia

| Metoda | Ścieżka | Opis |
|---|---|---|
| `GET` | `/bodacc/annonces` | Wyszukiwanie: `q` (nazwa/SIREN), `famille`, `departement`, daty, paginacja `limit`/`offset` |
| `GET` | `/bodacc/annonces/{id}` | Pełne szczegóły: `raw_data` + wzbogacenie + `relations` (powiązane przedsiębiorstwa i osoby) |
| `GET` | `/bodacc/enrichi/{id}` | Wersja ustrukturyzowana (siren, nazwa, NAF, członkowie zarządu...) |
| `POST` | `/bodacc/enrichi/batch` | Wzbogacanie wsadowe |

### Przedsiębiorstwa i osoby

| Metoda | Ścieżka | Opis |
|---|---|---|
| `GET` | `/bodacc/entreprises` | Wyszukiwanie przedsiębiorstw (nazwa, miasto, NAF, kod pocztowy) |
| `GET` | `/bodacc/entreprises/{siren}` | Profil INSEE + `annonces_recentes`, `dirigeants`, `marches_publics`, `stats` |
| `GET` | `/bodacc/entreprises/by-slug/{slug}` | Profil według sluga SEO |
| `GET` | `/bodacc/personnes/{id}` | Profil osoby: mandaty (role) + powiązane przedsiębiorstwa |

### Statystyki

| Metoda | Ścieżka | Opis |
|---|---|---|
| `GET` | `/bodacc/stats` | Sumy, według rodziny, według daty |
| `GET` | `/bodacc/stats/daily` | Wolumen dnia (według publikacji, departamentu, rodziny) |
| `GET` | `/bodacc/stats/daily30` | Szereg z ostatnich 30 dni |
| `GET` | `/bodacc/stats/counts` | Liczniki: ogłoszenia, przedsiębiorstwa, osoby |
| `GET` | `/bodacc/graph/categories` | Rozkład według kategorii |

### Alerty i integracje

| Metoda | Ścieżka | Opis |
|---|---|---|
| `GET/POST/DELETE` | `/bodacc/alertes` | Alerty według SIREN (monitorowanie przedsiębiorstwa) |
| `POST` | `/bodacc/ingest?target_date=YYYY-MM-DD` | Wyzwolenie ingestii dla daty |
| `POST` | `/bodacc/import` | Import wsadowy (backfill) |

### Rejestr NAF (INSEE)

| Metoda | Ścieżka | Opis |
|---|---|---|
| `GET` | `/bodacc/naf` | Kompletny rejestr NAF rev. 2 (732 podklasy, 615 klas) — oficjalne etykiety INSEE |
| `GET` | `/bodacc/naf?q=commerce` | Wyszukiwanie NAF według etykiety |
| `GET` | `/bodacc/naf?code=46.72Z` | Karta kodu NAF |

---

## 📊 Dane

Plakietki na górze strony to **liczniki w czasie rzeczywistym**: ogłoszenia BODACC, przedsiębiorstwa SIRENE i wyodrębnione osoby — zmieniają się w miarę konsolidacji historii i wzbogacania.

Stałe punkty odniesienia:

- 📰 **Ogłoszenia BODACC**: pełna historia od 2004 roku, aktualizowana każdego ranka przed 09:00
- 🏢 **Przedsiębiorstwa (SIRENE)**: 29,8 mln francuskich jednostek prawnych (rejestr INSEE)
- 👤 **Wyodrębnione osoby**: członkowie zarządu, likwidatorzy, biegli rewidenci... w ciągłej konsolidacji
- 📦 **Zamówienia publiczne (BOAMP)**: 1,69 mln kontraktów publicznych 2015 → 2026

---

## 🛠 Technologia

| Warstwa | Technologia |
|---|---|
| **API** | Python · FastAPI · PostgreSQL 16 |
| **Dane** | Indeksowanie trigramowe, pełnotekstowe wyszukiwanie, JSONB |
| **Ingestia** | Zautomatyzowany potok, codzienna integracja, idempotentny |
| **Wzbogacanie** | Ekstrakcja hybrydowa (reguły biznesowe + AI) |
| **Frontend** | Next.js · i18n 20 języków |
| **Infrastruktura** | Docker · Cloudflare (CDN, cache, DNSSEC) |
| **Agenci AI** | Serwer MCP · DNS-AID · auth.md · llms.txt |

---

## 🔓 Open data

Źródłowe dane są publiczne i bezpłatne:

- **BODACC**: [data.gouv.fr / DILA](https://www.data.gouv.fr/fr/datasets/bodacc-annonces-commerciales/) (ogłoszenia prawne)
- **SIRENE**: [INSEE](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/) (29,8 mln jednostek prawnych)
- **BOAMP**: [Opendatasoft / DILA](https://boamp-datadila.opendatasoft.com) (zamówienia publiczne)

**BODACC-api dodaje strukturę i graf do tych surowych danych**: analiza tekstów prawnych, rozwiązywanie tożsamości (osoby), powiązania przedsiębiorstwo ↔ ogłoszenie ↔ kontrakt.

---

## 🌐 Eksploruj stronę

[Strona główna](https://bodacc.io/pl) · [Ogłoszenia](https://bodacc.io/pl/annonces) · [Przedsiębiorstwa](https://bodacc.io/pl/entreprises) · [Osoby](https://bodacc.io/pl/personnes) · [Cennik](https://bodacc.io/pl/tarifs) · [Technologia](https://bodacc.io/pl/technologie)

---

## 📄 Licencja i kontakt

- Licencja: MIT (kod) — dane pozostają podległe licencjom ich producentów (DILA, INSEE)
- Strona: [bodacc.io](https://bodacc.io)
- Issues i PR: mile widziane w tym repozytorium

---

*BODACC (Biuletyn Urzędowy Ogłoszeń Cywilnych i Handlowych) to oficjalna publikacja ogłoszeń prawnych francuskich przedsiębiorstw. Ten projekt nie jest powiązany z DILA.*
