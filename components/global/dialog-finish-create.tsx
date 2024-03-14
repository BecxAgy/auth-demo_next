'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '../ui/button'
import Link from 'next/link'

const DialogFinishCreate = ({
    open,
    onOpenChange,
}: {
    open: boolean
    onOpenChange: (open: boolean) => void
}) => {
    return (
        <Dialog open={open} onOpenChange={() => onOpenChange(!open)}>
            <DialogContent className='bg-dark-2 border-none p-10 flex flex-col gap-10 '>
                <DialogHeader className='text-white items-center '>
                    <DialogTitle className='text-[22px]'>
                        Cotação criada com sucesso!
                    </DialogTitle>
                    <DialogDescription className='text-center'>
                        No painel principal será possível visualizar todas as
                        cotações, incluindo a que acabou de ser criada.
                    </DialogDescription>
                </DialogHeader>

                <Link
                    onClick={() => {
                        console.log('fechando', open)
                        onOpenChange(!open)
                        console.log('fechou', open)
                    }}
                    className='text-center'
                    href={'/cotacoes/list'}
                >
                    <Button className='bg-primary-500'>Ir Para Painel</Button>
                </Link>
            </DialogContent>
        </Dialog>
    )
}

export default DialogFinishCreate
