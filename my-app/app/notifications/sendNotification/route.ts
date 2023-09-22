//import { NextResponse, NextRequest } from "next/server";
import webpush from "web-push";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
const cron = require("node-cron");
export const dynamic = "force-dynamic";
import { createClient } from "@supabase/supabase-js";

export async function GET() {
  console.log("REACHED");

  const supabase = createClient(
    String(process.env.NEXT_PUBLIC_SUPABASE_URL),
    String(process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE),
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );

  // const supabase = createRouteHandlerClient({ cookies });
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
      body: `Hey there! `,
    });
    const subscription = {
      endpoint: dataRow.endpoint,
      keys: { auth: dataRow.auth_key, p256dh: dataRow.p256dh_key },
    };
    webpush.sendNotification(subscription, payload);
  });

  // return NextResponse.json({
  //   message: "This is the sendNotifications route HEJ",
  // });
}
