import React from 'react'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../../ui/form'
import { Checkbox } from '../../ui/checkbox'

const GroupConversionForm = ({ form }: any) => {
    const conversionsFormat = [
        {
            id: 1,
            label: '.lgs',
        },
        {
            id: 2,
            label: '.rcp',
        },
        {
            id: 3,
            label: '.ptx',
        },
        {
            id: 4,
            label: '.e57',
        },
        {
            id: 5,
            label: '.lfd',
        },
        {
            id: 6,
            label: '.nwd',
        },
    ]
    return (
        <FormField
            control={form.control}
            name='conversionsId'
            render={() => (
                <FormItem>
                    <div className='mb-4'>
                        <FormLabel className='text-base'>Conversões</FormLabel>
                        <FormDescription>
                            Selecione as conversões de formato que deseja
                        </FormDescription>
                    </div>
                    {conversionsFormat.map(item => (
                        <FormField
                            key={item.id}
                            control={form.control}
                            name='conversionsId'
                            render={({ field }) => {
                                return (
                                    <FormItem
                                        key={item.id}
                                        className='flex flex-row items-start space-x-3 space-y-0'
                                    >
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value?.includes(
                                                    item.id,
                                                )}
                                                onCheckedChange={(
                                                    checked: any,
                                                ) => {
                                                    const newValues =
                                                        field.value
                                                            ? [...field.value]
                                                            : [] // Clonando os valores existentes ou inicializando um array vazio
                                                    if (checked) {
                                                        newValues.push(item.id) // Adicionando o ID ao array de valores
                                                    } else {
                                                        const index =
                                                            newValues.indexOf(
                                                                item.id,
                                                            ) // Encontrando o índice do ID no array de valores
                                                        if (index !== -1) {
                                                            newValues.splice(
                                                                index,
                                                                1,
                                                            ) // Removendo o ID do array de valores
                                                        }
                                                    }
                                                    field.onChange(newValues) // Atualizando os valores do campo
                                                }}
                                            />
                                        </FormControl>
                                        <FormLabel className='text-sm font-normal'>
                                            {item.label}
                                        </FormLabel>
                                    </FormItem>
                                )
                            }}
                        />
                    ))}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default GroupConversionForm
