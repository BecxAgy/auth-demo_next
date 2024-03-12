'use client'
import { Provider } from 'react-redux'
import { makeStore } from '@/lib/store'

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={makeStore()}>{children}</Provider>
}
