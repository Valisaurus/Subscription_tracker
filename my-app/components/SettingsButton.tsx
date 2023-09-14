import Link from "next/link";

const SettingsButton = () => {
  return (
    <div className="flex justify-center w-screen pt-9">
      <Link href="/settings">Settings</Link>
    </div>
  );
};

export default SettingsButton;
