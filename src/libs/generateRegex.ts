export const generateRegexLocale = (locales: string[]) => {
  const regexLocale = locales?.map((locale) => `(\\/${locale}.*)`).join("|");

  return new RegExp(`^${regexLocale}$`, "g");
};

export const generateRegexPage = (pages: string[]): RegExp => {
  const regexPage = pages
    ?.map((page) => `(.*\\/${page}((\\/.*)|($)))`)
    .join("|");

  return new RegExp(`^(${regexPage})$`, "g");
};
export const generateLocaleWithPage = (
  locales: string[],
  pages: string[]
): RegExp => {
  const regexPage = pages?.map((page) => `(\\/${page}((\\/.*)|($)))`).join("|");

  const regexLocaleWithPage = locales
    ?.map((locale) => `(\\/${locale}(($)|${regexPage}))`)
    .join("|");

  return new RegExp(`^${regexLocaleWithPage}$`, "g");
};
