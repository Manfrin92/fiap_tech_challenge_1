import Loan from '@/assets/icons/loan.svg'
import Card from '@/assets/icons/card.svg'
import Donation from '@/assets/icons/donation.svg'
import Pix from '@/assets/icons/pix.svg'
import Insurance from '@/assets/icons/insurance.svg'
import CellPhone from '@/assets/icons/cell-phone.svg'
import ServiceCard from './service-card'

const Services = () => {
  return (
  <section className="flex flex-col bg-background-service-options p-8 pb-7 rounded-lg gap-8">
    <h5 className="font-bold text-black text-2xl">
      <span className="block sm:hidden xs:hidden">Confira os serviços disponíveis</span>
      <span className="hidden sm:block xs:block">Nova transação</span>
    </h5>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-7">
      <ServiceCard icon={<Loan className="md:text-6xl text-7xl" />} name="Empréstimo" />
      <ServiceCard icon={<Card className="md:text-6xl text-7xl" />} name="Meus cartões" />
      <ServiceCard icon={<Donation className="md:text-6xl text-7xl" />} name="Doações" />
      <ServiceCard icon={<Pix className="md:text-6xl text-7xl" />} name="Pix" />
      <ServiceCard icon={<Insurance className="md:text-6xl text-7xl" />} name="Seguros" />
      <ServiceCard icon={<CellPhone className="md:text-6xl text-7xl" />} name="Crédito celular" />
    </div>
  </section>
  )
}

export default Services
