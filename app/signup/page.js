'use client';

import Link from "next/link";
import { useTheme } from "next-themes";

const inputClass = "w-full bg-background border border-border-color rounded-2xl px-4 py-3.5 text-foreground text-sm outline-none placeholder:text-muted/50 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 transition-all caret-blue-500";

export default function SignupPage() {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <div className="auth-glow relative min-h-screen bg-background flex items-center justify-center px-4 overflow-hidden">
            <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="absolute top-5 right-5 h-9 w-9 rounded-full flex items-center justify-center bg-foreground/5 border border-border-color hover:bg-foreground/10 transition-all cursor-pointer text-base"
                aria-label="Toggle theme"
            >
                {resolvedTheme === "dark" ? "☀️" : "🌙"}
            </button>

            <div className="relative w-full max-w-[420px] bg-card border border-border-color rounded-[2rem] p-8 shadow-xl">
                <div className="text-center mb-7">
                    <h1 className="text-2xl font-bold text-foreground tracking-tight">Create Account</h1>
                    <p className="text-muted text-sm mt-1">Sign up to get started</p>
                </div>

                <form className="space-y-3.5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-3">
                        <input type="text" placeholder="First Name" className={inputClass} />
                        <input type="text" placeholder="Last Name" className={inputClass} />
                    </div>

                    <input type="email" placeholder="Email address" className={inputClass} />
                    <input type="text" placeholder="Username" className={inputClass} />
                    <input type="password" placeholder="Password" className={inputClass} />

                    <button
                        type="submit"
                        className="w-full bg-[#C61515] hover:bg-[#e01010] text-white font-semibold py-3.5 rounded-2xl active:scale-[0.98] transition-all cursor-pointer shadow-sm shadow-red-900/20 mt-1"
                    >
                        Create My Account
                    </button>

                    <div className="flex items-center gap-3 my-1">
                        <div className="flex-1 h-px bg-border-color" />
                        <span className="text-muted/60 text-xs font-medium">OR</span>
                        <div className="flex-1 h-px bg-border-color" />
                    </div>

                    <Link href="/login" className="block text-center text-sm text-muted hover:text-foreground transition-colors cursor-pointer">
                        Already have an account? <span className="font-semibold text-foreground">Login</span>
                    </Link>
                </form>
            </div>
        </div>
    );
}