import Link from "next/link";

const SettingsButton = () => {
  return (
    <div className="absolute bottom-[63px] left-[160px] text-black dark:text-white">
      <Link href="/settings">Inställningar</Link>
    </div>
  );
};

export default SettingsButton;
