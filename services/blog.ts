import { supabase } from "@/lib/supabase/client"
import { Blog } from "@/types/blog"

export async function getAllBlogs(): Promise<Blog[]> {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .filter("is_published", "eq", true)
    .order("created_at", { ascending: false })

  if (error) throw new Error(error.message)
  return data as Blog[]
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single()

  if (error) null
  return data as Blog
}
