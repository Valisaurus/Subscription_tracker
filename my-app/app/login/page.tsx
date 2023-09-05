"use client";
import { useState } from "react";
import LightSwitch from "@/components/LightSwitch";
import LoginForm from "@/components/LoginForm";
export default function Login() {
  const [lightMode, setLightMode] = useState<boolean>(false);
  return (
    <div
      className={`flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 ${
        lightMode ? "bg-slate-50" : "bg-black"
      }`}
    >
      <LightSwitch lightMode={lightMode} setLightMode={setLightMode} />
      <LoginForm lightMode={lightMode} />
    </div>
  );
}
