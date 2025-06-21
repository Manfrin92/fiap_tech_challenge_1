import ServicesOptions from "@/components/services/ServiceOptions";
import WelcomeCard from "@/components/services/WelcomeCard";

export default function ServicesPage() {
  return (
    <div className="flex flex-col mt-6 gap-6 p-6">
      <WelcomeCard />
      <ServicesOptions />
    </div>
  );
}
