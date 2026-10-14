<div align="center">

# BODACC.io : BODACC API для французских официальных объявлений и данных о компаниях

**Каждая публикация французской компании, в реальном времени.** Создание компаний, изменения, подача
финансовой отчётности, процедуры несостоятельности, продажи, исключения из реестра — каждое
объявление BODACC, связанное с компанией, её руководителями и её официальным источником. Бесплатно и
открыто, на 20 языках.

[**bodacc.io**](https://bodacc.io) · [Документация API](https://bodacc.io/ru/dokumentatsiya) · [Swagger](https://bodacc.io/api/bodacc/docs) · [RSS](https://bodacc.io/rss.xml)

</div>

## 1. Данные BODACC в реальном времени

| Набор данных BODACC | Записи | В реальном времени |
|---|---|---|
| Официальные объявления BODACC | 51 043 403 | ![Объявления](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Объявления&color=blue) |
| Французские компании | 30 032 566 | ![Компании](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Компании&color=green) |
| Руководители и должностные лица | 4 935 692 | ![Люди](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Люди&color=orange) |
| Государственные закупки (BOAMP) | 1 716 163 | ![Контракты](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=boamp&label=Контракты&color=purple) |

Эти цифры не скопированы: их **отдаёт в реальном времени сам BODACC API**, по адресу
[`/api/bodacc/stats/counts-formatted`](https://bodacc.io/api/bodacc/stats/counts-formatted).
Проверьте их сами, а завтра проверьте снова.

**Сегодня** (14 октября 2026 г.): **5 920 объявлений** — самая частая категория: подача финансовой отчётности (2 306).

| Категория BODACC | Объявлений сегодня |
|---|---|
| Подача финансовой отчётности | 2 306 |
| Создание компаний | 1 415 |
| Изменения | 1 193 |
| Исключения из реестра | 500 |
| Процедуры несостоятельности | 323 |
| Регистрации | 118 |
| Продажи и передачи | 65 |

## 2. Что даёт BODACC API

BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) — официальный бюллетень французской
деловой жизни. Каждое создание компании, каждая подача финансовой отчётности, каждое банкротство,
каждая продажа публикуются там в силу закона. BODACC.io превращает этот бюллетень в базу данных, к
которой можно обращаться с запросами.

**Большинство баз данных о компаниях дают вам снимок. BODACC API даёт вам движение.**

Справочник сообщает, что компания существует: её название, адрес, регистрационный номер. BODACC
сообщает, **что компания только что сделала**, и когда. Именно в этом разница:

| | Справочники компаний | BODACC.io |
|---|---|---|
| Что вы получаете | застывшую учётную карточку | события с датами |
| Актуальность | обновление раз в квартал | публикация тем же утром |
| Несостоятельность | флаг статуса | процедура, её характер и её дата |
| Отчётность | логическое «сдано» | каждая подача, с датой закрытия |
| Руководители | имя | каждый мандат, с его компаниями |
| Источник | копию | официальное объявление и его PDF |

## 3. Официальные объявления BODACC в деталях

Каждое объявление содержит 23 поля. Вот настоящее объявление, ровно таким, каким его возвращает BODACC API:

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

Каждое объявление ведёт на **свою полную страницу на bodacc.io**, где официальный источник и его PDF
— в одном клике.

Семь категорий BODACC, с французским термином, который вы увидите в данных:

| Категория BODACC | В данных | Что это значит |
|---|---|---|
| Создание компаний | `creation` | регистрируется новая компания |
| Изменения | `modification` | устав, руководство, адрес, изменение капитала |
| Подача финансовой отчётности | `dpc` | годовая отчётность, поданная в секретариат суда |
| Процедуры несостоятельности | `collective` | наблюдение, ликвидация, восстановление |
| Продажи и передачи | `vente` | предприятие продано или передано |
| Исключения из реестра | `radiation` | компания исключена из реестра |
| Регистрации | `immatriculation` | регистрация в торговом реестре |

## 4. Карточки компаний BODACC

Каждое объявление указывает на компанию, стоящую за ним. BODACC API предоставляет эти компании
вместе с идентификацией, деятельностью и бухгалтерской историей:

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

Помимо идентификации: код деятельности (NAF), правовая форма, административный статус, **дата
последней подачи финансовой отчётности, дата последнего закрытия и число дней с тех пор**, а также
метки, которые может нести компания, — социальная экономика, bio, RGE, Qualiopi.

## 5. Руководители и должностные лица BODACC

За каждой компанией стоят люди, которые ею управляют. BODACC API перечисляет **4,9 млн
руководителей, должностных лиц, ликвидаторов и аудиторов**, и у каждого есть:

- его мандаты, компания за компанией, с соответствующим периодом
- его другие компании, чтобы можно было проследить человека на протяжении карьеры
- объявления, которые его касаются

Именно это превращает реестр в граф: компания, её руководители и компании, которыми эти руководители
тоже управляют. Один endpoint открывает это напрямую.

## 6. BODACC API

REST, JSON, ключ не нужен на открытых endpoint'ах, до 500 записей на вызов, постранично через `offset`.

```bash
# Последние объявления BODACC (всегда самые свежие первыми)
curl "https://bodacc.io/api/bodacc/annonces?limit=100"

# Одно объявление, с его компаниями, его руководителями и его PDF
curl "https://bodacc.io/api/bodacc/annonces/C202601972306-depot-comptes-988208435-141026-holding-biiz"

# Компания по SIREN
curl "https://bodacc.io/api/bodacc/entreprises/552081317"

# Все объявления BODACC, касающиеся этой компании
curl "https://bodacc.io/api/bodacc/entreprises/552081317/annonces"

# Граф компании: руководители и их другие компании
curl "https://bodacc.io/api/bodacc/entreprises/552081317/graphe"

# Поиск по названию, городу, департаменту, коду деятельности или диапазону дат
curl "https://bodacc.io/api/bodacc/entreprises?q=eiffage&departement=75"
curl "https://bodacc.io/api/bodacc/annonces?famille=collective&date_debut=2026-10-01"
```

Полный справочник: [bodacc.io/ru/dokumentatsiya](https://bodacc.io/ru/dokumentatsiya) — endpoint за
endpoint'ом, с интерфейсом Swagger и опубликованной спецификацией OpenAPI, на 20 языках.

## 7. Наборы данных и выгрузки BODACC

Помимо API, каждая страница bodacc.io — это стабильный, индексируемый URL: официальные объявления,
компании, руководители, регионы, города, статистика, — а сайт публикует машиночитаемые точки входа:

- [Карты сайта](https://bodacc.io/sitemap.xml) — полный перечень URL, по каждому языку
- [Каталог API](https://bodacc.io/.well-known/api-catalog) — обнаруживается агентами
- [RSS](https://bodacc.io/rss.xml) — ежедневная лента
- [Список URL](URLLIST.md) — каждая точка входа, один список на язык

## 8. Покрытие и актуальность BODACC

BODACC выходит по рабочим дням, а не по выходным. BODACC.io собирает каждую публикацию и делает её
доступной **тем же утром**, обычно в течение нескольких минут после выпуска. Каждое объявление
сохраняет дату публикации, поэтому всегда видно, что нового.

## 9. Для чего используют BODACC

- **Комплаенс и KYC** — проверьте реальный статус контрагента перед подписанием, а не его статус трёхмесячной давности
- **Due diligence** — следите за подачами компании, её отчётностью и её историей несостоятельности
- **Оценка кредита и рисков** — процедуры несостоятельности и подача отчётности это самые ранние сигналы
- **Коммерческая разведка** — новая регистрация это новый потенциальный клиент, в день, когда она появилась
- **Журналистика** — факты на уровне компаний, с источником и датой
- **Исследования** — 51 млн публикаций, от старейших реестров до этого утра
- **Право и бухгалтерия** — найдите компании, которые вы обслуживаете, и то, что они подали

## 10. Часто задаваемые вопросы о BODACC

**BODACC.io — это официальный BODACC?**

Нет. BODACC.io — независимый сервис, который делает публичные данные BODACC удобными и доступными
для запросов. Он не связан с DILA или каким-либо государственным органом. Каждое объявление ведёт
обратно к своему официальному источнику.

**BODACC API бесплатен?**

Открытые endpoint'ы бесплатны и не требуют ключа. Для интенсивного использования есть платные тарифы
— [смотрите цены](https://bodacc.io/ru/ceny).

**В чём разница между BODACC и справочником компаний?**

Справочник даёт идентификацию компании. BODACC даёт её деятельность: что она подала, когда, и что
суд об этом опубликовал. Эти два источника дополняют друг друга — BODACC.io содержит и
идентификацию.

**Насколько свежие данные?**

Объявления появляются утром того дня, когда они опубликованы. Карточки компаний обновляются по мере поступления объявлений.

**Сколько записей на один вызов?**

До 500, с `offset` для постраничного вывода. Ограничений на число вызовов открытых endpoint'ов нет.

**Можно ли использовать это в продакшене?**

Да. API документирован, версионирован и отдаётся через Cloudflare. Указание источника
[bodacc.io](https://bodacc.io) приветствуется.

**Какие языки поддерживаются?**

Сайт и его документация существуют на 20 языках. Сам API нейтрален по языку: его slug'и и endpoint'ы
одинаковы для всех.

## 11. Документация BODACC по языкам

Каждая папка ниже содержит полную документацию BODACC на её языке: справочник API, список URL-
адресов и ежедневные обзоры.

| # | Язык | Документация | URL-адреса | Ежедневные данные |
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

## 12. Ссылки на BODACC

- [BODACC.io](https://bodacc.io) — живой сайт
- [Поиск компаний](https://bodacc.io/ru/kompanii) · [Официальные объявления](https://bodacc.io/ru/obyavleniya) · [Руководители](https://bodacc.io/ru/lyudi)
- [Документация API](https://bodacc.io/ru/dokumentatsiya) · [Интерфейс Swagger](https://bodacc.io/api/bodacc/docs)
- [Тарифы](https://bodacc.io/ru/ceny) · [Технологии](https://bodacc.io/ru/tehnologiya)
- [Список URL (многоязычный индекс)](URLLIST.md)

---

*BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) — официальная публикация юридически
значимых объявлений французских компаний. BODACC.io — независимый сервис, не связанный с DILA.*
