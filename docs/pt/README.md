<div align="center">

# BODACC.io : a API BODACC dos anúncios legais franceses e dos dados das empresas

**Cada publicação de empresa francesa, em tempo real.** Criações, modificações, depósitos de contas,
processos coletivos, vendas, baixas — cada anúncio do BODACC, ligado à sua empresa, aos seus dirigentes e à
sua fonte oficial. Gratuito e aberto, em 20 idiomas.

[**bodacc.io**](https://bodacc.io) · [Documentação da API](https://bodacc.io/pt/documentacao) · [Swagger](https://bodacc.io/api/bodacc/docs) · [RSS](https://bodacc.io/rss.xml)

</div>

## 1. Dados BODACC ao vivo

| Conjunto de dados BODACC | Registros | Ao vivo |
|---|---|---|
| Anúncios legais do BODACC | 51 043 403 | ![Anúncios](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Anúncios&color=blue) |
| Empresas francesas | 30 032 566 | ![Empresas](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Empresas&color=green) |
| Dirigentes e cargos | 4 935 692 | ![Pessoas](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Pessoas&color=orange) |
| Contratos públicos (BOAMP) | 1 716 163 | ![Contratos](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=boamp&label=Contratos&color=purple) |

Esses números não são copiados e colados: são **servidos ao vivo pela própria API BODACC**, em
[`/api/bodacc/stats/counts-formatted`](https://bodacc.io/api/bodacc/stats/counts-formatted).
Confira você mesmo, e confira de novo amanhã.

**Hoje** (14 de outubro de 2026): **5 920 anúncios** — família mais comum: Depósitos de contas (2 306).

| Família BODACC | Anúncios de hoje |
|---|---|
| Depósitos de contas | 2 306 |
| Criações | 1 415 |
| Modificações | 1 193 |
| Baixas | 500 |
| Processos coletivos | 323 |
| Inscrições | 118 |
| Vendas e transmissões | 65 |

## 2. O que a API BODACC oferece

O BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) é o jornal oficial da vida jurídica das
empresas francesas. Cada constituição, cada depósito de contas, cada insolvência, cada venda é publicado ali
por lei. O BODACC.io transforma esse jornal em um banco de dados que você pode consultar.

**A maioria dos bancos de dados de empresas oferece uma fotografia. A API BODACC oferece o movimento.**

Um diretório diz que uma empresa existe: o nome, o endereço, o número de registro. O BODACC diz **o que a
empresa acabou de fazer**, e quando. É exatamente essa a diferença:

| | Diretórios de empresas | BODACC.io |
|---|---|---|
| O que você recebe | uma ficha de identidade congelada | eventos com data |
| Atualidade | atualizado a cada trimestre | publicado na mesma manhã |
| Insolvência | um indicador de status | o processo, sua natureza e sua data |
| Contas | um booleano "depositado" | cada depósito, com sua data de encerramento |
| Dirigentes | um nome | cada mandato, com suas empresas |
| Fonte | uma cópia | o anúncio oficial e seu PDF |

## 3. Os anúncios legais do BODACC em detalhe

Cada anúncio traz 23 campos. Aqui está um real, exatamente como a API BODACC o devolve:

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

Cada anúncio remete a **sua página completa no bodacc.io**, onde a fonte oficial e seu PDF estão a um clique.

As sete famílias do BODACC, com o termo francês que você verá nos dados:

| Família BODACC | Nos dados | O que significa |
|---|---|---|
| Criações | `creation` | uma nova empresa é registrada |
| Modificações | `modification` | estatuto, administração, endereço, mudança de capital |
| Depósitos de contas | `dpc` | contas anuais depositadas na secretaria do tribunal |
| Processos coletivos | `collective` | administração judicial, liquidação, recuperação |
| Vendas e transmissões | `vente` | um negócio é vendido ou transferido |
| Baixas | `radiation` | a empresa é removida do registro |
| Inscrições | `immatriculation` | inscrição no registro comercial |

## 4. As fichas de empresas do BODACC

Cada anúncio aponta para a empresa por trás dele. A API BODACC expõe essas empresas com a identidade,
a atividade e o histórico contábil:

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

Além da identidade: o código de atividade (NAF), a forma jurídica, a situação administrativa, **a data do
último depósito de contas, a última data de encerramento e o número de dias desde então**, mais os selos que
uma empresa pode ter — economia social, bio, RGE, Qualiopi.

## 5. Dirigentes e cargos do BODACC

Por trás de cada empresa estão as pessoas que a dirigem. A API BODACC lista **4,9 milhões de dirigentes,
cargos, liquidantes e auditores**, cada um com:

- seus mandatos, empresa por empresa, com o período correspondente
- suas outras empresas, para acompanhar uma pessoa ao longo de toda uma carreira
- os anúncios que dizem respeito a eles

Isso é o que transforma um registro em um grafo: uma empresa, seus dirigentes e as empresas que esses
dirigentes também dirigem. Um único endpoint expõe isso diretamente.

## 6. A API BODACC

REST, JSON, sem chave nos endpoints abertos, até 500 registros por chamada, paginados por `offset`.

```bash
# Os anúncios mais recentes do BODACC (sempre os mais novos primeiro)
curl "https://bodacc.io/api/bodacc/annonces?limit=100"

# Um único anúncio, com suas empresas, seus dirigentes e seu PDF
curl "https://bodacc.io/api/bodacc/annonces/C202601972306-depot-comptes-988208435-141026-holding-biiz"

# Uma empresa pelo SIREN
curl "https://bodacc.io/api/bodacc/entreprises/552081317"

# Cada anúncio do BODACC referente a essa empresa
curl "https://bodacc.io/api/bodacc/entreprises/552081317/annonces"

# O grafo da empresa: dirigentes e suas outras empresas
curl "https://bodacc.io/api/bodacc/entreprises/552081317/graphe"

# Busca por nome, cidade, departamento, código de atividade ou intervalo de datas
curl "https://bodacc.io/api/bodacc/entreprises?q=eiffage&departement=75"
curl "https://bodacc.io/api/bodacc/annonces?famille=collective&date_debut=2026-10-01"
```

Referência completa: [bodacc.io/pt/documentacao](https://bodacc.io/pt/documentacao) — endpoint por endpoint,
com interface Swagger e especificação OpenAPI publicada, em 20 idiomas.

## 7. Conjuntos de dados e exportações do BODACC

Além da API, cada página do bodacc.io é uma URL estável e indexável — anúncios legais, empresas, dirigentes,
regiões, cidades, estatísticas — e o site publica pontos de entrada legíveis por máquinas:

- [Sitemaps](https://bodacc.io/sitemap.xml) — o inventário completo de URLs, por idioma
- [Catálogo da API](https://bodacc.io/.well-known/api-catalog) — descobrível por agentes
- [RSS](https://bodacc.io/rss.xml) — o feed diário
- [Lista de URLs](URLLIST.md) — cada ponto de entrada, uma lista por idioma

## 8. Cobertura e atualidade do BODACC

O BODACC é publicado em dias úteis, não nos fins de semana. O BODACC.io recolhe cada publicação e a
disponibiliza **na mesma manhã**, normalmente poucos minutos após a divulgação. Cada anúncio mantém sua data
de publicação, então você sempre sabe o que é novo.

## 9. Para que as pessoas usam o BODACC

- **Compliance e KYC** — verifique a situação real de uma contraparte antes de assinar, não a situação de três meses atrás
- **Due diligence** — acompanhe os depósitos de uma empresa, suas contas e seu histórico de insolvência
- **Score de crédito e risco** — processos coletivos e depósitos de contas são os sinais mais precoces
- **Inteligência comercial** — uma nova constituição é um novo cliente potencial, no dia em que acontece
- **Jornalismo** — fatos no nível da empresa, com fonte e data
- **Pesquisa** — 51 milhões de depósitos, dos registros mais antigos até esta manhã
- **Jurídico e contábil** — encontre as empresas que você representa e o que elas depositaram

## 10. Perguntas frequentes sobre o BODACC

**O BODACC.io é o BODACC oficial?**

Não. O BODACC.io é um serviço independente que torna os dados públicos do BODACC utilizáveis e consultáveis.
Não é afiliado à DILA nem a nenhum órgão público. Cada anúncio remete à sua fonte oficial.

**A API BODACC é gratuita?**

Os endpoints abertos são gratuitos e não exigem chave. Existem planos pagos para uso intenso —
[veja os preços](https://bodacc.io/pt/precos).

**Qual é a diferença entre o BODACC e um diretório de empresas?**

Um diretório dá a identidade de uma empresa. O BODACC dá a atividade dela: o que depositou, quando, e o que
o tribunal publicou sobre isso. Os dois são complementares — o BODACC.io também traz a identidade.

**Qual é a atualidade dos dados?**

Os anúncios aparecem na manhã em que são publicados. As fichas das empresas são atualizadas à medida que os
anúncios chegam.

**Quantos registros por chamada?**

Até 500, com `offset` para paginação. Não há limite para o número de chamadas nos endpoints abertos.

**Posso usar em produção?**

Sim. A API é documentada, versionada e servida pela Cloudflare. A atribuição ao
[bodacc.io](https://bodacc.io) é bem-vinda.

**Quais idiomas são suportados?**

O site e sua documentação existem em 20 idiomas. A API em si é neutra em relação ao idioma: seus slugs e
endpoints são os mesmos para todos.

## 11. Documentação do BODACC por idioma

Cada pasta abaixo contém a documentação completa do BODACC em seu próprio idioma: a referência da API, a
lista de URLs e os resumos diários.

| # | Idioma | Documentação | URLs | Dados diários |
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

## 12. Links do BODACC

- [BODACC.io](https://bodacc.io) — o site ao vivo
- [Busca de empresas](https://bodacc.io/pt/empresas) · [Anúncios legais](https://bodacc.io/pt/anuncios) · [Dirigentes](https://bodacc.io/pt/pessoas)
- [Documentação da API](https://bodacc.io/pt/documentacao) · [Interface Swagger](https://bodacc.io/api/bodacc/docs)
- [Preços](https://bodacc.io/pt/precos) · [Tecnologia](https://bodacc.io/pt/tecnologia)
- [Lista de URLs (índice multilíngue)](URLLIST.md)

---

*O BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) é a publicação oficial dos anúncios
legais das empresas francesas. O BODACC.io é um serviço independente e não é afiliado à DILA.*
