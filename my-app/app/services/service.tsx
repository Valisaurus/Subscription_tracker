"use client";
import ServiceForm from "@/components/services/ServiceForm";
import Logo from "@/components/general/Logo";
import LightSwitch from "@/components/general/LightSwitch";
import { useState, useEffect } from "react";
import TotalPrice from "@/components/services/TotalPrice";
import Plus from "@/components/services/Plus";
import ServiceList from "@/components/services/ServiceList";
import Settings from "@/components/settings/settings";

type ServicesProps = {
  data: {
    subscriptions: subscriptions;
    services: services;
    subscriptions_users: subscriptions_users;
    web_push_notifications: web_push_notifications;
    userID: string | undefined;
    userEmail: string | undefined;
  };
};

const Services = ({ data }: ServicesProps) => {
  const [lightMode, setLightMode] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [settingsVisible, setSettingsVisible] = useState<boolean>(false);

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
              subscription_trial_date: userSubscription.trial_end_date,
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

  let totalPriceMonthly: number = 0;
  let totalPriceYearly: number = 0;

  const totalPrice = () =>
    SubscriptionsAndServices?.forEach((subscription) => {
      if (
        subscription.price !== null &&
        !subscription?.yearly_subscription &&
        subscription.subscription_trial_date === null
      ) {
        totalPriceMonthly += subscription.price;
      } else if (
        subscription.price !== null &&
        subscription.subscription_trial_date === null
      ) {
        totalPriceYearly += subscription.price;
      }
    });

  totalPrice();

  type Subscriptions = {
    name: string | null;
    price: number | null;
    id: number;
    service_id: number | null;
  };

  const subscriptions: Subscriptions[] | null =
    data?.subscriptions !== null
      ? data.subscriptions
          .map((subscription) => {
            return {
              name: subscription.name,
              price: subscription.price,
              id: subscription.id,
              service_id: subscription.service_id,
            };
          })
          .sort((a, b) => (a.price || 0) - (b.price || 0))
      : null;

  const services: { name: string | null; id: number }[] | null =
    data?.services !== null
      ? data.services.map((service: { name: string | null; id: number }) => ({
          name: service.name,
          id: service.id,
        }))
      : null;

  return (
    <div className={`${lightMode ? "dark" : ""}`}>
      <div className="flex-1 flex flex-col w-screen justify-center gap-[32px] bg-white dark:bg-black h-screen">
        <Logo />
        <LightSwitch lightMode={lightMode} setLightMode={setLightMode} />
        <TotalPrice
          totalPriceMonthly={totalPriceMonthly}
          totalPriceYearly={totalPriceYearly}
        />
        <ServiceForm
          Subscriptions={subscriptions}
          Services={services}
          isVisible={isVisible}
        />
        <ServiceList SubscriptionsAndServices={SubscriptionsAndServices} />
        <Plus isVisible={isVisible} setIsVisible={setIsVisible} />

        <Settings
          userID={data.userID}
          userEmail={data.userEmail}
          web_push_notifications={data.web_push_notifications}
          settingsVisible={settingsVisible}
          setSettingsVisible={setSettingsVisible}
        />
      </div>
    </div>
  );
};

export default Services;
