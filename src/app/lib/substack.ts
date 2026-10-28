import { SUBSTACK_URL } from "./links";

export type SubstackPost = {
  title: string;
  url: string;
  description: string;
  publishedAt: string; // ISO 8601
};

const FEED_URL = `${SUBSTACK_URL}/feed`;

const ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
};

// Una sola pasada para no decodificar dos veces (p. ej. "&amp;lt;").
function decodeEntities(text: string): string {
  return text.replace(
    /&(#x[0-9a-f]+|#\d+|amp|lt|gt|quot|apos);/gi,
    (match, entity: string) => {
      if (entity[0] === "#") {
        const code =
          entity[1].toLowerCase() === "x"
            ? parseInt(entity.slice(2), 16)
            : parseInt(entity.slice(1), 10);
        try {
          return String.fromCodePoint(code);
        } catch {
          return match;
        }
      }
      return ENTITIES[entity.toLowerCase()] ?? match;
    }
  );
}

// Devuelve el contenido de la etiqueta sin el envoltorio CDATA, sin decodificar.
function readRaw(block: string, tag: string): string {
  const match = block.match(
    new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`)
  );
  if (!match) return "";
  const raw = match[1].trim();
  const cdata = raw.match(/^<!\[CDATA\[([\s\S]*?)\]\]>$/);
  return (cdata ? cdata[1] : raw).trim();
}

// Substack escapa las tildes con entidades (&#233;) incluso dentro del CDATA,
// así que siempre se decodifica.
function readTag(block: string, tag: string): string {
  return decodeEntities(readRaw(block, tag)).trim();
}

// Solo aceptamos enlaces a artículos de nuestro propio Substack.
function safePostUrl(link: string): string | null {
  try {
    const url = new URL(link);
    if (url.origin !== SUBSTACK_URL || !url.pathname.startsWith("/p/")) {
      return null;
    }
    return `${url.origin}${url.pathname}`;
  } catch {
    return null;
  }
}

export function parseFeed(xml: string, limit: number): SubstackPost[] {
  const posts: SubstackPost[] = [];
  // El primer fragmento es la cabecera del canal, no un artículo.
  const items = xml.split("<item>").slice(1);

  for (const item of items) {
    if (posts.length >= limit) break;

    const title = readTag(item, "title");
    const url = safePostUrl(readTag(item, "link"));
    const published = new Date(readTag(item, "pubDate"));
    if (!title || !url || Number.isNaN(published.getTime())) continue;

    posts.push({
      title,
      url,
      // Primero se quitan etiquetas y después se decodifica, para no perder
      // texto legítimo como "<v4>" que llegue escapado.
      description: decodeEntities(
        readRaw(item, "description").replace(/<[^>]*>/g, "")
      ).trim(),
      publishedAt: published.toISOString(),
    });
  }

  return posts;
}

// Lee los últimos artículos del RSS del Substack. La página se regenera como
// máximo cada hora; si el feed falla, devuelve [] y la sección se oculta.
export async function getLatestPosts(limit = 3): Promise<SubstackPost[]> {
  try {
    const response = await fetch(FEED_URL, {
      headers: {
        Accept: "application/rss+xml, application/xml;q=0.9, */*;q=0.8",
        "User-Agent":
          "Mozilla/5.0 (compatible; SecretoDefiWeb/1.0; +https://www.secretodefi.com)",
      },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return [];
    return parseFeed(await response.text(), limit);
  } catch {
    return [];
  }
}
