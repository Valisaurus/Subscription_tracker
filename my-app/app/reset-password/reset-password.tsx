"use client";
import Logo from "@/components/general/Logo";
import LightSwitch from "@/components/general/LightSwitch";
import { useState } from "react";

const ClientSideResetPassword = () => {
  const [lightMode, setLightMode] = useState<boolean>(false);
  return (
    <div className={`${lightMode ? "dark" : ""}`}>
      <Logo />
      <LightSwitch lightMode={lightMode} setLightMode={setLightMode} />
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className=" flex flex-col justify-center items-center border-4 border-solid border-black dark:border-white text-black dark:text-white w-[332px] h-[250px] p-[16px]">
          <form
            action="/auth/reset-PW"
            method="POST"
            className="flex flex-col gap-[24px]"
          >
            <label htmlFor="password">Skriv in ditt nya lösenord:</label>
            <div className="px-4 py-2 border-4 w-full border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white h-[50px]">
              <input type="password" name="password" />
            </div>
            <button className="px-4 mb-2 border-4 w-full border-black dark:border-white text-black dark:text-white h-[50px]">
              Updatera
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientSideResetPassword;
