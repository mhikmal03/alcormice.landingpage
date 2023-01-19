import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    });
  }, []);
  return <Component {...pageProps} />
}
