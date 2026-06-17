"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/login" || pathname === "/verify-otp" || pathname === "/signup") {
    return null;
  }

  return (
    <nav className="bg-[#0808088b] border-b border-gray-600 text-white/60 p-4 flex gap-6">
      <Link href="/home" className="hover:text-white">Home</Link>
      <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
      <Link href="/movies" className="hover:text-white">Movies</Link>

      <button onClick={() => {
        localStorage.removeItem("isLoggedIn");
        router.push("/login");
      }} className="bg-red-500 hover:cursor-pointer text-white ml-auto rounded-xl border border-red-700 px-3 py-1  hover:bg-red-800">
        Logout
      </button>
    </nav>


  );
}