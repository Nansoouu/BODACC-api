# 🏠 BODACC.io 幕后揭秘

BODACC.io 让法国企业的官方公告变得**易于查阅**。但这些数据来自哪里？它们是如何到达您屏幕上的？

在幕后，每天都有一个小型的自动化工作者团队在忙碌。以下是他们的故事。

---

## 🌅 早晨：邮递员

每天清晨，我们的**邮递员**都会出发去取前一天的官方公告：公司注册、高管变更、清算、账目申报……他会把它们全部带回，一条不落，并整理进我们的大图书馆。

> 👤 **扮演者：Thom** — 摄取代理：他每天获取官方公告并将其结构化存入数据库。他就是让整台机器运转的人。

→ [了解邮递员的工作](le-facteur/README.md)

## 📖 接着：翻译员

官方公告是用行政语言写成的文本，并不总是容易阅读。我们的**翻译员**会通读它们，并将其转化为清晰的档案：公司名称、地址、业务、高管、金额……

→ [了解翻译员的工作](le-traducteur/README.md)

## 🔍 然后：调查员

档案准备就绪后，我们的**调查员**会用公司的**公开**信息补充它：网站、电话、社交媒体。没有任何隐私，没有任何秘密——只有公司自己展示的内容。

> 👤 **扮演者：Elysa** — 丰富代理：她补充公司档案（网站、电话、高管的社交媒体）。她只收集公开暴露的数据：绝不会在禁止的地方查找任何内容。

→ [了解调查员的工作](lenqueteur/README.md)

## 🧩 与此同时：人物拼图

每一条公告都涉及人物：高管、清算人、法定审计师。我们的**拼图**将每个人与其公司关联起来，让您能轻松找出"谁在做什么"。

→ [了解人物拼图](le-puzzle/README.md)

## 🗺️ 还有地理学家

我们的**地理学家**会核实每家公司是否真实存在于地图上（谷歌地图）：地址、类别、评分。这样，档案也能展示公司在现实生活中的真实存在。

→ [了解地理学家的工作](le-geographe/README.md)

## 📚 最后：合同图书馆

公共采购（行政部门签订的合同）同样被归档在我们的**图书馆**中：超过一百万份合同，可自由查阅。

→ [了解合同图书馆](la-bibliotheque/README.md)

---

## 👥 幕后团队

| 人物 | 角色 | 领域 |
|---|---|---|
| **Nansou** | 项目经理 | 愿景、战略、内容——他统筹一切 |
| **Thom** | 摄取代理 | 邮递员：每天收集公告 |
| **Elysa** | 丰富代理 | 调查员：补充公开档案 |
| **Karan** | 国际与SEO代理 | 翻译、国际可见度 |
| **Ruby** | 监督代理 | 确保一切始终正常运行 |

---

## 📊 实时计数器

![公告](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=公告&color=blue)
![企业](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=企业&color=green)
![人物](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=人物&color=orange)

这些数字是真实的，每天都在变化。每天早晨，邮递员带来当天的批次，翻译员阅读它，所有人都可以前来查阅。

---

## 📅 工作日志

每个工作者都记着一本小日志：当天处理了多少文档，以及做了哪些小改进。在每个档案中都能找到：

| 日期 | 收到的公告 | 阅读的档案 | 小改进 |
|---|---|---|---|
| _(每天填写)_ | | | |

## 🔍 亲自验证

一切都是公开且免费的——任何人都可以验证：

- 最新公告：[`https://bodacc.io/zh/annonces`](https://bodacc.io/zh/annonces)
- 实时计数器：[`https://bodacc.io/api/bodacc/stats/counts`](https://bodacc.io/api/bodacc/stats/counts)
- 一家公司：[`https://bodacc.io/zh/entreprises/514494491`](https://bodacc.io/zh/entreprises/514494491)

---

*本文档属于公共仓库 BODACC-api 的一部分。它简单描述了我们的工作——不透露我们的内部方法。*
