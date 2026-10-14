<div align="center">

# BODACC.io : फ़्रांसीसी कानूनी सूचनाओं और कंपनी डेटा के लिए BODACC API

**फ़्रांस की हर कंपनी की हर फाइलिंग, रियल टाइम में।** निगमन, संशोधन, लेखा जमा,
दिवाला कार्यवाही, बिक्री, नाम हटाना — BODACC की हर सूचना, अपनी कंपनी, अपने
निदेशकों और अपने आधिकारिक स्रोत से जुड़ी हुई। मुफ़्त और खुला, 20 भाषाओं में।

[**bodacc.io**](https://bodacc.io) · [API दस्तावेज़](https://bodacc.io/hi/dastavej) · [Swagger](https://bodacc.io/api/bodacc/docs) · [RSS](https://bodacc.io/rss.xml)

</div>

## 1. BODACC का लाइव डेटा

| BODACC डेटासेट | रिकॉर्ड | लाइव |
|---|---|---|
| BODACC कानूनी सूचनाएँ | 51 043 403 | ![Notices](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=सूचनाएँ&color=blue) |
| फ़्रांसीसी कंपनियाँ | 30 032 566 | ![Companies](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=कंपनियाँ&color=green) |
| निदेशक और अधिकारी | 4 935 692 | ![People](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=लोग&color=orange) |
| सार्वजनिक अनुबंध (BOAMP) | 1 716 163 | ![Contracts](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=boamp&label=अनुबंध&color=purple) |

ये आँकड़े कॉपी-पेस्ट नहीं हैं: इन्हें **BODACC API खुद लाइव परोसता है**,
[`/api/bodacc/stats/counts-formatted`](https://bodacc.io/api/bodacc/stats/counts-formatted) पर।
इन्हें खुद जाँचिए, और कल फिर जाँचिए।

**आज** (14 अक्टूबर 2026): **5 920 सूचनाएँ** — सबसे आम श्रेणी: लेखा जमा (2 306)।

| BODACC श्रेणी | आज की सूचनाएँ |
|---|---|
| लेखा जमा | 2 306 |
| निगमन | 1 415 |
| संशोधन | 1 193 |
| नाम हटाना | 500 |
| दिवाला कार्यवाही | 323 |
| पंजीकरण | 118 |
| बिक्री और हस्तांतरण | 65 |

## 2. BODACC API आपको क्या देता है

BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) फ़्रांसीसी कंपनियों के कानूनी
जीवन का आधिकारिक प्रकाशन है। हर निगमन, हर लेखा जमा, हर दिवाला, हर बिक्री कानून के तहत
वहाँ प्रकाशित होती है। BODACC.io उस प्रकाशन को ऐसा डेटाबेस बना देता है जिसे आप क्वेरी कर सकते हैं।

**ज़्यादातर कंपनी डेटाबेस आपको एक जमी हुई तस्वीर देते हैं। BODACC API आपको गति देता है।**

एक डायरेक्टरी आपको बताती है कि कंपनी मौजूद है: उसका नाम, उसका पता, उसका पंजीकरण नंबर।
BODACC आपको बताता है कि **कंपनी ने अभी क्या किया**, और कब। यही फ़र्क़ पूरी बात है:

| | कंपनी डायरेक्टरी | BODACC.io |
|---|---|---|
| आपको क्या मिलता है | जमा हुआ पहचान रिकॉर्ड | तारीख़ वाली घटनाएँ |
| ताज़गी | हर तिमाही रीफ़्रेश | उसी सुबह प्रकाशित |
| दिवाला | एक स्टेटस फ़्लैग | कार्यवाही, उसकी प्रकृति और तारीख़ |
| लेखा | एक बूलियन „जमा” | हर फाइलिंग, उसकी क्लोज़िंग तारीख़ के साथ |
| अधिकारी | एक नाम | हर नियुक्ति, उसकी कंपनियों के साथ |
| स्रोत | एक प्रति | आधिकारिक सूचना और उसकी PDF |

## 3. BODACC की कानूनी सूचनाएँ : विस्तार से

हर सूचना में 23 फ़ील्ड होते हैं। यह एक असली सूचना है, ठीक वैसी जैसी BODACC API लौटाता है:

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

हर सूचना **bodacc.io पर अपने पूरे पेज** से जुड़ती है, जहाँ आधिकारिक स्रोत और उसकी PDF एक क्लिक की दूरी पर हैं।

BODACC की सात श्रेणियाँ, उस फ़्रांसीसी शब्द के साथ जो आपको डेटा में दिखेगा:

| BODACC श्रेणी | डेटा में | इसका मतलब |
|---|---|---|
| निगमन | `creation` | नई कंपनी पंजीकृत होती है |
| संशोधन | `modification` | संविधान, प्रबंधन, पता, पूँजी में बदलाव |
| लेखा जमा | `dpc` | वार्षिक लेखे अदालत के रजिस्ट्री में जमा |
| दिवाला कार्यवाही | `collective` | रिसीवरशिप, परिसमापन, रिकवरी |
| बिक्री और हस्तांतरण | `vente` | कोई व्यवसाय बिकता या हस्तांतरित होता है |
| नाम हटाना | `radiation` | कंपनी रजिस्टर से हटाई जाती है |
| पंजीकरण | `immatriculation` | व्यापार रजिस्टर में पंजीकरण |

## 4. BODACC के कंपनी रिकॉर्ड

हर सूचना उसके पीछे की कंपनी की ओर इशारा करती है। BODACC API उन कंपनियों को पहचान,
गतिविधि और लेखा इतिहास के साथ उपलब्ध कराता है:

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

पहचान के अलावा: गतिविधि कोड (NAF), कानूनी स्वरूप, प्रशासनिक स्थिति, **आख़िरी लेखा जमा की
तारीख़, आख़िरी क्लोज़िंग तारीख़ और तब से बीते दिनों की संख्या**, साथ ही कंपनी पर लगे लेबल:
सामाजिक अर्थव्यवस्था, बायो, RGE, Qualiopi।

## 5. BODACC के निदेशक और अधिकारी

हर कंपनी के पीछे उसे चलाने वाले लोग हैं। BODACC API में **49 लाख निदेशक, अधिकारी, परिसमापक
और लेखा परीक्षक** सूचीबद्ध हैं, और हर एक के लिए:

- उनकी नियुक्तियाँ, कंपनी दर कंपनी, उस अवधि के साथ
- उनकी दूसरी कंपनियाँ, ताकि आप किसी व्यक्ति को करियर भर ट्रैक कर सकें
- उनसे जुड़ी सूचनाएँ

यही रजिस्टर को ग्राफ़ में बदलता है: एक कंपनी, उसके अधिकारी, और वे कंपनियाँ जिन्हें ये
अधिकारी भी चलाते हैं। एक ही एंडपॉइंट इसे सीधे उजागर करता है।

## 6. BODACC API

REST, JSON, खुले एंडपॉइंट पर किसी कुंजी की ज़रूरत नहीं, प्रति कॉल 500 रिकॉर्ड तक,
`offset` से पेजिनेशन।

```bash
# BODACC की ताज़ा सूचनाएँ (सबसे नई हमेशा पहले)
curl "https://bodacc.io/api/bodacc/annonces?limit=100"

# एक सूचना, उसकी कंपनियों, अधिकारियों और उसकी PDF के साथ
curl "https://bodacc.io/api/bodacc/annonces/C202601972306-depot-comptes-988208435-141026-holding-biiz"

# SIREN से एक कंपनी
curl "https://bodacc.io/api/bodacc/entreprises/552081317"

# उस कंपनी से जुड़ी BODACC की हर सूचना
curl "https://bodacc.io/api/bodacc/entreprises/552081317/annonces"

# कंपनी का ग्राफ़: अधिकारी और उनकी दूसरी कंपनियाँ
curl "https://bodacc.io/api/bodacc/entreprises/552081317/graphe"

# नाम, शहर, विभाग, गतिविधि कोड या तारीख़ सीमा से खोज
curl "https://bodacc.io/api/bodacc/entreprises?q=eiffage&departement=75"
curl "https://bodacc.io/api/bodacc/annonces?famille=collective&date_debut=2026-10-01"
```

पूरा संदर्भ: [bodacc.io/hi/dastavej](https://bodacc.io/hi/dastavej) — एंडपॉइंट दर एंडपॉइंट,
Swagger UI और प्रकाशित OpenAPI स्पेसिफ़िकेशन के साथ, 20 भाषाओं में।

## 7. BODACC डेटासेट और निर्यात

API के अलावा, bodacc.io का हर पेज एक स्थिर, क्रॉल करने योग्य URL है — कानूनी सूचनाएँ, कंपनियाँ,
अधिकारी, क्षेत्र, शहर, आँकड़े — और साइट मशीन-पठनीय प्रवेश बिंदु प्रकाशित करती है:

- [साइटमैप](https://bodacc.io/sitemap.xml) — पूरी URL सूची, हर भाषा के लिए
- [API कैटलॉग](https://bodacc.io/.well-known/api-catalog) — एजेंटों द्वारा खोजने योग्य
- [RSS](https://bodacc.io/rss.xml) — रोज़ का फ़ीड
- [URL सूची](URLLIST.md) — हर प्रवेश बिंदु, हर भाषा के लिए एक सूची

## 8. BODACC की कवरेज और ताज़गी

BODACC कार्यदिवसों में प्रकाशित होता है, सप्ताहांत में नहीं। BODACC.io हर प्रकाशन को जमा
करके उसे **उसी सुबह** उपलब्ध करा देता है, आम तौर पर प्रकाशन के कुछ ही मिनटों के भीतर। हर
सूचना अपनी प्रकाशन तारीख़ रखती है, इसलिए आप हमेशा बता सकते हैं कि नया क्या है।

## 9. BODACC का उपयोग कहाँ होता है

- **अनुपालन और KYC** — हस्ताक्षर से पहले प्रतिपक्ष की असली स्थिति जाँचिए, तीन महीने पुरानी स्थिति नहीं
- **ड्यू डिलिजेंस** — किसी कंपनी की फाइलिंग, उसके लेखे और उसका दिवाला इतिहास ट्रैक कीजिए
- **क्रेडिट और जोखिम स्कोरिंग** — दिवाला कार्यवाही और लेखा जमा सबसे शुरुआती संकेत हैं
- **बिक्री इंटेलिजेंस** — नया निगमन एक नया संभावित ग्राहक है, उसी दिन जिस दिन वह होता है
- **पत्रकारिता** — कंपनी स्तर के तथ्य, स्रोत और तारीख़ के साथ
- **शोध** — 5.1 करोड़ फाइलिंग, सबसे पुराने रजिस्टरों से लेकर आज सुबह तक
- **कानून और लेखा** — जिन कंपनियों के लिए आप काम करते हैं उन्हें और उनकी जमा फाइलिंग ढूँढिए

## 10. BODACC के अक्सर पूछे जाने वाले प्रश्न

**क्या BODACC.io आधिकारिक BODACC है?**

नहीं। BODACC.io एक स्वतंत्र सेवा है जो सार्वजनिक BODACC डेटा को उपयोगी और क्वेरी-योग्य
बनाती है। इसका DILA या किसी सार्वजनिक निकाय से कोई संबंध नहीं है। हर सूचना अपने आधिकारिक
स्रोत से जुड़ी होती है।

**क्या BODACC API मुफ़्त है?**

खुले एंडपॉइंट मुफ़्त हैं और उनके लिए कुंजी नहीं चाहिए। भारी उपयोग के लिए सशुल्क प्लान हैं:
[कीमतें देखिए](https://bodacc.io/hi/tarifs)।

**BODACC और कंपनी डायरेक्टरी में क्या फ़र्क़ है?**

डायरेक्टरी आपको कंपनी की पहचान देती है। BODACC आपको उसकी गतिविधि देता है: उसने क्या जमा
किया, कब, और अदालत ने उसके बारे में क्या प्रकाशित किया। दोनों एक दूसरे के पूरक हैं:
BODACC.io पहचान भी देता है।

**डेटा कितना ताज़ा है?**

सूचनाएँ जिस सुबह प्रकाशित होती हैं उसी सुबह दिखती हैं। सूचनाएँ आते ही कंपनी रिकॉर्ड अपडेट
हो जाते हैं।

**हर कॉल में कितने रिकॉर्ड?**

500 तक, पेजिनेशन के लिए `offset` के साथ। खुले एंडपॉइंट पर कॉल की संख्या की कोई सीमा नहीं है।

**क्या मैं इसे प्रोडक्शन में इस्तेमाल कर सकता हूँ?**

हाँ। API प्रलेखित है, वर्ज़न-नियंत्रित है और Cloudflare से परोसा जाता है।
[bodacc.io](https://bodacc.io) का श्रेय देना स्वागतयोग्य है।

**कौन सी भाषाएँ समर्थित हैं?**

साइट और उसके दस्तावेज़ 20 भाषाओं में उपलब्ध हैं। API ख़ुद भाषा-तटस्थ है: इसके स्लग और
एंडपॉइंट सबके लिए एक जैसे हैं।

## 11. हर भाषा में BODACC दस्तावेज़

नीचे दिया हर फ़ोल्डर अपनी भाषा में पूरा BODACC दस्तावेज़ रखता है: API संदर्भ, URL सूची
और रोज़ाना सारांश।

| # | भाषा | दस्तावेज़ | URL | रोज़ का डेटा |
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

## 12. BODACC लिंक

- [BODACC.io](https://bodacc.io) — लाइव साइट
- [कंपनी खोज](https://bodacc.io/hi/entreprises) · [कानूनी सूचनाएँ](https://bodacc.io/hi/annonces) · [निदेशक](https://bodacc.io/hi/personnes)
- [API दस्तावेज़](https://bodacc.io/hi/dastavej) · [Swagger UI](https://bodacc.io/api/bodacc/docs)
- [कीमतें](https://bodacc.io/hi/tarifs) · [प्रौद्योगिकी](https://bodacc.io/hi/technologie)
- [URL सूची (बहुभाषी इंडेक्स)](URLLIST.md)

---

*BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) फ़्रांसीसी कंपनियों की कानूनी
सूचनाओं का आधिकारिक प्रकाशन है। BODACC.io एक स्वतंत्र सेवा है और DILA से इसका कोई संबंध नहीं है।*
