"use client";

import { signIn } from "next-auth/react";
import React from "react";

export default function LoginPage() {
  return (
    <div>
      <h2>Login</h2>
      <button type='button' onClick={() => signIn("google")}>
        Sign in with Google
      </button>
    </div>
  );
}
