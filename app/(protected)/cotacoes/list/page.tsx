'use client'
import { DataTable } from '@/components/global/data_table'
import EditSheet from '@/components/global/edit-sheet'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { SheetProvider } from '@/lib/contexts/sheet'
import { getAllQuotations } from '@/lib/features/cloud-slice'
import { AppDispatch, RootState } from '@/lib/store'
import { QuotationView, columnsQuotation } from '@/utils/types'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const quotationData: QuotationView[] = [
    {
        id: 8,
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

const List = () => {
    const dispatch = useDispatch<AppDispatch>()

    const { success, quotations, cloud } = useSelector(
        (state: RootState) => state.cloud,
    )

    useEffect(() => {
        debugger
        dispatch(getAllQuotations())
    }, [dispatch, success])
    return (
        <SheetProvider>
            <div className='flex  justify-center w-full'>
                <Card className='shadow-md border-none  bg-dark-2 p-10'>
                    <CardContent>
                        <DataTable
                            columns={columnsQuotation}
                            data={quotations}
                        />
                    </CardContent>
                </Card>

                <EditSheet />
            </div>
        </SheetProvider>
    )
}

export default List
