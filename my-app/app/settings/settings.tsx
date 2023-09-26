"use client";
import Link from "next/link";
import ChangePassword from "@/components/auth/ChangePassword";
import DeleteAccount from "@/components/auth/DeleteAccount";
import LightSwitch from "@/components/general/LightSwitch";
import LogoutButton from "@/components/auth/LogoutButton";

import Logo from "@/components/general/Logo";
import { useState } from "react";

type ClientSideSettingsProps = {
  user_id: string | undefined;
  user_email: string | undefined;
};

const ClientSideSettings = ({
  user_id,
  user_email,
}: ClientSideSettingsProps) => {
  const [lightMode, setLightMode] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<string>("");
  return (
    <div className={`${lightMode ? "dark" : ""}`}>
      <div className="text-black dark:text-white h-screen w-screen bg-white dark:bg-black">
        <Logo />
        <LightSwitch lightMode={lightMode} setLightMode={setLightMode} />
        <div className="flex flex-col justify-center items-center">
          <div className="mt-[208px] text-center">
            <p className="mb-[98px]">Settings</p>
            <div className="w-[300px]">
              <div className="px-4 py-2 border-4 w-[300px] border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white mb-[40px] h-[50px] text-center">
                <Link href="/notifications">Notifications</Link>
              </div>
              <div
                onClick={() => setIsVisible("ChangePassword")}
                className="px-4 py-2 border-4 w-full border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white mb-[40px] h-[50px] text-center"
              >
                Change password
              </div>
              <div className="px-4 py-2 border-4 w-[300px] border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white mb-[40px] h-[50px] text-center">
                <Link href="/contactUs">Contact us</Link>
              </div>
              <div
                onClick={() => setIsVisible("DeleteAccount")}
                className="px-4 py-2 border-4 w-full border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white mb-[80px] h-[50px] text-center"
              >
                Delete Account
              </div>

              <LogoutButton />
            </div>
          </div>
        </div>
      </div>
      <ChangePassword isVisible={isVisible} setIsVisible={setIsVisible} />
      <DeleteAccount
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        user_id={user_id}
        user_email={user_email}
      />
    </div>
  );
};

export default ClientSideSettings;
