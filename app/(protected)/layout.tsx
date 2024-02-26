import Header from '@/components/global/header'
import SidebarNavigation from '@/components/global/sidebar-nav'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <aside className='h-screen'>
            <div className='h-full sm:w-[] flex flex-row '>
                <SidebarNavigation />
                <div className='flex flex-col px-10'>
                    <Header />
                    {children}
                </div>
            </div>
        </aside>
    )
}
export default HomeLayout
