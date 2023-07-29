import { connectToDB } from "@engine/DB/connect_to_db";
import { UniqueVisitor } from "@engine/DB/models/unique_visitors";
import { randomUUID } from "crypto";
// import type { NextRequest } from 'next/server'
import { NextResponse } from "next/server";

const conn = connectToDB();

export default async function middleware(Request) {
  await conn;
  console.log(Request);
  const Response = NextResponse.next();
  const unique_visitor_uuid = Request.cookies.has("unique_visitor");
  if (unique_visitor_uuid) {
    const unique_visitor = await UniqueVisitor.find({
      uuid: unique_visitor_uuid,
    });
    if (unique_visitor) {
      UniqueVisitor.updateOne(
        { uuid: unique_visitor.uuid },
        { visits: [...unique_visitor.visits, new Date()] }
      );
      return Response;
    } else {
      const unique_visitor = await UniqueVisitor.create({
        uuid: unique_visitor_uuid,
        headers: Request.headers,
      });

      return Response;
    }
  }

  const unique_visitor = await UniqueVisitor.create({
    uuid: randomUUID(),
    headers: Request.headers,
  });

  Response.cookies.set("unique_visitor", unique_visitor.uuid);

  return Response;
}

export const config = {
  matcher: "/*",
};
