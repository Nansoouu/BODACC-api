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
> 📰 [完整总结](recaps/README.md) · 🏠 [BODACC.io 的幕后](coulisses/COULISSES.md)

<div align="center">

![Python 3.12](https://img.shields.io/badge/Python-3.12-3776AB?logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-API-009688?logo=fastapi&logoColor=white)
![PostgreSQL 16](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)

![Annonces](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=公告&color=blue)
![Entreprises](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=企业&color=green)
![Personnes](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=人物&color=orange)
![Site bodacc.io](https://img.shields.io/badge/bodacc.io-Explorer-important?logo=internetexplorer&logoColor=white&style=for-the-badge)

</div>

**将法国法律公告转化为结构化、关联且可操作数据的API——实时呈现。**

BODACC（民事和商业公告官方公报）是追踪法国企业法律生命周期的官方出版物：创建、变更、注销、集体诉讼、出售、账目备案。这些文本是公开的，但仅停留在原始文件状态：它们既非结构化，也互不关联，更难以轻松查询。

**BODACC-api 让它们变得可操作。** 每则公告都会被自动分析并转化为结构化数据（SIREN、公司名称、地址、NAF、高管、金额……），然后与其对应的企业及其中出现的人员建立关联。最终成果：一个完整的法国经济生活图谱，通过一次 HTTP 请求即可查询。

> 🌐 网站：[bodacc.io](https://bodacc.io) · 📖 Swagger：[https://bodacc.io/api/bodacc/docs](https://bodacc.io/api/bodacc/docs) · 💶 [价格](https://bodacc.io/zh/tarifs)

---

## ✨ 为什么选择 BODACC-api？

| | |
|---|---|
| 🗂 **全部历史数据，自 2004 年起** | 数据库中有数百万条公告，覆盖完整——而非滑动窗口 |
| ⚡ **实时** | 当天的公告每天早晨在办公时间开始前即可获取 |
| 🕸 **一个图谱，而非文件** | 公告 → 企业 (SIREN) → 高管 → 职务 → 公共市场：一切皆关联，一次请求即可查询 |
| ✨ **从原始文本到结构化数据** | SIREN、NAF、地址、高管、程序……从每份法律文本中自动提取 |
| 🌍 **20 种语言** | 界面和内容均已翻译——您的团队和客户使用他们的语言 |
| 🤖 **为智能体就绪** | 在 isitagentready 审计中获得 100/100 分（DNSSEC、DNS-AID、auth.md、WebMCP、llms.txt） |
| 🚪 **测试零摩擦** | 所有读取端点无需密钥即可访问——您可以在付费前进行评估 |

---

## 🏭 我们的增值：处理管道

真正重要的不是原始数据（它是公开的），而是我们对数据的处理方式——每天自动进行：

**1. 可靠且完整的摄取。** 每天上午 09:00 前，DILA 发布的新公告都会集成到我们的数据库中。完整历史可追溯至 2004 年，远超公开查询所能提供的范围。重新执行摄取不会产生任何重复数据：我们的数据始终保持验证和一致状态。

**2. 智能增强。** 每则公告都是一份法律文本——我们的混合提取引擎（业务规则 + AI）将其转化为结构化数据：SIREN 编号、公司名称、地址、NAF 代码、高管、职务、金额、程序。需要数小时人工阅读的内容变成了可查询的 JSON 字段。

**3. 关系图谱。** 一则集体诉讼公告只有在知道它关联到哪家企业、其高管是谁时才有价值。我们的解析引擎将每则公告与其企业 (SIREN)、每个人与其职务、每个公共市场与其中标者关联起来。您可以像查询数据库一样查询法国经济生活——而不是一堆 PDF。

**4. 实时分发。** 公告一经发布，即可通过 API 获取，并附带其关系和增强数据。无需下载文件，无需维护 ETL：一次 HTTP 请求即可。

---

## ⚖️ 对比：我们的定位

| | **官方网站 (bodacc.fr)** | **Pappers** | **BODACC.io** |
|---|---|---|---|
| **历史数据** | 仅自 2008 年起 | 根据订阅提供商业历史数据 | **自 2004 年起完整** |
| **API** | ❌ 无 | API 仅限高级套餐 | ✅ **文档完善的 REST API，读取无需密钥** |
| **结构化数据** | ❌ PDF 查询 | ✅ 增强的企业档案 | ✅ **公告 + 企业/人员/市场图谱** |
| **实时性** | 纸质出版物可在线查询 | 每日更新 | ✅ **每天上午 09:00 前** |
| **价格** | 免费，但有局限 | 基础访问 **29.90 欧元/月起** | **价格实惠的套餐，从免费探索开始** |
| **受众** | 大众 | 专业人士（合规、监控） | **开发者、金融科技、法律科技、数据团队** |

**官方网站的优势**：免费、可靠、官方。**劣势**：无 API，历史数据仅限于 2008 年，无任何结构化数据——您只能停留在 PDF 中。

**Pappers 的优势**：界面非常精美，聚合了 INSEE + INPI + BODACC 数据，内置监控功能。**劣势**：价格（基础访问 29.90 欧元/月，API 和完整历史数据更贵），解决方案偏向查询而非可操作数据。

**我们的定位**：**自 2004 年起的全部历史数据，比官方网站更快——且价格低于 Pappers。** 专为希望将数据集成到自有工具中的人设计，而非为那些只想要多一个屏幕的人。

> 💶 查看套餐：[bodacc.io/zh/tarifs](https://bodacc.io/zh/tarifs) — 免费 · 专业版 · 企业版 · LIFE

---

## 🚀 30 秒快速体验

所有读取端点均可**无需密钥**访问：

```bash
# 按名称搜索企业
curl "https://bodacc.io/api/bodacc/annonces?q=rizom&limit=5"

# 公告详情（含其关系：企业 + 人员）
curl "https://bodacc.io/api/bodacc/annonces/A202601432266"

# 企业档案（近期公告 + 高管 + 公共市场）
curl "https://bodacc.io/api/bodacc/entreprises/912969573"

# 全局统计
curl "https://bodacc.io/api/bodacc/stats"

# 每日数量（最近 30 天）
curl "https://bodacc.io/api/bodacc/stats/daily30"
```

---

## 📡 端点

### 公告

| 方法 | 路由 | 描述 |
|---|---|---|
| `GET` | `/bodacc/annonces` | 搜索：`q`（名称/SIREN）、`famille`、`departement`、日期、分页 `limit`/`offset` |
| `GET` | `/bodacc/annonces/{id}` | 完整详情：`raw_data` + 增强数据 + `relations`（关联的企业和人员） |
| `GET` | `/bodacc/enrichi/{id}` | 结构化版本（siren、公司名称、NAF、高管……） |
| `POST` | `/bodacc/enrichi/batch` | 批量增强 |

### 企业与人员

| 方法 | 路由 | 描述 |
|---|---|---|
| `GET` | `/bodacc/entreprises` | 企业搜索（名称、城市、NAF、邮政编码） |
| `GET` | `/bodacc/entreprises/{siren}` | INSEE 档案 + `annonces_recentes`、`dirigeants`、`marches_publics`、`stats` |
| `GET` | `/bodacc/entreprises/by-slug/{slug}` | 按 SEO slug 查询档案 |
| `GET` | `/bodacc/personnes/{id}` | 人员档案：职务（角色）+ 关联企业 |

### 统计

| 方法 | 路由 | 描述 |
|---|---|---|
| `GET` | `/bodacc/stats` | 总计、按类别、按日期 |
| `GET` | `/bodacc/stats/daily` | 当日数量（按发布、省份、类别） |
| `GET` | `/bodacc/stats/daily30` | 最近 30 天序列 |
| `GET` | `/bodacc/stats/counts` | 计数器：公告、企业、人员 |
| `GET` | `/bodacc/graph/categories` | 按类别分布 |

### 提醒与集成

| 方法 | 路由 | 描述 |
|---|---|---|
| `GET/POST/DELETE` | `/bodacc/alertes` | 按 SIREN 设置提醒（企业跟踪） |
| `POST` | `/bodacc/ingest?target_date=YYYY-MM-DD` | 为指定日期触发摄取 |
| `POST` | `/bodacc/import` | 批量导入（回填） |

### NAF 参考表 (INSEE)

| 方法 | 路由 | 描述 |
|---|---|---|
| `GET` | `/bodacc/naf` | 完整的 NAF 修订版 2 参考表（732 个子类、615 个类别）——INSEE 官方标签 |
| `GET` | `/bodacc/naf?q=commerce` | 按标签搜索 NAF |
| `GET` | `/bodacc/naf?code=46.72Z` | 单个 NAF 代码的详情 |

---

## 📊 数据

页面顶部的徽章是**实时计数器**：BODACC 公告、SIRENE 企业和提取的人员——它们会随着历史数据的整合和增强而不断变化。

稳定参考：

- 📰 **BODACC 公告**：自 2004 年起的完整历史，每天上午 09:00 前更新
- 🏢 **企业 (SIRENE)**：2980 万个法国法人单位（INSEE 注册）
- 👤 **提取的人员**：高管、清算人、审计师……持续整合中
- 📦 **公共市场 (BOAMP)**：2015 → 2026 年 169 万份公共合同

---

## 🛠 技术

| 层级 | 技术 |
|---|---|
| **API** | Python · FastAPI · PostgreSQL 16 |
| **数据** | Trigram 索引、全文搜索、JSONB |
| **摄取** | 自动化管道、每日集成、幂等 |
| **增强** | 混合提取（业务规则 + AI） |
| **前端** | Next.js · i18n 20 种语言 |
| **基础设施** | Docker · Cloudflare（CDN、缓存、DNSSEC） |
| **AI 智能体** | MCP 服务器 · DNS-AID · auth.md · llms.txt |

---

## 🔓 开放数据

源数据是公开且免费的：

- **BODACC**：[data.gouv.fr / DILA](https://www.data.gouv.fr/fr/datasets/bodacc-annonces-commerciales/)（法律公告）
- **SIRENE**：[INSEE](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/)（2980 万个法人单位）
- **BOAMP**：[Opendatasoft / DILA](https://boamp-datadila.opendatasoft.com)（公共市场）

**BODACC-api 在这些原始数据之上增加了结构和图谱**：法律文本分析、身份解析（人员）、企业 ↔ 公告 ↔ 合同之间的关联。

---

## 🌐 浏览网站

[首页](https://bodacc.io/zh) · [公告](https://bodacc.io/zh/annonces) · [企业](https://bodacc.io/zh/entreprises) · [人员](https://bodacc.io/zh/personnes) · [价格](https://bodacc.io/zh/tarifs) · [技术](https://bodacc.io/zh/technologie)

---

## 📄 许可证与联系

- 许可证：MIT（代码）——数据仍受其生产者（DILA、INSEE）的许可证约束
- 网站：[bodacc.io](https://bodacc.io)
- 欢迎在此仓库提交 Issue 和 PR

---

*BODACC（民事和商业公告官方公报）是法国企业法律公告的官方出版物。本项目与 DILA 无关联。*
