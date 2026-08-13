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
> 📰 [전체 요약](recaps/README.md) · 🏠 [BODACC.io의 무대 뒤](coulisses/COULISSES.md)

<div align="center">

![Python 3.12](https://img.shields.io/badge/Python-3.12-3776AB?logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-API-009688?logo=fastapi&logoColor=white)
![PostgreSQL 16](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)

![Annonces](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=공고&color=blue)
![Entreprises](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=기업&color=green)
![Personnes](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=인물&color=orange)
![Site bodacc.io](https://img.shields.io/badge/bodacc.io-Explorer-important?logo=internetexplorer&logoColor=white&style=for-the-badge)

</div>

**프랑스 법률 공고를 구조화되고, 연결되며, 활용 가능한 데이터로 변환하는 API — 실시간으로.**

BODACC(불탱탱 민사 및 상사 공고 관보)은 프랑스 기업의 법적 생활을 기록하는 공식 간행물입니다: 설립, 변경, 말소, 집단 절차, 매각, 재무제표 제출. 이러한 텍스트는 공개되어 있지만, 원시 문서 상태로 남아 있습니다: 구조화되어 있지도, 서로 연결되어 있지도, 쉽게 조회할 수 없습니다.

**BODACC-api는 이를 활용 가능하게 만듭니다.** 각 공고는 자동으로 분석되어 구조화된 데이터(SIREN, 회사명, 주소, NAF, 임원, 금액 등)로 변환된 후, 해당 기업 및 관련 인물과 연결됩니다. 결과: 단 한 번의 HTTP 요청으로 조회 가능한 프랑스 경제 생활의 완전한 그래프.

> 🌐 웹사이트: [bodacc.io](https://bodacc.io) · 📖 Swagger: [https://bodacc.io/api/bodacc/docs](https://bodacc.io/api/bodacc/docs) · 💶 [요금제](https://bodacc.io/ko/tarifs)

---

## ✨ 왜 BODACC-api인가?

| | |
|---|---|
| 🗂 **2004년부터의 전체 이력** | 수백만 건의 공고가 데이터베이스에 있으며, 전체를 포괄합니다 — 슬라이딩 윈도우가 아닙니다 |
| ⚡ **실시간** | 당일 공고는 매일 아침, 업무 시작 전에 제공됩니다 |
| 🕸 **파일이 아닌 그래프** | 공고 → 기업(SIREN) → 임원 → 임기 → 공공 조달: 모든 것이 연결되어 단일 요청으로 조회 가능합니다 |
| ✨ **원시 텍스트에서 구조화된 데이터로** | SIREN, NAF, 주소, 임원, 절차... 각 법률 텍스트에서 자동으로 추출됩니다 |
| 🌍 **20개 언어** | 인터페이스와 콘텐츠가 번역되어 제공됩니다 — 귀하의 팀과 고객이 자신의 언어를 사용합니다 |
| 🤖 **에이전트 지원** | isitagentready 감사에서 100/100 (DNSSEC, DNS-AID, auth.md, WebMCP, llms.txt) |
| 🚪 **테스트에 제로 마찰** | 모든 읽기 엔드포인트는 키 없이 접근 가능합니다 — 비용을 지불하기 전에 평가할 수 있습니다 |

---

## 🏭 핵심 가치: 파이프라인

차별화 요소는 원시 데이터(공개 데이터임)가 아니라, 우리가 매일 자동으로 수행하는 데이터 처리에 있습니다:

**1. 안정적이고 완전한 수집.** 매일 아침 09:00 이전에 DILA가 게시한 새로운 공고가 데이터베이스에 통합됩니다. 전체 이력은 공개 조회 범위를 훨씬 넘어 2004년까지 거슬러 올라갑니다. 수집을 다시 실행해도 중복이 생성되지 않습니다: 데이터는 항상 검증되고 일관성을 유지합니다.

**2. 지능적인 강화.** 각 공고는 법률 텍스트입니다 — 당사의 하이브리드 추출 엔진(비즈니스 규칙 + AI)이 이를 구조화된 데이터(사업자등록번호, 회사명, 주소, NAF 코드, 임원, 임기, 금액, 절차)로 변환합니다. 수시간의 수동 판독이 필요한 작업이 조회 가능한 JSON 필드가 됩니다.

**3. 관계형 그래프.** 집단 절차 공고는 해당 기업과의 연결 및 대표 임원이 누구인지 알 때만 가치가 있습니다. 당사의 해석 엔진은 각 공고를 해당 기업(SIREN)에, 각 인물을 해당 임기에, 각 공공 조달을 해당 낙찰자에 연결합니다. PDF 더미가 아닌 데이터베이스처럼 프랑스 경제 생활을 조회할 수 있습니다.

**4. 실시간 배포.** 공고가 게시되는 즉시 관계 및 강화 데이터와 함께 API를 통해 제공됩니다. 다운로드할 파일도, 유지 관리할 ETL도 없습니다: HTTP 요청 하나면 충분합니다.

---

## ⚖️ 비교: 당사의 위치

| | **공식 사이트 (bodacc.fr)** | **Pappers** | **BODACC.io** |
|---|---|---|---|
| **이력** | 2008년부터만 | 구독에 따른 상업적 이력 | **2004년부터 전체** |
| **API** | ❌ 없음 | 상위 요금제 전용 API | ✅ **문서화된 REST API, 읽기 키 불필요** |
| **구조화된 데이터** | ❌ PDF 조회 | ✅ 강화된 프로필 | ✅ **공고 + 기업/인물/시장 그래프** |
| **실시간** | 온라인에서 열람 가능한 종이 발행 | 일일 업데이트 | ✅ **매일 아침 09:00 이전** |
| **가격** | 무료이지만 제한적 | 기본 액세스 **월 29.90€**부터 | **접근 가능한 요금제, 탐색을 위한 무료 체험부터** |
| **대상** | 일반 대중 | 전문가 (컴플라이언스, 모니터링) | **개발자, 핀테크, 리걸테크, 데이터 팀** |

**공식 사이트의 장점**: 무료, 신뢰할 수 있음, 공식적. **단점**: API 없음, 이력이 2008년으로 제한됨, 구조화된 데이터 없음 — PDF에 머물러야 함.

**Pappers의 장점**: 매우 세련된 인터페이스, INSEE + INPI + BODACC 집계, 통합 모니터링. **단점**: 가격(기본 액세스 월 29.90€, API 및 전체 이력은 더 비쌈), 활용 가능한 데이터보다는 조회 중심의 솔루션.

**당사의 위치**: **공식 사이트보다 빠르게 2004년부터의 전체 이력 제공 — Pappers보다 저렴한 가격으로.** 추가 화면이 아닌 자체 도구에 데이터를 연결하려는 사람들을 위해 설계되었습니다.

> 💶 요금제 보기: [bodacc.io/ko/tarifs](https://bodacc.io/ko/tarifs) — 무료 · Pro · Enterprise · LIFE

---

## 🚀 30초 만에 사용해보기

모든 읽기 엔드포인트는 **키 없이** 접근할 수 있습니다:

```bash
# 이름으로 기업 검색
curl "https://bodacc.io/api/bodacc/annonces?q=rizom&limit=5"

# 공고 상세 정보 (관계: 기업 + 인물 포함)
curl "https://bodacc.io/api/bodacc/annonces/A202601432266"

# 기업 프로필 (최근 공고 + 임원 + 공공 조달)
curl "https://bodacc.io/api/bodacc/entreprises/912969573"

# 전체 통계
curl "https://bodacc.io/api/bodacc/stats"

# 일일 볼륨 (최근 30일)
curl "https://bodacc.io/api/bodacc/stats/daily30"
```

---

## 📡 엔드포인트

### 공고

| 메서드 | 경로 | 설명 |
|---|---|---|
| `GET` | `/bodacc/annonces` | 검색: `q` (이름/SIREN), `famille`, `departement`, 날짜, 페이지네이션 `limit`/`offset` |
| `GET` | `/bodacc/annonces/{id}` | 전체 상세 정보: `raw_data` + 강화 데이터 + `relations` (연결된 기업 및 인물) |
| `GET` | `/bodacc/enrichi/{id}` | 구조화된 버전 (siren, dénomination, NAF, dirigeants...) |
| `POST` | `/bodacc/enrichi/batch` | 일괄 강화 |

### 기업 및 인물

| 메서드 | 경로 | 설명 |
|---|---|---|
| `GET` | `/bodacc/entreprises` | 기업 검색 (이름, 도시, NAF, 우편번호) |
| `GET` | `/bodacc/entreprises/{siren}` | INSEE 프로필 + `annonces_recentes`, `dirigeants`, `marches_publics`, `stats` |
| `GET` | `/bodacc/entreprises/by-slug/{slug}` | SEO 슬러그별 프로필 |
| `GET` | `/bodacc/personnes/{id}` | 인물 프로필: 임기 (역할) + 연결된 기업 |

### 통계

| 메서드 | 경로 | 설명 |
|---|---|---|
| `GET` | `/bodacc/stats` | 총계, 유형별, 날짜별 |
| `GET` | `/bodacc/stats/daily` | 당일 볼륨 (발행별, 부서별, 유형별) |
| `GET` | `/bodacc/stats/daily30` | 최근 30일 시계열 |
| `GET` | `/bodacc/stats/counts` | 카운터: 공고, 기업, 인물 |
| `GET` | `/bodacc/graph/categories` | 카테고리별 분포 |

### 알림 및 통합

| 메서드 | 경로 | 설명 |
|---|---|---|
| `GET/POST/DELETE` | `/bodacc/alertes` | SIREN별 알림 (기업 모니터링) |
| `POST` | `/bodacc/ingest?target_date=YYYY-MM-DD` | 특정 날짜에 대한 수집 트리거 |
| `POST` | `/bodacc/import` | 일괄 가져오기 (백필) |

### NAF 참조 데이터 (INSEE)

| 메서드 | 경로 | 설명 |
|---|---|---|
| `GET` | `/bodacc/naf` | NAF 개정 2 전체 참조 데이터 (732 하위 클래스, 615 클래스) — 공식 INSEE 라벨 |
| `GET` | `/bodacc/naf?q=commerce` | 라벨로 NAF 검색 |
| `GET` | `/bodacc/naf?code=46.72Z` | 특정 NAF 코드 정보 |

---

## 📊 데이터

페이지 상단의 배지는 **실시간 카운터**입니다: BODACC 공고, SIRENE 기업 및 추출된 인물 — 이력 통합 및 강화가 진행됨에 따라 변경됩니다.

안정적인 기준:

- 📰 **BODACC 공고**: 2004년부터의 전체 이력, 매일 아침 09:00 이전 업데이트
- 🏢 **기업 (SIRENE)**: 프랑스 법인 2,980만 개 (INSEE 등록부)
- 👤 **추출된 인물**: 임원, 청산인, 감사인... 지속적으로 통합 중
- 📦 **공공 조달 (BOAMP)**: 2015년 → 2026년 공공 계약 169만 건

---

## 🛠 기술

| 계층 | 기술 |
|---|---|
| **API** | Python · FastAPI · PostgreSQL 16 |
| **데이터** | Trigram 인덱싱, 전문 검색, JSONB |
| **수집** | 자동화된 파이프라인, 일일 통합, 멱등성 |
| **강화** | 하이브리드 추출 (비즈니스 규칙 + AI) |
| **프론트엔드** | Next.js · i18n 20개 언어 |
| **인프라** | Docker · Cloudflare (CDN, 캐시, DNSSEC) |
| **AI 에이전트** | MCP 서버 · DNS-AID · auth.md · llms.txt |

---

## 🔓 오픈 데이터

소스 데이터는 공개적이고 무료입니다:

- **BODACC**: [data.gouv.fr / DILA](https://www.data.gouv.fr/fr/datasets/bodacc-annonces-commerciales/) (법률 공고)
- **SIRENE**: [INSEE](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/) (법인 2,980만 개)
- **BOAMP**: [Opendatasoft / DILA](https://boamp-datadila.opendatasoft.com) (공공 조달)

**BODACC-api는 이 원시 데이터에 구조와 그래프를 추가합니다**: 법률 텍스트 분석, 신원 확인(인물), 기업 ↔ 공고 ↔ 계약 연결.

---

## 🌐 웹사이트 탐색

[홈](https://bodacc.io/ko) · [공고](https://bodacc.io/ko/annonces) · [기업](https://bodacc.io/ko/entreprises) · [인물](https://bodacc.io/ko/personnes) · [요금제](https://bodacc.io/ko/tarifs) · [기술](https://bodacc.io/ko/technologie)

---

## 📄 라이선스 및 연락처

- 라이선스: MIT (코드) — 데이터는 해당 생산자(DILA, INSEE)의 라이선스를 따릅니다
- 웹사이트: [bodacc.io](https://bodacc.io)
- 이슈 및 PR: 이 저장소에 언제든 환영합니다

---

*BODACC(불탱탱 민사 및 상사 공고 관보)은 프랑스 기업의 법률 공고를 게재하는 공식 간행물입니다. 이 프로젝트는 DILA와 제휴 관계가 아닙니다.*
