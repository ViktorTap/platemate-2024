"use client";
// Skeleton with information

import ProfileInfoPage from "@/app/components/account/ProfileInfoPage";
import getInfoByEmail from "@/app/utils/getInfoByEmail";

// NextAuth
import { useSession } from "next-auth/react";

export default function AccountDetailsPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>You are not logged in. please log in to view your profile</div>;
  }

  if (session.user?.email) {
    const email = session.user.email;
    getInfoByEmail({ email }).then(() => {
      console.log("toimii hyvin");
    });
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Email: {session.user?.email}</p>
    </div>
  );
}
