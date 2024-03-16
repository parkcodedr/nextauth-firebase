"use client";

import { signIn, useSession } from "next-auth/react";

export default function LoginPage() {
  const session = useSession();
  console.log({ session });
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </div>
  );
}
