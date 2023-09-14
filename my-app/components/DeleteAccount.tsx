"use client";

type DeleteAccount = {
  isVisible: string;
  setIsVisible: React.Dispatch<React.SetStateAction<string>>;
};

const DeleteAccount = ({ isVisible, setIsVisible }: DeleteAccount) => {
  return isVisible === "DeleteAccount" ? (
    <div className="flex flex-col justify-center items-center h-screen w-full absolute top-0">
      <div
        className="absolute h-screen w-full z-10 bg-white dark:bg-black opacity-50"
        onClick={() => setIsVisible("")}
      ></div>
      <div className="absolute w-[320px] h-[250px] border-4 border-black dark:border-white bg-white dark:bg-black z-50 ">
        <form
          action="/auth/delete-account"
          method="post"
          className="flex flex-col justify-around items-center text-center w-[320px] h-[250px] p-4"
        >
          <label htmlFor="password" className="italic">
            Are you sure you want to delete your account?
          </label>
          <input
            type="password"
            name="password"
            className="px-4 py-2 border-4 w-[250px] border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white"
            placeholder="insert password.."
          />
          <button className="px-4 py-2 border-4 w-[250px] border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white mb-6">
            Accept
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div></div>
  );
};
export default DeleteAccount;
