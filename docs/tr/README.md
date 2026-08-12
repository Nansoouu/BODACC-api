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

🌍 [Français](../fr/README.md) · [English](../../README.md) · [Español](../es/README.md) · [Deutsch](../de/README.md) · [Italiano](../it/README.md) · [Português](../pt/README.md) · [Nederlands](../nl/README.md) · [Polski](../pl/README.md) · [Русский](../ru/README.md) · [Türkçe](../tr/README.md) · [Українська](../uk/README.md) · [Bahasa Indonesia](../id/README.md) · [Tiếng Việt](../vi/README.md) · [日本語](../ja/README.md) · [한국어](../ko/README.md) · [中文](../zh/README.md) · [العربية](../ar/README.md) · [עברית](../he/README.md) · [हिन्दी](../hi/README.md) · [فارسی](../fa/README.md)

<div align="center">

![Python 3.12](https://img.shields.io/badge/Python-3.12-3776AB?logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-API-009688?logo=fastapi&logoColor=white)
![PostgreSQL 16](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)

![Annonces](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Annonces&color=blue)
![Entreprises](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Entreprises&color=green)
![Personnes](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Personnes&color=orange)
![Site bodacc.io](https://img.shields.io/badge/bodacc.io-Explorer-important?logo=internetexplorer&logoColor=white&style=for-the-badge)

</div>

**Fransız yasal ilanlarını yapılandırılmış, ilişkilendirilmiş ve kullanılabilir verilere dönüştüren API — gerçek zamanlı.**

BODACC (Bulletin Officiel des Annonces Civiles et Commerciales), Fransız şirketlerinin hukuki yaşamını izleyen resmi yayındır: kuruluşlar, değişiklikler, fesihler, toplu işlemler, satışlar, hesap depozitoları. Bu metinler kamuya açıktır, ancak ham belge olarak kalır: ne yapılandırılmıştır, ne birbirleriyle ilişkilidir, ne de kolayca sorgulanabilir.

**BODACC-api onları kullanılabilir kılar.** Her ilan otomatik olarak analiz edilir ve yapılandırılmış verilere (SIREN, ticari unvan, adres, NAF, yöneticiler, tutarlar...) dönüştürülür, ardından şirketi ve içinde görünen kişilerle ilişkilendirilir. Sonuç: tek bir HTTP isteğiyle sorgulanabilen, Fransız ekonomik yaşamının eksiksiz bir grafiği.

> 🌐 Site: [bodacc.io](https://bodacc.io) · 📖 Swagger: [https://bodacc.io/api/bodacc/docs](https://bodacc.io/api/bodacc/docs) · 💶 [Fiyatlar](https://bodacc.io/tr/tarifs)

---

## ✨ Neden BODACC-api?

| | |
|---|---|
| 🗂 **2004'ten beri tüm geçmiş** | Veritabanında milyonlarca ilan, tam kapsam — kayan pencere değil |
| ⚡ **Gerçek zamanlı** | Günün ilanları her sabah ofisler açılmadan önce kullanılabilir |
| 🕸 **Dosyalar değil, bir grafik** | İlan → şirket (SIREN) → yöneticiler → görevler → kamu ihaleleri: her şey ilişkili ve tek bir istekle sorgulanabilir |
| ✨ **Ham metinden yapılandırılmış verilere** | SIREN, NAF, adres, yöneticiler, prosedürler... her hukuki metinden otomatik olarak çıkarılır |
| 🌍 **20 dil** | Arayüz ve içerikler çevrilmiştir — ekipleriniz ve müşterileriniz kendi dilini konuşur |
| 🤖 **Ajan uyumlu** | isitagentready denetiminde 100/100 (DNSSEC, DNS-AID, auth.md, WebMCP, llms.txt) |
| 🚪 **Test için sıfır sürtünme** | Tüm okuma uç noktaları anahtar olmadan erişilebilir — ödemeden önce değerlendirirsiniz |

---

## 🏭 Katma değerimiz: boru hattı

Fark yaratan şey ham veri değil (kamuya açıktır), onunla yaptıklarımızdır — her gün, otomatik olarak:

**1. Güvenilir ve eksiksiz bir alım.** Her sabah 09:00'dan önce, DILA tarafından yayınlanan yeni ilanlar veritabanımıza entegre edilir. Tam geçmiş 2004'e kadar uzanır, kamuya açık danışmanın sunduğunun çok ötesinde. Bir alımı yeniden çalıştırmak hiçbir kopya oluşturmaz: verilerimiz sürekli olarak doğrulanır ve tutarlıdır.

**2. Akıllı zenginleştirme.** Her ilan hukuki bir metindir — hibrit çıkarma motorumuz (iş kuralları + yapay zeka) onu yapılandırılmış verilere dönüştürür: SIREN numarası, ticari unvan, adres, NAF kodu, yöneticiler, görevler, tutarlar, prosedürler. Saatlerce insan okuması gerektiren şey, sorgulanabilir JSON alanlarına dönüşür.

**3. İlişkisel bir grafik.** Bir toplu işlem ilanı, yalnızca hangi şirkete bağlı olduğunu ve yöneticisinin kim olduğunu biliyorsanız değerlidir. Çözümleme motorumuz her ilanı şirketine (SIREN), her kişiyi görevlerine, her kamu ihalesini alıcısına bağlar. Fransız ekonomik yaşamını bir PDF yığını gibi değil, bir veritabanı gibi sorgularsınız.

**4. Gerçek zamanlı yayın.** Bir ilan yayınlandığı anda, ilişkileri ve zenginleştirmesiyle birlikte API üzerinden kullanılabilir. İndirilecek dosya yok, bakımı yapılacak ETL yok: tek bir HTTP isteği yeterlidir.

---

## ⚖️ Karşılaştırma: nerede konumlanıyoruz

| | **Resmi site (bodacc.fr)** | **Pappers** | **BODACC.io** |
|---|---|---|---|
| **Geçmiş** | Yalnızca 2008'den beri | Aboneliğe göre ticari geçmiş | **2004'ten beri eksiksiz** |
| **API** | ❌ Yok | API yalnızca üst düzey paketlerde | ✅ **Belgelenmiş REST API, okumada anahtarsız** |
| **Yapılandırılmış veriler** | ❌ PDF danışma | ✅ Zenginleştirilmiş profiller | ✅ **İlanlar + şirket/kişi/ihale grafiği** |
| **Gerçek zamanlı** | Çevrimiçi görüntülenebilir kağıt yayın | Günlük güncelleme | ✅ **Her sabah 09:00'dan önce** |
| **Fiyat** | Ücretsiz, ancak sınırlı | Temel erişim için **aylık 29,90 €'dan başlayan** | **Erişilebilir paketler, keşfetmek için ücretsizden başlayan** |
| **Hedef kitle** | Genel kamu | Profesyoneller (uyum, izleme) | **Geliştiriciler, fintech, legaltech, veri ekipleri** |

**Resmi sitenin güçlü yönleri**: ücretsiz, güvenilir, resmi. **Zayıf yönleri**: API yok, geçmiş 2008 ile sınırlı, yapılandırılmış veri yok — PDF'lerde kalırsınız.

**Pappers'ın güçlü yönleri**: çok özenli arayüz, INSEE + INPI + BODACC toplama, entegre izleme. **Zayıf yönleri**: fiyat (temel erişim için aylık 29,90 €, API ve tam geçmiş daha pahalıdır), danışma odaklı bir çözüm, kullanılabilir verilerden ziyade.

**Bizim konumumuz**: **2004'ten beri tüm geçmiş, resmi siteden daha hızlı — ve Pappers'ın fiyatından daha düşük bir fiyata.** Veriyi kendi araçlarına bağlamak isteyenler için tasarlandı, fazladan bir ekran isteyenler için değil.

> 💶 Paketleri görün: [bodacc.io/tr/tarifs](https://bodacc.io/tr/tarifs) — Ücretsiz · Pro · Enterprise · LIFE

---

## 🚀 30 saniyede deneyin

Tüm okuma uç noktaları **anahtar olmadan** erişilebilir:

```bash
# Bir şirketi adına göre arayın
curl "https://bodacc.io/api/bodacc/annonces?q=rizom&limit=5"

# Bir ilanın detayı (ilişkileriyle: şirketler + kişiler)
curl "https://bodacc.io/api/bodacc/annonces/A202601432266"

# Şirket profili (son ilanlar + yöneticiler + kamu ihaleleri)
curl "https://bodacc.io/api/bodacc/entreprises/912969573"

# Genel istatistikler
curl "https://bodacc.io/api/bodacc/stats"

# Günlük hacim (son 30 gün)
curl "https://bodacc.io/api/bodacc/stats/daily30"
```

---

## 📡 Uç noktalar

### İlanlar

| Yöntem | Rota | Açıklama |
|---|---|---|
| `GET` | `/bodacc/annonces` | Arama: `q` (isim/SIREN), `famille`, `departement`, tarihler, `limit`/`offset` sayfalama |
| `GET` | `/bodacc/annonces/{id}` | Tam detay: `raw_data` + zenginleştirme + `relations` (bağlantılı şirketler ve kişiler) |
| `GET` | `/bodacc/enrichi/{id}` | Yapılandırılmış sürüm (siren, dénomination, NAF, dirigeants...) |
| `POST` | `/bodacc/enrichi/batch` | Toplu zenginleştirme |

### Şirketler ve kişiler

| Yöntem | Rota | Açıklama |
|---|---|---|
| `GET` | `/bodacc/entreprises` | Şirket arama (isim, şehir, NAF, posta kodu) |
| `GET` | `/bodacc/entreprises/{siren}` | INSEE profili + `annonces_recentes`, `dirigeants`, `marches_publics`, `stats` |
| `GET` | `/bodacc/entreprises/by-slug/{slug}` | SEO slug ile profil |
| `GET` | `/bodacc/personnes/{id}` | Kişi profili: görevler (roller) + bağlantılı şirketler |

### İstatistikler

| Yöntem | Rota | Açıklama |
|---|---|---|
| `GET` | `/bodacc/stats` | Toplamlar, aileye göre, tarihe göre |
| `GET` | `/bodacc/stats/daily` | Günün hacmi (yayına, departmana, aileye göre) |
| `GET` | `/bodacc/stats/daily30` | Son 30 günün serisi |
| `GET` | `/bodacc/stats/counts` | Sayaçlar: ilanlar, şirketler, kişiler |
| `GET` | `/bodacc/graph/categories` | Kategoriye göre dağılım |

### Uyarılar ve entegrasyonlar

| Yöntem | Rota | Açıklama |
|---|---|---|
| `GET/POST/DELETE` | `/bodacc/alertes` | SIREN'e göre uyarılar (şirket takibi) |
| `POST` | `/bodacc/ingest?target_date=YYYY-MM-DD` | Bir tarih için alım tetikleme |
| `POST` | `/bodacc/import` | Toplu içe aktarma (backfill) |

### NAF referansı (INSEE)

| Yöntem | Rota | Açıklama |
|---|---|---|
| `GET` | `/bodacc/naf` | Tam NAF rev. 2 referansı (732 alt sınıf, 615 sınıf) — resmi INSEE etiketleri |
| `GET` | `/bodacc/naf?q=commerce` | Etikete göre NAF arama |
| `GET` | `/bodacc/naf?code=46.72Z` | Bir NAF kodunun fişi |

---

## 📊 Veriler

Sayfanın üst kısmındaki rozetler **gerçek zamanlı sayaçlardır**: BODACC ilanları, SIRENE şirketleri ve çıkarılan kişiler — geçmişin konsolidasyonu ve zenginleştirme ilerledikçe değişirler.

Sabit referans noktaları:

- 📰 **BODACC İlanları**: 2004'ten beri tam geçmiş, her sabah 09:00'dan önce güncellenir
- 🏢 **Şirketler (SIRENE)**: 29,8 M Fransız tüzel kişiliği (INSEE kaydı)
- 👤 **Çıkarılan kişiler**: yöneticiler, tasfiye memurları, bağımsız denetçiler... sürekli konsolidasyonda
- 📦 **Kamu ihaleleri (BOAMP)**: 2015 → 2026 arası 1,69 M kamu sözleşmesi

---

## 🛠 Teknoloji

| Katman | Teknoloji |
|---|---|
| **API** | Python · FastAPI · PostgreSQL 16 |
| **Veri** | Trigram indeksleme, tam metin arama, JSONB |
| **Alım** | Otomatik boru hattı, günlük entegrasyon, idempotent |
| **Zenginleştirme** | Hibrit çıkarma (iş kuralları + yapay zeka) |
| **Ön yüz** | Next.js · i18n 20 dil |
| **Altyapı** | Docker · Cloudflare (CDN, önbellek, DNSSEC) |
| **Yapay zeka ajanları** | MCP sunucusu · DNS-AID · auth.md · llms.txt |

---

## 🔓 Açık veri

Kaynak veriler kamuya açık ve ücretsizdir:

- **BODACC**: [data.gouv.fr / DILA](https://www.data.gouv.fr/fr/datasets/bodacc-annonces-commerciales/) (yasal ilanlar)
- **SIRENE**: [INSEE](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/) (29,8 M tüzel kişilik)
- **BOAMP**: [Opendatasoft / DILA](https://boamp-datadila.opendatasoft.com) (kamu ihaleleri)

**BODACC-api bu ham veriye yapıyı ve grafiği ekler**: hukuki metinlerin analizi, kimlik çözümleme (kişiler), şirket ↔ ilan ↔ sözleşme bağlantıları.

---

## 🌐 Siteyi keşfedin

[Ana Sayfa](https://bodacc.io/tr) · [İlanlar](https://bodacc.io/tr/annonces) · [Şirketler](https://bodacc.io/tr/entreprises) · [Kişiler](https://bodacc.io/tr/personnes) · [Fiyatlar](https://bodacc.io/tr/tarifs) · [Teknoloji](https://bodacc.io/tr/technologie)

---

## 📄 Lisans ve iletişim

- Lisans: MIT (kod) — veriler, üreticilerinin (DILA, INSEE) lisanslarına tabi olmaya devam eder
- Site: [bodacc.io](https://bodacc.io)
- Sorunlar ve PR'lar: bu depoda memnuniyetle karşılanır

---

*BODACC (Bulletin Officiel des Annonces Civiles et Commerciales), Fransız şirketlerinin yasal ilanlarının resmi yayınıdır. Bu proje DILA ile bağlantılı değildir.*
