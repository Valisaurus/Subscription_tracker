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
      phone_numbers: {
        Row: {
          id: number
          phone: string | null
          user_id: string | null
        }
        Insert: {
          id?: number
          phone?: string | null
          user_id?: string | null
        }
        Update: {
          id?: number
          phone?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "phone_numbers_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
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
          id: number
          subscription_id: number | null
          trial_end_date: string | null
          user_id: string | null
        }
        Insert: {
          id?: number
          subscription_id?: number | null
          trial_end_date?: string | null
          user_id?: string | null
        }
        Update: {
          id?: number
          subscription_id?: number | null
          trial_end_date?: string | null
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
      web_push_notifications: {
        Row: {
          auth_key: string | null
          endpoint: string | null
          id: number
          p256dh_key: string | null
          user_id: string | null
        }
        Insert: {
          auth_key?: string | null
          endpoint?: string | null
          id?: number
          p256dh_key?: string | null
          user_id?: string | null
        }
        Update: {
          auth_key?: string | null
          endpoint?: string | null
          id?: number
          p256dh_key?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "web_push_notifications_user_id_fkey"
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
