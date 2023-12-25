import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import {
  generateRegexLocale,
  generateRegexPage,
  generateLocaleWithPage,
} from "@/utils/generateRegex";

export const defaultLocale = "th";
export const locales = ["th", "en"];

const pages = [
  "landing",
  "rbfront",
  "ionboard",
  "iprofile",
  "startbiz",
  "login",
];

// const regexLocale = /^(\/th.*)|(\/en.*)$/g;
const regexLocale = generateRegexLocale(locales);

// const regexPage =
//   /^((.*\/landing((\/.*)|($)))|(.*\/rbfront((\/.*)|($)))|(.*\/ionboard((\/.*)|($)))|(.*\/iprofile((\/.*)|($)))|(.*\/startbiz((\/.*)|($))))$/g;
const regexPage = generateRegexPage(pages);

// const regexLocaleWithPage =
//   /^(\/th(($)|(\/landing((\/.*)|($)))|(\/rbfront((\/.*)|($)))|(\/ionboard((\/.*)|($)))|(\/iprofile((\/.*)|($)))|(\/startbiz((\/.*)|($)))))|(\/en(($)|(\/landing((\/.*)|($)))|(\/rbfront((\/.*)|($)))|(\/ionboard((\/.*)|($)))|(\/iprofile((\/.*)|($)))|(\/startbiz((\/.*)|($)))))$/g;
const regexLocaleWithPage = generateLocaleWithPage(locales, pages);

export const nextIntlMiddleware = (request: NextRequest) => {
  if (request.nextUrl.pathname.includes("api")) {
    return;
  }
  const handleI18nRouting = createIntlMiddleware({
    locales: locales,
    defaultLocale: defaultLocale,
    localePrefix: "always",
    // localeDetection: false, // always redirect with defaultLocale
  });

  const response = handleI18nRouting(request);

  if (
    request.nextUrl.pathname.match(regexLocale) &&
    !request.nextUrl.pathname.match(regexLocaleWithPage) &&
    request.nextUrl.pathname.match(regexPage)
  ) {
    const findLocale = request.nextUrl.pathname.substring(1, 3);
    let findPage = pages.find((page) =>
      request.nextUrl.pathname.includes(page)
    );

    if (findPage == null) {
      findPage = request.nextUrl.pathname.substring(4);
    }

    return NextResponse.redirect(
      new URL(`/${findLocale}/${findPage}`, request.url)
    );
  }

  // Step 3: Alter the response
  response.headers.set("x-default-locale", defaultLocale);

  return response;
};
