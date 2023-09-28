type PasswordResetProps = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const PasswordReset = ({ isVisible, setIsVisible }: PasswordResetProps) => {
  return isVisible ? (
    <div className="flex flex-col justify-center items-center h-screen w-full absolute top-0">
      <div
        className="absolute h-screen w-full z-10 bg-white dark:bg-black opacity-50"
        onClick={() => setIsVisible(false)}
      ></div>
      <div className="absolute w-[250px] h-[240px] z-50">
        <div
          onClick={() => setIsVisible(false)}
          className="absolute right-0 bottom-[270px] bg-white dark:bg-black flex justify-center items-center border-4 border-solid border-black dark:border-white w-[50px] h-[48px] p-[24px] text-[20px]"
        >
          X
        </div>
        <div className="border-4 border-black dark:border-white bg-white dark:bg-black w-[250px] h-[240px]">
          <form
            action="/auth/reset-PW-Email"
            method="post"
            className="flex flex-col justify-between items-center text-center h-[240px]"
          >
            <label
              htmlFor="email"
              className="text-[20px] text-black dark:text-white"
            >
              <div className="p-[32px]">
                <i>Glömt lösenord?</i>
              </div>
            </label>
            <input
              type="email"
              name="email"
              className="px-4 py-2 mb-[24px] border-4 w-[219px] h-[48px] border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white"
              placeholder="Mailadress..."
            />
            <button className="px-4  border-4 w-[219px] h-[48px] border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white mb-[30px]">
              Återställ lösenord
            </button>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default PasswordReset;
