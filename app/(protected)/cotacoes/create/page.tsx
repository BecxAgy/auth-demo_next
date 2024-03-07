import FormTeste from '@/components/global/form/form_teste'
import FormWrapper from '@/components/global/form/form_wrapper'
import { Card, CardHeader } from '@/components/ui/card'
import React from 'react'

const CreatePage = () => {
    return (
        <Card className=' flex justify-center flex-col items-center border-none py-5'>
            <FormTeste />
        </Card>
    )
}

export default CreatePage
