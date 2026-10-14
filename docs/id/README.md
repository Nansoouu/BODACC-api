<div align="center">

# BODACC.io : API BODACC untuk pengumuman resmi dan data perusahaan Prancis

**Setiap pengumuman perusahaan Prancis, secara real time.** Pendirian, perubahan, penyampaian laporan
keuangan, prosedur kepailitan, penjualan, penghapusan: setiap pengumuman BODACC, terkait dengan
perusahaannya, para pengurusnya, dan sumber resminya. Gratis dan terbuka, dalam 20 bahasa.

[**bodacc.io**](https://bodacc.io) · [Dokumentasi API](https://bodacc.io/id/dokumentasi) · [Swagger](https://bodacc.io/api/bodacc/docs) · [RSS](https://bodacc.io/rss.xml)

</div>

## 1. Data BODACC secara langsung

| Kumpulan data BODACC | Jumlah rekaman | Langsung |
|---|---|---|
| Pengumuman resmi BODACC | 51 043 403 | ![Pengumuman](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=pengumuman&color=blue) |
| Perusahaan Prancis | 30 032 566 | ![Perusahaan](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=perusahaan&color=green) |
| Direksi dan pengurus | 4 935 692 | ![Orang](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=orang&color=orange) |
| Kontrak publik (BOAMP) | 1 716 163 | ![Kontrak](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=boamp&label=kontrak&color=purple) |

Angka-angka ini tidak disalin tempel: angka-angka ini **disajikan secara langsung oleh API BODACC itu
sendiri**, di
[`/api/bodacc/stats/counts-formatted`](https://bodacc.io/api/bodacc/stats/counts-formatted).
Periksa sendiri, lalu periksa lagi besok.

**Hari ini** (14 Oktober 2026): **5 920 pengumuman** — famili terbanyak: Penyampaian laporan keuangan (2 306).

| Famili BODACC | Pengumuman hari ini |
|---|---|
| Penyampaian laporan keuangan | 2 306 |
| Pendirian | 1 415 |
| Perubahan | 1 193 |
| Penghapusan | 500 |
| Prosedur kepailitan | 323 |
| Pendaftaran | 118 |
| Penjualan dan pengalihan | 65 |

## 2. Apa yang diberikan API BODACC kepada Anda

BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) adalah jurnal resmi kehidupan
perusahaan Prancis. Setiap pendirian, setiap penyampaian laporan keuangan, setiap kepailitan, setiap
penjualan diterbitkan di sana menurut hukum. BODACC.io mengubah jurnal itu menjadi basis data yang
dapat Anda kueri.

**Sebagian besar basis data perusahaan memberi Anda sebuah potret. API BODACC memberi Anda pergerakan.**

Sebuah direktori memberi tahu Anda bahwa perusahaan itu ada: namanya, alamatnya, nomor
pendaftarannya. BODACC memberi tahu Anda **apa yang baru saja dilakukan perusahaan itu**, dan kapan.
Di situlah letak seluruh perbedaannya:

| | Direktori perusahaan | BODACC.io |
|---|---|---|
| Yang Anda dapatkan | catatan identitas yang beku | peristiwa bertanggal |
| Kesegaran | diperbarui setiap kuartal | diterbitkan pagi itu juga |
| Insolvensi | penanda status | prosedurnya, sifatnya, dan tanggalnya |
| Laporan keuangan | status "sudah disampaikan" | setiap penyampaian, dengan tanggal penutupannya |
| Pengurus | sebuah nama | setiap mandat, dengan perusahaan terkait |
| Sumber | salinan | pengumuman resmi dan PDF-nya |

## 3. Pengumuman resmi BODACC secara terperinci

Setiap pengumuman memiliki 23 bidang. Berikut satu pengumuman nyata, persis seperti yang dikembalikan
oleh API BODACC:

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

Setiap pengumuman menautkan ke **halaman lengkapnya di bodacc.io**, tempat sumber resmi dan PDF-nya
berada hanya satu klik jauhnya.

Tujuh famili BODACC, dengan istilah yang akan Anda lihat di dalam data:

| Famili BODACC | Di dalam data | Artinya |
|---|---|---|
| Pendirian | `creation` | sebuah perusahaan baru didaftarkan |
| Perubahan | `modification` | anggaran dasar, manajemen, alamat, perubahan modal |
| Penyampaian laporan keuangan | `dpc` | laporan keuangan tahunan disampaikan di kepaniteraan pengadilan |
| Prosedur kepailitan | `collective` | penundaan kewajiban pembayaran utang, likuidasi, pemulihan |
| Penjualan dan pengalihan | `vente` | sebuah usaha dijual atau dialihkan |
| Penghapusan | `radiation` | perusahaan dihapus dari daftar |
| Pendaftaran | `immatriculation` | pendaftaran di daftar niaga |

## 4. Catatan perusahaan BODACC

Setiap pengumuman menunjuk ke perusahaan di baliknya. API BODACC menampilkan perusahaan-perusahaan itu
beserta identitas, aktivitas, dan riwayat akuntansinya:

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

Di luar identitas: kode aktivitas (NAF), bentuk hukum, status administratif, **tanggal penyampaian
laporan keuangan terakhir, tanggal penutupan terakhir, dan jumlah hari sejak saat itu**, serta label
yang mungkin disandang sebuah perusahaan: ekonomi sosial, bio, RGE, Qualiopi.

## 5. Direksi dan pengurus BODACC

Di balik setiap perusahaan berdiri orang-orang yang menjalankannya. API BODACC mendata **4,9 juta
direktur, pengurus, likuidator, dan auditor**, masing-masing dengan:

- mandatnya, perusahaan demi perusahaan, beserta periode yang bersangkutan
- perusahaan lain mereka, sehingga Anda dapat mengikuti seseorang sepanjang kariernya
- pengumuman yang menyangkut mereka

Itulah yang mengubah sebuah daftar resmi menjadi graf: sebuah perusahaan, para pengurusnya, dan
perusahaan-perusahaan yang juga dijalankan para pengurus itu. Satu endpoint menampilkannya secara
langsung.

## 6. API BODACC

REST, JSON, tanpa kunci pada endpoint terbuka, hingga 500 rekaman per panggilan, dengan paginasi
melalui `offset`.

```bash
# Pengumuman BODACC terbaru (selalu yang paling baru lebih dahulu)
curl "https://bodacc.io/api/bodacc/annonces?limit=100"

# Satu pengumuman, dengan perusahaannya, para pengurusnya, dan PDF-nya
curl "https://bodacc.io/api/bodacc/annonces/C202601972306-depot-comptes-988208435-141026-holding-biiz"

# Sebuah perusahaan berdasarkan SIREN
curl "https://bodacc.io/api/bodacc/entreprises/552081317"

# Setiap pengumuman BODACC yang menyangkut perusahaan itu
curl "https://bodacc.io/api/bodacc/entreprises/552081317/annonces"

# Graf perusahaan: para pengurus dan perusahaan mereka yang lain
curl "https://bodacc.io/api/bodacc/entreprises/552081317/graphe"

# Pencarian berdasarkan nama, kota, departemen, kode aktivitas, atau rentang tanggal
curl "https://bodacc.io/api/bodacc/entreprises?q=eiffage&departement=75"
curl "https://bodacc.io/api/bodacc/annonces?famille=collective&date_debut=2026-10-01"
```

Referensi lengkap: [bodacc.io/id/dokumentasi](https://bodacc.io/id/dokumentasi) — endpoint demi
endpoint, dengan antarmuka Swagger dan spesifikasi OpenAPI yang diterbitkan, dalam 20 bahasa.

## 7. Kumpulan data dan ekspor BODACC

Di luar API, setiap halaman bodacc.io adalah URL yang stabil dan dapat dirayapi: pengumuman resmi,
perusahaan, pengurus, wilayah, kota, statistik — dan situs ini menerbitkan titik masuk yang dapat
dibaca mesin:

- [Sitemap](https://bodacc.io/sitemap.xml) — inventaris URL lengkap, per bahasa
- [Katalog API](https://bodacc.io/.well-known/api-catalog) — dapat ditemukan oleh agen
- [RSS](https://bodacc.io/rss.xml) — feed harian
- [Daftar URL](URLLIST.md) — setiap titik masuk, satu daftar per bahasa

## 8. Cakupan dan kesegaran data BODACC

BODACC terbit pada hari kerja, bukan pada akhir pekan. BODACC.io mengumpulkan setiap terbitan dan
menyediakannya **pagi itu juga**, biasanya dalam beberapa menit setelah dirilis. Setiap pengumuman
mempertahankan tanggal penerbitannya, sehingga Anda selalu dapat mengetahui apa yang baru.

## 9. BODACC digunakan untuk apa

- **Kepatuhan dan KYC** — memeriksa status nyata mitra usaha sebelum menandatangani, bukan statusnya tiga bulan lalu
- **Uji tuntas** — mengikuti penyampaian dokumen sebuah perusahaan, laporan keuangannya, dan riwayat insolvensinya
- **Penilaian kredit dan risiko** — prosedur kepailitan dan penyampaian laporan keuangan adalah sinyal paling awal
- **Intelijen penjualan** — pendirian baru adalah calon klien baru, pada hari terjadinya
- **Jurnalisme** — fakta di tingkat perusahaan, bersumber dan bertanggal
- **Riset** — 51 juta penyampaian, dari daftar tertua hingga pagi ini
- **Hukum dan akuntansi** — menemukan perusahaan yang Anda tangani, dan apa yang mereka sampaikan

## 10. Pertanyaan yang sering diajukan tentang BODACC

**Apakah BODACC.io adalah BODACC resmi?**

Tidak. BODACC.io adalah layanan independen yang membuat data BODACC publik dapat digunakan dan
dikueri. Layanan ini tidak berafiliasi dengan DILA atau badan publik mana pun. Setiap pengumuman
menautkan kembali ke sumber resminya.

**Apakah API BODACC gratis?**

Endpoint terbuka gratis dan tidak memerlukan kunci. Tersedia paket berbayar untuk penggunaan berat —
[lihat harga](https://bodacc.io/id/tarifs).

**Apa perbedaan antara BODACC dan direktori perusahaan?**

Direktori memberi Anda identitas sebuah perusahaan. BODACC memberi Anda aktivitasnya: apa yang
disampaikannya, kapan, dan apa yang diterbitkan pengadilan tentangnya. Keduanya saling melengkapi —
BODACC.io juga memuat identitas.

**Seberapa segar datanya?**

Pengumuman muncul pada pagi hari saat diterbitkan. Catatan perusahaan diperbarui seiring datangnya
pengumuman.

**Berapa banyak rekaman per panggilan?**

Hingga 500, dengan `offset` untuk paginasi. Tidak ada batas jumlah panggilan pada endpoint terbuka.

**Bisakah saya menggunakannya dalam produksi?**

Ya. API ini terdokumentasi, berversi, dan disajikan dari Cloudflare. Atribusi ke
[bodacc.io](https://bodacc.io) sangat dihargai.

**Bahasa apa saja yang didukung?**

Situs dan dokumentasinya tersedia dalam 20 bahasa. API-nya sendiri netral bahasa: slug dan
endpoint-nya sama untuk semua.

## 11. Dokumentasi BODACC, per bahasa

Setiap folder di bawah ini memuat dokumentasi BODACC yang lengkap dalam bahasanya sendiri: referensi
API, daftar URL, dan rekap harian.

| # | Bahasa | Dokumentasi | URL | Data harian |
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

## 12. Tautan BODACC

- [BODACC.io](https://bodacc.io) — situs langsung
- [Pencarian perusahaan](https://bodacc.io/id/entreprises) · [Pengumuman resmi](https://bodacc.io/id/annonces) · [Direksi](https://bodacc.io/id/personnes)
- [Dokumentasi API](https://bodacc.io/id/dokumentasi) · [Antarmuka Swagger](https://bodacc.io/api/bodacc/docs)
- [Harga](https://bodacc.io/id/tarifs) · [Teknologi](https://bodacc.io/id/technologie)
- [Daftar URL (indeks multibahasa)](URLLIST.md)

---

*BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) adalah publikasi resmi pengumuman
hukum perusahaan Prancis. BODACC.io adalah layanan independen dan tidak berafiliasi dengan DILA.*
