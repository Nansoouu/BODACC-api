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

**フランスの法定公告を、構造化・関連付け・活用可能なデータへリアルタイムに変換するAPI。**

BODACC（Bulletin Officiel des Annonces Civiles et Commerciales／商業・民事公告の官報）は、フランス企業の法的な動向（設立、変更、抹消、集団手続、売却、決算公告）を記録する公式刊行物です。これらの文書は公開されていますが、生の文書のままであり、構造化されておらず、相互に関連付けられておらず、簡単に検索することもできません。

**BODACC-apiはそれらを活用可能にします。** 各公告は自動的に分析され、構造化データ（SIREN、商号、住所、NAF、役員、金額など）に変換され、その後、その企業およびそこに登場する人物に関連付けられます。その結果、フランスの経済活動の完全なグラフが構築され、単一のHTTPリクエストで検索できるようになります。

> 🌐 サイト：[bodacc.io](https://bodacc.io) · 📖 Swagger：[https://bodacc.io/api/bodacc/docs](https://bodacc.io/api/bodacc/docs) · 💶 [料金](https://bodacc.io/fr/tarifs)

---

## ✨ BODACC-apiが選ばれる理由

| | |
|---|---|
| 🗂 **2004年以降の全履歴** | 数百万件の公告をデータベースに収録、完全なカバレッジ — 期間限定の窓ではありません |
| ⚡ **リアルタイム** | 当日分の公告は、毎朝、営業開始前に利用可能です |
| 🕸 **ファイルではなく、グラフ** | 公告 → 企業（SIREN） → 役員 → 役職 → 公共調達：すべてが関連付けられ、1回のリクエストで検索可能です |
| ✨ **生のテキストから構造化データへ** | SIREN、NAF、住所、役員、手続などを、各法的テキストから自動抽出します |
| 🌍 **20言語** | インターフェースとコンテンツは翻訳されています — あなたのチームと顧客は自分たちの言語で利用できます |
| 🤖 **エージェント対応** | isitagentready監査で100/100を獲得（DNSSEC、DNS-AID、auth.md、WebMCP、llms.txt） |
| 🚪 **テストの摩擦ゼロ** | すべての読み取り専用エンドポイントはキーなしでアクセス可能 — 支払い前に評価いただけます |

---

## 🏭 私たちの付加価値：パイプライン

違いを生むのは、生データ（公開されています）ではなく、私たちがそれをどう処理するかです — 毎日、自動的に：

**1. 信頼性が高く完全な取り込み。** 毎朝09:00までに、DILAが公開した新しい公告が当社のデータベースに統合されます。完全な履歴は2004年まで遡り、公的閲覧で提供される範囲をはるかに超えています。取り込みを再実行しても重複は発生しません。当社のデータは常に検証され、整合性が保たれています。

**2. インテリジェントなエンリッチメント。** 各公告は法的テキストです — 当社のハイブリッド抽出エンジン（ビジネスルール＋AI）が、それを構造化データ（SIREN番号、商号、住所、NAFコード、役員、役職、金額、手続）に変換します。人間が何時間もかけて読む作業が、検索可能なJSONフィールドになります。

**3. リレーショナルグラフ。** 集団手続の公告は、それがどの企業に関連し、誰がその役員であるかを知って初めて価値を持ちます。当社の解決エンジンは、各公告をその企業（SIREN）に、各人物をその役職に、各公共調達をその受注者に関連付けます。あなたは、フランスの経済活動を、PDFの山ではなく、データベースとして検索できます。

**4. リアルタイム配信。** 公告が公開されるとすぐに、その関連情報とエンリッチメントとともにAPIで利用可能になります。ダウンロードするファイルも、維持管理するETLもありません。HTTPリクエスト1つで十分です。

---

## ⚖️ 比較：当社の位置づけ

| | **公式サイト (bodacc.fr)** | **Pappers** | **BODACC.io** |
|---|---|---|---|
| **履歴** | 2008年以降のみ | サブスクリプションによる商用履歴 | **2004年以降の完全な履歴** |
| **API** | ❌ なし | APIは上位プランのみ | ✅ **文書化されたREST API、読み取りはキー不要** |
| **構造化データ** | ❌ PDF閲覧のみ | ✅ エンリッチされたプロフィール | ✅ **公告＋企業/人物/市場のグラフ** |
| **リアルタイム性** | 紙の刊行物をオンラインで閲覧 | 毎日更新 | ✅ **毎朝09:00までに** |
| **価格** | 無料だが制限あり | 基本アクセスは **月額29.90ユーロ** から | **手頃なプラン、探索用の無料プランあり** |
| **対象** | 一般向け | 専門家向け（コンプライアンス、ウォッチ） | **開発者、フィンテック、リーガルテック、データチーム** |

**公式サイトの強み**：無料、信頼性が高い、公式。**弱み**：APIなし、履歴が2008年まで、構造化データなし — PDFのままです。

**Pappersの強み**：非常に洗練されたインターフェース、INSEE＋INPI＋BODACCの統合、組み込みのウォッチ機能。**弱み**：価格（基本アクセスで月額29.90ユーロ、APIと完全な履歴はさらに高額）、閲覧重視でデータ活用向きではないソリューション。

**当社の立場**：**2004年以降の全履歴を、公式サイトよりも速く、そしてPappersよりも低価格で提供。** これは、追加の画面ではなく、自社のツールにデータを組み込みたい人のために設計されています。

> 💶 プランを見る：[bodacc.io/fr/tarifs](https://bodacc.io/fr/tarifs) — 無料・Pro・Enterprise・LIFE

---

## 🚀 30秒で試す

すべての読み取り専用エンドポイントは**キーなしで**アクセスできます：

```bash
# 企業名で検索
curl "https://bodacc.io/api/bodacc/annonces?q=rizom&limit=5"

# 公告の詳細（関連情報：企業＋人物を含む）
curl "https://bodacc.io/api/bodacc/annonces/A202601432266"

# 企業プロフィール（最近の公告＋役員＋公共調達）
curl "https://bodacc.io/api/bodacc/entreprises/912969573"

# 全体統計
curl "https://bodacc.io/api/bodacc/stats"

# 日次ボリューム（過去30日間）
curl "https://bodacc.io/api/bodacc/stats/daily30"
```

---

## 📡 エンドポイント

### 公告

| メソッド | ルート | 説明 |
|---|---|---|
| `GET` | `/bodacc/annonces` | 検索：`q`（名称/SIREN）、`famille`、`departement`、日付、ページネーション `limit`/`offset` |
| `GET` | `/bodacc/annonces/{id}` | 完全な詳細：`raw_data`＋エンリッチメント＋`relations`（関連する企業と人物） |
| `GET` | `/bodacc/enrichi/{id}` | 構造化バージョン（siren、dénomination、NAF、dirigeants...） |
| `POST` | `/bodacc/enrichi/batch` | バッチでのエンリッチメント |

### 企業・人物

| メソッド | ルート | 説明 |
|---|---|---|
| `GET` | `/bodacc/entreprises` | 企業検索（名称、市区町村、NAF、郵便番号） |
| `GET` | `/bodacc/entreprises/{siren}` | INSEEプロフィール＋`annonces_recentes`、`dirigeants`、`marches_publics`、`stats` |
| `GET` | `/bodacc/entreprises/by-slug/{slug}` | SEOスラッグによるプロフィール |
| `GET` | `/bodacc/personnes/{id}` | 人物プロフィール：役職（ロール）＋関連企業 |

### 統計

| メソッド | ルート | 説明 |
|---|---|---|
| `GET` | `/bodacc/stats` | 合計、カテ��リ別、日付別 |
| `GET` | `/bodacc/stats/daily` | 当日のボリューム（発行、県、カテゴリ別） |
| `GET` | `/bodacc/stats/daily30` | 過去30日間の時系列 |
| `GET` | `/bodacc/stats/counts` | カウンター：公告、企業、人物 |
| `GET` | `/bodacc/graph/categories` | カテゴリ別の分布 |

### アラート・統合

| メソッド | ルート | 説明 |
|---|---|---|
| `GET/POST/DELETE` | `/bodacc/alertes` | SIRENによるアラート（企業の追跡） |
| `POST` | `/bodacc/ingest?target_date=YYYY-MM-DD` | 特定日付の取り込みをトリガー |
| `POST` | `/bodacc/import` | バッチインポート（バックフィル） |

### NAFレファレンシャル（INSEE）

| メソッド | ルート | 説明 |
|---|---|---|
| `GET` | `/bodacc/naf` | 完全なNAF改訂2レファレンシャル（732小分類、615分類）— INSEE公式ラベル |
| `GET` | `/bodacc/naf?q=commerce` | ラベルによるNAF検索 |
| `GET` | `/bodacc/naf?code=46.72Z` | 特定のNAFコードの詳細 |

---

## 📊 データ

ページ上部のバッジは**リアルタイムカウンター**です：BODACC公告、SIRENE企業、抽出された人物 — 履歴の統合とエンリッチメントの進行に伴って変動します。

安定した基準値：

- 📰 **BODACC公告**：2004年以降の完全な履歴、毎朝09:00までに更新
- 🏢 **���業（SIRENE）**：フランスの法人2980万件（INSEE登録）
- 👤 **抽出された人物**：役員、清算人、会計監査人など — 継続的に統合中
- 📦 **公共調達（BOAMP）**：2015年から2026年までの公共契約169万件

---

## 🛠 テクノロジー

| レイヤー | テクノロジー |
|---|---|
| **API** | Python · FastAPI · PostgreSQL 16 |
| **データ** | Trigramインデックス、全文検索、JSONB |
| **取り込み** | 自動化パイプライン、毎日統合、冪等 |
| **エンリッチメント** | ハイブリッド抽出（ビジネスルール＋AI） |
| **フロントエンド** | Next.js · i18n 20言語 |
| **インフラ** | Docker · Cloudflare（CDN、キャッシュ、DNSSEC） |
| **AIエージェント** | MCPサーバー · DNS-AID · auth.md · llms.txt |

---

## 🔓 オープンデータ

ソースデータは公開されており、無料です：

- **BODACC**：[data.gouv.fr / DILA](https://www.data.gouv.fr/fr/datasets/bodacc-annonces-commerciales/)（法定公告）
- **SIRENE**：[INSEE](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/)（法人2980万件）
- **BOAMP**：[Opendatasoft / DILA](https://boamp-datadila.opendatasoft.com)（公共調達）

**BODACC-apiは、この生データに構造とグラフを追加します**：法的テキストの分析、人物の同一性解決、企業 ↔ 公告 ↔ 契約のリンク。

---

## 🌐 サイトを探索

[ホーム](https://bodacc.io/fr) · [公告](https://bodacc.io/fr/annonces) · [企業](https://bodacc.io/fr/entreprises) · [人物](https://bodacc.io/fr/personnes) · [料金](https://bodacc.io/fr/tarifs) · [テクノロジー](https://bodacc.io/fr/technologie)

---

## 📄 ライセンス・連絡先

- ライセンス：MIT（コード）— データは各提供元（DILA、INSEE）のライセンスに従います
- サイト：[bodacc.io](https://bodacc.io)
- このリポジトリへのIssue・PRは歓迎します

---

*BODACC（Bulletin Officiel des Annonces Civiles et Commerciales／商業・民事公告の官報）は、フランス企業の法定公告の公式刊行物です。このプロジェクトはDILAとは提携していません。*
