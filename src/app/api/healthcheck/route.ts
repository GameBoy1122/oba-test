import { NextResponse, NextRequest } from "next/server";

export function GET(_req: NextRequest) {
   return NextResponse.json({ status: 'UP' });
}