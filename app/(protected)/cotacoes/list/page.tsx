import { DataTable } from '@/components/global/data_table'
import EditSheet from '@/components/global/edit-sheet'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { QuotationView, columnsQuotation } from '@/utils/types'

import React from 'react'
async function getQuotations(): Promise<QuotationView[]> {
    let data: QuotationView[] = []
    const res = await fetch('http://localhost:4006/api/resume/')
        .then(res => res.json())
        .catch(err => console.log('error', err))

    if (res) {
        console.log('res', res)
        data = res
    }

    return data
}
const quotationData: QuotationView[] = [
    {
        id: 1,
        name: 'Product A',
        sale_cost: 100,
        scanner_cost: 90,
        actual_cost: 80,
        deadline: 7,
        factor: 1.2,
    },
    {
        id: 2,
        name: 'Product B',
        sale_cost: 150,
        scanner_cost: 130,
        actual_cost: 120,
        deadline: 14,
        factor: 1.3,
    },
    {
        id: 3,
        name: 'Product C',
        sale_cost: 200,
        scanner_cost: 180,
        actual_cost: 160,
        deadline: 30,
        factor: 1.5,
    },
    {
        id: 4,
        name: 'Product D',
        sale_cost: 80,
        scanner_cost: 70,
        actual_cost: 60,
        deadline: 5,
        factor: 1.1,
    },
]

// You can use the above data to populate your table

const List = async () => {
    //fixme: this is not working
    //const data = await getQuotations()
    return (
        <div className='flex  justify-center w-full'>
            <Card className='shadow-md border-none  bg-dark-2 p-10'>
                <CardContent>
                    <DataTable
                        columns={columnsQuotation}
                        data={quotationData}
                    />
                </CardContent>
            </Card>
            <EditSheet
                quotation={{
                    id: 4,
                    name: 'Product D',
                    sale_cost: 80,
                    scanner_cost: 70,
                    actual_cost: 60,
                    deadline: 5,
                    factor: 1.1,
                }}
            />
        </div>
    )
}

export default List
