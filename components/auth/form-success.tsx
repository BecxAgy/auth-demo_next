interface FormSuccessProps {
    message?: string
}

import {
    CheckCircledIcon,
    ExclamationTriangleIcon,
} from '@radix-ui/react-icons'
import React from 'react'

const FormSuccess = ({ message }: FormSuccessProps) => {
    if (!message) return null

    return (
        <div className='bg-emerald-500/15 p-3 rounded-md flex items-center text-emerald-500 gap-x-2 text-sm'>
            <CheckCircledIcon />
            <p>{message}</p>
        </div>
    )
}

export default FormSuccess
