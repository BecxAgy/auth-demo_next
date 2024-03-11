import { quotationService } from '@/lib/service/quotationService'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type InitialState = {
    quotation: QuotationState
    quotations: QuotationState[]
    success: boolean
    loading: boolean
}

type QuotationState = {
    id: number
    name: string
    area: number
    factor: number
    description: string
    deliverable_id: Array<number>
    conversion_id: Array<number>
}

const InitialState = {
    quotation: {
        id: 0,
        name: '',
        area: 0,
        factor: 0,
        description: '',
        deliverable_id: [],
        conversion_id: [],
    } as QuotationState,
    quotations: [],
    error: null,
    success: false,
    loading: false,
} as unknown as InitialState

export const getAllQuotations = createAsyncThunk(
    'project/getall',
    async (_, thunkAPI) => {
        //const data = await quotationsService.getQuotations ()
        //return data
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
