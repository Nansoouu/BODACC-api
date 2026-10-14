<div align="center">

# BODACC.io : واجهة BODACC البرمجية للإعلانات القانونية الفرنسية وبيانات الشركات

**كل إيداع لشركة فرنسية، في الوقت الفعلي.** التأسيس، والتعديلات، وإيداع الحسابات،
وإجراءات العسر المالي، والبيوع، والشطب — كل إعلان من BODACC، مرتبط بشركته
وبمسيّريه وبمصدره الرسمي. مجاني ومفتوح، بعشرين لغة.

[**bodacc.io**](https://bodacc.io) · [وثائق الواجهة البرمجية](https://bodacc.io/ar/wathaiq) · [Swagger](https://bodacc.io/api/bodacc/docs) · [RSS](https://bodacc.io/rss.xml)

</div>

## 1. بيانات BODACC المباشرة

| مجموعة بيانات BODACC | السجلات | مباشر |
|---|---|---|
| الإعلانات القانونية BODACC | 51 043 403 | ![Notices](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=الإعلانات&color=blue) |
| الشركات الفرنسية | 30 032 566 | ![Companies](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=الشركات&color=green) |
| المدراء والمسيّرون | 4 935 692 | ![People](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=الأشخاص&color=orange) |
| الصفقات العامة (BOAMP) | 1 716 163 | ![Contracts](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=boamp&label=الصفقات&color=purple) |

هذه الأرقام ليست منسوخة ولصيقة: بل **تُقدّمها واجهة BODACC البرمجية نفسها مباشرةً**، على
[`/api/bodacc/stats/counts-formatted`](https://bodacc.io/api/bodacc/stats/counts-formatted).
تحقق منها بنفسك، ثم تحقق منها مرة أخرى غدًا.

**اليوم** (14 أكتوبر 2026): **5 920 إعلانًا** — العائلة الأكثر شيوعًا: إيداع الحسابات (2 306).

| عائلة BODACC | إعلانات اليوم |
|---|---|
| إيداع الحسابات | 2 306 |
| التأسيس | 1 415 |
| التعديلات | 1 193 |
| الشطب | 500 |
| إجراءات العسر المالي | 323 |
| القيد في السجل | 118 |
| البيوع والتنازلات | 65 |

## 2. ما تقدّمه واجهة BODACC البرمجية

إن BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) هو الجريدة الرسمية للحياة
القانونية للشركات الفرنسية. فكل تأسيس، وكل إيداع حسابات، وكل عسر مالي، وكل بيع يُنشر فيها
بحكم القانون. ويحوّل BODACC.io هذه الجريدة إلى قاعدة بيانات يمكن الاستعلام عنها.

**معظم قواعد بيانات الشركات تعطيك صورة جامدة. أما واجهة BODACC البرمجية فتعطيك الحركة.**

فالدليل يخبرك بأن شركة موجودة: اسمها، وعنوانها، ورقم تسجيلها. أما BODACC فيخبرك بما
**فعلته الشركة للتو**، ومتى. وهذا الفرق هو بيت القصيد:

| | أدلة الشركات | BODACC.io |
|---|---|---|
| ما تحصل عليه | سجل هوية مجمَّد | أحداث مؤرَّخة |
| الحداثة | تحديث كل ثلاثة أشهر | نشر في الصباح نفسه |
| العسر المالي | علامة حالة | الإجراء ونوعه وتاريخه |
| الحسابات | قيمة منطقية «مُودَع» | كل إيداع، مع تاريخ إقفاله |
| المسيّرون | اسم | كل تفويض، مع شركاته |
| المصدر | نسخة | الإعلان الرسمي وملفه PDF |

## 3. إعلانات BODACC القانونية بالتفصيل

كل إعلان يحمل 23 حقلًا. وهذا إعلان حقيقي، تمامًا كما تعيده واجهة BODACC البرمجية:

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

كل إعلان يرتبط **بصفحته الكاملة على bodacc.io**، حيث يكون المصدر الرسمي وملفه PDF على بعد نقرة واحدة.

عائلات BODACC السبع، مع المصطلح الفرنسي الذي ستراه في البيانات:

| عائلة BODACC | في البيانات | ما تعنيه |
|---|---|---|
| التأسيس | `creation` | تسجيل شركة جديدة |
| التعديلات | `modification` | النظام الأساسي، والإدارة، والعنوان، وتغيير رأس المال |
| إيداع الحسابات | `dpc` | إيداع الحسابات السنوية في كتابة المحكمة |
| إجراءات العسر المالي | `collective` | التسوية القضائية، والتصفية، وإجراءات الإنقاذ |
| البيوع والتنازلات | `vente` | بيع نشاط تجاري أو التنازل عنه |
| الشطب | `radiation` | شطب الشركة من السجل |
| القيد في السجل | `immatriculation` | القيد في السجل التجاري |

## 4. سجلات الشركات في BODACC

كل إعلان يشير إلى الشركة التي تقف خلفه. وتعرض واجهة BODACC البرمجية هذه الشركات مع
الهوية والنشاط والسجل المحاسبي:

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

وإلى جانب الهوية: رمز النشاط (NAF)، والشكل القانوني، والحالة الإدارية، **وتاريخ آخر إيداع
للحسابات، وتاريخ آخر إقفال، وعدد الأيام المنقضية منذ ذلك**، إضافة إلى الشارات التي قد
تحملها الشركة: الاقتصاد الاجتماعي، والحيوي (bio)، وRGE، وQualiopi.

## 5. المدراء والمسيّرون في BODACC

خلف كل شركة هناك من يديرها. وتسرد واجهة BODACC البرمجية **4.9 مليون مدير ومسيّر ومُصفٍّ
ومُدقّق حسابات**، ولكل منهم:

- تفويضاتهم، شركة بشركة، مع الفترة المعنية
- شركاتهم الأخرى، لتتابع الشخص عبر مساره المهني
- الإعلانات التي تخصهم

وهذا ما يحوّل السجل إلى رسم بياني: شركة، ومسيّروها، والشركات التي يديرها هؤلاء أيضًا. نقطة
نهاية واحدة تعرض ذلك مباشرة.

## 6. واجهة BODACC البرمجية

REST، وJSON، ولا حاجة إلى مفتاح على نقاط النهاية المفتوحة، وحتى 500 سجل في الطلب الواحد،
مع تصفّح عبر `offset`.

```bash
# أحدث إعلانات BODACC (الأحدث أولًا دائمًا)
curl "https://bodacc.io/api/bodacc/annonces?limit=100"

# إعلان واحد، مع شركاته ومسيّريه وملفه PDF
curl "https://bodacc.io/api/bodacc/annonces/C202601972306-depot-comptes-988208435-141026-holding-biiz"

# شركة عبر رقم SIREN
curl "https://bodacc.io/api/bodacc/entreprises/552081317"

# كل إعلان من BODACC يخص تلك الشركة
curl "https://bodacc.io/api/bodacc/entreprises/552081317/annonces"

# الرسم البياني للشركة: المسيّرون وشركاتهم الأخرى
curl "https://bodacc.io/api/bodacc/entreprises/552081317/graphe"

# البحث بالاسم أو المدينة أو القسم أو رمز النشاط أو نطاق زمني
curl "https://bodacc.io/api/bodacc/entreprises?q=eiffage&departement=75"
curl "https://bodacc.io/api/bodacc/annonces?famille=collective&date_debut=2026-10-01"
```

المرجع الكامل: [bodacc.io/ar/wathaiq](https://bodacc.io/ar/wathaiq) — نقطة نهاية بنقطة نهاية، مع
واجهة Swagger ومواصفة OpenAPI منشورة، بعشرين لغة.

## 7. مجموعات بيانات BODACC والصادرات

وإلى جانب الواجهة البرمجية، كل صفحة في bodacc.io هي عنوان URL ثابت وقابل للزحف: الإعلانات
القانونية، والشركات، والمسيّرون، والمناطق، والمدن، والإحصاءات — كما ينشر الموقع نقاط دخول
قابلة للقراءة آليًا:

- [خرائط الموقع](https://bodacc.io/sitemap.xml) — الجرد الكامل لعناوين URL، لكل لغة
- [فهرس API](https://bodacc.io/.well-known/api-catalog) — قابل للاكتشاف من الوكلاء
- [RSS](https://bodacc.io/rss.xml) — التغذية اليومية
- [قائمة العناوين](URLLIST.md) — كل نقاط الدخول، قائمة واحدة لكل لغة

## 8. تغطية BODACC وحداثة بياناته

يُنشر BODACC في أيام العمل، لا في عطل نهاية الأسبوع. ويجمع BODACC.io كل إصدار ويتيحه **في
الصباح نفسه**، عادةً في غضون دقائق من نشره. ويحتفظ كل إعلان بتاريخ نشره، لتعرف دائمًا ما هو
الجديد.

## 9. فيمَ يُستخدم BODACC

- **الامتثال ومعرفة العميل (KYC)** — تحقق من الوضع الحقيقي لطرف مقابل قبل التوقيع، لا من وضعه قبل ثلاثة أشهر
- **العناية الواجبة** — تابع إيداعات شركة وحساباتها وتاريخ عسرها المالي
- **التقييم الائتماني والمخاطر** — إجراءات العسر المالي وإيداع الحسابات هي أقدم الإشارات
- **معلومات المبيعات** — التأسيس الجديد هو عميل محتمل جديد، في يوم حدوثه
- **الصحافة** — وقائع على مستوى الشركة، موثَّقة المصدر ومؤرَّخة
- **البحث العلمي** — 51 مليون إيداع، من أقدم السجلات إلى صباح اليوم
- **القانون والمحاسبة** — اعثر على الشركات التي تعمل لحسابها، وعلى ما أودعته

## 10. الأسئلة الشائعة حول BODACC

**هل BODACC.io هو BODACC الرسمي؟**

لا. BODACC.io خدمة مستقلة تجعل بيانات BODACC العامة قابلة للاستخدام والاستعلام. وهي غير
مرتبطة بـ DILA ولا بأي هيئة عامة. وكل إعلان يعود إلى مصدره الرسمي.

**هل واجهة BODACC البرمجية مجانية؟**

نقاط النهاية المفتوحة مجانية ولا تحتاج إلى مفتاح. وتوجد باقات مدفوعة للاستخدام الكثيف:
[انظر الأسعار](https://bodacc.io/ar/tarifs).

**ما الفرق بين BODACC ودليل الشركات؟**

الدليل يعطيك هوية الشركة. أما BODACC فيعطيك نشاطها: ما أودعته، ومتى، وما نشرته المحكمة عنها.
والاثنان متكاملان: فـBODACC.io يحمل الهوية أيضًا.

**ما مدى حداثة البيانات؟**

تظهر الإعلانات في صباح نشرها. وتُحدَّث سجلات الشركات عند ورود الإعلانات.

**كم عدد السجلات في الطلب الواحد؟**

حتى 500 سجل، مع `offset` للتصفّح. ولا حد لعدد الطلبات على نقاط النهاية المفتوحة.

**هل يمكنني استخدامها في الإنتاج؟**

نعم. الواجهة موثَّقة، ومُصدَّرة بإصدارات، وتُقدَّم من Cloudflare. والإشارة إلى
[bodacc.io](https://bodacc.io) مرحَّب بها.

**ما اللغات المدعومة؟**

الموقع ووثائقه متاحان بعشرين لغة. أما الواجهة نفسها فمحايدة لغويًا: عناوينها ونقاط نهايتها
واحدة للجميع.

## 11. وثائق BODACC لكل لغة

كل مجلد أدناه يحتوي وثائق BODACC الكاملة بلغته: مرجع الواجهة البرمجية، وقائمة العناوين،
والملخصات اليومية.

| # | اللغة | الوثائق | العناوين | البيانات اليومية |
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

## 12. روابط BODACC

- [BODACC.io](https://bodacc.io) — الموقع المباشر
- [البحث عن الشركات](https://bodacc.io/ar/entreprises) · [الإعلانات القانونية](https://bodacc.io/ar/annonces) · [المسيّرون](https://bodacc.io/ar/personnes)
- [وثائق الواجهة البرمجية](https://bodacc.io/ar/wathaiq) · [واجهة Swagger](https://bodacc.io/api/bodacc/docs)
- [الأسعار](https://bodacc.io/ar/tarifs) · [التقنية](https://bodacc.io/ar/technologie)
- [قائمة العناوين (فهرس متعدد اللغات)](URLLIST.md)

---

*BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) هو المنشور الرسمي للإعلانات
القانونية للشركات الفرنسية. وBODACC.io خدمة مستقلة وغير مرتبطة بـ DILA.*
