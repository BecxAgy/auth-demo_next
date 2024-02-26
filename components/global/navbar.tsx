import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.svg'
import { signOut } from '@/auth'
import { Button } from '../ui/button'
import SignOutButton from '../auth/signout-button'

const Navbar = async () => {
    return (
        <div className='bg-slate-400/10 justify-between w-full flex shadow-md p-3'>
            <div></div>
            <SignOutButton />
        </div>
    )
}

export default Navbar
