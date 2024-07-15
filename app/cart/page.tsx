"use client";
// Skeleton with information

// NextAuth
import { useSession } from "next-auth/react";

export default function CartPage() {
  const { data: session, status } = useSession();

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
      <p>session name: {session.user?.name}</p>
    </div>
  );
}
