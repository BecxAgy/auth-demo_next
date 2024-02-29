import { CiGrid41, CiMemoPad } from 'react-icons/ci'
import { IconType } from 'react-icons'
import React from 'react'

export const sidebarLinks = [
    {
        label: 'Home',
        icon: '/homee.svg',
        route: '/home',
    },
    {
        label: 'Cotações',
        icon: '/quotation-sqare.svg',
        route: '/cotacoes',
        subItems: [
            {
                label: 'Cadastro',
                route: '/cotacoes/cadastro',
            },
            {
                label: 'Gerenciamento',
                route: '/cotacoes/gerenciamento',
            },
        ],
    },
    // Adicione outros itens conforme necessário
]
