import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="border-solid border-b-2 border-black">
      <ul className="flex flex-wrap gap-x-1 justify-around items-baseline m-5">
        <Link href="/">
          <button>Main Page</button>
        </Link>
        <button>Categories</button>
        <button>Restaurants</button>
        <Link href="/registration">
          <button>Registration</button>
        </Link>
      </ul>
    </nav>
  );
}

/* 

"focus:outline-none focus:ring focus:ring-button-active-hex"

*/
