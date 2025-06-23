import ServicesOptions from "@/components/services/ServiceOptions";
import WelcomeCard from "@/components/services/WelcomeCard";
import { NextSeo } from "next-seo";

export default function ServicesPage() {
  return (
    <div className="container">
      <NextSeo title="Bytebank | Services" />
      <WelcomeCard />
      <ServicesOptions />
    </div>
  );
}
