import type { MiddlewareFactory } from "./types";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";

export const loggerMiddleware: MiddlewareFactory = (next: NextMiddleware) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const { nextUrl: { pathname } } = request;
    console.log(pathname);
    return next(request, _next);
  };
};