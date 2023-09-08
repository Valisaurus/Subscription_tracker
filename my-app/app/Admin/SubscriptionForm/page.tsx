import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function AdminForm() {
  const supabase = createServerActionClient({ cookies });
  const handleForm = async (formData: FormData) => {
    "use server";

    const name = String(formData.get("name"));
    const price = Number(formData.get("price"));
    const trial_length_days = Number(formData.get("trial_length_days"));

    const { error } = await supabase.from("subscriptions").insert({
      name,
      price,
      trial_length_days,
    });

    if (error) {
      console.log(error);
    }
  };

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const fetchSubscriptions = await supabase
    .from("subscriptions")
    .select("name, price");

  const subscriptions = fetchSubscriptions.data;

  console.log(subscriptions);

  const services: { name: string; price: number }[] | undefined =
    subscriptions?.map((service: { name: string; price: number }) => {
      return { name: service?.name, price: service?.price };
    });

  const totalPrice: number | undefined = subscriptions?.reduce(
    (accumulator, total) => {
      console.log("Total Price:", total.price);
      return accumulator + total.price;
    },
    0
  );

  return (
    <div>
      <form action={handleForm} method="POST">
        <label htmlFor="name">Enter name:</label>
        <input type="text" name="name" />
        <label htmlFor="price">Enter price:</label>
        <input type="number" name="price" />
        <label htmlFor="trial_length_days">Enter free trial length:</label>
        <input type="number" name="trial_length_days" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
