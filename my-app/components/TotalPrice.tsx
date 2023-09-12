type TotalPriceProps = {
  services: { id: number; name: string }[] | null;
  subscription_users: { user_id: number; subscription_id: number }[] | null;
};

const TotalPrice = ({ totalPriceMonthly }: TotalPriceProps) => {
  return totalPriceMonthly ? (
    <div className="text-black dark:text-white">
      <p>Your monthly price is: {totalPriceMonthly}</p>
      <p>Your yearly price is: {totalPriceMonthly * 12}</p>
    </div>
  ) : (
    <div className="text-white dark:text-black">
      <p>you have not added any services</p>
    </div>
  );
};

export default TotalPrice;
