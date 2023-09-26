type LightSwitchProps = {
  lightMode: boolean;
  setLightMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const LightSwitch = ({ lightMode, setLightMode }: LightSwitchProps) => {
  return (
    <button
      className="absolute top-4 right-4 dark:text-white text-black"
      onClick={() => setLightMode(!lightMode)}
    >
      Light / Dark
    </button>
  );
};

export default LightSwitch;
