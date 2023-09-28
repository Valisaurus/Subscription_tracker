import { useState } from "react";
import ChangePassword from "./pop-ups/change-password";
import ContactUs from "./pop-ups/contact-us";
import DeleteAccount from "./pop-ups/delete-account";
import Notifications from "./pop-ups/notifications";
import Blur from "./blurEffect";

type SettingsProps = {
  settingsVisible: boolean;
  setSettingsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Settings = ({ settingsVisible, setSettingsVisible }: SettingsProps) => {
  const [activePopUp, setActivePopUp] = useState<string>("");

  return settingsVisible ? (
    <div className="flex flex-col justify-center items-center w-full">
      <button
        onClick={() => setSettingsVisible(false)}
        className="absolute right-0 bottom-[270px] bg-white dark:bg-black flex justify-center items-center border-4 border-solid border-black dark:border-white w-[50px] h-[48px] p-[24px] text-[20px]"
      >
        X
      </button>
      <Blur />
      <div className="relative w-[364px] h-[544px]">
        {activePopUp === "change-password" ?? (
          <ChangePassword setActivePopUp={setActivePopUp} />
        )}
        {activePopUp === "contact-us" ?? (
          <ContactUs setActivePopUp={setActivePopUp} />
        )}
        {activePopUp === "delete-account" ?? (
          <DeleteAccount setActivePopUp={setActivePopUp} />
        )}
        {activePopUp === "notifications" ?? (
          <Notifications setActivePopUp={setActivePopUp} />
        )}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Settings;
