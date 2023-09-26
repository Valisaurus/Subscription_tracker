type ServiceListProps = {
  SubscriptionsAndServices: Array<{
    service_name: string | null;
    subscription_name: string | null;
    subscription_id: number;
    price: number | null;
  }>;
};

const ServiceList = ({ SubscriptionsAndServices }: ServiceListProps) => {
  const mappedSubscriptions =
    SubscriptionsAndServices?.map((subSer) => (
      <form
        action="/services/toggleService"
        method="post"
        key={subSer.subscription_id}
        className="w-[332px]"
      >
        <input type="hidden" name="id" value={subSer.subscription_id} />
        <div className="flex justify-between items-center text-black dark:text-white  max-h-[48px] mb-[16px]">
          <div className="border-4 border-solid  border-black dark:border-white w-[258px] py-[12px] px-[16px] overflow-hidden">
            {`${subSer.service_name} - ${subSer.subscription_name} (${subSer.price} kr)`}
          </div>

          <button
            type="submit"
            className="flex justify-center items-center border-4 border-solid border-black dark:border-white w-[50px] h-[48px] p-[24px] text-[20px]"
          >
            X
          </button>
        </div>
      </form>
    )) ?? [];

  return (
    <div className=" flex flex-col w-screen justify-center items-center gap-2 text-foreground px-4 ">
      {mappedSubscriptions}
    </div>
  );
};

export default ServiceList;
