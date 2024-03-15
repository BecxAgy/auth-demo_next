import { createContext, useState } from 'react'
import { CloudState } from '@/utils/types'
import { cloudService } from '@/lib/service/cloud-service'
import { set } from 'zod'
import cloudSlice, { getCloudById } from '@/lib/features/cloud-slice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/lib/store'

export type SheetContextProps = {
    openSheet: boolean
    setOpenSheet: (value: boolean) => void
    toogleSheet: () => void
    cloud: CloudState
    setCloud: (value: CloudState) => void
    getCloudByIdAfterOpenSheet: (id: number) => void
}
const SheetContext = createContext({} as SheetContextProps)

function SheetProvider({ children }: { children: React.ReactNode }) {
    const [openSheet, setOpenSheet] = useState<boolean>(false)
    const [cloud, setCloud] = useState<CloudState | null>(null)
    const dispatch = useDispatch<AppDispatch>()

    const toogleSheet = () => {
        setOpenSheet(!openSheet)
    }

    const getCloudByIdAfterOpenSheet = async (id: number) => {
        debugger
        dispatch(getCloudById(id))
        setOpenSheet(true)
    }

    return (
        <SheetContext.Provider
            value={{
                openSheet,
                setOpenSheet,
                toogleSheet,
                setCloud,
                cloud: cloud as CloudState, // Fix: Update the type of 'cloud' to 'CloudState | null'
                getCloudByIdAfterOpenSheet,
            }}
        >
            {children}
        </SheetContext.Provider>
    )
}
export { SheetContext, SheetProvider }
