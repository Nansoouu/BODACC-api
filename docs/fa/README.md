<div align="center">

# BODACC.io : API مربوط به BODACC برای آگهی‌های قانونی فرانسه و داده‌های شرکت‌ها

**هر اقدام ثبتی یک شرکت فرانسوی، به‌صورت زنده.** ثبت شرکت‌ها، اصلاحات، تسلیم حساب‌ها،
دعاوی ورشکستگی، فروش‌ها، حذف از ثبت — هر آگهی BODACC، پیوندخورده به شرکتش،
مدیرانش و منبع رسمی‌اش. رایگان و باز، به 20 زبان.

[**bodacc.io**](https://bodacc.io) · [مستندات API](https://bodacc.io/fa/asnad) · [Swagger](https://bodacc.io/api/bodacc/docs) · [RSS](https://bodacc.io/rss.xml)

</div>

## 1. داده‌های زندهٔ BODACC

| مجموعه‌دادهٔ BODACC | رکوردها | زنده |
|---|---|---|
| آگهی‌های قانونی BODACC | 51 043 403 | ![Notices](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=آگهی‌ها&color=blue) |
| شرکت‌های فرانسوی | 30 032 566 | ![Companies](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=شرکت‌ها&color=green) |
| مدیران و صاحبان سمت | 4 935 692 | ![People](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=افراد&color=orange) |
| قراردادهای عمومی (BOAMP) | 1 716 163 | ![Contracts](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=boamp&label=قراردادها&color=purple) |

این ارقام کپی و چسبانده نشده‌اند: **خودِ API مربوط به BODACC آن‌ها را به‌صورت زنده سرو می‌کند**،
در آدرس [`/api/bodacc/stats/counts-formatted`](https://bodacc.io/api/bodacc/stats/counts-formatted).
خودتان بررسی کنید، و فردا دوباره بررسی کنید.

**امروز** (14 اکتبر 2026): **5 920 آگهی** — رایج‌ترین خانواده: تسلیم حساب‌ها (2 306).

| خانوادهٔ BODACC | آگهی‌های امروز |
|---|---|
| تسلیم حساب‌ها | 2 306 |
| ثبت شرکت‌ها | 1 415 |
| اصلاحات | 1 193 |
| حذف از ثبت | 500 |
| دعاوی ورشکستگی | 323 |
| ثبت در دفتر | 118 |
| فروش و انتقال | 65 |

## 2. BODACC API چه چیزی به شما می‌دهد

‏BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) نشریهٔ رسمی زندگی حقوقی
شرکت‌های فرانسه است. هر ثبت شرکت، هر تسلیم حساب، هر ورشکستگی و هر فروش به‌حکم قانون در آن
منتشر می‌شود. BODACC.io آن نشریه را به پایگاه داده‌ای تبدیل می‌کند که می‌توانید از آن پرس‌وجو کنید.

**بیشتر پایگاه‌های دادهٔ شرکت‌ها به شما یک تصویر ثابت می‌دهند. API مربوط به BODACC به شما
حرکت می‌دهد.**

یک فهرست راهنما به شما می‌گوید شرکتی وجود دارد: نامش، نشانی‌اش، شمارهٔ ثبتش. ‏BODACC به شما
می‌گوید **شرکت همین حالا چه کرد**، و چه زمانی. همین تفاوت، تمام ماجراست:

| | فهرست‌های شرکت‌ها | BODACC.io |
|---|---|---|
| چه چیزی می‌گیرید | یک پروندهٔ هویتی ثابت | رویدادهای تاریخ‌دار |
| تازگی | هر فصل به‌روزرسانی | همان صبح منتشر می‌شود |
| ورشکستگی | یک نشان وضعیت | خودِ دعوا، ماهیت و تاریخش |
| حساب‌ها | یک مقدار بولی «تسلیم شد» | هر تسلیم، با تاریخ بستن آن |
| مدیران | یک نام | هر سمت، با شرکت‌هایش |
| منبع | یک رونوشت | آگهی رسمی و PDF آن |

## 3. آگهی‌های قانونی BODACC با جزئیات کامل

هر آگهی 23 فیلد دارد. این یک آگهی واقعی است، دقیقاً همان‌طور که API مربوط به BODACC آن را
برمی‌گرداند:

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

هر آگهی به **صفحهٔ کامل خود در bodacc.io** پیوند می‌خورد، جایی که منبع رسمی و PDF آن یک کلیک فاصله دارند.

هفت خانوادهٔ BODACC، همراه با اصطلاح فرانسوی که در داده‌ها خواهید دید:

| خانوادهٔ BODACC | در داده | یعنی چه |
|---|---|---|
| ثبت شرکت‌ها | `creation` | شرکت تازه‌ای ثبت می‌شود |
| اصلاحات | `modification` | اساسنامه، مدیریت، نشانی، تغییر سرمایه |
| تسلیم حساب‌ها | `dpc` | حساب‌های سالانه در دفتر دادگاه تسلیم می‌شود |
| دعاوی ورشکستگی | `collective` | مدیریت قضایی، تصفیه، نجات |
| فروش و انتقال | `vente` | یک کسب‌وکار فروخته یا منتقل می‌شود |
| حذف از ثبت | `radiation` | شرکت از دفتر ثبت حذف می‌شود |
| ثبت در دفتر | `immatriculation` | ثبت در دفتر بازرگانی |

## 4. پرونده‌های شرکتی BODACC

هر آگهی به شرکت پشت سرش اشاره می‌کند. API مربوط به BODACC این شرکت‌ها را با هویت، فعالیت
و تاریخ حسابداری‌شان ارائه می‌دهد:

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

فراتر از هویت: کد فعالیت (NAF)، شکل حقوقی، وضعیت اداری، **تاریخ آخرین تسلیم حساب، تاریخ
آخرین بستن و شمار روزهای از آن زمان**، به‌علاوهٔ نشان‌هایی که یک شرکت ممکن است داشته باشد:
اقتصاد اجتماعی، زیستی، RGE، Qualiopi.

## 5. مدیران و صاحبان سمت BODACC

پشت هر شرکت، کسانی هستند که آن را اداره می‌کنند. API مربوط به BODACC **4.9 میلیون مدیر،
صاحب سمت، مصفّی و حسابرس** را فهرست می‌کند، هر یک با:

- سمت‌هایشان، شرکت به شرکت، همراه با دورهٔ مربوطه
- شرکت‌های دیگرشان، تا بتوانید یک فرد را در طول یک حرفه دنبال کنید
- آگهی‌هایی که به آنان مربوط است

همین است که یک دفتر ثبت را به یک گراف تبدیل می‌کند: یک شرکت، مدیرانش، و شرکت‌هایی که این
مدیران هم اداره می‌کنند. یک نقطهٔ پایانی، آن را مستقیم ارائه می‌دهد.

## 6. API مربوط به BODACC

‏REST، ‏JSON، بدون نیاز به کلید در نقاط پایانی باز، تا 500 رکورد در هر فراخوان، با صفحه‌بندی
از طریق `offset`.

```bash
# تازه‌ترین آگهی‌های BODACC (تازه‌ترین‌ها همیشه اول)
curl "https://bodacc.io/api/bodacc/annonces?limit=100"

# یک آگهی، با شرکت‌هایش، مدیرانش و PDF آن
curl "https://bodacc.io/api/bodacc/annonces/C202601972306-depot-comptes-988208435-141026-holding-biiz"

# یک شرکت بر پایهٔ SIREN
curl "https://bodacc.io/api/bodacc/entreprises/552081317"

# هر آگهی BODACC مربوط به آن شرکت
curl "https://bodacc.io/api/bodacc/entreprises/552081317/annonces"

# گراف شرکت: مدیران و شرکت‌های دیگرشان
curl "https://bodacc.io/api/bodacc/entreprises/552081317/graphe"

# جست‌وجو بر پایهٔ نام، شهر، استان، کد فعالیت یا بازهٔ تاریخی
curl "https://bodacc.io/api/bodacc/entreprises?q=eiffage&departement=75"
curl "https://bodacc.io/api/bodacc/annonces?famille=collective&date_debut=2026-10-01"
```

مرجع کامل: [bodacc.io/fa/asnad](https://bodacc.io/fa/asnad) — نقطهٔ پایانی به نقطهٔ پایانی، با
رابط Swagger و مشخصات OpenAPI منتشرشده، به 20 زبان.

## 7. مجموعه‌داده‌ها و خروجی‌های BODACC

فراتر از API، هر صفحه در bodacc.io یک URL پایدار و قابل خزش است — آگهی‌های قانونی، شرکت‌ها،
مدیران، مناطق، شهرها، آمار — و سایت نقاط ورودی ماشین‌خوان منتشر می‌کند:

- [نقشه‌های سایت](https://bodacc.io/sitemap.xml) — فهرست کامل URLها، برای هر زبان
- [فهرست API](https://bodacc.io/.well-known/api-catalog) — قابل کشف از سوی عامل‌ها
- [RSS](https://bodacc.io/rss.xml) — فید روزانه
- [فهرست URLها](URLLIST.md) — هر نقطهٔ ورودی، یک فهرست برای هر زبان

## 8. پوشش و تازگی داده‌ها در BODACC

‏BODACC در روزهای کاری منتشر می‌شود، نه در آخر هفته. BODACC.io هر انتشار را جمع می‌کند و
**همان صبح** در دسترس می‌گذارد، معمولاً در عرض چند دقیقه پس از انتشار. هر آگهی تاریخ انتشارش
را نگه می‌دارد، پس همیشه می‌دانید چه چیزی تازه است.

## 9. BODACC برای چه کارهایی به کار می‌آید

- **انطباق و KYC** — پیش از امضا وضعیت واقعی طرف مقابل را بررسی کنید، نه وضعیتش را در سه ماه پیش
- **ارزیابی دقیق** — پرونده‌های ثبتی یک شرکت، حساب‌ها و سابقهٔ ورشکستگی‌اش را دنبال کنید
- **رتبه‌بندی اعتباری و ریسک** — دعاوی ورشکستگی و تسلیم حساب‌ها نخستین نشانه‌ها هستند
- **اطلاعات فروش** — یک ثبت تازه، یک مشتری احتمالی تازه است، همان روزی که رخ می‌دهد
- **روزنامه‌نگاری** — واقعیت‌های در سطح شرکت، با منبع و تاریخ
- **پژوهش** — 51 میلیون پرونده، از قدیمی‌ترین دفترهای ثبت تا صبح امروز
- **حقوق و حسابداری** — شرکت‌هایی را که برایشان کار می‌کنید پیدا کنید، و آنچه تسلیم کرده‌اند

## 10. پرسش‌های پرتکرار دربارهٔ BODACC

**آیا BODACC.io همان BODACC رسمی است؟**

نه. BODACC.io خدمتی مستقل است که داده‌های عمومی BODACC را قابل استفاده و قابل پرس‌وجو می‌کند.
وابسته به DILA یا هیچ نهاد عمومی دیگری نیست. هر آگهی به منبع رسمی خود پیوند می‌خورد.

**آیا API مربوط به BODACC رایگان است؟**

نقاط پایانی باز رایگان‌اند و به کلید نیاز ندارند. برای استفادهٔ سنگین بسته‌های پولی وجود دارد:
[قیمت‌ها را ببینید](https://bodacc.io/fa/tarifs).

**تفاوت BODACC و یک فهرست شرکت‌ها چیست؟**

فهرست به شما هویت یک شرکت را می‌دهد. ‏BODACC به شما فعالیتش را می‌دهد: چه چیزی تسلیم کرد،
چه زمانی، و دادگاه دربارهٔ او چه منتشر کرد. این دو مکمل یکدیگرند: BODACC.io هویت را هم دارد.

**داده‌ها چقدر تازه‌اند؟**

آگهی‌ها در همان صبحی که منتشر می‌شوند ظاهر می‌شوند. پرونده‌های شرکتی با رسیدن آگهی‌ها به‌روز
می‌شوند.

**در هر فراخوان چند رکورد؟**

تا 500، با `offset` برای صفحه‌بندی. سقفی برای شمار فراخوان‌ها در نقاط پایانی باز وجود ندارد.

**آیا می‌توانم در محیط عملیاتی استفاده کنم؟**

بله. API مستند، نسخه‌بندی‌شده و از Cloudflare سرو می‌شود. ذکر منبع به
[bodacc.io](https://bodacc.io) خوش‌آمد است.

**کدام زبان‌ها پشتیبانی می‌شوند؟**

سایت و مستنداتش به 20 زبان وجود دارند. خودِ API از نظر زبانی بی‌طرف است: اسلاگ‌ها و نقاط
پایانی‌اش برای همه یکسان‌اند.

## 11. مستندات BODACC برای هر زبان

هر پوشهٔ زیر مستندات کامل BODACC را به زبان خودش دارد: مرجع API، فهرست URLها و خلاصه‌های
روزانه.

| # | زبان | مستندات | URLها | داده‌های روزانه |
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

## 12. پیوندهای BODACC

- [BODACC.io](https://bodacc.io) — سایت زنده
- [جست‌وجوی شرکت‌ها](https://bodacc.io/fa/entreprises) · [آگهی‌های قانونی](https://bodacc.io/fa/annonces) · [مدیران](https://bodacc.io/fa/personnes)
- [مستندات API](https://bodacc.io/fa/asnad) · [رابط Swagger](https://bodacc.io/api/bodacc/docs)
- [قیمت‌ها](https://bodacc.io/fa/tarifs) · [فناوری](https://bodacc.io/fa/technologie)
- [فهرست URLها (نمایهٔ چندزبانه)](URLLIST.md)

---

*‏BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) نشریهٔ رسمی آگهی‌های قانونی
شرکت‌های فرانسه است. BODACC.io خدمتی مستقل است و وابسته به DILA نیست.*
