"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        Promise.resolve().then(() => {
            setIsMounted(true);
        });
    }, []);

    if (!isMounted) {
        return null;
    }

    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
        router.push("/login");
        return null;
    }

    return <>{children}</>;
}
