"use client";
import { useState } from "react";
import LightSwitch from "@/components/general/LightSwitch";
import LoginForm from "@/components/login/LoginForm";
import Logo from "@/components/general/Logo";

export default function Login() {
  const [lightMode, setLightMode] = useState<boolean>(false);
  const [renderTopLogo, setRenderTopLogo] = useState<boolean>(false);
  return (
    <div className={`${lightMode ? "dark" : ""}`}>
      <div className="flex-1 flex flex-col w-full gap-2 bg-white dark:bg-black">
        <LightSwitch lightMode={lightMode} setLightMode={setLightMode} />
        <div className="flex flex-col h-screen ">
          <div className="flex flex-col items-center">
            {renderTopLogo ? (
              <Logo />
            ) : (
              <div className="pt-[200px]">
                <h2 className="text-6xl text-center text-black dark:text-white">
                  CTRL+
                </h2>
                <i className="text-[20px] text-center text-black dark:text-white">
                  Take ctrl of your streaming subscriptions
                </i>
              </div>
            )}
            <div className="pt-[105px]">
              <LoginForm setRenderTopLogo={setRenderTopLogo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
