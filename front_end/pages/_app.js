import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <ParallaxProvider>
      <Component {...pageProps} />
      </ParallaxProvider>
      <Toaster />
    </>
  );
}
