// Enlaces compartidos de La Agenda de SecretoDefi (Substack con dominio propio).
export const SUBSTACK_URL = "https://substack.secretodefi.com";
export const SUBSTACK_SUBSCRIBE_URL = `${SUBSTACK_URL}/subscribe`;
export const SUBSTACK_ARCHIVE_URL = `${SUBSTACK_URL}/archive`;

// Añade parámetros UTM a un enlace hacia Substack para medir en sus estadísticas
// cuántas visitas llegan desde la web. No usar en datos estructurados (JSON-LD):
// ahí van las URLs limpias.
export const withUtm = (url: string, campaign: string, content: string) => {
  const tagged = new URL(url);
  tagged.searchParams.set("utm_source", "secretodefi.com");
  tagged.searchParams.set("utm_medium", "referral");
  tagged.searchParams.set("utm_campaign", campaign);
  tagged.searchParams.set("utm_content", content);
  return tagged.toString();
};
