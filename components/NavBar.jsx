import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white  flex justify-around items-center w-full  text-center px-32 py-6 text-2xl z-20 relative">
      <ul className="flex items-center gap-10">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};
