"use server"
import { createClient } from "@/utils/supabase/server"

export default async function login(_:unknown,formData:FormData) {
    const email = formData.get("email") as string

    const supabase = await createClient()

    const { error } = await supabase.auth.signInWithOtp({
        email
    })

    if(error)return{ message:error.message }

    return{ message:`email verifikasi akan di kirim ke ${email}` }
}