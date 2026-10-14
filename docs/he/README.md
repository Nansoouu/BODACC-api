<div align="center">

# BODACC.io : ממשק API של BODACC להודעות משפטיות צרפתיות ולנתוני חברות

**כל הגשה של חברה צרפתית, בזמן אמת.** הקמות, תיקונים, הגשת חשבונות,
הליכי חדלות פירעון, מכירות, מחיקות — כל הודעה של BODACC, מקושרת לחברה שלה,
לדירקטורים שלה ולמקור הרשמי שלה. חינם ופתוח, בעשרים שפות.

[**bodacc.io**](https://bodacc.io) · [תיעוד הממשק](https://bodacc.io/he/teud) · [Swagger](https://bodacc.io/api/bodacc/docs) · [RSS](https://bodacc.io/rss.xml)

</div>

## 1. נתוני BODACC בזמן אמת

| מערך נתונים של BODACC | רשומות | בזמן אמת |
|---|---|---|
| הודעות משפטיות של BODACC | 51 043 403 | ![Notices](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=הודעות&color=blue) |
| חברות צרפתיות | 30 032 566 | ![Companies](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=חברות&color=green) |
| דירקטורים ונושאי משרה | 4 935 692 | ![People](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=אנשים&color=orange) |
| חוזים ציבוריים (BOAMP) | 1 716 163 | ![Contracts](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=boamp&label=חוזים&color=purple) |

המספרים האלה אינם מועתקים: הם **מוגשים בזמן אמת על ידי ממשק BODACC עצמו**, בכתובת
[`/api/bodacc/stats/counts-formatted`](https://bodacc.io/api/bodacc/stats/counts-formatted).
בדקו אותם בעצמכם, ואז בדקו אותם שוב מחר.

**היום** (14 באוקטובר 2026): **5 920 הודעות** — המשפחה הנפוצה ביותר: הגשת חשבונות (2 306).

| משפחה של BODACC | הודעות היום |
|---|---|
| הגשת חשבונות | 2 306 |
| הקמות | 1 415 |
| תיקונים | 1 193 |
| מחיקות | 500 |
| הליכי חדלות פירעון | 323 |
| רישומים | 118 |
| מכירות והעברות | 65 |

## 2. מה נותן לכם ממשק BODACC

‏BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) הוא העיתון הרשמי של החיים
המשפטיים של החברות בצרפת. כל הקמה, כל הגשת חשבונות, כל חדלות פירעון וכל מכירה מתפרסמים בו
מכוח החוק. BODACC.io הופך את העיתון הזה למסד נתונים שאפשר לשאול אותו.

**רוב מסדי הנתונים של חברות נותנים לכם תמונת מצב קפואה. ממשק BODACC נותן לכם את התנועה.**

מדריך אומר לכם שחברה קיימת: השם שלה, הכתובת שלה, מספר הרישום שלה. ‏BODACC אומר לכם
**מה החברה עשתה זה עתה**, ומתי. ההבדל הזה הוא כל העניין:

| | מדריכי חברות | BODACC.io |
|---|---|---|
| מה מקבלים | רשומת זהות קפואה | אירועים מתוארכים |
| עדכניות | מתעדכן כל רבעון | מתפרסם באותו בוקר |
| חדלות פירעון | דגל סטטוס | ההליך, טיבו ותאריכו |
| חשבונות | ערך בוליאני „הוגש” | כל הגשה, עם תאריך הסגירה שלה |
| נושאי משרה | שם | כל מינוי, עם החברות שלו |
| מקור | העתק | ההודעה הרשמית וקובץ ה-PDF שלה |

## 3. ההודעות המשפטיות של BODACC : בפירוט

כל הודעה נושאת 23 שדות. הנה הודעה אמיתית, בדיוק כפי שממשק BODACC מחזיר אותה:

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

כל הודעה מקשרת **לעמוד המלא שלה ב-bodacc.io**, שבו המקור הרשמי וקובץ ה-PDF נמצאים במרחק לחיצה אחת.

שבע המשפחות של BODACC, עם המונח הצרפתי שתראו בנתונים:

| משפחה של BODACC | בנתונים | מה זה אומר |
|---|---|---|
| הקמות | `creation` | חברה חדשה נרשמת |
| תיקונים | `modification` | תקנון, הנהלה, כתובת, שינוי הון |
| הגשת חשבונות | `dpc` | דוחות כספיים שנתיים שהוגשו לרשם בית המשפט |
| הליכי חדלות פירעון | `collective` | כינוס נכסים, פירוק, הבראה |
| מכירות והעברות | `vente` | עסק נמכר או מועבר |
| מחיקות | `radiation` | החברה נמחקת מהמרשם |
| רישומים | `immatriculation` | רישום במרשם המסחרי |

## 4. רשומות החברות של BODACC

כל הודעה מצביעה על החברה שמאחוריה. ממשק BODACC חושף את החברות האלה עם הזהות, הפעילות
וההיסטוריה החשבונאית:

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

מעבר לזהות: קוד הפעילות (NAF), הצורה המשפטית, המעמד המנהלי, **תאריך הגשת החשבונות
האחרון, תאריך הסגירה האחרון ומספר הימים מאז**, ובנוסף התגיות שחברה עשויה לשאת: כלכלה
חברתית, ביו, RGE, Qualiopi.

## 5. הדירקטורים ונושאי המשרה של BODACC

מאחורי כל חברה עומדים האנשים שמנהלים אותה. ממשק BODACC מפרט **4.9 מיליון דירקטורים, נושאי
משרה, מפרקים ומבקרים**, שלכל אחד מהם:

- המינויים שלהם, חברה אחר חברה, עם התקופה הרלוונטית
- החברות האחרות שלהם, כדי שתוכלו לעקוב אחרי אדם לאורך הקריירה
- ההודעות שנוגעות להם

זה מה שהופך מרשם לגרף: חברה, נושאי המשרה שלה, והחברות שגם הם מנהלים. נקודת קצה אחת חושפת
זאת ישירות.

## 6. ממשק API של BODACC

‏REST, ‏JSON, ללא צורך במפתח בנקודות הקצה הפתוחות, עד 500 רשומות בקריאה, עם עימוד לפי `offset`.

```bash
# ההודעות האחרונות של BODACC (החדשות ביותר תמיד ראשונות)
curl "https://bodacc.io/api/bodacc/annonces?limit=100"

# הודעה אחת, עם החברות שלה, עם נושאי המשרה שלה ועם קובץ PDF שלה
curl "https://bodacc.io/api/bodacc/annonces/C202601972306-depot-comptes-988208435-141026-holding-biiz"

# חברה לפי SIREN
curl "https://bodacc.io/api/bodacc/entreprises/552081317"

# כל הודעה של BODACC הנוגעת לאותה חברה
curl "https://bodacc.io/api/bodacc/entreprises/552081317/annonces"

# הגרף של החברה: נושאי המשרה והחברות האחרות שלהם
curl "https://bodacc.io/api/bodacc/entreprises/552081317/graphe"

# חיפוש לפי שם, עיר, מחוז, קוד פעילות או טווח תאריכים
curl "https://bodacc.io/api/bodacc/entreprises?q=eiffage&departement=75"
curl "https://bodacc.io/api/bodacc/annonces?famille=collective&date_debut=2026-10-01"
```

המראה המלא: [bodacc.io/he/teud](https://bodacc.io/he/teud) — נקודת קצה אחר נקודת קצה, עם ממשק
‏Swagger ומפרט OpenAPI מפורסם, בעשרים שפות.

## 7. מערכי הנתונים והמייצואים של BODACC

מעבר לממשק, כל עמוד ב-bodacc.io הוא כתובת URL יציבה וניתנת לסריקה: הודעות משפטיות, חברות,
נושאי משרה, אזורים, ערים, סטטיסטיקות — והאתר מפרסם נקודות כניסה קריאות למכונה:

- [מפות אתר](https://bodacc.io/sitemap.xml) — מלאי כתובות ה-URL המלא, לפי שפה
- [קטלוג API](https://bodacc.io/.well-known/api-catalog) — ניתן לגילוי על ידי סוכנים
- [RSS](https://bodacc.io/rss.xml) — הפיד היומי
- [רשימת כתובות](URLLIST.md) — כל נקודות הכניסה, רשימה אחת לכל שפה

## 8. הכיסוי והעדכניות של BODACC

‏BODACC מתפרסם בימי עבודה, לא בסופי שבוע. BODACC.io אוסף כל פרסום ומעמיד אותו לרשותכם
**באותו בוקר**, בדרך כלל בתוך דקות מהפרסום. כל הודעה שומרת על תאריך הפרסום שלה, כך שתמיד
תדעו מה חדש.

## 9. מה עושים עם BODACC

- **ציות ו-KYC** — בדקו את המעמד האמיתי של צד שכנגד לפני חתימה, ולא את המעמד שלו מלפני שלושה חודשים
- **בדיקת נאותות** — עקבו אחר ההגשות של חברה, החשבונות שלה וההיסטוריה של חדלות הפירעון שלה
- **דירוג אשראי וסיכון** — הליכי חדלות פירעון והגשת חשבונות הם האותות המוקדמים ביותר
- **מודיעין מכירות** — הקמה חדשה היא לקוח פוטנציאלי חדש, ביום שבו היא קורית
- **עיתונות** — עובדות ברמת החברה, עם מקור ותאריך
- **מחקר** — 51 מיליון הגשות, מהמרשמים העתיקים ביותר ועד הבוקר
- **משפטים וראיית חשבון** — מצאו את החברות שאתם מייצגים, ואת מה שהן הגישו

## 10. שאלות נפוצות על BODACC

**האם BODACC.io הוא BODACC הרשמי?**

לא. BODACC.io הוא שירות עצמאי שהופך את נתוני BODACC הציבוריים לשמישים ולניתנים לשאילתה.
הוא אינו קשור ל-DILA או לגוף ציבורי כלשהו. כל הודעה מקשרת חזרה למקור הרשמי שלה.

**האם ממשק BODACC הוא בחינם?**

נקודות הקצה הפתוחות חינמיות ואינן דורשות מפתח. קיימות חבילות בתשלום לשימוש כבד:
[ראו מחירים](https://bodacc.io/he/tarifs).

**מה ההבדל בין BODACC למדריך חברות?**

מדריך נותן לכם את הזהות של חברה. ‏BODACC נותן לכם את הפעילות שלה: מה היא הגישה, מתי, ומה
בית המשפט פרסם עליה. השניים משלימים זה את זה: BODACC.io נושא גם את הזהות.

**עד כמה הנתונים עדכניים?**

הודעות מופיעות בבוקר שבו הן מתפרסמות. רשומות חברה מתעדכנות עם הגעת ההודעות.

**כמה רשומות בכל קריאה?**

עד 500, עם `offset` לעימוד. אין תקרה על מספר הקריאות בנקודות הקצה הפתוחות.

**אפשר להשתמש בזה בפרודקשן?**

כן. הממשק מתועד, מנוהל בגרסאות ומוגש מ-Cloudflare. ייחוס ל-[bodacc.io](https://bodacc.io)
יתקבל בברכה.

**אילו שפות נתמכות?**

האתר והתיעוד שלו קיימים בעשרים שפות. הממשק עצמו נייטרלי מבחינה לשונית: הסלאגים ונקודות
הקצה שלו זהים לכולם.

## 11. התיעוד של BODACC לפי שפה

כל תיקייה למטה מכילה את התיעוד המלא של BODACC בשפתה: מראה ה-API, רשימת הכתובות
והסיכומים היומיים.

| # | שפה | תיעוד | כתובות URL | נתונים יומיים |
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

## 12. קישורים של BODACC

- [BODACC.io](https://bodacc.io) — האתר החי
- [חיפוש חברות](https://bodacc.io/he/entreprises) · [הודעות משפטיות](https://bodacc.io/he/annonces) · [נושאי משרה](https://bodacc.io/he/personnes)
- [תיעוד הממשק](https://bodacc.io/he/teud) · [ממשק Swagger](https://bodacc.io/api/bodacc/docs)
- [מחירים](https://bodacc.io/he/tarifs) · [טכנולוגיה](https://bodacc.io/he/technologie)
- [רשימת כתובות (אינדקס רב-לשוני)](URLLIST.md)

---

*‏BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) הוא הפרסום הרשמי של ההודעות
המשפטיות של חברות צרפתיות. BODACC.io הוא שירות עצמאי ואינו קשור ל-DILA.*
