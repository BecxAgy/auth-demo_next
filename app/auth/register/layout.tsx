const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='h-[100vh] flex items-center justify-center gradient_login'>
            {children}
        </div>
    )
}
export default AuthLayout
