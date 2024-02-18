import * as z from 'zod'

export const LoginSchema = z.object({
    email: z.string().email({
        message: 'Email é obrigatório',
    }),
    password: z.string().min(1, {
        message: 'Senha é obrigatória',
    }),
    code: z.optional(z.string()),
})

export const RegisterSchema = z.object({
    email: z.string().email({
        message: 'Email é obrigatório',
    }),
    password: z.string().min(6, {
        message: 'A senha deve ter mais que 6 caracteres',
    }),
    name: z.string().min(1, {
        message: 'Nome é necessário',
    }),
})
;('   ')
