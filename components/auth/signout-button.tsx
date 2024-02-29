import React from 'react'
import { Button } from '../ui/button'
import { signOut } from '@/auth'
import { VscSignOut } from 'react-icons/vsc'

const SignOutButton = async () => {
    return (
        <form
            action={async () => {
                'use server'

                await signOut()
            }}
        >
            <Button type='submit' variant={'link'}>
                <VscSignOut color='white' className='w-6 h-6' />
            </Button>
        </form>
    )
}

export default SignOutButton
