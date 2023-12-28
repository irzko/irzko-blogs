import { compare } from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import type { NextAuthConfig, User } from "next-auth";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
    } & Omit<User, "id">;
  }
}

export const authConfig = {
  // adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // if (process.env.NODE_ENV === "development") {
        //   return {
        //     id: "1",
        //     name: "Test User",
        //     email: "tranminhkha.1003@gmail.com",
        //     image: "https://avatars.githubusercontent.com/u/44241376?v=4",
        //   };
        // }

        if (!credentials?.username || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username as string,
          },
        });

        if (!user || !user?.password) {
          throw new Error("Invalid credentials");
        }

        const isCorrectPassword = await compare(
          credentials.password as string,
          user.password
        );

        if (!isCorrectPassword) {
          throw new Error("Invalid credentials");
        } else {
          return user;
        }
      },
    }),
  ],
  pages: {
    signIn: "/accounts/login",
  },
  callbacks: {
    authorized(params) {
      return !!params.auth?.user;
    },
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile }) {
      return token;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
