"use server";
// Utils
import getInfoByEmail from "@/app/utils/getInfoByEmail";

interface ProfileIntoPageProps {
  email: string | null | undefined;
}

export default async function ProfileInfoPage({ email }: ProfileIntoPageProps) {
  if (email) {
    getInfoByEmail({ email });
    //   .then((user) => {
    //     console.log("User info:", user);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching user info:", error);
    //   });
  }

  return;
}
