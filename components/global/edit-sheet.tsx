'use client'
import React, { useContext, useEffect, useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet'

import { SheetContext } from '@/lib/contexts/sheet'
import FormEdit from './form/form_edit'

const EditSheet = () => {
    const { openSheet, setOpenSheet } = useContext(SheetContext)
    return (
        <Sheet open={openSheet} onOpenChange={setOpenSheet}>
            <SheetContent className='border-none shadow-lg text-white bg-dark-2 w-[600px] sm:w-[700px]'>
                <SheetHeader>
                    <SheetTitle> Editar Cotação</SheetTitle>
                    <SheetDescription>
                        <FormEdit />
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default EditSheet
