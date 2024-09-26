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

  console.log(user.orderHistory.length);

  return (
    <main>
      <h1>This is ProfileInfoPage component</h1>
      {user && (
        <div>
          <section>
            <p>Name: {user.firstName}</p>
            <p>Email: {user.email}</p>
          </section>
          <section>
            <p>{user.address?.city}</p>
            <p>{user.address?.postalCode}</p>
            <p>{user.address?.street}</p>
          </section>
          <section>
            <h3>CART</h3>
            {user.orderHistory.length === 1
              ? "There is no items in the cart"
              : user.cart.map((item, index) => {
                  return (
                    <div key={index}>
                      <p>{item?.dishName}</p>
                    </div>
                  );
                })}
          </section>
          <section>
            <h3>ORDER HISTORY</h3>
            {user.orderHistory.length === 1
              ? "There is no orders made yet"
              : user.orderHistory.map((item, index) => {
                  return (
                    <div key={index}>
                      <p>{item?.totalPrice}</p>
                    </div>
                  );
                })}
          </section>
        </div>
      )}
    </main>
  );
}
