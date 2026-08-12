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

![Annonces](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Anúncios&color=blue)
![Entreprises](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Empresas&color=green)
![Personnes](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Pessoas&color=orange)
![Site bodacc.io](https://img.shields.io/badge/bodacc.io-Explorer-important?logo=internetexplorer&logoColor=white&style=for-the-badge)

</div>

**A API que transforma os anúncios legais franceses em dados estruturados, interligados e exploráveis — em tempo real.**

O BODACC (Boletim Oficial de Anúncios Civis e Comerciais) é a publicação oficial que registra a vida jurídica das empresas francesas: criações, modificações, baixas, processos coletivos, vendas, depósitos de contas. Esses textos são públicos, mas permanecem como documentos brutos: não são estruturados, nem interligados entre si, nem facilmente consultáveis.

**BODACC-api os torna exploráveis.** Cada anúncio é automaticamente analisado e transformado em dados estruturados (SIREN, razão social, endereço, NAF, dirigentes, valores...), e então interligado à sua empresa e às pessoas que nele aparecem. Resultado: um grafo completo da vida econômica francesa, consultável com uma única requisição HTTP.

> 🌐 Site: [bodacc.io](https://bodacc.io) · 📖 Swagger: [https://bodacc.io/api/bodacc/docs](https://bodacc.io/api/bodacc/docs) · 💶 [Preços](https://bodacc.io/pt/tarifs)

---

## ✨ Por que BODACC-api?

| | |
|---|---|
| 🗂 **Todo o histórico, desde 2004** | Milhões de anúncios em base, cobertura completa — não é uma janela deslizante |
| ⚡ **Tempo real** | Os anúncios do dia estão disponíveis todas as manhãs, antes da abertura dos escritórios |
| 🕸 **Um grafo, não arquivos** | Anúncio → empresa (SIREN) → dirigentes → mandatos → contratos públicos: tudo está interligado e consultável em uma requisição |
| ✨ **Do texto bruto aos dados estruturados** | SIREN, NAF, endereço, dirigentes, processos... extraídos automaticamente de cada texto jurídico |
| 🌍 **20 idiomas** | A interface e os conteúdos são traduzidos — suas equipes e seus clientes falam seu idioma |
| 🤖 **Pronto para agentes** | 100/100 na auditoria isitagentready (DNSSEC, DNS-AID, auth.md, WebMCP, llms.txt) |
| 🚪 **Zero atrito para testar** | Todos os endpoints de leitura são acessíveis sem chave — você avalia antes de pagar |

---

## 🏭 Nossa proposta de valor: o pipeline

O que faz a diferença não é o dado bruto (ele é público), é o que fazemos com ele — todos os dias, automaticamente:

**1. Ingestão confiável e completa.** Todas as manhãs antes das 09:00, os novos anúncios publicados pela DILA são integrados à nossa base. O histórico completo remonta a 2004, muito além do que oferece a consulta pública. Reexecutar uma ingestão não cria nenhuma duplicata: nossos dados são verificados e coerentes permanentemente.

**2. Enriquecimento inteligente.** Cada anúncio é um texto jurídico — nosso motor de extração híbrido (regras de negócio + IA) o transforma em dados estruturados: número SIREN, razão social, endereço, código NAF, dirigentes, mandatos, valores, processos. O que exige horas de leitura humana torna-se campos JSON consultáveis.

**3. Um grafo relacional.** Um anúncio de processo coletivo só tem valor se soubermos a qual empresa ele se vincula e quem é seu dirigente. Nosso motor de resolução interliga cada anúncio à sua empresa (SIREN), cada pessoa aos seus mandatos, cada contrato público ao seu adjudicatário. Você consulta a vida econômica francesa como um banco de dados — não como uma pilha de PDFs.

**4. Difusão em tempo real.** Assim que um anúncio é publicado, ele está disponível via API, com suas relações e seu enriquecimento. Sem arquivos para baixar, sem ETL para manter: uma requisição HTTP é suficiente.

---

## ⚖️ Comparativo: onde nos posicionamos

| | **Site oficial (bodacc.fr)** | **Pappers** | **BODACC.io** |
|---|---|---|---|
| **Histórico** | Somente desde 2008 | Histórico comercial conforme assinatura | **Completo desde 2004** |
| **API** | ❌ Nenhuma | API reservada aos planos superiores | ✅ **API REST documentada, sem chave para leitura** |
| **Dados estruturados** | ❌ Consulta em PDF | ✅ Perfis enriquecidos | ✅ **Anúncios + grafo empresas/pessoas/contratos** |
| **Tempo real** | Publicação em papel consultável online | Atualização diária | ✅ **Todas as manhãs antes das 09:00** |
| **Preço** | Gratuito, mas limitado | A partir de **29,90 €/mês** para o acesso básico | **Planos acessíveis, desde a gratuidade para explorar** |
| **Público** | Público em geral | Profissionais (conformidade, monitoramento) | **Desenvolvedores, fintech, legaltech, equipes de dados** |

**Pontos fortes do site oficial**: gratuito, confiável, oficial. **Pontos fracos**: sem API, histórico limitado a 2008, nenhum dado estruturado — você permanece nos PDFs.

**Pontos fortes da Pappers**: interface muito bem cuidada, agregação INSEE + INPI + BODACC, monitoramento integrado. **Pontos fracos**: o preço (29,90 €/mês para o acesso básico, a API e o histórico completo são mais caros), uma solução orientada à consulta em vez de dados exploráveis.

**Nossa posição**: **todo o histórico desde 2004, mais rápido que no site oficial — e a um preço inferior ao da Pappers.** Pensado para quem quer conectar os dados em suas próprias ferramentas, não para quem quer mais uma tela.

> 💶 Ver os planos: [bodacc.io/pt/tarifs](https://bodacc.io/pt/tarifs) — Gratuito · Pro · Enterprise · LIFE

---

## 🚀 Experimente em 30 segundos

Todos os endpoints de leitura são acessíveis **sem chave**:

```bash
# Buscar uma empresa pelo nome
curl "https://bodacc.io/api/bodacc/annonces?q=rizom&limit=5"

# Detalhe de um anúncio (com suas relações: empresas + pessoas)
curl "https://bodacc.io/api/bodacc/annonces/A202601432266"

# Perfil da empresa (anúncios recentes + dirigentes + contratos públicos)
curl "https://bodacc.io/api/bodacc/entreprises/912969573"

# Estatísticas globais
curl "https://bodacc.io/api/bodacc/stats"

# Volume diário (últimos 30 dias)
curl "https://bodacc.io/api/bodacc/stats/daily30"
```

---

## 📡 Os endpoints

### Anúncios

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/bodacc/annonces` | Busca: `q` (nome/SIREN), `famille`, `departement`, datas, paginação `limit`/`offset` |
| `GET` | `/bodacc/annonces/{id}` | Detalhe completo: `raw_data` + enriquecimento + `relations` (empresas e pessoas vinculadas) |
| `GET` | `/bodacc/enrichi/{id}` | Versão estruturada (siren, denominação, NAF, dirigentes...) |
| `POST` | `/bodacc/enrichi/batch` | Enriquecimento em lote |

### Empresas & pessoas

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/bodacc/entreprises` | Busca de empresa (nome, cidade, NAF, código postal) |
| `GET` | `/bodacc/entreprises/{siren}` | Perfil INSEE + `annonces_recentes`, `dirigeants`, `marches_publics`, `stats` |
| `GET` | `/bodacc/entreprises/by-slug/{slug}` | Perfil por slug SEO |
| `GET` | `/bodacc/personnes/{id}` | Perfil da pessoa: mandatos (funções) + empresas vinculadas |

### Estatísticas

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/bodacc/stats` | Totais, por família, por data |
| `GET` | `/bodacc/stats/daily` | Volume do dia (por edição, departamento, família) |
| `GET` | `/bodacc/stats/daily30` | Série dos últimos 30 dias |
| `GET` | `/bodacc/stats/counts` | Contadores: anúncios, empresas, pessoas |
| `GET` | `/bodacc/graph/categories` | Distribuição por categoria |

### Alertas & integrações

| Método | Rota | Descrição |
|---|---|---|
| `GET/POST/DELETE` | `/bodacc/alertes` | Alertas por SIREN (monitoramento de empresa) |
| `POST` | `/bodacc/ingest?target_date=YYYY-MM-DD` | Acionar uma ingestão para uma data |
| `POST` | `/bodacc/import` | Importação em lote (backfill) |

### Referencial NAF (INSEE)

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/bodacc/naf` | Referencial NAF rev. 2 completo (732 subclasses, 615 classes) — rótulos oficiais INSEE |
| `GET` | `/bodacc/naf?q=commerce` | Busca NAF por rótulo |
| `GET` | `/bodacc/naf?code=46.72Z` | Ficha de um código NAF |

---

## 📊 Os dados

Os selos no topo da página são **contadores em tempo real**: anúncios BODACC, empresas SIRENE e pessoas extraídas — eles evoluem conforme a consolidação do histórico e do enriquecimento.

Referências estáveis:

- 📰 **Anúncios BODACC**: histórico completo desde 2004, atualizado todas as manhãs antes das 09:00
- 🏢 **Empresas (SIRENE)**: 29,8 M de unidades legais francesas (registro INSEE)
- 👤 **Pessoas extraídas**: dirigentes, liquidantes, comissários de contas... em consolidação contínua
- 📦 **Contratos públicos (BOAMP)**: 1,69 M de contratos públicos 2015 → 2026

---

## 🛠 Tecnologia

| Camada | Tecnologia |
|---|---|
| **API** | Python · FastAPI · PostgreSQL 16 |
| **Dados** | Indexação trigrama, busca em texto completo, JSONB |
| **Ingestão** | Pipeline automatizado, integração diária, idempotente |
| **Enriquecimento** | Extração híbrida (regras de negócio + IA) |
| **Frontend** | Next.js · i18n 20 idiomas |
| **Infra** | Docker · Cloudflare (CDN, cache, DNSSEC) |
| **Agentes de IA** | Servidor MCP · DNS-AID · auth.md · llms.txt |

---

## 🔓 Open data

Os dados de origem são públicos e gratuitos:

- **BODACC**: [data.gouv.fr / DILA](https://www.data.gouv.fr/fr/datasets/bodacc-annonces-commerciales/) (anúncios legais)
- **SIRENE**: [INSEE](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/) (29,8 M unidades legais)
- **BOAMP**: [Opendatasoft / DILA](https://boamp-datadila.opendatasoft.com) (contratos públicos)

**BODACC-api adiciona a estrutura e o grafo sobre esse dado bruto**: análise dos textos jurídicos, resolução de identidade (pessoas), vínculos empresa ↔ anúncio ↔ contrato.

---

## 🌐 Explorar o site

[Início](https://bodacc.io/pt) · [Anúncios](https://bodacc.io/pt/annonces) · [Empresas](https://bodacc.io/pt/entreprises) · [Pessoas](https://bodacc.io/pt/personnes) · [Preços](https://bodacc.io/pt/tarifs) · [Tecnologia](https://bodacc.io/pt/technologie)

---

## 📄 Licença & contato

- Licença: MIT (código) — os dados permanecem sujeitos às licenças de seus produtores (DILA, INSEE)
- Site: [bodacc.io](https://bodacc.io)
- Issues & PR: bem-vindos neste repositório

---

*O BODACC (Boletim Oficial de Anúncios Civis e Comerciais) é a publicação oficial dos anúncios legais das empresas francesas. Este projeto não é afiliado à DILA.*
