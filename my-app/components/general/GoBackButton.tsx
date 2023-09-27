import Link from "next/link";
const GoBackButton = () => {
  return (
    <>
      <Link
        href="/settings"
        className="flex flex-col justify-center items-center border-4 border-black dark:border-white text-center h-[48px] w-[172px]"
      >
        Tillbaka
      </Link>
    </>
  );
};
export default GoBackButton;
