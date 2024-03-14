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

import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/lib/store'
import { editCloud } from '@/lib/features/cloud-slice'
import { use, useContext, useEffect } from 'react'
import { SheetContext } from '@/lib/contexts/sheet'
import { CloudEditSchema } from '@/schemas'

const FormEdit = ({ cloud }: { cloud: CloudState }) => {
    const dispatch = useDispatch<AppDispatch>()
    const { toogleSheet, setCloud } = useContext(SheetContext)

    const form = useForm<z.infer<typeof CloudEditSchema>>({
        resolver: zodResolver(CloudEditSchema),
        defaultValues: {
            name: cloud?.name,
            area: parseFloat(cloud?.area.toString()),
            factor: parseFloat(cloud?.factor.toString()),
            description: cloud?.description,
            deliverableId: cloud?.Deliverables.map(d => d.id),
            conversionId: cloud?.Conversions.map(c => c.id),
        },
    })

    const onSubmit = async (values: any) => {
        debugger
        console.log(cloud)
        dispatch(editCloud({ id: cloud.id, ...values }))
        toogleSheet()
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

export default FormEdit
