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
  `;

  const StyledLabel = styled.label`
    color: ${lightMode ? "black " : "white"};
  `;

  const StyledInput = styled.input`
    border-radius: 0.375rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    background-color: inherit;
    border-width: 1px;
    margin-bottom: 1.5rem;
  `;

  const StyledSignInButton = styled.button`
    background-color: rgb(21 128 61);
    border-radius: 0.25rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    margin-bottom: 0.5rem;
    color: white;
  `;

  const StyledSignUpButton = styled.button`
    border: 1px rgb(55 65 81);
    padding: 0.5rem 1rem 0.5rem 1rem;
    border-radius: 0.25rem;
    margin-bottom: 0.5rem;
    color: ${lightMode ? "black" : "white"};
  `;
  return (
    <StyledForm action="/auth/sign-in" method="post">
      <StyledLabel htmlFor="email">Email</StyledLabel>
      <StyledInput name="email" placeholder="you@example.com" required />
      <StyledLabel htmlFor="password">Password</StyledLabel>
      <StyledInput
        type="password"
        name="password"
        placeholder="••••••••"
        required
      />
      <StyledSignInButton>Sign In</StyledSignInButton>
      <StyledSignUpButton formAction="/auth/sign-up">
        Sign Up
      </StyledSignUpButton>
      <Messages />
    </StyledForm>
  );
};

export default LoginForm;
