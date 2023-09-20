import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const endpoint = await request.json();
  console.log("THIS IS THE ENDPOINT: ", endpoint);
  //const public_vapid_key = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
  //const private_vapid_key = process.env.NEXT_PUBLIC_VAPID_PRIVATE_KEY;
  const supabase = createServerActionClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const res = await supabase.from("web_push_notifications").insert({
    user_id: user?.id,
    endpoint,
    //public_vapid_key,
    //private_vapid_key,
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
