import { quotationService } from '@/lib/service/quotationService'
import { QuotationView } from '@/utils/types'
import { Reducer, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type InitialState = {
    quotation: QuotationView
    quotations: QuotationView[]
    success: boolean
    loading: boolean
}

const InitialState = {
    quotation: {
        id: 0,
        name: '',
        sale_cost: 0,
        scanner_cost: 0,
        actual_cost: 0,
        deadline: 0,
        factor: 0,
    } as QuotationView,
    quotations: [],
    error: null,
    success: false,
    loading: false,
} as unknown as InitialState

export const getAllQuotations = createAsyncThunk(
    'project/getall',
    async (_, thunkAPI) => {
        const data = await quotationService.getAllQuotations()
        return data
    },
)

export const getQuotationById = createAsyncThunk(
    'quotation/getById',
    async (id: number, thunkAPI) => {
        const data = await quotationService.getQuotationById(id)
        return data
    },
)

export const quotationSlice = createSlice({
    name: 'quotation',
    initialState: InitialState,
    reducers: {
        resetMessage: state => {},
    },
    extraReducers: builder => {
        builder
            .addCase(getAllQuotations.pending, state => {
                state.loading = true
            })
            .addCase(getAllQuotations.fulfilled, (state, action) => {
                state.loading = false
                state.success = true

                if (action.payload !== undefined) {
                    state.quotations = action.payload
                }
            })
    },
})

export default quotationSlice.reducer
