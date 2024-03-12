'use client'
import React, { ReactNode, useContext } from 'react'
import { Button } from '../ui/button'
import { SheetContext } from '@/lib/contexts/sheet'
import { CloudState } from '@/utils/types'

const ToogleProvider = ({
    children,
    id,
}: {
    children: ReactNode
    id: number
}) => {
    const { toogleSheet, getCloudByIdAfterOpenSheet } = useContext(SheetContext)
    return (
        <Button
            onClick={() => {
                toogleSheet()
                //context para obter a cloud pelo id
                debugger
                getCloudByIdAfterOpenSheet(id)
                console.log('clicou')
            }}
        >
            {children}
        </Button>
    )
}

export default ToogleProvider
