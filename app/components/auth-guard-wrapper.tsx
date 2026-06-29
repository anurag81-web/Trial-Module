"use client";

import { usePathname } from "next/navigation";
import AuthGuard from "./auth-guard";

const publicPaths = ["/login", "/signup", "/verify-otp"];

export default function AuthGuardWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isPublic = publicPaths.includes(pathname);

    if (isPublic) {
        return <>{children}</>;
    }

    return <AuthGuard>{children}</AuthGuard>;
}
