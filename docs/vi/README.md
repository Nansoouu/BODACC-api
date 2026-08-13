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
> 📰 [Tóm tắt đầy đủ](recaps/README.md) · 🏠 [Hậu trường BODACC.io](coulisses/COULISSES.md)

<div align="center">

![Python 3.12](https://img.shields.io/badge/Python-3.12-3776AB?logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-API-009688?logo=fastapi&logoColor=white)
![PostgreSQL 16](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)

![Annonces](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Thông báo&color=blue)
![Entreprises](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Doanh nghiệp&color=green)
![Personnes](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Người&color=orange)
![Site bodacc.io](https://img.shields.io/badge/bodacc.io-Explorer-important?logo=internetexplorer&logoColor=white&style=for-the-badge)

</div>

**API chuyển đổi thông báo pháp lý của Pháp thành dữ liệu có cấu trúc, liên kết và khai thác được — theo thời gian thực.**

BODACC (Bulletin Officiel des Annonces Civiles et Commerciales - Công báo chính thức về các thông báo dân sự và thương mại) là ấn phẩm chính thức ghi lại đời sống pháp lý của các doanh nghiệp Pháp: thành lập, sửa đổi, giải thể, thủ tục tập thể, mua bán, nộp báo cáo tài chính. Các văn bản này là công khai, nhưng vẫn ở dạng tài liệu thô: không có cấu trúc, không liên kết với nhau, và khó truy vấn.

**BODACC-api giúp chúng khai thác được.** Mỗi thông báo được tự động phân tích và chuyển đổi thành dữ liệu có cấu trúc (SIREN, tên doanh nghiệp, địa chỉ, NAF, người quản lý, số tiền...), sau đó được liên kết với doanh nghiệp của nó và các cá nhân xuất hiện trong đó. Kết quả: một đồ thị hoàn chỉnh về đời sống kinh tế Pháp, có thể truy vấn chỉ bằng một yêu cầu HTTP.

> 🌐 Trang web: [bodacc.io](https://bodacc.io) · 📖 Swagger: [https://bodacc.io/api/bodacc/docs](https://bodacc.io/api/bodacc/docs) · 💶 [Bảng giá](https://bodacc.io/vi/tarifs)

---

## ✨ Tại sao chọn BODACC-api?

| | |
|---|---|
| 🗂 **Toàn bộ lịch sử, từ 2004** | Hàng triệu thông báo trong cơ sở dữ liệu, bao phủ đầy đủ — không phải cửa sổ trượt |
| ⚡ **Thời gian thực** | Các thông báo trong ngày có sẵn mỗi buổi sáng, trước giờ mở cửa văn phòng |
| 🕸 **Một đồ thị, không phải các tệp tin** | Thông báo → doanh nghiệp (SIREN) → người quản lý → nhiệm kỳ → thị trường công: tất cả được liên kết và truy vấn trong một yêu cầu |
| ✨ **Từ văn bản thô đến dữ liệu có cấu trúc** | SIREN, NAF, địa chỉ, người quản lý, thủ tục... được trích xuất tự động từ mỗi văn bản pháp lý |
| 🌍 **20 ngôn ngữ** | Giao diện và nội dung được dịch — đội ngũ và khách hàng của bạn nói ngôn ngữ của họ |
| 🤖 **Sẵn sàng cho AI Agent** | 100/100 tại cuộc kiểm toán isitagentready (DNSSEC, DNS-AID, auth.md, WebMCP, llms.txt) |
| 🚪 **Không rào cản khi dùng thử** | Tất cả các endpoint đọc đều truy cập được mà không cần khóa — bạn đánh giá trước khi trả phí |

---

## 🏭 Giá trị gia tăng của chúng tôi: quy trình xử lý

Điều tạo nên sự khác biệt không phải là dữ liệu thô (nó là công khai), mà là những gì chúng tôi làm với dữ liệu đó — mỗi ngày, một cách tự động:

**1. Tiếp nhận dữ liệu đáng tin cậy và đầy đủ.** Mỗi buổi sáng trước 09:00, các thông báo mới do DILA công bố được tích hợp vào cơ sở dữ liệu của chúng tôi. Lịch sử đầy đủ có từ năm 2004, vượt xa những gì cổng thông tin công khai cung cấp. Việc chạy lại quá trình tiếp nhận không tạo ra bất kỳ bản ghi trùng lặp nào: dữ liệu của chúng tôi được kiểm tra và nhất quán liên tục.

**2. Làm giàu dữ liệu thông minh.** Mỗi thông báo là một văn bản pháp lý — công cụ trích xuất kết hợp của chúng tôi (quy tắc nghiệp vụ + AI) chuyển đổi nó thành dữ liệu có cấu trúc: số SIREN, tên doanh nghiệp, địa chỉ, mã NAF, người quản lý, nhiệm kỳ, số tiền, thủ tục. Những gì cần hàng giờ đọc thủ công trở thành các trường JSON có thể truy vấn.

**3. Đồ thị quan hệ.** Một thông báo về thủ tục tập thể chỉ có giá trị nếu biết nó thuộc về doanh nghiệp nào và ai là người quản lý. Công cụ phân giải của chúng tôi liên kết mỗi thông báo với doanh nghiệp của nó (SIREN), mỗi cá nhân với nhiệm kỳ của họ, mỗi thị trường công với bên trúng thầu. Bạn truy vấn đời sống kinh tế Pháp như một cơ sở dữ liệu — không phải như một đống PDF.

**4. Phân phối thời gian thực.** Ngay khi một thông báo được công bố, nó có sẵn qua API, kèm theo các mối quan hệ và dữ liệu đã làm giàu. Không cần tải tệp, không cần duy trì ETL: chỉ cần một yêu cầu HTTP.

---

## ⚖️ So sánh: vị trí của chúng tôi

| | **Trang web chính thức (bodacc.fr)** | **Pappers** | **BODACC.io** |
|---|---|---|---|
| **Lịch sử** | Chỉ từ 2008 | Lịch sử thương mại tùy theo gói đăng ký | **Đầy đủ từ 2004** |
| **API** | ❌ Không có | API chỉ dành cho các gói cao cấp | ✅ **API REST có tài liệu, không cần khóa khi đọc** |
| **Dữ liệu có cấu trúc** | ❌ Xem PDF | ✅ Hồ sơ được làm giàu | ✅ **Thông báo + đồ thị doanh nghiệp/cá nhân/thị trường** |
| **Thời gian thực** | Ấn phẩm giấy xem trực tuyến | Cập nhật hàng ngày | ✅ **Mỗi buổi sáng trước 09:00** |
| **Giá** | Miễn phí, nhưng hạn chế | Từ **29,90 €/tháng** cho truy cập cơ bản | **Gói giá phải chăng, bắt đầu miễn phí để khám phá** |
| **Đối tượng** | Công chúng | Chuyên gia (tuân thủ, giám sát) | **Nhà phát triển, fintech, legaltech, đội ngũ dữ liệu** |

**Điểm mạnh của trang web chính thức**: miễn phí, đáng tin cậy, chính thức. **Điểm yếu**: không có API, lịch sử giới hạn đến 2008, không có dữ liệu có cấu trúc — bạn chỉ có PDF.

**Điểm mạnh của Pappers**: giao diện rất chăm chút, tổng hợp INSEE + INPI + BODACC, giám sát tích hợp. **Điểm yếu**: giá cả (29,90 €/tháng cho truy cập cơ bản, API và lịch sử đầy đủ đắt hơn), giải pháp hướng đến việc tra cứu hơn là dữ liệu khai thác được.

**Vị trí của chúng tôi**: **toàn bộ lịch sử từ 2004, nhanh hơn trang web chính thức — và với mức giá thấp hơn Pappers.** Được thiết kế cho những ai muốn kết nối dữ liệu vào công cụ của riêng mình, không phải cho những ai muốn thêm một màn hình hiển thị.

> 💶 Xem các gói: [bodacc.io/vi/tarifs](https://bodacc.io/vi/tarifs) — Miễn phí · Pro · Enterprise · LIFE

---

## 🚀 Dùng thử trong 30 giây

Tất cả các endpoint đọc đều truy cập được **không cần khóa**:

```bash
# Tìm kiếm doanh nghiệp theo tên
curl "https://bodacc.io/api/bodacc/annonces?q=rizom&limit=5"

# Chi tiết một thông báo (kèm các mối quan hệ: doanh nghiệp + cá nhân)
curl "https://bodacc.io/api/bodacc/annonces/A202601432266"

# Hồ sơ doanh nghiệp (thông báo gần đây + người quản lý + thị trường công)
curl "https://bodacc.io/api/bodacc/entreprises/912969573"

# Thống kê tổng quan
curl "https://bodacc.io/api/bodacc/stats"

# Khối lượng hàng ngày (30 ngày gần nhất)
curl "https://bodacc.io/api/bodacc/stats/daily30"
```

---

## 📡 Các endpoint

### Thông báo

| Phương thức | Route | Mô tả |
|---|---|---|
| `GET` | `/bodacc/annonces` | Tìm kiếm: `q` (tên/SIREN), `famille`, `departement`, ngày tháng, phân trang `limit`/`offset` |
| `GET` | `/bodacc/annonces/{id}` | Chi tiết đầy đủ: `raw_data` + dữ liệu làm giàu + `relations` (doanh nghiệp và cá nhân liên quan) |
| `GET` | `/bodacc/enrichi/{id}` | Phiên bản có cấu trúc (siren, dénomination, NAF, dirigeants...) |
| `POST` | `/bodacc/enrichi/batch` | Làm giàu theo lô |

### Doanh nghiệp & cá nhân

| Phương thức | Route | Mô tả |
|---|---|---|
| `GET` | `/bodacc/entreprises` | Tìm kiếm doanh nghiệp (tên, thành phố, NAF, mã bưu chính) |
| `GET` | `/bodacc/entreprises/{siren}` | Hồ sơ INSEE + `annonces_recentes`, `dirigeants`, `marches_publics`, `stats` |
| `GET` | `/bodacc/entreprises/by-slug/{slug}` | Hồ sơ theo slug SEO |
| `GET` | `/bodacc/personnes/{id}` | Hồ sơ cá nhân: nhiệm kỳ (vai trò) + doanh nghiệp liên quan |

### Thống kê

| Phương thức | Route | Mô tả |
|---|---|---|
| `GET` | `/bodacc/stats` | Tổng số, theo loại, theo ngày |
| `GET` | `/bodacc/stats/daily` | Khối lượng trong ngày (theo số phát hành, tỉnh, loại) |
| `GET` | `/bodacc/stats/daily30` | Chuỗi số liệu 30 ngày gần nhất |
| `GET` | `/bodacc/stats/counts` | Bộ đếm: thông báo, doanh nghiệp, cá nhân |
| `GET` | `/bodacc/graph/categories` | Phân bổ theo danh mục |

### Cảnh báo & tích hợp

| Phương thức | Route | Mô tả |
|---|---|---|
| `GET/POST/DELETE` | `/bodacc/alertes` | Cảnh báo theo SIREN (theo dõi doanh nghiệp) |
| `POST` | `/bodacc/ingest?target_date=YYYY-MM-DD` | Kích hoạt tiếp nhận dữ liệu cho một ngày |
| `POST` | `/bodacc/import` | Nhập theo lô (backfill) |

### Bảng mã NAF (INSEE)

| Phương thức | Route | Mô tả |
|---|---|---|
| `GET` | `/bodacc/naf` | Bảng mã NAF rev. 2 đầy đủ (732 phân nhóm, 615 nhóm) — nhãn chính thức INSEE |
| `GET` | `/bodacc/naf?q=commerce` | Tìm kiếm NAF theo nhãn |
| `GET` | `/bodacc/naf?code=46.72Z` | Chi tiết một mã NAF |

---

## 📊 Dữ liệu

Các huy hiệu ở đầu trang là **bộ đếm thời gian thực**: thông báo BODACC, doanh nghiệp SIRENE và cá nhân được trích xuất — chúng thay đổi trong quá trình củng cố lịch sử và làm giàu dữ liệu.

Các mốc ổn định:

- 📰 **Thông báo BODACC**: lịch sử đầy đủ từ 2004, cập nhật mỗi buổi sáng trước 09:00
- 🏢 **Doanh nghiệp (SIRENE)**: 29,8 triệu đơn vị pháp lý Pháp (đăng ký INSEE)
- 👤 **Cá nhân được trích xuất**: người quản lý, người thanh lý, kiểm toán viên... đang được củng cố liên tục
- 📦 **Thị trường công (BOAMP)**: 1,69 triệu hợp đồng công 2015 → 2026

---

## 🛠 Công nghệ

| Lớp | Công nghệ |
|---|---|
| **API** | Python · FastAPI · PostgreSQL 16 |
| **Dữ liệu** | Lập chỉ mục trigram, tìm kiếm toàn văn, JSONB |
| **Tiếp nhận** | Quy trình tự động hóa, tích hợp hàng ngày, idempotent |
| **Làm giàu** | Trích xuất kết hợp (quy tắc nghiệp vụ + AI) |
| **Frontend** | Next.js · i18n 20 ngôn ngữ |
| **Hạ tầng** | Docker · Cloudflare (CDN, cache, DNSSEC) |
| **AI Agents** | Máy chủ MCP · DNS-AID · auth.md · llms.txt |

---

## 🔓 Dữ liệu mở

Dữ liệu nguồn là công khai và miễn phí:

- **BODACC**: [data.gouv.fr / DILA](https://www.data.gouv.fr/fr/datasets/bodacc-annonces-commerciales/) (thông báo pháp lý)
- **SIRENE**: [INSEE](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/) (29,8 triệu đơn vị pháp lý)
- **BOAMP**: [Opendatasoft / DILA](https://boamp-datadila.opendatasoft.com) (thị trường công)

**BODACC-api thêm cấu trúc và đồ thị vào dữ liệu thô này**: phân tích văn bản pháp lý, phân giải danh tính (cá nhân), liên kết doanh nghiệp ↔ thông báo ↔ hợp đồng.

---

## 🌐 Khám phá trang web

[Trang chủ](https://bodacc.io/vi) · [Thông báo](https://bodacc.io/vi/annonces) · [Doanh nghiệp](https://bodacc.io/vi/entreprises) · [Cá nhân](https://bodacc.io/vi/personnes) · [Bảng giá](https://bodacc.io/vi/tarifs) · [Công nghệ](https://bodacc.io/vi/technologie)

---

## 📄 Giấy phép & liên hệ

- Giấy phép: MIT (mã nguồn) — dữ liệu vẫn tuân theo giấy phép của các nhà sản xuất (DILA, INSEE)
- Trang web: [bodacc.io](https://bodacc.io)
- Issues & PR: hoan nghênh đóng góp trên kho lưu trữ này

---

*BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) là ấn phẩm chính thức về các thông báo pháp lý của doanh nghiệp Pháp. Dự án này không liên kết với DILA.*
