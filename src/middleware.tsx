import { NextFetchEvent, NextRequest } from "next/server";
import {
  composeMiddleware,
  ignoreRouteMiddleware,
  nextIntlMiddleware,
  loggerMiddleware,
} from "@/middlewares";

const middlewares = composeMiddleware([
  loggerMiddleware,
  ignoreRouteMiddleware,
  nextIntlMiddleware,
]);

export default async function middleware(
  request: NextRequest,
  event: NextFetchEvent
) {
  return middlewares(request, event);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
