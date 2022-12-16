import { loginService } from '@/services/auth';
import { ILogin } from '@/views/auth/interfaces';
import NextAuth, { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user: ILogin = {
          email: credentials!.email,
          password: credentials!.password,
        };
        const data = await loginService(user);
        if (data?.name == 'AxiosError') {
          return null;
        }
        return data;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  // Custom Pages
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/register',
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        switch (account.type) {
          case 'credentials':
            token.user = user;
            break;
        }
      }
      return token;
    },
    async session({ session, token }) {
      const {
        user: { user },
      }: any = token;
      session.accessToken = token.accessToken as any;
      session.user = user;
      return session;
    },
  },
};
export default NextAuth(authOptions);
