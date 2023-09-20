import { NextResponse, NextRequest } from "next/server";
import webpush from "web-push";
import { createClient } from "@supabase/supabase-js";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
export const dynamic = "force-dynamic";
export async function GET(_: NextRequest) {
  // const supabase = createClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
  // );

  const supabase = createRouteHandlerClient({ cookies });
  const { data, error } = await supabase
    .from("web_push_notifications")
    .select("endpoint, auth_key, p256dh_key");

  webpush.setVapidDetails(
    process.env.NEXT_PUBLIC_VAPID_SUBJECT || "",
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY || "",
    process.env.NEXT_PUBLIC_VAPID_PRIVATE_KEY || ""
  );

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
    message: `${data?.length} messages sent!`,
  });
}
