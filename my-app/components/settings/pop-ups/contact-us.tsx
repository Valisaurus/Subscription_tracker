type ContactUsProps = {
  setActivePopUp: React.Dispatch<React.SetStateAction<string>>;
};
const ContactUs = ({ setActivePopUp }: ContactUsProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-[32px]">
      <div className="py-[24px]">
        <i>Kontakta oss</i>
      </div>
      <form
        action="/auth/contactUs"
        method="post"
        className="flex flex-col justify-center items-center gap-[24px] w-full"
      >
        <textarea
          className="border-4 border-solid border-black dark:border-white bg-white dark:bg-black px-[16px] py-[12px] w-full"
          name="comment"
          placeholder="Skriv ditt meddelande..."
        ></textarea>

        <button className="flex flex-col justify-center items-center border-4 border-black dark:border-white text-center h-[48px] w-full">
          Skicka{" "}
        </button>
      </form>
      <div className="flex flex-col justify-center items-center">
        <div
          className="flex flex-col justify-center items-center border-4 border-black dark:border-white text-center h-[48px] w-[172px]"
          onClick={() => setActivePopUp("")}
        >
          Tillbaka
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
