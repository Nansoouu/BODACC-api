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

**La API que transforma los anuncios legales franceses en datos estructurados, relacionados y explotables — en tiempo real.**

El BODACC (Boletín Oficial de Anuncios Civiles y Comerciales) es la publicación oficial que recoge la vida jurídica de las empresas francesas: creaciones, modificaciones, cancelaciones, procedimientos colectivos, ventas, depósitos de cuentas. Estos textos son públicos, pero permanecen como documentos brutos: no están estructurados, ni relacionados entre sí, ni son fácilmente consultables.

**BODACC-api los hace explotables.** Cada anuncio se analiza automáticamente y se transforma en datos estructurados (SIREN, razón social, dirección, NAF, directivos, importes...), y luego se vincula a su empresa y a las personas que aparecen en él. Resultado: un grafo completo de la vida económica francesa, consultable con una sola petición HTTP.

> 🌐 Sitio: [bodacc.io](https://bodacc.io) · 📖 Swagger: [https://bodacc.io/api/bodacc/docs](https://bodacc.io/api/bodacc/docs) · 💶 [Tarifas](https://bodacc.io/es/tarifs)

---

## ✨ ¿Por qué BODACC-api?

| | |
|---|---|
| 🗂 **Todo el historial, desde 2004** | Millones de anuncios en base, cobertura completa — no una ventana deslizante |
| ⚡ **Tiempo real** | Los anuncios del día están disponibles cada mañana, antes de la apertura de las oficinas |
| 🕸 **Un grafo, no archivos** | Anuncio → empresa (SIREN) → directivos → cargos → contratos públicos: todo está relacionado y es consultable en una sola petición |
| ✨ **Del texto bruto a los datos estructurados** | SIREN, NAF, dirección, directivos, procedimientos... extraídos automáticamente de cada texto jurídico |
| 🌍 **20 idiomas** | La interfaz y los contenidos están traducidos — tus equipos y tus clientes hablan su idioma |
| 🤖 **Listo para agentes** | 100/100 en la auditoría isitagentready (DNSSEC, DNS-AID, auth.md, WebMCP, llms.txt) |
| 🚪 **Cero fricción para probar** | Todos los endpoints de lectura son accesibles sin clave — evalúas antes de pagar |

---

## 🏭 Nuestro valor añadido: el pipeline

Lo que marca la diferencia no son los datos brutos (son públicos), sino lo que hacemos con ellos — cada día, automáticamente:

**1. Una ingesta fiable y completa.** Cada mañana antes de las 09:00, los nuevos anuncios publicados por la DILA se integran en nuestra base. El historial completo se remonta a 2004, mucho más allá de lo que ofrece la consulta pública. Re-ejecutar una ingesta no crea ningún duplicado: nuestros datos están verificados y son coherentes en todo momento.

**2. Un enriquecimiento inteligente.** Cada anuncio es un texto jurídico — nuestro motor de extracción híbrido (reglas de negocio + IA) lo transforma en datos estructurados: número SIREN, razón social, dirección, código NAF, directivos, cargos, importes, procedimientos. Lo que requiere horas de lectura humana se convierte en campos JSON consultables.

**3. Un grafo relacional.** Un anuncio de procedimiento colectivo solo tiene valor si se sabe a qué empresa está vinculado y quién es su directivo. Nuestro motor de resolución vincula cada anuncio a su empresa (SIREN), cada persona a sus cargos, cada contrato público a su adjudicatario. Consultas la vida económica francesa como una base de datos — no como un montón de PDF.

**4. Una difusión en tiempo real.** En cuanto se publica un anuncio, está disponible a través de la API, con sus relaciones y su enriquecimiento. Sin archivos que descargar, sin ETL que mantener: una petición HTTP es suficiente.

---

## ⚖️ Comparativa: dónde nos situamos

| | **Sitio oficial (bodacc.fr)** | **Pappers** | **BODACC.io** |
|---|---|---|---|
| **Historial** | Solo desde 2008 | Historial comercial según suscripción | **Completo desde 2004** |
| **API** | ❌ Ninguna | API reservada a las ofertas superiores | ✅ **API REST documentada, sin clave en lectura** |
| **Datos estructurados** | ❌ Consulta PDF | ✅ Perfiles enriquecidos | ✅ **Anuncios + grafo empresas/personas/mercados** |
| **Tiempo real** | Publicación en papel consultable en línea | Actualización diaria | ✅ **Cada mañana antes de las 09:00** |
| **Precio** | Gratuito, pero limitado | Desde **29,90 €/mes** para el acceso básico | **Planes accesibles, desde la gratuidad para explorar** |
| **Público** | Gran público | Profesionales (cumplimiento, vigilancia) | **Desarrolladores, fintech, legaltech, equipos de datos** |

**Puntos fuertes del sitio oficial**: gratuito, fiable, oficial. **Puntos débiles**: sin API, historial limitado a 2008, ningún dato estructurado — te quedas en los PDF.

**Puntos fuertes de Pappers**: interfaz muy cuidada, agregación INSEE + INPI + BODACC, vigilancia integrada. **Puntos débiles**: el precio (29,90 €/mes para el acceso básico, la API y el historial completo son más caros), una solución orientada a la consulta más que a los datos explotables.

**Nuestra posición**: **todo el historial desde 2004, más rápido que en el sitio oficial — y a un precio inferior al de Pappers.** Pensado para quienes quieren conectar los datos en sus propias herramientas, no para quienes quieren una pantalla más.

> 💶 Ver los planes: [bodacc.io/es/tarifs](https://bodacc.io/es/tarifs) — Gratuito · Pro · Enterprise · LIFE

---

## 🚀 Probarlo en 30 segundos

Todos los endpoints de lectura son accesibles **sin clave**:

```bash
# Buscar una empresa por su nombre
curl "https://bodacc.io/api/bodacc/annonces?q=rizom&limit=5"

# Detalle de un anuncio (con sus relaciones: empresas + personas)
curl "https://bodacc.io/api/bodacc/annonces/A202601432266"

# Perfil de empresa (anuncios recientes + directivos + contratos públicos)
curl "https://bodacc.io/api/bodacc/entreprises/912969573"

# Estadísticas globales
curl "https://bodacc.io/api/bodacc/stats"

# Volumen diario (últimos 30 días)
curl "https://bodacc.io/api/bodacc/stats/daily30"
```

---

## 📡 Los endpoints

### Anuncios

| Método | Ruta | Descripción |
|---|---|---|
| `GET` | `/bodacc/annonces` | Búsqueda: `q` (nombre/SIREN), `famille`, `departement`, fechas, paginación `limit`/`offset` |
| `GET` | `/bodacc/annonces/{id}` | Detalle completo: `raw_data` + enriquecimiento + `relations` (empresas y personas vinculadas) |
| `GET` | `/bodacc/enrichi/{id}` | Versión estructurada (siren, denominación, NAF, directivos...) |
| `POST` | `/bodacc/enrichi/batch` | Enriquecimiento por lotes |

### Empresas y personas

| Método | Ruta | Descripción |
|---|---|---|
| `GET` | `/bodacc/entreprises` | Búsqueda de empresa (nombre, ciudad, NAF, código postal) |
| `GET` | `/bodacc/entreprises/{siren}` | Perfil INSEE + `annonces_recentes`, `dirigeants`, `marches_publics`, `stats` |
| `GET` | `/bodacc/entreprises/by-slug/{slug}` | Perfil por slug SEO |
| `GET` | `/bodacc/personnes/{id}` | Perfil de persona: cargos (roles) + empresas vinculadas |

### Estadísticas

| Método | Ruta | Descripción |
|---|---|---|
| `GET` | `/bodacc/stats` | Totales, por familia, por fecha |
| `GET` | `/bodacc/stats/daily` | Volumen del día (por publicación, departamento, familia) |
| `GET` | `/bodacc/stats/daily30` | Serie de los últimos 30 días |
| `GET` | `/bodacc/stats/counts` | Contadores: anuncios, empresas, personas |
| `GET` | `/bodacc/graph/categories` | Distribución por categoría |

### Alertas e integraciones

| Método | Ruta | Descripción |
|---|---|---|
| `GET/POST/DELETE` | `/bodacc/alertes` | Alertas por SIREN (seguimiento de empresa) |
| `POST` | `/bodacc/ingest?target_date=YYYY-MM-DD` | Activar una ingesta para una fecha |
| `POST` | `/bodacc/import` | Importación por lotes (backfill) |

### Referencial NAF (INSEE)

| Método | Ruta | Descripción |
|---|---|---|
| `GET` | `/bodacc/naf` | Referencial NAF rev. 2 completo (732 subclases, 615 clases) — denominaciones oficiales INSEE |
| `GET` | `/bodacc/naf?q=commerce` | Búsqueda NAF por denominación |
| `GET` | `/bodacc/naf?code=46.72Z` | Ficha de un código NAF |

---

## 📊 Los datos

Las insignias en la parte superior de la página son **contadores en tiempo real**: anuncios BODACC, empresas SIRENE y personas extraídas — evolucionan a medida que se consolida el historial y el enriquecimiento.

Referencias estables:

- 📰 **Anuncios BODACC**: historial completo desde 2004, actualizado cada mañana antes de las 09:00
- 🏢 **Empresas (SIRENE)**: 29,8 M de unidades legales francesas (registro INSEE)
- 👤 **Personas extraídas**: directivos, liquidadores, comisarios de cuentas... en consolidación continua
- 📦 **Contratos públicos (BOAMP)**: 1,69 M de contratos públicos 2015 → 2026

---

## 🛠 Tecnología

| Capa | Tecnología |
|---|---|
| **API** | Python · FastAPI · PostgreSQL 16 |
| **Datos** | Indexación trigram, búsqueda de texto completo, JSONB |
| **Ingesta** | Pipeline automatizado, integración diaria, idempotente |
| **Enriquecimiento** | Extracción híbrida (reglas de negocio + IA) |
| **Frontend** | Next.js · i18n 20 idiomas |
| **Infra** | Docker · Cloudflare (CDN, caché, DNSSEC) |
| **Agentes IA** | Servidor MCP · DNS-AID · auth.md · llms.txt |

---

## 🔓 Open data

Los datos fuente son públicos y gratuitos:

- **BODACC**: [data.gouv.fr / DILA](https://www.data.gouv.fr/fr/datasets/bodacc-annonces-commerciales/) (anuncios legales)
- **SIRENE**: [INSEE](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/) (29,8 M unidades legales)
- **BOAMP**: [Opendatasoft / DILA](https://boamp-datadila.opendatasoft.com) (contratos públicos)

**BODACC-api añade la estructura y el grafo sobre estos datos brutos**: análisis de los textos jurídicos, resolución de identidad (personas), vínculos empresa ↔ anuncio ↔ contrato.

---

## 🌐 Explorar el sitio

[Inicio](https://bodacc.io/es) · [Anuncios](https://bodacc.io/es/annonces) · [Empresas](https://bodacc.io/es/entreprises) · [Personas](https://bodacc.io/es/personnes) · [Tarifas](https://bodacc.io/es/tarifs) · [Tecnología](https://bodacc.io/es/technologie)

---

## 📄 Licencia y contacto

- Licencia: MIT (código) — los datos permanecen sujetos a las licencias de sus productores (DILA, INSEE)
- Sitio: [bodacc.io](https://bodacc.io)
- Issues y PR: bienvenidos en este repositorio

---

*El BODACC (Boletín Oficial de Anuncios Civiles y Comerciales) es la publicación oficial de los anuncios legales de las empresas francesas. Este proyecto no está afiliado a la DILA.*
