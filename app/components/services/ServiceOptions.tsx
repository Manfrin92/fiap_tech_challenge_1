import CardSvg from "../icons/CardSvg";
import CellPhoneSvg from "../icons/CellPhoneSvg";
import DonationSvg from "../icons/DonationSvg";
import InsuranceSvg from "../icons/InsuranceSvg";
import LoanSvg from "../icons/LoanSvg";
import PixSvg from "../icons/PixSvg";
import ServiceCard from "./ServiceCard";

export default function ServicesOptions() {
  return (
    <div className="flex flex-col bg-background-service-options p-8 pb-7 rounded-lg gap-8 max-w-210">
      <h5 className="font-bold text-black text-2xl">Confira os serviços disponíveis</h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        <ServiceCard icon={<LoanSvg />} name="Empréstimo" />
        <ServiceCard icon={<CardSvg />} name="Meus cartões" />
        <ServiceCard icon={<DonationSvg />} name="Doações" />
        <ServiceCard icon={<PixSvg />} name="Pix" />
        <ServiceCard icon={<InsuranceSvg />} name="Seguros" />
        <ServiceCard icon={<CellPhoneSvg />} name="Crédito celular" />
      </div>
    </div>
  );
}