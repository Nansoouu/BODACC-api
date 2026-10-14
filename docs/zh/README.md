<div align="center">

# BODACC.io : 面向法国公告与企业数据的 BODACC API

**法国企业的每一份公告，实时呈现。** 设立、变更、账目提交、破产程序、出售、注销：每一份 BODACC
公告，都与所属企业、其管理人员及其官方来源相关联。免费开放，支持 20 种语言。

[**bodacc.io**](https://bodacc.io) · [API 文档](https://bodacc.io/zh/wendang) · [Swagger](https://bodacc.io/api/bodacc/docs) · [RSS](https://bodacc.io/rss.xml)

</div>

## 1. BODACC 实时数据

| BODACC 数据集 | 记录数 | 实时 |
|---|---|---|
| BODACC 公告 | 51 043 403 | ![公告](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=公告&color=blue) |
| 法国企业 | 30 032 566 | ![企业](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=企业&color=green) |
| 管理人员与董事 | 4 935 692 | ![人物](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=人物&color=orange) |
| 公共合同（BOAMP） | 1 716 163 | ![合同](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=boamp&label=合同&color=purple) |

这些数字不是复制粘贴来的：它们**由 BODACC API 本身实时提供**，位于
[`/api/bodacc/stats/counts-formatted`](https://bodacc.io/api/bodacc/stats/counts-formatted)。
请亲自核对，明天再核对一次。

**今天**（2026 年 10 月 14 日）：**5 920 条公告** — 最常见的类别：账目提交（2 306）。

| BODACC 类别 | 今日公告 |
|---|---|
| 账目提交 | 2 306 |
| 设立 | 1 415 |
| 变更 | 1 193 |
| 注销 | 500 |
| 破产程序 | 323 |
| 商业登记 | 118 |
| 出售与转让 | 65 |

## 2. BODACC API 能为您提供什么

BODACC（Bulletin Officiel des Annonces Civiles et Commerciales）是记录法国企业活动的官方公报。
每一次设立、每一次账目提交、每一次破产、每一次出售，都依法在此刊登。BODACC.io 把这份公报变成
可以查询的数据库。

**大多数企业数据库给您的是一张快照。BODACC API 给您的是动态。**

企业名录告诉您一家企业存在：名称、地址、注册号。BODACC 告诉您**这家企业刚刚做了什么**，以及
什么时候做的。区别就在这里：

| | 企业名录 | BODACC.io |
|---|---|---|
| 您得到什么 | 一份固化的身份记录 | 带日期的事件 |
| 时效性 | 每季度更新 | 当日早晨发布 |
| 破产 | 一个状态标记 | 程序本身、其性质与日期 |
| 账目 | 一个“已提交”的是否值 | 每次提交，附结账日期 |
| 管理人员 | 一个名字 | 每一项任期，及其所属公司 |
| 来源 | 一份副本 | 官方公告及其 PDF |

## 3. BODACC 公告详解

每条公告包含 23 个字段。以下是一条真实公告，与 BODACC API 返回的完全一致：

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

每条公告都链接到**它在 bodacc.io 上的完整页面**，官方来源和 PDF 从此一键可达。

BODACC 的七个类别，以及您在数据中会看到的术语：

| BODACC 类别 | 数据中的写法 | 含义 |
|---|---|---|
| 设立 | `creation` | 一家新企业完成登记 |
| 变更 | `modification` | 章程、管理层、地址、资本变更 |
| 账目提交 | `dpc` | 年度账目提交至法院书记处 |
| 破产程序 | `collective` | 重整、清算、恢复 |
| 出售与转让 | `vente` | 一项业务被出售或转让 |
| 注销 | `radiation` | 企业从登记簿中被注销 |
| 商业登记 | `immatriculation` | 在商业登记簿上登记 |

## 4. BODACC 企业记录

每条公告都指向其背后的企业。BODACC API 公开这些企业的身份、经营活动与会计记录：

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

除身份之外：活动代码（NAF）、法律形式、行政状态、**最近一次账目提交的日期、最近一次结账的日期
以及距今天数**，还有企业可能携带的标签：社会经济、有机、RGE、Qualiopi。

## 5. BODACC 管理人员与董事

每一家企业背后，都是经营它的人。BODACC API 收录 **490 万名董事、管理人员、清算人和审计师**，
每人都包含：

- 其任期，按公司逐一列出，并附相关期间
- 其其他公司，便于追踪一个人的整个职业生涯
- 与其相关的公告

这正是把登记簿变成关系图的关键：一家企业、它的管理人员，以及这些管理人员同时经营的其他企业。
一个端点即可直接获取。

## 6. BODACC API

REST、JSON，开放端点无需密钥，每次调用最多 500 条记录，通过 `offset` 分页。

```bash
# 最新的 BODACC 公告（始终最新在前）
curl "https://bodacc.io/api/bodacc/annonces?limit=100"

# 单条公告，含其企业、管理人员与 PDF
curl "https://bodacc.io/api/bodacc/annonces/C202601972306-depot-comptes-988208435-141026-holding-biiz"

# 按 SIREN 查询企业
curl "https://bodacc.io/api/bodacc/entreprises/552081317"

# 与该企业相关的全部 BODACC 公告
curl "https://bodacc.io/api/bodacc/entreprises/552081317/annonces"

# 企业关系图：管理人员及其其他公司
curl "https://bodacc.io/api/bodacc/entreprises/552081317/graphe"

# 按名称、城市、省份、活动代码或日期范围搜索
curl "https://bodacc.io/api/bodacc/entreprises?q=eiffage&departement=75"
curl "https://bodacc.io/api/bodacc/annonces?famille=collective&date_debut=2026-10-01"
```

完整参考：[bodacc.io/zh/wendang](https://bodacc.io/zh/wendang) — 逐个端点，附 Swagger UI 与公开发布
的 OpenAPI 规范，支持 20 种语言。

## 7. BODACC 数据集与导出

除 API 之外，bodacc.io 的每个页面都是稳定、可抓取的网址：公告、企业、管理人员、地区、城市、
统计 — 网站还公开了机器可读的入口：

- [站点地图](https://bodacc.io/sitemap.xml) — 按语言划分的完整网址清单
- [API 目录](https://bodacc.io/.well-known/api-catalog) — 可被智能体发现
- [RSS](https://bodacc.io/rss.xml) — 每日订阅源
- [网址列表](URLLIST.md) — 所有入口，每种语言一份列表

## 8. BODACC 覆盖范围与更新速度

BODACC 在工作日出版，周末不出。BODACC.io 收集每一期，并在**当日早晨**提供，通常在发布后几分钟
之内。每条公告都保留其发布日期，因此您始终知道哪些是新的。

## 9. 人们如何使用 BODACC

- **合规与 KYC** — 在签约前核查交易对手的真实状况，而不是它三个月前的状况
- **尽职调查** — 追踪一家企业提交的文件、账目与破产历史
- **信用与风险评分** — 破产程序与账目提交是最早的信号
- **销售情报** — 一家新设立的企业，就是当天的潜在客户
- **新闻报道** — 有来源、有日期的企业层面事实
- **研究** — 5 100 万条刊登记录，从最早的登记簿到今天早晨
- **法律与会计** — 找到您所代理的企业，以及它们提交了什么

## 10. BODACC 常见问题

**BODACC.io 是官方的 BODACC 吗？**

不是。BODACC.io 是一项独立服务，让公开的 BODACC 数据可用、可查询。它不隶属于 DILA 或任何公共
机构。每条公告都链接回其官方来源。

**BODACC API 免费吗？**

开放端点免费，且无需密钥。高频使用有付费方案 — [查看价格](https://bodacc.io/zh/tarifs)。

**BODACC 与企业名录有什么区别？**

名录给您的是一家企业的身份。BODACC 给您的它的活动：它刊登了什么、什么时候刊登，以及法院公布
了什么。两者相互补充 — BODACC.io 也包含身份信息。

**数据有多新？**

公告在其发布的当天早晨出现。企业记录随公告的到达而更新。

**每次调用可以返回多少条记录？**

最多 500 条，用 `offset` 分页。开放端点的调用次数没有上限。

**我可以在生产环境中使用吗？**

可以。API 有文档、有版本，并由 Cloudflare 提供服务。欢迎注明来源
[bodacc.io](https://bodacc.io)。

**支持哪些语言？**

网站及其文档有 20 种语言。API 本身不区分语言：它的 slug 和端点对所有人都是相同的。

## 11. 按语言划分的 BODACC 文档

以下每个文件夹都包含该语言版本的完整 BODACC 文档：API 参考、网址列表和每日摘要。

| # | 语言 | 文档 | 网址 | 每日数据 |
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

## 12. BODACC 链接

- [BODACC.io](https://bodacc.io) — 实时网站
- [企业搜索](https://bodacc.io/zh/entreprises) · [公告](https://bodacc.io/zh/annonces) · [管理人员](https://bodacc.io/zh/personnes)
- [API 文档](https://bodacc.io/zh/wendang) · [Swagger UI](https://bodacc.io/api/bodacc/docs)
- [价格](https://bodacc.io/zh/tarifs) · [技术](https://bodacc.io/zh/technologie)
- [网址列表（多语言索引）](URLLIST.md)

---

*BODACC（Bulletin Officiel des Annonces Civiles et Commerciales）是法国企业公告的官方出版物。
BODACC.io 是一项独立服务，不隶属于 DILA。*
