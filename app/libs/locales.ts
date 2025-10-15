
export const locales = ["en", "fr", "es"] as const;

export async function generateLocaleStaticParams() {
  return locales.map((locale) => ({ locale }));
}
