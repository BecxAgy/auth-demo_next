'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { ToggleGroupDeliverable } from './group-deliverables'
import GroupConversionForm from './group-conversions'
import { CloudState } from '@/utils/types'

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

const FormEdit = ({ cloud }: { cloud: CloudState }) => {
    const form = useForm<z.infer<typeof QuotationSchema>>({
        resolver: zodResolver(QuotationSchema),
        defaultValues: {},
    })

    const onSubmit = async (values: any) => {
        debugger
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                {/* Name */}
                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome da Cotação</FormLabel>
                            <FormControl>
                                <Input
                                    className=''
                                    defaultValue={cloud.name}
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage className='text-red-600' />
                        </FormItem>
                    )}
                />
                <div className='flex flex-row gap-5'>
                    <FormField
                        control={form.control}
                        name='area'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Área (m²)</FormLabel>
                                <FormControl>
                                    <Input
                                        defaultValue={cloud.area}
                                        type='number'
                                        className=''
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage className='text-red-600' />
                            </FormItem>
                        )}
                    />
                    {/* Fator de Complexidade */}
                    <FormField
                        control={form.control}
                        name='factor'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Fator</FormLabel>
                                <FormControl>
                                    <Input
                                        defaultValue={cloud.area}
                                        type='number'
                                        className=''
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage className='text-red-600' />
                            </FormItem>
                        )}
                    />
                </div>
                {/* Area */}

                {/* Description */}
                <FormField
                    control={form.control}
                    name='description'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Descrição</FormLabel>
                            <FormControl>
                                <Textarea
                                    defaultValue={cloud.area}
                                    placeholder='Tell us a little bit about yourself'
                                    className=''
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage className='text-red-600' />
                        </FormItem>
                    )}
                />

                {/* DeliverableList */}
                <ToggleGroupDeliverable form={form}  />
                {/* ConversionList */}
                <GroupConversionForm form={form} />
                <Button className='bg-primary-500 mt-3' type='submit'>
                    Enviar
                </Button>
            </form>
        </Form>
    )
}

export default FormEdit
