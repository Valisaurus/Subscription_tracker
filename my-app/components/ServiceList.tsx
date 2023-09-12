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
      <div>
        {subSer.service_name} - {subSer.subscription_name} {subSer.price}kr
        <div>X</div>
      </div>
    )) ?? [];

  return (
    <div className=" flex flex-col w-screen justify-center items-center gap-2 text-foreground px-4 text-black dark:text-white">
      {mappedSubscriptions}
    </div>
  );
};

export default ServiceList;
