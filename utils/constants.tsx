import { CiGrid41, CiMemoPad } from 'react-icons/ci'
import { IconType } from 'react-icons'
import React from 'react'

export interface NavbarItem {
    title: string
    icon: React.ReactNode // Este é o tipo do ícone que está sendo usado, pode variar dependendo da biblioteca de ícones que você está usando
    link: string
    subItems?: NavbarItem[]
}

export const navbarItems = [
    {
        title: 'Home',
        icon: (
            <CiGrid41
                className='w-[24px] h-[24px]
        '
            />
        ),
        link: '/home',
    },
    {
        title: 'Cotações',
        icon: <CiMemoPad className='w-[24px] h-[24px]' />,
        link: '/cotacoes',
        subItems: [
            {
                title: 'Cadastro',
                link: '/cotacoes/cadastro',
            },
            {
                title: 'Gerenciamento',
                link: '/cotacoes/gerenciamento',
            },
        ],
    },
    // Adicione outros itens conforme necessário
]
