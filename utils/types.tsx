'use client'
import { ColumnDef } from '@tanstack/react-table'

export type QuotationView = {
    id: number
    name: string
    technology_cost: number
    scanner_rental: number
    deadline: number
}

export const columnsQuotation: ColumnDef<QuotationView>[] = [
    {
        accessorKey: 'id',
        header: 'id',
    },
    {
        accessorKey: 'name',
        header: 'Nome',
    },
    {
        accessorKey: 'technology_cost',
        header: 'Custo Tecnologia',
    },
    {
        accessorKey: 'scanner_rental',
        header: 'Aluguel Scanner',
    },
    {
        accessorKey: 'deadline',
        header: 'Prazo em dias úteis',
    },
]
