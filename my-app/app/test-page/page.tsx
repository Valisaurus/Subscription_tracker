import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import ServiceForm from "@/components/ServiceForm";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const name = String(formData.get("name"));
  const price = Number(formData.get("price"));
  const supabase = createRouteHandlerClient({ cookies });
}

const ServiceData = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("subscriptions")
    .select(
      `
      name, 
      price, 
     subscriptions_users ( user_id )
    `
    )
    .match({ user_id: user?.id });

  if (error) {
    console.log(error);
  }
  console.log(data);
  return <ServiceForm />;
};

export default ServiceData;
