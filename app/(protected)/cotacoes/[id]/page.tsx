'use client'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { getCloudById } from '@/lib/features/cloud-slice'
import { AppDispatch, RootState } from '@/lib/store'

import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {
    const params = useParams<{ id: string }>()
    const dispatch = useDispatch<AppDispatch>()
    const { cloud } = useSelector((state: RootState) => state.cloud)

    const getCloudbyId = async (id: string) => {
        const idParse = parseInt(id)
        const cloud = dispatch(getCloudById(idParse))
    }

    useEffect(() => {
        getCloudbyId(params.id)
    }, [])
    return (
        cloud && (
            <div className='space-y-6 max-w-[784px] mx-auto'>
                <div>
                    <h3 className='text-[18px] font-medium'>
                        Informações da Cotação
                    </h3>
                    <p className='text-[14px] text-slate-400/60 '>
                        As Informações relativas à cotação clicada está aqui. Na
                        tabela principal é possível ver as estimativas
                        associadas.
                    </p>
                </div>

                <Separator className='bg-primary-500  ' />
                <Card className='p-5 py-10  border-none bg-dark-2 '>
                    <div className=' flex flex-col gap-5'>
                        <div>
                            <h3 className='text-[16px] font-medium'>
                                Nome da Cotação
                            </h3>
                            <p className='text-[14px] text-slate-400/60 '>
                                {cloud.name}
                            </p>
                        </div>
                        <div>
                            <h3 className='text-[16px] font-medium'>Área</h3>
                            <p className='text-[14px] text-slate-400/60 '>
                                {cloud.area}
                            </p>
                        </div>
                        <div>
                            <h3 className='text-[16px] font-medium'>Fator</h3>
                            <p className='text-[14px] text-slate-400/60 '>
                                {cloud.factor}
                            </p>
                        </div>
                        <div>
                            <h3 className='text-[16px] font-medium'>
                                Descrição
                            </h3>
                            <p className='text-[14px] text-slate-400/60 '>
                                {cloud.description}
                            </p>
                        </div>
                        <div>
                            <h3 className='text-[16px] font-medium'>
                                Entregáveis
                            </h3>
                            <p className='text-[14px] text-slate-400/60 '>
                                {cloud.Deliverables?.map(d => d.type).join(
                                    ', ',
                                )}
                            </p>
                        </div>
                        <div>
                            <h3 className='text-[16px] font-medium'>
                                Conversões
                            </h3>
                            <p className='text-[14px] text-slate-400/60 '>
                                {cloud.Conversions?.map(c => c.type).join(', ')}
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        )
    )
}

export default page
