import Messages from "@/app/login/messages";

export const dynamic = "force-dynamic";

type ServiceFormProps = {
  SubscriptionsAndServices: {
    service_name: string | null;
    subscription_name: string | null;
    subscription_price: number | null;
    subscription_id: number;
  }[];
  isVisible: boolean;
};

const ServiceForm = ({
  SubscriptionsAndServices,
  isVisible,
}: ServiceFormProps) => {
  const mappedServices =
    SubscriptionsAndServices?.map((subSer) => (
      <option key={subSer.service_name} value={subSer.subscription_id}>
        {subSer.service_name} - {subSer.subscription_name}{" "}
        {subSer.subscription_price}kr
      </option>
    )) ?? [];
  return isVisible ? (
    <form action="services/addService" method="post">
      <div className="flex-1 flex flex-col w-screen justify-center items-center text-foreground px-4 text-black dark:text-white text-[20px]">
        <div className="flex flex-col justify-center items-center">
          <div>
            <select
              className="px-4 border-4 w-full h-[45px] border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white mb-[10px] "
              name="subscription_id"
              required
            >
              <option value="0">Choose service</option>
              {mappedServices}
            </select>
            <input
              className="px-4 border-4 w-full border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white mb-[10px] h-[45px]"
              type="date"
              name="start_date"
            />
          </div>
          <button className="px-4 mb-2 border-4 w-full border-black dark:border-white text-black dark:text-white h-[45px]">
            Add to the list
          </button>
          <Messages />
        </div>
      </div>
    </form>
  ) : (
    <div></div>
  );
};

export default ServiceForm;
