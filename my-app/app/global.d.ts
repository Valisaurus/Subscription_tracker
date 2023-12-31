import { Database } from "@/lib/database.types";

declare global {
  type services = Array<Database["public"]["Tables"]["services"]["Row"]> | null;
  type subscriptions = Array<
    Database["public"]["Tables"]["subscriptions"]["Row"]
  > | null;
  type subscriptions_users = Array<
    Database["public"]["Tables"]["subscriptions_users"]["Row"]
  > | null;
  type web_push_notifications = Array<
    Database["public"]["Tables"]["web_push_notifications"]["Row"]
  > | null;

  type service = Database["public"]["Tables"]["services"]["Row"] | null;
  type subscription =
    | Database["public"]["Tables"]["subscriptions"]["Row"]
    | null;
  type subscription_user =
    | Database["public"]["Tables"]["subscriptions_users"]["Row"]
    | null;
  type web_push_notification =
    | Database["public"]["Tables"]["web_push_notifications"]["Row"]
    | null;
}
