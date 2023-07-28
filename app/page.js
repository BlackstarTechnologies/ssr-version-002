import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen w-screen">
      <div>{process.env.HELLO_WORLD}</div>
    </main>
  );
}
