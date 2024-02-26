import { DataTable } from '@/components/global/data_table'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { QuotationView, columnsQuotation } from '@/utils/types'

import React from 'react'
async function getQuotations(): Promise<QuotationView[]> {
    //const res = await fetch('')
    const data = [
        {
            id: 1,
            name: 'Quotation 1',
            technology_cost: 1000,
            scanner_rental: 200,
            deadline: 7,
        },
        {
            id: 2,
            name: 'Quotation 2',
            technology_cost: 1500,
            scanner_rental: 250,
            deadline: 5,
        },
        {
            id: 3,
            name: 'Quotation 3',
            technology_cost: 800,
            scanner_rental: 150,
            deadline: 10,
        },
        // Adicione mais itens conforme necessário
    ]
    return data
}

const List = async () => {
    const data = await getQuotations()
    return (
        <div className=' flex flex-col lg:w-[1440px]'>
            <Card className='shadow-md border-none '>
                <CardHeader>
                    <h1 className='font-semibold text-2xl'>Cotações</h1>
                </CardHeader>
                <CardContent>
                    <DataTable columns={columnsQuotation} data={data} />
                </CardContent>
            </Card>
        </div>
    )
}

export default List
