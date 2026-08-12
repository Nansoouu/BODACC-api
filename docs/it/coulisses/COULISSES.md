# 🏠 Dietro le quinte di BODACC.io

BODACC.io rende gli annunci ufficiali delle imprese francesi **facili da
consultare**. Ma da dove arrivano questi dati? Come arrivano fino al
vostro schermo?

È una piccola squadra di lavoratori automatici che si attiva ogni giorno
dietro le quinte. Ecco la loro storia.

---

## 🌅 Al mattino : il postino

Ogni mattina, molto presto, il nostro **postino** va a recuperare gli annunci
ufficiali del giorno prima: creazioni di imprese, cambi di dirigenti, liquidazioni,
depositi di bilanci... Li riporta tutti, senza perderne nemmeno uno, e li
archivia nella nostra grande biblioteca.

> 👤 **Interpretato da Thom** — agente di ingestione: ogni giorno recupera gli
> annunci ufficiali e li struttura per il database. È lui che
> fa funzionare la macchina.

→ [Scopri il lavoro del postino](le-facteur/README.md)

## 📖 Poi : il traduttore

Gli annunci ufficiali sono testi scritti in linguaggio amministrativo, non
sempre facili da leggere. Il nostro **traduttore** li legge tutti e li trasforma
in schede chiare: il nome dell'impresa, il suo indirizzo, la sua attività, i
suoi dirigenti, gli importi...

→ [Scopri il lavoro del traduttore](le-traducteur/README.md)

## 🔍 Quindi : la ricercatrice

Una volta pronta la scheda, la nostra **ricercatrice** la completa con le
informazioni **pubbliche** dell'impresa: il suo sito web, il suo telefono, i
suoi social network. Niente di privato, niente di segreto — solo ciò che
l'impresa mostra da sola.

> 👤 **Interpretata da Elysa** — agente di arricchimento: completa le schede
> delle imprese (sito web, telefono, social network dei dirigenti). Recupera
> solo i dati pubblici esposti: non viene cercato nulla in
> luoghi proibiti.

→ [Scopri il lavoro della ricercatrice](lenqueteur/README.md)

## 🧩 Contemporaneamente : il puzzle delle persone

Ogni annuncio parla di persone: dirigenti, liquidatori, revisori
dei conti. Il nostro **puzzle** collega ogni persona alle sue
imprese, così si può scoprire facilmente «chi fa cosa».

→ [Scopri il puzzle delle persone](le-puzzle/README.md)

## 🗺️ E il geografo

Il nostro **geografo** verifica che ogni impresa esista davvero sulla mappa
(Google Maps): il suo indirizzo, la sua categoria, la sua valutazione. Così la
scheda mostra anche la presenza reale dell'impresa nella vita vera.

→ [Scopri il lavoro del geografo](le-geographe/README.md)

## 📚 Infine : la biblioteca dei contratti

Anche gli appalti pubblici (i contratti stipulati dalle amministrazioni) sono
archiviati nella nostra **biblioteca**: più di un milione di contratti, consultabili
liberamente.

→ [Scopri la biblioteca dei contratti](la-bibliotheque/README.md)

---

## 👥 Il team dietro le quinte

| Persona | Ruolo | Ambito |
|---|---|---|
| **Nansou** | Capo progetto | Visione, strategia, contenuti — orchestra tutto |
| **Thom** | Agente di ingestione | Il postino: recuperare gli annunci ogni giorno |
| **Elysa** | Agente di arricchimento | La ricercatrice: completare le schede pubbliche |
| **Karan** | Agente internazionale e SEO | Traduzioni, visibilità internazionale |
| **Ruby** | Agente di supervisione | Verificare che tutto funzioni, in ogni momento |

---

## 📊 I contatori in diretta

![Annunci](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Annunci&color=blue)
![Imprese](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Imprese&color=green)
![Persone](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Persone&color=orange)

Queste cifre sono reali e cambiano ogni giorno. Ogni mattina il postino
porta il suo carico, il traduttore lo legge e tutti possono venire a consultarlo.

---

## 📅 Il diario di bordo

Ogni lavoratore tiene il suo piccolo diario: quanti documenti trattati nella
giornata e le piccole migliorie apportate. Lo si trova in ogni
scheda:

| Data | Annunci arrivati | Schede lette | Piccole migliorie |
|---|---|---|---|
| _(compilato ogni giorno)_ | | | |

## 🔍 Verificate di persona

Tutto è pubblico e gratuito — ognuno può verificare:

- Gli ultimi annunci: [`https://bodacc.io/it/annonces`](https://bodacc.io/it/annonces)
- I contatori in diretta: [`https://bodacc.io/api/bodacc/stats/counts`](https://bodacc.io/api/bodacc/stats/counts)
- Un'impresa: [`https://bodacc.io/it/entreprises/514494491`](https://bodacc.io/it/entreprises/514494491)

---

*Questo documento fa parte del repository pubblico BODACC-api. Descrive ciò che
facciamo, semplicemente, senza rivelare i nostri metodi interni.*
