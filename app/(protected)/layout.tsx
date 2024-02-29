import LeftSidebar from '@/components/global/left_sidebar'
import Topbar from '@/components/global/topbar'
import { SessionProvider } from 'next-auth/react'
import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SessionProvider>
            <html lang='pt-br'>
                <body className={inter.className}>
                    <Topbar />
                    <main className='flex flex-row'>
                        <LeftSidebar />
                        <section className='main-container'>
                            <div className='w-full max-w-4xl'>{children}</div>
                        </section>
                    </main>
                </body>
            </html>
        </SessionProvider>
    )
}
export default HomeLayout
