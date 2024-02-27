'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '../../ui/textarea'
import GroupConversionForm from './group-conversions'
import GroupDeliverableForm from './group-deliverables'

const formSchema = z.object({
    name: z.string().min(2).max(50),
    area: z.preprocess(a => parseInt(z.string().parse(a), 10), z.number()),
    description: z
        .string()
        .min(10, {
            message: 'A descrição da cotação deve ter no mínimo 10 caracteres',
        })
        .max(250),
    factor: z.number(),
    conversionsId: z.number().array().nonempty(),
    //deliverablesId: z.number().array().nonempty(),
})

const FormWrapper = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            factor: 1,
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='max-w-md w-full flex flex-col gap-4'
            >
                {/* Name */}
                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome da Cotação</FormLabel>
                            <FormControl>
                                <Input className='lg:w-60' {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Area */}
                <FormField
                    control={form.control}
                    name='area'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Área (m²)</FormLabel>
                            <FormControl>
                                <Input
                                    type='number'
                                    className='lg:w-52'
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Description */}
                <FormField
                    control={form.control}
                    name='description'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Descrição</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder='Tell us a little bit about yourself'
                                    className=''
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Fator de Complexidade */}

                {/* ConversionList */}
                <GroupConversionForm form={form} />

                {/* DeliverableList */}
                <GroupDeliverableForm />
                <Button type='submit'>Submit</Button>
            </form>
        </Form>
    )
}

export default FormWrapper
