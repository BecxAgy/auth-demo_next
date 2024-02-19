import { PrismaClient } from '@prisma/client'

declare global {
    var prisma: PrismaClient | undefined
}

//the global object that not have variants in differents execution
export const db = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db

//in production
//export const db = new PrismaClient()
