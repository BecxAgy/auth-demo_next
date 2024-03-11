'use client'
import React, { useEffect, useState } from 'react'
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
interface EditSheetProps {
    quotation: QuotationView
}
const EditSheet: React.FC<EditSheetProps> = ({ quotation }) => {
    const [open, setOpen] = useState(false)
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <span>Editar</span>
            </SheetTrigger>
            <SheetContent className='border-none shadow-lg text-white bg-dark-2 w-[600px] sm:w-[700px]'>
                <SheetHeader>
                    <SheetTitle>Editar Cotação</SheetTitle>
                    <SheetDescription>
                        <FormTeste />
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default EditSheet
