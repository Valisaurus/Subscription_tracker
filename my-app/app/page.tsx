import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Services from "./services/service";

export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient({
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

  const fetchedServices: { data: services } = await supabase
    .from("services")
    .select("*")
    .order("name", { ascending: true });
  const services: services = fetchedServices?.data;

  const fetchWebPushData: { data: web_push_notifications } = await supabase
    .from("web_push_notifications")
    .select("*")
    .match({ user_id: user?.id });
  const web_push_notifications: web_push_notifications = fetchWebPushData.data;

  const fetchSubscriptions: {
    data: subscriptions;
  } = await supabase.from("subscriptions").select("*");

  const subscriptions: subscriptions = fetchSubscriptions.data;

  const fetchSubscriptions_users: { data: subscriptions_users } = await supabase
    .from("subscriptions_users")
    .select("*")
    .match({ user_id: user?.id });

  const subscriptions_users: subscriptions_users =
    fetchSubscriptions_users?.data;

  const userID: string | undefined = user?.id;
  const userEmail: string | undefined = user?.email;

  const data: {
    subscriptions: subscriptions;
    services: services;
    subscriptions_users: subscriptions_users;
    web_push_notifications: web_push_notifications;
    userID: string | undefined;
    userEmail: string | undefined;
  } = {
    subscriptions,
    services,
    subscriptions_users,
    web_push_notifications,
    userID,
    userEmail,
  };
  return <Services data={data} />;
}
