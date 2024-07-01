"use client";

// Next
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function NavigationBar() {
  const { data: session, status } = useSession();

  return (
    <nav className="border-solid border-b-2 border-[#2f8c43]">
      <ul className="flex flex-wrap gap-y-1 justify-around items-baseline m-5">
        <button className="basis-2/5">
          <Link href="/">Main Page</Link>
        </button>

        {status === "authenticated" ? (
          <div>
            Authenticated <button onClick={() => signOut()}>SIGN OUT</button>
          </div>
        ) : (
          <div>NAH</div>
        )}
        <button className="basis-2/5">
          <Link href="/account">Log In / Sign Up</Link>
        </button>
        <button className="basis-1/6">
          <Link href="/cart">Cart</Link>
        </button>
      </ul>
    </nav>
  );
}

/* 

"focus:outline-none focus:ring focus:ring-button-active-hex"

*/
