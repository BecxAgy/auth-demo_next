import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <main className='flex h-[100vh] flex-col items-center justify-center gradient_login'>
            <Link href={'/auth/login'}>
                <Button>Click</Button>
            </Link>
        </main>
    )
}
