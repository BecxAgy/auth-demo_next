'use server'

import { LoginSchema } from '@/schemas'
import { revalidatePath, revalidateTag } from 'next/cache'
import { z } from 'zod'

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validateSchema = LoginSchema.safeParse(values)

    if (!validateSchema.success) return { error: 'Campos inválidos!' }

    return { success: 'Sucesso!' }
}
