import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Services from "./services/service";
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

  const fetchSubscriptions = await supabase
    .from("subscriptions")
    .select("id, name, price");

  const subscriptions: { id: number; name: string; price: number }[] | null =
    fetchSubscriptions.data;

  console.log(subscriptions);

  const fetchSubscriptions_users = await supabase
    .from("subscriptions_users")
    .select("user_id, subscription_id")
    .match({ user_id: user?.id });

  const subscriptions_users:
    | { user_id: number; subscription_id: number }[]
    | null = fetchSubscriptions_users?.data;

  console.log(subscriptions_users);

  const getSubscriptionNames = (
    subscriptions: { id: number; name: string; price: number }[] | null,
    subscriptions_users: { user_id: number; subscription_id: number }[] | null
  ) => {
    const subscriptionNames = subscriptions_users?.map((user) => {
      const matchingSubscription = subscriptions?.find(
        (sub) => sub.id === user.subscription_id
      );
      return matchingSubscription
        ? {
            name: matchingSubscription.name,
            price: matchingSubscription.price,
          }
        : null;
    });

    return subscriptionNames?.filter((name) => name !== null);
  };

  const namesAndPrices = getSubscriptionNames(
    subscriptions,
    subscriptions_users
  );
  console.log(namesAndPrices);

  const totalPriceMonthly: number | undefined = namesAndPrices?.reduce(
    (accumulator, total) => {
      console.log("Total Price:", total?.price);
      return accumulator + total?.price;
    },
    0
  );

  return (
    <Services services={subscriptions} totalPriceMonthly={totalPriceMonthly} />
  );
}
