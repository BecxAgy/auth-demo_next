'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'

import { sidebarLinks } from '@/utils/constants'
import { useSession } from 'next-auth/react'

const LeftSidebar = () => {
    const router = useRouter()
    const pathname = usePathname()

    const { data } = useSession()

    return (
        <section className='custom-scrollbar leftsidebar'>
            <div className='flex w-full flex-1 flex-col gap-6 px-6'>
                {sidebarLinks.map(link => {
                    const isActive =
                        (pathname.includes(link.route) &&
                            link.route.length > 1) ||
                        pathname === link.route

                    if (link.route === '/profile')
                        link.route = `${link.route}/${data?.user?.id}`

                    return (
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Link
                                        href={link.route}
                                        key={link.label}
                                        className={`leftsidebar_link ${isActive && 'bg-primary-500 '}`}
                                    >
                                        <Image
                                            src={link.icon}
                                            alt={link.label}
                                            width={24}
                                            height={24}
                                        />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent
                                    side='right'
                                    className='bg-white rounded-md text-[11px]'
                                >
                                    <p>{link.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )
                })}
            </div>

            {/* <div className='mt-10 px-6'>
                <SignedIn>
                    <SignOutButton
                        signOutCallback={() => router.push('/sign-in')}
                    >
                        <div className='flex cursor-pointer gap-4 p-4'>
                            <Image
                                src='/assets/logout.svg'
                                alt='logout'
                                width={24}
                                height={24}
                            />

                            <p className='text-light-2 max-lg:hidden'>Logout</p>
                        </div>
                    </SignOutButton>
                </SignedIn>
            </div> */}
        </section>
    )
}

export default LeftSidebar
