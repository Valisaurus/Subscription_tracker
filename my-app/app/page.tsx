import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import LogoutButton from "../components/LogoutButton";
import ServiceForm from "@/components/ServiceForm";
import { redirect } from "next/navigation";
import Logo from "@/components/Logo";

export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error, data } = await supabase
    .from("subscriptions_users")
    .select("*")
    .match({ user_id: user?.id });

  if (error) {
    console.log(error);
  }
  console.log(data);

  return (
    <div className="">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <Logo />
      </nav>
    </div>
  );
}
