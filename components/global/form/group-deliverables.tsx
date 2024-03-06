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
} from '@/components/ui/form'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { number } from 'zod'

export function ToggleGroupDeliverable({ form }: any) {
    const [selectedDeliverables, setSelectedDeliverables] = useState<number[]>(
        [],
    )

    const handleDeliverableSelection = (id: number) => {
        if (selectedDeliverables.includes(id)) {
            setSelectedDeliverables(selectedDeliverables.splice(id, 1))
        } else {
            setSelectedDeliverables([...selectedDeliverables, id])
        }
    }

    return (
        <FormField
            control={form.control}
            name='deliverablesId'
            render={() => (
                <FormItem>
                    <FormLabel className='text-base'>Entregáveis</FormLabel>
                    <FormDescription>
                        Selecione os entregáveis que deseja
                    </FormDescription>
                    <FormControl>
                        <div className='flex gap-10'>
                            <Card
                                onClick={() => handleDeliverableSelection(1)}
                                className={`hover:border-primary-500 hover:text-primary-500 px-10 py-5 ${
                                    selectedDeliverables.includes(1)
                                        ? 'bg-primary-500 border-none hover:text-white text-white'
                                        : ''
                                }`}
                            >
                                <GoProjectSymlink className='w-8 h-8' />
                            </Card>

                            <Card
                                onClick={() => handleDeliverableSelection(2)}
                                className={`px-10 py-5 hover:border-primary-500 hover:text-primary-500 ${
                                    selectedDeliverables.includes(2)
                                        ? 'bg-primary-500 border-none hover:text-white text-white'
                                        : ''
                                }`}
                            >
                                <BiSolidMemoryCard className='w-8 h-8' />
                            </Card>
                        </div>
                    </FormControl>
                </FormItem>
            )}
        />
    )
}
