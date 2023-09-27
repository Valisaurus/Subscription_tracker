"use client";
import GoBackButton from "@/components/general/GoBackButton";

type ChangePasswordProps = {
  isVisible: string;
  setIsVisible: React.Dispatch<React.SetStateAction<string>>;
};

const ChangePassword = ({ isVisible, setIsVisible }: ChangePasswordProps) => {
  return isVisible === "ChangePassword" ? (
    <div className="flex flex-col justify-center items-center h-screen w-full absolute top-0 ">
      <div
        className="absolute h-screen w-full z-10 bg-white dark:bg-black opacity-50"
        onClick={() => setIsVisible("")}
      ></div>
      <div className="flex flex-col justify-center items-center absolute w-[320px] h-[408px] border-4 border-black dark:border-white bg-white dark:bg-black z-50 p-[16px]">
        <div className=" flex flex-col justify-center items-center h-[72px]">
          <i>Byt lösenord</i>
        </div>
        <form
          action="/auth/change-password"
          method="post"
          className="flex flex-col justify-around items-center text-center w-[320px] h-[250px] p-4"
        >
          <input
            type="password"
            name="oldPassword"
            className="px-4 py-2 border-4 w-[250px] border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white"
            placeholder="Gammalt lösenord..."
          />
          <input
            type="password"
            name="newPassword"
            className="px-4 py-2 border-4 w-[250px] border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white"
            placeholder="Nytt lösenord..."
          />
          <button className="px-4 py-2 border-4 w-[250px] border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white mb-6">
            Spara ändringar
          </button>
        </form>
        <div onClick={() => setIsVisible("")}>
          <GoBackButton />
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};
export default ChangePassword;
