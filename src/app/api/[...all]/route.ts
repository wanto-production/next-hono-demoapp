import { app } from "@/server";
import type { NextRequest } from "next/server";

const handler = (req:NextRequest)=> app.fetch(req)

export {
    handler as POST,
    handler as GET,
    handler as PUT,
    handler as PATCH,
    handler as DELETE,
}