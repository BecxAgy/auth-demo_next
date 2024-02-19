import type { NextAuthConfig } from 'next-auth'
import azureAd from 'next-auth/providers/azure-ad'

export default {
    providers: [
        azureAd({
            clientId: process.env.AZURE_AD_CLIENT_ID,
            clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
            tenantId: process.env.AZURE_AD_TENANT_ID,
        }),
    ],
} satisfies NextAuthConfig
