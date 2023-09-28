type BlurProps = {
  settingsVisible: boolean;
  setSettingsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Blur = ({ settingsVisible, setSettingsVisible }: BlurProps) => {
  return (
    <>
      {settingsVisible ? (
        <div
          className="absolute h-screen w-full z-10 bg-white dark:bg-black opacity-50"
          onClick={() => setSettingsVisible(false)}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Blur;
