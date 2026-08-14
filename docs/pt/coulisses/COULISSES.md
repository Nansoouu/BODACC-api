# 🏠 Nos bastidores do BODACC.io

O BODACC.io torna os anúncios oficiais das empresas francesas **fáceis de
consultar**. Mas de onde vêm esses dados? Como chegam até ao
seu ecrã?

É uma pequena equipa de trabalhadores automáticos que se ativa todos os dias
nos bastidores. Esta é a sua história.

---

## 🌅 De manhã : o carteiro

Todas as manhãs, bem cedo, o nosso **carteiro** vai buscar os anúncios oficiais
do dia anterior: criações de empresas, mudanças de dirigentes, liquidações,
depósitos de contas... Traz todos, sem perder nenhum, e
arquiva-os na nossa grande biblioteca.

> 👤 **Personificado por Thom** — agente de ingestão: todos os dias recolhe os
> anúncios oficiais e estrutura-os para a base de dados. É ele quem
> faz funcionar a máquina.

→ [Descubra o trabalho do carteiro](le-facteur/README.md)

## 📖 Em seguida : o tradutor

Os anúncios oficiais são textos escritos em linguagem administrativa, nem
sempre fáceis de ler. O nosso **tradutor** lê todos e transforma-os
em fichas claras: o nome da empresa, a sua morada, a sua atividade, os seus
dirigentes, os montantes...

→ [Descubra o trabalho do tradutor](le-traducteur/README.md)

## 🔍 Depois : a investigadora

Quando a ficha está pronta, a nossa **investigadora** completa-a com as
informações **públicas** da empresa: o seu site, o seu telefone, as suas redes
sociais. Nada de privado, nada de secreto — apenas o que a própria empresa
mostra.

> 👤 **Personificada por Elysa** — agente de enriquecimento: completa as fichas
> das empresas (site, telefone, redes sociais dos dirigentes). Só
> recolhe os dados públicos expostos: nada é procurado em
> locais proibidos.

→ [Descubra o trabalho da investigadora](lenqueteur/README.md)

## 🧩 Ao mesmo tempo : o quebra-cabeça de pessoas

Cada anúncio fala de pessoas: dirigentes, liquidatários, revisores
oficiais de contas. O nosso **quebra-cabeça** liga cada pessoa às suas
empresas, para que se possa descobrir facilmente «quem faz o quê».

→ [Descubra o quebra-cabeça de pessoas](le-puzzle/README.md)

## 🗺️ E o geógrafo

O nosso **geógrafo** verifica se cada empresa existe mesmo no mapa
(Google Maps): a sua morada, a sua categoria, a sua avaliação. Assim, a ficha
mostra também a presença real da empresa na vida real.

→ [Descubra o trabalho do geógrafo](le-geographe/README.md)

## 📚 Por fim : a biblioteca de contratos

Os contratos públicos (contratos celebrados pelas administrações) também são
arquivados na nossa **biblioteca**: mais de um milhão de contratos, consultáveis
livremente.

→ [Descubra a biblioteca de contratos](la-bibliotheque/README.md)

## 🧭 E o explorador, para reunir tudo

Quando todo o trabalho está feito, o nosso **explorador** abre as portas:
prepara as vistas (anúncios, empresas, pessoas, regiões), as estatísticas do
dia e os resumos que toda a gente pode consultar. É ele que leva os dados até
ao teu ecrã.

→ [Descubra o trabalho do explorador](lexplorateur/README.md)

---

## 👥 A equipa que faz funcionar os bastidores

| Pessoa | Função | Domínio |
|---|---|---|
| **Nansou** | Chefe de projeto | Visão, estratégia, conteúdo — ele orquestra tudo |
| **Thom** | Agente de ingestão | O carteiro: recolher os anúncios todos os dias |
| **Elysa** | Agente de enriquecimento | A investigadora: completar as fichas públicas |
| **Karan** | Agente internacional e SEO | Traduções, visibilidade internacional |
| **Ruby** | Agente de supervisão | Verificar se tudo funciona, permanentemente |

---

## 📊 Os contadores em direto

![Anúncios](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=annonces&label=Anúncios&color=blue)
![Empresas](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=entreprises&label=Empresas&color=green)
![Pessoas](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbodacc.io%2Fapi%2Fbodacc%2Fstats%2Fcounts-formatted&query=personnes&label=Pessoas&color=orange)

Estes números são reais e mudam todos os dias. Todas as manhãs, o carteiro
traz o seu lote, o tradutor lê-o e todos podem vir consultar.

---

## 📅 O diário de bordo

Cada trabalhador tem o seu pequeno diário: quantos documentos tratados no
dia e as pequenas melhorias feitas. Encontra-se em cada
ficha:

| Data | Anúncios chegados | Fichas lidas | Pequenas melhorias |
|---|---|---|---|
| _(preenchido todos os dias)_ | | | |

## 🔍 Verifique você mesmo

Tudo é público e gratuito — todos podem verificar:

- Os últimos anúncios: [`https://bodacc.io/pt/annonces`](https://bodacc.io/pt/annonces)
- Os contadores em direto: [`https://bodacc.io/api/bodacc/stats/counts`](https://bodacc.io/api/bodacc/stats/counts)
- Uma empresa: [`https://bodacc.io/pt/entreprises/514494491`](https://bodacc.io/pt/entreprises/514494491)

---

*Este documento faz parte do repositório público BODACC-api. Descreve o que
fazemos, simplesmente, sem revelar os nossos métodos internos.*
