import React from "react";
import Image from "next/image";

function Link({ text, href }) {
  return (
    <a href={href} className="px-4">
      {text}
    </a>
  );
}

function Nav(props) {
  const sqr = 32;
  return (
    <div className="sticky w-full flex-initial  flex items-center bg-[cadetblue] ">
      <div id="NavLeft" className="flex items-center justify-center">
        <Image
          src="/assets/images/sunflower_logo.png"
          alt="sunflower"
          className="m-2"
          height={sqr}
          width={sqr}
        />
        Sunflower
      </div>
      <div className="mx-auto" />
      <div className="flex items-center justify-center space-between">
        <Link text="Home" href="/#Home" />
        <Link text="About" href="/#About" />
        <Link text="Pricing" href="/#Subcription" />
        <Link text="Contact Us" href="/#Contact" />
        <Link text="Sign Up" href="/auth/sign_up" />
      </div>
    </div>
  );
}

export default Nav;
