"use client"
import { useActionState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import login from "./actions"

export default function Form() {

    const [state,actionFn,pending] = useActionState(login,null)

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        {state?.message?(
            <CardDescription>{state.message}</CardDescription>
        ):(
            <CardDescription>percayakan login di website kami!</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <form action={actionFn}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">email</Label>
              <Input id="name" name="email" placeholder="email" required />
            </div>
          </div>
          <Button disabled={pending} className=" mt-2">login</Button>
        </form>
      </CardContent>
    </Card>
  )
}

