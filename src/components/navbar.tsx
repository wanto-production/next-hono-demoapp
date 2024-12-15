"use client"
import { User } from '@supabase/supabase-js'
import React, { useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

function Navbar({
    user
}:{
    user:User|null
}) {
    const [loading,setLoading] = useState(false)

    const handleSignout = async () => {
        setLoading(true)
        const r = await fetch('/api/signout')
        const data = await r.json()

        alert(data.message)
        setLoading(false)
        window.location.reload()
    }

  return (
    <header className=' w-full h-[70px] p-2 fixed top-0'>
        <nav className=' w-full h-full flex justify-between items-center px-2'>
            <h2><i className='fa fa-user'></i> {user?.email?.replaceAll("@gmail.com","") || "Guest"}</h2>

            {user?(
                <Button disabled={loading} onClick={handleSignout}>signOut</Button>
            ):(
                <Link href='/login'>login</Link>
            )}
        </nav>
    </header>
  )
}

export default Navbar