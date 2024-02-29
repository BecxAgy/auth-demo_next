import { sidebarLinks } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LeftSidebar = () => {
    return (
        <div className='custom-scrollbar leftsidebar'>
            <div className='flex w-full flex-col'>
                {sidebarLinks.map(link => (
                    <Link
                        href={link.route}
                        key={link.label}
                        className='leftsidebar_link'
                    >
                        <Image
                            width={24}
                            height={24}
                            alt='icon'
                            src={link.icon}
                        />
                        <p className='text-light-1 max-lg:hidden'>
                            {link.label}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default LeftSidebar
