import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Services from "./services/service";
import { Database } from "@/lib/database.types";
import { stringify } from "querystring";

export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const fetchSubscriptions: { name: string; price: number }[] = await supabase
    .from("subscriptions")
    .select("name, price");

  const subscriptions = fetchSubscriptions.data;

  console.log(subscriptions);

  const services: { name: string; price: number }[] | undefined =
    subscriptions?.map((service: { name: string; price: number }) => {
      return { name: service?.name, price: service?.price };
    });

  const totalPrice: number | undefined = subscriptions?.reduce(
    (accumulator, total) => {
      console.log("Total Price:", total.price);
      return accumulator + total.price;
    },
    0
  );

  return <Services services={services} totalPrice={totalPrice} />;
}
