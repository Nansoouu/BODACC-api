<div align="center">

# BODACC.io : API BODACC cho các thông báo pháp lý và dữ liệu doanh nghiệp Pháp

**Mọi thông báo của doanh nghiệp Pháp, theo thời gian thực.** Thành lập, sửa đổi, nộp báo cáo
tài chính, thủ tục phá sản, bán và chuyển nhượng, xóa tên: mọi thông báo BODACC, được liên kết với
doanh nghiệp của nó, những người quản lý và nguồn chính thức của nó. Miễn phí và mở, bằng 20 ngôn ngữ.

[**bodacc.io**](https://bodacc.io) · [Tài liệu API](https://bodacc.io/vi/tai-lieu) · [Swagger](https://bodacc.io/api/bodacc/docs) · [RSS](https://bodacc.io/rss.xml)

</div>

## 1. Dữ liệu BODACC trực tiếp

| Bộ dữ liệu BODACC | Số bản ghi | Trực tiếp |
|---|---|---|
| Thông báo pháp lý BODACC | 51 043 403 | ![Thông báo](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Thông báo&color=blue) |
| Doanh nghiệp Pháp | 30 032 566 | ![Doanh nghiệp](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Doanh nghiệp&color=green) |
| Người quản lý và đại diện | 4 935 692 | ![Người](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Người&color=orange) |
| Hợp đồng công (BOAMP) | 1 716 163 | ![Hợp đồng](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=boamp&label=Hợp đồng&color=purple) |

Những con số này không phải được sao chép lại: chúng **được chính API BODACC phục vụ trực tiếp**, tại
[`/api/bodacc/stats/counts-formatted`](https://bodacc.io/api/bodacc/stats/counts-formatted).
Bạn hãy tự kiểm tra, rồi kiểm tra lại vào ngày mai.

**Hôm nay** (14 tháng 10 năm 2026): **5 920 thông báo** — nhóm phổ biến nhất: Nộp báo cáo tài chính (2 306).

| Nhóm BODACC | Thông báo hôm nay |
|---|---|
| Nộp báo cáo tài chính | 2 306 |
| Thành lập doanh nghiệp | 1 415 |
| Sửa đổi | 1 193 |
| Xóa tên | 500 |
| Thủ tục phá sản | 323 |
| Đăng ký | 118 |
| Bán và chuyển nhượng | 65 |

## 2. API BODACC mang lại cho bạn những gì

BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) là công báo chính thức về đời sống
doanh nghiệp Pháp. Mỗi lần thành lập, mỗi lần nộp báo cáo tài chính, mỗi vụ phá sản, mỗi lần bán
đều được công bố tại đó theo luật. BODACC.io biến công báo đó thành một cơ sở dữ liệu mà bạn có thể
truy vấn.

**Phần lớn các cơ sở dữ liệu doanh nghiệp chỉ cho bạn một bức ảnh tĩnh. API BODACC cho bạn sự chuyển động.**

Một danh bạ cho bạn biết rằng một doanh nghiệp tồn tại: tên, địa chỉ, số đăng ký của nó. BODACC cho
bạn biết **doanh nghiệp vừa làm gì**, và khi nào. Toàn bộ khác biệt nằm ở đó:

| | Danh bạ doanh nghiệp | BODACC.io |
|---|---|---|
| Bạn nhận được gì | một hồ sơ nhận dạng đóng băng | các sự kiện có ngày tháng |
| Độ mới | cập nhật theo quý | công bố ngay buổi sáng cùng ngày |
| Mất khả năng thanh toán | một cờ trạng thái | thủ tục, tính chất và ngày của thủ tục |
| Báo cáo tài chính | một giá trị "đã nộp" | từng lần nộp, kèm ngày khóa sổ |
| Người quản lý | một cái tên | từng nhiệm kỳ, kèm các công ty liên quan |
| Nguồn | một bản sao | thông báo chính thức và tệp PDF của nó |

## 3. Thông báo pháp lý BODACC, chi tiết

Mỗi thông báo mang 23 trường. Dưới đây là một thông báo có thật, đúng như API BODACC trả về:

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

Mỗi thông báo liên kết tới **trang đầy đủ của nó trên bodacc.io**, nơi nguồn chính thức và tệp PDF
chỉ cách một cú nhấp chuột.

Bảy nhóm BODACC, kèm thuật ngữ bạn sẽ thấy trong dữ liệu:

| Nhóm BODACC | Trong dữ liệu | Ý nghĩa |
|---|---|---|
| Thành lập doanh nghiệp | `creation` | một doanh nghiệp mới được đăng ký |
| Sửa đổi | `modification` | điều lệ, ban điều hành, địa chỉ, vốn |
| Nộp báo cáo tài chính | `dpc` | báo cáo tài chính thường niên được nộp tại lục sự tòa án |
| Thủ tục phá sản | `collective` | phục hồi, thanh lý, tái tổ chức |
| Bán và chuyển nhượng | `vente` | một cơ sở kinh doanh được bán hoặc chuyển nhượng |
| Xóa tên | `radiation` | doanh nghiệp bị xóa khỏi sổ đăng ký |
| Đăng ký | `immatriculation` | đăng ký vào sổ đăng ký thương mại |

## 4. Hồ sơ doanh nghiệp BODACC

Mỗi thông báo trỏ tới doanh nghiệp đứng sau nó. API BODACC công bố những doanh nghiệp đó cùng với
nhận dạng, hoạt động và lịch sử kế toán của họ:

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

Ngoài phần nhận dạng: mã hoạt động (NAF), hình thức pháp lý, tình trạng hành chính, **ngày nộp báo
cáo tài chính gần nhất, ngày khóa sổ gần nhất và số ngày đã trôi qua**, cùng các nhãn mà một doanh
nghiệp có thể mang: kinh tế xã hội, hữu cơ, RGE, Qualiopi.

## 5. Người quản lý và đại diện BODACC

Đằng sau mỗi doanh nghiệp là những người điều hành nó. API BODACC liệt kê **4,9 triệu người quản lý,
đại diện, người thanh lý và kiểm toán viên**, mỗi người kèm theo:

- các nhiệm kỳ của họ, theo từng công ty, cùng khoảng thời gian liên quan
- các công ty khác của họ, để bạn có thể theo dõi một người suốt sự nghiệp
- những thông báo liên quan tới họ

Đó là điều biến một sổ đăng ký thành một đồ thị: một doanh nghiệp, những người quản lý của nó, và
những doanh nghiệp mà những người đó cũng điều hành. Một điểm truy cập công bố điều đó trực tiếp.

## 6. API BODACC

REST, JSON, không cần khóa trên các điểm truy cập mở, tối đa 500 bản ghi mỗi lần gọi, phân trang
bằng `offset`.

```bash
# Những thông báo BODACC mới nhất (luôn là mới nhất trước)
curl "https://bodacc.io/api/bodacc/annonces?limit=100"

# Một thông báo, cùng doanh nghiệp, người quản lý và tệp PDF của nó
curl "https://bodacc.io/api/bodacc/annonces/C202601972306-depot-comptes-988208435-141026-holding-biiz"

# Một doanh nghiệp theo SIREN
curl "https://bodacc.io/api/bodacc/entreprises/552081317"

# Mọi thông báo BODACC liên quan tới doanh nghiệp đó
curl "https://bodacc.io/api/bodacc/entreprises/552081317/annonces"

# Đồ thị doanh nghiệp: người quản lý và các công ty khác của họ
curl "https://bodacc.io/api/bodacc/entreprises/552081317/graphe"

# Tìm kiếm theo tên, thành phố, tỉnh, mã hoạt động hoặc khoảng thời gian
curl "https://bodacc.io/api/bodacc/entreprises?q=eiffage&departement=75"
curl "https://bodacc.io/api/bodacc/annonces?famille=collective&date_debut=2026-10-01"
```

Tham chiếu đầy đủ: [bodacc.io/vi/tai-lieu](https://bodacc.io/vi/tai-lieu) — từng điểm truy cập một,
kèm giao diện Swagger và đặc tả OpenAPI được công bố, bằng 20 ngôn ngữ.

## 7. Bộ dữ liệu và xuất dữ liệu BODACC

Ngoài API, mỗi trang của bodacc.io là một địa chỉ ổn định và có thể thu thập: thông báo pháp lý,
doanh nghiệp, người quản lý, vùng, thành phố, thống kê — và trang web công bố những điểm vào đọc được
bằng máy:

- [Sitemap](https://bodacc.io/sitemap.xml) — bản kiểm kê đầy đủ các địa chỉ, theo từng ngôn ngữ
- [Danh mục API](https://bodacc.io/.well-known/api-catalog) — có thể được các tác nhân khám phá
- [RSS](https://bodacc.io/rss.xml) — luồng cập nhật hằng ngày
- [Danh sách URL](URLLIST.md) — mọi điểm vào, một danh sách cho mỗi ngôn ngữ

## 8. Phạm vi và độ mới của dữ liệu BODACC

BODACC được công bố vào các ngày làm việc, không công bố vào cuối tuần. BODACC.io thu thập mỗi
số công bố và đưa nó lên **ngay buổi sáng cùng ngày**, thường trong vài phút sau khi phát hành. Mỗi
thông báo giữ nguyên ngày công bố, nên bạn luôn biết điều gì là mới.

## 9. Người ta dùng BODACC để làm gì

- **Tuân thủ và KYC** — kiểm tra tình trạng thật của một đối tác trước khi ký, chứ không phải tình trạng của nó ba tháng trước
- **Thẩm định kỹ lưỡng** — theo dõi các hồ sơ doanh nghiệp nộp, báo cáo tài chính và lịch sử mất khả năng thanh toán của nó
- **Chấm điểm tín dụng và rủi ro** — thủ tục phá sản và việc nộp báo cáo tài chính là những tín hiệu sớm nhất
- **Thông tin bán hàng** — một doanh nghiệp mới thành lập là một khách hàng tiềm năng mới, ngay trong ngày
- **Báo chí** — những dữ kiện ở cấp doanh nghiệp, có nguồn và có ngày
- **Nghiên cứu** — 51 triệu hồ sơ công bố, từ những sổ đăng ký cổ nhất đến sáng nay
- **Pháp lý và kế toán** — tìm những doanh nghiệp bạn đại diện, và những gì họ đã nộp

## 10. Câu hỏi thường gặp về BODACC

**BODACC.io có phải là BODACC chính thức không?**

Không. BODACC.io là một dịch vụ độc lập giúp dữ liệu BODACC công khai trở nên dễ dùng và có thể
truy vấn. Dịch vụ này không liên kết với DILA hay bất kỳ cơ quan công quyền nào. Mỗi thông báo đều
dẫn trở lại nguồn chính thức của nó.

**API BODACC có miễn phí không?**

Các điểm truy cập mở là miễn phí và không cần khóa. Có các gói trả phí cho nhu cầu sử dụng nặng —
[xem bảng giá](https://bodacc.io/vi/tarifs).

**Sự khác nhau giữa BODACC và một danh bạ doanh nghiệp là gì?**

Một danh bạ cho bạn nhận dạng của doanh nghiệp. BODACC cho bạn hoạt động của nó: những gì nó đã công
bố, khi nào, và những gì tòa án đã công bố về nó. Hai thứ bổ sung cho nhau — BODACC.io cũng mang
phần nhận dạng.

**Dữ liệu mới đến mức nào?**

Các thông báo xuất hiện vào buổi sáng ngày chúng được công bố. Hồ sơ doanh nghiệp được cập nhật khi
các thông báo đến.

**Mỗi lần gọi được bao nhiêu bản ghi?**

Tối đa 500, với `offset` để phân trang. Số lần gọi trên các điểm truy cập mở không bị giới hạn.

**Tôi có thể dùng nó trong môi trường thực tế không?**

Có. API được ghi tài liệu, được đánh phiên bản và được phục vụ từ Cloudflare. Việc ghi nguồn về
[bodacc.io](https://bodacc.io) luôn được hoan nghênh.

**Hỗ trợ những ngôn ngữ nào?**

Trang web và tài liệu của nó có bằng 20 ngôn ngữ. Bản thân API thì trung lập về ngôn ngữ: các slug và
điểm truy cập của nó giống nhau cho tất cả mọi người.

## 11. Tài liệu BODACC, theo từng ngôn ngữ

Mỗi thư mục dưới đây chứa tài liệu BODACC đầy đủ bằng chính ngôn ngữ của nó: tham chiếu API, danh
sách URL và các bản tóm tắt hằng ngày.

| # | Ngôn ngữ | Tài liệu | URL | Dữ liệu hằng ngày |
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

## 12. Liên kết BODACC

- [BODACC.io](https://bodacc.io) — trang web trực tiếp
- [Tìm kiếm doanh nghiệp](https://bodacc.io/vi/entreprises) · [Thông báo pháp lý](https://bodacc.io/vi/annonces) · [Người quản lý](https://bodacc.io/vi/personnes)
- [Tài liệu API](https://bodacc.io/vi/tai-lieu) · [Giao diện Swagger](https://bodacc.io/api/bodacc/docs)
- [Bảng giá](https://bodacc.io/vi/tarifs) · [Công nghệ](https://bodacc.io/vi/technologie)
- [Danh sách URL (chỉ mục đa ngôn ngữ)](URLLIST.md)

---

*BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) là ấn phẩm chính thức của các thông
báo pháp lý về doanh nghiệp Pháp. BODACC.io là một dịch vụ độc lập và không liên kết với DILA.*
