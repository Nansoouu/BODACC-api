# 🏠 BODACC.io'nun perde arkası

BODACC.io, Fransız şirketlerinin resmî ilanlarını **kolayca incelenebilir**
hâle getirir. Peki bu veriler nereden geliyor? Ekranınıza nasıl ulaşıyor?

Her gün perde arkasında çalışan küçük bir otomatik çalışan ekibi var. İşte
onların hikâyesi.

---

## 🌅 Sabah : postacı

Her sabah çok erken saatlerde **postacımız** önceki günün resmî ilanlarını
almaya gider: şirket kuruluşları, yönetici değişiklikleri, tasfiyeler, hesap
ibrazları... Hepsini, tek bir tanesini bile kaybetmeden geri getirir ve
büyük kütüphanemizde düzenler.

> 👤 **Thom tarafından canlandırılıyor** — veri toplama ajanı: her gün resmî
> ilanları toplar ve veritabanı için yapılandırır. Makineyi döndüren odur.

→ [Postacının işini keşfedin](le-facteur/README.md)

## 📖 Sonra : çevirmen

Resmî ilanlar, idari dille yazılmış ve okuması her zaman kolay olmayan
metinlerdir. **Çevirmenimiz** hepsini okur ve net kayıtlara dönüştürür:
şirketin adı, adresi, faaliyeti, yöneticileri, tutarlar...

→ [Çevirmenin işini keşfedin](le-traducteur/README.md)

## 🔍 Ardından : araştırmacı

Kayıt hazır olduğunda, **araştırmacımız** onu şirketin **kamuya açık**
bilgileriyle tamamlar: web sitesi, telefonu, sosyal ağları. Özel hiçbir şey,
gizli hiçbir şey — yalnızca şirketin kendi gösterdikleri.

> 👤 **Elysa tarafından canlandırılıyor** — zenginleştirme ajanı: şirket
> kayıtlarını tamamlar (web sitesi, telefon, yöneticilerin sosyal ağları).
> Yalnızca kamuya açık verileri toplar: yasak yerlerde hiçbir şey aranmaz.

→ [Araştırmacının işini keşfedin](lenqueteur/README.md)

## 🧩 Aynı anda : kişi bulmacası

Her ilan insanlardan bahseder: yöneticiler, tasfiye memurları, denetçiler.
**Bulmacamız** her kişiyi şirketleriyle ilişkilendirir; böylece "kim ne
yapıyor" kolayca bulunabilir.

→ [Kişi bulmacasını keşfedin](le-puzzle/README.md)

## 🗺️ Ve coğrafyacı

**Coğrafyacımız** her şirketin haritada (Google Maps) gerçekten var olup
olmadığını kontrol eder: adresi, kategorisi, puanı. Böylece kayıt, şirketin
gerçek hayattaki varlığını da gösterir.

→ [Coğrafyacının işini keşfedin](le-geographe/README.md)

## 📚 Son olarak : sözleşme kütüphanesi

Kamu ihaleleri (idareler tarafından verilen sözleşmeler) de
**kütüphanemizde** arşivlenir: bir milyondan fazla sözleşme, serbestçe
incelenebilir.

→ [Sözleşme kütüphanesini keşfedin](la-bibliotheque/README.md)

---

## 👥 Perde arkasındaki ekip

| Kişi | Rol | Alan |
|---|---|---|
| **Nansou** | Proje lideri | Vizyon, strateji, içerik — her şeyi o yönetir |
| **Thom** | Veri toplama ajanı | Postacı: her gün ilanları toplamak |
| **Elysa** | Zenginleştirme ajanı | Araştırmacı: kamuya açık kayıtları tamamlamak |
| **Karan** | Uluslararası ve SEO ajanı | Çeviriler, uluslararası görünürlük |
| **Ruby** | Denetim ajanı | Her şeyin sürekli çalıştığını kontrol etmek |

---

## 📊 Canlı sayaçlar

![İlanlar](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=İlanlar&color=blue)
![Şirketler](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Şirketler&color=green)
![Kişiler](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Kişiler&color=orange)

Bu rakamlar gerçektir ve her gün değişir. Her sabah postacı kendi partisini
getirir, çevirmen okur ve herkes gelip inceleyebilir.

---

## 📅 Günlük

Her çalışan küçük bir günlük tutar: gün içinde kaç belge işlendiği ve
yapılan küçük iyileştirmeler. Her kayıtta bulunur:

| Tarih | Gelen ilanlar | Okunan kayıtlar | Küçük iyileştirmeler |
|---|---|---|---|
| _(her gün doldurulur)_ | | | |

## 🔍 Kendiniz kontrol edin

Her şey kamuya açık ve ücretsizdir — herkes doğrulayabilir:

- Son ilanlar: [`https://bodacc.io/tr/annonces`](https://bodacc.io/tr/annonces)
- Canlı sayaçlar: [`https://bodacc.io/api/bodacc/stats/counts`](https://bodacc.io/api/bodacc/stats/counts)
- Bir şirket: [`https://bodacc.io/tr/entreprises/514494491`](https://bodacc.io/tr/entreprises/514494491)

---

*Bu belge, BODACC-api açık kaynak deposunun bir parçasıdır. Ne yaptığımızı
basitçe anlatır — iç yöntemlerimizi ifşa etmeden.*
