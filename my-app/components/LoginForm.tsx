import Messages from "@/app/login/messages";

type LoginForm = {
  lightMode: boolean;
};

const LoginForm = ({ lightMode }: LoginForm) => {
  return (
    <form
      className="flex-1 flex flex-col w-screen justify-center items-center gap-2 text-foreground px-4 text-black dark:text-white"
      action="/auth/sign-in"
      method="post"
    >
      <div className="mb-6">
        <input
          className="px-4 py-2 border-4 mb-6 w-full border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white"
          name="email"
          placeholder="email@here.com"
          required
        />
        <input
          className="px-4 py-2 border-4 w-full border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white mb-6"
          type="password"
          name="password"
          placeholder="password"
          required
        />
      </div>
      <button className={`bg-green-700 px-4 py-2 mb-2 w-[250px] text-white`}>
        Sign In
      </button>
      <button
        formAction="/auth/sign-up"
        className="border border-gray-700 px-4 py-2 mb-2 w-[200px] text-black dark:text-white"
      >
        Sign Up
      </button>
      <button
        formAction="/auth/reset"
        className="border border-gray-700 px-4 py-2 mb-2 w-[180px] text-black dark:text-white"
      >
        Forgot password?
      </button>
      <Messages />
    </form>
  );
};

export default LoginForm;
