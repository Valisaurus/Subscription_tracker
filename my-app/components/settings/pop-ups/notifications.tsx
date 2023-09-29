import { useState } from "react";
import Arrow from "../../general/Arrow";
type NotificationsProps = {
  setActivePopUp: React.Dispatch<React.SetStateAction<string>>;
  data: web_push_notifications;
};

const Notifications = ({ setActivePopUp, data }: NotificationsProps) => {
  const [subscribed, setSubscribed] = useState<boolean>(
    data?.length !== 0 ? true : false
  );
  const [emailSubscription, setEmailSubscription] = useState<boolean>(false);
  const [phoneSubscription, setPhoneSubscription] = useState<boolean>(false);

  const saveSubscription = async (subscription: PushSubscription) => {
    const ORIGIN = window.location.origin;
    const BACKEND_URL = `${ORIGIN}/api/registerPushNotifications`;

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
    <div className="flex flex-col justify-center items-center gap-[32px]">
      <div className="py-[24px]">
        <i>Kontakta oss</i>
      </div>

      <div className="flex flex-col gap-[24px] w-full">
        <div className="flex items-center justify-between h-[48px]">
          <label htmlFor="has_trial" className="text-black dark:text-white">
            Pushnotiser
          </label>
          <div className="relative">
            <input
              type="checkbox"
              name="has_trial"
              onChange={() => {
                subscribe();
                setSubscribed(!subscribed);
              }}
              className="appearance-none contents-[''] checked:text-black checked:bg-white checked:dark:bg-black checked:dark:text-white w-[53px] h-[48px] border-4 border-black dark:border-white border-solid z-10"
            />
            <span
              className={`absolute top-[7px] left-[8px] h-[30px] w-[30px] text-black z-0 ${
                subscribed ? "block" : "hidden"
              } bg-black dark:bg-white`}
              style={{
                clipPath:
                  "polygon(49% 66%, 85% 31%, 92% 37%, 50% 80%, 24% 56%, 31% 50%)",
              }}
            ></span>
          </div>
        </div>
        <div className="flex items-center justify-between h-[48px]">
          <label htmlFor="has_trial" className="text-black dark:text-white">
            Mailnotiser
          </label>
          <div className="relative">
            <input
              type="checkbox"
              name="has_trial"
              onChange={() => setEmailSubscription(!emailSubscription)}
              className="appearance-none contents-[''] checked:text-black checked:bg-white checked:dark:bg-black checked:dark:text-white w-[53px] h-[48px] border-4 border-black dark:border-white border-solid z-10"
            />
            <span
              className={`absolute top-[7px] left-[8px] h-[30px] w-[30px] text-black z-0 ${
                emailSubscription ? "block" : "hidden"
              } bg-black dark:bg-white`}
              style={{
                clipPath:
                  "polygon(49% 66%, 85% 31%, 92% 37%, 50% 80%, 24% 56%, 31% 50%)",
              }}
            ></span>
          </div>
        </div>
        <div className="flex items-center justify-between h-[48px]">
          <label htmlFor="has_trial" className="text-black dark:text-white">
            SMS-notiser
          </label>
          <div className="relative">
            <input
              type="checkbox"
              name="has_trial"
              onChange={() => setPhoneSubscription(!phoneSubscription)}
              className="appearance-none contents-[''] checked:text-black checked:bg-white checked:dark:bg-black checked:dark:text-white w-[53px] h-[48px] border-4 border-black dark:border-white border-solid z-10"
            />
            <span
              className={`absolute top-[7px] left-[8px] h-[30px] w-[30px] text-black z-0 ${
                phoneSubscription ? "block" : "hidden"
              } bg-black dark:bg-white`}
              style={{
                clipPath:
                  "polygon(49% 66%, 85% 31%, 92% 37%, 50% 80%, 24% 56%, 31% 50%)",
              }}
            ></span>
          </div>
        </div>
      </div>
      <form
        action="/api/registerNumber"
        method="post"
        className="flex flex-col w-[332px] gap-[32px]"
      >
        <input
          className="border-4 border-black dark:border-white px-[12px] py-[16px] h-[48px] bg-white dark:bg-black"
          type="tel"
          name="phone-number"
          placeholder="Telefonnummer..."
        />
        <button className="flex flex-col justify-center items-center border-4 border-black dark:border-white text-center max-h-[48px] px-[12px] py-[16px]">
          Spara ändringar
        </button>
      </form>

      <div className="flex flex-col justify-center items-center">
        <div
          className="flex flex-col justify-center items-center border-4 border-black dark:border-white text-center h-[48px] w-[172px]"
          onClick={() => setActivePopUp("")}
        >
          <div className="flex flex-row gap-[16px]">
            <Arrow /> Tillbaka
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
