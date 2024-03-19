const API_URL = 'http://localhost:4006/api'

export const quotationService = {
    getQuotationById: async (id: number) => {
        try {
            const response = await fetch(`${API_URL}/${id}`)
            return response.json()
        } catch (error) {
            throw new Error('Failed to get quotation by ID')
        }
    },

    getAllQuotations: async () => {
        try {
            debugger
            const response = await fetch(`${API_URL}/resume/`)
            return response.json()
        } catch (error) {
            throw new Error('Failed to get all quotations')
        }
    },
}
