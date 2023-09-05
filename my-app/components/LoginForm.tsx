import Messages from "@/app/login/messages";
import { styled } from "styled-components";

type LoginForm = {
  lightMode: boolean;
};

const LoginForm = ({ lightMode }: LoginForm) => {
  const StyledForm = styled.form`
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    gap: 0.5rem;
    color: hsl(var(--foreground));
    ${lightMode ? "text-black" : "text-white"}
  `;

  return (
    <form
      className={`flex-1 flex flex-col w-screen justify-center items-center gap-2 text-foreground px-4 ${
        lightMode ? "text-black" : "text-white"
      }`}
      action="/auth/sign-in"
      method="post"
    >
      <input
        className="px-4 py-2 bg-inherit border mb-6 w-full"
        name="email"
        placeholder="email@here.com"
        required
      />
      <input
        className="px-4 py-2 bg-inherit border mb-6 w-full"
        type="password"
        name="password"
        placeholder="password"
        required
      />
      <button className={`bg-green-700 px-4 py-2 mb-2 w-[250px] text-white`}>
        Sign In
      </button>
      <button
        formAction="/auth/sign-up"
        className={`border border-gray-700 px-4 py-2 mb-2 w-[200px] ${
          lightMode ? "text-black" : "text-white"
        }`}
      >
        Sign Up
      </button>
      <button
        formAction="/auth/reset"
        className={`border border-gray-700 px-4 py-2 mb-2 w-[180px] ${
          lightMode ? "text-black" : "text-white"
        }`}
      >
        Forgot password?
      </button>
      <Messages />
    </form>
  );
};

export default LoginForm;
