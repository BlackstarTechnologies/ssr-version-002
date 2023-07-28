import { connectToDB } from "@engine/DB/connect_to_db";

export async function GET(Request) {
  await connectToDB();

  return new Response(JSON.stringify({ hello: "Hello World" }), {
    status: 200,
  });
}
