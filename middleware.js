import { connectToDB } from "@DB/connect_to_db.js";

// import type { NextRequest } from 'next/server'
import { NextResponse } from "next/server";

const conn = connectToDB();

export default async function middleware(Request) {
  await conn;
  console.log("Request Headers:\n", Request.headers);

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/home"],
};
