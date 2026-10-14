<div align="center">

# BODACC.io : BODACC API dla francuskich ogłoszeń urzędowych i danych o firmach

**Każdy francuski wpis urzędowy, w czasie rzeczywistym.** Zakładanie spółek, zmiany, składanie
sprawozdań finansowych, postępowania upadłościowe, sprzedaże, wykreślenia — każde ogłoszenie BODACC,
powiązane z firmą, jej zarządem i jej oficjalnym źródłem. Bezpłatnie i otwarcie, w 20 językach.

[**bodacc.io**](https://bodacc.io) · [Dokumentacja API](https://bodacc.io/pl/dokumentacja) · [Swagger](https://bodacc.io/api/bodacc/docs) · [RSS](https://bodacc.io/rss.xml)

</div>

## 1. Dane BODACC na żywo

| Zbiór danych BODACC | Rekordy | Na żywo |
|---|---|---|
| Oficjalne ogłoszenia BODACC | 51 043 403 | ![Ogłoszenia](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Ogłoszenia&color=blue) |
| Francuskie firmy | 30 032 566 | ![Firmy](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Firmy&color=green) |
| Członkowie zarządów i kadry kierowniczej | 4 935 692 | ![Osoby](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Osoby&color=orange) |
| Zamówienia publiczne (BOAMP) | 1 716 163 | ![Umowy](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=boamp&label=Umowy&color=purple) |

Te liczby nie są skopiowane: są **dostarczane na żywo przez samo BODACC API**, pod adresem
[`/api/bodacc/stats/counts-formatted`](https://bodacc.io/api/bodacc/stats/counts-formatted). Sprawdź
je sam, a potem sprawdź je ponownie jutro.

**Dzisiaj** (14 października 2026): **5 920 ogłoszeń** — najczęstsza rodzina: składanie sprawozdań finansowych (2 306).

| Rodzina BODACC | Ogłoszenia dzisiaj |
|---|---|
| Składanie sprawozdań finansowych | 2 306 |
| Zakładanie spółek | 1 415 |
| Zmiany | 1 193 |
| Wykreślenia | 500 |
| Postępowania upadłościowe | 323 |
| Rejestracje | 118 |
| Sprzedaże i cesje | 65 |

## 2. Co daje BODACC API

BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) to oficjalny dziennik urzędowy
francuskiego życia gospodarczego. Każde założenie spółki, każde złożenie sprawozdania finansowego,
każda upadłość, każda sprzedaż są tam publikowane z mocy prawa. BODACC.io zamienia ten dziennik w
bazę danych, którą można odpytywać.

**Większość baz danych o firmach daje ci migawkę. BODACC API daje ci ruch.**

Rejestr mówi ci, że firma istnieje: jej nazwa, adres, numer rejestracyjny. BODACC mówi ci, **co
firma właśnie zrobiła**, i kiedy. Ta różnica jest istotą sprawy:

| | Katalogi firm | BODACC.io |
|---|---|---|
| Co otrzymujesz | zamrożony zapis tożsamości | zdarzenia z datą |
| Aktualność | odświeżane kwartalnie | publikowane tego samego ranka |
| Upadłość | flaga statusu | postępowanie, jego charakter i data |
| Sprawozdania | wartość logiczna "złożono" | każde złożenie, z datą zamknięcia |
| Zarząd | nazwisko | każdy mandat, z jego spółkami |
| Źródło | kopia | oficjalne ogłoszenie i jego PDF |

## 3. Oficjalne ogłoszenia BODACC w szczegółach

Każde ogłoszenie zawiera 23 pola. Oto prawdziwe ogłoszenie, dokładnie takie, jakie zwraca BODACC API:

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

Każde ogłoszenie prowadzi do **swojej pełnej strony na bodacc.io**, gdzie oficjalne źródło i jego
PDF są o jedno kliknięcie.

Siedem rodzin BODACC, z francuskim terminem, który zobaczysz w danych:

| Rodzina BODACC | W danych | Co to oznacza |
|---|---|---|
| Zakładanie spółek | `creation` | nowa firma zostaje zarejestrowana |
| Zmiany | `modification` | statut, zarząd, adres, zmiana kapitału |
| Składanie sprawozdań finansowych | `dpc` | roczne sprawozdanie finansowe złożone w sekretariacie sądu |
| Postępowania upadłościowe | `collective` | postępowanie układowe, likwidacja, sanacja |
| Sprzedaże i cesje | `vente` | przedsiębiorstwo zostaje sprzedane lub przeniesione |
| Wykreślenia | `radiation` | firma zostaje wykreślona z rejestru |
| Rejestracje | `immatriculation` | wpis do rejestru handlowego |

## 4. Karty firm BODACC

Każde ogłoszenie wskazuje firmę, która za nim stoi. BODACC API udostępnia te firmy wraz z
tożsamością, działalnością i historią księgową:

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

Poza tożsamością: kod działalności (NAF), forma prawna, status administracyjny, **data ostatniego
złożenia sprawozdania finansowego, ostatnia data zamknięcia i liczba dni od tego czasu**, a także
etykiety, które firma może nosić — gospodarka społeczna, bio, RGE, Qualiopi.

## 5. Członkowie zarządów i kadra kierownicza BODACC

Za każdą firmą stoją ludzie, którzy nią kierują. BODACC API wymienia **4,9 mln członków zarządów,
kadry kierowniczej, likwidatorów i audytorów**, a każdy z nich ma:

- swoje mandaty, firma po firmie, z danym okresem
- swoje inne firmy, dzięki czemu można śledzić osobę przez całą karierę
- ogłoszenia, które ich dotyczą

To właśnie zamienia rejestr w graf: firma, jej zarząd i firmy, którymi ci członkowie zarządu także
kierują. Jeden endpoint udostępnia to bezpośrednio.

## 6. BODACC API

REST, JSON, klucz niepotrzebny w otwartych endpointach, do 500 rekordów na wywołanie, stronicowanie przez `offset`.

```bash
# Najnowsze ogłoszenia BODACC (zawsze najświeższe najpierw)
curl "https://bodacc.io/api/bodacc/annonces?limit=100"

# Pojedyncze ogłoszenie, z jego firmami, jego zarządem i jego PDF
curl "https://bodacc.io/api/bodacc/annonces/C202601972306-depot-comptes-988208435-141026-holding-biiz"

# Firma po numerze SIREN
curl "https://bodacc.io/api/bodacc/entreprises/552081317"

# Wszystkie ogłoszenia BODACC dotyczące tej firmy
curl "https://bodacc.io/api/bodacc/entreprises/552081317/annonces"

# Graf firmy: zarząd i jego inne firmy
curl "https://bodacc.io/api/bodacc/entreprises/552081317/graphe"

# Wyszukiwanie po nazwie, mieście, departamencie, kodzie działalności lub zakresie dat
curl "https://bodacc.io/api/bodacc/entreprises?q=eiffage&departement=75"
curl "https://bodacc.io/api/bodacc/annonces?famille=collective&date_debut=2026-10-01"
```

Pełne odniesienie: [bodacc.io/pl/dokumentacja](https://bodacc.io/pl/dokumentacja) — endpoint po
endpointcie, z interfejsem Swagger i opublikowaną specyfikacją OpenAPI, w 20 językach.

## 7. Zbiory danych i eksporty BODACC

Poza API każda strona bodacc.io jest stabilnym, indeksowalnym adresem URL — oficjalne ogłoszenia,
firmy, członkowie zarządów, regiony, miasta, statystyki — a serwis publikuje punkty wejścia czytelne
dla maszyn:

- [Mapy witryny](https://bodacc.io/sitemap.xml) — pełny spis adresów URL, dla każdego języka
- [Katalog API](https://bodacc.io/.well-known/api-catalog) — wykrywalny przez agentów
- [RSS](https://bodacc.io/rss.xml) — dzienny kanał
- [Lista URL](URLLIST.md) — każdy punkt wejścia, jedna lista na język

## 8. Zasięg i aktualność BODACC

BODACC ukazuje się w dni robocze, nie w weekendy. BODACC.io gromadzi każdą publikację i udostępnia
ją **tego samego ranka**, zwykle w kilka minut po publikacji. Każde ogłoszenie zachowuje swoją datę
publikacji, więc zawsze wiadomo, co jest nowe.

## 9. Do czego wykorzystuje się BODACC

- **Zgodność i KYC** — sprawdź rzeczywisty status kontrahenta przed podpisaniem umowy, a nie jego status sprzed trzech miesięcy
- **Due diligence** — śledź wpisy firmy, jej sprawozdania finansowe i historię upadłości
- **Ocena kredytowa i ryzyka** — postępowania upadłościowe i składanie sprawozdań to najwcześniejsze sygnały
- **Informacje handlowe** — nowa rejestracja to nowy potencjalny klient, w dniu, w którym się pojawia
- **Dziennikarstwo** — fakty na poziomie firm, ze źródłem i datą
- **Badania** — 51 mln wpisów, od najstarszych rejestrów do dzisiejszego ranka
- **Prawo i księgowość** — znajdź firmy, które obsługujesz, i to, co złożyły

## 10. Najczęściej zadawane pytania o BODACC

**Czy BODACC.io to oficjalny BODACC?**

Nie. BODACC.io to niezależna usługa, która czyni publiczne dane BODACC użytecznymi i możliwymi do
odpytywania. Nie jest powiązana z DILA ani z żadnym organem publicznym. Każde ogłoszenie prowadzi z
powrotem do swojego oficjalnego źródła.

**Czy BODACC API jest bezpłatne?**

Otwarte endpointy są bezpłatne i nie wymagają klucza. Dla intensywnego użytkowania istnieją plany
płatne — [zobacz cennik](https://bodacc.io/pl/cennik).

**Jaka jest różnica między BODACC a katalogiem firm?**

Katalog daje tożsamość firmy. BODACC daje jej działalność: co złożyła, kiedy, i co sąd o niej
opublikował. Oba źródła się uzupełniają — BODACC.io zawiera także tożsamość.

**Jak świeże są dane?**

Ogłoszenia pojawiają się rano w dniu publikacji. Karty firm są aktualizowane wraz z napływem ogłoszeń.

**Ile rekordów na wywołanie?**

Do 500, z `offset` do stronicowania. Liczba wywołań otwartych endpointów nie jest ograniczona.

**Czy mogę używać tego w produkcji?**

Tak. API jest udokumentowane, wersjonowane i serwowane z Cloudflare. Podanie źródła
[bodacc.io](https://bodacc.io) jest mile widziane.

**Jakie języki są obsługiwane?**

Serwis i jego dokumentacja istnieją w 20 językach. Samo API jest neutralne językowo: jego slugi i
endpointy są takie same dla wszystkich.

## 11. Dokumentacja BODACC w poszczególnych językach

Każdy folder poniżej zawiera pełną dokumentację BODACC w swoim języku: odniesienie do API, listę
adresów URL i dzienne podsumowania.

| # | Język | Dokumentacja | Adresy URL | Dane dzienne |
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

## 12. Linki do BODACC

- [BODACC.io](https://bodacc.io) — działający serwis
- [Wyszukiwarka firm](https://bodacc.io/pl/firmy) · [Oficjalne ogłoszenia](https://bodacc.io/pl/ogloszenia) · [Zarządy](https://bodacc.io/pl/osoby)
- [Dokumentacja API](https://bodacc.io/pl/dokumentacja) · [Interfejs Swagger](https://bodacc.io/api/bodacc/docs)
- [Cennik](https://bodacc.io/pl/cennik) · [Technologia](https://bodacc.io/pl/technologia)
- [Lista URL (indeks wielojęzyczny)](URLLIST.md)

---

*BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) to oficjalna publikacja urzędowych
ogłoszeń francuskich firm. BODACC.io to niezależna usługa, niepowiązana z DILA.*
