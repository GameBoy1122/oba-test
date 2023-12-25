import { NextRequest } from "next/server";
import { nextIntlMiddleware } from "@/middlewares/next-intl-middleware";

export default async function middleware(request: NextRequest) {
  // next-intl middleware
  const response = nextIntlMiddleware(request);

  return response;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
