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

export const QuotationSchema = z.object({
    name: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
    area: z.preprocess(
        a => parseInt(z.string().parse(a), 10),
        z.number().nonnegative({ message: 'Area must be a positive number' }),
    ),
    factor: z.preprocess(a => parseInt(z.string().parse(a), 10), z.number()),
    description: z
        .string()
        .min(10, { message: 'A descrição deve ter pelo menos 10 caracteres' })
        .max(250, {
            message: 'A descrição não pode ter mais de 250 caracteres',
        }),
    conversionsId: z
        .array(z.number())
        .nonempty({ message: 'A lista de conversões não pode estar vazia' }),

    deliverablesId: z
        .array(z.number())
        .nonempty({ message: 'A forma de entrega não pode estar vazia' }),
})

const FormWrapper = () => {
    const form = useForm<z.infer<typeof QuotationSchema>>({
        resolver: zodResolver(QuotationSchema),
        defaultValues: {
            factor: 1,
        },
    })

    function onSubmit(values: any) {
        console.log(values)
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
                                <Input className='' {...field} />
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
                                        type='number'
                                        className=''
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
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
                                        type='number'
                                        className=''
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
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
                                    placeholder='Insira a descrição da nuvem a ser cotada'
                                    className=''
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage className='text-red-600' />
                        </FormItem>
                    )}
                />

                {/* DeliverableList */}
                <ToggleGroupDeliverable form={form} />
                {/* ConversionList */}
                <GroupConversionForm form={form} />
                <Button className='bg-primary-500 mt-3' type='submit'>
                    Enviar
                </Button>
            </form>
        </Form>
    )
}

export default FormWrapper
