import Eye from "@/assets/icons/eye.svg";

export default function WelcomeCard() {
  return (
    <div className="flex flex-col bg-primary p-8 pb-7 pr-30 rounded-lg max-w-210 min-h-100">
      <h5 className="font-bold text-white text-2xl mb-6">Olá, Joana! :)</h5>
      <span className="text-white text-sm">Quarta-feira, 08/09/2024</span>
      <div className="flex flex-col self-end">
        <div className="flex items-center gap-6">
          <h4 className="font-semibold text-white text-xl">Saldo</h4>
          <Eye className="text-2xl"/>
        </div>
        <hr className="mt-4" style={{ border: "none", height: "2px", backgroundColor: "red", width: "100%" }} />
        <span className="text-white text-base mt-4">Conta corrente</span>
        <span className="font-bold text-white text-3xl mt-2">R$ 2.500,00</span>
      </div>
    </div>
  );
}
