"use client";
import LightSwitch from "@/components/LightSwitch";
import Logo from "@/components/Logo";
import { useState } from "react";

const ClientSideNotifications = () => {
  const [lightMode, setLightMode] = useState<boolean>(false);
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
      </div>
    </div>
  );
};

export default ClientSideNotifications;
