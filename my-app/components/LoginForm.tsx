import Messages from "@/app/login/messages";
import { useState } from "react";
import TermsAndConditions from "./TermsAndConditions";
import PasswordReset from "./PasswordReset";

type LoginFormProps = {
  setRenderTopLogo: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginForm = ({ setRenderTopLogo }: LoginFormProps) => {
  const [renderTerms, setRenderTerms] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isResetPasswordVisible, setIsResetPasswordVisible] = useState(false);

  return renderTerms ? (
    <div className="flex flex-col justify-center items-center">
      <TermsAndConditions email={email} password={password} />
    </div>
  ) : (
    <div>
      {isResetPasswordVisible ? (
        <PasswordReset
          isVisible={isResetPasswordVisible}
          setIsVisible={setIsResetPasswordVisible}
        />
      ) : (
        <div></div>
      )}
      <form action="/auth/sign-in" method="post">
        <div className="flex-1 flex flex-col w-screen justify-center items-center gap-2 text-foreground px-4 text-black dark:text-white">
          <div className="flex flex-col justify-center items-center">
            <div className="mb-6 w-[300px]">
              <input
                className="px-4 py-2 border-4 w-full border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white mb-6 h-[50px]"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@here.com"
                required
              />
              <input
                className="px-4 py-2 border-4 w-full border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white mb-6"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                required
              />
            </div>
            <button
              className={`bg-green-700 px-4 py-2 mb-2 w-[250px] text-white`}
            >
              Sign In
            </button>
            <button
              className="border border-gray-700 px-4 py-2 mb-2 w-[200px] text-black dark:text-white"
              onClick={(e: any) => {
                e.preventDefault();
                setRenderTerms(true);
                setRenderTopLogo(true);
              }}
            >
              Sign Up
            </button>
            <button
              onClick={(e: any) => {
                e.preventDefault();
                setIsResetPasswordVisible(true);
              }}
              className="  px-4 py-2 mb-2 w-[180px] text-black dark:text-white"
            >
              Forgot password?
            </button>
            <Messages />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
