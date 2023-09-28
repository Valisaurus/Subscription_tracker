import {
  createRouteHandlerClient,
  createServerActionClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const supabase = createRouteHandlerClient({ cookies });

  const res = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${requestUrl.origin}/reset-password`,
  });

  if (res.error) {
    return NextResponse.redirect(`${requestUrl.origin}/login`, {
      // a 301 status is required to redirect from a POST to a GET route
      status: 301,
    });
  }

  return NextResponse.redirect(
    `${requestUrl.origin}/verification/reset-password`,
    {
      status: 301,
    }
  );
}