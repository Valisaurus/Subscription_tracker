"use client";
import Logo from "@/components/Logo";
import LightSwitch from "@/components/LightSwitch";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

import { useState } from "react";

const VerificationPage = () => {
  const [lightMode, setLightMode] = useState(false);
  return (
    <div className={`${lightMode ? "dark" : ""}`}>
      <div className="flex-1 flex flex-col w-full justify-center gap-2 bg-white dark:bg-black">
        <Logo />
        <LightSwitch lightMode={lightMode} setLightMode={setLightMode} />
        <div className="flex flex-col justify-around items-center h-screen py-24">
          <div className="flex flex-col justify-around items-center">
            <div>
              <h2 className="text-6xl text-center text-black dark:text-white">
                CTRL+
              </h2>
              <h3>This is the verification page</h3>
              <div>
                <h2>Confirm your signup</h2>

                <p>Follow this link to confirm your user:</p>
                <p>
                  <a href="{{ .ConfirmationURL }}">Confirm your mail</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
