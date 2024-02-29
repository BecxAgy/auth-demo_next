import Link from 'next/link'
import SignOutButton from '../auth/signout-button'
import Image from 'next/image'
import { AvatarIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'

function Topbar() {
    return (
        <nav className='topbar'>
            <Link href='/home' className='flex items-center gap-4'>
                <Image src='/logo.svg' alt='logo' width={28} height={28} />
                <p className='text-heading3-bold text-light-1 max-xs:hidden'>
                    CotaTech
                </p>
            </Link>

            <div className='flex items-center gap-1'>
                <SignOutButton />

                <AvatarIcon className='w-6 h-6 text-white' />

                {/* <OrganizationSwitcher
                    appearance={{
                        baseTheme: dark,
                        elements: {
                            organizationSwitcherTrigger: 'py-2 px-4',
                        },
                    }}
                /> */}
            </div>
        </nav>
    )
}

export default Topbar
