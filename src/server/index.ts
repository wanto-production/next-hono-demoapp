import { createClient } from "@/utils/supabase/server";
import { EmailOtpType } from "@supabase/supabase-js";
import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono().basePath('/api/').use(cors())

app.get('/auth/callback',async (c) => {
    const url = new URL(c.req.url)
    const token_hash = url.searchParams.get('token_hash') as string
    const type = url.searchParams.get('type') as EmailOtpType

    const supabase = await createClient()

    await supabase.auth.verifyOtp({
        token_hash,
        type
    })

    return c.redirect('/')
})

app.get('/signout',async (c) => {
    const supabase = await createClient()
    const { error } = await supabase.auth.signOut()

    if(error) return c.json({ message:error.message })
    return c.json({ message:'logout berhasil' })
})

export { app }