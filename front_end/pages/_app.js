import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    let lenis;
    (async () => {
      const LenisModule = await import("lenis");
      const Lenis = LenisModule.default;
      lenis = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.8,
        touchMultiplier: 2,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    })();

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#0F172A",
            color: "#FDFBF7",
            border: "3px solid #0F172A",
            borderRadius: "0",
            fontSize: "14px",
            fontFamily: "'JetBrains Mono', monospace",
            boxShadow: "4px 4px 0px #E8572A",
          },
        }}
      />
    </>
  );
}
