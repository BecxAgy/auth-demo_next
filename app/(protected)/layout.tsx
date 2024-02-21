import SidebarNavigation from '@/components/global/sidebar-nav'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <aside className='h-screen'>
            <div className='h-full sm:w-[] flex flex-row '>
                <SidebarNavigation />
                {children}
            </div>
        </aside>
    )
}
export default HomeLayout
