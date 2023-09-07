import ServiceForm from "@/components/ServiceForm";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const AddServices = async () => {
  const supabase = createServerActionClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error, data } = await supabase
    .from("subscriptions")
    .select("name, price, subscriptions_users (user_id, subscription_id)");

  const services: string[][] | undefined = data?.map((service) => service.name);

  data?.forEach((service) => {
    console.log(`Service: ${service.name}`);
    console.log(`Price: ${service.price}`);
    console.log("Subscriptions Users:");
    console.log(service.subscriptions_users);
  });

  return (
    <div>
      <ServiceForm services={services} />
    </div>
  );
};

export default AddServices;
