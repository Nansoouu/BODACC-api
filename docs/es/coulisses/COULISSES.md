# 🏠 Entre bastidores de BODACC.io

BODACC.io hace que los anuncios oficiales de las empresas francesas sean **fáciles de
consultar**. Pero, ¿de dónde vienen estos datos? ¿Cómo llegan hasta tu
pantalla?

Es un pequeño equipo de trabajadores automáticos que se activa cada día
entre bastidores. Esta es su historia.

---

## 🌅 Por la mañana : el cartero

Cada mañana, muy temprano, nuestro **cartero** sale a buscar los anuncios oficiales
del día anterior: creaciones de empresas, cambios de directivos, liquidaciones,
depósitos de cuentas... Los trae todos, sin perder ni uno solo, y los
archiva en nuestra gran biblioteca.

> 👤 **Interpretado por Thom** — agente de ingesta: cada día recoge los
> anuncios oficiales y los estructura para la base de datos. Es él quien
> hace funcionar la máquina.

→ [Descubrir el trabajo del cartero](le-facteur/README.md)

## 📖 Después : el traductor

Los anuncios oficiales son textos escritos en lenguaje administrativo, no
siempre fáciles de leer. Nuestro **traductor** los lee todos y los transforma
en fichas claras: el nombre de la empresa, su dirección, su actividad, sus
directivos, los importes...

→ [Descubrir el trabajo del traductor](le-traducteur/README.md)

## 🔍 Luego : la investigadora

Una vez que la ficha está lista, nuestra **investigadora** la completa con la
información **pública** de la empresa: su sitio web, su teléfono, sus redes
sociales. Nada privado, nada secreto — solo lo que la propia empresa
muestra.

> 👤 **Interpretada por Elysa** — agente de enriquecimiento: completa las fichas
> de empresas (sitio web, teléfono, redes sociales de los directivos). Solo
> recoge los datos públicos expuestos: no se busca nada en
> lugares prohibidos.

→ [Descubrir el trabajo de la investigadora](lenqueteur/README.md)

## 🧩 Al mismo tiempo : el rompecabezas de personas

Cada anuncio habla de personas: directivos, liquidadores, comisarios
de cuentas. Nuestro **rompecabezas** vincula a cada persona con sus
empresas, para que se pueda encontrar fácilmente «quién hace qué».

→ [Descubrir el rompecabezas de personas](le-puzzle/README.md)

## 🗺️ Y el geógrafo

Nuestro **geógrafo** comprueba que cada empresa existe realmente en el mapa
(Google Maps): su dirección, su categoría, su nota. Así, la ficha muestra
también la presencia real de la empresa en la vida real.

→ [Descubrir el trabajo del geógrafo](le-geographe/README.md)

## 📚 Por último : la biblioteca de contratos

Los contratos públicos (contratos celebrados por las administraciones) también se
archivan en nuestra **biblioteca**: más de un millón de contratos, consultables
libremente.

→ [Descubrir la biblioteca de contratos](la-bibliotheque/README.md)

---

## 👥 El equipo que hace funcionar los bastidores

| Persona | Función | Ámbito |
|---|---|---|
| **Nansou** | Jefe de proyecto | Visión, estrategia, contenido — lo orquesta todo |
| **Thom** | Agente de ingesta | El cartero: recoger los anuncios cada día |
| **Elysa** | Agente de enriquecimiento | La investigadora: completar las fichas públicas |
| **Karan** | Agente internacional y SEO | Traducciones, visibilidad internacional |
| **Ruby** | Agente de supervisión | Comprobar que todo funciona, en todo momento |

---

## 📊 Los contadores en directo

![Anuncios](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Anuncios&color=blue)
![Empresas](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Empresas&color=green)
![Personas](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Personas&color=orange)

Estas cifras son reales y cambian cada día. Cada mañana, el cartero
trae su lote, el traductor lo lee, y todo el mundo puede venir a consultarlo.

---

## 📅 El cuaderno de bitácora

Cada trabajador lleva su pequeño diario: cuántos documentos se procesan en
el día y las pequeñas mejoras aportadas. Se encuentra en cada
ficha:

| Fecha | Anuncios llegados | Fichas leídas | Pequeñas mejoras |
|---|---|---|---|
| _(se completa cada día)_ | | | |

## 🔍 Compruébalo por ti mismo

Todo es público y gratuito — cada cual puede verificar:

- Los últimos anuncios: [`https://bodacc.io/es/annonces`](https://bodacc.io/es/annonces)
- Los contadores en directo: [`https://bodacc.io/api/bodacc/stats/counts`](https://bodacc.io/api/bodacc/stats/counts)
- Una empresa: [`https://bodacc.io/es/entreprises/514494491`](https://bodacc.io/es/entreprises/514494491)

---

*Este documento forma parte del repositorio público BODACC-api. Describe lo que
hacemos, de forma sencilla, sin revelar nuestros métodos internos.*
