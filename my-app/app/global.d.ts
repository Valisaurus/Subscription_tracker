import { Database } from "@/lib/database.types";

type services = Database["public"]["Tables"]["services"]["Row"];
type subscriptions = Database["public"]["Tables"]["subscriptions"]["Row"];
type subscriptions_users =
  Database["public"]["Tables"]["subscriptions_users"]["Row"];
