'use client'
import { DataTable } from '@/components/global/data_table'
import EditSheet from '@/components/global/edit-sheet'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ToastAction } from '@/components/ui/toast'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'

import { SheetProvider } from '@/lib/contexts/sheet'
import { getAllQuotations } from '@/lib/features/cloud-slice'
import { AppDispatch, RootState } from '@/lib/store'
import { QuotationView, columnsQuotation } from '@/utils/types'

import React, { use, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// You can use the above data to populate your table

const List = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { toast } = useToast()

    const { success, quotations, message, error, cloud } = useSelector(
        (state: RootState) => state.cloud,
    )

    useEffect(() => {
        debugger
        dispatch(getAllQuotations())
    }, [dispatch, success])
    useEffect(() => {
        if (error && message) {
            toast({
                variant: 'destructive',
                title: 'Ops! Algo deu errado.',
                description: message || 'Houve um problema com sua operação.',
                action: (
                    <ToastAction altText='Try again'>
                        Tente Novamente
                    </ToastAction>
                ),
            })
        }
        if (success && message) {
            toast({
                title: 'Sucesso!',
                description: message,
            })
        }
    }, [success, message])
    return (
        <SheetProvider>
            <div className='flex flex-col justify-center gap-5'>
                <div className='grid grid-cols-2 justify-between gap-5'>
                    {/* Cards */}
                    <Card
                        onClick={() => {
                            toast({
                                variant: 'destructive',
                                title: 'Uh oh! Something went wrong.',
                                description:
                                    'There was a problem with your request.',
                                action: (
                                    <ToastAction altText='Try again'>
                                        Try again
                                    </ToastAction>
                                ),
                            })
                        }}
                        className='shadow-md border-none col-span bg-dark-2 p-10'
                    >
                        <CardHeader>
                            <h1 className='text-white text-2xl'>Cotações</h1>
                        </CardHeader>
                        <CardContent>
                            <p className='text-white'>
                                Crie e gerencie suas cotações
                            </p>
                        </CardContent>
                    </Card>

                    <Card className='shadow-md border-none w-full bg-dark-2 p-10'>
                        <CardHeader>
                            <h1 className='text-white text-2xl'>Cotações</h1>
                        </CardHeader>
                        <CardContent>
                            <p className='text-white'>
                                Crie e gerencie suas cotações
                            </p>
                        </CardContent>
                    </Card>
                </div>{' '}
                <Card className='shadow-md border-none w-full bg-dark-2 p-10'>
                    <CardContent>
                        <DataTable
                            columns={columnsQuotation}
                            data={quotations}
                        />
                    </CardContent>
                </Card>
                <EditSheet />
                <Toaster />
            </div>
        </SheetProvider>
    )
}

export default List
