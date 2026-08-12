# 🏠 BODACC.ioの舞台裏

BODACC.ioは、フランス企業の公式公告を**簡単に調べられる**ようにします。
しかし、このデータはどこから来るのでしょうか？どのようにしてあなたの画面に届くのでしょうか？

毎日、舞台裏で働く小さな自動ワーカーのチームがいます。彼らの物語をご紹介します。

---

## 🌅 朝：郵便配達員

毎朝、とても早く、私たちの**郵便配達員**が前日の公式公告を取りに行きます：会社設立、役員変更、清算、決算公告... 彼は1つも失わずに全部を持ち帰り、私たちの大きな図書館に整理します。

> 👤 **演じるのは Thom** — 取り込みエージェント：毎日、公式公告を取得し、データベース用に構造化します。機械を動かしているのは彼です。

→ [郵便配達員の仕事を知る](coulisses/le-facteur/README.md)

## 📖 次に：翻訳者

公式公告は行政用語で書かれた文章で、いつも読みやすいとは限りません。私たちの**翻訳者**はそれらをすべて読み、明確なカードに変換します：会社名、住所、活動内容、役員、金額...

→ [翻訳者の仕事を知る](coulisses/le-traducteur/README.md)

## 🔍 そして：調査員

カードが完成すると、私たちの**調査員**が会社の**公開**情報でそれを補完します：ウェブサイト、電話番号、ソーシャルネットワーク。プライベートなものも、秘密のものもありません — 会社が自ら公開しているものだけです。

> 👤 **演じるのは Elysa** — エンリッチメントエージェント：会社カード（ウェブサイト、電話番号、役員のソーシャルネットワーク）を補完します。彼女が取得するのは公開されたデータだけです：禁止された場所から探すことは一切ありません。

→ [調査員の仕事を知る](coulisses/lenqueteur/README.md)

## 🧩 同時に：人々のパズル

すべての公告は人々について語ります：役員、清算人、会計監査人。私たちの**パズル**は、各人をその会社に結び付け、「誰が何をしているか」を簡単に見つけられるようにします。

→ [人々のパズルを知る](coulisses/le-puzzle/README.md)

## 🗺️ そして地理学者

私たちの**地理学者**は、各企業が地図（Google Maps）上に本当に存在するかを確認します：住所、カテゴリ、評価。これにより、カードには会社の公式書類だけでなく、現実世界での実際の存在も表示されます。

→ [地理学者の仕事を知る](coulisses/le-geographe/README.md)

## 📚 最後に：契約図書館

公共調達（行政機関が結ぶ契約）も私たちの**図書館**にアーカイブされています：100万件以上の契約が、自由に閲覧できます。

→ [契約図書館を知る](coulisses/la-bibliotheque/README.md)

---

## 👥 舞台裏を動かすチーム

| 人物 | 役割 | 担当 |
|---|---|---|
| **Nansou** | プロジェクトリーダー | ビジョン、戦略、コンテンツ — すべてを統括 |
| **Thom** | 取り込みエージェント | 郵便配達員：毎日公告を取得 |
| **Elysa** | エンリッチメントエージェント | 調査員：公開カードを補完 |
| **Karan** | 国際・SEOエージェント | 翻訳、国際的な認知度向上 |
| **Ruby** | 監視エージェント | すべてが常に機能しているか確認 |

---

## 📊 リアルタイムカウンター

![公告](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=公告&color=blue)
![企業](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=企業&color=green)
![人物](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=人物&color=orange)

これらの数字は実データで、毎日変わります。毎朝、郵便配達員が持ち込み、翻訳者が読み、誰もが閲覧できます。

---

## 📅 作業日誌

各ワーカーは小さな日誌をつけています：その日に処理した文書の数と、行った小さな改善点。各カードにあります：

| 日付 | 到着した公告 | 読まれたカード | 小さな改善点 |
|---|---|---|---|
| _(毎日記入)_ | | | |

## 🔍 ご自身で確認

すべて公開・無料です — 誰でも確認できます：

- 最新の公告：[`https://bodacc.io/ja/annonces`](https://bodacc.io/ja/annonces)
- リアルタイムカウンター：[`https://bodacc.io/api/bodacc/stats/counts`](https://bodacc.io/api/bodacc/stats/counts)
- 企業：[`https://bodacc.io/ja/entreprises/514494491`](https://bodacc.io/ja/entreprises/514494491)

---

*この文書は公開リポジトリBODACC-apiの一部です。私たちが何をしているかを、内部の手法を明かさずに、簡潔に説明しています。*
