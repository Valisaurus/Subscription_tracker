type TotalPriceProps = {
  totalPrice: number | undefined;
};

const TotalPrice = ({ totalPrice }: TotalPriceProps) => {
  return totalPrice ? (
    <div className="flex-1 flex flex-col w-screen justify-center items-center gap-2 text-foreground px-4 text-black dark:text-white">
      <p>your price is {totalPrice}</p>
    </div>
  ) : (
    <div className="flex-1 flex flex-col w-screen justify-center items-center gap-2 text-foreground px-4 text-black dark:text-white">
      <p>you have not added any services</p>
    </div>
  );
};

export default TotalPrice;
