// Utils
import getInfoByEmail from "@/app/utils/getInfoByEmail";

// React
import { useEffect, useState } from "react";

// Model
import { IUser } from "@/app/data/model/user.model";

interface ProfileIntoPageProps {
  email: string | null | undefined;
}

export default function ProfileInfoPage({ email }: ProfileIntoPageProps) {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (email) {
      getInfoByEmail({ email })
        .then((userData) => {
          setUser(userData);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [email]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>No user found</div>;
  }

  return (
    <main>
      <h1>This is ProfileInfoPage component</h1>
      {user && (
        <section>
          <p>Name: {user.firstName}</p>
          <p>Email: {user.email}</p>
        </section>
      )}
    </main>
  );
}
