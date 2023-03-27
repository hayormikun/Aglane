import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "username",
          type: "text",
          placeholder: "Enter your username",
        },
        password: { label: "password", type: "password" },
      },
      authorize: (credentials) => {
        if (
          credentials?.username === process.env.ADMIN_USERNAME &&
          credentials?.password === process.env.ADMIN_PASSWORD
        ) {
          return {
            id: "1",
            role: "super administrator",
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return token;
    },
    async session({ session, token, user }) {
      return session;
    },

    redirect: ({ url, baseUrl }) => {
      baseUrl = "/";
      url = "/admin";
      return url;
    },
  },

  secret: process.env.SECRET_KEY,
  jwt: {
    secret: process.env.SECRET_KEY,
    maxAge: 10 * 60,
  },
  theme: {
    colorScheme: "light", // "auto" | "dark" | "light"
    brandColor: "#428821", // Hex color value
    logo: "/assests/AgLane_Logo.png", // Absolute URL to logo image
    buttonText: "#428821" // Hex color code
  },
});
