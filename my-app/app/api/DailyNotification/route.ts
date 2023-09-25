import { NextResponse, NextRequest } from "next/server";
import webpush from "web-push";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import cron from "cron";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

const calcDayDiff = (trial_end_date: string | null): number => {
  const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  if (trial_end_date !== null) {
    const endDate = new Date(trial_end_date);
    const localTime: Date = new Date();

    // Calculate the difference in milliseconds
    const diffInMilliseconds = Math.abs(
      endDate.getTime() - localTime.getTime()
    );

    // Calculate the difference in days
    const diffInDays = Math.round(diffInMilliseconds / oneDay);

    return diffInDays;
  }

  return 0;
};

export async function GET(_: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });

  const fetchPushData: { data: web_push_notifications } = await supabase
    .from("web_push_notifications")
    .select("*");
  const pushData: web_push_notifications = fetchPushData?.data;

  const fetchUsersData: { data: subscriptions_users } = await supabase
    .from("subscriptions_users")
    .select("*");

  const subscriptionUsers: subscriptions_users = fetchUsersData?.data;

  const fetchSubscriptions: { data: subscriptions } = await supabase
    .from("subscriptions")
    .select("*");

  const subscriptionsData: subscriptions = fetchSubscriptions?.data;

  const fetchServices: { data: services } = await supabase
    .from("services")
    .select("*");
  const servicesData: services = fetchServices?.data;

  webpush.setVapidDetails(
    process.env.NEXT_PUBLIC_VAPID_SUBJECT || "",
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY || "",
    process.env.NEXT_PUBLIC_VAPID_PRIVATE_KEY || ""
  );

  subscriptionUsers?.forEach((user) => {
    if (calcDayDiff(String(user.trial_end_date)) === 2) {
      console.log("Sending notifications");
      const payload = JSON.stringify({
        title: "Trial period running out!",
        body: `Hey there! Your trial for ${
          servicesData?.find(
            (service) =>
              service.id ===
              subscriptionsData?.find(
                (subscriptions) => subscriptions.id === user.subscription_id
              )?.service_id
          )?.name
        } - ${
          subscriptionsData?.find((obj) => obj.id === user.subscription_id)
            ?.name
        } is about to expire in 2 days!`,
      });

      const userPushData = pushData?.find(
        (obj) => obj.user_id === user.user_id
      );

      const subscription = {
        endpoint: String(userPushData?.endpoint),
        keys: {
          auth: String(userPushData?.auth_key),
          p256dh: String(userPushData?.p256dh_key),
        },
      };
      const res = webpush.sendNotification(subscription, payload);

      console.log("THIS RES", res);

      console.log("Notifications sent");
    }
  });

  return NextResponse.json({ message: "running code" });
}
