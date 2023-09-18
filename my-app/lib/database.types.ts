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
      services: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          id: number
          name: string | null
          price: number | null
          service_id: number | null
          trial_period_days: number | null
          trial_price: number | null
        }
        Insert: {
          id?: number
          name?: string | null
          price?: number | null
          service_id?: number | null
          trial_period_days?: number | null
          trial_price?: number | null
        }
        Update: {
          id?: number
          name?: string | null
          price?: number | null
          service_id?: number | null
          trial_period_days?: number | null
          trial_price?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_service_id_fkey"
            columns: ["service_id"]
            referencedRelation: "services"
            referencedColumns: ["id"]
          }
        ]
      }
      subscriptions_users: {
        Row: {
          active: boolean
          had_trial: boolean
          id: number
          start_date: string | null
          subscription_id: number | null
          user_id: string | null
        }
        Insert: {
          active?: boolean
          had_trial?: boolean
          id?: number
          start_date?: string | null
          subscription_id?: number | null
          user_id?: string | null
        }
        Update: {
          active?: boolean
          had_trial?: boolean
          id?: number
          start_date?: string | null
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
