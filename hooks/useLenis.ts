import { useLenis } from "lenis/react";
import { useEffect } from "react";

/**
 * Note: ReactLenis with `root` prop already runs its own internal RAF loop by default.
 * Only use manual useLenisRaf if `autoRaf={false}` is configured on ReactLenis.
 */
export function useLenisRaf() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    let rafId: number;
    function raf(time: number) {
      lenis?.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [lenis]);
}
