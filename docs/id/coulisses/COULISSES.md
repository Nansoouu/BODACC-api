# 🏠 Di balik layar BODACC.io

BODACC.io membuat pengumuman resmi perusahaan-perusahaan Prancis **mudah
untuk dikonsultasikan**. Tetapi dari mana data itu berasal? Bagaimana data
itu sampai ke layar Anda?

Ada tim kecil pekerja otomatis yang bekerja setiap hari di balik layar.
Inilah kisah mereka.

---

## 🌅 Pagi hari : tukang pos

Setiap pagi, sangat pagi, **tukang pos** kami pergi mengambil pengumuman
resmi hari sebelumnya: pendirian perusahaan, pergantian direktur, likuidasi,
penyampaian laporan keuangan... Semuanya ia bawa pulang, tanpa kehilangan
satu pun, dan ia menyimpannya di perpustakaan besar kami.

> 👤 **Diperankan oleh Thom** — agen ingest data: setiap hari ia mengambil
> pengumuman resmi dan menyusunnya untuk basis data. Dialah yang menjalankan
> mesinnya.

→ [Kenali pekerjaan tukang pos](le-facteur/README.md)

## 📖 Lalu : penerjemah

Pengumuman resmi adalah teks yang ditulis dalam bahasa administratif, tidak
selalu mudah dibaca. **Penerjemah** kami membaca semuanya dan mengubahnya
menjadi kartu yang jelas: nama perusahaan, alamatnya, kegiatannya,
direkturnya, jumlahnya...

→ [Kenali pekerjaan penerjemah](le-traducteur/README.md)

## 🔍 Kemudian : peneliti

Begitu kartu siap, **peneliti** kami melengkapinya dengan informasi
**publik** perusahaan: situs webnya, teleponnya, media sosialnya. Tidak ada
yang privat, tidak ada yang rahasia — hanya apa yang perusahaan tunjukkan
sendiri.

> 👤 **Diperankan oleh Elysa** — agen pengayaan: ia melengkapi kartu
> perusahaan (situs web, telepon, media sosial direktur). Ia hanya
> mengumpulkan data publik yang terpapar: tidak ada yang dicari di
> tempat-tempat terlarang.

→ [Kenali pekerjaan peneliti](lenqueteur/README.md)

## 🧩 Bersamaan dengan itu : teka-teki orang

Setiap pengumuman berbicara tentang orang: direktur, likuidator, auditor.
**Teka-teki** kami menghubungkan setiap orang dengan perusahaannya, supaya
mudah menemukan "siapa mengerjakan apa".

→ [Kenali teka-teki orang](le-puzzle/README.md)

## 🗺️ Dan ahli geografi

**Ahli geografi** kami memeriksa bahwa setiap perusahaan benar-benar ada di
peta (Google Maps): alamatnya, kategorinya, peringkatnya. Dengan begitu,
kartu itu juga menunjukkan kehadiran nyata perusahaan dalam kehidupan
sehari-hari.

→ [Kenali pekerjaan ahli geografi](le-geographe/README.md)

## 📚 Terakhir : perpustakaan kontrak

Kontrak publik (kontrak yang diberikan oleh instansi pemerintahan) juga
diarsipkan di **perpustakaan** kami: lebih dari satu juta kontrak, bebas
untuk dikonsultasikan.

→ [Kenali perpustakaan kontrak](la-bibliotheque/README.md)

---

## 👥 Tim di balik layar

| Orang | Peran | Bidang |
|---|---|---|
| **Nansou** | Pemimpin proyek | Visi, strategi, konten — dialah yang mengatur segalanya |
| **Thom** | Agen ingest data | Tukang pos: mengambil pengumuman setiap hari |
| **Elysa** | Agen pengayaan | Peneliti: melengkapi kartu publik |
| **Karan** | Agen internasional dan SEO | Terjemahan, visibilitas internasional |
| **Ruby** | Agen pengawasan | Memastikan semuanya berfungsi, setiap saat |

---

## 📊 Penghitung langsung

![Pengumuman](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Pengumuman&color=blue)
![Perusahaan](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Perusahaan&color=green)
![Orang](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Orang&color=orange)

Angka-angka ini nyata dan berubah setiap hari. Setiap pagi tukang pos
membawa bagiannya, penerjemah membacanya, dan semua orang bisa datang dan
melihat.

---

## 📅 Buku catatan

Setiap pekerja menyimpan buku catatan kecilnya: berapa dokumen yang
diproses dalam sehari, dan perbaikan-perbaikan kecil yang dilakukan. Buku
itu ada di setiap kartu:

| Tanggal | Pengumuman yang masuk | Kartu yang dibaca | Perbaikan kecil |
|---|---|---|---|
| _(diisi setiap hari)_ | | | |

## 🔍 Periksa sendiri

Semuanya publik dan gratis — setiap orang dapat memeriksanya:

- Pengumuman terbaru: [`https://bodacc.io/id/annonces`](https://bodacc.io/id/annonces)
- Penghitung langsung: [`https://bodacc.io/api/bodacc/stats/counts`](https://bodacc.io/api/bodacc/stats/counts)
- Sebuah perusahaan: [`https://bodacc.io/id/entreprises/514494491`](https://bodacc.io/id/entreprises/514494491)

---

*Dokumen ini adalah bagian dari repositori publik BODACC-api. Dokumen ini
menjelaskan apa yang kami lakukan, secara sederhana — tanpa mengungkapkan
metode internal kami.*
