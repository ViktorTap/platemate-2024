"use client";
// Skeleton with information

// NextAuth
import { useSession } from "next-auth/react";

// React
import { useEffect } from "react";

// Utils
import getInfoByEmail from "../../utils/getInfoByEmail";

export default function AccountDetailsPage() {
  const { data: session, status } = useSession();

  const user = getInfoByEmail(session?.user?.email);
  console.log(user);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>You are not logged in. please log in to view your profile</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Email: {session.user?.email}</p>
    </div>
  );
}
