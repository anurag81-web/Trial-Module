'use client';

import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import { unstable_OneTimePasswordField as OneTimePasswordField } from "radix-ui";
export default function VerifyOTPPage() {
    const [otp, setOtp] = useState("");
    const [timer, setTimer] = useState(60);
    const router = useRouter();

   useEffect(() => {
        if (timer === 0) return;
        const interval = setInterval(() => setTimer((t) => t - 1), 1000);
        return () => clearInterval(interval);
    }, [timer]);

    const handleVerify = async () => {
        if (otp.length < 6) return;
        if (otp === "123456") router.push("/home");
    };

    const handleResend = () => {
        setTimer(60);
        setOtp("");
    }

    return (
        <div className="relative min-h-screen bg-[#161618] flex items-center justify-center px-4 overflow-hidden">
            <div className="relative w-full max-w-[440px] bg-[#222124]/90 border border-white/[0.08] rounded-[2.5rem] p-8 ">
                <div className="flex flex-col justify-center items-center gap-3">
                    <h1 className="text-2xl font-semibold">Verify Your OTP</h1>
                    <p className="text-white/40 text-sm mb-6">Enter the 6-digit code sent to your phone</p>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <OneTimePasswordField.Root value={otp} onValueChange={setOtp} className="flex gap-3">
                        {Array.from({ length: 6 }).map((_, i) => (
                        <OneTimePasswordField.Input
                            key={i}
                            className="w-11 h-12 rounded-xl text-center text-white text-lg font-semibold bg-[#161618] border border-white/10 outline-none focus:border-white/30 transition-colors" />
                        ))}
                        <OneTimePasswordField.HiddenInput name="otp" />
                    </OneTimePasswordField.Root>

                    <button className="w-full bg-[#C61515] hover:bg-[#ff054e] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-4 px-4 rounded-2xl active:scale-[0.98] transition"
                        onClick={handleVerify}
                        disabled={otp.length !== 6}>
                        Verify OTP
                    </button>

                    <div className="w-full h-px bg-white/10" />

                    {timer > 0 ? (
                        <p className="text-white/30 text-xs text-center">
                            Resend OTP ⟳ after <span className="text-white/50">{timer}sec</span>
                        </p>
                    ) : (
                        <button onClick={handleResend} className="text-sm text-white/60 hover:text-white transition">
                            Resend OTP ⟳
                        </button>
                    )}

                </div>

            </div>
        </div>

    );
}
