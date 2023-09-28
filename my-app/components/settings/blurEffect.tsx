import { useState } from "react";

type BlurProps = {
  isVisible: string;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Blur = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <>
      {isVisible ? (
        <div
          className="absolute h-screen w-full z-10 bg-white dark:bg-black opacity-50"
          onClick={() => setIsVisible(false)}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Blur;
