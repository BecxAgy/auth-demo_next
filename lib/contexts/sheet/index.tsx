import { createContext, useState } from 'react'
import { CloudState } from '@/utils/types'
import { cloudService } from '@/lib/service/cloud-service'

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

    const toogleSheet = () => {
        setOpenSheet(!openSheet)
        console.log('sheet esta:', openSheet)
    }

    const getCloudByIdAfterOpenSheet = async (id: number) => {
        debugger
        const data = await cloudService.getCloudById(id)
        setCloud(data)
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
