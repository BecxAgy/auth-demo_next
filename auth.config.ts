import type { NextAuthConfig } from 'next-auth'
import azureAd from 'next-auth/providers/azure-ad'

export default {
    providers: [
        azureAd({
            clientId: process.env.AZURE_AD_CLIENT_ID,
            clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
            tenantId: process.env.AZURE_AD_TENANT_ID,
            token: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/oauth2/v2.0/token`,
            userinfo: 'https://graph.microsoft.com/oidc/userinfo',
            authorization: {
                url: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/oauth2/v2.0/authorize`,
                params: { scope: 'openid profile user.Read email' },
            },
        }),
    ],
} satisfies NextAuthConfig
