import type { MiddlewareFactory } from "./types";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";

const IGNORE_ROUTES = [
  "/api",
  "/distribution",
];

export const ignoreRouteMiddleware: MiddlewareFactory = (next: NextMiddleware) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const { nextUrl: { pathname } } = request;

    if (IGNORE_ROUTES.some(val => pathname.startsWith(val))) {
      return NextResponse.next()
    }

    return next(request, _next);
  };
};