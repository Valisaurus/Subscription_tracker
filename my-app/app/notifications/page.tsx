"use server";
import ClientSideNotifications from "./notifications";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ServerSideNotifications = async () => {
  const supabase = createServerComponentClient({
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const webPushData: { data: web_push_notifications } = await supabase
    .from("web_push_notifications")
    .select("*")
    .match({ user_id: user?.id });

  console.log("WEBPUSHDATA: ", webPushData.data);
  return <ClientSideNotifications data={webPushData.data} />;
};

export default ServerSideNotifications;
