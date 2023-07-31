"use client";
import React, { useState } from "react";

export const NavDropDown = (props) => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center justify-center">Sign Up</div>
      <div className={`${dropDown ? "visible" : "hidden"}`}>
        <div>dropped</div>
      </div>
    </div>
  );
};
