import { useState } from "react";
import ChangePassword from "./pop-ups/change-password";
import ContactUs from "./pop-ups/contact-us";
import DeleteAccount from "./pop-ups/delete-account";
import Notifications from "./pop-ups/notifications";
import Blur from "./blurEffect";

type SettingsProps = {
  settingsVisible: boolean;
  setSettingsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  web_push_notifications: web_push_notifications;
  userID: string | undefined;
  userEmail: string | undefined;
};

const Settings = ({
  settingsVisible,
  setSettingsVisible,
  web_push_notifications,
  userID,
  userEmail,
}: SettingsProps) => {
  const [activePopUp, setActivePopUp] = useState<string>("");

  return settingsVisible ? (
    <div className="absolute flex flex-col justify-center items-center gap-[16px] w-full h-screen text-black dark:text-white">
      <Blur
        settingsVisible={settingsVisible}
        setSettingsVisible={setSettingsVisible}
      />
      <div className="relative flex justify-end w-[364px] z-50">
        <button
          onClick={() => {
            setSettingsVisible(false);
            setActivePopUp("");
          }}
          className="bg-white dark:bg-black flex justify-center items-center border-4 border-solid border-black dark:border-white w-[50px] h-[48px] p-[24px] text-[20px]"
        >
          X
        </button>
      </div>

      <div className="relative w-[364px] h-[544px] z-50">
        <div className="flex flex-col gap-[32px] border-4 border-solid border-black dark:border-white p-[16px] h-auto bg-white dark:bg-black">
          {activePopUp === "" ? (
            <div className="flex flex-col justify-center items-center gap-[32px]">
              <div className="py-[24px]">
                <i>inställningar</i>
              </div>
              <div className="flex flex-col items-center gap-[24px] w-full">
                <div
                  className="flex flex-col justify-center items-center border-4 border-solid border-black dark:border-white px-[12px] py-[16px] max-h-[48px] w-full"
                  onClick={() => setActivePopUp("notifications")}
                >
                  Notiser
                </div>
                <div
                  className="flex flex-col justify-center items-center border-4 border-solid border-black dark:border-white px-[12px] py-[16px] max-h-[48px] w-full"
                  onClick={() => setActivePopUp("change-password")}
                >
                  Byt lösenord
                </div>
                <div
                  className="flex flex-col justify-center items-center border-4 border-solid border-black dark:border-white px-[12px] py-[16px] max-h-[48px] w-full"
                  onClick={() => setActivePopUp("contact-us")}
                >
                  Kontakta oss
                </div>
                <div
                  className="flex flex-col justify-center items-center border-4 border-solid border-black dark:border-white px-[12px] py-[16px] max-h-[48px] w-full"
                  onClick={() => setActivePopUp("delete-account")}
                >
                  Radera konto
                </div>
              </div>
              <form
                action="/auth/sign-out"
                method="post"
                className="flex flex-col justify-center items-center"
              >
                <button className="flex flex-col justify-center items-center border-4 border-solid border-black dark:border-white px-[12px] py-[16px] max-h-[48px] w-[139px]">
                  Logga ut
                </button>
              </form>
            </div>
          ) : (
            <></>
          )}

          {activePopUp === "change-password" ? (
            <ChangePassword setActivePopUp={setActivePopUp} />
          ) : (
            <></>
          )}
          {activePopUp === "contact-us" ? (
            <ContactUs setActivePopUp={setActivePopUp} />
          ) : (
            <></>
          )}
          {activePopUp === "delete-account" ? (
            <DeleteAccount
              userEmail={userEmail}
              userID={userID}
              setActivePopUp={setActivePopUp}
            />
          ) : (
            <></>
          )}
          {activePopUp === "notifications" ? (
            <Notifications
              data={web_push_notifications}
              setActivePopUp={setActivePopUp}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="absolute bottom-0">
        <div
          className="flex flex-col justify-center items-center h-[72px] w-screen text-black dark:text-white"
          onClick={() => setSettingsVisible(true)}
        >
          Inställningar
        </div>
      </div>
    </div>
  ) : (
    <div className="absolute bottom-0">
      <div
        className="flex flex-col justify-center items-center h-[72px] w-screen text-black dark:text-white"
        onClick={() => setSettingsVisible(true)}
      >
        Inställningar
      </div>
    </div>
  );
};

export default Settings;
