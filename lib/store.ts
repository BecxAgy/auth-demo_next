import { configureStore } from '@reduxjs/toolkit'
import quotationSlice from './features/quotations/quotation-slice'
import cloudSlice from './features/quotations/cloud-slice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            quotation: quotationSlice,
            cloud: cloudSlice,
        },
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
