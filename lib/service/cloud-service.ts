const API_URL = 'http://localhost:4006/api/cloud'

export const cloudService = {
    getCloudById: async (id: number) => {
        try {
            debugger
            const response = await fetch(`${API_URL}/${id}`)
            return response.json()
        } catch (error) {
            throw new Error('Failed to get Cloud by ID')
        }
    },
    createCloud: async (cloud: any) => {
        try {
            const response = await fetch(`${API_URL}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cloud),
            })
            return response.json()
        } catch (error) {
            throw new Error('Failed to create Cloud')
        }
    },
    updateCloudById: async (id: number, cloud: any) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cloud),
            })
            return response.json()
        } catch (error) {
            throw new Error('Failed to update Cloud by ID')
        }
    },
    removeCloudById: async (id: number) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            })
            return response.json()
        } catch (error) {
            throw new Error('Failed to remove Cloud by ID')
        }
    },
}
