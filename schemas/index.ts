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

export const QuotationSchema = z.object({
    name: z.string().min(2).max(50),
    area: z.preprocess(a => parseInt(z.string().parse(a), 10), z.number()),
    description: z
        .string()
        .min(10, {
            message: 'A descrição da cotação deve ter no mínimo 10 caracteres',
        })
        .max(250),
    factor: z.preprocess(a => parseInt(z.string().parse(a), 10), z.number()),
    conversionsId: z.number().array().nonempty(),
    deliverableId: z.number(),
})
