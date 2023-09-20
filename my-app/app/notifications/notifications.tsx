"use client";
import LightSwitch from "@/components/LightSwitch";
import Logo from "@/components/Logo";
import { useState } from "react";
export const dynamic = "force-dynamic";
const ClientSideNotifications = () => {
  const [lightMode, setLightMode] = useState<boolean>(false);

  const notificationsSupported = () => {
    if (
      window?.Notification &&
      navigator?.serviceWorker &&
      window?.PushManager
    ) {
      return true;
    }
    return false;
  };
  const saveSubscription = async (subscription: PushSubscription) => {
    const ORIGIN = window.location.origin;
    const BACKEND_URL = `${ORIGIN}/notifications/registerPushNotifications`;

    const response = await fetch(BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subscription),
    });
    return response.json();
  };

  const unregisterServiceWorkers = async () => {
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.map((r) => r.unregister()));
  };

  const registerServiceWorker = async () => {
    return navigator.serviceWorker.register("/service.js");
  };

  const NotificationComp = () => {
    if (!notificationsSupported()) {
      return <div>Install the PWA first</div>;
    }
    return <div>WebPush PWA</div>;
  };

  const subscribe = async () => {
    await unregisterServiceWorkers();

    const swRegistration = await registerServiceWorker();
    await Notification.requestPermission();

    try {
      const options = {
        applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
        userVisibleOnly: true,
      };
      const subscription = await swRegistration.pushManager.subscribe(options);

      await saveSubscription(subscription);

      console.log({ subscription });
    } catch (err) {
      console.error("Error", err);
    }
  };

  return (
    <div className={`${lightMode ? "dark" : ""}`}>
      <div className="text-black dark:text-white h-screen w-screen bg-white dark:bg-black">
        <Logo />
        <LightSwitch lightMode={lightMode} setLightMode={setLightMode} />
        <form action="/notifications/registerNumber" method="post">
          <label htmlFor="phone-number" className="italic">
            If you want notifications to your mobile phone through text
            messages, please fill in your mobile phone number below
          </label>
          <input type="tel" name="phone-number" placeholder="Phone number.." />
          <button className="border-4 border-black dark:border-white text-center">
            Save
          </button>
        </form>
        <div className="flex flex-col justify-center items-center w-screen mt-[10rem]">
          <div className="flex flex-col w-[50rem] h-[50rem]">
            {NotificationComp()}
            <button
              onClick={() => {
                subscribe();
              }}
            >
              Register service worker
            </button>
            <button onClick={unregisterServiceWorkers}>Unregister all</button>
            <form action="/notifications/sendNotification" method="GET">
              <button>Recieve notification</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSideNotifications;
