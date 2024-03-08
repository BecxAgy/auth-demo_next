import { DataTable } from '@/components/global/data_table'
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

const List = async () => {
    //fixme: this is not working
    const data = await getQuotations()
    return (
        <div className='flex  justify-center w-full'>
            <Card className='shadow-md border-none  bg-dark-2 p-10'>
                <CardContent>
                    <DataTable columns={columnsQuotation} data={data} />
                </CardContent>
            </Card>
        </div>
    )
}

export default List
