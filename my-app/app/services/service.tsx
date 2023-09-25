"use client";
import ServiceForm from "@/components/ServiceForm";
import Logo from "@/components/Logo";
import LightSwitch from "@/components/LightSwitch";
import { useState, useEffect } from "react";
import TotalPrice from "@/components/TotalPrice";
import Plus from "@/components/Plus";
import ServiceList from "@/components/ServiceList";
import SettingsButton from "@/components/SettingsButton";

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

  const userSubscriptionsAndServices = (
    subscriptions: subscriptions,
    services: services,
    subscriptions_users: subscriptions_users
  ) => {
    const result = [];
    if (subscriptions_users !== null) {
      for (const userSubscription of subscriptions_users) {
        const subscription = subscriptions?.find(
          (sub) => sub.id === userSubscription.subscription_id
        );
        if (subscription && userSubscription) {
          const service = services?.find(
            (serv) => serv.id === subscription.service_id
          );
          if (service) {
            result.push({
              service_name: service.name,
              subscription_name: subscription.name,
              subscription_id: userSubscription.id,
              yearly_subscription: subscription.yearly_subscription,
              price: subscription.price,
            });
          }
        }
      }
    }
    return result;
  };
  const combineServicesAndSubscriptions = (
    subscriptions: subscriptions,
    services: services
  ) => {
    const res = [];
    if (subscriptions !== null) {
      for (const subscription of subscriptions) {
        const service = services?.find(
          (service) => service.id === subscription.service_id
        );

        if (service) {
          res.push({
            service_name: service.name,
            subscription_name: subscription.name,
            subscription_price: subscription.price,
            subscription_id: subscription.id,
          });
        }
      }
    }
    return res;
  };

  const SubscriptionsAndServices = userSubscriptionsAndServices(
    data.subscriptions,
    data.services,
    data.subscriptions_users
  );

  const subser = combineServicesAndSubscriptions(
    data.subscriptions,
    data.services
  );

  // const totalPriceMonthly: number | undefined =
  //   SubscriptionsAndServices?.reduce((accumulator, subscription) => {
  //     if (subscription?.price !== null && !subscription?.yearly_subscription) {
  //       return accumulator + subscription?.price;
  //     }
  //     return accumulator;
  //   }, 0);

  let totalPriceMonthly: number = 0;
  let totalPriceYearly: number = 0;

  const totalPrice = () =>
    SubscriptionsAndServices?.forEach((subscription) => {
      if (subscription.price !== null && !subscription?.yearly_subscription) {
        totalPriceMonthly += subscription.price;
      } else if (subscription.price !== null) {
        totalPriceYearly += subscription.price;
      }
    });

  totalPrice();

  return (
    <div className={`${lightMode ? "dark" : ""}`}>
      <div className="flex-1 flex flex-col w-screen justify-center gap-2 bg-white dark:bg-black h-screen">
        <Logo />
        <LightSwitch lightMode={lightMode} setLightMode={setLightMode} />
        <TotalPrice
          totalPriceMonthly={totalPriceMonthly}
          totalPriceYearly={totalPriceYearly}
        />

        <ServiceForm SubscriptionsAndServices={subser} isVisible={isVisible} />
        <ServiceList SubscriptionsAndServices={SubscriptionsAndServices} />
        <Plus isVisible={isVisible} setIsVisible={setIsVisible} />
        <SettingsButton />
      </div>
    </div>
  );
};

export default Services;
