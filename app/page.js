import HomePage from "@pages/Home";
import { connectToDB } from "@DB/connect_to_db";

connectToDB();

export default function Home() {
  return <HomePage />;
}
