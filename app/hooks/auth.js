import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
export default function useAuth() {
    const router = useRouter();
    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (!isLoggedIn) {
            router.push("/login");
        }
    }, [router]);
}
