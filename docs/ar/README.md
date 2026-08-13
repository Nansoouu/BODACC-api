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
> 📰 [الملخص الكامل](recaps/README.md) · 🏠 [خلف كواليس BODACC.io](coulisses/COULISSES.md)

<div align="center">

![Python 3.12](https://img.shields.io/badge/Python-3.12-3776AB?logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-API-009688?logo=fastapi&logoColor=white)
![PostgreSQL 16](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)

![Annonces](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=الإعلانات&color=blue)
![Entreprises](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=الشركات&color=green)
![Personnes](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=الأشخاص&color=orange)
![Site bodacc.io](https://img.shields.io/badge/bodacc.io-Explorer-important?logo=internetexplorer&logoColor=white&style=for-the-badge)

</div>

**الواجهة البرمجية التي تحوّل الإعلانات القانونية الفرنسية إلى بيانات منظمة، مترابطة، وقابلة للاستغلال — في الوقت الفعلي.**

BODACC (النشرة الرسمية للإعلانات المدنية والتجارية) هو المنشور الرسمي الذي يوثّق الحياة القانونية للشركات الفرنسية: التأسيس، التعديلات، الشطب، الإجراءات الجماعية، البيع، إيداع الحسابات. هذه النصوص عامة، لكنها تبقى في شكل مستندات خام: فهي غير منظمة، وغير مترابطة، وليس من السهل الاستعلام عنها.

**BODACC-api يجعلها قابلة للاستغلال.** يتم تحليل كل إعلان تلقائيًا وتحويله إلى بيانات منظمة (SIREN، الاسم التجاري، العنوان، NAF، المدراء، المبالغ...)، ثم ربطه بشركته وبالأشخاص الذين يظهرون فيه. النتيجة: رسم بياني كامل للحياة الاقتصادية الفرنسية، يمكن الاستعلام عنه بطلب HTTP واحد.

> ���� الموقع: [bodacc.io](https://bodacc.io) · 📖 Swagger: [https://bodacc.io/api/bodacc/docs](https://bodacc.io/api/bodacc/docs) · 💶 [الأسعار](https://bodacc.io/ar/tarifs)

---

## ✨ لماذا BODACC-api؟

| | |
|---|---|
| 🗂 **كل السجل التاريخي، منذ 2004** | ملايين الإعلانات في قاعدة البيانات، تغطية كاملة — وليس نافذة زمنية متحركة |
| ⚡ **الوقت الفعلي** | إعلانات اليوم متاحة كل صباح، قبل فتح المكاتب |
| 🕸 **رسم بياني، وليس ملفات** | إعلان ← شركة (SIREN) ← مدراء ← ولايات ← صفقات عامة: كل شيء مترابط وقابل للاستعلام في طلب واحد |
| ✨ **من النص الخام إلى البيانات المنظمة** | SIREN، NAF، العنوان، المدراء، الإجراءات... مستخرجة تلقائيًا من كل نص قانوني |
| 🌍 **20 لغة** | الواجهة والمحتوى مترجمان — فرقك وعملاؤك يتحدثون لغتهم |
| 🤖 **جاهز للوكلاء** | 100/100 في تدقيق isitagentready (DNSSEC, DNS-AID, auth.md, WebMCP, llms.txt) |
| 🚪 **صفر احتكاك للتجربة** | جميع نقاط نهاية القراءة متاحة بدون مفتاح — تقيّم قبل أن تدفع |

---

## 🏭 قيمتنا المضافة: خط المعالجة

ما يصنع الفرق ليس البيانات الخام (فهي عامة)، بل ما نفعله بها — كل يوم، تلقائيًا:

**1. استيعاب موثوق وكامل.** كل صباح قبل الساعة 09:00، يتم دمج الإعلانات الجديدة المنشورة من قبل DILA في قاعدتنا. السجل التاريخي الكامل يعود إلى 2004، أي أبعد بكثير مما توفره الاستشارة العامة. إعادة تنفيذ عملية الاستيعاب لا تُنشئ أي تكرار: بياناتنا مُتحقق منها ومتسقة بشكل دائم.

**2. إثراء ذكي.** كل إعلان هو نص قانوني — محرك الاستخراج الهجين لدينا (قواعد عمل + ذكاء اصطناعي) يحوله إلى بيانات منظمة: رقم SIREN، الاسم التجاري، العنوان، رمز NAF، المدراء، الولايات، المبالغ، الإجراءات. ما يتطلب ساعات من القراءة البشرية يصبح حقول JSON قابلة للاستعلام.

**3. رسم بياني علائقي.** إعلان الإجراء الجماعي لا قيمة له إلا إذا عرفنا إلى أي شركة ينتمي، ومن هو مديرها. محرك الحل لدينا يربط كل إعلان بشركته (SIREN)، وكل شخص بولاياته، وكل صفقة عامة بجهة الإسناد. تستعلم عن الحياة الاقتصادية الفرنسية كما لو كانت قاعدة بيانات — وليس ككومة من ملفات PDF.

**4. نشر في الوقت الفعلي.** بمجرد نشر إعلان، يصبح متاحًا عبر الواجهة البرمجية، مع علاقاته وإثرائه. لا ملفات للتنزيل، ولا ETL للصيانة: طلب HTTP واحد يكفي.

---

## ⚖️ مقارنة: أين نقع

| | **الموقع الرسمي (bodacc.fr)** | **Pappers** | **BODACC.io** |
|---|---|---|---|
| **السجل التاريخي** | منذ 2008 فقط | سجل تجاري حسب الاشتراك | **كامل منذ 2004** |
| **API** | ❌ لا يوجد | API مخصص للعروض الأعلى | ✅ **API REST موثقة، بدون مفتاح للقراءة** |
| **البيانات المنظمة** | ❌ استشارة PDF | ✅ ملفات شخصية موسعة | ✅ **إعلانات + رسم بياني للشركات/الأشخاص/الأسواق** |
| **الوقت الفعلي** | نشر ورقي قابل للاستشارة عبر الإنترنت | تحديث يومي | ✅ **كل صباح قبل 09:00** |
| **السعر** | مجاني، لكن محدود | من **29,90 €/شهر** للوصول الأساسي | **باقات ميسورة، تبدأ بالمجانية للاستكشاف** |
| **الجمهور** | عامة الناس | محترفون (امتثال، مراقبة) | **مطورون، fintech، legaltech، فرق بيانات** |

**نقاط قوة الموقع الرسمي**: مجاني، موثوق، رسمي. **نقاط الضعف**: لا API، السجل التاريخي محدود حتى 2008، لا بيانات منظمة — تبقى في ملفات PDF.

**نقاط قوة Pappers**: واجهة أنيقة جدًا، تجميع INSEE + INPI + BODACC، مراقبة مدمجة. **نقاط الضعف**: السعر (29,90 €/شهر للوصول الأساسي، API والسجل الكامل أغلى)، حل موجه للاستشارة بدلاً من البيانات القابلة للاستغلال.

**موقعنا**: **كل السجل التاريخي منذ 2004، أسرع من الموقع الرسمي — وبسعر أقل من Pappers.** مصمم لمن يريدون ربط البيانات بأدواتهم الخاصة، وليس لمن يريدون شاشة إضافية.

> 💶 الاطلاع على الباقات: [bodacc.io/ar/tarifs](https://bodacc.io/ar/tarifs) — مجاني · Pro · Enterprise · LIFE

---

## 🚀 التجربة في 30 ثانية

جميع نقاط نهاية القراءة متاحة **بدون مفتاح**:

```bash
# البحث عن شركة بالاسم
curl "https://bodacc.io/api/bodacc/annonces?q=rizom&limit=5"

# تفاصيل إعلان (مع علاقاته: شركات + أشخاص)
curl "https://bodacc.io/api/bodacc/annonces/A202601432266"

# ملف الشركة (إعلانات حديثة + مدراء + صفقات عامة)
curl "https://bodacc.io/api/bodacc/entreprises/912969573"

# إحصائيات عامة
curl "https://bodacc.io/api/bodacc/stats"

# الحجم اليومي (آخر 30 يومًا)
curl "https://bodacc.io/api/bodacc/stats/daily30"
```

---

## 📡 نقاط النهاية

### الإعلانات

| الطريقة | المسار | الوصف |
|---|---|---|
| `GET` | `/bodacc/annonces` | بحث: `q` (اسم/SIREN)، `famille`، `departement`، تواريخ، ترقيم صفحات `limit`/`offset` |
| `GET` | `/bodacc/annonces/{id}` | تفاصيل كاملة: `raw_data` + إثراء + `relations` (الشركات والأشخاص المرتبطون) |
| `GET` | `/bodacc/enrichi/{id}` | نسخة منظمة (siren، تسمية، NAF، مدراء...) |
| `POST` | `/bodacc/enrichi/batch` | إثراء بالجملة |

### الشركات والأشخاص

| الطريقة | المسار | الوصف |
|---|---|---|
| `GET` | `/bodacc/entreprises` | ب��ث عن شركة (اسم، مدينة، NAF، رمز بريدي) |
| `GET` | `/bodacc/entreprises/{siren}` | ملف INSEE + `annonces_recentes`، `dirigeants`، `marches_publics`، `stats` |
| `GET` | `/bodacc/entreprises/by-slug/{slug}` | ملف عبر slug لتحسين محركات البحث |
| `GET` | `/bodacc/personnes/{id}` | ملف شخص: ولايات (أدوار) + شركات مرتبطة |

### الإحصائيات

| الطريقة | المسار | الوصف |
|---|---|---|
| `GET` | `/bodacc/stats` | إجماليات، حسب العائلة، حسب التاريخ |
| `GET` | `/bodacc/stats/daily` | حجم اليوم (حسب الإصدار، الإدارة، العائلة) |
| `GET` | `/bodacc/stats/daily30` | سلسلة آخر 30 يومًا |
| `GET` | `/bodacc/stats/counts` | عدادات: إعلانات، شركات، أشخاص |
| `GET` | `/bodacc/graph/categories` | توزيع حسب الفئة |

### التنبيهات والتكاملات

| الطريقة | المسار | الوصف |
|---|---|---|
| `GET/POST/DELETE` | `/bodacc/alertes` | تنبيهات حسب SIREN (متابعة شركة) |
| `POST` | `/bodacc/ingest?target_date=YYYY-MM-DD` | تشغيل استيعاب لتاريخ معين |
| `POST` | `/bodacc/import` | استيراد بالجملة (backfill) |

### مرجع NAF (INSEE)

| الطريقة | المسار | الوصف |
|---|---|---|
| `GET` | `/bodacc/naf` | مرجع NAF rev. 2 كامل (732 فئة فرعية، 615 فئة) — تسميات INSEE الرسمية |
| `GET` | `/bodacc/naf?q=commerce` | بحث NAF حسب التسمية |
| `GET` | `/bodacc/naf?code=46.72Z` | بطاقة رمز NAF |

---

## 📊 البيانات

الشارات أعلى الصفحة هي **عدادات في الوقت الفعلي**: إعلانات BODACC، شركات SIRENE، والأشخاص المستخرجون — تتغير مع تقدم توحيد السجل التاريخي والإثراء.

مؤشرات ثابتة:

- 📰 **إعلانات BODACC**: سجل تاريخي كامل منذ 2004، يُحدَّث كل صباح قبل 09:00
- 🏢 **الشركات (SIRENE)**: 29.8 مليون كيان قانوني فرنسي (سجل INSEE)
- 👤 **الأشخاص المستخرجون**: مدراء، مصفون، مراجعو حسابات... في توحيد مستمر
- 📦 **الصفقات العامة (BOAMP)**: 1.69 مليون عقد عام 2015 ← 2026

---

## 🛠 التقنية

| الطبقة | التقنية |
|---|---|
| **API** | Python · FastAPI · PostgreSQL 16 |
| **البيانات** | فهرسة trigram، بحث نص كامل، JSONB |
| **الاستيعاب** | خط معالجة آلي، تكامل يومي، idempotent |
| **الإثراء** | استخراج هجين (قواعد عمل + ذكاء اصطناعي) |
| **الواجهة الأمامية** | Next.js · i18n 20 لغة |
| **البنية التحتية** | Docker · Cloudflare (CDN, cache, DNSSEC) |
| **وكلاء الذكاء الاصطناعي** | خادم MCP · DNS-AID · auth.md · llms.txt |

---

## 🔓 البيانات المفتوحة

البيانات المصدرية عامة ومجانية:

- **BODACC**: [data.gouv.fr / DILA](https://www.data.gouv.fr/fr/datasets/bodacc-annonces-commerciales/) (إعلانات قانونية)
- **SIRENE**: [INSEE](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/) (29.8 مليون كيان قانوني)
- **BOAMP**: [Opendatasoft / DILA](https://boamp-datadila.opendatasoft.com) (صفقات عامة)

**BODACC-api يضيف البنية والرسم البياني على هذه البيانات الخام**: تحليل النصوص القانونية، حل الهوية (الأشخاص)، روابط شركة ↔ إعلان ↔ عقد.

---

## 🌐 استكشاف الموقع

[الرئيسية](https://bodacc.io/ar) · [الإعلانات](https://bodacc.io/ar/annonces) · [الشركات](https://bodacc.io/ar/entreprises) · [الأشخاص](https://bodacc.io/ar/personnes) · [الأسعار](https://bodacc.io/ar/tarifs) · [التقنية](https://bodacc.io/ar/technologie)

---

## 📄 الترخيص والاتصال

- الترخيص: MIT (الكود) — تبقى البيانات خاضعة لتراخيص منتجيها (DILA, INSEE)
- الموقع: [bodacc.io](https://bodacc.io)
- المشكلات وطلبات السحب (PR): مرحب بها على هذا المستودع

---

*BODACC (النشرة الرسمية للإعلانات المدنية والتجارية) هو المنشور الرسمي للإعلانات القانونية للشركات الفرنسية. هذا المشروع غير تابع لـ DILA.*
