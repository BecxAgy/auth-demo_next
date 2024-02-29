'use client'

import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import { Header } from './header'
import Social from './social'
import { BackButton } from './back-button'

interface CardWrapperProps {
    children: React.ReactNode
    headerLabel: string
    backButttonLabel: string
    backButtonHref: string
    showSocial?: boolean
}

export const CardWrapper = ({
    children,
    headerLabel,
    backButttonLabel,
    backButtonHref,
    showSocial,
}: CardWrapperProps) => {
    return (
        <Card className='w-[400px] shadow-md bg-dark-1 text-white'>
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>{children}</CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton label={backButttonLabel} href={backButtonHref} />
            </CardFooter>
        </Card>
    )
}
