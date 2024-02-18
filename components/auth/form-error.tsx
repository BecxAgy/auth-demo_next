interface FormErrorProps {
    message?: string
}

import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import React from 'react'

const FormError = ({ message }: FormErrorProps) => {
    if (!message) return null

    return (
        <div className='bg-destructive/15 p-3 rounded-md flex items-center text-destructive gap-x-2 text-sm'>
            <ExclamationTriangleIcon />
            <p>{message}</p>
        </div>
    )
}

export default FormError
