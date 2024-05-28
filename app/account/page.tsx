import { signIn, signOut, useSession } from "next-auth/react";

import LogInForm from "../components/LogInForm";

export default function LogIn() {
  return (
    <main className="m-5">
      <LogInForm />
    </main>
  );
}
