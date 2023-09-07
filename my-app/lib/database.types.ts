export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      subscriptions: {
        Row: {
          id: number
          name: string | null
          price: number | null
          trial_length_days: number | null
        }
        Insert: {
          id?: number
          name?: string | null
          price?: number | null
          trial_length_days?: number | null
        }
        Update: {
          id?: number
          name?: string | null
          price?: number | null
          trial_length_days?: number | null
        }
        Relationships: []
      }
      subscriptions_users: {
        Row: {
          id: number
          subscription_id: number | null
          user_id: string | null
        }
        Insert: {
          id?: number
          subscription_id?: number | null
          user_id?: string | null
        }
        Update: {
          id?: number
          subscription_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_users_subscription_id_fkey"
            columns: ["subscription_id"]
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_users_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          had_free_trial: boolean | null
          id: number
          start_date: string | null
          uuid: string | null
        }
        Insert: {
          had_free_trial?: boolean | null
          id?: number
          start_date?: string | null
          uuid?: string | null
        }
        Update: {
          had_free_trial?: boolean | null
          id?: number
          start_date?: string | null
          uuid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_uuid_fkey"
            columns: ["uuid"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
