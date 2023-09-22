import Slash from "../app/svgs/Slash.svg";
import Image from "next/image";
type TotalPriceProps = {
  totalPriceMonthly: number;
};

const TotalPrice = ({ totalPriceMonthly }: TotalPriceProps) => {
  return totalPriceMonthly ? (
    <div className="flex mw-full m-[1rem] items-center justify-between text-black dark:text-white text-[40px]">
      <p>
        {totalPriceMonthly} kr
        <br />
        /month{" "}
      </p>
      <Image src={Slash} alt="slash" />
      <p>
        {totalPriceMonthly * 12} kr
        <br />
        /year HEJ
      </p>
    </div>
  ) : (
    <div className="text-white dark:text-black">
      <p>you have not added any services</p>
    </div>
  );
};

export default TotalPrice;
