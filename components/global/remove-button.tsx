import React, { ReactNode, useContext } from 'react'
import { Button } from '../ui/button'
import { useDispatch } from 'react-redux'
import { removeCloud } from '@/lib/features/cloud-slice'
import { SheetContext } from '@/lib/contexts/sheet'
import { AppDispatch } from '@/lib/store'

const RemoveButton = ({
    children,
    id,
}: {
    children: ReactNode
    id: number
}) => {
    const dispatch = useDispatch<AppDispatch>()
    const { cloud } = useContext(SheetContext)

    const remove = async (id: number) => {
        console.log('click id', id)
        dispatch(removeCloud(id))
    }
    return <Button onClick={() => remove(id)}>{children}</Button>
}

export default RemoveButton
