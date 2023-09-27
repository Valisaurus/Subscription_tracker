import Image from "next/image";
import Slash from "../general/Slash";
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
        /månad{" "}
      </p>
      <div className="flex flex-col justify-center">
        <Slash />
      </div>
      <p>
        {totalPriceMonthly * 12 + totalPriceYearly} kr
        <br />
        /år
      </p>
    </div>
  ) : (
    <div className="text-white dark:text-black">
      <p>du har inga tillagda tjänster</p>
    </div>
  );
};

export default TotalPrice;
