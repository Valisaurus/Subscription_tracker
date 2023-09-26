"use client";
import Logo from "@/components/Logo";
import LightSwitch from "@/components/general/LightSwitch";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

import { useState } from "react";

const VerificationPage = () => {
  const [lightMode, setLightMode] = useState(false);
  return (
    <div className={`${lightMode ? "dark" : ""}`}>
      <div className="flex flex-col items-center bg-white dark:bg-black w-screen h-screen">
        <Logo />
        <LightSwitch lightMode={lightMode} setLightMode={setLightMode} />
        <div className="flex flex-col justify-around items-center w-[332px]">
          <div className="mt-[200px]">
            <h2 className="text-6xl text-center text-black dark:text-white">
              CTRL+
            </h2>
            <i className="text-[20px] text-center text-black dark:text-white]">
              Take ctrl of your streaming subscriptions
            </i>
          </div>
          <div className="flex flex-col justify-center mt-[110px] h-[144px] text-[20px]">
            <i className="mb-[30px]">You've got mail!</i>
            <i>
              To start using the service please press the link in the email to
              verify your account.
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
