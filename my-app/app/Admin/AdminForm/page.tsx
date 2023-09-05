import AdminForm from "@/components/AdminForm";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const name = String(formData.get("name"));
  const price = Number(formData.get("price"));
  const trial_length_days = Number(formData.get("trial_length_days"));

  const supabase = createServerActionClient({ cookies });

  const { error } = await supabase.from("subscriptions").insert({
    name,
    price,
    trial_length_days,
  });

  if (error) {
    console.log(error);
    // return NextResponse.redirect(
    //   `${requestUrl.origin}/login?error=Could not authenticate user`,
    //   {
    //     // a 301 status is required to redirect from a POST to a GET route
    //     status: 301,
    //   }
    // );
  }

  // return NextResponse.redirect(
  //   `${requestUrl.origin}/login?message=Check email to continue sign in process`,
  //   {
  //     // a 301 status is required to redirect from a POST to a GET route
  //     status: 301,
  //   }
  // );
}

function FormPage() {
  return <AdminForm />;
}

export default FormPage;
