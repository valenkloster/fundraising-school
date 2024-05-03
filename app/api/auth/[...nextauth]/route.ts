import NextAuth, { type NextAuthOptions } from 'next-auth';
import LinkedInProvider from 'next-auth/providers/linkedin';

type Profile = {
  firstname: string | undefined;
  name: string;
  id: string;
  email: string;
  lastname: string | undefined;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function profile(profile: any): Promise<Profile> {
  return {
    id: profile.sub,
    name: profile.name,
    firstname: profile.given_name,
    lastname: profile.family_name,
    email: profile.email,
  };
}

const authOptions: NextAuthOptions = {
  providers: [
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID ?? '',
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET ?? '',
      client: { token_endpoint_auth_method: 'client_secret_post' },
      authorization: { params: { scope: 'profile email openid' } },
      issuer: 'https://www.linkedin.com',
      jwks_endpoint: 'https://www.linkedin.com/oauth/openid/jwks',
      profile,
      wellKnown: 'https://www.linkedin.com/oauth/.well-known/openid-configuration',
    }),
  ],
  pages: {
    signIn: '/signin',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
