// NextAuth
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// BCRYPT
import bcrypt from "bcrypt";

// DB
import { connectDB } from "../../../data/dbConnector";

// Model
import User from "../../../data/model/user.model";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials): Promise<any> {
        if (credentials === null) return null;

        // connect to the database
        await connectDB();

        // find user by email
        const userEmail = credentials?.email.toLocaleLowerCase();

        try {
          const user = await User.findOne({ email: userEmail });

          if (!user) {
            console.log({
              id: "Nan",
              email: credentials?.email as string,
              message: "Email not found",
              success: false,
            });

            throw new Error("Email not found");
          }

          // check if the password is correct
          const isMatch = await bcrypt.compare(
            credentials?.password!,
            user.password
          );

          if (!isMatch) {
            console.log({
              id: user._id.toString(),
              email: credentials?.email as string,
              message: "Incorrect password",
              success: false,
            });
            throw new Error("Incorrect password");
          }
          console.log("Successfull login");

          return {
            id: user._id.toString(),
            name: user.firstName,
            email: credentials?.email as string,
            message: "Successfull login",
            success: true,
          };
        } catch (error) {
          if (error instanceof Error) {
            if (
              error.message === "Email not found" ||
              error.message === "Incorrect password"
            ) {
              throw error;
            }
          }
          // For any other errors, log the error and throw a generic message
          console.error(
            {
              id: "NaN",
              email: credentials?.email as string,
              message: "An error occurred during login",
              success: false,
            },
            error
          );
          throw new Error("An error occurred during login");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          email: token.email,
          name: token.name,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/account",
  },
};
