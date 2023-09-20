import { NextResponse, NextRequest } from "next/server";
import webpush, { PushSubscription } from "web-push";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function GET(_: NextRequest) {
  const supabase = createServerActionClient({ cookies });
  const { data, error } = await supabase
    .from("web_push_notifications")
    .select("endpoint, auth_key, p256dh_key");

  const subscriptions = await data;

  webpush.setVapidDetails(
    process.env.NEXT_PUBLIC_VAPID_SUBJECT || "",
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY || "",
    process.env.NEXT_PUBLIC_VAPID_PRIVATE_KEY || ""
  );

  console.log(data);
  data?.forEach((dataRow) => {
    const payload = JSON.stringify({
      title: "WebPush Notification!",
      body: `Hey! `,
    });
    const subscription = {
      endpoint: dataRow.endpoint,
      keys: { auth: dataRow.auth_key, p256dh: dataRow.p256dh_key },
    };
    webpush.sendNotification(subscription, payload);
  });

  return NextResponse.json({
    message: `${subscriptions?.length} messages sent!`,
  });
}
