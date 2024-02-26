'use client'
import React, { useState } from 'react'
import { NavbarItem } from '@/utils/constants'
import {
    MdOutlineKeyboardArrowDown,
    MdOutlineKeyboardArrowUp,
} from 'react-icons/md'
import Link from 'next/link'

interface SidenavItemProps {
    item: NavbarItem
}

const SidenavItem: React.FC<SidenavItemProps> = ({ item }) => {
    const [dropMenu, setDropMenu] = useState(false)

    return (
        <div
            className='flex relative text-[14px] py-[16px] px-[20px] mt-2 gap-[16px] rounded-[12px] hover:bg-[#eb843b6b] hover:font-semibold'
            key={item.title}
        >
            {/* Renderize o item da barra lateral aqui */}
            {item.icon}
            <Link href={item.link}>{item.title}</Link>
            {item.subItems && <MdOutlineKeyboardArrowDown />}
        </div>
    )
}

export default SidenavItem
