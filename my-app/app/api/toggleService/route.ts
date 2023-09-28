import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const id = formData.get("id");
  console.log(id);
  const supabase = createServerActionClient({ cookies });

  const res = await supabase.from("subscriptions_users").delete().eq("id", id);

  console.log(res);

  if (res.error) {
    return NextResponse.redirect(
      `${requestUrl.origin}?/error=Could not toggle service`,
      {
        status: 301,
      }
    );
  }

  return NextResponse.redirect(`${requestUrl.origin}`, {
    status: 301,
  });
}
