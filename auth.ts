import NextAuth from 'next-auth'
import AzureAD from 'next-auth/providers/azure-ad'
import authConfig from '@/auth.config'

export const {
    handlers: { GET, POST },
    auth,
    signOut,
} = NextAuth({
    callbacks: {
        async session({ token, session }) {
            if (token.email === 'rebeca.coutinho@kempetro.com.br') {
                token.role = 'admin'
            } else {
                token.role = 'user'
            }
            return session
        },
        async jwt({ token, user, profile }) {
            console.log(token.accessToken)
            return token
        },
    },
    session: { strategy: 'jwt' },
    ...authConfig,
})
