import React from 'react'
import { Button } from '../ui/button'
import { signOut } from '@/auth'

const SignOutButton = async () => {
    return (
        <form
            action={async () => {
                'use server'

                await signOut()
            }}
        >
            <Button type='submit'>SignOut</Button>
        </form>
    )
}

export default SignOutButton
