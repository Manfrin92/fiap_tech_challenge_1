import Modal from "@/components/modal";
import StateControllerProvider from "@/contexts/state-controller";
import Footer from "@/structure/footer";
import Header from "@/structure/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} font-[family-name:var(--font-inter)]`}>
      <StateControllerProvider>
        <Header />
        <main className="min-h-screen">
          <Component {...pageProps} />
        </main>
        <Footer />
        <Modal />
      </StateControllerProvider>
    </div>
  );
}
