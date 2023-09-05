"use client";
import { useState } from "react";
import LightSwitch from "@/components/LightSwitch";
import LoginForm from "@/components/LoginForm";
export default function Login() {
  const [lightMode, setLightMode] = useState<boolean>(false);
  return (
    <div
      className={`flex-1 flex flex-col w-full justify-center gap-2 ${
        lightMode ? "bg-slate-50" : "bg-black"
      }`}
    >
      <LightSwitch lightMode={lightMode} setLightMode={setLightMode} />
      <div className="flex flex-col justify-around items-center h-screen py-24">
        <div className="">
          <h2
            className={`text-6xl text-center ${
              lightMode ? "text-black" : "text-white"
            }`}
          >
            CTRL+
          </h2>
          <i
            className={`text-xs text-center ${
              lightMode ? "text-black" : "text-white"
            }`}
          >
            Take ctrl of your streaming subscriptions
          </i>
        </div>
        <div>
          <LoginForm lightMode={lightMode} />
        </div>
      </div>
    </div>
  );
}
