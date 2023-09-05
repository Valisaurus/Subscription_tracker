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
      className={`flex-1 flex flex-col w-full justify-center gap-2 text-foreground ${
        lightMode ? "text-black" : "text-white"
      }`}
      action="/auth/sign-in"
      method="post"
    >
      <label
        className={`${lightMode ? "text-black" : "text-white"}`}
        htmlFor="email"
      >
        Email
      </label>
      <input
        className="rounded-md px-4 py-2 bg-inherit border mb-6"
        name="email"
        placeholder="you@example.com"
        required
      />
      <label
        className={`${lightMode ? "text-black" : "text-white"}`}
        htmlFor="password"
      >
        Password
      </label>
      <input
        className="rounded-md px-4 py-2 bg-inherit border mb-6"
        type="password"
        name="password"
        placeholder="••••••••"
        required
      />
      <button className={`bg-green-700 rounded px-4 py-2  mb-2 text-white`}>
        Sign In
      </button>
      <button
        formAction="/auth/sign-up"
        className={`border border-gray-700 rounded px-4 py-2 mb-2 ${
          lightMode ? "text-black" : "text-white"
        }`}
      >
        Sign Up
      </button>
      <button
        formAction="/auth/reset"
        className={`border border-gray-700 rounded px-4 py-2 mb-2 ${
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
