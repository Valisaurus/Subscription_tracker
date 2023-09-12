import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Services from "./services/service";
import { services } from "./global";
import { Database } from "@/lib/database.types";

export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient<Database["public"]["Tables"]>({
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data } = await supabase.from<services>("services").select("*");

  console.log(services);

  const fetchSubscriptions: {
    data:
      | {
          id: number;
          name: string;
          price: number;
          trial_price: number;
          service_id: number;
        }[]
      | null;
  } = await supabase.from("subscriptions").select("*");

  const subscriptions:
    | { id: number; name: string; price: number; service_id: number }[]
    | null = fetchSubscriptions.data;

  console.log(subscriptions);

  const fetchSubscriptions_users = await supabase
    .from("subscriptions_users")
    .select("user_id, subscription_id")
    .match({ user_id: user?.id });

  const subscriptions_users:
    | { user_id: number; subscription_id: number }[]
    | null = fetchSubscriptions_users?.data;

  console.log(subscriptions_users);

  const compareAndCreateResult = (
    subscriptions:
      | {
          id: number;
          name: string;
          price: number;
          service_id: number;
        }[]
      | null,
    services: { id: number; name: string }[] | null,
    subscriptions_users: { user_id: number; subscription_id: number }[] | null
  ) => {
    const result = [];

    for (const userSubscription of subscriptions_users) {
      const subscription = subscriptions?.find(
        (sub) => sub.id === userSubscription.subscription_id
      );
      if (subscription) {
        const service = services?.find(
          (serv) => serv.id === subscription.service_id
        );
        if (service) {
          result.push({
            service_name: service.name,
            subscription_name: subscription.name,
            price: subscription.price, // Assuming price is a string that needs to be converted to a number
          });
        }
      }
    }

    return result;
  };

  const namesAndPrices = compareAndCreateResult(
    subscriptions,
    services,
    subscriptions_users
  );
  console.log("RESULT: ", namesAndPrices);

  const totalPriceMonthly: number | undefined = namesAndPrices?.reduce(
    (accumulator, total) => {
      console.log("Total Price:", total?.price);
      return accumulator + total?.price;
    },
    0
  );

  const data: {
    subscriptions:
      | { id: number; name: string; price: number; service_id: number }[]
      | null;
    services: { id: number; name: string }[] | null;
    subscriptions_users: { user_id: number; subscription_id: number }[] | null;
  } = { subscriptions, services, subscriptions_users };
  return <Services data={data} />;
}
