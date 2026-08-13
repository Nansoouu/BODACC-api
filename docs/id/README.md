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
> 📰 [Rangkuman lengkap](recaps/README.md) · 🏠 [Di balik layar BODACC.io](coulisses/COULISSES.md)

<div align="center">

![Python 3.12](https://img.shields.io/badge/Python-3.12-3776AB?logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-API-009688?logo=fastapi&logoColor=white)
![PostgreSQL 16](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)

![Annonces](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Pengumuman&color=blue)
![Entreprises](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Perusahaan&color=green)
![Personnes](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Orang&color=orange)
![Site bodacc.io](https://img.shields.io/badge/bodacc.io-Explorer-important?logo=internetexplorer&logoColor=white&style=for-the-badge)

</div>

**API yang mengubah pengumuman legal Prancis menjadi data terstruktur, saling terhubung, dan dapat dimanfaatkan — secara real-time.**

BODACC (Buletin Resmi Pengumuman Sipil dan Komersial) adalah publikasi resmi yang mencatat kehidupan hukum perusahaan Prancis: pendirian, perubahan, penghapusan, prosedur kolektif, penjualan, penyetoran laporan keuangan. Teks-teks ini bersifat publik, tetapi tetap berupa dokumen mentah: tidak terstruktur, tidak saling terhubung, dan tidak mudah untuk ditelusuri.

**BODACC-api menjadikannya dapat dimanfaatkan.** Setiap pengumuman dianalisis secara otomatis dan diubah menjadi data terstruktur (SIREN, nama badan usaha, alamat, NAF, direksi, jumlah...), kemudian dihubungkan ke perusahaannya dan orang-orang yang muncul di dalamnya. Hasilnya: grafik lengkap kehidupan ekonomi Prancis, yang dapat ditelusuri hanya dengan satu permintaan HTTP.

> 🌐 Situs: [bodacc.io](https://bodacc.io) · 📖 Swagger: [https://bodacc.io/api/bodacc/docs](https://bodacc.io/api/bodacc/docs) · 💶 [Harga](https://bodacc.io/id/tarifs)

---

## ✨ Mengapa BODACC-api?

| | |
|---|---|
| 🗂 **Seluruh riwayat, sejak 2004** | Jutaan pengumuman dalam basis data, cakupan lengkap — bukan jendela bergulir |
| ⚡ **Real-time** | Pengumuman hari ini tersedia setiap pagi, sebelum jam kantor dimulai |
| 🕸 **Grafik, bukan berkas** | Pengumuman → perusahaan (SIREN) → direksi → mandat → pasar publik: semuanya terhubung dan dapat ditelusuri dalam satu permintaan |
| ✨ **Dari teks mentah ke data terstruktur** | SIREN, NAF, alamat, direksi, prosedur... diekstraksi secara otomatis dari setiap teks hukum |
| 🌍 **20 bahasa** | Antarmuka dan konten diterjemahkan — tim dan klien Anda berbicara dalam bahasa mereka |
| 🤖 **Siap-agen** | 100/100 pada audit isitagentready (DNSSEC, DNS-AID, auth.md, WebMCP, llms.txt) |
| 🚪 **Tanpa hambatan untuk mencoba** | Semua endpoint baca dapat diakses tanpa kunci — Anda mengevaluasi sebelum membayar |

---

## 🏭 Nilai tambah kami: jalur pemrosesan

Yang membuat perbedaan bukanlah data mentah (data tersebut publik), melainkan apa yang kami lakukan dengannya — setiap hari, secara otomatis:

**1. Ingestion yang andal dan lengkap.** Setiap pagi sebelum pukul 09:00, pengumuman baru yang diterbitkan oleh DILA diintegrasikan ke dalam basis data kami. Riwayat lengkapnya dimulai dari tahun 2004, jauh melampaui apa yang ditawarkan konsultasi publik. Menjalankan ulang ingestion tidak membuat duplikat: data kami selalu terverifikasi dan konsisten.

**2. Pengayaan cerdas.** Setiap pengumuman adalah teks hukum — mesin ekstraksi hibrida kami (aturan bisnis + AI) mengubahnya menjadi data terstruktur: nomor SIREN, nama badan usaha, alamat, kode NAF, direksi, mandat, jumlah, prosedur. Apa yang membutuhkan waktu berjam-jam untuk dibaca manusia menjadi kolom JSON yang dapat ditelusuri.

**3. Grafik relasional.** Pengumuman prosedur kolektif hanya berguna jika kita tahu perusahaan mana yang terkait, dan siapa direksinya. Mesin resolusi kami menghubungkan setiap pengumuman ke perusahaannya (SIREN), setiap orang ke mandatnya, setiap pasar publik ke pemenangnya. Anda menelusuri kehidupan ekonomi Prancis seperti basis data — bukan seperti tumpukan PDF.

**4. Distribusi real-time.** Segera setelah pengumuman diterbitkan, pengumuman tersebut tersedia melalui API, beserta relasi dan pengayaannya. Tidak ada berkas untuk diunduh, tidak ada ETL untuk dipelihara: satu permintaan HTTP sudah cukup.

---

## ⚖️ Perbandingan: posisi kami

| | **Situs resmi (bodacc.fr)** | **Pappers** | **BODACC.io** |
|---|---|---|---|
| **Riwayat** | Hanya sejak 2008 | Riwayat komersial sesuai langganan | **Lengkap sejak 2004** |
| **API** | ❌ Tidak ada | API khusus penawaran tingkat atas | ✅ **API REST terdokumentasi, tanpa kunci untuk baca** |
| **Data terstruktur** | ❌ Konsultasi PDF | ✅ Profil yang diperkaya | ✅ **Pengumuman + grafik perusahaan/orang/pasar** |
| **Real-time** | Publikasi kertas dapat dilihat daring | Pembaruan harian | ✅ **Setiap pagi sebelum pukul 09:00** |
| **Harga** | Gratis, tetapi terbatas | Mulai **29,90 €/bln** untuk akses dasar | **Paket terjangkau, mulai gratis untuk eksplorasi** |
| **Publik** | Masyarakat umum | Profesional (kepatuhan, pemantauan) | **Pengembang, fintech, legaltech, tim data** |

**Kelebihan situs resmi**: gratis, andal, resmi. **Kekurangan**: tidak ada API, riwayat terbatas hingga 2008, tidak ada data terstruktur — Anda tetap berada di PDF.

**Kelebihan Pappers**: antarmuka yang sangat rapi, agregasi INSEE + INPI + BODACC, pemantauan terintegrasi. **Kekurangan**: harga (29,90 €/bln untuk akses dasar, API dan riwayat lengkap lebih mahal), solusi yang berorientasi pada konsultasi daripada data yang dapat dimanfaatkan.

**Posisi kami**: **seluruh riwayat sejak 2004, lebih cepat daripada situs resmi — dan dengan tarif lebih rendah daripada Pappers.** Dirancang untuk mereka yang ingin menghubungkan data ke alat mereka sendiri, bukan untuk mereka yang menginginkan layar tambahan.

> 💶 Lihat paket: [bodacc.io/id/tarifs](https://bodacc.io/id/tarifs) — Gratis · Pro · Enterprise · LIFE

---

## 🚀 Coba dalam 30 detik

Semua endpoint baca dapat diakses **tanpa kunci**:

```bash
# Cari perusahaan berdasarkan nama
curl "https://bodacc.io/api/bodacc/annonces?q=rizom&limit=5"

# Detail pengumuman (dengan relasinya: perusahaan + orang)
curl "https://bodacc.io/api/bodacc/annonces/A202601432266"

# Profil perusahaan (pengumuman terbaru + direksi + pasar publik)
curl "https://bodacc.io/api/bodacc/entreprises/912969573"

# Statistik global
curl "https://bodacc.io/api/bodacc/stats"

# Volume harian (30 hari terakhir)
curl "https://bodacc.io/api/bodacc/stats/daily30"
```

---

## 📡 Endpoint

### Pengumuman

| Metode | Rute | Deskripsi |
|---|---|---|
| `GET` | `/bodacc/annonces` | Pencarian: `q` (nama/SIREN), `famille`, `departement`, tanggal, paginasi `limit`/`offset` |
| `GET` | `/bodacc/annonces/{id}` | Detail lengkap: `raw_data` + pengayaan + `relations` (perusahaan dan orang terkait) |
| `GET` | `/bodacc/enrichi/{id}` | Versi terstruktur (siren, dénomination, NAF, direksi...) |
| `POST` | `/bodacc/enrichi/batch` | Pengayaan massal |

### Perusahaan & orang

| Metode | Rute | Deskripsi |
|---|---|---|
| `GET` | `/bodacc/entreprises` | Pencarian perusahaan (nama, kota, NAF, kode pos) |
| `GET` | `/bodacc/entreprises/{siren}` | Profil INSEE + `annonces_recentes`, `dirigeants`, `marches_publics`, `stats` |
| `GET` | `/bodacc/entreprises/by-slug/{slug}` | Profil berdasarkan slug SEO |
| `GET` | `/bodacc/personnes/{id}` | Profil orang: mandat (peran) + perusahaan terkait |

### Statistik

| Metode | Rute | Deskripsi |
|---|---|---|
| `GET` | `/bodacc/stats` | Total, per keluarga, per tanggal |
| `GET` | `/bodacc/stats/daily` | Volume hari ini (per terbitan, departemen, keluarga) |
| `GET` | `/bodacc/stats/daily30` | Seri 30 hari terakhir |
| `GET` | `/bodacc/stats/counts` | Penghitung: pengumuman, perusahaan, orang |
| `GET` | `/bodacc/graph/categories` | Distribusi per kategori |

### Alert & integrasi

| Metode | Rute | Deskripsi |
|---|---|---|
| `GET/POST/DELETE` | `/bodacc/alertes` | Alert berdasarkan SIREN (pemantauan perusahaan) |
| `POST` | `/bodacc/ingest?target_date=YYYY-MM-DD` | Memicu ingestion untuk tanggal tertentu |
| `POST` | `/bodacc/import` | Impor massal (backfill) |

### Referensi NAF (INSEE)

| Metode | Rute | Deskripsi |
|---|---|---|
| `GET` | `/bodacc/naf` | Referensi NAF rev. 2 lengkap (732 subkelas, 615 kelas) — label resmi INSEE |
| `GET` | `/bodacc/naf?q=commerce` | Pencarian NAF berdasarkan label |
| `GET` | `/bodacc/naf?code=46.72Z` | Detail kode NAF |

---

## 📊 Data

Lencana di bagian atas halaman adalah **penghitung real-time**: pengumuman BODACC, perusahaan SIRENE, dan orang yang diekstraksi — semuanya berubah seiring dengan konsolidasi riwayat dan pengayaan.

Titik referensi yang stabil:

- 📰 **Pengumuman BODACC**: riwayat lengkap sejak 2004, diperbarui setiap pagi sebelum pukul 09:00
- 🏢 **Perusahaan (SIRENE)**: 29,8 J unit legal Prancis (registri INSEE)
- 👤 **Orang yang diekstraksi**: direksi, likuidator, auditor... dalam konsolidasi berkelanjutan
- 📦 **Pasar publik (BOAMP)**: 1,69 J kontrak publik 2015 → 2026

---

## 🛠 Teknologi

| Lapisan | Teknologi |
|---|---|
| **API** | Python · FastAPI · PostgreSQL 16 |
| **Data** | Indeksasi trigram, pencarian teks lengkap, JSONB |
| **Ingestion** | Pipeline otomatis, integrasi harian, idempoten |
| **Pengayaan** | Ekstraksi hibrida (aturan bisnis + AI) |
| **Frontend** | Next.js · i18n 20 bahasa |
| **Infra** | Docker · Cloudflare (CDN, cache, DNSSEC) |
| **Agen AI** | Server MCP · DNS-AID · auth.md · llms.txt |

---

## 🔓 Data terbuka

Data sumber bersifat publik dan gratis:

- **BODACC**: [data.gouv.fr / DILA](https://www.data.gouv.fr/fr/datasets/bodacc-annonces-commerciales/) (pengumuman legal)
- **SIRENE**: [INSEE](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/) (29,8 J unit legal)
- **BOAMP**: [Opendatasoft / DILA](https://boamp-datadila.opendatasoft.com) (pasar publik)

**BODACC-api menambahkan struktur dan grafik pada data mentah ini**: analisis teks hukum, resolusi identitas (orang), tautan perusahaan ↔ pengumuman ↔ kontrak.

---

## 🌐 Jelajahi situs

[Beranda](https://bodacc.io/id) · [Pengumuman](https://bodacc.io/id/annonces) · [Perusahaan](https://bodacc.io/id/entreprises) · [Orang](https://bodacc.io/id/personnes) · [Harga](https://bodacc.io/id/tarifs) · [Teknologi](https://bodacc.io/id/technologie)

---

## 📄 Lisensi & kontak

- Lisensi: MIT (kode) — data tetap tunduk pada lisensi produsennya (DILA, INSEE)
- Situs: [bodacc.io](https://bodacc.io)
- Isu & PR: dipersilakan di repositori ini

---

*BODACC (Buletin Resmi Pengumuman Sipil dan Komersial) adalah publikasi resmi pengumuman legal perusahaan Prancis. Proyek ini tidak berafiliasi dengan DILA.*
