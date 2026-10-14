<div align="center">

# BODACC.io : Fransız resmî ilanları ve şirket verileri için BODACC API

**Her Fransız şirket bildirimi, gerçek zamanlı olarak.** Şirket kuruluşları, değişiklikler, finansal
tablo beyanları, iflas prosedürleri, satışlar, kayıt silme işlemleri — şirketine, yöneticilerine ve
resmî kaynağına bağlanan her BODACC ilanı. Ücretsiz ve açık, 20 dilde.

[**bodacc.io**](https://bodacc.io) · [API belgeleri](https://bodacc.io/tr/dokumanlar) · [Swagger](https://bodacc.io/api/bodacc/docs) · [RSS](https://bodacc.io/rss.xml)

</div>

## 1. Canlı BODACC verileri

| BODACC veri kümesi | Kayıt | Canlı |
|---|---|---|
| BODACC resmî ilanları | 51 043 403 | ![İlanlar](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=İlanlar&color=blue) |
| Fransız şirketleri | 30 032 566 | ![Şirketler](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Şirketler&color=green) |
| Yöneticiler ve yetkililer | 4 935 692 | ![Kişiler](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Kişiler&color=orange) |
| Kamu ihaleleri (BOAMP) | 1 716 163 | ![Sözleşmeler](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=boamp&label=Sözleşmeler&color=purple) |

Bu rakamlar kopyala yapıştır değildir: **doğrudan BODACC API tarafından canlı olarak sunulur**, şu adreste:
[`/api/bodacc/stats/counts-formatted`](https://bodacc.io/api/bodacc/stats/counts-formatted).
Kendiniz kontrol edin, sonra yarın yeniden kontrol edin.

**Bugün** (14 Ekim 2026): **5 920 ilan** — en sık görülen aile: finansal tablo beyanları (2 306).

| BODACC ailesi | Bugünkü ilanlar |
|---|---|
| Finansal tablo beyanları | 2 306 |
| Şirket kuruluşları | 1 415 |
| Değişiklikler | 1 193 |
| Kayıt silme işlemleri | 500 |
| İflas prosedürleri | 323 |
| Tescil işlemleri | 118 |
| Satışlar ve devirler | 65 |

## 2. BODACC API size neler sunar

BODACC (Bulletin Officiel des Annonces Civiles et Commerciales), Fransız şirket yaşamının resmî
yayın organıdır. Her kuruluş, her finansal tablo beyanı, her iflas, her satış kanunen orada
yayımlanır. BODACC.io bu yayın organını sorgulanabilir bir veritabanına dönüştürür.

**Çoğu şirket veritabanı size bir anlık görüntü verir. BODACC API size hareketi verir.**

Bir dizin size şirketin var olduğunu söyler: adı, adresi, tescil numarası. BODACC ise size
**şirketin az önce ne yaptığını** ve ne zaman yaptığını söyler. Bütün mesele bu farkta:

| | Şirket dizinleri | BODACC.io |
|---|---|---|
| Elde ettiğiniz | donmuş bir kimlik kaydı | tarihli olaylar |
| Güncellik | üç ayda bir yenilenir | aynı sabah yayımlanır |
| İflas | bir durum bayrağı | prosedür, niteliği ve tarihi |
| Finansal tablolar | mantıksal bir "bildirildi" | her beyan, kapanış tarihiyle |
| Yöneticiler | bir ad | her görev, şirketleriyle birlikte |
| Kaynak | bir kopya | resmî ilan ve PDF'i |

## 3. BODACC resmî ilanları, ayrıntılı olarak

Her ilan 23 alan taşır. İşte BODACC API'nin döndürdüğü şekliyle gerçek bir ilan:

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

Her ilan, resmî kaynağın ve PDF'in bir tık uzakta olduğu **bodacc.io üzerindeki tam sayfasına**
bağlantı verir.

Yedi BODACC ailesi ve veride göreceğiniz Fransızca terim:

| BODACC ailesi | Veride | Ne anlama gelir |
|---|---|---|
| Şirket kuruluşları | `creation` | yeni bir şirket tescil edilir |
| Değişiklikler | `modification` | esas sözleşme, yönetim, adres, sermaye değişikliği |
| Finansal tablo beyanları | `dpc` | mahkeme kâtibliğine bildirilen yıllık finansal tablolar |
| İflas prosedürleri | `collective` | konkordato, tasfiye, yeniden yapılandırma |
| Satışlar ve devirler | `vente` | bir işletme satılır veya devredilir |
| Kayıt silme işlemleri | `radiation` | şirket sicilden silinir |
| Tescil işlemleri | `immatriculation` | ticaret siciline tescil |

## 4. BODACC şirket kayıtları

Her ilan arkasındaki şirketi gösterir. BODACC API bu şirketleri kimlik, faaliyet ve muhasebe
geçmişiyle birlikte sunar:

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

Kimliğin ötesinde: faaliyet kodu (NAF), hukuki biçim, idari durum, **son finansal tablo beyanının
tarihi, son kapanış tarihi ve o tarihten bu yana geçen gün sayısı**, ayrıca bir şirketin
taşıyabileceği etiketler — sosyal ekonomi, bio, RGE, Qualiopi.

## 5. BODACC yöneticileri ve yetkilileri

Her şirketin arkasında onu yöneten insanlar vardır. BODACC API **4,9 milyon yöneticiyi, yetkiliyi,
tasfiye memurunu ve denetçiyi** listeler; her biri şunlarla birlikte:

- şirket şirket görevleri ve ilgili dönem
- diğer şirketleri, böylece bir kişiyi kariyeri boyunca takip edebilirsiniz
- kendilerini ilgilendiren ilanlar

Bir sicili grafiğe dönüştüren şey budur: bir şirket, yöneticileri ve bu yöneticilerin de yönettiği
şirketler. Tek bir endpoint bunu doğrudan sunar.

## 6. BODACC API

REST, JSON, açık endpointlerde anahtar gerekmez, çağrı başına 500 kayda kadar, `offset` ile sayfalanır.

```bash
# En son BODACC ilanları (her zaman en yenisi önce)
curl "https://bodacc.io/api/bodacc/annonces?limit=100"

# Tek bir ilan, şirketleri, yöneticileri ve PDF'i ile birlikte
curl "https://bodacc.io/api/bodacc/annonces/C202601972306-depot-comptes-988208435-141026-holding-biiz"

# SIREN ile bir şirket
curl "https://bodacc.io/api/bodacc/entreprises/552081317"

# O şirkete ilişkin her BODACC ilanı
curl "https://bodacc.io/api/bodacc/entreprises/552081317/annonces"

# Şirket grafiği: yöneticiler ve diğer şirketleri
curl "https://bodacc.io/api/bodacc/entreprises/552081317/graphe"

# Ad, şehir, departman, faaliyet kodu veya tarih aralığına göre arama
curl "https://bodacc.io/api/bodacc/entreprises?q=eiffage&departement=75"
curl "https://bodacc.io/api/bodacc/annonces?famille=collective&date_debut=2026-10-01"
```

Tam başvuru kaynağı: [bodacc.io/tr/dokumanlar](https://bodacc.io/tr/dokumanlar) — endpoint endpoint,
bir Swagger arayüzü ve yayımlanmış bir OpenAPI tanımıyla, 20 dilde.

## 7. BODACC veri kümeleri ve dışa aktarımlar

API'nin ötesinde, bodacc.io'nun her sayfası kalıcı ve taranabilir bir URL'dir — resmî ilanlar,
şirketler, yöneticiler, bölgeler, şehirler, istatistikler — ve site makine tarafından okunabilir
giriş noktaları yayımlar:

- [Site haritaları](https://bodacc.io/sitemap.xml) — dil başına tam URL envanteri
- [API kataloğu](https://bodacc.io/.well-known/api-catalog) — aracılar tarafından keşfedilebilir
- [RSS](https://bodacc.io/rss.xml) — günlük akış
- [URL listesi](URLLIST.md) — her giriş noktası, dil başına bir liste

## 8. BODACC kapsamı ve güncelliği

BODACC hafta sonları değil, iş günlerinde yayımlanır. BODACC.io her yayımı toplar ve **aynı sabah**,
genellikle yayımdan birkaç dakika sonra erişilebilir kılar. Her ilan yayım tarihini korur, böylece
neyin yeni olduğunu her zaman söyleyebilirsiniz.

## 9. BODACC neler için kullanılır

- **Uyum ve KYC** — imzadan önce karşı tarafın gerçek durumunu kontrol edin, üç ay önceki durumunu değil
- **Durum tespiti** — bir şirketin bildirimlerini, finansal tablolarını ve iflas geçmişini izleyin
- **Kredi ve risk skorlaması** — iflas prosedürleri ve finansal tablo beyanları en erken sinyallerdir
- **Satış istihbaratı** — yeni bir tescil, gerçekleştiği gün yeni bir potansiyel müşteridir
- **Gazetecilik** — kaynaklı ve tarihli şirket düzeyinde olgular
- **Araştırma** — en eski sicillerden bu sabaha 51 milyon bildirim
- **Hukuk ve muhasebe** — adına işlem yaptığınız şirketleri ve ne bildirdiklerini bulun

## 10. BODACC hakkında sık sorulan sorular

**BODACC.io resmî BODACC mı?**

Hayır. BODACC.io, kamuya açık BODACC verilerini kullanılabilir ve sorgulanabilir kılan bağımsız bir
hizmettir. DILA ile veya herhangi bir kamu kurumuyla bağlantılı değildir. Her ilan kendi resmî
kaynağına geri bağlanır.

**BODACC API ücretsiz mi?**

Açık endpointler ücretsizdir ve anahtar gerektirmez. Yoğun kullanım için ücretli paketler vardır —
[fiyatlara bakın](https://bodacc.io/tr/fiyatlar).

**BODACC ile bir şirket dizini arasındaki fark nedir?**

Bir dizin size şirketin kimliğini verir. BODACC size faaliyetini verir: neyi ne zaman bildirdiğini
ve mahkemenin onun hakkında ne yayımladığını. İkisi birbirini tamamlar — BODACC.io kimliği de taşır.

**Veriler ne kadar güncel?**

İlanlar yayımlandıkları sabah görünür. Şirket kayıtları ilanlar geldikçe güncellenir.

**Çağrı başına kaç kayıt?**

500'e kadar, sayfalama için `offset` ile. Açık endpointlerde çağrı sayısında bir sınır yoktur.

**Üretimde kullanabilir miyim?**

Evet. API belgelenmiştir, sürümlenmiştir ve Cloudflare üzerinden sunulur.
[bodacc.io](https://bodacc.io) adresine atıf memnuniyetle karşılanır.

**Hangi diller destekleniyor?**

Site ve belgeleri 20 dilde mevcuttur. API'nin kendisi dilden bağımsızdır: slug'ları ve endpointleri
herkes için aynıdır.

## 11. Dile göre BODACC belgeleri

Aşağıdaki her klasör, BODACC belgelerinin tamamını kendi dilinde içerir: API başvuru kaynağı, URL
listesi ve günlük özetler.

| # | Dil | Belgeler | URL'ler | Günlük veriler |
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

## 12. BODACC bağlantıları

- [BODACC.io](https://bodacc.io) — canlı site
- [Şirket arama](https://bodacc.io/tr/sirketler) · [Resmî ilanlar](https://bodacc.io/tr/ilanlar) · [Yöneticiler](https://bodacc.io/tr/kisiler)
- [API belgeleri](https://bodacc.io/tr/dokumanlar) · [Swagger arayüzü](https://bodacc.io/api/bodacc/docs)
- [Fiyatlar](https://bodacc.io/tr/fiyatlar) · [Teknoloji](https://bodacc.io/tr/teknoloji)
- [URL listesi (çok dilli dizin)](URLLIST.md)

---

*BODACC (Bulletin Officiel des Annonces Civiles et Commerciales), Fransız şirketlerinin resmî
ilanlarının yayım organıdır. BODACC.io bağımsız bir hizmettir ve DILA ile bağlantılı değildir.*
