import { signOut } from 'next-auth/react'
import React from 'react'
import { Button } from '../ui/button'

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
