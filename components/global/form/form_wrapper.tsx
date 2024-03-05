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
import { ToggleGroupDeliverable } from './group-deliverables'

import { QuotationSchema } from '@/schemas'

const FormWrapper = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof QuotationSchema>>({
        resolver: zodResolver(QuotationSchema),
        defaultValues: {
            factor: 1,
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof QuotationSchema>) {
        console.log(values)
    }
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='max-w-lg w-full flex flex-col gap-4'
            >
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

                            <FormMessage />
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
                                    placeholder='Tell us a little bit about yourself'
                                    className=''
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
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
