"use client";
import ServiceForm from "@/components/ServiceForm";
import Logo from "@/components/Logo";
import LightSwitch from "@/components/LightSwitch";
import { useState } from "react";
import TotalPrice from "@/components/TotalPrice";
import Plus from "@/components/Plus";

type ServicesProps = {
  data: {
    subscriptions: subscriptions;
    services: services;
    subscriptions_users: subscriptions_users;
  };
};

const Services = ({ data }: ServicesProps) => {
  const [lightMode, setLightMode] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const combineSubscriptionServices = (
    subscriptions: subscriptions,
    services: services,
    subscriptions_users: subscriptions_users
  ) => {
    const result = [];

    for (const userSubscription of subscriptions_users) {
      const subscription = subscriptions?.find(
        (sub) => sub.id === userSubscription.subscription_id
      );
      if (subscription) {
        const service = services?.find(
          (serv) => serv.id === subscription.service_id
        );
        if (service) {
          result.push({
            service_name: service.name,
            subscription_name: subscription.name,
            subscription_id: subscription.id,
            price: subscription.price,
          });
        }
      }
    }

    return result;
  };

  const SubscriptionsAndServices = combineSubscriptionServices(
    data.subscriptions,
    data.services,
    data.subscriptions_users
  );

  const totalPriceMonthly: number | undefined =
    SubscriptionsAndServices?.reduce((accumulator, total) => {
      console.log("Total Price:", total?.price);
      return accumulator + total?.price;
    }, 0);

  return (
    <div className={`${lightMode ? "dark" : ""}`}>
      <div className="flex-1 flex flex-col w-screen justify-center gap-2 bg-white dark:bg-black h-screen">
        <Logo />
        <LightSwitch lightMode={lightMode} setLightMode={setLightMode} />
        <TotalPrice totalPriceMonthly={totalPriceMonthly} />
        <ServiceForm
          SubscriptionsAndServices={SubscriptionsAndServices}
          isVisible={isVisible}
        />
        <Plus isVisible={isVisible} setIsVisible={setIsVisible} />
      </div>
    </div>
  );
};

export default Services;
