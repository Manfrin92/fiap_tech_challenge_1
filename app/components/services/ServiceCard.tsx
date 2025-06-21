import type { JSX } from "react";

interface ServiceCardProps {
  icon: JSX.Element;
  name: string;
}

export default function ServiceCard({ icon, name }: ServiceCardProps) {
  return (
    <div className="flex flex-col bg-background-service-option rounded-lg pb-10 pt-5 items-center gap-7 min-w-52">
      {icon}
      <span className="text-base font-bold text-black">{name}</span>
    </div>
  );
}