<div align="center">

# BODACC.io : フランスの公告と企業データのための BODACC API

**フランス企業のあらゆる公告を、リアルタイムで。** 設立、変更、決算書類の提出、倒産手続、売買、
抹消まで、すべての BODACC 公告を、その企業、その役員、その公式ソースと結び付けています。無料で
オープン、20 の言語に対応。

[**bodacc.io**](https://bodacc.io) · [API ドキュメント](https://bodacc.io/ja/dokyumento) · [Swagger](https://bodacc.io/api/bodacc/docs) · [RSS](https://bodacc.io/rss.xml)

</div>

## 1. BODACC のライブデータ

| BODACC データセット | レコード数 | ライブ |
|---|---|---|
| BODACC 公告 | 51 043 403 | ![公告](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=公告&color=blue) |
| フランス企業 | 30 032 566 | ![企業](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=企業&color=green) |
| 役員・受任者 | 4 935 692 | ![人物](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=人物&color=orange) |
| 公共契約（BOAMP） | 1 716 163 | ![契約](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=boamp&label=契約&color=purple) |

これらの数字はコピーしたものではありません。**BODACC API 自身がライブで配信しています**。
[`/api/bodacc/stats/counts-formatted`](https://bodacc.io/api/bodacc/stats/counts-formatted) で
確認できます。ご自身で確認し、明日また確認してみてください。

**本日**（2026 年 10 月 14 日）：**5 920 件の公告** — 最も多い区分：決算書類の提出（2 306）。

| BODACC 区分 | 本日の公告 |
|---|---|
| 決算書類の提出 | 2 306 |
| 設立 | 1 415 |
| 変更 | 1 193 |
| 抹消 | 500 |
| 倒産手続 | 323 |
| 商業登記 | 118 |
| 売買・譲渡 | 65 |

## 2. BODACC API で得られるもの

BODACC（Bulletin Officiel des Annonces Civiles et Commerciales）は、フランス企業の活動を記録する
公式の公報です。設立、決算書類の提出、倒産、売買のすべてが、法律に基づいてそこに掲載されます。
BODACC.io はその公報を、問い合わせできるデータベースに変えます。

**多くの企業データベースが与えるのは一枚の写真です。BODACC API が与えるのは動きです。**

企業名鑑は、その企業が存在することを教えてくれます。名称、住所、登録番号。BODACC が教えて
くれるのは、**その企業が今何をしたか**、そしていつか。違いはそこにあります：

| | 企業名鑑 | BODACC.io |
|---|---|---|
| 得られるもの | 固定された身元情報 | 日付のある出来事 |
| 鮮度 | 四半期ごとの更新 | 当日の朝に公開 |
| 倒産 | 状態を示すフラグ | 手続そのもの、その性質と日付 |
| 決算 | 「提出済み」の真偽値 | 決算日が付いた、提出ごとの記録 |
| 役員 | ひとつの名前 | すべての任期と、その会社 |
| 出典 | 複製 | 公式公告とその PDF |

## 3. BODACC 公告の詳細

各公告は 23 のフィールドを持ちます。以下は実在の公告で、BODACC API が返すとおりのものです：

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

各公告は**bodacc.io 上の全文ページ**にリンクしています。公式ソースと PDF は、そこから
ワンクリックで開けます。

BODACC の七つの区分と、データの中に現れる用語：

| BODACC 区分 | データ内 | 意味 |
|---|---|---|
| 設立 | `creation` | 新しい企業が登記される |
| 変更 | `modification` | 定款、経営、住所、資本の変更 |
| 決算書類の提出 | `dpc` | 年次の決算書類を裁判所書記課に提出する |
| 倒産手続 | `collective` | 再生手続、清算、再建 |
| 売買・譲渡 | `vente` | 事業が売却または譲渡される |
| 抹消 | `radiation` | 企業が登録簿から抹消される |
| 商業登記 | `immatriculation` | 商業登記簿への登記 |

## 4. BODACC の企業データ

各公告は、その背後にある企業を指し示します。BODACC API はそれらの企業を、身元、事業内容、
会計の履歴とともに公開します：

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

身元だけでなく：事業コード（NAF）、法的形態、行政上の状態、**直近の決算書類の提出日、直近の
決算日、そしてそこからの日数**、さらに企業が帯びうるラベル：社会的経済、オーガニック、RGE、
Qualiopi。

## 5. BODACC の役員と受任者

すべての企業の背後には、それを運営する人々がいます。BODACC API は**490 万人の役員、受任者、
清算人、会計監査人**を収録し、それぞれについて次のものを提供します：

- 会社ごとの任期と、その期間
- その人物の他の会社。キャリアを通じて人物を追跡できます
- その人物に関する公告

これが登録簿をグラフに変えます：企業、その役員、そしてその役員が運営する他の企業。ひとつの
エンドポイントがそれを直接公開します。

## 6. BODACC API

REST、JSON、オープンなエンドポイントにキーは不要、1 回の呼び出しで最大 500 件、`offset` による
ページネーション。

```bash
# 最新の BODACC 公告（常に新しいものから）
curl "https://bodacc.io/api/bodacc/annonces?limit=100"

# ひとつの公告を、その企業、役員、PDF とともに
curl "https://bodacc.io/api/bodacc/annonces/C202601972306-depot-comptes-988208435-141026-holding-biiz"

# SIREN による企業の取得
curl "https://bodacc.io/api/bodacc/entreprises/552081317"

# その企業に関するすべての BODACC 公告
curl "https://bodacc.io/api/bodacc/entreprises/552081317/annonces"

# 企業のグラフ：役員と、その役員の他の会社
curl "https://bodacc.io/api/bodacc/entreprises/552081317/graphe"

# 名称、都市、県、事業コード、期間による検索
curl "https://bodacc.io/api/bodacc/entreprises?q=eiffage&departement=75"
curl "https://bodacc.io/api/bodacc/annonces?famille=collective&date_debut=2026-10-01"
```

完全なリファレンス：[bodacc.io/ja/dokyumento](https://bodacc.io/ja/dokyumento) — エンドポイント
ごとの解説、Swagger UI と公開された OpenAPI 仕様付き、20 の言語で。

## 7. BODACC のデータセットとエクスポート

API だけでなく、bodacc.io のすべてのページは安定したクロール可能な URL です：公告、企業、役員、
地域、都市、統計 — そしてサイトは機械可読な入り口を公開しています：

- [サイトマップ](https://bodacc.io/sitemap.xml) — 言語ごとの、全 URL の一覧
- [API カタログ](https://bodacc.io/.well-known/api-catalog) — エージェントが発見できます
- [RSS](https://bodacc.io/rss.xml) — 日次のフィード
- [URL 一覧](URLLIST.md) — すべての入り口、言語ごとにひとつの一覧

## 8. BODACC の収録範囲と鮮度

BODACC は営業日に発行され、週末には発行されません。BODACC.io は各号を収集し、**当日の朝**、
通常は公開から数分以内に利用できるようにします。各公告は発行日を保つので、何が新しいかはいつでも
分かります。

## 9. BODACC は何に使われるか

- **コンプライアンスと KYC** — 契約の前に取引先の現在の状態を確認できます。三か月前の状態ではなく
- **デューデリジェンス** — 企業の提出書類、決算、倒産の履歴を追跡できます
- **与信とリスクのスコアリング** — 倒産手続と決算書類の提出は、最も早いシグナルです
- **営業情報** — 新設の企業は、その日から見込み客です
- **ジャーナリズム** — 出典と日付のある、企業単位の事実
- **研究** — 5 100 万件の掲載、最も古い登記簿から今朝まで
- **法務と会計** — 自分が担当する企業と、その提出内容を探せます

## 10. BODACC についてよくある質問

**BODACC.io は公式の BODACC ですか？**

いいえ。BODACC.io は、公開されている BODACC データを使いやすく、問い合わせできるようにする独立
のサービスです。DILA やいかなる公的機関とも関係はありません。各公告は公式ソースにリンクして
います。

**BODACC API は無料ですか？**

オープンなエンドポイントは無料で、キーは不要です。大量利用向けの有料プランがあります —
[料金を見る](https://bodacc.io/ja/tarifs)。

**BODACC と企業名鑑の違いは何ですか？**

名鑑は企業の身元を教えます。BODACC はその活動を教えます：何を、いつ掲載し、裁判所が何を公表
したのか。両者は補い合う関係です — BODACC.io は身元も備えています。

**データの鮮度はどのくらいですか？**

公告は、公開された日の朝に現れます。企業データは、公告の到着に合わせて更新されます。

**1 回の呼び出しで何件取得できますか？**

最大 500 件で、ページネーションには `offset` を使います。オープンなエンドポイントでは、呼び出し
回数の上限はありません。

**本番環境で使えますか？**

はい。API は文書化され、バージョン管理され、Cloudflare から配信されています。
[bodacc.io](https://bodacc.io) への出典表示は歓迎します。

**対応している言語は？**

サイトとそのドキュメントは 20 の言語で存在します。API 自体は言語に中立です：スラッグと
エンドポイントは誰にとっても同じです。

## 11. 言語別の BODACC ドキュメント

以下の各フォルダには、それぞれの言語による BODACC ドキュメントの全体が入っています：API
リファレンス、URL 一覧、日次のまとめ。

| # | 言語 | ドキュメント | URL | 日次データ |
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

## 12. BODACC リンク

- [BODACC.io](https://bodacc.io) — ライブサイト
- [企業検索](https://bodacc.io/ja/entreprises) · [公告](https://bodacc.io/ja/annonces) · [役員](https://bodacc.io/ja/personnes)
- [API ドキュメント](https://bodacc.io/ja/dokyumento) · [Swagger UI](https://bodacc.io/api/bodacc/docs)
- [料金](https://bodacc.io/ja/tarifs) · [技術](https://bodacc.io/ja/technologie)
- [URL 一覧（多言語インデックス）](URLLIST.md)

---

*BODACC（Bulletin Officiel des Annonces Civiles et Commerciales）は、フランス企業の公告の公式な
刊行物です。BODACC.io は独立のサービスであり、DILA とは関係ありません。*
