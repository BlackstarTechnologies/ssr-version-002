import Image from "next/image";

export default function Home() {
  return <main>{process.env.HELLO_WORLD}</main>;
}
