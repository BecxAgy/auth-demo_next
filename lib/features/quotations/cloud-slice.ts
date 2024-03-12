import { cloudService } from '@/lib/service/cloud-service'
import { quotationService } from '@/lib/service/quotationService'
import { CloudState } from '@/utils/types'
import { Reducer, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type InitialState = {
    cloud: CloudState
    clouds: CloudState[]
    success: boolean
    loading: boolean
}

const InitialState = {
    cloud: {
        id: 0,
        name: '',
        area: 0,
        factor: 0,
        description: '',
        deliverable_id: [],
        conversion_id: [],
    } as CloudState,
    clouds: [],
    error: null,
    success: false,
    loading: false,
} as unknown as InitialState

export const getCloudById = createAsyncThunk(
    'cloud/getById',
    async (id: number, thunkAPI) => {
        const data = await cloudService.getCloudById(id)
        return data
    },
)

export const cloudSlice = createSlice({
    name: 'cloud',
    initialState: InitialState,
    reducers: {
        resetMessage: state => {},
    },
    extraReducers: builder => {
        builder
            .addCase(getCloudById.pending, state => {
                state.loading = true
            })
            .addCase(getCloudById.fulfilled, (state, action) => {
                state.loading = false
                state.success = true

                if (action.payload !== undefined) {
                    state.cloud = action.payload
                }
            })
    },
})

export default cloudSlice.reducer
