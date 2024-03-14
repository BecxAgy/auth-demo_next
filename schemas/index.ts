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
        .min(2, {
            message: 'O nome da cotação deve ter pelo menos 2 caracteres',
        })
        .nonempty('O nome da cotação é obrigatório'),
    area: z.preprocess(
        a => parseInt(z.string().parse(a), 10),
        z.number().nonnegative('A área deve ser um número positivo'),
    ),
    factor: z.preprocess(
        a => parseInt(z.string().parse(a), 10),
        z
            .number()
            .nonnegative('O fator de complexidade deve ser um número positivo'),
    ),
    description: z
        .string({ required_error: 'A descrição é obrigatória' })
        .min(10, { message: 'A descrição deve ter pelo menos 10 caracteres' })
        .max(250, {
            message: 'A descrição não pode ter mais de 250 caracteres',
        }),

    conversionId: z
        .array(
            z.number({ required_error: 'A lista de conversões é obrigatória' }),
        )
        .nonempty({ message: 'A lista de conversões não pode estar vazia' }),

    deliverableId: z
        .array(z.number({ required_error: 'A forma de entrega é obrigatória' }))
        .nonempty({ message: 'A forma de entrega não pode estar vazia' }),
})
