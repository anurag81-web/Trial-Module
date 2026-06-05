"use client";

import Link from "next/link";
import { usePathname, useRouter} from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/login" || pathname === "/verify-otp" || pathname === "/signup") {
    return null;
  }

  return (
    <nav className="bg-[#2a2a2b] border-b border-gray-600 text-white p-4 flex gap-6">
      <Link href="/home" className="hover:text-blue-400">Home</Link>
      <Link href="/movies" className="hover:text-blue-400">Movies</Link>
      <button onClick={() => {
        localStorage.removeItem("isLoggedIn");
        router.push("/login");
      }} className="bg-red-500 hover:cursor-pointer text-white ml-auto rounded-xl border border-red-700 px-3 py-1  hover:bg-red-800">
        Logout
      </button>
    </nav> 


  );
}