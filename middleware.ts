import { auth } from '@/auth'
import {
    DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    authRoutes,
    publicRoutes,
} from '@/routes'
import { url } from 'inspector'
import NextAuth from 'next-auth'
// I NEED TO UNDERSTAND WHY I'M REDIRECTING TO SETTINGS
export default auth(req => {
    const { nextUrl } = req
    const isLoggedIn = !!req.auth

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname)

    if (isApiAuthRoute) {
        return
    }
    //SE NAO ESTÁ LOGADO E NAO ESTÁ NUMA ROTA PUBLICA
    if (isLoggedIn) {
        console.log('isLoggedIn:', isLoggedIn)
    }

    if (isPublicRoute) {
        console.log('isPublicRoute:', isPublicRoute)
    }

    if (!isLoggedIn && !isPublicRoute) {
        console.log('redirecting to login')
        return Response.redirect(new URL('/auth/login', nextUrl))
    }
    if (isLoggedIn && isPublicRoute) {
        console.log('redirecting to / (the home page)')
        return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
})

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
