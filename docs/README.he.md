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

🌍 [Français](docs/README.fr.md) · [English](README.md) · [Español](docs/README.es.md) · [Deutsch](docs/README.de.md) · [Italiano](docs/README.it.md) · [Português](docs/README.pt.md) · [Nederlands](docs/README.nl.md) · [Polski](docs/README.pl.md) · [Русский](docs/README.ru.md) · [Türkçe](docs/README.tr.md) · [Українська](docs/README.uk.md) · [Bahasa Indonesia](docs/README.id.md) · [Tiếng Việt](docs/README.vi.md) · [日本語](docs/README.ja.md) · [한국어](docs/README.ko.md) · [中文](docs/README.zh.md) · [العربية](docs/README.ar.md) · [עברית](docs/README.he.md) · [हिन्दी](docs/README.hi.md) · [فارسی](docs/README.fa.md)

<div align="center">

![Python 3.12](https://img.shields.io/badge/Python-3.12-3776AB?logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-API-009688?logo=fastapi&logoColor=white)
![PostgreSQL 16](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)

![Annonces](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Annonces&color=blue)
![Entreprises](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Entreprises&color=green)
![Personnes](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Personnes&color=orange)
![Site bodacc.io](https://img.shields.io/badge/bodacc.io-Explorer-important?logo=internetexplorer&logoColor=white&style=for-the-badge)

</div>

**ה-API שהופך את ההודעות המשפטיות הצרפתיות לנתונים מובנים, מקושרים ושמישים — בזמן אמת.**

ה-BODACC (העלון הרשמי של הודעות אזרחיות ומסחריות) הוא הפרסום הרשמי המתעד את החיים המשפטיים של חברות צרפתיות: הקמות, שינויים, מחיקות, הליכי חדלות פירעון, מכירות, הגשת דוחות כספיים. טקסטים אלה הם ציבוריים, אך נותרים במצב של מסמכים גולמיים: הם אינם מובנים, אינם מקושרים זה לזה, ואינם ניתנים לשאילתה בקלות.

**BODACC-api הופך אותם לשמישים.** כל הודעה מנותחת אוטומטית ומומרת לנתונים מובנים (SIREN, שם חברה, כתובת, NAF, נושאי משרה, סכומים...), ולאחר מכן מקושרת לחברה שלה ולאנשים המופיעים בה. התוצאה: גרף שלם של החיים הכלכליים הצרפתיים, הניתן לשאילתה באמצעות בקשת HTTP אחת.

> 🌐 אתר: [bodacc.io](https://bodacc.io) · 📖 Swagger: [https://bodacc.io/api/bodacc/docs](https://bodacc.io/api/bodacc/docs) · 💶 [תעריפים](https://bodacc.io/fr/tarifs)

---

## ✨ למה BODACC-api?

| | |
|---|---|
| 🗂 **כל ההיסטוריה, מאז 2004** | מיליוני הודעות במאגר, כיסוי מלא — לא חלון נע |
| ⚡ **זמן אמת** | ההודעות של היום זמינות בכל בוקר, לפני פתיחת המשרדים |
| 🕸 **גרף, לא קבצים** | הודעה → חברה (SIREN) → נושאי משרה → תפקידים → מכרזים ציבוריים: הכל מקושר וניתן לשאילתה בבקשה אחת |
| ✨ **מטקסט גולמי לנתונים מובנים** | SIREN, NAF, כתובת, נושאי משרה, הליכים... מופקים אוטומטית מכל טקסט משפטי |
| 🌍 **20 שפות** | הממשק והתכנים מתורגמים — הצוותים והלקוחות שלכם מדברים בשפתם |
| 🤖 **מוכן לסוכני AI** | 100/100 בביקורת isitagentready (DNSSEC, DNS-AID, auth.md, WebMCP, llms.txt) |
| 🚪 **אפס חיכוך לבדיקה** | כל נקודות הקצה לקריאה נגישות ללא מפתח — אתם מעריכים לפני שאתם משלמים |

---

## 🏭 הערך המוסף שלנו: הצינור (Pipeline)

מה שעושה את ההבדל הוא לא הנתונים הגולמיים (הם ציבוריים), אלא מה שאנחנו עושים איתם — כל יום, אוטומטית:

**1. קליטה אמינה ומלאה.** בכל בוקר לפני 09:00, ההודעות החדשות שפורסמו על ידי DILA משולבות במאגר שלנו. ההיסטוריה המלאה חוזרת ל-2004, הרבה מעבר למה שמציעה הצפייה הציבורית. ביצוע חוזר של קליטה אינו יוצר כפילויות: הנתונים שלנו מאומתים ועקביים באופן קבוע.

**2. העשרה חכמה.** כל הודעה היא טקסט משפטי — מנוע החילוץ ההיברידי שלנו (כללים עסקיים + AI) הופך אותה לנתונים מובנים: מספר SIREN, שם חברה, כתובת, קוד NAF, נושאי משרה, תפקידים, סכומים, הליכים. מה שדורש שעות של קריאה אנושית הופך לשדות JSON הניתנים לשאילתה.

**3. גרף יחסי.** הודעה על הליך חדלות פירעון שווה רק אם יודעים לאיזו חברה היא שייכת, ומי הוא נושא המשרה שלה. מנוע הפתרון שלנו מקשר כל הודעה לחברה שלה (SIREN), כל אדם לתפקידיו, כל מכרז ציבורי לזוכה בו. אתם שואלים את החיים הכלכליים הצרפתיים כמו מסד נתונים — לא כמו ערימת PDF.

**4. הפצה בזמן אמת.** ברגע שהודעה מתפרסמת, היא זמינה דרך ה-API, עם היחסים וההעשרה שלה. אין קבצים להורדה, אין ETL לתחזוקה: בקשת HTTP אחת מספיקה.

---

## ⚖️ השוואה: היכן אנחנו ממוקמים

| | **אתר רשמי (bodacc.fr)** | **Pappers** | **BODACC.io** |
|---|---|---|---|
| **היסטוריה** | רק מאז 2008 | היסטוריה מסחרית לפי מנוי | **מלאה מאז 2004** |
| **API** | ❌ אין | API שמור להצעות גבוהות יותר | ✅ **API REST מתועד, ללא מפתח לקריאה** |
| **נתונים מובנים** | ❌ צפייה ב-PDF | ✅ פרופילים מועשרים | ✅ **הודעות + גרף חברות/אנשים/שווקים** |
| **זמן אמת** | פרסום נייר ניתן לצפייה מקוונת | עדכון יומי | ✅ **כל בוקר לפני 09:00** |
| **מחיר** | חינם, אך מוגבל | החל מ-**29.90 €/חודש** לגישה בסיסית | **חבילות נגישות, החל מחינם לחקירה** |
| **קהל** | הציבור הרחב | אנשי מקצוע (ציות, מעקב) | **מפתחים, פינטק, לגלטק, צוותי נתונים** |

**נקודות החוזק של האתר הרשמי**: חינם, אמין, רשמי. **נקודות החולשה**: אין API, היסטוריה מוגבלת ל-2008, אין נתונים מובנים — אתם נשארים עם ה-PDF.

**נקודות החוזק של Pappers**: ממשק מעוצב מאוד, צירוף INSEE + INPI + BODACC, מעקב מובנה. **נקודות החולשה**: המחיר (29.90 €/חודש לגישה בסיסית, ה-API וההיסטוריה המלאה יקרים יותר), פתרון מוכוון צפייה ולא נתונים שמישים.

**העמדה שלנו**: **כל ההיסטוריה מאז 2004, מהר יותר מאשר באתר הרשמי — ובמחיר נמוך מזה של Pappers.** מיועד למי שרוצה לחבר את הנתונים לכלים שלו, לא למי שרוצה עוד מסך.

> 💶 ראו את החבילות: [bodacc.io/fr/tarifs](https://bodacc.io/fr/tarifs) — חינם · Pro · Enterprise · LIFE

---

## 🚀 ניסיון ב-30 שניות

כל נקודות הקצה לקריאה נגישות **ללא מפתח**:

```bash
# חיפוש חברה לפי שם
curl "https://bodacc.io/api/bodacc/annonces?q=rizom&limit=5"

# פירוט הודעה (עם היחסים שלה: חברות + אנשים)
curl "https://bodacc.io/api/bodacc/annonces/A202601432266"

# פרופיל חברה (הודעות אחרונות + נושאי משרה + מכרזים ציבוריים)
curl "https://bodacc.io/api/bodacc/entreprises/912969573"

# סטטיסטיקות כלליות
curl "https://bodacc.io/api/bodacc/stats"

# נפח יומי (30 הימים האחרונים)
curl "https://bodacc.io/api/bodacc/stats/daily30"
```

---

## 📡 נקודות הקצה

### הודעות

| שיטה | נתיב | תיאור |
|---|---|---|
| `GET` | `/bodacc/annonces` | חיפוש: `q` (שם/SIREN), `famille`, `departement`, תאריכים, דפדוף `limit`/`offset` |
| `GET` | `/bodacc/annonces/{id}` | פירוט מלא: `raw_data` + העשרה + `relations` (חברות ואנשים מקושרים) |
| `GET` | `/bodacc/enrichi/{id}` | גרסה מובנית (siren, dénomination, NAF, dirigeants...) |
| `POST` | `/bodacc/enrichi/batch` | העשרה בכמות |

### חברות ואנשים

| שיטה | נתיב | תיאור |
|---|---|---|
| `GET` | `/bodacc/entreprises` | חיפוש חברה (שם, עיר, NAF, מיקוד) |
| `GET` | `/bodacc/entreprises/{siren}` | פרופיל INSEE + `annonces_recentes`, `dirigeants`, `marches_publics`, `stats` |
| `GET` | `/bodacc/entreprises/by-slug/{slug}` | פרופיל לפי slug לקידום אתרים |
| `GET` | `/bodacc/personnes/{id}` | פרופיל אדם: תפקידים (roles) + חברות מקושרות |

### סטטיסטיקות

| שיטה | נתיב | תיאור |
|---|---|---|
| `GET` | `/bodacc/stats` | סה"כ, לפי משפחה, לפי תאריך |
| `GET` | `/bodacc/stats/daily` | נפח היום (לפי פרסום, מחלקה, משפחה) |
| `GET` | `/bodacc/stats/daily30` | סדרת 30 הימים האחרונים |
| `GET` | `/bodacc/stats/counts` | מונים: הודעות, חברות, אנשים |
| `GET` | `/bodacc/graph/categories` | התפלגות לפי קטגוריה |

### התראות ואינטגרציות

| שיטה | נתיב | תיאור |
|---|---|---|
| `GET/POST/DELETE` | `/bodacc/alertes` | התראות לפי SIREN (מעקב חברה) |
| `POST` | `/bodacc/ingest?target_date=YYYY-MM-DD` | הפעלת קליטה עבור תאריך |
| `POST` | `/bodacc/import` | ייבוא בכמות (backfill) |

### רפרנטיאל NAF (INSEE)

| שיטה | נתיב | תיאור |
|---|---|---|
| `GET` | `/bodacc/naf` | רפרנטיאל NAF rev. 2 מלא (732 תת-מחלקות, 615 מחלקות) — תוויות רשמיות של INSEE |
| `GET` | `/bodacc/naf?q=commerce` | חיפוש NAF לפי תווית |
| `GET` | `/bodacc/naf?code=46.72Z` | כרטיס של קוד NAF |

---

## 📊 הנתונים

התגים בראש העמוד הם **מונים בזמן אמת**: הודעות BODACC, חברות SIRENE ואנשים שחולצו — הם מתעדכנים תוך כדי איחוד ההיסטוריה וההעשרה.

נקודות ייחוס יציבות:

- 📰 **הודעות BODACC**: היסטוריה מלאה מאז 2004, מתעדכנת בכל בוקר לפני 09:00
- 🏢 **חברות (SIRENE)**: 29.8 מיליון יחידות משפטיות צרפתיות (רישום INSEE)
- 👤 **אנשים שחולצו**: נושאי משרה, מפרקים, רואי חשבון... באיחוד מתמשך
- 📦 **מכרזים ציבוריים (BOAMP)**: 1.69 מיליון חוזים ציבוריים 2015 → 2026

---

## 🛠 טכנולוגיה

| שכבה | טכנולוגיה |
|---|---|
| **API** | Python · FastAPI · PostgreSQL 16 |
| **נתונים** | אינדוקס טריגרמים, חיפוש טקסט מלא, JSONB |
| **קליטה** | צינור אוטומטי, אינטגרציה יומית, אידמפוטנטי |
| **העשרה** | חילוץ היברידי (כללים עסקיים + AI) |
| **פרונטאנד** | Next.js · i18n 20 שפות |
| **תשתית** | Docker · Cloudflare (CDN, cache, DNSSEC) |
| **סוכני AI** | שרת MCP · DNS-AID · auth.md · llms.txt |

---

## 🔓 נתונים פתוחים

נתוני המקור הם ציבוריים וחינמיים:

- **BODACC**: [data.gouv.fr / DILA](https://www.data.gouv.fr/fr/datasets/bodacc-annonces-commerciales/) (הודעות משפטיות)
- **SIRENE**: [INSEE](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/) (29.8 מיליון יחידות משפטיות)
- **BOAMP**: [Opendatasoft / DILA](https://boamp-datadila.opendatasoft.com) (מכרזים ציבוריים)

**BODACC-api מוסיף את המבנה והגרף על הנתונים הגולמיים האלה**: ניתוח טקסטים משפטיים, פתרון זהויות (אנשים), קישורים חברה ↔ הודעה ↔ חוזה.

---

## 🌐 לחקור את האתר

[דף הבית](https://bodacc.io/fr) · [הודעות](https://bodacc.io/fr/annonces) · [חברות](https://bodacc.io/fr/entreprises) · [אנשים](https://bodacc.io/fr/personnes) · [תעריפים](https://bodacc.io/fr/tarifs) · [טכנולוגיה](https://bodacc.io/fr/technologie)

---

## 📄 רישיון ויצירת קשר

- רישיון: MIT (קוד) — הנתונים נותרים כפופים לרישיונות של מפיקיהם (DILA, INSEE)
- אתר: [bodacc.io](https://bodacc.io)
- בעיות ו-PR: מתקבלים בברכה במאגר זה

---

*ה-BODACC (העלון הרשמי של הודעות אזרחיות ומסחריות) הוא הפרסום הרשמי של ההודעות המשפטיות של חברות צרפתיות. פרויקט זה אינו מסונף ל-DILA.*
