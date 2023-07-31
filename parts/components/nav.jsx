import React from "react";
import Image from "next/image";

import {NavDropDown} from "@subcomponents/nav_utils.tsx"

function Link({ text, href }) {
  return (
    <a href={href} className="px-2 mx-2 h-full flex items-center justify-center hover:bg-[#00000067]">
      {text}
    </a>
  );
}


function Nav(props) {
  const sqr = 32;
  return (
    <div className="sticky w-full flex-initial  flex  bg-[#79ecf0] ">
      <div id="NavLeft" className="flex items-center justify-center text-[#ffffb0] text-[2rem]">
        <Image
          src="/assets/images/sunflower_logo.png"
          alt="sunflower"
          className="m-2"
          height={sqr}
          width={sqr}
        />
        Sunflower
      </div>
      <div className="text-[white] flex">
      <Link text="Home" href="/#Home" />
        <Link text="About" href="/#About" />
        <Link text="Pricing" href="/#Subcription" />
      </div>
      <div className="mx-auto" />
      <div className="flex items-center justify-center space-between">
        
        <Link text="Contact Us" href="/#Contact" />
        
 <NavDropDown/>
      </div>
    </div>
  );
}

export default Nav;
