import "@/styles/globals.css";
import type { AppProps } from "next/app";
// Initializes Stencil
import { defineCustomElements } from "@matt/react-library";
defineCustomElements();
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
