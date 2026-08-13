# 🏠 Behind the scenes at BODACC.io

BODACC.io makes the official announcements of French companies **easy to
consult**. But where does the data come from? How does it reach your screen?

It's a small team of automatic workers working behind the scenes every day.
Here is their story.

> 🌍 Translated versions: [Français](../../fr/coulisses/COULISSES.md) · [English](COULISSES.md) · [Español](../../es/coulisses/COULISSES.md) · [Deutsch](../../de/coulisses/COULISSES.md) · [Italiano](../../it/coulisses/COULISSES.md) · [Português](../../pt/coulisses/COULISSES.md) · [Nederlands](../../nl/coulisses/COULISSES.md) · [Polski](../../pl/coulisses/COULISSES.md) · [Русский](../../ru/coulisses/COULISSES.md) · [Türkçe](../../tr/coulisses/COULISSES.md) · [Українська](../../uk/coulisses/COULISSES.md) · [Bahasa Indonesia](../../id/coulisses/COULISSES.md) · [Tiếng Việt](../../vi/coulisses/COULISSES.md) · [日本語](../../ja/coulisses/COULISSES.md) · [한국어](../../ko/coulisses/COULISSES.md) · [中文](../../zh/coulisses/COULISSES.md) · [العربية](../../ar/coulisses/COULISSES.md) · [עברית](../../he/coulisses/COULISSES.md) · [हिन्दी](../../hi/coulisses/COULISSES.md) · [فارسی](../../fa/coulisses/COULISSES.md)

---

## 🌅 In the morning: the postman

Every morning, very early, our **postman** goes to collect the official
announcements of the previous day: company creations, director changes,
liquidations, annual accounts... He brings them all back, without losing a
single one, and files them in our great library.

> 👤 **Played by Thom** — he collects the official announcements every day and
> structures them for the database. He is the one who keeps the machine running.

→ [Discover the postman's work](le-facteur/README.md)

## 📖 Then: the translator

Official announcements are texts written in administrative language, not
always easy to read. Our **translator** reads them all and turns them into
clear records: the company name, its address, its activity, its directors,
the amounts...

→ [Discover the translator's work](le-traducteur/README.md)

## 🔍 Then: the investigator

Once the record is ready, our **investigator** completes it with the company's
**public** information: its website, its phone number, its social networks.
Nothing private, nothing secret — only what the company shows itself.

> 👤 **Played by Elysa** — she completes company records (website, phone,
> directors' social networks). She only collects publicly exposed data:
> nothing is looked up in forbidden places.

→ [Discover the investigator's work](lenqueteur/README.md)

## 🧩 At the same time: the people puzzle

Every announcement talks about people: directors, liquidators, statutory
auditors. Our **puzzle** links each person to their companies, so you can
easily find out "who does what".

→ [Discover the people puzzle](le-puzzle/README.md)

## 🗺️ And the geographer

Our **geographer** checks that every company really exists on the map
(Google Maps): its address, its category, its rating. This way, the record
also shows the company's real presence in real life.

→ [Discover the geographer's work](le-geographe/README.md)

## 📚 Finally: the contracts library

Public contracts (contracts awarded by administrations) are also archived in
our **library**: more than one million contracts, freely consultable.

→ [Discover the contracts library](la-bibliotheque/README.md)

---

## 👥 The team behind the scenes

| Person | Role | Field |
|---|---|---|
| **Nansou** | Project leader | Vision, strategy, content — he orchestrates everything |
| **Thom** | Ingestion specialist | The postman: collecting announcements every day |
| **Elysa** | Enrichment specialist | The investigator: completing public records |
| **Karan** | International & SEO specialist | Translations, international visibility |
| **Ruby** | Supervision specialist | Making sure everything works, at all times |

---

## 📊 Live counters

![Notices](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Notices&color=blue)
![Companies](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Companies&color=green)
![People](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=People&color=orange)

These figures are real and change every day. Every morning the postman brings
his batch, the translator reads it, and everyone can come and consult it.

---

## 📅 The logbook

Each worker keeps a small log: how many documents processed during the day,
and the small improvements made. You can find it in each page:

| Date | Announcements received | Records read | Small improvements |
|---|---|---|---|
| _(filled daily)_ | | | |

## 🔍 Check it yourself

Everything is public and free — everyone can verify:

- Latest announcements: [`https://bodacc.io/en/annonces`](https://bodacc.io/en/annonces)
- Live counters: [`https://bodacc.io/api/bodacc/stats/counts`](https://bodacc.io/api/bodacc/stats/counts)
- A company: [`https://bodacc.io/en/entreprises/514494491`](https://bodacc.io/en/entreprises/514494491)

---

*This document is part of the public BODACC-api repository. It describes what
we do, simply — without revealing our internal methods.*
