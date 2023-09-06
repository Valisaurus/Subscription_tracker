import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default function AdminForm() {
  const handleForm = async (formData: FormData) => {
    "use server";
    const supabase = createServerActionClient({ cookies });
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
