import type { MiddlewareFactory } from "./types";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import {
  generateRegexLocale,
  generateRegexPage,
  generateLocaleWithPage,
} from "@/libs/generateRegex";
import {defaultLocale, locales, localePrefix} from '@/locales';

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

export const nextIntlMiddleware: MiddlewareFactory = (next: NextMiddleware) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const { nextUrl: { pathname } } = request;

    const handleI18nRouting = createIntlMiddleware({
      locales: locales,
      defaultLocale: defaultLocale,
      localePrefix: localePrefix,
      // localeDetection: false, // always redirect with defaultLocale
    });

    const response = handleI18nRouting(request);

    if (
      pathname.match(regexLocale) &&
      !pathname.match(regexLocaleWithPage) &&
      pathname.match(regexPage)
    ) {
      const findLocale = pathname.substring(1, 3);
      let findPage = pages.find((page) =>
        pathname.includes(page)
      );

      if (findPage == null) {
        findPage = pathname.substring(4);
      }

      return NextResponse.redirect(
        new URL(`/${findLocale}/${findPage}`, request.url)
      );
    }

    // Step 3: Alter the response
    response.headers.set("x-default-locale", defaultLocale);

    return response;
  };
};