'use client';

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import * as Label from "@radix-ui/react-label";
import * as Separator from "@radix-ui/react-separator";

export default function LoginPage() {
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

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

    return (
        <div className="relative min-h-screen bg-[#161618] flex items-center justify-center px-4 overflow-hidden">
            <div className="relative w-full max-w-[440px] bg-[#222124]/90 border border-white/[0.08] rounded-[2.5rem] p-8">

                <div className="flex justify-center items-center gap-3 mb-6">
                    <Image src="/images/logo.png" width={48} height={48} alt="Logo" className="w-12 h-12 object-cover rounded-2xl" />
                    <h1 className="text-xl sm:text-2xl font-semibold">
                        <span className="text-[#C4787A]">Mero</span>{" "}
                        <span className="text-[#f40047]">Hisab</span>
                    </h1>
                </div>

                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-1">Login to continue</h2>
                <p className="text-white/40 text-sm mb-6">Enter your mobile number to proceed</p>

                <div className="space-y-4">
                    <div>
                        <Label.Root className="text-white/40 text-xs mb-2 block">Phone Number</Label.Root>
                        <div className="flex items-center bg-white/[0.04] border border-white/[0.08] rounded-2xl px-4 py-4 focus-within:border-white/20 transition">
                            <span className="text-white/60 text-sm mr-3 select-none">+977</span>
                            <input value={phone} onChange={handlePhoneChange} type="tel" placeholder="98XXXXXXXX"
                                className="w-full bg-transparent text-white text-sm outline-none placeholder:text-white/20 tracking-wider"
                            />
                        </div>
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm text-center">{error}</p>
                    )}

                    <button
                        onClick={handleLogin} className="w-full bg-[#C61515] hover:bg-[#ff054e] text-white font-semibold py-4 rounded-2xl active:scale-[0.98] transition">
                        Send OTP
                    </button>

                    <div className="flex items-center gap-3 my-2">
                        <Separator.Root className="flex-1 h-px bg-white/[0.06]" />
                        <span className="text-white/20 text-xs">OR</span>
                        <Separator.Root className="flex-1 h-px bg-white/[0.06]" />
                    </div>

                    <Link href="/signup" className="block text-center text-sm text-white/60 hover:text-white transition">
                        Register new user
                    </Link>
                </div>

            </div>
        </div>
    );
}