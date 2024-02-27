import FormWrapper from '@/components/global/form_wrapper'
import { Card, CardHeader } from '@/components/ui/card'
import React from 'react'

const CreatePage = () => {
    return (
        <Card className=' md:w-1/2 p-10 border-none shadow-md  flex flex-col justify-center items-center '>
            <CardHeader className='p-0 mb-8 '>
                <h1 className='font-semibold text-2xl  '>
                    Registro de Cotação
                </h1>
            </CardHeader>
            <FormWrapper />
        </Card>
    )
}

export default CreatePage
