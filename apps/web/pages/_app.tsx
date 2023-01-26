import type { AppProps } from "next/app";
import "@picocss/pico/css/pico.css";
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
