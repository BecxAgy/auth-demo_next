'use client'
import { GoProjectSymlink } from 'react-icons/go'
import { BiSolidMemoryCard } from 'react-icons/bi'
import { Card } from '@/components/ui/card'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'

import { useContext, useEffect, useState } from 'react'
import { SheetContext } from '@/lib/contexts/sheet'
import { RootState } from '@/lib/store'
import { useSelector } from 'react-redux'

export function ToggleGroupDeliverable({ form }: any) {
    const { cloud } = useSelector((state: RootState) => state.cloud)
    const [selectedDeliverables, setSelectedDeliverables] = useState<number[]>(
        [],
    )

    const handleDeliverableSelection = (id: number) => {
        //se a lista nao estiver cheia
        if (selectedDeliverables.length < 2) {
            //se a lista tiver o id é porque estou desmarcando
            if (selectedDeliverables.includes(id)) {
                setSelectedDeliverables(
                    selectedDeliverables.filter(item => item !== id),
                )
            } else {
                //se não tiver o id é porque estou marcando
                setSelectedDeliverables([...selectedDeliverables, id])
            }
        } else {
            if (selectedDeliverables.includes(id)) {
                setSelectedDeliverables(
                    selectedDeliverables.filter(item => item !== id),
                )
            }
        }
    }

    useEffect(() => {
        form.setValue('deliverableId', selectedDeliverables)
    }, [selectedDeliverables])

    useEffect(() => {
        if (cloud?.Deliverables) {
            //this line below is a test, after backend is done, this will be removed
            //cloud.Deliverables = [1]
            setSelectedDeliverables(
                cloud.Deliverables.map(deliverable => deliverable.id),
            )
        }
    }, [cloud])

    return (
        <FormField
            control={form.control}
            name='deliverableId'
            render={() => (
                <FormItem>
                    <FormLabel className='text-base'>Entregáveis</FormLabel>
                    <FormDescription>
                        Selecione os entregáveis que deseja
                    </FormDescription>
                    <FormControl>
                        <div className='flex gap-10 py-[10px]'>
                            <Card
                                onClick={() => handleDeliverableSelection(1)}
                                className={`hover:border-primary-500 hover:text-primary-500 px-10 py-5 ${
                                    selectedDeliverables?.includes(1)
                                        ? 'bg-primary-500 border-none hover:text-white text-white'
                                        : ''
                                }`}
                            >
                                <div className='flex flex-col justify-center items-center gap-1'>
                                    <GoProjectSymlink className='w-8 h-8' />
                                    <p className='text-[13px]'>Online</p>
                                </div>
                            </Card>

                            <Card
                                onClick={() => handleDeliverableSelection(2)}
                                className={`px-10 py-5 hover:border-primary-500 hover:text-primary-500 ${
                                    selectedDeliverables?.includes(2)
                                        ? 'bg-primary-500 border-none hover:text-white text-white'
                                        : ''
                                }`}
                            >
                                <div className='flex flex-col justify-center items-center gap-1'>
                                    <BiSolidMemoryCard className='w-8 h-8' />
                                    <p className='text-[13px]'>Físico</p>
                                </div>
                            </Card>
                        </div>
                    </FormControl>
                    <FormMessage className='text-red-600' />
                </FormItem>
            )}
        />
    )
}
