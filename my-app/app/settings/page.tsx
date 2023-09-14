"use server";
import ClientSideSettings from "./settings";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const ServerSideSettings = async () => {
  const supabase = createServerComponentClient({
    cookies,
  });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }
  return <ClientSideSettings user_id={user?.id} user_email={user?.email} />;
};

export default ServerSideSettings;
