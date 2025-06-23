import Loan from '@/assets/icons/loan.svg';
import Card from '@/assets/icons/card.svg';
import Donation from '@/assets/icons/donation.svg';
import Pix from '@/assets/icons/pix.svg';
import Insurance from '@/assets/icons/insurance.svg';
import CellPhone from '@/assets/icons/cell-phone.svg';
import ServiceCard from './ServiceCard';

export default function ServicesOptions() {
  return (
    <div className="flex flex-col bg-background-service-options p-8 pb-7 rounded-lg gap-8 max-w-210">
      <h5 className="font-bold text-black text-2xl">
        Confira os serviços disponíveis
      </h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        <ServiceCard icon={<Loan className="text-7xl" />} name="Empréstimo" />
        <ServiceCard icon={<Card className="text-7xl" />} name="Meus cartões" />
        <ServiceCard icon={<Donation className="text-7xl" />} name="Doações" />
        <ServiceCard icon={<Pix className="text-7xl" />} name="Pix" />
        <ServiceCard icon={<Insurance className="text-7xl" />} name="Seguros" />
        <ServiceCard
          icon={<CellPhone className="text-7xl" />}
          name="Crédito celular"
        />
      </div>
    </div>
  );
}
