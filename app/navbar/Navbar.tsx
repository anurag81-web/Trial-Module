"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/login" || pathname === "/verify-otp" || pathname === "/signup") {
    return null;
  }

  return (
    <nav className="bg-navbar-bg border-b border-border-color text-muted px-6 py-4 flex items-center gap-6">
      <Link href="/home" className={`text-sm font-medium transition-colors hover:text-foreground ${pathname === "/home" ? "text-foreground font-semibold" : "text-muted"}`}>Home</Link>
      <Link href="/dashboard" className={`text-sm font-medium transition-colors hover:text-foreground ${pathname === "/dashboard" ? "text-foreground font-semibold" : "text-muted"}`}>Dashboard</Link>
      <Link href="/movies" className={`text-sm font-medium transition-colors hover:text-foreground ${pathname === "/movies" ? "text-foreground font-semibold" : "text-muted"}`}>Movies</Link>

      <div className="ml-auto flex items-center gap-3">
        <button onClick={toggleTheme}
          className="h-9 w-9 rounded-full flex items-center justify-center bg-foreground/5 border border-border-color hover:bg-foreground/10 transition-all cursor-pointer">
          {resolvedTheme === "dark" ? "☀️" : "🌙"}
        </button>
        <button onClick={() => {
          localStorage.removeItem("isLoggedIn");
          router.push("/login");
        }} className="text-xs font-semibold border border-red-500/20 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all rounded-xl px-4 py-2 cursor-pointer">
          Logout
        </button>
      </div>
    </nav>
  );
}