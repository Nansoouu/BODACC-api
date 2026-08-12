# 🏠 Za kulisami BODACC.io

BODACC.io sprawia, że oficjalne ogłoszenia francuskich firm są **łatwe do
przeglądania**. Ale skąd pochodzą te dane? Jak trafiają na Twój ekran?

To mały zespół automatycznych pracowników, który każdego dnia działa za
kulisami. Oto ich historia.

---

## 🌅 Rano : listonosz

Każdego ranka, bardzo wcześnie, nasz **listonosz** wyrusza po oficjalne
ogłoszenia z poprzedniego dnia: zakładanie firm, zmiany członków zarządu,
likwidacje, składanie sprawozdań finansowych... Przynosi je wszystkie, nie
gubiąc ani jednego, i układa w naszej wielkiej bibliotece.

> 👤 **Wciela się w niego Thom** — agent ds. pozyskiwania danych: codziennie
> pobiera oficjalne ogłoszenia i porządkuje je pod kątem bazy danych. To on
> napędza całą maszynę.

→ [Poznaj pracę listonosza](le-facteur/README.md)

## 📖 Potem : tłumacz

Oficjalne ogłoszenia to teksty pisane językiem administracyjnym, nie zawsze
łatwe do czytania. Nasz **tłumacz** czyta je wszystkie i zamienia w jasne
karty: nazwę firmy, jej adres, działalność, osoby zarządzające, kwoty...

→ [Poznaj pracę tłumacza](le-traducteur/README.md)

## 🔍 Następnie : śledcza

Gdy karta jest gotowa, nasza **śledcza** uzupełnia ją o **publiczne**
informacje o firmie: jej stronę internetową, telefon, profile w mediach
społecznościowych. Nic prywatnego, nic tajnego — tylko to, co firma sama
pokazuje.

> 👤 **Wciela się w nią Elysa** — agent ds. wzbogacania: uzupełnia karty firm
> (strona internetowa, telefon, media społecznościowe członków zarządu).
> Zbiera wyłącznie publicznie dostępne dane: nic nie jest wyszukiwane w
> miejscach niedozwolonych.

→ [Poznaj pracę śledczej](lenqueteur/README.md)

## 🧩 W tym samym czasie : układanka osób

Każde ogłoszenie dotyczy osób: członków zarządu, likwidatorów, biegłych
rewidentów. Nasza **układanka** łączy każdą osobę z jej firmami, aby łatwo
odnaleźć "kto co robi".

→ [Poznaj układankę osób](le-puzzle/README.md)

## 🗺️ I geograf

Nasz **geograf** sprawdza, czy każda firma naprawdę istnieje na mapie
(Google Maps): jej adres, kategorię, ocenę. Dzięki temu karta pokazuje także
realną obecność firmy w prawdziwym życiu.

→ [Poznaj pracę geografa](le-geographe/README.md)

## 📚 Na koniec : biblioteka kontraktów

Zamówienia publiczne (kontrakty zawierane przez administracje) również są
archiwizowane w naszej **bibliotece**: ponad milion kontraktów, swobodnie
dostępnych.

→ [Poznaj bibliotekę kontraktów](la-bibliotheque/README.md)

---

## 👥 Zespół za kulisami

| Osoba | Rola | Dziedzina |
|---|---|---|
| **Nansou** | Kierownik projektu | Wizja, strategia, treść — to on wszystkim dyryguje |
| **Thom** | Agent ds. pozyskiwania danych | Listonosz: codzienne pobieranie ogłoszeń |
| **Elysa** | Agent ds. wzbogacania | Śledcza: uzupełnianie publicznych kart |
| **Karan** | Agent ds. międzynarodowych spraw i SEO | Tłumaczenia, międzynarodowa widoczność |
| **Ruby** | Agent nadzoru | Ciągłe pilnowanie, aby wszystko działało |

---

## 📊 Liczniki na żywo

![Ogłoszenia](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Ogłoszenia&color=blue)
![Firmy](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Firmy&color=green)
![Osoby](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Osoby&color=orange)

Te liczby są prawdziwe i zmieniają się każdego dnia. Każdego ranka listonosz
przynosi swoją porcję, tłumacz ją czyta, a każdy może przyjść i sprawdzić.

---

## 📅 Dziennik

Każdy pracownik prowadzi swój mały dziennik: ile dokumentów przetworzono
w ciągu dnia i jakie drobne ulepszenia wprowadzono. Znajdziesz go na każdej
karcie:

| Data | Ogłoszenia, które dotarły | Przeczytane karty | Drobne ulepszenia |
|---|---|---|---|
| _(uzupełniane codziennie)_ | | | |

## 🔍 Sprawdź sam

Wszystko jest publiczne i bezpłatne — każdy może zweryfikować:

- Najnowsze ogłoszenia: [`https://bodacc.io/pl/annonces`](https://bodacc.io/pl/annonces)
- Liczniki na żywo: [`https://bodacc.io/api/bodacc/stats/counts`](https://bodacc.io/api/bodacc/stats/counts)
- Firma: [`https://bodacc.io/pl/entreprises/514494491`](https://bodacc.io/pl/entreprises/514494491)

---

*Ten dokument jest częścią publicznego repozytorium BODACC-api. Opisuje on,
co robimy, w prosty sposób — bez ujawniania naszych wewnętrznych metod.*
