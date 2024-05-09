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
import { CloudSchema } from '@/schemas'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/lib/store'
import { createCloud } from '@/lib/features/cloud-slice'
import DialogFinishCreate from '../dialog-finish-create'
import { useEffect, useState } from 'react'

const FormTeste = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { success, message } = useSelector((state: RootState) => state.cloud)
    const [openDialog, setOpenDialog] = useState(false)
    const form = useForm<z.infer<typeof CloudSchema>>({
        resolver: zodResolver(CloudSchema),
        defaultValues: {},
    })

    const onSubmit = async (values: any) => {
        debugger
        dispatch(createCloud(values))
    }
    useEffect(() => {
        if (success && message) {
            setOpenDialog(true)
        }
    }, [success])

    return (
        <div>
            <Form {...form}>
                <form
                    className='flex  flex-col gap-[7px]'
                    onSubmit={form.handleSubmit(onSubmit)}
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
                                    <FormLabel>Complexidade</FormLabel>
                                    <FormControl>
                                        <Input
                                            type='number'
                                            {...field}
                                            onChange={e => {
                                                const value =
                                                    e.target.value.replace(
                                                        ',',
                                                        '.',
                                                    )
                                                field.onChange(value)
                                            }}
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
            <DialogFinishCreate
                open={openDialog}
                onOpenChange={setOpenDialog}
            />
        </div>
    )
}

export default FormTeste
