import { NextMiddleware, NextResponse } from "next/server";
import type { MiddlewareFactory } from "./types";

export function composeMiddleware(
  functions: MiddlewareFactory[] = [],
  index = 0
): NextMiddleware {
  const current = functions[index];
  if (current) {
    const next = composeMiddleware(functions, index + 1);
    return current(next);
  }
  return () => NextResponse.next();
}
