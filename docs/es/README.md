<div align="center">

# BODACC.io : la API BODACC de los anuncios legales franceses y los datos de empresas

**Cada publicación de empresa francesa, en tiempo real.** Creaciones, modificaciones, depósitos
de cuentas, procedimientos colectivos, ventas, cancelaciones — cada anuncio del BODACC, vinculado a su
empresa, a sus directivos y a su fuente oficial. Gratis y abierto, en 20 idiomas.

[**bodacc.io**](https://bodacc.io) · [Documentación de la API](https://bodacc.io/es/documentacion) · [Swagger](https://bodacc.io/api/bodacc/docs) · [RSS](https://bodacc.io/rss.xml)

</div>

## 1. Datos BODACC en directo

| Conjunto de datos BODACC | Registros | En directo |
|---|---|---|
| Anuncios legales del BODACC | 51 043 403 | ![Anuncios](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Anuncios&color=blue) |
| Empresas francesas | 30 032 566 | ![Empresas](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Empresas&color=green) |
| Directivos y cargos | 4 935 692 | ![Personas](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Personas&color=orange) |
| Contratos públicos (BOAMP) | 1 716 163 | ![Contratos](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=boamp&label=Contratos&color=purple) |

Esas cifras no están copiadas y pegadas: las **sirve en directo la propia API BODACC**, en
[`/api/bodacc/stats/counts-formatted`](https://bodacc.io/api/bodacc/stats/counts-formatted).
Compruébalas tú mismo y vuelve a comprobarlas mañana.

**Hoy** (14 de octubre de 2026): **5 920 anuncios** — familia más frecuente: Depósitos de cuentas (2 306).

| Familia BODACC | Anuncios de hoy |
|---|---|
| Depósitos de cuentas | 2 306 |
| Creaciones | 1 415 |
| Modificaciones | 1 193 |
| Cancelaciones | 500 |
| Procedimientos colectivos | 323 |
| Inscripciones | 118 |
| Ventas y cesiones | 65 |

## 2. Qué te ofrece la API BODACC

El BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) es el diario oficial de la vida
jurídica de las empresas francesas. Cada creación, cada depósito de cuentas, cada insolvencia, cada venta
se publica allí por ley. BODACC.io convierte ese diario en una base de datos que puedes consultar.

**La mayoría de las bases de datos de empresas te dan una foto fija. La API BODACC te da el movimiento.**

Un directorio te dice que una empresa existe: su nombre, su dirección, su número de registro. El BODACC
te dice **lo que la empresa acaba de hacer** y cuándo. Esa diferencia es lo esencial:

| | Directorios de empresas | BODACC.io |
|---|---|---|
| Qué obtienes | una ficha de identidad congelada | hechos con fecha |
| Actualidad | actualizado cada trimestre | publicado la misma mañana |
| Insolvencia | un indicador de estado | el procedimiento, su naturaleza y su fecha |
| Cuentas | un booleano «presentado» | cada depósito, con su fecha de cierre |
| Directivos | un nombre | cada mandato, con sus empresas |
| Fuente | una copia | el anuncio oficial y su PDF |

## 3. Los anuncios legales del BODACC en detalle

Cada anuncio lleva 23 campos. Aquí tienes uno real, exactamente como lo devuelve la API BODACC:

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

Cada anuncio enlaza con **su página completa en bodacc.io**, donde la fuente oficial y su PDF están a un clic.

Las siete familias del BODACC, con el término francés que verás en los datos:

| Familia BODACC | En los datos | Qué significa |
|---|---|---|
| Creaciones | `creation` | se registra una nueva empresa |
| Modificaciones | `modification` | estatutos, dirección, domicilio, cambio de capital |
| Depósitos de cuentas | `dpc` | cuentas anuales depositadas en la secretaría del tribunal |
| Procedimientos colectivos | `collective` | concurso, liquidación, recuperación |
| Ventas y cesiones | `vente` | un negocio se vende o se transmite |
| Cancelaciones | `radiation` | la empresa se elimina del registro |
| Inscripciones | `immatriculation` | inscripción en el registro mercantil |

## 4. Las fichas de empresas del BODACC

Cada anuncio apunta a la empresa que hay detrás. La API BODACC expone esas empresas con la
identidad, la actividad y el historial contable:

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

Más allá de la identidad: el código de actividad (NAF), la forma jurídica, la situación administrativa,
**la fecha del último depósito de cuentas, la fecha del último cierre y el número de días transcurridos**,
además de las etiquetas que puede llevar una empresa — economía social, bio, RGE, Qualiopi.

## 5. Directivos y cargos del BODACC

Detrás de cada empresa están las personas que la dirigen. La API BODACC enumera **4,9 millones de
directivos, cargos, liquidadores y comisarios de cuentas**, cada uno con:

- sus mandatos, empresa por empresa, con el periodo correspondiente
- sus otras empresas, para poder seguir a una persona a lo largo de toda una carrera
- los anuncios que le conciernen

Eso es lo que convierte un registro en un grafo: una empresa, sus directivos y las empresas que esos
directivos también dirigen. Un solo endpoint lo expone directamente.

## 6. La API BODACC

REST, JSON, sin clave en los endpoints abiertos, hasta 500 registros por llamada, paginados con `offset`.

```bash
# Los últimos anuncios del BODACC (siempre los más recientes primero)
curl "https://bodacc.io/api/bodacc/annonces?limit=100"

# Un solo anuncio, con sus empresas, sus directivos y su PDF
curl "https://bodacc.io/api/bodacc/annonces/C202601972306-depot-comptes-988208435-141026-holding-biiz"

# Una empresa por SIREN
curl "https://bodacc.io/api/bodacc/entreprises/552081317"

# Cada anuncio del BODACC que concierne a esa empresa
curl "https://bodacc.io/api/bodacc/entreprises/552081317/annonces"

# El grafo de la empresa: directivos y sus otras empresas
curl "https://bodacc.io/api/bodacc/entreprises/552081317/graphe"

# Búsqueda por nombre, ciudad, departamento, código de actividad o intervalo de fechas
curl "https://bodacc.io/api/bodacc/entreprises?q=eiffage&departement=75"
curl "https://bodacc.io/api/bodacc/annonces?famille=collective&date_debut=2026-10-01"
```

Referencia completa: [bodacc.io/es/documentacion](https://bodacc.io/es/documentacion) — endpoint por
endpoint, con interfaz Swagger y especificación OpenAPI publicada, en 20 idiomas.

## 7. Conjuntos de datos y exportaciones del BODACC

Más allá de la API, cada página de bodacc.io es una URL estable e indexable — anuncios legales, empresas,
directivos, regiones, ciudades, estadísticas — y el sitio publica puntos de entrada legibles por máquinas:

- [Sitemaps](https://bodacc.io/sitemap.xml) — el inventario completo de URLs, por idioma
- [Catálogo de la API](https://bodacc.io/.well-known/api-catalog) — descubrible por agentes
- [RSS](https://bodacc.io/rss.xml) — el feed diario
- [Lista de URLs](URLLIST.md) — todos los puntos de entrada, una lista por idioma

## 8. Cobertura y actualidad del BODACC

El BODACC se publica en días laborables, no los fines de semana. BODACC.io recoge cada publicación y
la pone a disposición **la misma mañana**, normalmente pocos minutos después de su difusión. Cada anuncio
conserva su fecha de publicación, así que siempre puedes saber qué es nuevo.

## 9. Para qué se usa el BODACC

- **Cumplimiento y KYC** — comprueba la situación real de una contraparte antes de firmar, no la de hace tres meses
- **Due diligence** — sigue los depósitos de una empresa, sus cuentas y su historial de insolvencia
- **Puntuación de crédito y riesgo** — los procedimientos colectivos y los depósitos de cuentas son las señales más tempranas
- **Inteligencia comercial** — una nueva creación es un nuevo cliente potencial, el mismo día en que ocurre
- **Periodismo** — hechos al nivel de la empresa, con fuente y fecha
- **Investigación** — 51 millones de depósitos, desde los registros más antiguos hasta esta mañana
- **Jurídico y contable** — encuentra las empresas a las que asesoras y lo que han depositado

## 10. Preguntas frecuentes sobre el BODACC

**¿BODACC.io es el BODACC oficial?**

No. BODACC.io es un servicio independiente que hace utilizables y consultables los datos públicos del
BODACC. No está afiliado a la DILA ni a ningún organismo público. Cada anuncio remite a su fuente oficial.

**¿La API BODACC es gratuita?**

Los endpoints abiertos son gratuitos y no necesitan clave. Existen planes de pago para un uso intensivo —
[consulta los precios](https://bodacc.io/es/precios).

**¿Cuál es la diferencia entre el BODACC y un directorio de empresas?**

Un directorio te da la identidad de una empresa. El BODACC te da su actividad: qué ha depositado, cuándo
y qué ha publicado el tribunal al respecto. Los dos son complementarios — BODACC.io también incluye la identidad.

**¿Qué actualidad tienen los datos?**

Los anuncios aparecen la mañana en que se publican. Las fichas de empresas se actualizan a medida que
llegan los anuncios.

**¿Cuántos registros por llamada?**

Hasta 500, con `offset` para la paginación. No hay límite en el número de llamadas a los endpoints abiertos.

**¿Puedo usarla en producción?**

Sí. La API está documentada, versionada y servida desde Cloudflare. La atribución a
[bodacc.io](https://bodacc.io) es bienvenida.

**¿Qué idiomas son compatibles?**

El sitio y su documentación existen en 20 idiomas. La propia API es neutra en cuanto al idioma: sus slugs
y sus endpoints son los mismos para todos.

## 11. Documentación del BODACC por idioma

Cada carpeta de abajo contiene la documentación completa del BODACC en su propio idioma: la referencia de
la API, la lista de URLs y los resúmenes diarios.

| # | Idioma | Documentación | URLs | Datos diarios |
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

## 12. Enlaces del BODACC

- [BODACC.io](https://bodacc.io) — el sitio en directo
- [Búsqueda de empresas](https://bodacc.io/es/empresas) · [Anuncios legales](https://bodacc.io/es/anuncios) · [Directivos](https://bodacc.io/es/personas)
- [Documentación de la API](https://bodacc.io/es/documentacion) · [Interfaz Swagger](https://bodacc.io/api/bodacc/docs)
- [Precios](https://bodacc.io/es/precios) · [Tecnología](https://bodacc.io/es/tecnologia)
- [Lista de URLs (índice multilingüe)](URLLIST.md)

---

*El BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) es la publicación oficial de los
anuncios legales de las empresas francesas. BODACC.io es un servicio independiente y no está afiliado a la DILA.*
