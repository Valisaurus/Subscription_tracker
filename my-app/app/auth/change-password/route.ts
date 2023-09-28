import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const supabase = createRouteHandlerClient({ cookies });
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const oldPassword = String(formData.get("oldPassword"));
  const newPassword = String(formData.get("newPassword"));
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const email = String(user?.email);

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password: oldPassword,
  });

  if (data?.user?.aud === "authenticated") {
    const { data, error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      return NextResponse.redirect(
        `${requestUrl.origin}/?error=incorrect old password`,
        {
          // a 301 status is required to redirect from a POST to a GET route
          status: 301,
        }
      );
    }
  }

  if (error) {
    return NextResponse.redirect(
      `${requestUrl.origin}/?error=incorrect old password`,
      {
        // a 301 status is required to redirect from a POST to a GET route
        status: 301,
      }
    );
  }

  return NextResponse.redirect(`${requestUrl.origin}/`, {
    status: 301,
  });
}
