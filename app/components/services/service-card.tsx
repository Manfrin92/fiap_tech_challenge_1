import type { JSX } from "react"

interface ServiceCardProps {
  icon: JSX.Element
  name: string
}

const ServiceCard = ({ icon, name }: ServiceCardProps) => {
  return (
    <div className="flex flex-col bg-background-service-option rounded-lg pb-10 pt-5 items-center gap-7">
      {icon}
      <span className="text-base font-bold text-black">{name}</span>
    </div>
  )
}

export default ServiceCard
