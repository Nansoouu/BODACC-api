# 🏠 BODACC.io 的幕后

BODACC.io 让法国企业的官方公告**易于查阅**。但这些数据从哪里来？它们是如何到达你的屏幕的？

在幕后，一支小型自动化工作者团队每天都在忙碌。这就是他们的故事。

---

## 🌅 早晨：邮递员

每天清晨，我们的**邮递员**都会出发去取前一天的官方公告：企业设立、高管变更、清算、账目申报…。他把它们全部带回来，一份不落，并整理进我们的大图书馆。

> 👤 **由 Thom 扮演** — 采集智能体：他每天获取官方公告，并为数据库进行结构化处理。他是让机器运转的人。

→ [了解邮递员的工作](docs/coulisses/le-facteur/README.md)

## 📖 接下来：翻译员

官方公告是用行政语言写成的文本，不一定好读。我们的**翻译员**把它们全部读完，并转换成清晰的卡片：企业名称、地址、业务、高管、金额…。

→ [了解翻译员的工作](docs/coulisses/le-traducteur/README.md)

## 🔍 然后：调查员

卡片准备好后，我们的**调查员**用企业的**公开**信息补充它：网站、电话、社交媒体。没有隐私，没有秘密 — 只有企业自己展示的内容。

> 👤 **由 Elysa 扮演** — 丰富智能体：她补充企业卡片（网站、电话、高管的社交媒体）。她只获取公开的数据：绝不会在禁止的地方搜索任何东西。

→ [了解调查员的工作](docs/coulisses/lenqueteur/README.md)

## 🧩 与此同时：人物拼图

每则公告都关乎人：高管、清算人、审计师。我们的**拼图**把每个人与他们的企业联系起来，让人能轻松找到「谁在做什么」。

→ [了解人物拼图](docs/coulisses/le-puzzle/README.md)

## 🗺️ 还有地理学家

我们的**地理学家**核实每家企业是否真实存在于地图（Google Maps）上：地址、类别、评分。这样，卡片也展示了企业在现实世界中的真实存在。

→ [了解地理学家的工作](docs/coulisses/le-geographe/README.md)

## 📚 最后：合同图书馆

公共采购（行政部门签订的合同）也被归档在我们的**图书馆**里：超过一百万份合同，可自由查阅。

→ [了解合同图书馆](docs/coulisses/la-bibliotheque/README.md)

---

## 👥 让幕后运转的团队

| 人物 | 角色 | 领域 |
|---|---|---|
| **Nansou** | 项目负责人 | 愿景、战略、内容 — 他统筹一切 |
| **Thom** | 采集智能体 | 邮递员：每天获取公告 |
| **Elysa** | 丰富智能体 | 调查员：补充公开卡片 |
| **Karan** | 国际与 SEO 智能体 | 翻译、国际可见度 |
| **Ruby** | 监督智能体 | 持续检查一切是否正常运转 |

---

## 📊 实时计数器

![公告](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Annonces&color=blue)
![企业](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Entreprises&color=green)
![人物](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Personnes&color=orange)

这些数字是真实的，每天都在变化。每天早晨，邮递员送来一批，翻译员阅读它，所有人都可以来查阅。

---

## 📅 工作日志

每位工作者都记着自己的小日志：当天处理了多少文档，以及所做的小改进。在每张卡片中都能找到：

| 日期 | 到达的公告 | 已读卡片 | 小改进 |
|---|---|---|---|
| _（每天填写）_ | | | |

## 🔍 亲自验证

一切都是公开且免费的 — 每个人都可以核实：

- 最新公告：[`https://bodacc.io/zh/annonces`](https://bodacc.io/zh/annonces)
- 实时计数器：[`https://bodacc.io/api/bodacc/stats/counts`](https://bodacc.io/api/bodacc/stats/counts)
- 一家企业：[`https://bodacc.io/zh/entreprises/514494491`](https://bodacc.io/zh/entreprises/514494491)

---

*本文档是公开仓库 BODACC-api 的一部分。它简单地描述我们所做的事情 — 不透露我们的内部方法。*
