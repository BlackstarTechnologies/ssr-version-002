import HomePage from "@parts/pages/Home";
import { connectToDB } from "@engine/DB/connect_to_db";

connectToDB();

export default function Home() {
  return <HomePage />;
}
