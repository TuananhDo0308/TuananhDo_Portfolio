"use client";

import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { useEffect } from "react";

export default function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    requestAnimationFrame(() => {
      const hash = window.location.hash;

      if (hash) {
        lenis?.scrollTo(hash, { immediate: true });
        window.scrollTo({ top: window.scrollY, left: 0, behavior: "instant" });
        return;
      }

      lenis?.scrollTo(0, { immediate: true });
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
  }, [lenis, pathname]);

  useEffect(() => {
    const resetHorizontalScroll = () => {
      if (window.scrollX !== 0) {
        window.scrollTo({ top: window.scrollY, left: 0, behavior: "instant" });
      }
    };

    resetHorizontalScroll();
    window.addEventListener("resize", resetHorizontalScroll);
    window.addEventListener("scroll", resetHorizontalScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", resetHorizontalScroll);
      window.removeEventListener("scroll", resetHorizontalScroll);
    };
  }, []);

  return null;
}
