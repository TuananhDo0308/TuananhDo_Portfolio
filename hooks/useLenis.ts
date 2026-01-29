import { useLenis } from "lenis/react";
import { useEffect } from "react";

export function useLenisRaf() {
  const lenis = useLenis();

  useEffect(() => {
    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, [lenis]);
}
