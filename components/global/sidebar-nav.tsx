import React from 'react'
import avatar from '../../public/Avatar.png'
import Image from 'next/image'
import { navbarItems } from '@/utils/constants'
const SidebarNavigation = () => {
    return (
        <aside className='h-screen'>
            <div className='h-full w-[256px] min-w-[104px] bg-[#FFEDE0] rounded-r-[28px]'>
                <div className='flex flex-col gap-y-2 '>
                    {/* User information */}

                    <div className='flex flex-row gap-[12px] px-5 py-3 mt-4'>
                        {/* icon or image */}
                        <Image
                            src={avatar}
                            alt='avatar image'
                            width={48}
                            height={48}
                        />
                        <div className='flex flex-col my-auto'>
                            <p className='uppercase font-medium text-[14px]'>
                                Rebeca Aguiar
                            </p>
                            <span className='text-[13px] font-medium text-[#66615C] '>
                                Admin
                            </span>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className='w-[80%] h-[0.5px] bg-[#432C2C] opacity-5 mx-auto' />

                    {/* Main */}
                    <div className=''>
                        <h2>Principal</h2>
                        {navbarItems.map((items, index) => (
                            <div>{items.title}</div>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default SidebarNavigation
