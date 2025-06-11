import { NextSeo } from 'next-seo'
import Footer from "@/structure/footer";
import Header from "@/structure/header";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <NextSeo
        title='Bytebank | Homepage'
      />
      <div
        className={`${inter.className} font-[family-name:var(--font-inter)]`}
      >
        <Header />
        <main className='min-h-screen'></main>
        <Footer />
      </div>
    </>
  );
}
