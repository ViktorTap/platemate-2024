import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="border-solid border-b-2 border-[#2f8c43]">
      <ul className="flex flex-wrap gap-y-1 justify-around items-baseline m-5">
        <button className="basis-2/5">
          <Link href="/">Main Page</Link>
        </button>

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
