'use client'
import React, { useContext, useEffect, useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { QuotationView } from '@/utils/types'
import FormTeste from './form/form_teste'
import { getQuotationById } from '@/lib/features/quotations/quotation-slice'
import { SheetContext } from '@/lib/contexts/sheet'

const EditSheet = () => {
    const { openSheet, setOpenSheet, cloud } = useContext(SheetContext)
    return (
        <Sheet open={openSheet} onOpenChange={setOpenSheet}>
            <SheetTrigger asChild>
                <span>Editar</span>
            </SheetTrigger>
            <SheetContent className='border-none shadow-lg text-white bg-dark-2 w-[600px] sm:w-[700px]'>
                <SheetHeader>
                    <SheetTitle> {cloud?.area}</SheetTitle>
                    <SheetDescription>
                        <FormTeste />
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default EditSheet
