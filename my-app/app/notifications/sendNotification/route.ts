import { NextResponse, NextRequest } from "next/server";
import webpush, { PushSubscription } from "web-push";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import {
  saveSubscriptionToDb,
  getSubscriptionsFromDb,
} from "@/app/utils/in-memory-db";

webpush.setVapidDetails(
  process.env.NEXT_PUBLIC_VAPID_SUBJECT || "",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY || "",
  process.env.NEXT_PUBLIC_VAPID_PRIVATE_KEY || ""
);

export async function GET(_: NextRequest) {
  const supabase = createServerActionClient({ cookies });
  const { data, error } = await supabase
    .from("web_push_notifications")
    .select("*");

  const subscriptions = await data;

  data?.forEach((dataRow) => {
    const payload = JSON.stringify({
      title: "WebPush Notification!",
      body: `Hey! `,
    });
    webpush.sendNotification(dataRow, payload);
  });

  return NextResponse.json({
    message: `${subscriptions?.length} messages sent!`,
  });
}
