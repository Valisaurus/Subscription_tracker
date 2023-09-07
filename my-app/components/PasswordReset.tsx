type PasswordResetProps = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const PasswordReset = ({ isVisible, setIsVisible }: PasswordResetProps) => {
  return (
    isVisible ?? (
      <div className="flex flex-col justify-center items-center h-screen w-full">
        <div className="w-[320px] h-[250px] bg-slate-600 z-50">
          <form action="/auth/reset-password" method="post">
            <label htmlFor="email">Reset password:</label>
            <input type="email" name="email" className="" />
            <button>Confirm</button>
          </form>
        </div>
      </div>
    )
  );
};

export default PasswordReset;
