import ServicesOptions from '@/components/services/ServiceOptions';
import WelcomeCard from '@/components/services/WelcomeCard';
import { NextSeo } from 'next-seo';

export default function ServicesPage() {
  // TODO: get it from external API
  const accountOwner = {
    name: 'Joana',
    balance: 2500,
  };

  return (
    <div className="container">
      <NextSeo title="Bytebank | Services" />
      <WelcomeCard name={accountOwner.name} balance={accountOwner.balance} />
      <ServicesOptions />
    </div>
  );
}
