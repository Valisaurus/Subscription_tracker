import Image from "next/image";
import Slash from "../public/svgs/Slash.svg";
type TotalPriceProps = {
  totalPriceMonthly: number;
  totalPriceYearly: number;
};

const TotalPrice = ({
  totalPriceMonthly,
  totalPriceYearly,
}: TotalPriceProps) => {
  return totalPriceMonthly ? (
    <div className="flex mw-full m-[1rem] items-center justify-around text-black dark:text-white text-[40px]">
      <p>
        {totalPriceMonthly} kr
        <br />
        /month{" "}
      </p>
      <Image src={Slash} alt="slash" />
      <p>
        {totalPriceMonthly * 12 + totalPriceYearly} kr
        <br />
        /year
      </p>
    </div>
  ) : (
    <div className="text-white dark:text-black">
      <p>you have not added any services</p>
    </div>
  );
};

export default TotalPrice;
