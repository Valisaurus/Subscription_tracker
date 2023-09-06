type LightSwitchProps = {
  lightMode: boolean;
  setLightMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const LightSwitch = ({ lightMode, setLightMode }: LightSwitchProps) => {
  return (
    <button
      className="absolute top-1 right-1 dark:text-white text-black"
      onClick={() => {
        setLightMode(!lightMode);
        console.log(lightMode);
      }}
    >
      Light / Dark
    </button>
  );
};

export default LightSwitch;
