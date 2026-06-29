'use client';

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

export default function VerifyOTPPage() {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [timer, setTimer] = useState(60);
    const router = useRouter();
    const { resolvedTheme, setTheme } = useTheme();
    const inputRefs = useRef([]);

    const otpString = otp.join("");

    useEffect(() => {
        if (timer === 0) return;
        const interval = setInterval(() => setTimer((t) => t - 1), 1000);
        return () => clearInterval(interval);
    }, [timer]);

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    const handleChange = (index, value) => {
        const digit = value.replace(/\D/g, "").slice(-1);
        const newOtp = [...otp];
        newOtp[index] = digit;
        setOtp(newOtp);

        if (digit && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace") {
            if (otp[index]) {
                const newOtp = [...otp];
                newOtp[index] = "";
                setOtp(newOtp);
            } else if (index > 0) {
                const newOtp = [...otp];
                newOtp[index - 1] = "";
                setOtp(newOtp);
                inputRefs.current[index - 1]?.focus();
            }
        } else if (e.key === "ArrowLeft" && index > 0) {
            inputRefs.current[index - 1]?.focus();
        } else if (e.key === "ArrowRight" && index < 5) {
            inputRefs.current[index + 1]?.focus();
        } else if (e.key === "Enter" && otpString.length === 6) {
            handleVerify();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
        if (!pasted) return;
        const newOtp = [...otp];
        for (let i = 0; i < 6; i++) {
            newOtp[i] = pasted[i] || "";
        }
        setOtp(newOtp);
        const focusIndex = Math.min(pasted.length, 5);
        inputRefs.current[focusIndex]?.focus();
    };

    const handleVerify = async () => {
        if (otpString.length < 6) return;
        if (otpString === "123456") router.push("/dashboard");
    };

    const handleResend = () => {
        setTimer(60);
        setOtp(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
    };

    return (
        <div className="auth-glow relative min-h-screen bg-background flex items-center justify-center px-4 overflow-hidden">

            <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className="absolute top-5 right-5 h-9 w-9 rounded-full flex items-center justify-center bg-foreground/5 border border-border-color hover:bg-foreground/10 transition-all cursor-pointer text-base"
                aria-label="Toggle theme">
                {resolvedTheme === "dark" ? "☀️" : "🌙"}
            </button>

            <div className="relative w-full max-w-[420px] bg-card border border-border-color rounded-[2rem] p-8 shadow-xl">

                <div className="flex flex-col items-center gap-2 mb-8">
                    <h1 className="text-2xl font-bold text-foreground tracking-tight">Verify OTP</h1>
                    <p className="text-muted text-sm text-center">Enter the 6-digit code sent to your phone</p>
                </div>

                <div className="flex flex-col items-center gap-6">

                    <div className="flex gap-2.5" onPaste={handlePaste}>
                        {otp.map((digit, i) => (
                            <input
                                key={i}
                                ref={(el) => { inputRefs.current[i] = el; }}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(i, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(i, e)}
                                className={`w-11 h-13 rounded-xl text-center text-foreground text-xl font-bold bg-background border-2 outline-none transition-all duration-150 caret-blue-500
                                    ${digit
                                        ? "border-blue-500 bg-blue-500/5 shadow-sm shadow-blue-500/20"
                                        : "border-border-color focus:border-blue-500/70 focus:bg-foreground/[0.03] focus:shadow-sm focus:shadow-blue-500/10"
                                    }
                                `}
                                aria-label={`OTP digit ${i + 1}`}
                            />
                        ))}
                    </div>

                    <div className="flex gap-1.5">
                        {otp.map((digit, i) => (
                            <div
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${digit ? "bg-blue-500 scale-110" : "bg-muted/30"}`}
                            />
                        ))}
                    </div>

                    <button
                        className="w-full bg-[#C61515] hover:bg-[#e01010] disabled:opacity-35 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-2xl active:scale-[0.98] transition-all cursor-pointer shadow-sm shadow-red-900/20"
                        onClick={handleVerify} disabled={otpString.length !== 6}>
                        Verify OTP
                    </button>

                    <div className="w-full h-px bg-border-color" />

                    {timer > 0 ? (
                        <p className="text-muted/70 text-xs text-center">
                            Resend OTP ⟳ after{" "}
                            <span className="text-foreground font-semibold tabular-nums">{timer}s</span>
                        </p>
                    ) : (
                        <button onClick={handleResend} className="text-sm text-muted hover:text-foreground transition-colors cursor-pointer font-medium">
                            Resend OTP ⟳
                        </button>
                    )}

                </div>
            </div>
        </div>
    );
}
