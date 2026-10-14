<div align="center">

# BODACC.io : 프랑스 법률 공고와 기업 데이터를 위한 BODACC API

**프랑스 기업의 모든 공고를, 실시간으로.** 설립, 변경, 재무제표 제출, 도산 절차, 매각, 등록 말소까지,
모든 BODACC 공고를 그 기업과 임원, 공식 출처에 연결합니다. 무료이고 열려 있으며, 20개 언어를
지원합니다.

[**bodacc.io**](https://bodacc.io) · [API 문서](https://bodacc.io/ko/munseo) · [Swagger](https://bodacc.io/api/bodacc/docs) · [RSS](https://bodacc.io/rss.xml)

</div>

## 1. BODACC 실시간 데이터

| BODACC 데이터셋 | 레코드 수 | 실시간 |
|---|---|---|
| BODACC 법률 공고 | 51 043 403 | ![공고](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=공고&color=blue) |
| 프랑스 기업 | 30 032 566 | ![기업](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=기업&color=green) |
| 임원 및 등기 임원 | 4 935 692 | ![인물](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=인물&color=orange) |
| 공공 계약(BOAMP) | 1 716 163 | ![계약](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=boamp&label=계약&color=purple) |

이 숫자들은 복사해 붙여 넣은 것이 아닙니다. **BODACC API 자체가 실시간으로 제공합니다**.
[`/api/bodacc/stats/counts-formatted`](https://bodacc.io/api/bodacc/stats/counts-formatted)에서
확인할 수 있습니다. 직접 확인해 보고, 내일 다시 확인해 보세요.

**오늘**(2026년 10월 14일): **5 920건의 공고** — 가장 많은 유형: 재무제표 제출(2 306).

| BODACC 유형 | 오늘의 공고 |
|---|---|
| 재무제표 제출 | 2 306 |
| 설립 | 1 415 |
| 변경 | 1 193 |
| 등록 말소 | 500 |
| 도산 절차 | 323 |
| 상업 등기 | 118 |
| 매각 및 양도 | 65 |

## 2. BODACC API가 제공하는 것

BODACC(Bulletin Officiel des Annonces Civiles et Commerciales)는 프랑스 기업 활동을 기록하는 공식
관보입니다. 모든 설립, 모든 재무제표 제출, 모든 도산, 모든 매각이 법에 따라 그곳에 게재됩니다.
BODACC.io는 그 관보를 조회할 수 있는 데이터베이스로 바꿉니다.

**대부분의 기업 데이터베이스는 한 장의 사진을 줍니다. BODACC API는 움직임을 줍니다.**

인명록은 기업이 존재한다는 것을 알려줍니다. 이름, 주소, 등록번호. BODACC는 **그 기업이 방금 무엇을
했는지**, 그리고 언제 했는지를 알려줍니다. 차이는 바로 거기에 있습니다:

| | 기업 인명록 | BODACC.io |
|---|---|---|
| 얻는 것 | 고정된 신원 정보 | 날짜가 붙은 사건 |
| 최신성 | 분기마다 갱신 | 당일 아침에 공개 |
| 도산 | 상태 플래그 | 절차 자체, 그 성격과 날짜 |
| 회계 | '제출함'이라는 참·거짓 값 | 결산일이 붙은 각 제출 건 |
| 임원 | 이름 하나 | 모든 재임 기간과 해당 회사 |
| 출처 | 복사본 | 공식 공고와 그 PDF |

## 3. BODACC 법률 공고 자세히 보기

모든 공고는 23개 필드를 가집니다. 다음은 BODACC API가 반환하는 그대로의 실제 공고입니다:

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

모든 공고는 **bodacc.io의 전체 페이지**로 연결됩니다. 공식 출처와 PDF는 그곳에서 클릭 한 번이면
열립니다.

BODACC의 일곱 가지 유형과, 데이터에서 보게 될 용어:

| BODACC 유형 | 데이터에서 | 의미 |
|---|---|---|
| 설립 | `creation` | 새로운 기업이 등록된다 |
| 변경 | `modification` | 정관, 경영, 주소, 자본의 변경 |
| 재무제표 제출 | `dpc` | 연간 재무제표를 법원 등기소에 제출한다 |
| 도산 절차 | `collective` | 회생, 청산, 재건 |
| 매각 및 양도 | `vente` | 사업이 매각되거나 양도된다 |
| 등록 말소 | `radiation` | 기업이 등기부에서 말소된다 |
| 상업 등기 | `immatriculation` | 상업 등기부에 등기한다 |

## 4. BODACC 기업 레코드

각 공고는 그 뒤에 있는 기업을 가리킵니다. BODACC API는 그 기업들을 신원, 활동, 회계 이력과 함께
공개합니다:

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

신원을 넘어서: 활동 코드(NAF), 법적 형태, 행정 상태, **마지막 재무제표 제출일, 마지막 결산일,
그리고 그로부터 지난 일수**, 그리고 기업이 지닐 수 있는 라벨: 사회적 경제, 유기농, RGE, Qualiopi.

## 5. BODACC 임원 및 등기 임원

모든 기업 뒤에는 그것을 운영하는 사람들이 있습니다. BODACC API는 **490만 명의 임원, 등기 임원,
청산인, 감사인**을 수록하며, 각각에 대해 다음을 제공합니다:

- 회사별 재임 기간과 해당 기간
- 그 사람의 다른 회사. 경력 전반에 걸쳐 한 사람을 따라갈 수 있습니다
- 그 사람과 관련된 공고

이것이 등기부를 그래프로 바꿉니다: 기업, 그 임원들, 그리고 그 임원들이 함께 운영하는 기업들.
하나의 엔드포인트가 그것을 직접 공개합니다.

## 6. BODACC API

REST, JSON, 공개 엔드포인트에는 키가 필요 없고, 호출당 최대 500건, `offset`으로 페이지를 나눕니다.

```bash
# 최신 BODACC 공고(항상 가장 최근 것이 먼저)
curl "https://bodacc.io/api/bodacc/annonces?limit=100"

# 하나의 공고를, 그 기업과 임원, PDF와 함께
curl "https://bodacc.io/api/bodacc/annonces/C202601972306-depot-comptes-988208435-141026-holding-biiz"

# SIREN으로 기업 조회
curl "https://bodacc.io/api/bodacc/entreprises/552081317"

# 그 기업과 관련된 모든 BODACC 공고
curl "https://bodacc.io/api/bodacc/entreprises/552081317/annonces"

# 기업 그래프: 임원과 그들의 다른 회사
curl "https://bodacc.io/api/bodacc/entreprises/552081317/graphe"

# 이름, 도시, 주, 활동 코드 또는 기간으로 검색
curl "https://bodacc.io/api/bodacc/entreprises?q=eiffage&departement=75"
curl "https://bodacc.io/api/bodacc/annonces?famille=collective&date_debut=2026-10-01"
```

전체 레퍼런스: [bodacc.io/ko/munseo](https://bodacc.io/ko/munseo) — 엔드포인트별 설명, Swagger UI와
공개된 OpenAPI 명세 포함, 20개 언어로.

## 7. BODACC 데이터셋과 내보내기

API 외에도, bodacc.io의 모든 페이지는 안정적이고 크롤링 가능한 URL입니다: 법률 공고, 기업, 임원,
지역, 도시, 통계 — 그리고 사이트는 기계가 읽을 수 있는 진입점을 공개합니다:

- [사이트맵](https://bodacc.io/sitemap.xml) — 언어별 전체 URL 목록
- [API 카탈로그](https://bodacc.io/.well-known/api-catalog) — 에이전트가 발견할 수 있습니다
- [RSS](https://bodacc.io/rss.xml) — 일일 피드
- [URL 목록](URLLIST.md) — 모든 진입점, 언어별로 하나의 목록

## 8. BODACC 수록 범위와 최신성

BODACC는 영업일에 발행되며 주말에는 발행되지 않습니다. BODACC.io는 각 호를 수집해 **당일 아침**,
보통 공개 후 몇 분 안에 이용할 수 있게 합니다. 모든 공고는 게재일을 유지하므로, 무엇이 새로운지
항상 알 수 있습니다.

## 9. BODACC는 어디에 쓰이는가

- **규정 준수와 KYC** — 서명 전에 거래 상대방의 현재 상태를 확인합니다. 석 달 전 상태가 아니라
- **실사** — 기업이 제출한 서류, 회계, 도산 이력을 추적합니다
- **신용 및 위험 점수** — 도산 절차와 재무제표 제출은 가장 이른 신호입니다
- **영업 정보** — 신설 기업은 그날 바로 잠재 고객입니다
- **저널리즘** — 출처와 날짜가 있는 기업 단위의 사실
- **연구** — 5 100만 건의 게재물, 가장 오래된 등기부부터 오늘 아침까지
- **법무와 회계** — 자신이 대리하는 기업과 그들이 제출한 내용을 찾습니다

## 10. BODACC 자주 묻는 질문

**BODACC.io는 공식 BODACC입니까?**

아니요. BODACC.io는 공개된 BODACC 데이터를 쓸 수 있고 조회할 수 있게 만드는 독립 서비스입니다.
DILA나 어떤 공공 기관과도 제휴 관계가 없습니다. 모든 공고는 공식 출처로 연결됩니다.

**BODACC API는 무료입니까?**

공개 엔드포인트는 무료이며 키가 필요 없습니다. 대량 사용을 위한 유료 요금제가 있습니다 —
[요금 보기](https://bodacc.io/ko/tarifs).

**BODACC와 기업 인명록의 차이는 무엇입니까?**

인명록은 기업의 신원을 알려줍니다. BODACC는 그 활동을 알려줍니다: 무엇을 언제 게재했고, 법원이
무엇을 공개했는지. 둘은 서로를 보완합니다 — BODACC.io는 신원도 함께 담고 있습니다.

**데이터는 얼마나 최신입니까?**

공고는 게재되는 날 아침에 나타납니다. 기업 레코드는 공고가 들어오는 대로 갱신됩니다.

**호출당 레코드는 몇 건입니까?**

최대 500건이며, 페이지를 나누려면 `offset`을 사용합니다. 공개 엔드포인트에는 호출 횟수 제한이
없습니다.

**프로덕션 환경에서 사용할 수 있습니까?**

예. API는 문서화되어 있고 버전이 관리되며 Cloudflare에서 제공됩니다.
[bodacc.io](https://bodacc.io) 출처 표기는 환영합니다.

**어떤 언어를 지원합니까?**

사이트와 그 문서는 20개 언어로 존재합니다. API 자체는 언어 중립적입니다: 슬러그와 엔드포인트는
모두에게 동일합니다.

## 11. 언어별 BODACC 문서

아래 각 폴더에는 해당 언어의 BODACC 문서 전체가 들어 있습니다: API 레퍼런스, URL 목록, 일일 요약.

| # | 언어 | 문서 | URL | 일일 데이터 |
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

## 12. BODACC 링크

- [BODACC.io](https://bodacc.io) — 라이브 사이트
- [기업 검색](https://bodacc.io/ko/entreprises) · [법률 공고](https://bodacc.io/ko/annonces) · [임원](https://bodacc.io/ko/personnes)
- [API 문서](https://bodacc.io/ko/munseo) · [Swagger UI](https://bodacc.io/api/bodacc/docs)
- [요금](https://bodacc.io/ko/tarifs) · [기술](https://bodacc.io/ko/technologie)
- [URL 목록(다국어 색인)](URLLIST.md)

---

*BODACC(Bulletin Officiel des Annonces Civiles et Commerciales)는 프랑스 기업 공고의 공식
간행물입니다. BODACC.io는 독립 서비스이며 DILA와 제휴 관계가 없습니다.*
