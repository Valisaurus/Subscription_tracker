import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Services from "./services/service";

export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error, data } = await supabase
    .from("subscriptions")
    .select("name, price, subscriptions_users (user_id, subscription_id)");

  const services: { name: string; price: number }[] | undefined = data?.map(
    (service: { name: string; price: number }) => {
      return { name: service?.name, price: service?.price };
    }
  );

  const totalPrice: number | undefined = data?.reduce((accumulator, total) => {
    console.log("Total Price:", total.price);
    return accumulator + total.price;
  }, 0);

  return <Services services={services} totalPrice={totalPrice} />;
}
