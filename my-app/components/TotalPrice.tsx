type TotalPriceProps = {
  totalPrice: number | undefined;
};

const TotalPrice = ({ totalPrice }: TotalPriceProps) => {
  return totalPrice ? (
    <div className="text-black dark:text-white">
      <p>your price is {totalPrice}</p>
    </div>
  ) : (
    <div className="text-white dark:text-black">
      <p>you have not added any services</p>
    </div>
  );
};

export default TotalPrice;
