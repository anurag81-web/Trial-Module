'use client';

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import * as Label from "@radix-ui/react-label";
import * as Separator from "@radix-ui/react-separator";
import { useTheme } from "next-themes";

export default function LoginPage() {
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const { resolvedTheme, setTheme } = useTheme();

    const handlePhoneChange = (e) => {
        setPhone(e.target.value.replace(/\D/g, "").slice(0, 10));
        setError("");
    };

    const handleLogin = () => {
        if (phone.length !== 10) {
            setError("Enter 10 digit phone number");
            return;
        }
        if (phone === "9810101010") {
            localStorage.setItem("isLoggedIn", "true");
            router.push("/verify-otp");
        } else {
            setError("Invalid phone number");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleLogin();
    };

    return (
        <div className="auth-glow relative min-h-screen bg-background flex items-center justify-center px-4 overflow-hidden">

            <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className="absolute top-5 right-5 h-9 w-9 rounded-full flex items-center justify-center bg-foreground/5 border border-border-color hover:bg-foreground/10 transition-all cursor-pointer text-base"
                aria-label="Toggle theme">
                {resolvedTheme === "dark" ? "☀️" : "🌙"}
            </button>

            <div className="relative w-full max-w-[420px] bg-card border border-border-color rounded-[2rem] p-8 shadow-xl">
                <div className="flex justify-center items-center gap-3 mb-7">
                    <Image src="/images/logo.png" width={44} height={44} alt="Logo" className="w-11 h-11 object-cover rounded-xl" />
                    <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
                        <span className="text-[#C4787A]">Mero</span>{" "}
                        <span className="text-[#f40047]">Hisab</span>
                    </h1>
                </div>

                <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-1">Login to continue</h2>
                <p className="text-muted text-sm mb-7">Enter your mobile number to proceed</p>

                <div className="space-y-4">
                    <div>
                        <Label.Root className="text-muted text-xs mb-2 block font-medium tracking-wide">Phone Number</Label.Root>
                        <div className="flex items-center bg-background border border-border-color rounded-2xl px-4 py-3.5 focus-within:border-blue-500/60 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                            <span className="text-muted text-sm mr-3 select-none font-medium">+977</span>
                            <div className="w-px h-4 bg-border-color mr-3 flex-shrink-0" />
                            <input value={phone} onChange={handlePhoneChange} onKeyDown={handleKeyDown} type="tel" placeholder="98XXXXXXXX"
                                className="w-full bg-transparent text-foreground text-sm outline-none placeholder:text-muted/50 tracking-wider caret-blue-500"/>
                        </div>
                    </div>
                    {error && (
                        <p className="text-red-500 text-xs text-center font-medium">{error}</p>
                    )}

                    <button onClick={handleLogin}
                        className="w-full bg-[#C61515] hover:bg-[#e01010] text-white font-semibold py-3.5 rounded-2xl active:scale-[0.98] transition-all cursor-pointer shadow-sm shadow-red-900/20">
                        Send OTP
                    </button>

                    <div className="flex items-center gap-3 my-1">
                        <Separator.Root className="flex-1 h-px bg-border-color" />
                        <span className="text-muted/60 text-xs font-medium">OR</span>
                        <Separator.Root className="flex-1 h-px bg-border-color" />
                    </div>

                    <Link href="/signup" className="block text-center text-sm text-muted hover:text-foreground transition-colors">
                        Register new user
                    </Link>
                </div>
            </div>
        </div>
    );
}