"use client";

import ReactLenis from "lenis/react";
import React, { PropsWithChildren } from "react";

export default function Lenis({ children }: PropsWithChildren) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,        // mượt tự nhiên
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
