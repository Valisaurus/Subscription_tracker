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
      <div className="absolute w-[320px] h-[250px] border-4 border-black dark:border-white bg-white dark:bg-black z-50 ">
        <form
          action="/auth/reset-password"
          method="post"
          className="flex flex-col justify-around items-center text-center w-[320px] h-[250px] p-4"
        >
          <label
            htmlFor="email"
            className="text-[20px] text-black dark:text-white"
          >
            Forgot password?
          </label>
          <input
            type="email"
            name="email"
            className="px-4 py-2 border-4 w-[250px] border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white"
            placeholder="Email address..."
          />
          <button className="px-4 py-2 border-4 w-[200px] border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white mb-6">
            Reset password
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default PasswordReset;