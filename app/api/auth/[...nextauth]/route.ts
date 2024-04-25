import NextAuth, { type NextAuthOptions } from "next-auth"
import LinkedInProvider from "next-auth/providers/linkedin"

async function profile(profile): Promise<{firstname: string | undefined, name: any, id: any, email: any, lastname: string | undefined}> {

    console.log({ profile })

    return {
        id: profile.sub,
        name: profile.name,
        firstname: profile.given_name,
        lastname: profile.family_name,
        email: profile.email
    }
}

export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
            client: { token_endpoint_auth_method: "client_secret_post" },
            authorization: { params: { scope: 'profile email openid' } },
            issuer: 'https://www.linkedin.com',
            jwks_endpoint: "https://www.linkedin.com/oauth/openid/jwks",
            profile,
            wellKnown:
                "https://www.linkedin.com/oauth/.well-known/openid-configuration",
        }),
    ],
}

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };