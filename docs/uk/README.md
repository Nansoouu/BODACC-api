<div align="center">

# BODACC.io : BODACC API для французьких офіційних оголошень і даних про компанії

**Кожна французька реєстраційна подія, у реальному часі.** Створення компаній, зміни, подання
фінансової звітності, процедури неплатоспроможності, продажі, виключення з реєстру — кожне
оголошення BODACC, пов'язане з компанією, її керівниками та її офіційним джерелом. Безкоштовно й
відкрито, 20 мовами.

[**bodacc.io**](https://bodacc.io) · [Документація API](https://bodacc.io/uk/dokumentatsiya) · [Swagger](https://bodacc.io/api/bodacc/docs) · [RSS](https://bodacc.io/rss.xml)

</div>

## 1. Дані BODACC у реальному часі

| Набір даних BODACC | Записи | У реальному часі |
|---|---|---|
| Офіційні оголошення BODACC | 51 043 403 | ![Оголошення](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Оголошення&color=blue) |
| Французькі компанії | 30 032 566 | ![Компанії](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Компанії&color=green) |
| Керівники та посадові особи | 4 935 692 | ![Люди](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Люди&color=orange) |
| Державні закупівлі (BOAMP) | 1 716 163 | ![Контракти](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=boamp&label=Контракти&color=purple) |

Ці цифри не скопійовані: їх **віддає в реальному часі сам BODACC API**, за адресою
[`/api/bodacc/stats/counts-formatted`](https://bodacc.io/api/bodacc/stats/counts-formatted).
Перевірте їх самі, а завтра перевірте знову.

**Сьогодні** (14 жовтня 2026 р.): **5 920 оголошень** — найпоширеніша категорія: подання фінансової звітності (2 306).

| Категорія BODACC | Оголошень сьогодні |
|---|---|
| Подання фінансової звітності | 2 306 |
| Створення компаній | 1 415 |
| Зміни | 1 193 |
| Виключення з реєстру | 500 |
| Процедури неплатоспроможності | 323 |
| Реєстрації | 118 |
| Продажі та передачі | 65 |

## 2. Що дає BODACC API

BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) — офіційний вісник французького
ділового життя. Кожне створення компанії, кожне подання звітності, кожне банкрутство, кожен продаж
публікуються там за законом. BODACC.io перетворює цей вісник на базу даних, яку можна запитувати.

**Більшість баз даних про компанії дають вам знімок. BODACC API дає вам рух.**

Довідник повідомляє, що компанія існує: її назву, адресу, реєстраційний номер. BODACC повідомляє,
**що компанія щойно зробила**, і коли. Саме в цьому різниця:

| | Довідники компаній | BODACC.io |
|---|---|---|
| Що ви отримуєте | застиглий запис про особу | події з датами |
| Актуальність | оновлення раз на квартал | публікація того ж ранку |
| Неплатоспроможність | прапорець статусу | процедура, її характер і її дата |
| Звітність | логічне «подано» | кожне подання, з датою закриття |
| Керівники | ім'я | кожен мандат, з його компаніями |
| Джерело | копію | офіційне оголошення та його PDF |

## 3. Офіційні оголошення BODACC в деталях

Кожне оголошення містить 23 поля. Ось справжнє оголошення, точно таке, яким його повертає BODACC API:

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

Кожне оголошення веде на **свою повну сторінку на bodacc.io**, де офіційне джерело та його PDF за
один клік.

Сім категорій BODACC із французьким терміном, який ви побачите в даних:

| Категорія BODACC | У даних | Що це означає |
|---|---|---|
| Створення компаній | `creation` | реєструється нова компанія |
| Зміни | `modification` | статут, управління, адреса, зміна капіталу |
| Подання фінансової звітності | `dpc` | річна звітність, подана до секретаріату суду |
| Процедури неплатоспроможності | `collective` | санація, ліквідація, відновлення |
| Продажі та передачі | `vente` | підприємство продано або передано |
| Виключення з реєстру | `radiation` | компанію виключено з реєстру |
| Реєстрації | `immatriculation` | реєстрація в торговому реєстрі |

## 4. Картки компаній BODACC

Кожне оголошення вказує на компанію, що за ним стоїть. BODACC API надає ці компанії разом з
ідентифікацією, діяльністю та бухгалтерською історією:

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

Окрім ідентифікації: код діяльності (NAF), правова форма, адміністративний статус, **дата останнього
подання звітності, дата останнього закриття та кількість днів відтоді**, а також позначки, які може
мати компанія, — соціальна економіка, bio, RGE, Qualiopi.

## 5. Керівники та посадові особи BODACC

За кожною компанією стоять люди, які нею керують. BODACC API перелічує **4,9 млн керівників,
посадових осіб, ліквідаторів та аудиторів**, і кожен має:

- свої мандати, компанія за компанією, із відповідним періодом
- свої інші компанії, щоб можна було простежити людину протягом кар'єри
- оголошення, які їх стосуються

Саме це перетворює реєстр на граф: компанія, її керівники та компанії, якими ці керівники також
керують. Один endpoint відкриває це напряму.

## 6. BODACC API

REST, JSON, ключ не потрібен на відкритих endpoint'ах, до 500 записів на виклик, посторінково через `offset`.

```bash
# Найновіші оголошення BODACC (завжди найсвіжіші першими)
curl "https://bodacc.io/api/bodacc/annonces?limit=100"

# Одне оголошення, з його компаніями, його керівниками та його PDF
curl "https://bodacc.io/api/bodacc/annonces/C202601972306-depot-comptes-988208435-141026-holding-biiz"

# Компанія за SIREN
curl "https://bodacc.io/api/bodacc/entreprises/552081317"

# Усі оголошення BODACC щодо цієї компанії
curl "https://bodacc.io/api/bodacc/entreprises/552081317/annonces"

# Граф компанії: керівники та їхні інші компанії
curl "https://bodacc.io/api/bodacc/entreprises/552081317/graphe"

# Пошук за назвою, містом, департаментом, кодом діяльності або діапазоном дат
curl "https://bodacc.io/api/bodacc/entreprises?q=eiffage&departement=75"
curl "https://bodacc.io/api/bodacc/annonces?famille=collective&date_debut=2026-10-01"
```

Повний довідник: [bodacc.io/uk/dokumentatsiya](https://bodacc.io/uk/dokumentatsiya) — endpoint за
endpoint'ом, з інтерфейсом Swagger та опублікованою специфікацією OpenAPI, 20 мовами.

## 7. Набори даних і вивантаження BODACC

Окрім API, кожна сторінка bodacc.io — це стабільна, індексована URL-адреса: офіційні оголошення,
компанії, керівники, регіони, міста, статистика, — а сайт публікує машиночитні точки входу:

- [Карти сайту](https://bodacc.io/sitemap.xml) — повний перелік URL-адрес, за кожною мовою
- [Каталог API](https://bodacc.io/.well-known/api-catalog) — виявляється агентами
- [RSS](https://bodacc.io/rss.xml) — щоденна стрічка
- [Список URL](URLLIST.md) — кожна точка входу, один список на мову

## 8. Покриття та актуальність BODACC

BODACC виходить у робочі дні, а не у вихідні. BODACC.io збирає кожну публікацію та робить її
доступною **того ж ранку**, зазвичай протягом кількох хвилин після випуску. Кожне оголошення
зберігає дату публікації, тож завжди видно, що нового.

## 9. Для чого використовують BODACC

- **Комплаєнс і KYC** — перевірте реальний статус контрагента перед підписанням, а не його статус тримісячної давнини
- **Due diligence** — відстежуйте подання компанії, її звітність та її історію неплатоспроможності
- **Оцінка кредиту та ризиків** — процедури неплатоспроможності та подання звітності це найраніші сигнали
- **Комерційна розвідка** — нова реєстрація це новий потенційний клієнт, того ж дня, коли вона з'явилася
- **Журналістика** — факти на рівні компаній, з джерелом і датою
- **Дослідження** — 51 млн публікацій, від найстаріших реєстрів до цього ранку
- **Право та бухгалтерія** — знайдіть компанії, які ви обслуговуєте, і те, що вони подали

## 10. Часті запитання про BODACC

**Чи BODACC.io — це офіційний BODACC?**

Ні. BODACC.io — незалежний сервіс, який робить публічні дані BODACC зручними та доступними для
запитів. Він не пов'язаний з DILA чи будь-яким державним органом. Кожне оголошення веде назад до
свого офіційного джерела.

**Чи BODACC API безкоштовний?**

Відкриті endpoint'и безкоштовні й не потребують ключа. Для інтенсивного використання є платні тарифи
— [дивіться ціни](https://bodacc.io/uk/ciny).

**Яка різниця між BODACC і довідником компаній?**

Довідник дає ідентифікацію компанії. BODACC дає її діяльність: що вона подала, коли, і що суд про це
опублікував. Ці два джерела доповнюють одне одного — BODACC.io містить і ідентифікацію.

**Наскільки свіжі дані?**

Оголошення з'являються того ранку, коли їх опубліковано. Картки компаній оновлюються в міру надходження оголошень.

**Скільки записів на один виклик?**

До 500, з `offset` для посторінкового виведення. Обмежень на кількість викликів відкритих endpoint'ів немає.

**Чи можна використовувати це в продакшені?**

Так. API задокументовано, версіоновано та віддається через Cloudflare. Зазначення джерела
[bodacc.io](https://bodacc.io) вітається.

**Які мови підтримуються?**

Сайт і його документація існують 20 мовами. Сам API нейтральний щодо мови: його slug'и та endpoint'и
однакові для всіх.

## 11. Документація BODACC за мовами

Кожна тека нижче містить повну документацію BODACC її мовою: довідник API, список URL-адрес і
щоденні огляди.

| # | Мова | Документація | URL-адреси | Щоденні дані |
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

## 12. Посилання на BODACC

- [BODACC.io](https://bodacc.io) — живий сайт
- [Пошук компаній](https://bodacc.io/uk/kompaniyi) · [Офіційні оголошення](https://bodacc.io/uk/ogoloshennya) · [Керівники](https://bodacc.io/uk/lyudy)
- [Документація API](https://bodacc.io/uk/dokumentatsiya) · [Інтерфейс Swagger](https://bodacc.io/api/bodacc/docs)
- [Тарифи](https://bodacc.io/uk/ciny) · [Технології](https://bodacc.io/uk/tehnologiya)
- [Список URL (багатомовний індекс)](URLLIST.md)

---

*BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) — офіційне видання юридично
значущих оголошень французьких компаній. BODACC.io — незалежний сервіс, не пов'язаний з DILA.*
