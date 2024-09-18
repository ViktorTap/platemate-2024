"use client";

// Next
import Link from "next/link";

// Next-Auth
import { useSession, signOut } from "next-auth/react";

export default function NavigationBar() {
  const { data: session, status } = useSession();

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <nav className="border-solid border-b-2 border-[#2f8c43]">
      <ul className="flex flex-wrap gap-y-1 justify-around items-baseline m-5">
        <Link href="/">
          <button onClick={handleRefresh} className="w-full">
            Main Page
          </button>
        </Link>

        {status === "authenticated" ? (
          <>
            <Link href="/account/my">
              <button className="w-full">{session.user?.name}</button>
            </Link>

            <Link href="/cart">
              <button className="w-full">Cart</button>
            </Link>

            <button onClick={() => signOut({ callbackUrl: "/" })}>
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link href="/account">
              <button className="w-full">Log In / Sign Up</button>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}

/* 

"focus:outline-none focus:ring focus:ring-button-active-hex"

*/
