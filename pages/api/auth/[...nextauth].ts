import nextAuth, { NextAuthOptions } from 'next-auth';
import emailProvider from 'next-auth/providers/email';
import { PrismaAdapter as adapter } from '@next-auth/prisma-adapter';
import prisma from 'libs/prisma/prisma';

export const nextOptions: NextAuthOptions = {
  adapter: adapter(prisma),
  providers: [
    emailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
};

export default nextAuth(nextOptions);
