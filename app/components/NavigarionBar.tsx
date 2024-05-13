import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="border-solid border-b-2 border-black">
      <ul className="flex flex-wrap gap-y-1 justify-around items-baseline m-5">
        <button>
          <Link href="/">Main Page</Link>
        </button>

        <button>Categories</button>
        <button>Restaurants</button>

        <button>
          <Link href="/account">Log In</Link>
        </button>
      </ul>
    </nav>
  );
}

/* 

"focus:outline-none focus:ring focus:ring-button-active-hex"

*/
