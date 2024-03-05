'use client'
import { ColumnDef } from '@tanstack/react-table'

export type QuotationView = {
    id: number
    name: string
    sale_cost: number
    scanner_cost: number
    actual_cost: number
    deadline: number
    factor: number
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
]
