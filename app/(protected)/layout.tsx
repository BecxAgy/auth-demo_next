import Header from '@/components/global/header'
import Navbar from '@/components/global/navbar'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <aside className='h-screen'>
            <div className='h-full  flex flex-col '>
                {/* <SidebarNavigation /> */}
                <Navbar />
                <div className='flex flex-col justify-center items-center px-15 py-10'>
                    {children}
                </div>
            </div>
        </aside>
    )
}
export default HomeLayout
