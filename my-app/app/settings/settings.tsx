"use client";
import Link from "next/link";
import ChangePassword from "@/components/ChangePassword";
import DeleteAccount from "@/components/DeleteAccount";
import LightSwitch from "@/components/LightSwitch";
import LogoutButton from "@/components/LogoutButton";

import Logo from "@/components/Logo";
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
          <div className="mb-6 w-[300px] pt-7">
            <div className="px-4 py-2 border-4 w-[300px] border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white mb-6 h-[50px] text-center">
              <Link href="/notifications">Notifications</Link>
            </div>
            <div
              onClick={() => setIsVisible("ChangePassword")}
              className="px-4 py-2 border-4 w-full border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white mb-6 h-[50px] text-center"
            >
              Change password
            </div>
            <div className="px-4 py-2 border-4 w-[300px] border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white mb-6 h-[50px] text-center">
              <Link href="/contactUs">Contact us</Link>
            </div>
            <div
              onClick={() => setIsVisible("DeleteAccount")}
              className="px-4 py-2 border-4 w-full border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white mb-6 h-[50px] text-center"
            >
              Delete Account
            </div>

            <LogoutButton />
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
