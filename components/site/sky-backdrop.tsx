"use client";

import { useEffect, useRef } from "react";

type VantaEffect = { destroy: () => void };
type VantaWindow = Window & {
  VANTA?: { CLOUDS2?: (options: Record<string, unknown>) => VantaEffect };
};

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded === "true") resolve();
      else existing.addEventListener("load", () => resolve(), { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.addEventListener("load", () => {
      script.dataset.loaded = "true";
      resolve();
    }, { once: true });
    script.addEventListener("error", () => reject(), { once: true });
    document.head.appendChild(script);
  });
}

export function SkyBackdrop() {
  const canvasHost = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let effect: VantaEffect | undefined;

    async function startClouds() {
      try {
        await loadScript("/vendor/three.min.js");
        await loadScript("/vendor/vanta.clouds2.min.js");
        if (cancelled || !canvasHost.current) return;
        const vanta = (window as VantaWindow).VANTA;
        if (!vanta?.CLOUDS2) return;
        effect = vanta.CLOUDS2({
          el: canvasHost.current,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 300,
          minWidth: 200,
          scale: 1,
          scaleMobile: 1,
          speed: 0.55,
          texturePath: "/gallery/noise.png",
          backgroundColor: 0x5f9bd4,
          skyColor: 0x5f9bd4,
        });
      } catch {
        // The CSS sky remains visible if WebGL is unavailable.
      }
    }

    const handlePointer = (event: PointerEvent) => {
      if (!layer.current) return;
      const x = ((event.clientX / window.innerWidth - 0.5) * -28).toFixed(2);
      const y = ((event.clientY / window.innerHeight - 0.5) * -8).toFixed(2);
      layer.current.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1.06)`;
    };

    startClouds();
    window.addEventListener("pointermove", handlePointer, { passive: true });
    return () => {
      cancelled = true;
      window.removeEventListener("pointermove", handlePointer);
      effect?.destroy();
    };
  }, []);

  return (
    <div className="sky" aria-hidden="true" ref={layer}>
      <div className="sky__canvas" ref={canvasHost} />
      <div className="sky__veil" />
    </div>
  );
}
