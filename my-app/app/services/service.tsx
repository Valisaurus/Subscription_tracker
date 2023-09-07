"use client";
import ServiceForm from "@/components/ServiceForm";
import Logo from "@/components/Logo";
import LightSwitch from "@/components/LightSwitch";
import { useState } from "react";
import TotalPrice from "@/components/TotalPrice";
import Plus from "@/components/Plus";
type ServicesProps = {
  services: { name: string; price: number }[] | undefined;
  totalPrice: number | undefined;
};

const Services = ({ services, totalPrice }: ServicesProps) => {
  const [lightMode, setLightMode] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <div className={`${lightMode ? "dark" : ""}`}>
      <div className="flex-1 flex flex-col w-screen justify-center gap-2 bg-white dark:bg-black h-screen">
        <Logo />
        <LightSwitch lightMode={lightMode} setLightMode={setLightMode} />
        <TotalPrice totalPrice={totalPrice} />
        <ServiceForm services={services} isVisible={isVisible} />
        <Plus isVisible={isVisible} setIsVisible={setIsVisible} />
      </div>
    </div>
  );
};

export default Services;