type ServiceListProps = {
  services: { name: string; trial: boolean }[] | undefined;
};

const ServiceList = ({ services }: ServiceListProps) => {
  return <div></div>;
};

export default ServiceList;
