<div align="center">

# BODACC.io : l'API BODACC degli annunci legali francesi e dei dati sulle imprese

**Ogni pubblicazione di impresa francese, in tempo reale.** Costituzioni, modifiche, depositi di bilanci,
procedure collettive, vendite, cancellazioni — ogni annuncio del BODACC, collegato alla sua impresa, ai suoi
amministratori e alla sua fonte ufficiale. Gratuito e aperto, in 20 lingue.

[**bodacc.io**](https://bodacc.io) · [Documentazione dell'API](https://bodacc.io/it/documentazione) · [Swagger](https://bodacc.io/api/bodacc/docs) · [RSS](https://bodacc.io/rss.xml)

</div>

## 1. Dati BODACC in tempo reale

| Set di dati BODACC | Record | In diretta |
|---|---|---|
| Annunci legali del BODACC | 51 043 403 | ![Annunci](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Annunci&color=blue) |
| Imprese francesi | 30 032 566 | ![Imprese](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Imprese&color=green) |
| Amministratori e cariche | 4 935 692 | ![Persone](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Persone&color=orange) |
| Contratti pubblici (BOAMP) | 1 716 163 | ![Contratti](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=boamp&label=Contratti&color=purple) |

Questi numeri non sono copiati e incollati: **li serve in diretta la stessa API BODACC**, su
[`/api/bodacc/stats/counts-formatted`](https://bodacc.io/api/bodacc/stats/counts-formatted).
Verificali tu stesso, e verificali di nuovo domani.

**Oggi** (14 ottobre 2026): **5 920 annunci** — famiglia più frequente: Depositi di bilanci (2 306).

| Famiglia BODACC | Annunci di oggi |
|---|---|
| Depositi di bilanci | 2 306 |
| Creazioni | 1 415 |
| Modifiche | 1 193 |
| Cancellazioni | 500 |
| Procedure collettive | 323 |
| Iscrizioni | 118 |
| Vendite e cessioni | 65 |

## 2. Che cosa ti offre l'API BODACC

Il BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) è il giornale ufficiale della vita
giuridica delle imprese francesi. Ogni costituzione, ogni deposito di bilanci, ogni insolvenza, ogni vendita
vi è pubblicata per legge. BODACC.io trasforma quel giornale in un database che puoi interrogare.

**La maggior parte dei database di imprese ti offre un'istantanea. L'API BODACC ti offre il movimento.**

Una directory ti dice che un'impresa esiste: il suo nome, il suo indirizzo, il suo numero di registrazione.
Il BODACC ti dice **che cosa l'impresa ha appena fatto**, e quando. È proprio questa la differenza:

| | Directory di imprese | BODACC.io |
|---|---|---|
| Che cosa ottieni | una scheda di identità congelata | eventi datati |
| Aggiornamento | aggiornata ogni trimestre | pubblicata la stessa mattina |
| Insolvenza | un indicatore di stato | il procedimento, la sua natura e la sua data |
| Bilanci | un booleano «depositato» | ogni deposito, con la sua data di chiusura |
| Amministratori | un nome | ogni mandato, con le sue imprese |
| Fonte | una copia | l'annuncio ufficiale e il suo PDF |

## 3. Gli annunci legali del BODACC nel dettaglio

Ogni annuncio contiene 23 campi. Eccone uno reale, esattamente come lo restituisce l'API BODACC:

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

Ogni annuncio rimanda a **la sua pagina completa su bodacc.io**, dove la fonte ufficiale e il suo PDF sono
a un clic.

Le sette famiglie del BODACC, con il termine francese che vedrai nei dati:

| Famiglia BODACC | Nei dati | Che cosa significa |
|---|---|---|
| Creazioni | `creation` | una nuova impresa viene registrata |
| Modifiche | `modification` | statuto, amministrazione, sede, variazione di capitale |
| Depositi di bilanci | `dpc` | bilancio annuale depositato presso la cancelleria del tribunale |
| Procedure collettive | `collective` | amministrazione controllata, liquidazione, risanamento |
| Vendite e cessioni | `vente` | un'azienda viene venduta o trasferita |
| Cancellazioni | `radiation` | l'impresa viene cancellata dal registro |
| Iscrizioni | `immatriculation` | iscrizione al registro delle imprese |

## 4. Le schede di impresa del BODACC

Ogni annuncio rimanda all'impresa che vi sta dietro. L'API BODACC espone queste imprese con l'identità,
l'attività e la storia dei bilanci:

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

Oltre all'identità: il codice di attività (NAF), la forma giuridica, lo stato amministrativo, **la data
dell'ultimo deposito di bilanci, l'ultima data di chiusura e il numero di giorni trascorsi**, più le
etichette che un'impresa può avere — economia sociale, bio, RGE, Qualiopi.

## 5. Amministratori e cariche del BODACC

Dietro ogni impresa ci sono le persone che la guidano. L'API BODACC elenca **4,9 milioni di amministratori,
cariche, liquidatori e revisori contabili**, ognuno con:

- i suoi mandati, impresa per impresa, con il periodo interessato
- le sue altre imprese, così puoi seguire una persona lungo tutta una carriera
- gli annunci che la riguardano

È questo che trasforma un registro in un grafo: un'impresa, i suoi amministratori e le imprese che quegli
amministratori guidano a loro volta. Un solo endpoint lo espone direttamente.

## 6. L'API BODACC

REST, JSON, nessuna chiave richiesta sugli endpoint aperti, fino a 500 record per chiamata, con paginazione
tramite `offset`.

```bash
# Gli ultimi annunci del BODACC (sempre i più recenti in testa)
curl "https://bodacc.io/api/bodacc/annonces?limit=100"

# Un singolo annuncio, con le sue imprese, i suoi amministratori e il suo PDF
curl "https://bodacc.io/api/bodacc/annonces/C202601972306-depot-comptes-988208435-141026-holding-biiz"

# Un'impresa tramite SIREN
curl "https://bodacc.io/api/bodacc/entreprises/552081317"

# Ogni annuncio del BODACC che riguarda quell'impresa
curl "https://bodacc.io/api/bodacc/entreprises/552081317/annonces"

# Il grafo dell'impresa: amministratori e le loro altre imprese
curl "https://bodacc.io/api/bodacc/entreprises/552081317/graphe"

# Ricerca per nome, città, dipartimento, codice di attività o intervallo di date
curl "https://bodacc.io/api/bodacc/entreprises?q=eiffage&departement=75"
curl "https://bodacc.io/api/bodacc/annonces?famille=collective&date_debut=2026-10-01"
```

Riferimento completo: [bodacc.io/it/documentazione](https://bodacc.io/it/documentazione) — endpoint per
endpoint, con interfaccia Swagger e specifica OpenAPI pubblicata, in 20 lingue.

## 7. Set di dati ed esportazioni del BODACC

Oltre all'API, ogni pagina di bodacc.io è un URL stabile e indicizzabile — annunci legali, imprese,
amministratori, regioni, città, statistiche — e il sito pubblica punti di accesso leggibili dalle macchine:

- [Sitemap](https://bodacc.io/sitemap.xml) — l'inventario completo degli URL, per lingua
- [Catalogo API](https://bodacc.io/.well-known/api-catalog) — individuabile dagli agenti
- [RSS](https://bodacc.io/rss.xml) — il feed quotidiano
- [Elenco degli URL](URLLIST.md) — ogni punto di accesso, un elenco per lingua

## 8. Copertura e aggiornamento del BODACC

Il BODACC viene pubblicato nei giorni lavorativi, non nei fine settimana. BODACC.io raccoglie ogni
pubblicazione e la rende disponibile **la stessa mattina**, di solito pochi minuti dopo la diffusione.
Ogni annuncio conserva la sua data di pubblicazione, così sai sempre che cosa è nuovo.

## 9. Per che cosa si usa il BODACC

- **Compliance e KYC** — verifica lo stato reale di una controparte prima di firmare, non il suo stato di tre mesi fa
- **Due diligence** — segui i depositi di un'impresa, i suoi bilanci e la sua storia di insolvenze
- **Scoring di credito e rischio** — le procedure collettive e i depositi di bilanci sono i segnali più precoci
- **Informazioni commerciali** — una nuova costituzione è un nuovo potenziale cliente, il giorno stesso
- **Giornalismo** — fatti al livello dell'impresa, con fonte e data
- **Ricerca** — 51 milioni di depositi, dai registri più antichi a questa mattina
- **Legale e contabilità** — trova le imprese per cui operi e che cosa hanno depositato

## 10. Domande frequenti sul BODACC

**BODACC.io è il BODACC ufficiale?**

No. BODACC.io è un servizio indipendente che rende utilizzabili e interrogabili i dati pubblici del BODACC.
Non è affiliato alla DILA né ad alcun ente pubblico. Ogni annuncio rimanda alla sua fonte ufficiale.

**L'API BODACC è gratuita?**

Gli endpoint aperti sono gratuiti e non richiedono chiave. Esistono piani a pagamento per usi intensivi —
[vedi i prezzi](https://bodacc.io/it/prezzi).

**Qual è la differenza tra il BODACC e una directory di imprese?**

Una directory ti dà l'identità di un'impresa. Il BODACC ti dà la sua attività: che cosa ha depositato, quando,
e che cosa il tribunale ha pubblicato al riguardo. I due sono complementari — BODACC.io porta anche l'identità.

**Quanto sono aggiornati i dati?**

Gli annunci compaiono la mattina della loro pubblicazione. Le schede delle imprese vengono aggiornate man mano
che arrivano gli annunci.

**Quanti record per chiamata?**

Fino a 500, con `offset` per la paginazione. Non c'è alcun limite al numero di chiamate sugli endpoint aperti.

**Posso usarla in produzione?**

Sì. L'API è documentata, versionata e servita da Cloudflare. Un'attribuzione a
[bodacc.io](https://bodacc.io) è gradita.

**Quali lingue sono supportate?**

Il sito e la sua documentazione esistono in 20 lingue. L'API in sé è neutrale rispetto alla lingua: i suoi
slug e i suoi endpoint sono gli stessi per tutti.

## 11. Documentazione del BODACC per lingua

Ogni cartella qui sotto contiene la documentazione completa del BODACC nella sua lingua: il riferimento
dell'API, l'elenco degli URL e i riepiloghi quotidiani.

| # | Lingua | Documentazione | URL | Dati quotidiani |
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

## 12. Link del BODACC

- [BODACC.io](https://bodacc.io) — il sito live
- [Ricerca imprese](https://bodacc.io/it/imprese) · [Annunci legali](https://bodacc.io/it/annunci) · [Amministratori](https://bodacc.io/it/persone)
- [Documentazione dell'API](https://bodacc.io/it/documentazione) · [Interfaccia Swagger](https://bodacc.io/api/bodacc/docs)
- [Prezzi](https://bodacc.io/it/prezzi) · [Tecnologia](https://bodacc.io/it/tecnologia)
- [Elenco degli URL (indice multilingue)](URLLIST.md)

---

*Il BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) è la pubblicazione ufficiale degli
annunci legali delle imprese francesi. BODACC.io è un servizio indipendente e non è affiliato alla DILA.*
