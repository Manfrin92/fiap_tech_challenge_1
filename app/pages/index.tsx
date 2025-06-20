import { NextSeo } from 'next-seo'
import Footer from "@/structure/footer";
import Header from "@/structure/header";
import { Inter } from "next/font/google";
import useLocalStorage from '@/hooks/useLocalStorage';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function Home() {  
   const [valueStorage, setValueStorage, getValueStorage] = useLocalStorage("welcome", "This item was get in Local Storage")

  return (
    <>
      <NextSeo
        title='Bytebank | Homepage'
      />
      <div
        className={`${inter.className} font-[family-name:var(--font-inter)]`}
      >
        <Header />
        <main className='min-h-screen'>
          {/* <h1>{valueStorage}</h1>
          <button className='bg-green-dark text-white mr-3 p-2 mt-3' onClick={() => setValueStorage("You are here again")}>Click me</button>
          <button className='bg-green-light' onClick={() => alert(getValueStorage())}>Ler direto do localStorage</button> */}
        </main>
        <Footer />
      </div>
    </>
  );
}
