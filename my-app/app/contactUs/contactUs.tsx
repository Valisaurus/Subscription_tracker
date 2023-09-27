"use client";
import { useState } from "react";
import LightSwitch from "@/components/general/LightSwitch";
import Logo from "@/components/general/Logo";
import GoBackButton from "@/components/general/GoBackButton";

const ContactUsClient = () => {
  const [lightMode, setLightMode] = useState(false);

  return (
    <div className={`${lightMode ? "dark" : ""}`}>
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-white dark:bg-black">
        <Logo />
        <LightSwitch lightMode={lightMode} setLightMode={setLightMode} />
        <div className="flex flex-col justify-center items-center w-[300px] gap-[32px]">
          <form
            action="/auth/contactUs"
            method="post"
            className="flex flex-col justify-between items-center text-center w-[320px] gap-[24px]"
          >
            <textarea
              className="px-4 py-2 border-4 w-[300px] h-[319px] border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white  resize-none"
              name="comment"
              form="contactUs"
            >
              Skriv ditt meddelande...
            </textarea>

            <button className="px-4 py-2 border-4 w-[250px] border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white">
              Skicka{" "}
            </button>
          </form>
          <GoBackButton />
        </div>
      </div>
    </div>
  );
};
export default ContactUsClient;
