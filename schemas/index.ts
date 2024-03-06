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
    name: z
        .string()
        .min(2, { message: 'O nome deve ter pelo menos 2 caracteres' })
        .max(50, { message: 'O nome não pode ter mais de 50 caracteres' }),
    area: z.preprocess(a => parseInt(z.string().parse(a), 10), z.number()),
    description: z
        .string()
        .min(10, { message: 'A descrição deve ter pelo menos 10 caracteres' })
        .max(250, {
            message: 'A descrição não pode ter mais de 250 caracteres',
        }),
    factor: z.preprocess(a => parseInt(z.string().parse(a), 10), z.number()),
    conversionsId: z
        .array(z.number())
        .nonempty({ message: 'A lista de conversões não pode estar vazia' }),

    deliverablesId: z.array(z.number()),
})
