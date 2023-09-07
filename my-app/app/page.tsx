import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import LogoutButton from "../components/LogoutButton";
import { redirect } from "next/navigation";

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

  const insertion = await supabase.from("users").insert({});

  if (error) {
    console.log(error);
  }
  console.log(data);

  return data ? (
    <div className="">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-center items-center p-3 text-sm text-foreground">
          <Link
            href="/login"
            className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
          >
            Login
          </Link>
          <LogoutButton />
        </div>
      </nav>
    </div>
  ) : (
    <div></div>
  );
}
