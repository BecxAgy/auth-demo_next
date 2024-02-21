import { CiGrid41, CiMemoPad } from 'react-icons/ci'
export const navbarItems = [
    {
        title: 'Home',
        icon: CiGrid41,
        link: '/home',
    },
    {
        title: 'Cotações',
        icon: CiMemoPad,
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
