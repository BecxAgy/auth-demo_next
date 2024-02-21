'use client'

import React from 'react'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

import { useScroll } from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'

const Header = () => {
    const selectedLayout = useSelectedLayoutSegment()

    return (
        <div
            className={`sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`}
        >
            headert
        </div>
    )
}

export default Header
