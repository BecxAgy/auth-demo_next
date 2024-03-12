'use client'

import { ColumnDef } from '@tanstack/react-table'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MoreHorizontal, ArrowUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import EditSheet from '@/components/global/edit-sheet'

export type QuotationView = {
    id: number
    name: string
    sale_cost: number
    scanner_cost: number
    actual_cost: number
    deadline: number
    factor: number
}
export type CloudState = {
    id: number
    name: string
    area: number
    factor: number
    description: string
    deliverable_id: Array<number>
    conversion_id: Array<number>
}

export const columnsQuotation: ColumnDef<QuotationView>[] = [
    {
        accessorKey: 'id',
        header: 'id',
    },
    {
        accessorKey: 'name',
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }
                >
                    Name
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            )
        },
    },
    {
        accessorKey: 'sale_cost',
        header: 'Custo de Venda',
    },
    {
        accessorKey: 'scanner_cost',
        header: 'Custo do Scanner',
    },
    {
        accessorKey: 'actual_cost',
        header: 'Custo Atual',
    },
    {
        accessorKey: 'deadline',
        header: 'Prazo em dias úteis',
    },
    {
        accessorKey: 'factor',
        header: 'Fator',
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            const quotation = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant='ghost'
                            className='text-primary-500 h-8 w-8 p-0'
                        >
                            <MoreHorizontal className='h-4 w-4' />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className='bg-dark-2 text-white border-none shadow-lg'
                        align='end'
                    >
                        <DropdownMenuItem>Visualizar</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Excluir</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
