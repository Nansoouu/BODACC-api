#!/usr/bin/env node
/* Traduit docs/README.fr.md → docs/README.{lang}.md pour les 18 autres langues.
   Préserve : en-tête (ASCII art, liens de langue, badges), URLs, code, chemins d'API.
   Usage : node scripts/translate-readmes.js */
const fs = require("fs");
const https = require("https");

const KEY = JSON.parse(fs.readFileSync(process.env.HOME + "/.hermes/auth.json")).credential_pool?.deepseek?.[0]?.access_token;
if (!KEY) { console.error("Pas de clé DeepSeek dans ~/.hermes/auth.json"); process.exit(1); }

const SRC = fs.readFileSync("docs/README.fr.md", "utf-8");

const LANG_NAMES = {
  es: "Spanish (Español)", de: "German (Deutsch)", it: "Italian (Italiano)",
  pt: "Portuguese (Português)", nl: "Dutch (Nederlands)", pl: "Polish (Polski)",
  ru: "Russian (Русский)", tr: "Turkish (Türkçe)", uk: "Ukrainian (Українська)",
  id: "Indonesian (Bahasa Indonesia)", vi: "Vietnamese (Tiếng Việt)",
  ja: "Japanese (日本語)", ko: "Korean (한국어)", zh: "Chinese (中文)",
  ar: "Arabic (العربية)", he: "Hebrew (עברית)", hi: "Hindi (हिन्दी)", fa: "Persian (فارسی)",
};

// L'en-tête (ASCII art + titre + liens + badges) est identique dans toutes les langues
const idx = SRC.lastIndexOf("</div>");
const HEADER = SRC.slice(0, idx + 6);
const BODY = SRC.slice(idx + 6).trim();

function deepseek(prompt) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      model: "deepseek-chat",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2, max_tokens: 8000,
    });
    const req = https.request({
      hostname: "api.deepseek.com", path: "/v1/chat/completions", method: "POST",
      headers: { "Authorization": "Bearer " + KEY, "Content-Type": "application/json" },
    }, (res) => {
      let buf = "";
      res.on("data", (c) => (buf += c));
      res.on("end", () => {
        try { resolve(JSON.parse(buf).choices[0].message.content); }
        catch (e) { reject(new Error("réponse invalide: " + buf.slice(0, 150))); }
      });
    });
    req.on("error", reject);
    req.write(data);
    req.end();
  });
}

(async () => {
  let okCount = 0;
  for (const [lang, name] of Object.entries(LANG_NAMES)) {
    const prompt = `Translate the following French technical README section into ${name}.

Rules:
- Keep the markdown structure identical (headers, tables, lists, bold, emoji).
- Do NOT translate code blocks (between \`\`\`), URLs, route paths (/bodacc/...), curl commands, or API parameter names.
- Keep proper nouns as-is: BODACC, DILA, INSEE, SIRENE, SIREN, NAF, BOAMP.
- Keep numbers and units unchanged.
- Output ONLY the translated markdown, no preamble.

FRENCH TEXT:
${BODY}`;
    let ok = false;
    for (let attempt = 0; attempt < 3 && !ok; attempt++) {
      try {
        const out = await deepseek(prompt);
        fs.writeFileSync(`docs/README.${lang}.md`, HEADER + "\n\n" + out.trim() + "\n");
        console.log(`✅ ${lang}`);
        okCount++;
        ok = true;
      } catch (e) {
        console.log(`❌ ${lang} (tentative ${attempt + 1}): ${e.message}`);
      }
    }
  }
  console.log(`Terminé : ${okCount}/18 langues traduites`);
})();
