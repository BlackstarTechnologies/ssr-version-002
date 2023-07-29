"use client";

import { useClientSide } from "@parts/subcomponents/utils";
import Image from "next/image";
import React from "react";

const getWindow = () => window;

export function SWImage({ width, src, alt, ...props }) {
  const window = useClientSide(getWindow);
  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      height={height}
      width={window.innerWidth}
    />
  );
}

export function SHImage({ width, src, alt, ...props }) {
  const window = useClientSide(getWindow);
  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      height={window.innerHeight}
      width={width}
    />
  );
}

export function SWHImage({ src, alt, ...props }) {
  const window = useClientSide(getWindow);
  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      height={window.innerHeight}
      width={window.innerWidth}
    />
  );
}

export function WindowWidth() {
  //   const window = useClientSide(getWindow);
  const window_width = window.innerWidth;

  return <div>{window_width}</div>;
}
