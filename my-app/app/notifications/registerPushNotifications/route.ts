import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const req = await request.json();
  const endpoint = req?.endpoint;
  const auth_key = req?.keys?.auth;
  const p256dh_key = req?.keys?.p256dh;
  console.log("THIS IS REQ DATA: ", req);
  const supabase = createServerActionClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const res = await supabase.from("web_push_notifications").insert({
    user_id: user?.id,
    endpoint,
    auth_key,
    p256dh_key,
  });

  console.log("this is res", res);

  if (res.error) {
    return NextResponse.redirect(
      `${requestUrl.origin}/notifications?error=Could not register push notifications`,
      {
        // a 301 status is required to redirect from a POST to a GET route
        status: 301,
      }
    );
  }

  return NextResponse.redirect(requestUrl.origin, {
    // a 301 status is required to redirect from a POST to a GET route
    status: 301,
  });
}
