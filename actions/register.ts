'use server'

import { RegisterSchema } from '@/schemas'

import { z } from 'zod'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validateSchema = RegisterSchema.safeParse(values)

    if (!validateSchema.success) return { error: 'Campos inválidos!' }

    return { success: 'Sucesso!' }
}
