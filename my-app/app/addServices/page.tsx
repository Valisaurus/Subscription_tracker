import ServiceForm from "@/components/ServiceForm";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/lib/database.types";
import { Subscription } from "@supabase/supabase-js";
import TotalPrice from "@/components/TotalPrice";

const AddServices = async () => {
  const supabase = createServerActionClient<Subscription>({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error, data } = await supabase
    .from("subscriptions")
    .select("name, price, subscriptions_users (user_id, subscription_id)")
    .eq("subscriptions_users.user_id", user?.id);

  const services: { name: string; price: number }[] | undefined = data?.map(
    (service: { name: string; price: number }) => {
      return { name: service?.name, price: service?.price };
    }
  );

  const totalPrice: number | undefined = data?.reduce((accumulator, total) => {
    console.log("Total Price:", total.price);
    return accumulator + total.price;
  }, 0);

  console.log("Total Price:", totalPrice);

  data?.forEach((service) => {
    console.log(`Service: ${service.name}`);
    console.log(`Price: ${service.price}`);
    console.log("Subscriptions Users:");
    console.log(service.subscriptions_users);
  });

  return (
    <div>
      <ServiceForm services={services} />

      <TotalPrice totalPrice={totalPrice} />
    </div>
  );
};

export default AddServices;
