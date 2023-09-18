import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const start_date = formData.get("start_date");
  const subscription_id = formData.get("subscription_id");
  const supabase = createServerActionClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const user_id = user?.id;

  const { error } = await supabase
    .from("subscriptions_users")
    .insert({ user_id, subscription_id, start_date });

  console.log(error);
  if (error) {
    return NextResponse.redirect(
      `${requestUrl.origin}?/error=Could not add service`,
      {
        status: 301,
      }
    );
  }

  return NextResponse.redirect(`${requestUrl.origin}`, {
    status: 301,
  });
}
