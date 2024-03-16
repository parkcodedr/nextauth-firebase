import CredentialsProvider from "next-auth/providers/credentials";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import GoogleProvider from "next-auth/providers/google";
import { cert } from "firebase-admin/app";
import { firestore } from "@/lib/firestore";

export const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // profile(profile) {
      //   console.log({ profile });
      //   return {
      //     ...profile,
      //     role: profile?.role ?? "user",
      //     id: profile?.sub,
      //     image: profile?.picture,
      //   };
      // },
    }),
  ],
  adapter: FirestoreAdapter(firestore),

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
  // session: {
  //   jwt: true,
  // },
};
