import React from "react";
import Image from "next/image";

function Nav(props) {
  const sqr = 32;
  return (
    <div className="sticky w-screen p-4 flex items-center bg-[cadetblue] px-[2rem]">
      <Image
        src="/assets/images/sunflower_logo.png"
        alt="sunflower"
        height={sqr}
        width={sqr}
      />
      Nav
    </div>
  );
}

export default Nav;
