import Link from "next/link";

const SettingsButton = () => {
  return (
    <div className="absolute bottom-[63px] left-[160px]">
      <Link href="/settings">Settings</Link>
    </div>
  );
};

export default SettingsButton;
