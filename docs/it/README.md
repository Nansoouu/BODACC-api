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
> 📰 [Il riepilogo completo](recaps/README.md) · 🏠 [Dietro le quinte di BODACC.io](coulisses/COULISSES.md)

<div align="center">

![Python 3.12](https://img.shields.io/badge/Python-3.12-3776AB?logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-API-009688?logo=fastapi&logoColor=white)
![PostgreSQL 16](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)

![Annonces](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Annunci&color=blue)
![Entreprises](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Aziende&color=green)
![Personnes](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Persone&color=orange)
![Site bodacc.io](https://img.shields.io/badge/bodacc.io-Explorer-important?logo=internetexplorer&logoColor=white&style=for-the-badge)

</div>

**L'API che trasforma gli annunci legali francesi in dati strutturati, collegati e sfruttabili — in tempo reale.**

Il BODACC (Bollettino Ufficiale degli Annunci Civili e Commerciali) è la pubblicazione ufficiale che ricostruisce la vita giuridica delle imprese francesi: creazioni, modifiche, cancellazioni, procedure collettive, vendite, depositi di bilanci. Questi testi sono pubblici, ma restano allo stato di documenti grezzi: non sono né strutturati, né collegati tra loro, né facilmente interrogabili.

**BODACC-api li rende sfruttabili.** Ogni annuncio viene automaticamente analizzato e trasformato in dati strutturati (SIREN, ragione sociale, indirizzo, NAF, dirigenti, importi...), poi collegato alla sua impresa e alle persone che vi compaiono. Risultato: un grafo completo della vita economica francese, interrogabile con una singola richiesta HTTP.

> 🌐 Sito: [bodacc.io](https://bodacc.io) · 📖 Swagger: [https://bodacc.io/api/bodacc/docs](https://bodacc.io/api/bodacc/docs) · 💶 [Tariffe](https://bodacc.io/it/tarifs)

---

## ✨ Perché BODACC-api?

| | |
|---|---|
| 🗂 **Tutto lo storico, dal 2004** | Milioni di annunci in archivio, copertura completa — non una finestra mobile |
| ⚡ **Tempo reale** | Gli annunci del giorno sono disponibili ogni mattina, prima dell'apertura degli uffici |
| 🕸 **Un grafo, non file** | Annuncio → impresa (SIREN) → dirigenti → incarichi → appalti pubblici: tutto è collegato e interrogabile con una sola richiesta |
| ✨ **Dal testo grezzo ai dati strutturati** | SIREN, NAF, indirizzo, dirigenti, procedure... estratti automaticamente da ogni testo giuridico |
| 🌍 **20 lingue** | L'interfaccia e i contenuti sono tradotti — i vostri team e i vostri clienti parlano la loro lingua |
| 🤖 **Agent-ready** | 100/100 all'audit isitagentready (DNSSEC, DNS-AID, auth.md, WebMCP, llms.txt) |
| 🚪 **Zero attriti per testare** | Tutti gli endpoint di lettura sono accessibili senza chiave — valutate prima di pagare |

---

## 🏭 Il nostro valore aggiunto: la pipeline

Ciò che fa la differenza non sono i dati grezzi (sono pubblici), ma ciò che ne facciamo — ogni giorno, automaticamente:

**1. Un'ingestione affidabile e completa.** Ogni mattina prima delle 09:00, i nuovi annunci pubblicati dalla DILA vengono integrati nel nostro database. Lo storico completo risale al 2004, ben oltre ciò che offre la consultazione pubblica. Rieseguire un'ingestione non crea alcun duplicato: i nostri dati sono verificati e coerenti in modo permanente.

**2. Un arricchimento intelligente.** Ogni annuncio è un testo giuridico — il nostro motore di estrazione ibrido (regole di business + IA) lo trasforma in dati strutturati: numero SIREN, ragione sociale, indirizzo, codice NAF, dirigenti, incarichi, importi, procedure. Ciò che richiede ore di lettura umana diventa campi JSON interrogabili.

**3. Un grafo relazionale.** Un annuncio di procedura collettiva vale solo se si sa a quale impresa si riferisce e chi ne è il dirigente. Il nostro motore di risoluzione collega ogni annuncio alla sua impresa (SIREN), ogni persona ai suoi incarichi, ogni appalto pubblico al suo aggiudicatario. Interrogate la vita economica francese come un database — non come un mucchio di PDF.

**4. Una diffusione in tempo reale.** Non appena un annuncio viene pubblicato, è disponibile tramite l'API, con le sue relazioni e il suo arricchimento. Nessun file da scaricare, nessun ETL da mantenere: una richiesta HTTP è sufficiente.

---

## ⚖️ Confronto: dove ci collochiamo

| | **Sito ufficiale (bodacc.fr)** | **Pappers** | **BODACC.io** |
|---|---|---|---|
| **Storico** | Solo dal 2008 | Storico commerciale in base all'abbonamento | **Completo dal 2004** |
| **API** | ❌ Nessuna | API riservata alle offerte superiori | ✅ **API REST documentata, senza chiave in lettura** |
| **Dati strutturati** | ❌ Consultazione PDF | ✅ Profili arricchiti | ✅ **Annunci + grafo imprese/persone/appalti** |
| **Tempo reale** | Pubblicazione cartacea consultabile online | Aggiornamento quotidiano | ✅ **Ogni mattina prima delle 09:00** |
| **Prezzo** | Gratuito, ma limitato | A partire da **29,90 €/mese** per l'accesso base | **Piani accessibili, a partire dalla gratuità per esplorare** |
| **Pubblico** | Grande pubblico | Professionisti (conformità, monitoraggio) | **Sviluppatori, fintech, legaltech, data team** |

**Punti di forza del sito ufficiale**: gratuito, affidabile, ufficiale. **Punti deboli**: nessuna API, storico limitato al 2008, nessun dato strutturato — si resta nei PDF.

**Punti di forza di Pappers**: interfaccia molto curata, aggregazione INSEE + INPI + BODACC, monitoraggio integrato. **Punti deboli**: il prezzo (29,90 €/mese per l'accesso base, l'API e lo storico completo sono più costosi), una soluzione orientata alla consultazione piuttosto che ai dati sfruttabili.

**La nostra posizione**: **tutto lo storico dal 2004, più velocemente del sito ufficiale — e a un prezzo inferiore a quello di Pappers.** Pensato per chi vuole collegare i dati ai propri strumenti, non per chi vuole un altro schermo.

> 💶 Vedi i piani: [bodacc.io/it/tarifs](https://bodacc.io/it/tarifs) — Gratuito · Pro · Enterprise · LIFE

---

## 🚀 Provare in 30 secondi

Tutti gli endpoint di lettura sono accessibili **senza chiave**:

```bash
# Cercare un'impresa per nome
curl "https://bodacc.io/api/bodacc/annonces?q=rizom&limit=5"

# Dettaglio di un annuncio (con le sue relazioni: imprese + persone)
curl "https://bodacc.io/api/bodacc/annonces/A202601432266"

# Profilo impresa (annunci recenti + dirigenti + appalti pubblici)
curl "https://bodacc.io/api/bodacc/entreprises/912969573"

# Statistiche globali
curl "https://bodacc.io/api/bodacc/stats"

# Volume giornaliero (ultimi 30 giorni)
curl "https://bodacc.io/api/bodacc/stats/daily30"
```

---

## 📡 Gli endpoint

### Annunci

| Metodo | Route | Descrizione |
|---|---|---|
| `GET` | `/bodacc/annonces` | Ricerca: `q` (nome/SIREN), `famille`, `departement`, date, paginazione `limit`/`offset` |
| `GET` | `/bodacc/annonces/{id}` | Dettaglio completo: `raw_data` + arricchimento + `relations` (imprese e persone collegate) |
| `GET` | `/bodacc/enrichi/{id}` | Versione strutturata (siren, denominazione, NAF, dirigenti...) |
| `POST` | `/bodacc/enrichi/batch` | Arricchimento per lotto |

### Imprese & persone

| Metodo | Route | Descrizione |
|---|---|---|
| `GET` | `/bodacc/entreprises` | Ricerca impresa (nome, città, NAF, codice postale) |
| `GET` | `/bodacc/entreprises/{siren}` | Profilo INSEE + `annonces_recentes`, `dirigeants`, `marches_publics`, `stats` |
| `GET` | `/bodacc/entreprises/by-slug/{slug}` | Profilo per slug SEO |
| `GET` | `/bodacc/personnes/{id}` | Profilo persona: incarichi (ruoli) + imprese collegate |

### Statistiche

| Metodo | Route | Descrizione |
|---|---|---|
| `GET` | `/bodacc/stats` | Totali, per famiglia, per data |
| `GET` | `/bodacc/stats/daily` | Volume del giorno (per pubblicazione, dipartimento, famiglia) |
| `GET` | `/bodacc/stats/daily30` | Serie degli ultimi 30 giorni |
| `GET` | `/bodacc/stats/counts` | Contatori: annunci, imprese, persone |
| `GET` | `/bodacc/graph/categories` | Ripartizione per categoria |

### Avvisi & integrazioni

| Metodo | Route | Descrizione |
|---|---|---|
| `GET/POST/DELETE` | `/bodacc/alertes` | Avvisi per SIREN (monitoraggio impresa) |
| `POST` | `/bodacc/ingest?target_date=YYYY-MM-DD` | Attivare un'ingestione per una data |
| `POST` | `/bodacc/import` | Import per lotto (backfill) |

### Repertorio NAF (INSEE)

| Metodo | Route | Descrizione |
|---|---|---|
| `GET` | `/bodacc/naf` | Repertorio NAF rev. 2 completo (732 sottoclassi, 615 classi) — etichette ufficiali INSEE |
| `GET` | `/bodacc/naf?q=commerce` | Ricerca NAF per etichetta |
| `GET` | `/bodacc/naf?code=46.72Z` | Scheda di un codice NAF |

---

## 📊 I dati

I badge in cima alla pagina sono **contatori in tempo reale**: annunci BODACC, imprese SIRENE e persone estratte — evolvono con il consolidamento dello storico e dell'arricchimento.

Riferimenti stabili:

- 📰 **Annunci BODACC**: storico completo dal 2004, aggiornato ogni mattina prima delle 09:00
- 🏢 **Imprese (SIRENE)**: 29,8 M di unità legali francesi (registro INSEE)
- 👤 **Persone estratte**: dirigenti, liquidatori, revisori dei conti... in consolidamento continuo
- 📦 **Appalti pubblici (BOAMP)**: 1,69 M di contratti pubblici 2015 → 2026

---

## 🛠 Tecnologia

| Livello | Tecnologia |
|---|---|
| **API** | Python · FastAPI · PostgreSQL 16 |
| **Dati** | Indicizzazione trigram, ricerca full-text, JSONB |
| **Ingestione** | Pipeline automatizzata, integrazione quotidiana, idempotente |
| **Arricchimento** | Estrazione ibrida (regole di business + IA) |
| **Frontend** | Next.js · i18n 20 lingue |
| **Infra** | Docker · Cloudflare (CDN, cache, DNSSEC) |
| **Agenti IA** | Server MCP · DNS-AID · auth.md · llms.txt |

---

## 🔓 Open data

I dati sorgente sono pubblici e gratuiti:

- **BODACC**: [data.gouv.fr / DILA](https://www.data.gouv.fr/fr/datasets/bodacc-annonces-commerciales/) (annunci legali)
- **SIRENE**: [INSEE](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/) (29,8 M unità legali)
- **BOAMP**: [Opendatasoft / DILA](https://boamp-datadila.opendatasoft.com) (appalti pubblici)

**BODACC-api aggiunge la struttura e il grafo su questi dati grezzi**: analisi dei testi giuridici, risoluzione dell'identità (persone), collegamenti impresa ↔ annuncio ↔ contratto.

---

## 🌐 Esplorare il sito

[Home](https://bodacc.io/it) · [Annunci](https://bodacc.io/it/annonces) · [Imprese](https://bodacc.io/it/entreprises) · [Persone](https://bodacc.io/it/personnes) · [Tariffe](https://bodacc.io/it/tarifs) · [Tecnologia](https://bodacc.io/it/technologie)

---

## 📄 Licenza & contatti

- Licenza: MIT (codice) — i dati restano soggetti alle licenze dei loro produttori (DILA, INSEE)
- Sito: [bodacc.io](https://bodacc.io)
- Issues & PR: benvenute su questo repository

---

*Il BODACC (Bollettino Ufficiale degli Annunci Civili e Commerciali) è la pubblicazione ufficiale degli annunci legali delle imprese francesi. Questo progetto non è affiliato alla DILA.*
