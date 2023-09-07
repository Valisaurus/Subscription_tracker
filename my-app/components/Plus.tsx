type PlusProps = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Plus = ({ isVisible, setIsVisible }: PlusProps) => {
  return (
    <div className="w-full h-[100px] flex flex-col justify-center items-center">
      <div
        className="relative w-[70px] h-[70px]"
        onClick={() => setIsVisible(!isVisible)}
      >
        <div className="absolute w-full h-[8px] bg-black top-[31px]" />
        <div className="absolute w-[8px] h-full bg-black left-[31px]" />
      </div>
    </div>
  );
};

export default Plus;
