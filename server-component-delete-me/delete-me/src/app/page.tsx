import ClientComponentPage from "./components/clientComponentAccountData";
import ServerComponentPage from "./components/serverComponentAccountData";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

      <h1>Fetching from file system from SERVER</h1>
      <ServerComponentPage />
      <h1>Fetching from file system from from CLIENT</h1>
      <ClientComponentPage />
    </div>
  );
}
