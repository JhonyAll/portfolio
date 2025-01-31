export const defaultLocale = 'pt';
export const locales = ['pt', 'en'] as const;
export type ValidLocale = typeof locales[number];

export const languageNames: Record<ValidLocale, string> = {
  pt: 'Português',
  en: 'English'
}; 