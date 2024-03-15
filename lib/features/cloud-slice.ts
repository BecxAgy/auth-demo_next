import { cloudService } from '@/lib/service/cloud-service'
import { quotationService } from '@/lib/service/quotationService'
import { CloudState, QuotationView } from '@/utils/types'
import { Reducer, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type InitialState = {
    cloud: CloudState
    quotations: QuotationView[]
    error: any
    success: boolean
    loading: boolean
    message: string
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
    } as unknown as CloudState,
    quotations: [],
    error: null,
    success: false,
    loading: false,
    message: '',
} as unknown as InitialState

export const getCloudById = createAsyncThunk(
    'cloud/getById',
    async (id: number, thunkAPI) => {
        debugger
        const data = await cloudService.getCloudById(id)
        return data
    },
)
export const getAllQuotations = createAsyncThunk(
    'project/getall',
    async (_, thunkAPI) => {
        const data = await quotationService.getAllQuotations()
        return data
    },
)
export const createCloud = createAsyncThunk(
    'cloud/create',
    async (cloud: any, thunkAPI) => {
        const data = await cloudService.createCloud(cloud)

        if (data.error) {
            return thunkAPI.rejectWithValue(data.error)
        }

        return data
    },
)

export const editCloud = createAsyncThunk(
    'cloud/edit',
    async (cloud: any, thunkAPI) => {
        console.log('bateu no slice edit')
        const data = await cloudService.updateCloudById(cloud.id, cloud)

        if (data.error) {
            return thunkAPI.rejectWithValue(data.error)
        }
        return data
    },
)

export const removeCloud = createAsyncThunk(
    'cloud/remove',
    async (id: number, thunkAPI) => {
        debugger
        const data = await cloudService.removeCloudById(id)

        if (data.error) {
            return thunkAPI.rejectWithValue(data.error)
        }
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
            .addCase(getAllQuotations.pending, state => {
                state.loading = true
            })
            .addCase(getAllQuotations.fulfilled, (state, action) => {
                state.loading = false
                state.success = false

                if (action.payload !== undefined) {
                    state.quotations = action.payload
                }
            })
            .addCase(getCloudById.pending, state => {
                state.loading = true
            })
            .addCase(getCloudById.fulfilled, (state, action) => {
                state.loading = false
                state.success = true

                if (action.payload !== undefined) {
                    debugger
                    state.cloud = action.payload
                }
            })
            .addCase(createCloud.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(createCloud.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.cloud = action.payload
                //adicionando no primeiro lugar do array

                state.message = 'Solicitação criada com sucesso!'
            })
            .addCase(createCloud.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.success = false
            })
            .addCase(editCloud.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(editCloud.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.message = 'Cotação editada com sucesso'
                state.quotations = state.quotations.map(cloud => {
                    //tem que testar

                    if (cloud.id === action.payload.id) {
                        return (cloud = action.payload)
                    }
                    return cloud
                })
            })
            .addCase(editCloud.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.message = 'Erro ao editar cotação'
            })
            .addCase(removeCloud.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(removeCloud.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.quotations = state.quotations.filter(cloud => {
                    //console.log(action.payload);
                    return cloud.id !== action.payload.id
                })
                state.message = 'Cotação deletada com sucesso!'
            })
            .addCase(removeCloud.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.message = 'Erro ao deletar cotação'
            })
    },
})

export default cloudSlice.reducer
