"use client";

// Next
import Link from "next/link";

import { useSession, signOut } from "next-auth/react";

export default function NavigationBar() {
  const { data: session, status } = useSession();

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <nav className="border-solid border-b-2 border-[#2f8c43]">
      <ul className="flex flex-wrap gap-y-1 justify-around items-baseline m-5">
        <button className="basis-2/5" onClick={handleRefresh}>
          <Link href="/">Main Page</Link>
        </button>

        {status === "authenticated" ? (
          <>
            <button className="basis-1/6">
              <Link href="/account/my">{session.user?.name}</Link>
            </button>
            <button className="basis-1/6">
              <Link href="/cart">Cart</Link>
            </button>
            <button onClick={() => signOut({ callbackUrl: "/" })}>
              Sign Out
            </button>
          </>
        ) : (
          <button className="basis-2/5">
            <Link href="/account">Log In / Sign Up</Link>
          </button>
        )}
      </ul>
    </nav>
  );
}

/* 

"focus:outline-none focus:ring focus:ring-button-active-hex"

*/
