import GoBackButton from "@/components/general/GoBackButton";
import Arrow from "../../general/Arrow";
type ChangePasswordProps = {
  setActivePopUp: React.Dispatch<React.SetStateAction<string>>;
};
const ChangePassword = ({ setActivePopUp }: ChangePasswordProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-[32px]">
      <div className="py-[24px]">
        <i>Byt lösenord</i>
      </div>
      <form
        action="/auth/change-password"
        method="post"
        className="flex flex-col gap-[24px] w-full"
      >
        <input
          type="password"
          name="oldPassword"
          className="flex flex-col justify-center items-center border-4 border-solid bg-white dark:bg-black border-black dark:border-white px-[12px] py-[16px] max-h-[48px] w-full"
          placeholder="Gammalt lösenord..."
        />
        <input
          type="password"
          name="newPassword"
          className="flex flex-col justify-center items-center border-4 border-solid bg-white dark:bg-black border-black dark:border-white px-[12px] py-[16px] max-h-[48px] w-full"
          placeholder="Nytt lösenord..."
        />
        <button className="flex flex-col justify-center items-center border-4 border-solid  border-black dark:border-white px-[12px] py-[16px] max-h-[48px] w-full">
          Spara ändringar
        </button>
      </form>
      <div className="flex flex-col justify-center items-center">
        <div
          className="flex flex-col justify-center items-center border-4 border-black dark:border-white text-center h-[48px] w-[172px]"
          onClick={() => setActivePopUp("")}
        >
          <div className="flex flex-row gap-[16px]">
            <Arrow /> Tillbaka
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
