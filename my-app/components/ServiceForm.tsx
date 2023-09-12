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
      <div className="flex-1 flex flex-col w-screen justify-center items-center gap-2 text-foreground px-4 text-black dark:text-white">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-6">
            <select
              className="px-4 py-2 border-4 w-full border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white mb-6"
              name="subscription_id"
              required
            >
              {mappedServices}
            </select>
            <input
              className="px-4 py-2 border-4 w-full border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white mb-6"
              type="date"
              name="start_date"
            />
          </div>
          <button
            className={`bg-green-700 px-4 py-2 mb-2 w-[250px] text-white`}
          >
            Confirm
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
