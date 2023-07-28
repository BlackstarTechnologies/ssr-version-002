import Image from "next/image";

import React from "react";

export default function HomePage() {
  return (
    <main className=" relative ">
      <div className="flex h-screen w-screen">
        <img
          src="/assets/images/rolling_mountains_000.jpg"
          className="h-screen"
          alt="mountains"
        />

        <div className="h-screen mx-auto flex justify-center items-center ">
          {process.env.HELLO_WORLD}
        </div>
      </div>
    </main>
  );
}
