type TermsAndConditionsProps = {
  email: string;
  password: string;
};

const TermsAndConditions = ({ email, password }: TermsAndConditionsProps) => {
  return (
    <div className="w-full flex flex-col justify-around items-center p-[70px]">
      <div className="w-[250] h-[529px] border-black border-4 dark:border-white text-black dark:text-white p-[20px] overflow-scroll text-center">
        TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS
        TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS
        TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS
        TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS
        TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS
        TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS
        TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS
        TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS
        TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS
        TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS
        TERMS TERMS TERMS TERMS TERMS TERMS TERMS TERMS
      </div>
      <form action="/auth/sign-up" method="post">
        <input type="hidden" name="email" value={email} />
        <input type="hidden" name="password" value={password} />
        <button className="w-[250px] h-[40px] border-black border-4 dark:border-white text-black dark:text-white mt-[30px]">
          Accept
        </button>
      </form>
    </div>
  );
};
export default TermsAndConditions;
