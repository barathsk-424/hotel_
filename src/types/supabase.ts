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
      amenities: {
        Row: {
          category: string | null
          id: string
          icon: string | null
          name: string
        }
        Insert: {
          category?: string | null
          id?: string
          icon?: string | null
          name: string
        }
        Update: {
          category?: string | null
          id?: string
          icon?: string | null
          name?: string
        }
      }
      bookings: {
        Row: {
          check_in: string
          check_out: string
          created_at: string | null
          id: string
          payment_status: string | null
          room_id: string | null
          special_requests: string | null
          status: string | null
          total_price: number
          user_id: string | null
        }
        Insert: {
          check_in: string
          check_out: string
          created_at?: string | null
          id?: string
          payment_status?: string | null
          room_id?: string | null
          special_requests?: string | null
          status?: string | null
          total_price: number
          user_id?: string | null
        }
        Update: {
          check_in?: string
          check_out?: string
          created_at?: string | null
          id?: string
          payment_status?: string | null
          room_id?: string | null
          special_requests?: string | null
          status?: string | null
          total_price?: number
          user_id?: string | null
        }
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          loyalty_points: number | null
          phone: string | null
          preferences: Json | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          loyalty_points?: number | null
          phone?: string | null
          preferences?: Json | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          loyalty_points?: number | null
          phone?: string | null
          preferences?: Json | null
          updated_at?: string | null
        }
      }
      reviews: {
        Row: {
          comment: string | null
          created_at: string | null
          id: string
          is_published: boolean | null
          rating: number | null
          room_id: string | null
          user_id: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string | null
          id?: string
          is_published?: boolean | null
          rating?: number | null
          room_id?: string | null
          user_id?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string | null
          id?: string
          is_published?: boolean | null
          rating?: number | null
          room_id?: string | null
          user_id?: string | null
        }
      }
      room_amenities: {
        Row: {
          amenity_id: string
          room_id: string
        }
        Insert: {
          amenity_id: string
          room_id: string
        }
        Update: {
          amenity_id?: string
          room_id?: string
        }
      }
      room_categories: {
        Row: {
          base_price: number
          created_at: string | null
          description: string | null
          id: string
          name: string
        }
        Insert: {
          base_price: number
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          base_price?: number
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
        }
      }
      rooms: {
        Row: {
          amenities: string[] | null
          capacity: number
          category_id: string | null
          created_at: string | null
          description: string | null
          floor: number | null
          id: string
          images: string[] | null
          is_available: boolean | null
          price_per_night: number
          room_number: string
          status: string | null
        }
        Insert: {
          amenities?: string[] | null
          capacity?: number
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          floor?: number | null
          id?: string
          images?: string[] | null
          is_available?: boolean | null
          price_per_night: number
          room_number: string
          status?: string | null
        }
        Update: {
          amenities?: string[] | null
          capacity?: number
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          floor?: number | null
          id?: string
          images?: string[] | null
          is_available?: boolean | null
          price_per_night?: number
          room_number?: string
          status?: string | null
        }
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
